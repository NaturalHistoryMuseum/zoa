<template>
  <label
    :id="componentId"
    ref="checkboxContainer"
    :class="addPropClasses([$style.container])"
    :for="subId('toggle')"
    tabindex="0"
  >
    <input
      :id="subId('toggle')"
      ref="checkboxInput"
      v-model="value"
      :class="$style.checkbox"
      :name="name"
      type="checkbox"
      :value="_checkValue"
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
import { onKeyStroke, useFocusWithin } from '@vueuse/core';
import { computed, isProxy, ref, toRaw } from 'vue';
import { useChangeEmits } from '../../inputs/common.js';
import { usePropClasses } from '../../utils/classes.js';
import { useComponentId } from '../../utils/compid.js';

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
@use '../../inputs/inputs';
@use '../../../styles/fonts';
@use '../../../styles/palette';
@use '../../../styles/vars';

.container {
  display: inline-block;
}

.main {
  font-family: fonts.$header-font;
  font-weight: 600;
  border: none;
  border-radius: vars.$rounding;
  display: inline-block;
  transition: 0.2s;
  cursor: pointer;
  color: black;
  background-color: palette.$grey;
}

.kind--normal {
  &:hover,
  &:focus,
  &:active {
    background-color: palette.$secondary-b;
    color: palette.$secondary-text;
  }

  .checkbox:checked + & {
    background-color: palette.$secondary;
    color: palette.$secondary-text;
  }
}

.kind--primary {
  &:hover,
  &:focus,
  &:active {
    background-color: palette.$primary-b;
    color: palette.$primary-text;
  }

  .checkbox:checked + & {
    background-color: palette.$primary;
    color: palette.$primary-text;
  }
}

.kind--alt {
  &:hover,
  &:focus,
  &:active {
    background-color: palette.$tertiary-b;
    color: palette.$tertiary-text;
  }

  .checkbox:checked + & {
    background-color: palette.$tertiary;
    color: palette.$tertiary-text;
  }
}

.size--sm {
  padding: calc(vars.$v-pad/2) calc(vars.$h-pad/2);
  font-size: 0.8em;
}

.size--md {
  padding: vars.$padding;
}

.checkbox {
  display: none;
}
</style>
