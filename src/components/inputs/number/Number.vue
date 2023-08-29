<template>
  <div
    :class="[$style.grid, $style[`grid--${labelPosition}`]]"
    :id="componentId"
  >
    <label
      :for="subId('number')"
      v-if="label && labelPosition !== 'none'"
      :class="[$style.label, $style[`label--${labelPosition}`]]"
    >
      {{ label }}
    </label>
    <input
      type="number"
      :placeholder="placeholder"
      :min="min"
      :max="max"
      :step="step"
      :id="subId('number')"
      :class="$style.input"
      v-model="value"
    />
  </div>
</template>

<script setup>
import { useComponentId } from '../../utils/compid.js';
import { useChangeEmits } from '../common.js';

const props = defineProps({
  labelPosition: {
    type: String,
    default: 'above',
  },
  label: {
    type: String,
    default: 'Number',
  },
  placeholder: {
    type: String,
    default: 0,
  },
  delay: {
    type: Number,
    default: 200,
  },
  min: {
    type: Number,
    default: null,
  },
  max: {
    type: Number,
    default: null,
  },
  step: {
    type: Number,
    default: 0.1,
  },
  modelValue: {},
});

const { componentId, subId } = useComponentId();

const emit = defineEmits(['change', 'update:modelValue']);
const { value } = useChangeEmits(emit, props);
</script>

<style module lang="scss">
@import '../inputs';

.input:invalid {
  border-color: $error-dark;
}
</style>
