<template>
  <div
    :class="
      addPropClasses([$style.main, $style.container, $style[`kind--${kind}`]])
    "
  >
    <div :class="$style.header">
      <font-awesome-icon :class="$style.icon" :icon="['fa-solid', icon]" />
      <h2 :class="$style.headerText">{{ header }}</h2>
    </div>
    <div :class="$style.content">
      <!-- @slot The main content of the flash message; overrides the message prop. -->
      <slot>
        {{ message }}
      </slot>
    </div>
  </div>
</template>

<script setup>
import FontAwesomeIcon from '../../../icons.js';
import { usePropClasses } from '../../utils/classes.js';
import { useKindIcon } from '../../utils/icons.js';

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
   * The header for the flash message.
   */
  header: {
    type: String,
    default: 'Here is an informational message.',
  },
  /**
   * The body of the flash message. Overridden by the default slot.
   */
  message: {
    type: String,
    default:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum.',
  },
});

const { icon } = useKindIcon(props);
const { addPropClasses } = usePropClasses(props);
</script>

<style module lang="scss">
@use '../dialogs';
</style>
