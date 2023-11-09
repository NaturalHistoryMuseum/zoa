<template>
  <div
    :class="addPropClasses([$style.grid, $style[`grid--${labelPosition}`]])"
    :id="componentId"
  >
    <label
      :for="subId('number')"
      v-if="label"
      :class="[$style.label, $style[`label--${labelPosition}`]]"
    >
      {{ label }}
    </label>
    <input
      type="number"
      :placeholder="placeholder"
      :min="min"
      :max="max"
      :step="step"
      :id="subId('number')"
      :class="$style.input"
      v-model="value"
    />
  </div>
</template>

<script setup>
import { useComponentId } from '../../utils/compid.js';
import { useChangeEmits } from '../common.js';
import { usePropClasses } from '../../utils/classes.js';

const props = defineProps({
  /**
   * @model
   */
  modelValue: {
    type: Number,
  },
  /**
   * Additional class(es) to add to the root element.
   */
  class: {
    type: [String, Array, null],
    default: null,
  },
  /**
   * Text for the input label.
   */
  label: {
    type: String,
    default: 'Number',
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

const { componentId, subId } = useComponentId();
const { addPropClasses } = usePropClasses(props);

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
