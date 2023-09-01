<template>
  <div :class="[$style.main, $style.container, $style[`kind--${kind}`]]">
    <div :class="$style.header">
      <font-awesome-icon :icon="['fa-solid', icon]" :class="$style.icon" />
      <h2>{{ header }}</h2>
    </div>
    <div :class="$style.content">
      <slot>
        {{ message }}
      </slot>
    </div>
  </div>
</template>

<script setup>
import { useKindIcon } from '../../utils/icons.js';
import FontAwesomeIcon from '../../../icons.js';

const props = defineProps({
  kind: {
    type: String,
    default: 'info',
  },
  header: {
    type: String,
    default: 'Here is an informational message.',
  },
  message: {
    type: String,
    default:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum.',
  },
});

const { icon } = useKindIcon(props);
</script>

<style module lang="scss">
@import '../dialogs';
</style>
