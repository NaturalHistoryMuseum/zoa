<template>
  <button :class="[$style.main, $style[`kind--${kind}`]]">
    {{ label }}
  </button>
</template>

<script setup>
const props = defineProps({
  kind: {
    type: String,
    default: 'normal',
  },
  label: {
    type: String,
    default: 'Button',
  },
});
</script>

<style module lang="scss">
@import '../../../styles/palette';
@import '../../../styles/fonts';
@import '../../../styles/vars';

.main {
  font-family: $header-font;
  font-weight: 600;
  border: none;
  border-radius: $rounding;
  padding: $padding;
  transition: 0.2s;
  cursor: pointer;
}

.kind--normal {
  background-color: $secondary;
  color: black;

  &:hover,
  &:focus,
  &:active {
    background-color: $secondary-b;
  }
}

.kind--primary {
  background-color: $primary;
  color: black;

  &:hover,
  &:focus,
  &:active {
    background-color: $primary-b;
    color: black;
  }
}
</style>
