<template>
  <label
    :id="componentId"
    :for="subId('checkbox')"
    :class="[$style.grid, $style[`grid--${labelPosition}`]]"
  >
    <span
      v-if="label && labelPosition !== 'none'"
      :class="[$style.label, $style[`label--${labelPosition}`]]"
    >
      {{ label }}
    </span>
    <input
      type="checkbox"
      :id="subId('checkbox')"
      :class="$style.defaultCheckbox"
      @change="value"
    />
    <span :class="$style.checkbox">
      <font-awesome-icon icon="fa-solid fa-check" :class="$style.check" />
    </span>
  </label>
</template>

<script setup>
import { useComponentId } from '../../utils/compid.js';
import FontAwesomeIcon from '../../../icons.js';
import { useChangeEmits } from '../common.js';

const props = defineProps({
  /**
   * @model
   */
  modelValue: {
    type: Boolean,
  },
  /**
   * Text for the input label.
   */
  label: {
    type: String,
    default: 'Checkbox',
  },
  /**
   * Position of the input label (or none).
   * @values left, right, above, below, none
   */
  labelPosition: {
    type: String,
    default: 'left',
  },
  /**
   * Debounce delay for the `change` event, in ms.
   */
  delay: {
    type: Number,
    default: 0,
  },
});

const { componentId, subId } = useComponentId();

const emit = defineEmits([
  /**
   * Emitted when the value changes; debounced if the delay prop is > 0.
   * @arg {boolean} newValue the new value
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

.grid {
  width: min-content;
  justify-items: center;

  &.grid--left,
  &.grid--right {
    grid-template-columns: min-content min-content;
  }
}

.defaultCheckbox {
  display: none;
}

.label {
  cursor: pointer;
}

.checkbox {
  height: 1.5em;
  width: 1.5em;
  cursor: pointer;
  background: white;
  border: 1px solid $grey;
  border-radius: $rounding;
  position: relative;

  .defaultCheckbox:checked ~ & {
    background: $primary-a;

    & > .check {
      display: block;
    }
  }
}

.check {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
}
</style>
