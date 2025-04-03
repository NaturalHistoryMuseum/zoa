<template>
  <div
    :aria-describedby="helpId"
    :aria-labelledby="labelId"
    :class="[$style.inputWrapper, disabled ? $style.disabled : '']"
  >
    <input
      :id="inputId"
      ref="radioInput"
      v-model="value"
      :class="$style.defaultRadio"
      :disabled="disabled"
      :name="name ? name : null"
      type="radio"
      :value="_checkValue"
    />
    <span :class="$style.radio" @click="toggleValue">
      <font-awesome-icon :class="$style.check" icon="fa-solid fa-circle" />
    </span>
  </div>
</template>

<script setup>
import { onKeyStroke, useFocusWithin } from '@vueuse/core';
import { computed, inject, ref } from 'vue';
import FontAwesomeIcon from '../../../icons.js';
import { useChangeEmits } from '../common.js';

const props = defineProps({
  /**
   * @model
   */
  modelValue: {
    type: String,
    default: undefined,
  },
  /**
   * Debounce delay for the `change` event, in ms.
   */
  delay: {
    type: Number,
    default: 0,
  },
  /**
   * An optional name for a radio button group; if this is set, the radio button
   * will return the value of the radio button that's currently selected in the
   * group.
   */
  name: {
    type: [String, null],
    default: null,
  },
  /**
   * An optional alternative value for the radio button to return. If not
   * specified, the label value will be used. If neither are specified, the
   * input ID will be used.
   */
  checkValue: {
    type: [String, null],
    default: null,
  },
});

const inputId = inject('inputId');
const labelId = inject('labelId');
const helpId = inject('helpId');
const disabled = inject('disabled');

const emit = defineEmits([
  /**
   * Emitted when the value changes; debounced if the delay prop is > 0.
   * @arg {boolean} newValue the new value
   */
  'change',
  /**
   * @ignore
   */
  'update:modelValue',
]);
const { value } = useChangeEmits(emit, props);

// ELEMENTS
const rootContainer = inject('rootContainer');
const radioInput = ref(null);

// STATE
const focus = useFocusWithin(rootContainer);

// EXPOSE
defineExpose({
  target: radioInput,
});

const label = inject('label');
const _checkValue = computed(() => {
  return props.checkValue || label.value || inputId.value;
});

function toggleValue() {
  if (disabled.value) {
    return;
  }

  // if it's currently unchecked, we want to check it; ignore if already checked
  let checked = value.value === _checkValue.value;
  if (!checked) {
    value.value = _checkValue.value;
  }
}

onKeyStroke(' ', () => {
  if (focus.focused.value) {
    toggleValue();
  }
});
</script>

<style module lang="scss">
@use '../inputs';
@use '../../../styles/palette';
@use '../../../styles/vars';

.defaultRadio {
  display: none;
}

.radio {
  height: 1.5em;
  width: 1.5em;
  cursor: pointer;
  background: white;
  border: 1px solid palette.$grey;
  border-radius: 100%;
  position: relative;
  display: block;

  .defaultRadio:checked ~ & {
    background: palette.$primary;

    & > .check {
      display: block;
    }
  }
}

.check {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  font-size: 0.7em;
}

.inputWrapper {
  justify-self: center;

  &.disabled .radio {
    @include inputs.disabled;
  }
}
</style>
