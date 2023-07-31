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
    />
  </div>
</template>

<script setup>
import { commonProps } from './common.js';
import { getProps } from '../utils/props.js';
import { useComponentId } from '../utils/compid.js';

const props = defineProps(
  getProps(commonProps, {
    include: ['labelPosition', 'label', 'placeholder'],
  }),
);

const { componentId, subId } = useComponentId();
</script>

<style module lang="scss">
@import 'inputs';
</style>
