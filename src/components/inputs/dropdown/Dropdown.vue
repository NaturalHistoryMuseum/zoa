<template>
  <div
    :class="$style.inputWrapper"
    :aria-labelledby="labelId"
    :aria-describedby="helpId"
  >
    <select :id="inputId" :class="$style.input" v-model="value" ref="target">
      <option :value="null">{{ placeholder }}</option>
      <option v-for="opt in dropdownOptions" :value="opt.value">
        {{ opt.label }}
      </option>
    </select>
    <font-awesome-icon icon="fa-solid fa-caret-down" :class="$style.arrow" />
  </div>
</template>

<script setup>
import { computed, inject, ref } from 'vue';
import FontAwesomeIcon from '../../../icons.js';
import { useChangeEmits } from '../common.js';

const props = defineProps({
  /**
   * @model
   */
  modelValue: {
    type: String,
  },
  /**
   * Debounce delay for the `change` event, in ms.
   */
  delay: {
    type: Number,
    default: 0,
  },
  /**
   * Text to display in the blank input.
   */
  placeholder: {
    type: String,
    default: 'Please choose an option',
  },
  /**
   * The options available to select. Each item can be a string, or an object with `label` and `value` keys.
   */
  options: {
    type: Array,
  },
});

const inputId = inject('inputId');
const labelId = inject('labelId');
const helpId = inject('helpId');

const dropdownOptions = computed(() => {
  let outputOptions = [];
  props.options.forEach((o) => {
    if (typeof o === 'object') {
      outputOptions.push({ label: o.label, value: o.value });
    } else {
      outputOptions.push({ label: o, value: o });
    }
  });
  return outputOptions;
});

const emit = defineEmits([
  /**
   * Emitted when the value changes; debounced if the delay prop is > 0.
   * @arg {string} newValue the new value
   */
  'change',
  /**
   * @ignore
   */
  'update:modelValue',
]);
const { value } = useChangeEmits(emit, props);

// ELEMENTS
const target = ref(null);

// EXPOSE
defineExpose({
  target,
});
</script>

<style module lang="scss">
@import '../inputs';

.input {
  appearance: none;
  -webkit-appearance: none;
  width: 100%;
  cursor: pointer;
}

.inputWrapper {
  position: relative;

  & > .arrow {
    position: absolute;
    top: 0;
    right: 1em;
    bottom: 0;
    margin: auto;
    padding-left: 1em;
    pointer-events: none;
    cursor: pointer;
  }
}
</style>
