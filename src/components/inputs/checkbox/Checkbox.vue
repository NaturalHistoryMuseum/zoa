<template>
  <label
    :id="componentId"
    :for="subId('checkbox')"
    :class="addPropClasses([$style.grid, $style[`grid--${labelPosition}`]])"
    tabindex="0"
    ref="checkboxContainer"
  >
    <span
      v-if="label"
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
      :value="_checkValue"
      ref="checkboxInput"
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
import { ref, computed, isProxy, toRaw } from 'vue';
import { usePropClasses } from '../../utils/classes.js';

const props = defineProps({
  /**
   * @model
   */
  modelValue: {
    type: [Boolean, Array],
    default: undefined,
  },
  /**
   * Additional class(es) to add to the root element.
   */
  class: {
    type: [String, Array, null],
    default: null,
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
const { addPropClasses } = usePropClasses(props);

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

const checkboxContainer = ref(null);
const checkboxInput = ref(null);
const focus = useFocusWithin(checkboxContainer);

// for convenience and consistency
const _checkValue = computed(() => {
  return props.checkValue || props.label;
});

onKeyStroke(' ', () => {
  if (focus.focused.value) {
    // if the same v-model is set on a group of checkboxes, they return an array
    // of their _checkValue values instead of a single boolean. There may be a
    // better way to check for this.
    let currentValue = isProxy(value.value) ? toRaw(value.value) : value.value;
    if (Array.isArray(currentValue)) {
      // if it's currently unchecked, we want to check it, and vice versa
      let check = !checkboxInput.value.checked;
      // double-check the value isn't on there already
      currentValue = currentValue.filter((v) => v !== _checkValue.value);
      if (check) {
        currentValue.push(_checkValue.value);
      }
      value.value = currentValue;
      checkboxInput.value.checked = check;
    } else {
      value.value = !value.value;
    }
  }
});
</script>

<style module lang="scss">
@import '../inputs';

.grid {
  justify-items: center;

  &.grid--left {
    grid-template-columns: auto min-content;
  }
  &.grid--right {
    grid-template-columns: min-content auto;
  }
}

.label--right {
  justify-self: left;
}
.label--left {
  justify-self: right;
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
