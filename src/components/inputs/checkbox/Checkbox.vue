<template>
  <div
    :class="$style.inputWrapper"
    :aria-labelledby="labelId"
    :aria-describedby="helpId"
  >
    <input
      type="checkbox"
      :id="inputId"
      :class="$style.defaultCheckbox"
      v-model="value"
      :name="name ? name : null"
      :value="_checkValue"
      ref="checkboxInput"
    />
    <span :class="$style.checkbox" @click="toggleValue">
      <font-awesome-icon icon="fa-solid fa-check" :class="$style.check" />
    </span>
  </div>
</template>

<script setup>
import FontAwesomeIcon from '../../../icons.js';
import { useChangeEmits } from '../common.js';
import { useFocusWithin, onKeyStroke } from '@vueuse/core';
import { ref, computed, isProxy, toRaw, inject } from 'vue';

const props = defineProps({
  /**
   * @model
   */
  modelValue: {
    type: [Boolean, Array],
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
   * An optional name for the checkbox; if this is set, the checkbox will return
   * the checkValue/label instead of a boolean.
   */
  name: {
    type: [String, null],
    default: null,
  },
  /**
   * An optional alternative value for the checkbox to return. If not specified,
   * the label value will be used.
   */
  checkValue: {
    type: [String, null],
    default: null,
  },
});

const inputId = inject('inputId');
const labelId = inject('labelId');
const helpId = inject('helpId');

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
const checkboxInput = ref(null);

// STATE
const focus = useFocusWithin(rootContainer);

// EXPOSE
defineExpose({
  target: checkboxInput,
});

const label = inject('label');
const _checkValue = computed(() => {
  return props.checkValue || label.value;
});

function toggleValue() {
  // if the same v-model is set on a group of checkboxes, they return an array
  // of their _checkValue values instead of a single boolean.
  let currentValue = isProxy(value.value) ? toRaw(value.value) : value.value;
  if (props.name) {
    if (!Array.isArray(currentValue)) {
      // make sure it's an array
      value.value = [];
      currentValue = [];
    }
    // if it's currently unchecked, we want to check it, and vice versa
    let check = !checkboxInput.value.checked;
    // double-check the value isn't on there already
    currentValue = currentValue.filter((v) => v !== _checkValue.value);
    if (check) {
      currentValue.push(_checkValue.value);
    }
    value.value = currentValue;
    checkboxInput.value.checked = check;
  } else {
    value.value = !value.value;
  }
}

onKeyStroke(' ', () => {
  if (focus.focused.value) {
    toggleValue();
  }
});
</script>

<style module lang="scss">
@import '../inputs';

.defaultCheckbox {
  display: none;
}

.checkbox {
  height: 1.5em;
  width: 1.5em;
  cursor: pointer;
  background: white;
  border: 1px solid $grey;
  border-radius: $rounding;
  position: relative;
  display: block;

  .defaultCheckbox:checked ~ & {
    background: $primary-a;

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
}

.inputWrapper {
  justify-self: center;
}
</style>
