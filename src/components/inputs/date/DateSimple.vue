<template>
  <div
    :class="addPropClasses([$style.grid, $style[`grid--${labelPosition}`]])"
    :id="componentId"
  >
    <label
      :for="subId('date')"
      v-if="label"
      :class="[$style.label, $style[`label--${labelPosition}`]]"
    >
      {{ label }}
    </label>
    <input
      type="date"
      :placeholder="placeholder"
      :min="min"
      :max="max"
      :step="step"
      :id="subId('date')"
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
    type: Object,
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
    default: 'Date',
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

const { componentId, subId } = useComponentId();
const { addPropClasses } = usePropClasses(props);

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

.input:invalid {
  border-color: $error-dark;
}
</style>
