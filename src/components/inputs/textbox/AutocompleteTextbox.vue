<template>
  <div
    :class="[$style.inputWrapper, disabled ? $style.disabled : '']"
    ref="container"
    :aria-labelledby="labelId"
    :aria-describedby="helpId"
  >
    <input
      type="text"
      :placeholder="placeholder"
      :id="inputId"
      :class="$style.input"
      v-model="value"
      @focusin="focused = true"
      ref="textbox"
      :disabled="disabled"
    />
    <div :class="$style.options" v-if="focused && !disabled" ref="dropdown">
      <ul v-if="dropdownOptions.length > 0">
        <li
          v-for="opt in dropdownOptions"
          :class="$style.option"
          @click="setOption(opt.value)"
          tabindex="0"
        >
          <span>{{ opt.value }}</span>
          <input type="hidden" :value="opt.value" />
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
} from '@vueuse/core';
import { fuzzySearch } from 'levenshtein-search';

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
    default: 200,
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
   * with `value`, and `order` keys (value required; order is optional).
   */
  options: {
    type: Array,
  },
  /**
   * Enables internal list filtering based on the current value. Disable if implementing an external filter using emits.
   */
  enableSearch: {
    type: Boolean,
    default: false,
  },
});

const inputId = inject('inputId');
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
]);
const { value } = useChangeEmits(emit, props);

const dropdownOptions = computed(() => {
  const doSearch = props.enableSearch && value.value;
  const searchString = doSearch ? value.value.toLowerCase() : null;
  const checkMatch = (txt) => {
    return txt
      ? [...fuzzySearch(searchString, txt.toLowerCase(), 1)].length > 0
      : false;
  };

  let outputOptions = [];
  props.options.forEach((o) => {
    if (typeof o === 'object') {
      outputOptions.push({
        value: o.value,
        order: o.order == null ? null : o.order,
      });
    } else {
      outputOptions.push({ value: o });
    }
  });

  if (doSearch) {
    outputOptions = outputOptions.filter((o) => checkMatch(o.value));
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

    let valueSort = a.value.localeCompare(b.value);

    return orderSort !== 0 ? orderSort : valueSort;
  });
  return outputOptions;
});

// ELEMENTS
const container = ref(null);
const textbox = ref(null);
const dropdown = ref(null);

// EXPOSE
defineExpose({
  target: textbox,
});

const focused = ref(false);
const textboxFocus = useFocus(textbox);
const dropdownFocus = useFocusWithin(dropdown);

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
    dropdown.value.children[0].children[0].focus();
  } else if (dropdownFocus.focused.value) {
    const selectedElement = dropdown.value.querySelector('li:focus');
    if (!selectedElement || !selectedElement.nextElementSibling) {
      dropdown.value.children[0].children[0].focus();
    } else {
      selectedElement.nextElementSibling.focus();
    }
  }
});

onKeyStroke('ArrowUp', () => {
  if (dropdownOptions.value.length === 0) {
    return;
  }
  if (dropdownFocus.focused.value) {
    const selectedElement = dropdown.value.querySelector('li:focus');
    if (!selectedElement || !selectedElement.previousElementSibling) {
      textbox.value.focus();
    } else {
      selectedElement.previousElementSibling.focus();
    }
  }
});

onKeyStroke('Enter', () => {
  if (dropdownFocus.focused.value) {
    const selectedElement = dropdown.value.querySelector('li:focus');
    if (selectedElement) {
      setOption(selectedElement.querySelector('input').value);
    }
  }
  unfocus();
});

function setOption(text) {
  value.value = text;
  unfocus();
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
  max-height: 12em;
  overflow-y: auto;
  z-index: 100;

  & > ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
}

.option {
  padding: vars.$padding;

  &:hover,
  &:focus {
    background: palette.$secondary;
  }

  &:first-child {
    border-radius: vars.$rounding vars.$rounding 0 0;
  }

  &:last-child {
    border-radius: 0 0 vars.$rounding vars.$rounding;
  }
}

.noOptions {
  font-size: 0.8em;
  font-style: italic;
  padding: vars.$padding;
  opacity: 0.8;
}
</style>
