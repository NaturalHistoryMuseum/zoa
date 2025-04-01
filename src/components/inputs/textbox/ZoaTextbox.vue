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
      type="text"
      :placeholder="placeholder"
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
@use '../inputs';

.inputWrapper.disabled {
  @include inputs.disabled;
}
</style>
