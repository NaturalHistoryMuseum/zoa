<template>
  <div
    :class="[$style.grid, $style[`grid--${labelPosition}`]]"
    :id="componentId"
  >
    <label
      :for="subId('textbox')"
      v-if="label && labelPosition !== 'none'"
      :class="[$style.label, $style[`label--${labelPosition}`]]"
    >
      {{ label }}
    </label>
    <input
      type="text"
      :placeholder="placeholder"
      :id="subId('textbox')"
      :class="$style.input"
      @input="valueChanged"
    />
  </div>
</template>

<script setup>
import { useComponentId } from '../../utils/compid.js';
import { useChangeEmits } from '../common.js';

const props = defineProps({
  labelPosition: {
    default: 'above',
  },
  label: {
    default: 'Text',
  },
  placeholder: {
    default: null,
  },
  delay: {
    default: 200,
  },
});

const { componentId, subId } = useComponentId();

const emit = defineEmits(['change', 'update:modelValue']);
const { valueChanged } = useChangeEmits(emit, props.delay);
</script>

<style module lang="scss">
@import '../inputs';
</style>
