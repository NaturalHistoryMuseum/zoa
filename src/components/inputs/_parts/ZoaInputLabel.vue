<template>
  <label
    v-if="label && !legend"
    :id="labelId"
    :class="[$style.main, $style[`main--${labelPosition}`]]"
    :for="inputId"
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
defineProps({
  label: {
    type: String,
    default: null,
  },
  labelPosition: {
    type: String,
    default: 'above',
  },
  inputId: {
    type: String,
    default: null,
  },
  labelId: {
    type: String,
    default: null,
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
