<template>
  <div :class="$style.wrapper" :id="componentId">
    <ZoaSlider
      :min="min"
      :max="max"
      :valid-max="maxLower"
      :step="step"
      v-model="valueLower"
      :label="labelLower"
      label-position="left"
      value-label-position="above"
      placeholder-position="0.25"
    />
    <ZoaSlider
      :min="min"
      :valid-min="minUpper"
      :max="max"
      :step="step"
      v-model="valueUpper"
      :label="labelUpper"
      label-position="left"
      :placeholder-position="0.75"
    />
  </div>
</template>

<script setup>
import { useComponentId } from '../../utils/compid.js';
import { useChangeEmits } from '../common.js';
import { computed, ref, watch } from 'vue';
import ZoaSlider from './Slider.vue';

const props = defineProps({
  modelValue: {},
  labelPosition: {
    type: String,
    default: 'above',
  },
  label: {
    type: String,
    default: 'Range',
  },
  labelLower: {
    type: String,
    default: 'Lower',
  },
  labelUpper: {
    type: String,
    default: 'Upper',
  },
  delay: {
    type: Number,
    default: 200,
  },
  placeholder: {
    type: Number,
    default: 0,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  step: {
    type: Number,
    default: 1,
  },
});

const { componentId, subId } = useComponentId();

const emit = defineEmits(['change', 'update:modelValue']);
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
</style>
