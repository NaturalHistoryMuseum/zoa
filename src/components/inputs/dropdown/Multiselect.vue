<template>
  <div
    :class="[$style.grid, $style[`grid--${labelPosition}`]]"
    :id="componentId"
  >
    <label
      :for="subId('textbox')"
      v-if="label && labelPosition !== 'none'"
      :class="[$style.label, $style[`label--${labelPosition}`]]"
    >
      {{ label }}
    </label>
    <div :class="$style.wrapper" ref="container">
      <div :class="$style.textboxWrapper">
        <input
          type="text"
          :placeholder="placeholder"
          :id="subId('search')"
          :class="$style.input"
          v-model="search"
          v-show="focused"
          ref="textbox"
        />
        <div
          :class="$style.input"
          tabindex="0"
          v-show="!focused"
          @focusin="startFocus"
        >
          {{ value ? value.length : 0 }} {{ itemString }} selected
        </div>
        <font-awesome-icon
          icon="fa-solid fa-caret-down"
          :class="$style.arrow"
          @click="toggleFocus"
        />
      </div>
      <div :class="$style.options" v-if="focused" ref="dropdown">
        <ul v-if="dropdownOptions.length > 0" :class="$style.optlist">
          <li :class="[$style.selectAll, $style.listItem, $style.option]">
            <ZoaCheckbox
              label="Select all"
              label-position="right"
              v-model="selectAll"
            />
          </li>
          <li :class="[$style.selectAll, $style.listItem, $style.option]">
            <ZoaCheckbox
              label="Select visible"
              label-position="right"
              v-model="selectVisible"
            />
          </li>
          <li
            v-for="opt in groupedOptions.root"
            :class="[$style.listItem, $style.option]"
          >
            <ZoaCheckbox
              :label="opt.label"
              label-position="right"
              :check-value="opt.value"
              :name="subId('checkboxes')"
              v-model="value"
              v-if="opt.ix >= lowerVisible && opt.ix <= upperVisible"
            />
          </li>
          <li
            v-for="(options, group) in groupedOptions.groups"
            :class="[$style.listItem, $style.subgroup]"
          >
            <div @click="selectGroup(group)">{{ group }}</div>
            <ul :class="$style.optlist">
              <li
                v-for="opt in options"
                :class="[$style.listItem, $style.option]"
              >
                <ZoaCheckbox
                  :label="opt.label"
                  label-position="right"
                  :check-value="opt.value"
                  :name="subId('checkboxes')"
                  v-model="value"
                  v-if="opt.ix >= lowerVisible && opt.ix <= upperVisible"
                />
              </li>
            </ul>
          </li>
        </ul>
        <div :class="$style.noOptions" v-else>No options found</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useComponentId } from '../../utils/compid.js';
import { useChangeEmits } from '../common.js';
import { computed, ref, watch } from 'vue';
import {
  onClickOutside,
  onKeyStroke,
  useFocusWithin,
  useFocus,
  useScroll,
} from '@vueuse/core';
import FontAwesomeIcon from '../../../icons.js';
import ZoaCheckbox from '../checkbox/Checkbox.vue';
import { debounce } from 'dettle';
import { fuzzySearch } from 'levenshtein-search';

const props = defineProps({
  /**
   * @model
   */
  modelValue: {
    type: Array,
  },
  /**
   * Text for the input label.
   */
  label: {
    type: String,
    default: 'Multiselect',
  },
  /**
   * Position of the input label (or none).
   * @values left, right, above, below, none
   */
  labelPosition: {
    type: String,
    default: 'above',
  },
  /**
   * Debounce delay for the `change` event, in ms.
   */
  delay: {
    type: Number,
    default: 0,
  },
  /**
   * Text to display in the blank input.
   */
  placeholder: {
    type: [String, undefined],
    default: null,
  },
  /**
   * The options available to select. Each item can be a string, or an object with `label` and `value` keys.
   */
  options: {
    type: Array,
  },
  /**
   * The string used to describe the items being selected, in singular form e.g. "resource", "genus".
   */
  itemName: {
    type: String,
    default: 'item',
  },
  /**
   * The plural form of itemName, e.g. "resources", "genera". If null (default), an "s" will be added to itemName.
   */
  itemNamePlural: {
    type: [String, null],
    default: null,
  },
  /**
   * Debounce delay for the `search` event, in ms.
   */
  searchDelay: {
    type: Number,
    default: 200,
  },
  /**
   * Enables an internal list filtering based on the search value. Disable if implementing an external filter using the emit.
   */
  enableSearch: {
    type: Boolean,
    default: false,
  },
});

const { componentId, subId } = useComponentId();

const emit = defineEmits([
  /**
   * Emitted when the value changes; debounced if the delay prop is > 0.
   * @arg {string} newValue the new value
   */
  'change',
  /**
   * @ignore
   */
  'update:modelValue',
  /**
   * Emitted when the search value changes; debounced if the searchDelay prop is > 0.
   * @arg {string} searchTerm the search term
   */
  'search',
]);
const { value } = useChangeEmits(emit, props);
if (!Array.isArray(value)) {
  // needs to be initialised as an array or the checkboxes will all select as
  // one, but returning an empty array as the default prop breaks reactivity
  value.value = [];
}

// searching
const _search = ref(null);
const emitSearch = debounce((searchTerm) => {
  emit('search', searchTerm);
}, props.searchDelay);
const updateSearch = debounce((searchTerm) => {
  _search.value = searchTerm;
}, props.searchDelay);
const search = computed({
  get() {
    return _search.value;
  },
  set(searchTerm) {
    updateSearch(searchTerm);
    emitSearch(searchTerm);
  },
});

// processed props
const itemString = computed(() => {
  const isPlural = value.value ? value.value.length !== 1 : true;
  if (isPlural) {
    return props.itemNamePlural || props.itemName + 's';
  }
  return props.itemName;
});

const dropdownOptions = computed(() => {
  let outputOptions = [];
  props.options.forEach((o) => {
    if (typeof o === 'object') {
      outputOptions.push({
        label: o.label || o.value,
        value: o.value || o.label,
        group: o.group || null,
        order: o.order || null,
      });
    } else {
      outputOptions.push({ label: o, value: o, group: null });
    }
  });
  outputOptions.sort((a, b) => {
    let groupSort;
    if (a.group === b.group) {
      groupSort = 0;
    } else if (!a.group || !b.group) {
      groupSort = !a.group ? -1 : 1;
    } else {
      groupSort = a.group.localeCompare(b.group);
    }

    let orderSort = 0;
    if (a.order || b.order) {
      orderSort = a.order && b.order ? a.order - b.order : a.order ? 1 : -1;
    }

    let labelSort = a.label.localeCompare(b.label);

    return groupSort !== 0
      ? groupSort
      : orderSort !== 0
      ? orderSort
      : labelSort;
  });
  return outputOptions;
});

const groupedOptions = computed(() => {
  const doSearch = props.enableSearch && search.value;
  const searchString = doSearch ? search.value.toLowerCase() : null;
  const checkMatch = (txt) => {
    return doSearch
      ? [...fuzzySearch(searchString, txt.toLowerCase(), 1)].length > 0
      : true;
  };

  let outputOptions = { root: [], groups: {} };
  dropdownOptions.value.forEach((opt) => {
    if (opt.group) {
      let group = outputOptions.groups[opt.group] || [];
      let groupMatches = checkMatch(opt.group);
      let optMatches = checkMatch(opt.value) || checkMatch(opt.label);
      if (groupMatches || optMatches) {
        group.push(opt);
        outputOptions.groups[opt.group] = group;
      }
    } else {
      if (checkMatch(opt.value) || checkMatch(opt.label)) {
        outputOptions.root.push(opt);
      }
    }
  });

  let orderedOutputOptions = { root: [], groups: {} };
  let ix = 2; // just for showing/hiding elements based on scroll position; starts at 2 to accomodate selectAll/selectVisible
  outputOptions.root.forEach((o) => {
    ix += 1;
    o.ix = ix;
    orderedOutputOptions.root.push(o);
  });
  Object.entries(outputOptions.groups).forEach((g) => {
    orderedOutputOptions.groups[g[0]] = [];
    ix += 1; // add an extra space for the group header
    g[1].forEach((o) => {
      ix += 1;
      o.ix = ix;
      orderedOutputOptions.groups[g[0]].push(o);
    });
  });
  return orderedOutputOptions;
});

// elements
const container = ref(null);
const textbox = ref(null);
const dropdown = ref(null);

// scrolling
const { y } = useScroll(dropdown);
const scrollY = computed(() => {
  // y from useScroll doesn't reset when the dropdown element is reloaded until
  // the user starts scrolling, which is obviously not ideal. Using scrollTop
  // alone/directly doesn't update quickly/often enough, so we have to combine.
  if (
    !dropdown.value ||
    (dropdown.value && y.value !== dropdown.value.scrollTop)
  ) {
    return 0;
  }
  return y.value;
});
const optionHeight = 40; // set in CSS as height of .option
const buffer = 10; // how many items either side of the visible items should be loaded
const dropdownHeight = computed(() => {
  try {
    return dropdown.value.clientHeight;
  } catch {
    return 500;
  }
});
const lowerVisible = computed(() => {
  // doesn't matter if it's < n options
  return Math.floor(scrollY.value / optionHeight) - buffer;
});
const upperVisible = computed(() => {
  // doesn't matter if it's > n options
  return Math.ceil((scrollY.value + dropdownHeight.value) / optionHeight);
});

// focus and keyboard navigation
const focused = ref(false);
const textboxFocus = useFocus(textbox);
const dropdownFocus = useFocusWithin(dropdown);

function startFocus() {
  focused.value = true;
  setTimeout(() => {
    textbox.value.focus();
  }, 50);
}

function unfocus() {
  try {
    container.value.blur();
    textbox.value.blur();
    dropdown.value.blur();
  } catch {
    // doesn't really matter
  }
  focused.value = false;
}

function toggleFocus() {
  focused.value ? unfocus() : startFocus();
}

onClickOutside(container, () => {
  unfocus();
});

onKeyStroke('ArrowDown', () => {
  if (dropdownOptions.value.length === 0) {
    return;
  }
  if (textboxFocus.focused.value) {
    dropdown.value.children[0].children[0].children[0].focus();
  } else if (dropdownFocus.focused.value) {
    const labels = [...dropdown.value.querySelectorAll('label')];
    const selectedElement = dropdown.value.querySelector('label:focus');
    if (!selectedElement) {
      labels[0].focus();
    } else {
      const ix = labels.findIndex((lbl) => lbl === selectedElement);
      if (ix === labels.length - 1) {
        labels[0].focus();
      } else {
        labels[ix + 1].focus();
      }
    }
  }
});

onKeyStroke('ArrowUp', () => {
  if (dropdownOptions.value.length === 0) {
    return;
  }
  if (dropdownFocus.focused.value) {
    const labels = [...dropdown.value.querySelectorAll('label')];
    const selectedElement = dropdown.value.querySelector('label:focus');
    if (!selectedElement) {
      textbox.value.focus();
    } else {
      const ix = labels.findIndex((lbl) => lbl === selectedElement);
      if (ix === 0) {
        textbox.value.focus();
      } else {
        labels[ix - 1].focus();
      }
    }
  }
});

onKeyStroke('Enter', () => {
  unfocus();
});

// select/deselect multiple checkboxes at once
/**
 * On checking, selects all options (visible and invisible).
 */
const selectAll = computed({
  get() {
    const options = dropdownOptions.value;
    if (value.value.length !== options.length) {
      return false;
    }
    const unchecked = options.filter((o) => !value.value.includes(o.value));
    return unchecked.length === 0;
  },
  set(toggleValue) {
    if (toggleValue) {
      value.value = dropdownOptions.value.map((o) => o.value);
    } else {
      value.value = [];
    }
  },
});

/**
 * On checking, selects all VISIBLE options.
 */
const selectVisible = computed({
  get() {
    let options = groupedOptions.value.root.map((o) => o.value);
    Object.values(groupedOptions.value.groups).forEach((g) => {
      options = options.concat(g.map((o) => o.value));
    });
    if (value.value.length < options.length) {
      return false;
    }
    const unchecked = options.filter((o) => !value.value.includes(o));
    return unchecked.length === 0;
  },
  set(toggleValue) {
    let options = groupedOptions.value.root.map((o) => o.value);
    Object.values(groupedOptions.value.groups).forEach((g) => {
      options = options.concat(g.map((o) => o.value));
    });
    if (toggleValue) {
      const unchecked = options.filter((o) => !value.value.includes(o));
      value.value = value.value.concat(unchecked);
    } else {
      value.value = value.value.filter((o) => !options.includes(o));
    }
  },
});

/**
 * Selects all VISIBLE group options.
 * @param groupName
 */
function selectGroup(groupName) {
  const group = groupedOptions.value.groups[groupName].map((o) => o.value);
  const unchecked = group.filter((o) => !value.value.includes(o));
  if (unchecked.length > 0) {
    unchecked.forEach((o) => {
      value.value.push(o);
    });
  } else {
    value.value = value.value.filter((o) => !group.includes(o));
  }
}
</script>

<style module lang="scss">
@import '../inputs';

.wrapper {
  position: relative;
}

.options {
  position: absolute;
  background: white;
  border: 1px solid $grey;
  border-radius: $rounding;
  width: 100%;
  margin-top: 2px;
  font-size: 0.9em;
  max-height: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
}

ul.optlist {
  padding: 0;
  margin: 0;
  list-style: none;
}

.listItem {
  cursor: pointer;

  &:first-child {
    border-radius: $rounding $rounding 0 0;
  }

  &:last-child {
    border-radius: 0 0 $rounding $rounding;
  }

  & > * {
    padding: $padding;
    cursor: pointer;
  }

  &.option {
    height: 40px; // if this is changed, also change optionHeight const above

    &:not(.selectAll) > * {
      &:hover,
      &:focus {
        background: $secondary;
      }
    }

    & > label {
      height: 100%;
    }
  }
}

.selectAll + .selectAll {
  border-bottom: 2px solid $primary;
}

.subgroup {
  border-top: 2px solid $primary;

  & > .optlist label {
    padding-left: calc($h-pad * 2);
  }

  .selectAll + & {
    border-top: none;
  }
}

.selectAll > *,
.subgroup > *:first-child {
  &:hover,
  &:focus {
    background: $primary;
  }
}

.noOptions {
  font-size: 0.8em;
  font-style: italic;
  padding: $padding;
  opacity: 0.8;
}

.textboxWrapper {
  position: relative;

  & > .arrow {
    position: absolute;
    top: 0;
    right: 1em;
    bottom: 0;
    margin: auto;
    padding-left: 1em;
    cursor: pointer;
  }
}
</style>
