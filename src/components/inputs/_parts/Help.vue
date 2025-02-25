<template>
  <div
    :class="[$style.main, $style[`main--${labelPosition}`]]"
    ref="helpContainer"
  >
    <font-awesome-icon
      :icon="['fa-solid', 'fa-circle-question']"
      :class="$style.icon"
    />
    <div
      v-show="showText"
      :class="[$style.popup, $style[`popup--${position}`]]"
      :id="helpId"
      role="tooltip"
    >
      <slot>
        {{ text }}
      </slot>
    </div>
  </div>
</template>

<script setup>
import FontAwesomeIcon from '../../../icons.js';
import { ref, inject, watch } from 'vue';
import { onKeyStroke, useElementHover } from '@vueuse/core';

const props = defineProps({
  text: {
    type: String,
  },
  position: {
    type: String,
    default: 'right',
  },
});

const labelPosition = inject('labelPosition');
const helpId = inject('helpId');

const showText = ref(false);

// we want to change showText when isHovered is changed, but we also need to
// change it separately (e.g. on Esc keypress)
const helpContainer = ref(null);
const isHovered = useElementHover(helpContainer, { delayEnter: 500 });
watch(isHovered, () => {
  showText.value = isHovered.value;
});

onKeyStroke('Escape', () => (showText.value = false));
</script>

<style module lang="scss">
@use '../../../styles/palette';
@use '../../../styles/vars';

.main {
  position: relative;
  grid-area: help;
  width: min-content;

  &.main--above,
  &.main--below {
    padding: 0;
  }
}

.icon {
  color: palette.$grey;
}

.popup {
  position: absolute;
  background: white;
  border: 1px solid palette.$grey;
  border-radius: vars.$rounding;
  padding: vars.$box-padding;
  z-index: 9999;
  width: max-content;
  max-width: 350px;

  &.popup--right {
    right: 0;
  }
}
</style>
