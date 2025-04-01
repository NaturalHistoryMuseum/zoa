<template>
  <div
    ref="container"
    :class="[$style.inputWrapper, disabled ? $style.disabled : '']"
    :aria-labelledby="labelId"
    :aria-describedby="helpId"
  >
    <div :class="$style.textboxWrapper">
      <input
        v-show="focused && !disabled"
        :id="inputId"
        ref="textbox"
        v-model="search"
        type="text"
        :placeholder="placeholder"
        :class="$style.input"
        :disabled="disabled"
      />
      <div
        v-show="!focused || disabled"
        :class="$style.input"
        tabindex="0"
        @focusin="startFocus"
      >
        {{ displayLabel }}
      </div>
      <font-awesome-icon
        icon="fa-solid fa-caret-down"
        :class="$style.arrow"
        @click="toggleFocus"
      />
    </div>
    <div v-if="focused && !disabled" ref="dropdown" :class="$style.options">
      <ul v-if="dropdownOptions.length > 0" :class="$style.optlist">
        <li
          v-for="item in dropdownOptions"
          :key="subId(`opt__${item.value}`)"
          :title="item.label"
          :class="[$style.listItem, $style.option]"
          :style="{ height: `${itemHeight}px` }"
        >
          <div>
            <zoa-input
              v-if="item.ix >= lowerVisible && item.ix <= upperVisible"
              v-model="value"
              zoa-type="radio"
              :label="item.label"
              label-position="right"
              :config="{ checkValue: item.value, name: subId('radio') }"
              @change="unfocus"
            />
          </div>
        </li>
      </ul>
      <div v-else :class="$style.noOptions">No options found</div>
    </div>
  </div>
</template>

<script setup>
import {
  onClickOutside,
  onKeyStroke,
  useFocus,
  useFocusWithin,
  useScroll,
} from '@vueuse/core';
import { debounce } from 'dettle';
import { fuzzySearch } from 'levenshtein-search';
import { computed, inject, ref } from 'vue';
import FontAwesomeIcon from '../../../icons.js';
import { ZoaInput } from '../../index.js';
import { useChangeEmits } from '../common.js';

const props = defineProps({
  /**
   * @model
   */
  modelValue: {
    type: String,
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
   * with `label`, `value`, and `order` keys (one of label/value required; order
   * is optional).
   */
  options: {
    type: Array,
    required: true,
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
const unfilteredOptions = computed(() => {
  let outputOptions = [];
  props.options.forEach((o) => {
    if (typeof o === 'object') {
      outputOptions.push({
        label: o.label || o.value,
        value: o.value || o.label,
        order: o.order == null ? null : o.order,
      });
    } else {
      outputOptions.push({ label: o, value: o });
    }
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

  let outputOptions;

  if (doSearch) {
    outputOptions = unfilteredOptions.value.filter((o) => {
      return checkMatch(o.label) || checkMatch(o.value);
    });
  } else {
    outputOptions = unfilteredOptions.value;
  }

  outputOptions.sort((a, b) => {
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

    return orderSort !== 0 ? orderSort : labelSort;
  });

  return outputOptions.map((o, i) => {
    o['ix'] = i;
    return o;
  });
});

// DISPLAY LABEL
const displayLabel = computed(() => {
  let matchingItem = unfilteredOptions.value.find(
    (o) => o.value === value.value,
  );
  if (matchingItem == null) {
    return props.placeholder || '--';
  } else {
    return matchingItem.label;
  }
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
    search.value = null;
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
  if (dropdownFocus.focused.value) {
    const selectedElement = dropdown.value.querySelector('label:focus');
    if (selectedElement) {
      value.value = selectedElement.control.value;
    }
  }
  if (!textboxFocus.focused.value) {
    // if they press enter in the textbox they may just be searching
    unfocus();
  }
});
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
    & > * {
      &:hover,
      &:focus,
      &:active {
        background: palette.$secondary;
      }
    }

    & label {
      height: 100%;
    }
  }

  &.option label {
    width: 100%;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
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
