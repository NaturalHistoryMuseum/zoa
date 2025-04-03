<template>
  <a
    :id="componentId"
    ref="button"
    :aria-pressed="value"
    :class="
      addPropClasses([
        $style.container,
        $style.main,
        $style[`kind--${kind}`],
        $style[`size--${size}`],
      ])
    "
    role="button"
    tabindex="0"
    @click="toggle"
  >
    <!-- @slot Text for the button; overrides the label prop. -->
    <slot>
      {{ label }}
    </slot>
  </a>
</template>

<script setup>
import { onKeyStroke, useFocusWithin } from '@vueuse/core';
import { ref } from 'vue';
import { useChangeEmits } from '../../inputs/common.js';
import { usePropClasses } from '../../utils/classes.js';
import { useComponentId } from '../../utils/compid.js';

const props = defineProps({
  /**
   * @model
   */
  modelValue: {
    type: Boolean,
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

const { componentId } = useComponentId();
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
const { value, valueChanged } = useChangeEmits(emit, props);

const button = ref(null);
const { focused } = useFocusWithin(button);

function toggle() {
  valueChanged(!value.value);
}

onKeyStroke(' ', () => {
  if (focused.value) {
    toggle();
  }
});
onKeyStroke('Enter', () => {
  if (focused.value) {
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

  &[aria-pressed='true'] {
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

  &[aria-pressed='true'] {
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

  &[aria-pressed='true'] {
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
</style>
