<template>
  <label
    :for="inputId"
    v-if="label && !legend"
    :class="[$style.label, $style[`label--${labelPosition}`]]"
    :tabindex="tabbable ? 0 : -1"
  >
    {{ label }}
  </label>
  <legend
    v-else-if="label"
    :class="[$style.label, $style[`label--${labelPosition}`]]"
  >
    {{ label }}
  </legend>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
  },
  labelPosition: {
    type: String,
    default: 'above',
  },
  inputId: {
    type: String,
  },
  legend: {
    type: Boolean,
    default: false,
  },
  tabbable: {
    type: Boolean,
    default: false,
  },
});
</script>

<style module lang="scss">
@import '../inputs';
</style>
