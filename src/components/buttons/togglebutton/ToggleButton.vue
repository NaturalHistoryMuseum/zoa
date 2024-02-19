<template>
  <label
    :id="componentId"
    :for="subId('toggle')"
    tabindex="0"
    ref="checkboxContainer"
    :class="addPropClasses([$style.container])"
  >
    <input
      type="checkbox"
      :id="subId('toggle')"
      :class="$style.checkbox"
      v-model="value"
      :name="name"
      :value="_checkValue"
      ref="checkboxInput"
    />
    <span
      :class="[$style.main, $style[`kind--${kind}`], $style[`size--${size}`]]"
    >
      <!-- @slot Text for the button; overrides the label prop. -->
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>

<script setup>
import { useComponentId } from '../../utils/compid.js';
import { useChangeEmits } from '../../inputs/common.js';
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
   * Debounce delay for the `change` event, in ms.
   */
  delay: {
    type: Number,
    default: 0,
  },
  /**
   * An optional name for the toggle; useful if making a group.
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
  /**
   * The appearance class of the button.
   * @values normal, primary, alt
   */
  kind: {
    type: String,
    default: 'normal',
  },
  /**
   * The size class of the button.
   * @values sm, md
   */
  size: {
    type: String,
    default: 'md',
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

function toggle() {
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

onKeyStroke(' ', () => {
  if (focus.focused.value) {
    toggle();
  }
});
onKeyStroke('Enter', () => {
  if (focus.focused.value) {
    toggle();
  }
});
</script>

<style module lang="scss">
@import '../../inputs/inputs';
.container {
  display: inline-block;
}

.main {
  font-family: $header-font;
  font-weight: 600;
  border: none;
  border-radius: $rounding;
  display: inline-block;
  transition: 0.2s;
  cursor: pointer;
  color: black;
  background-color: $grey;
}

.kind--normal {
  &:hover,
  &:focus,
  &:active {
    background-color: $secondary-b;
    color: $secondary-text;
  }

  .checkbox:checked + & {
    background-color: $secondary;
    color: $secondary-text;
  }
}

.kind--primary {
  &:hover,
  &:focus,
  &:active {
    background-color: $primary-b;
    color: $primary-text;
  }

  .checkbox:checked + & {
    background-color: $primary;
    color: $primary-text;
  }
}

.kind--alt {
  &:hover,
  &:focus,
  &:active {
    background-color: $tertiary-b;
    color: $tertiary-text;
  }

  .checkbox:checked + & {
    background-color: $tertiary;
    color: $tertiary-text;
  }
}

.size--sm {
  padding: calc($v-pad/2) calc($h-pad/2);
  font-size: 0.8em;
}

.size--md {
  padding: $padding;
}

.checkbox {
  display: none;
}
</style>
