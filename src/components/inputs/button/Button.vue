<template>
  <button :class="[$style.main, $style[`kind--${kind}`]]">
    <slot>
      {{ label }}
    </slot>
  </button>
</template>

<script setup>
const props = defineProps({
  label: {
    default: 'Button',
  },
  kind: {
    default: 'normal',
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
  color: black;
}

.kind--normal {
  background-color: $secondary;

  &:hover,
  &:focus,
  &:active {
    background-color: $secondary-b;
  }
}

.kind--primary {
  background-color: $primary;

  &:hover,
  &:focus,
  &:active {
    background-color: $primary-b;
    color: black;
  }
}
</style>
