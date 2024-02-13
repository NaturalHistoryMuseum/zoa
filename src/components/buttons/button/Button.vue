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
@import '../../../styles/palette';
@import '../../../styles/fonts';
@import '../../../styles/vars';

.main {
  font-family: $header-font;
  font-weight: 600;
  border: none;
  border-radius: $rounding;

  transition: 0.2s;
  cursor: pointer;
  color: black;
}

.kind--normal {
  background-color: $secondary;
  color: $secondary-text;

  &:hover,
  &:focus,
  &:active {
    background-color: $secondary-b;
  }

  .checkbox:checked + & {
    background-color: $secondary-b;
  }
}

.kind--primary {
  background-color: $primary;
  color: $primary-text;

  &:hover,
  &:focus,
  &:active {
    background-color: $primary-b;
  }

  .checkbox:checked + & {
    background-color: $primary-b;
  }
}

.kind--alt {
  background-color: $tertiary;
  color: $tertiary-text;

  &:hover,
  &:focus,
  &:active {
    background-color: $tertiary-b;
  }

  .checkbox:checked + & {
    background-color: $tertiary-b;
  }
}

.size--sm {
  padding: calc($v-pad/2) calc($h-pad/2);
  font-size: 0.8em;
}

.size--md {
  padding: $padding;
}
</style>
