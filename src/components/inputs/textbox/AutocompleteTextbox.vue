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
          <span>{{ opt.label }}</span>
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
   * with `label`, `value`, and `order` keys (one of label/value required; order
   * is optional).
   */
  options: {
    type: Array,
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
@import '../inputs';

.inputWrapper {
  position: relative;

  &.disabled {
    @include disabled;
  }
}

.options {
  position: absolute;
  background: white;
  border: 1px solid $grey;
  border-radius: $rounding;
  width: 100%;
  margin-top: 2px;
  font-size: 0.9em;
  max-height: 12em;
  overflow-y: auto;

  & > ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
}

.option {
  padding: $padding;

  &:hover,
  &:focus {
    background: $secondary;
  }

  &:first-child {
    border-radius: $rounding $rounding 0 0;
  }

  &:last-child {
    border-radius: 0 0 $rounding $rounding;
  }
}

.noOptions {
  font-size: 0.8em;
  font-style: italic;
  padding: $padding;
  opacity: 0.8;
}
</style>
