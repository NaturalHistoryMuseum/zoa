<template>
  <div
    :class="[$style.inputWrapper, disabled ? $style.disabled : '']"
    :aria-labelledby="labelId"
    :aria-describedby="helpId"
  >
    <input
      type="date"
      :placeholder="placeholder"
      :min="min"
      :max="max"
      :step="step"
      :id="inputId"
      :class="$style.input"
      v-model="value"
      ref="target"
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
    type: Object,
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
    type: String,
    default: null,
  },
  /**
   * The earliest accepted date, in yyyy-mm-dd format.
   */
  min: {
    type: String,
    default: null,
  },
  /**
   * The latest accepted date, in yyyy-mm-dd format.
   */
  max: {
    type: String,
    default: null,
  },
  /**
   * The increment size (in days) from the minimum date; e.g. 2 would make every other day valid. `'any'` allows all values.
   */
  step: {
    type: [String, Number],
    default: 'any',
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

// ELEMENTS
const target = ref(null);

// EXPOSE
defineExpose({
  target,
});
</script>

<style module lang="scss">
@import '../inputs';

.inputWrapper.disabled {
  @include disabled;
}

.input:invalid {
  border-color: $error-dark;
}
</style>
