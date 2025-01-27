<template>
  <label
    v-if="label && !legend"
    :id="labelId"
    :for="inputId"
    :class="[$style.main, $style[`main--${labelPosition}`]]"
    :tabindex="tabbable ? 0 : -1"
  >
    {{ label }}
  </label>
  <legend
    v-else-if="label"
    :id="labelId"
    :class="[$style.main, $style[`main--${labelPosition}`]]"
  >
    {{ label }}
  </legend>
</template>

<script setup>
import { inject } from 'vue';

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

const labelId = inject('labelId');
</script>

<style module lang="scss">
@use '../../../styles/fonts';
@use '../../../styles/vars';

.main {
  @include fonts.header-font;
  font-size: 0.9em;
  grid-area: label;

  &.main--right {
    justify-self: left;
  }

  &.main--left {
    justify-self: right;
  }

  &.main--above,
  &.main--below {
    padding: 0 vars.$h-pad;
  }

  &.main--none {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
  }
}
</style>
