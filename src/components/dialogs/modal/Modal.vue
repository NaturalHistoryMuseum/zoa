<template>
  <ZoaButton v-bind="buttonArgs" @click="openModal">
    <!-- @slot The content of the button; overrides buttonArgs.label -->
    <slot name="button" />
  </ZoaButton>
  <dialog
    ref="modal"
    :class="addPropClasses([$style.main, $style[`kind--${kind}`]])"
  >
    <div :class="$style.container">
      <div :class="$style.header">
        <font-awesome-icon :icon="['fa-solid', icon]" :class="$style.icon" />
        <h2 :class="$style.headerText">
          <!-- @slot The header content (within <h2> tags); overrides the header prop. -->
          <slot name="header">
            {{ header }}
          </slot>
        </h2>
        <form method="dialog" :class="$style.form" @submit="emit('closed')">
          <button :class="$style.close">
            <font-awesome-icon icon="fa-solid fa-xmark" />
          </button>
        </form>
      </div>
      <div :class="$style.content">
        <!-- @slot The main content of the modal; overrides the message prop. -->
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
import { usePropClasses } from '../../utils/classes.js';
import { onClickOutside } from '@vueuse/core';

const props = defineProps({
  /**
   * Additional class(es) to add to the root element.
   */
  class: {
    type: [String, Array, null],
    default: null,
  },
  /**
   * The type of message being displayed.
   * @values info, success, warning, error
   */
  kind: {
    type: String,
    default: 'info',
  },
  /**
   * The header for the modal.
   */
  header: {
    type: String,
    default: 'Here is an informational message.',
  },
  /**
   * The body of the modal. Overridden by the default slot.
   */
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

const emit = defineEmits([
  /**
   * Modal opened.
   */
  'opened',
  /**
   * Modal closed.
   */
  'closed',
]);

const { icon } = useKindIcon(props);
const { addPropClasses } = usePropClasses(props);
const modal = ref(null);

function openModal() {
  modal.value.show();
  emit('opened');
}

onClickOutside(modal, () => {
  modal.value.close();
  emit('closed');
});
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

.form {
  grid-area: button;
}

.close {
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
}
</style>
