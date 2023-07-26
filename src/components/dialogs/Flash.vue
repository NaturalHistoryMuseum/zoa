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
import { dialogProps, useIcons } from './utils.js';
import FontAwesomeIcon from '../../icons.js';

const props = defineProps({ ...dialogProps });

const { icon } = useIcons(props);
</script>

<style module lang="scss">
@import 'dialogs';
</style>
