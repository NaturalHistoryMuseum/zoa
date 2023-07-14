<template>
  <div :class="[$style.main, $style[`kind--${kind}`]]">
    <span>!</span>
    <span>{{ message }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  kind: {
    type: String,
    default: 'info',
  },
  message: {
    type: String,
    default: 'Button',
  },
});
</script>

<style module lang="scss">
@import '../../styles/palette';
@import '../../styles/fonts';
@import '../../styles/vars';

.main {
  @include body-font;
  font-size: 1em;
  border: 2px solid;
  border-radius: $rounding;
  padding: $padding;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1em;
}

.kind--info {
  border-color: $info-dark;
  background: $info-light;
}

.kind--warning {
  border-color: $warning-dark;
  background: $warning-light;
}

.kind--error {
  border-color: $error-dark;
  background: $error-light;
}

.kind--success {
  border-color: $success-dark;
  background: $success-light;
}
</style>
