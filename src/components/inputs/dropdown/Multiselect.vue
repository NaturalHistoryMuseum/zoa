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
          @click="focused = !focused"
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
} from '@vueuse/core';
import FontAwesomeIcon from '../../../icons.js';
import ZoaCheckbox from '../checkbox/Checkbox.vue';
import { debounce } from 'dettle';

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
function _emitSearch(searchTerm) {
  emit('search', searchTerm);
}

const emitSearch = debounce(_emitSearch, props.searchDelay);
const _search = ref(null);
const search = computed({
  get() {
    return _search.value;
  },
  set(searchTerm) {
    _search.value = searchTerm;
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
      });
    } else {
      outputOptions.push({ label: o, value: o, group: null });
    }
  });
  return outputOptions;
});

const groupedOptions = computed(() => {
  let outputOptions = { root: [], groups: {} };
  dropdownOptions.value.forEach((opt) => {
    if (opt.group) {
      let group = outputOptions.groups[opt.group] || [];
      group.push(opt);
      outputOptions.groups[opt.group] = group;
    } else {
      outputOptions.root.push(opt);
    }
  });
  return outputOptions;
});

// elements
const container = ref(null);
const textbox = ref(null);
const dropdown = ref(null);

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

onClickOutside(container, () => {
  focused.value = false;
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

  &.option:not(.selectAll) > * {
    &:hover,
    &:focus {
      background: $secondary;
    }
  }
}

.selectAll {
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
