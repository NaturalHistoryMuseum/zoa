<template>
  <div
    :class="$style.inputWrapper"
    :aria-labelledby="labelId"
    :aria-describedby="helpId"
  >
    <zoa-input
      ref="lowerTrack"
      v-model="valueLower"
      zoa-type="slider"
      :label="labelLower"
      :label-position="labelsRight ? 'right' : 'left'"
      :config="{
        min,
        max,
        step,
        validMax: maxLower,
        valueLabelPosition: 'above',
        placeholderPosition: 0.25,
      }"
      :disabled="disabled"
    />
    <zoa-input
      ref="upperTrack"
      v-model="valueUpper"
      zoa-type="slider"
      :label="labelUpper"
      :label-position="labelsRight ? 'right' : 'left'"
      :config="{
        min,
        max,
        step,
        validMin: minUpper,
        placeholderPosition: 0.75,
        activeTrackRight: true,
      }"
      :disabled="disabled"
    />
  </div>
</template>

<script setup>
import { computed, inject, ref, watch } from 'vue';
import { ZoaInput } from '../../index.js';
import { useChangeEmits } from '../common.js';

const props = defineProps({
  /**
   * @model
   */
  modelValue: {
    type: Array,
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

const inputId = inject('inputId');
const labelId = inject('labelId');
const helpId = inject('helpId');
const disabled = inject('disabled');

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

// ELEMENTS
const trackLower = ref(null);
const trackUpper = ref(null);

// EXPOSE
const target = computed(() => {
  if (trackLower.value) {
    return trackLower.value.target;
  }
});
const elements = computed(() => {
  if (trackLower.value && trackUpper.value) {
    return [trackLower.value.target, trackUpper.value.target];
  } else {
    return [];
  }
});
defineExpose({
  target,
  elements,
});

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
@use '../inputs';
</style>
