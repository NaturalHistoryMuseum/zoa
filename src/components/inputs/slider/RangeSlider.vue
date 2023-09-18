<template>
  <div
    :class="[$style.grid, $style[`grid--${labelPosition}`]]"
    :id="componentId"
  >
    <span
      v-if="label && labelPosition !== 'none'"
      :class="[$style.label, $style[`label--${labelPosition}`]]"
    >
      {{ label }}
    </span>
    <div>
      <ZoaSlider
        :min="min"
        :max="max"
        :valid-max="maxLower"
        :step="step"
        v-model="valueLower"
        :label="labelLower"
        :label-position="labelsRight ? 'right' : 'left'"
        value-label-position="above"
        :placeholder-position="0.25"
      />
      <ZoaSlider
        :min="min"
        :valid-min="minUpper"
        :max="max"
        :step="step"
        v-model="valueUpper"
        :label="labelUpper"
        :label-position="labelsRight ? 'right' : 'left'"
        :placeholder-position="0.75"
        :active-track-right="true"
      />
    </div>
  </div>
</template>

<script setup>
import { useComponentId } from '../../utils/compid.js';
import { useChangeEmits } from '../common.js';
import { computed, ref, watch } from 'vue';
import ZoaSlider from './Slider.vue';

const props = defineProps({
  /**
   * @model
   */
  modelValue: {
    type: Array,
  },
  /**
   * Text for the input label.
   */
  label: {
    type: String,
    default: 'Range',
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
   * Number to set both sliders at initially.
   */
  placeholder: {
    type: Number,
    default: null,
  },
  /**
   * The lowest number displayed on both sliders (will only be accessible by the lower value slider).
   */
  min: {
    type: Number,
    default: 0,
  },
  /**
   * The highest number displayed on both sliders (will only be accessible by the upper value slider).
   */
  max: {
    type: Number,
    default: 100,
  },
  /**
   * The granularity of accepted values; e.g. 1 allows any integer and 0.1 allows floats to one decimal place. Also the minimum gap between the two values.
   */
  step: {
    type: Number,
    default: 1,
  },
  /**
   * The text label for the lower value slider.
   */
  labelLower: {
    type: String,
    default: 'Lower',
  },
  /**
   * The text label for the upper value slider.
   */
  labelUpper: {
    type: String,
    default: 'Upper',
  },
  /**
   * If true, place the slider text labels on the right rather than the left.
   */
  labelsRight: {
    type: Boolean,
    default: false,
  },
});

const { componentId, subId } = useComponentId();

const emit = defineEmits([
  /**
   * Emitted when the value changes; debounced if the delay prop is > 0.
   * @arg {Array} newValue the new value
   */
  'change',
  /**
   * @ignore
   */
  'update:modelValue',
]);
const { valueChanged } = useChangeEmits(emit, props);

const valueLower = ref(null);
const valueUpper = ref(null);

const maxLower = computed(() => {
  return Math.max(
    Number(valueUpper.value) - Number(props.step),
    Number(props.min),
  );
});
const minUpper = computed(() => {
  return Math.min(
    Number(valueLower.value) + Number(props.step),
    Number(props.max),
  );
});

const range = computed(() => {
  // never return a lower value that's higher than the upper value or vice versa
  const lower = Math.min(valueLower.value, maxLower.value);
  const upper = Math.max(valueUpper.value, minUpper.value);
  return [lower, upper];
});

watch(range, () => {
  valueChanged(range.value);
});
</script>

<style module lang="scss">
@import '../inputs';

.label {
  &.label--above {
    margin-bottom: -35px;
  }
  &.label--below {
    margin-top: -35px;
  }
}
</style>
