<template>
  <div :class="[$style.grid, $style[`grid--${labelPosition}`]]">
    <label
      for="textbox"
      v-if="label && labelPosition !== 'none'"
      :class="[$style.label, $style[`label--${labelPosition}`]]"
    >
      {{ label }}
    </label>
    <input
      type="text"
      :placeholder="placeholder"
      id="textbox"
      :class="$style.input"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: null,
  },
  labelPosition: {
    type: String,
    default: 'above',
  },
});
</script>

<style module lang="scss">
@import '../../../styles/palette';
@import '../../../styles/fonts';
@import '../../../styles/vars';

.input {
  @include body-font;
  font-size: 1em;
  border: 1px solid $grey;
  border-radius: $rounding;
  padding: $padding;
}

.label {
  @include header-font;
  font-size: 0.9em;
  padding: $padding;

  &.label--right,
  &.label--below {
    order: 2;
  }
}

.grid {
  display: grid;
  align-items: center;

  &.grid--above,
  &.grid--below {
    grid-template-rows: auto auto;
  }

  &.grid--left {
    grid-template-columns: auto 1fr;
  }

  &.grid--right {
    grid-template-columns: 1fr auto;
  }
}
</style>
