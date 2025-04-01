<template>
  <div
    :class="[$style.inputWrapper, disabled ? $style.disabled : '']"
    :aria-labelledby="labelId"
    :aria-describedby="helpId"
  >
    <input
      :id="inputId"
      ref="target"
      v-model="value"
      type="number"
      :placeholder="placeholder"
      :min="min"
      :max="max"
      :step="step"
      :class="$style.input"
      :disabled="disabled"
    />
  </div>
</template>

<script setup>
import { useChangeEmits } from '../common.js';
import { inject, ref } from 'vue';

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
