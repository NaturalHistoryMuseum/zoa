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
import { commonProps } from './common.js';
import { getProps } from '../utils/props.js';
import { useComponentId } from '../utils/compid.js';
import { debounce } from 'dettle';

const props = defineProps(
  getProps(commonProps, {
    include: ['labelPosition', 'label', 'placeholder', 'delay'],
    defaults: { label: 'Text' },
  }),
);

const { componentId, subId } = useComponentId();

let delay;
try {
  delay = parseInt(props.delay) || 0;
} catch {
  delay = 0;
}
const emit = defineEmits(['change', 'update:modelValue']);
function _emitChange(event) {
  emit('change', event);
}
const emitChange = debounce(_emitChange, delay);
function valueChanged(event) {
  emit('update:modelValue', event.target.value);
  emitChange(event);
}
</script>

<style module lang="scss">
@import 'inputs';
</style>
