<template>
  <label
    :id="componentId"
    :for="subId('checkbox')"
    :class="[$style.grid, $style[`grid--${labelPosition}`]]"
    tabindex="0"
    ref="checkbox"
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
      v-model="value"
      :name="name"
      :value="checkValue || label"
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
import { useFocusWithin, onKeyStroke } from '@vueuse/core';
import { ref } from 'vue';

const props = defineProps({
  /**
   * @model
   */
  modelValue: {
    type: Boolean,
    default: undefined,
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
  /**
   * An optional name for the checkbox; useful if making a group.
   */
  name: {
    type: [String, null],
    default: null,
  },
  /**
   * An optional alternative value for the checkbox to return. If not specified,
   * the label value will be used.
   */
  checkValue: {
    type: [String, null],
    default: null,
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

const checkbox = ref(null);
const focus = useFocusWithin(checkbox);

onKeyStroke('Enter', () => {
  if (focus.focused.value) {
    value.value = !value.value;
  }
});
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
