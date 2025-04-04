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
@use '../buttons';
</style>
