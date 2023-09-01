<template>
  <div
    :class="[$style.grid, $style[`grid--${labelPosition}`]]"
    :id="componentId"
  >
    <label
      v-if="label && labelPosition !== 'none'"
      :class="[$style.label, $style[`label--${labelPosition}`]]"
    >
      {{ label }}
    </label>
    <div :class="$style.wrapper">
      <div :class="$style.slider">
        <span :class="$style.track"></span>
        <span
          :class="[$style.track, $style['track--active']]"
          :style="{
            left: `${handleLower.handle}%`,
            right: `${100 - handleUpper.handle}%`,
          }"
        ></span>
        <label
          :for="subId('range-slider-lower')"
          :class="$style.valueLabel"
          :style="{ left: `${handleLower.label}%` }"
          ref="labelLower"
          >{{ valueLower }}</label
        >
        <label
          :for="subId('range-slider-upper')"
          :class="$style.valueLabel"
          :style="{ left: `${handleUpper.label}%` }"
          ref="labelUpper"
          >{{ valueUpper }}</label
        >
        <input
          type="range"
          :min="min"
          :max="max"
          :step="step"
          :id="subId('range-slider-lower')"
          :class="$style.input"
          v-model="valueLower"
          ref="sliderLower"
        />
        <input
          type="range"
          :min="min"
          :max="max"
          :step="step"
          :id="subId('range-slider-upper')"
          :class="$style.input"
          v-model="valueUpper"
          ref="sliderUpper"
        />
      </div>
      <span :class="$style.trackLabel">{{ valueUpper - valueLower }}</span>
    </div>
  </div>
</template>

<script setup>
import { useComponentId } from '../../utils/compid.js';
import { useChangeEmits } from '../common.js';
import { computed, ref, watch } from 'vue';
import { getFraction, getHandlePosition, getInitialValue } from './slider.js';

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

const sliderLower = ref(null);
const sliderUpper = ref(null);
const labelLower = ref(null);
const labelUpper = ref(null);

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

const fractionLower = computed(() => getFraction(valueLower.value, props));
const fractionUpper = computed(() => getFraction(valueUpper.value, props));

// the slider passed into this function doesn't really matter because it's just
// to get the width (which should be the same for both)
const handleLower = computed(() =>
  getHandlePosition(sliderLower.value, fractionLower.value, labelLower.value),
);
const handleUpper = computed(() =>
  getHandlePosition(sliderUpper.value, fractionUpper.value, labelUpper.value),
);

// set initial values
valueLower.value = getInitialValue(props) - props.step;
valueUpper.value = getInitialValue(props) + props.step;

watch(valueLower, (newValue) => {
  if (Number(newValue) >= Number(valueUpper.value)) {
    valueLower.value = maxLower.value;
  }
});

watch(valueUpper, (newValue) => {
  if (Number(newValue) <= Number(valueLower.value)) {
    valueUpper.value = minUpper.value;
  }
});

watch(range, () => {
  valueChanged(range.value);
});
</script>

<style module lang="scss">
@import '../inputs';

.input {
  appearance: none;
  -webkit-appearance: none;
  width: 100%;
  cursor: pointer;
  background: transparent;
  padding: 0;
  outline: 0;
  height: 10px;
  border: none;
  position: absolute;
  pointer-events: none;

  &::-webkit-slider-thumb,
  &::-moz-range-thumb {
    appearance: none;
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: $primary;
    cursor: pointer;
    border-radius: 100%;
    z-index: 100;
    pointer-events: all;
  }
}

.trackLabel {
  background: white;
  font-size: 0.8em;
  text-align: center;
  margin-top: -4px;
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr minmax(auto, 30px);
  align-items: center;
  grid-gap: $h-pad;
  height: 100%;
}

.slider {
  position: relative;
  height: 100%;
}

.track {
  position: absolute;
  top: 30%;
  bottom: 30%;
  left: 2px;
  right: -2px;
  background: $grey;

  &.track--active {
    background: $secondary;
  }
}

.valueLabel {
  position: absolute;
  top: 1.5em;
  font-size: 0.8em;
  padding: $half-pad;
  border: 1px solid $grey;
  border-radius: $rounding;
  background: white;
}
</style>
