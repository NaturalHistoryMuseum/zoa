<template>
  <div :class="[$style.main, $style[`kind--${kind}`]]">
    <font-awesome-icon :icon="['fa-solid', icon]" :class="$style.icon" />
    <span>{{ message }}</span>
  </div>
</template>

<script setup>
import { dialogProps, useIcons } from './utils.js';
import FontAwesomeIcon from '../../icons.js';

const props = defineProps({ ...dialogProps });

const { icon } = useIcons(props);
</script>

<style module lang="scss">
@import '../../styles/palette';
@import '../../styles/vars';

.main {
  border: 2px solid;
  border-radius: $rounding;
  padding: $padding;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: center;
}

.kind--info {
  border-color: $info-dark;
  background: $info-light;

  .icon {
    color: $info-dark;
  }
}

.kind--warning {
  border-color: $warning-dark;
  background: $warning-light;

  .icon {
    color: $warning-dark;
  }
}

.kind--error {
  border-color: $error-dark;
  background: $error-light;

  .icon {
    color: $error-dark;
  }
}

.kind--success {
  border-color: $success-dark;
  background: $success-light;

  .icon {
    color: $success-dark;
  }
}
</style>
