<template>
  <div
    :class="$style.inputWrapper"
    :aria-labelledby="labelId"
    :aria-describedby="helpId"
  >
    <input
      type="number"
      :placeholder="placeholder"
      :min="min"
      :max="max"
      :step="step"
      :id="inputId"
      :class="$style.input"
      v-model="value"
    />
  </div>
</template>

<script setup>
import { useChangeEmits } from '../common.js';
import { inject } from 'vue';

const props = defineProps({
  /**
   * @model
   */
  modelValue: {
    type: Number,
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
</script>

<style module lang="scss">
@import '../inputs';

.input:invalid {
  border-color: $error-dark;
}
</style>
