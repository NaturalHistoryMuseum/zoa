<template>
  <div
    :class="[
      $style.grid,
      $style[`grid--${labelPosition}`],
      $style[`wrapper--value-label-${valueLabelPosition}`],
    ]"
    :id="componentId"
  >
    <label
      v-if="label && labelPosition !== 'none'"
      :class="[$style.label, $style[`label--${labelPosition}`]]"
      :for="subId('slider')"
    >
      {{ label }}
    </label>
    <div :class="$style.slider" @wheel="onScroll">
      <span :class="$style.track"></span>
      <span
        :class="[$style.track, $style['track--active']]"
        :style="{ right: `${100 - handlePosition.handle}%` }"
      ></span>
      <span
        :class="[
          $style.valueLabel,
          $style[`valueLabel--${valueLabelPosition}`],
        ]"
        :style="{ left: `${handlePosition.label}%` }"
        ref="valueLabel"
        tabindex="0"
        >{{ valueLabelText }}</span
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
import { computed, ref, watch } from 'vue';
import { getFraction, getHandlePosition, getInitialValue } from './slider.js';
import { onKeyStroke, useFocusWithin, useFocus } from '@vueuse/core';

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
  placeholderPosition: {
    type: Number,
    default: 0.5,
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
  validMin: {
    type: Number,
    default: null,
  },
  validMax: {
    type: Number,
    default: null,
  },
});

const { componentId, subId } = useComponentId();

const emit = defineEmits(['change', 'update:modelValue']);
const { value } = useChangeEmits(emit, props);

// REFS
const slider = ref(null);
const valueLabel = ref(null);

// PROP PROCESSING
const _validMin = computed(() => {
  // set validMin to the min if not set
  if (!props.validMin) {
    return Number(props.min);
  }
  return Math.max(Number(props.validMin), Number(props.min));
});
const _validMax = computed(() => {
  // set validMax to the max if not set
  if (!props.validMax) {
    return Number(props.max);
  }
  return Math.min(Number(props.validMax), Number(props.max));
});

// STATE
const sliderFocus = useFocusWithin(slider);
const labelFocus = useFocus(valueLabel);

const valueLabelText = computed(() => {
  // prevents the label flickering when trying to move it beyond its bounds
  if (value.value < _validMin.value) {
    return _validMin.value;
  } else if (value.value > _validMax.value) {
    return _validMax.value;
  } else {
    return value.value;
  }
});

const fraction = computed(() => {
  return getFraction(value.value, props);
});

const handlePosition = computed(() => {
  return getHandlePosition(slider.value, fraction.value, valueLabel.value);
});

// FUNCTIONS
function stepUp() {
  if (value.value === props.max) {
    return;
  }
  let newValue = Number(value.value) + Number(props.step);
  if (newValue > props.max) {
    value.value = props.max;
  } else {
    value.value = newValue;
  }
}

function stepDown() {
  if (value.value === props.min) {
    return;
  }
  let newValue = Number(value.value) - Number(props.step);
  if (newValue < props.min) {
    value.value = props.min;
  } else {
    value.value = newValue;
  }
}

function onScroll(event) {
  event.preventDefault();
  if (event.wheelDelta > 0) {
    stepUp();
  } else if (event.wheelDelta < 0) {
    stepDown();
  }
}

// KEYBINDINGS
onKeyStroke('ArrowDown', (event) => {
  event.preventDefault();
  if (sliderFocus.focused.value || labelFocus.focused.value) {
    stepDown();
  }
});
onKeyStroke('ArrowLeft', (event) => {
  event.preventDefault();
  if (sliderFocus.focused.value || labelFocus.focused.value) {
    stepDown();
  }
});
onKeyStroke('ArrowUp', (event) => {
  event.preventDefault();
  if (sliderFocus.focused.value || labelFocus.focused.value) {
    stepUp();
  }
});
onKeyStroke('ArrowRight', (event) => {
  event.preventDefault();
  if (sliderFocus.focused.value || labelFocus.focused.value) {
    stepUp();
  }
});

// WATCHES
watch(value, (newValue) => {
  // don't let the value exceed the valid min/max
  if (Number(newValue) >= Number(_validMax.value)) {
    value.value = _validMax.value;
  }
  if (Number(newValue) <= Number(_validMin.value)) {
    value.value = _validMin.value;
  }
});

// set an initial value
value.value = getInitialValue(
  props.min,
  props.max,
  props.step,
  props.placeholder,
  props.placeholderPosition,
);
</script>

<style module lang="scss">
@import '../inputs';

$handleSize: 20px;
$handleBorder: 2px;

.wrapper--value-label-below {
  margin-bottom: 35px;
}

.wrapper--value-label-above {
  margin-top: 35px;
}

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
  height: 30px;

  &.valueLabel--below {
    top: $handleSize + ($handleBorder * 2) + 5px;
  }

  &.valueLabel--above {
    bottom: $handleSize + ($handleBorder * 2) + 5px;
  }
}
</style>
