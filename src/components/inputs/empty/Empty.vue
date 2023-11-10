<template>
  <div
    :class="addPropClasses([$style.grid, $style[`grid--${labelPosition}`]])"
    :id="componentId"
  >
    <fieldset :class="$style.fieldset">
      <legend
        v-if="label"
        :class="[$style.label, $style[`label--${labelPosition}`]]"
      >
        {{ label }}
      </legend>
      <div :class="gridClass || $style.emptyGrid">
        <slot />
      </div>
    </fieldset>
  </div>
</template>

<script setup>
import { useComponentId } from '../../utils/compid.js';
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
   * Text for the input label.
   */
  label: {
    type: String,
    default: 'Empty',
  },
  /**
   * Position of the input label (or none).
   * @values left, right, above, below, none
   */
  labelPosition: {
    type: String,
    default: 'above',
  },
  gridClass: {
    type: [String, null],
    default: null,
  },
});

const { componentId, subId } = useComponentId();
const { addPropClasses } = usePropClasses(props);
</script>

<style module lang="scss">
@import '../inputs';

.fieldset {
  border: none;
  display: contents;
}

.emptyGrid {
  display: grid;
  grid-auto-flow: column;
}
</style>
