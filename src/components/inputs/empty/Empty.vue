<template>
  <div
    :class="addPropClasses([$style.grid, $style[`grid--${labelPosition}`]])"
    :id="componentId"
  >
    <label
      v-if="label && labelPosition !== 'none'"
      :class="[$style.label, $style[`label--${labelPosition}`]]"
    >
      {{ label }}
    </label>
    <div :class="gridClass || $style.emptyGrid">
      <slot />
    </div>
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

.emptyGrid {
  display: grid;
  grid-auto-flow: column;
}
</style>
