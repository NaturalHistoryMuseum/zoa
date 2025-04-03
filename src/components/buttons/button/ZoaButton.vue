<template>
  <button
    :class="
      addPropClasses([
        $style.main,
        $style[`kind--${kind}`],
        $style[`size--${size}`],
      ])
    "
  >
    <!-- @slot Text for the button; overrides the label prop. -->
    <slot>
      {{ label }}
    </slot>
  </button>
</template>

<script setup>
import { usePropClasses } from '../../utils/classes.js';

const props = defineProps({
  /**
   * Additional class(es) to add to the root element.
   */
  class: {
    type: [String, Array, null],
    default: null,
  },
  /**
   * The text for the button; overridden by the default slot.
   */
  label: {
    type: String,
    default: 'Button',
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

const { addPropClasses } = usePropClasses(props);
</script>

<style module lang="scss">
@use '../../../styles/palette';
@use '../../../styles/fonts';
@use '../../../styles/vars';

.main {
  font-family: fonts.$header-font;
  font-weight: 600;
  border: none;
  border-radius: vars.$rounding-button;

  transition: 0.2s;
  cursor: pointer;
  color: black;
}

.kind--normal {
  background-color: palette.$secondary;
  color: palette.$secondary-text;

  &:hover,
  &:focus,
  &:active {
    background-color: palette.$secondary-b;
  }
}

.kind--primary {
  background-color: palette.$primary;
  color: palette.$primary-text;

  &:hover,
  &:focus,
  &:active {
    background-color: palette.$primary-b;
  }
}

.kind--alt {
  background-color: palette.$tertiary;
  color: palette.$tertiary-text;

  &:hover,
  &:focus,
  &:active {
    background-color: palette.$tertiary-b;
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
