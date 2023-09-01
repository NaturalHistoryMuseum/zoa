<template>
  <div
    :class="[$style.grid, $style[`grid--${labelPosition}`]]"
    :id="componentId"
  >
    <label
      :for="subId('slider')"
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
          :style="{ right: `${100 - handlePosition.handle}%` }"
        ></span>
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
      <span :class="$style.trackLabel">{{ value }}</span>
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
});

const { componentId, subId } = useComponentId();

const emit = defineEmits(['change', 'update:modelValue']);
const { value } = useChangeEmits(emit, props);

const slider = ref(null);

const fraction = computed(() => {
  return getFraction(value.value, props);
});

const handlePosition = computed(() => {
  return getHandlePosition(slider.value, fraction.value);
});

// set an initial value
value.value = getInitialValue(props);
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
</style>
