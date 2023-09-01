<template>
  <ZoaButton v-bind="buttonArgs" @click="openModal" />
  <dialog ref="modal" :class="[$style.main, $style[`kind--${kind}`]]">
    <div :class="$style.container">
      <form method="dialog" :class="$style.form" @submit="emit('closed')">
        <button :class="$style.close">
          <font-awesome-icon icon="fa-solid fa-xmark" />
        </button>
      </form>
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
  </dialog>
</template>

<script setup>
import { ZoaButton } from '../../index.js';
import { useKindIcon } from '../../utils/icons.js';
import FontAwesomeIcon from '../../../icons.js';
import { ref } from 'vue';

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
  buttonArgs: {
    type: Object,
    default: () => {
      return {
        label: 'Open modal',
      };
    },
  },
});

const emit = defineEmits(['opened', 'closed']);

const { icon } = useKindIcon(props);
const modal = ref(null);

function openModal() {
  modal.value.show();
  emit('opened');
}
</script>

<style module lang="scss">
@import '../dialogs';

.main {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  @include media-less-than('sm') {
    width: 90vw;
  }

  @include media-between('sm', 'md') {
    width: 80vw;
  }

  @include media-between('md', 'lg') {
    width: 70vw;
  }

  @include media-from('lg') {
    width: 50vw;
  }
}

.container {
  grid-template-areas:
    'header button'
    'content content';
  grid-template-columns: 1fr auto;
}

.form {
  grid-area: button;
}

.close {
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
}

.header {
  grid-area: header;
}

.content {
  grid-area: content;
}
</style>
