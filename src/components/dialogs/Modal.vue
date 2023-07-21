<template>
  <ZoaButton v-bind="buttonArgs" @click="openModal" />
  <dialog ref="modal" :class="$style.main">
    <h2>{{ message }}</h2>
    <slot></slot>
    <form method="dialog">
      <ZoaButton label="Close" />
    </form>
  </dialog>
</template>

<script setup>
import { ZoaButton } from '../index.js';
import { dialogProps, useIcons } from './utils.js';
import FontAwesomeIcon from '../../icons.js';
import { ref } from 'vue';

const props = defineProps({
  ...dialogProps,
  buttonArgs: {
    type: Object,
    default: () => {
      return {
        label: 'Open modal',
      };
    },
  },
});

const emits = defineEmits(['opened', 'closed']);

const { icon } = useIcons(props);
const modal = ref(null);

function openModal() {
  modal.value.show();
}
</script>

<style module lang="scss">
@import '../../styles/palette';

.main {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: $light;
}
</style>
