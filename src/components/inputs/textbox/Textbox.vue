<template>
  <input
    type="text"
    :placeholder="placeholder"
    :id="inputId"
    :class="$style.input"
    v-model="value"
  />
</template>

<script setup>
import { useChangeEmits } from '../common.js';
import { inject } from 'vue';

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
});

const inputId = inject('inputId');

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
</script>

<style module lang="scss">
@import '../inputs';
</style>
