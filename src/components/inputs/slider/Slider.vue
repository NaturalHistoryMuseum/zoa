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
    <div :class="$style.slider">
      <span :class="$style.track"></span>
      <span
        :class="[$style.track, $style['track--active']]"
        :style="{ right: `${100 - handlePosition.handle}%` }"
      ></span>
      <label
        :for="subId('slider')"
        :class="[
          $style.valueLabel,
          $style[`valueLabel--${valueLabelPosition}`],
        ]"
        :style="{ left: `${handlePosition.label}%` }"
        ref="valueLabel"
        tabindex="0"
        >{{ value }}</label
      >
      <input
        type="range"
        :min="min"
        :max="max"
        :step="step"
        :id="subId('slider')"
        :class="$style.input"
        v-model="value"
        ref="slider"
      />
    </div>
  </div>
</template>

<script setup>
import { useComponentId } from '../../utils/compid.js';
import { useChangeEmits } from '../common.js';
import { computed, ref } from 'vue';
import { getFraction, getHandlePosition, getInitialValue } from './slider.js';

const props = defineProps({
  modelValue: {},
  labelPosition: {
    type: String,
    default: 'above',
  },
  label: {
    type: String,
    default: 'Slider',
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
  valueLabelPosition: {
    type: String,
    default: 'below',
  },
});

const { componentId, subId } = useComponentId();

const emit = defineEmits(['change', 'update:modelValue']);
const { value } = useChangeEmits(emit, props);

const slider = ref(null);
const valueLabel = ref(null);

const fraction = computed(() => {
  return getFraction(value.value, props);
});

const handlePosition = computed(() => {
  return getHandlePosition(slider.value, fraction.value, valueLabel.value);
});

// set an initial value
value.value = getInitialValue(
  props.min,
  props.max,
  props.step,
  props.placeholder,
);
</script>

<style module lang="scss">
@import '../inputs';

$handleSize: 20px;
$handleBorder: 2px;

.input {
  appearance: none;
  -webkit-appearance: none;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: 0;
  padding: 0;
  margin: 0;
  position: absolute;

  &::-webkit-slider-thumb,
  &::-moz-range-thumb {
    appearance: none;
    -webkit-appearance: none;
    width: $handleSize;
    height: $handleSize;
    background: $primary;
    cursor: pointer;
    border-radius: 100%;
    z-index: 100;
    border: $handleBorder solid $grey;
  }
}

.slider {
  position: relative;
  height: $handleSize + ($handleBorder * 2);
}

.track {
  position: absolute;
  height: 10px;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: $rounding;
  background: $grey;

  &.track--active {
    background: $secondary;
  }
}

.valueLabel {
  position: absolute;
  font-size: 0.8em;
  padding: $half-pad;
  border: 1px solid $grey;
  border-radius: $rounding;
  background: white;

  &.valueLabel--below {
    top: $handleSize + ($handleBorder * 2) + 5px;
  }

  &.valueLabel--above {
    bottom: $handleSize + ($handleBorder * 2) + 5px;
  }
}
</style>
