<template>
  <div
    :class="[$style.inputWrapper, disabled ? $style.disabled : '']"
    ref="container"
    :aria-labelledby="labelId"
    :aria-describedby="helpId"
  >
    <div :class="$style.textboxWrapper">
      <input
        type="text"
        :placeholder="placeholder"
        :id="inputId"
        :class="$style.input"
        v-model="search"
        v-show="focused && !disabled"
        ref="textbox"
        :disabled="disabled"
      />
      <div
        :class="$style.input"
        tabindex="0"
        v-show="!focused || disabled"
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
    <div :class="$style.options" v-if="focused && !disabled" ref="dropdown">
      <ul v-if="dropdownOptions.length > 0" :class="$style.optlist">
        <li
          title="Select all"
          :class="[$style.selectAll, $style.listItem, $style.option]"
          :style="{ height: `${itemHeight}px` }"
        >
          <zoa-input
            zoa-type="checkbox"
            label="Select all"
            label-position="right"
            v-model="selectAll"
          />
        </li>
        <li
          title="Select results"
          :class="[$style.selectAll, $style.listItem, $style.option]"
          :style="{ height: `${itemHeight}px` }"
          v-if="!!search"
        >
          <zoa-input
            zoa-type="checkbox"
            label="Select results"
            label-position="right"
            v-model="selectFiltered"
          />
        </li>
        <li
          v-for="item in dropdownOptions"
          :title="item.label"
          :class="[
            $style.listItem,
            item.kind === 'group' ? $style.subgroup : $style.option,
          ]"
          :style="{ height: `${itemHeight}px` }"
        >
          <div @click="selectGroup(item.group)" v-if="item.kind === 'group'">
            {{ item.label }}
          </div>
          <div v-else>
            <zoa-input
              zoa-type="checkbox"
              :label="item.label"
              label-position="right"
              :config="{ checkValue: item.value, name: subId('checkboxes') }"
              v-model="value"
              v-if="item.ix >= lowerVisible && item.ix <= upperVisible"
            />
          </div>
        </li>
      </ul>
      <div :class="$style.noOptions" v-else>No options found</div>
    </div>
  </div>
</template>

<script setup>
import { useChangeEmits } from '../common.js';
import { computed, inject, ref } from 'vue';
import {
  onClickOutside,
  onKeyStroke,
  useFocusWithin,
  useFocus,
  useScroll,
} from '@vueuse/core';
import FontAwesomeIcon from '../../../icons.js';
import { ZoaInput } from '../../index.js';
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
   * The options available to select. Each item can be a string, or an object
   * with `label`, `value`, `group`, and `order` keys (one of label/value
   * required; group and order are optional).
   */
  options: {
    type: Array,
    required: true,
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
  /**
   * Override the height (in px) of each list item. May be necessary if font family or size is changed from the default.
   */
  itemHeight: {
    type: Number,
    default: 38,
  },
});

const inputId = inject('inputId');
const subId = inject('subId');
const labelId = inject('labelId');
const helpId = inject('helpId');
const disabled = inject('disabled');

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
   * @ignore Custom events must be emitted through the zoaEvent function.
   */
  'zoaEvent',
  /**
   * Emitted when the search value changes; debounced if the searchDelay prop is > 0.
   * @arg {string} searchTerm the search term
   */
  'search',
]);
const { value, zoaEvent } = useChangeEmits(emit, props);
if (!Array.isArray(value)) {
  // needs to be initialised as an array or the checkboxes will all select as
  // one, but returning an empty array as the default prop breaks reactivity
  value.value = [];
}

// SEARCH
// to show to the user; should be updated immediately
const displaySearch = ref(null);
// to pass to the internal search function; update is debounced
const activeSearch = ref(null);
const emitSearch = debounce((searchTerm) => {
  activeSearch.value = searchTerm;
  zoaEvent('search', searchTerm);
}, props.searchDelay);
const search = computed({
  get() {
    return displaySearch.value;
  },
  set(searchTerm) {
    displaySearch.value = searchTerm;
    emitSearch(searchTerm);
  },
});

// PROP PROCESSING
const itemString = computed(() => {
  const isPlural = value.value ? value.value.length !== 1 : true;
  if (isPlural) {
    return props.itemNamePlural || props.itemName + 's';
  }
  return props.itemName;
});

const unfilteredOptions = computed(() => {
  let outputOptions = [];
  props.options.forEach((o) => {
    if (typeof o === 'object') {
      outputOptions.push({
        label: o.label || o.value,
        value: o.value || o.label,
        group: o.group || null,
        order: o.order == null ? null : o.order,
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
    if (a.order != null || b.order != null) {
      orderSort =
        a.order != null && b.order != null
          ? a.order - b.order
          : a.order != null
            ? -1
            : 1;
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

const dropdownOptions = computed(() => {
  const doSearch = props.enableSearch && activeSearch.value;
  const searchString = doSearch ? activeSearch.value.toLowerCase() : null;
  const checkMatch = (txt) => {
    return txt
      ? [...fuzzySearch(searchString, txt.toLowerCase(), 1)].length > 0
      : false;
  };

  let filteredOptions;
  if (doSearch) {
    filteredOptions = unfilteredOptions.value.filter((o) => {
      return checkMatch(o.group) || checkMatch(o.label) || checkMatch(o.value);
    });
  } else {
    filteredOptions = unfilteredOptions.value;
  }

  let items = [];
  let grouped = Object.entries(
    Object.groupBy(filteredOptions, ({ group }) => group),
  );
  let ix = searchString ? 2 : 1; // skip the multiselect checkboxes
  grouped.forEach((g) => {
    let groupName = g[0];
    let groupOptions = g[1];
    if (groupName && groupName !== 'null') {
      items.push({
        ix: ix,
        kind: 'group',
        label: groupName,
        value: groupName,
        group: groupName,
      });
      ix += 1;
    }
    items = items.concat(
      groupOptions.map((o, i) => {
        return {
          ix: ix + i,
          kind: 'option',
          label: o.label,
          value: o.value,
          group: o.group,
        };
      }),
    );
    ix += groupOptions.length;
  });
  return items;
});

// ELEMENTS
const container = ref(null);
const textbox = ref(null);
const dropdown = ref(null);

// EXPOSE
defineExpose({
  target: textbox,
});

// SCROLLING
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
const buffer = 10; // how many items either side of the visible items should be loaded
const dropdownHeight = computed(() => {
  try {
    return dropdown.value.clientHeight;
  } catch {
    return 500;
  }
});
const lowerVisible = computed(() => {
  if (dropdownOptions.value.length < buffer * 2) {
    return 0;
  }
  // doesn't matter if it's < n options
  return Math.floor(scrollY.value / props.itemHeight) - buffer;
});
const upperVisible = computed(() => {
  if (dropdownOptions.value.length < buffer * 2) {
    return dropdownOptions.value.length + buffer;
  }
  // doesn't matter if it's > n options
  return Math.ceil((scrollY.value + dropdownHeight.value) / props.itemHeight);
});

// FOCUS
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

// KEYBINDINGS
onKeyStroke('ArrowDown', () => {
  if (unfilteredOptions.value.length === 0) {
    return;
  }
  const labels = [...dropdown.value.querySelectorAll('label')];
  if (textboxFocus.focused.value) {
    labels[0].focus();
  } else if (dropdownFocus.focused.value) {
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
  if (unfilteredOptions.value.length === 0) {
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
  if (!textboxFocus.focused.value) {
    // if they press enter in the textbox they may just be searching
    unfocus();
  }
});

// select/deselect multiple checkboxes at once
/**
 * On checking, selects all options (the full unfiltered list).
 */
const selectAll = computed({
  get() {
    const options = unfilteredOptions.value;
    if (value.value == null || value.value.length !== options.length) {
      return false;
    }
    const unchecked = options.filter((o) => !value.value.includes(o.value));
    return unchecked.length === 0;
  },
  set(toggleValue) {
    if (toggleValue) {
      value.value = unfilteredOptions.value.map((o) => o.value);
    } else {
      value.value = [];
    }
  },
});

/**
 * On checking, selects all FILTERED options.
 */
const selectFiltered = computed({
  get() {
    let options = dropdownOptions.value
      .filter((i) => i.kind === 'option')
      .map((o) => o.value);
    if (value.value == null || value.value.length < options.length) {
      return false;
    }
    const unchecked = options.filter((o) => !value.value.includes(o));
    return unchecked.length === 0;
  },
  set(toggleValue) {
    let options = dropdownOptions.value
      .filter((i) => i.kind === 'option')
      .map((o) => o.value);
    const checked = value.value ? value.value : [];
    const unchecked = options.filter((o) => !checked.includes(o));
    if (toggleValue) {
      value.value = checked.concat(unchecked);
    } else {
      value.value = checked.filter((o) => !options.includes(o));
    }
  },
});

/**
 * Selects all FILTERED group options.
 * @param groupName
 */
function selectGroup(groupName) {
  const group = dropdownOptions.value
    .filter((o) => o.kind === 'option' && o.group === groupName)
    .map((o) => o.value);
  value.value = value.value ? value.value : []; // double check it's not null
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
@use '../inputs';
@use '../../../styles/palette';
@use '../../../styles/vars';

.inputWrapper {
  position: relative;

  &.disabled {
    @include inputs.disabled;
  }
}

.options {
  position: absolute;
  background: white;
  border: 1px solid palette.$grey;
  border-radius: vars.$rounding;
  width: 100%;
  margin-top: 2px;
  font-size: 0.9em;
  max-height: 500px;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 9999;
}

ul.optlist {
  padding: 0;
  margin: 0;
  list-style: none;
}

.listItem {
  &:first-child {
    border-radius: vars.$rounding vars.$rounding 0 0;
  }

  &:last-child {
    border-radius: 0 0 vars.$rounding vars.$rounding;
  }

  & > * {
    padding: vars.$padding;
  }

  &.option {
    &:not(.selectAll) > * {
      &:hover,
      &:focus {
        background: palette.$secondary;
      }
    }

    & label {
      height: 100%;
    }
  }

  &.option label,
  &.subgroup > div {
    width: 100%;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
  }
}

.selectAll + .option:not(.selectAll) {
  border-top: 2px solid palette.$primary;
}

.subgroup {
  border-top: 2px solid palette.$primary;

  & > .optlist label {
    padding-left: calc(vars.$h-pad * 2);
  }
}

.selectAll > *,
.subgroup > *:first-child {
  &:hover,
  &:focus {
    background: palette.$primary;
  }
}

.noOptions {
  font-size: 0.8em;
  font-style: italic;
  padding: vars.$padding;
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
