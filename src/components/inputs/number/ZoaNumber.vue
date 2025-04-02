<template>
  <div
    :aria-describedby="helpId"
    :aria-labelledby="labelId"
    :class="[$style.inputWrapper, disabled ? $style.disabled : '']"
  >
    <input
      :id="inputId"
      ref="target"
      v-model="value"
      :class="$style.input"
      :disabled="disabled"
      :max="max"
      :min="min"
      :placeholder="placeholder"
      :step="step"
      type="number"
    />
  </div>
</template>

<script setup>
import { inject, ref } from 'vue';
import { useChangeEmits } from '../common.js';

const props = defineProps({
  /**
   * @model
   */
  modelValue: {
    type: Number,
    default: null,
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
    type: Number,
    default: 0,
  },
  /**
   * The lowest valid number.
   */
  min: {
    type: Number,
    default: null,
  },
  /**
   * The highest valid number.
   */
  max: {
    type: Number,
    default: null,
  },
  /**
   * The granularity of accepted values; e.g. 1 allows any integer and 0.1 allows floats to one decimal place.
   */
  step: {
    type: Number,
    default: 1,
  },
});

const inputId = inject('inputId');
const labelId = inject('labelId');
const helpId = inject('helpId');
const disabled = inject('disabled');

const emit = defineEmits([
  /**
   * Emitted when the value changes; debounced if the delay prop is > 0.
   * @arg {number} newValue the new value
   */
  'change',
  /**
   * @ignore
   */
  'update:modelValue',
]);
const { value } = useChangeEmits(emit, props);

// ELEMENTS
const target = ref(null);

// EXPOSE
defineExpose({
  target,
});
</script>

<style module lang="scss">
@use '../inputs';
@use '../../../styles/palette';

.input:invalid {
  border-color: palette.$error-dark;
}

.inputWrapper.disabled {
  @include inputs.disabled;
}
</style>
