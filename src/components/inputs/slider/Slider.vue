<template>
  <div
    :class="$style.inputWrapper"
    @wheel="onScroll"
    :aria-labelledby="labelId"
    :aria-describedby="helpId"
  >
    <span :class="$style.track"></span>
    <span
      :class="[$style.track, $style['track--active']]"
      :style="activeTrackStyle"
    ></span>
    <span
      :class="[$style.valueLabel, $style[`valueLabel--${valueLabelPosition}`]]"
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
      :id="inputId"
      :class="$style.input"
      v-model="value"
      ref="slider"
    />
  </div>
</template>

<script setup>
import { useChangeEmits } from '../common.js';
import { computed, inject, ref, watch } from 'vue';
import { onKeyStroke, useFocusWithin, useFocus } from '@vueuse/core';

const props = defineProps({
  /**
   * @model
   */
  modelValue: {
    type: Number,
  },
  /**
   * Debounce delay for the `change` event, in ms.
   */
  delay: {
    type: Number,
    default: 200,
  },
  /**
   * Number to set the slider at initially.
   */
  placeholder: {
    type: [Number, undefined],
    default: null,
  },
  /**
   * The lowest number displayed on the slider.
   */
  min: {
    type: Number,
    default: 0,
  },
  /**
   * The highest number displayed on the slider.
   */
  max: {
    type: Number,
    default: 100,
  },
  /**
   * The granularity of accepted values; e.g. 1 allows any integer and 0.1 allows floats to one decimal place.
   */
  step: {
    type: Number,
    default: 1,
  },
  /**
   * The fraction along the bar to set the value initially (as opposed to setting an explicit number); e.g. 0.5 sets an initial value halfway along the bar.
   */
  placeholderPosition: {
    type: Number,
    default: 0.5,
  },
  /**
   * The position of the dynamic label displaying the current value (above or below the slider).
   * @values above, below
   */
  valueLabelPosition: {
    type: String,
    default: 'below',
  },
  /**
   * Do not allow values below this value; the handle will stop at this point, even if the `min` is lower than this.
   */
  validMin: {
    type: Number,
    default: null,
  },
  /**
   * Do not allow values above this point; the handle will stop at this point, even if the `max` is higher than this.
   */
  validMax: {
    type: Number,
    default: null,
  },
  /**
   * Highlight the track to the right of the handle rather than the left.
   */
  activeTrackRight: {
    type: Boolean,
    default: false,
  },
});

const inputId = inject('inputId');
const labelId = inject('labelId');
const helpId = inject('helpId');

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

// ELEMENTS
const slider = ref(null);
const valueLabel = ref(null);

// EXPOSE
defineExpose({
  target: slider,
});

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

const activeTrackStyle = computed(() => {
  if (props.activeTrackRight) {
    return { left: `${handlePosition.value.handle}%` };
  } else {
    return { right: `${100 - handlePosition.value.handle}%` };
  }
});

const fraction = computed(() => {
  return (value.value - props.min) / (props.max - props.min);
});

const handlePosition = computed(() => {
  return getHandlePosition();
});

// FUNCTIONS
function getHandlePosition() {
  // the center of the slider is slightly offset to account for the size of the
  // handle. this calculates the position of the middle of the handle along the
  // track, accounting for the offset.
  try {
    const trackWidth = slider.value.clientWidth;
    const handleWidth = 24; // set in CSS; including border!

    // force update the inner text before the label width is calculated
    if (valueLabel.value) {
      valueLabel.value.innerText = valueLabelText.value;
    }
    const labelWidth = valueLabel.value ? valueLabel.value.clientWidth : 0;

    const halfTrack = trackWidth / 2;
    const currentPosition = fraction.value * trackWidth;
    const centerOffset = (currentPosition - halfTrack) / halfTrack;
    const offset = centerOffset * (handleWidth / 2);
    const labelOffset = offset + labelWidth / 2;
    const percentOffset = offset / trackWidth;
    return {
      handle: ((fraction.value - percentOffset) * 100).toFixed(2),
      label: ((fraction.value - labelOffset / trackWidth) * 100).toFixed(2),
    };
  } catch {
    // in case we can't get the clientWidth
    const pos = fraction.value * 100;
    return { handle: pos.toFixed(2), label: pos.toFixed(2) };
  }
}

function getInitialValue() {
  if (props.placeholder !== null && props.placeholder !== undefined) {
    return props.placeholder;
  }
  let range = props.max - props.min;
  let exactMidpoint = range / (1 / props.placeholderPosition);
  let stepDeviation = exactMidpoint % props.step;
  let stepMidpoint = exactMidpoint - stepDeviation;
  return stepMidpoint + props.min;
}

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
value.value = getInitialValue();
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

.inputWrapper {
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
