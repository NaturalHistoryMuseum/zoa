<template>
  <div
    :class="[$style.grid, $style[`grid--${labelPosition}`]]"
    :id="componentId"
  >
    <label
      :for="subId('dropdown')"
      v-if="label && labelPosition !== 'none'"
      :class="[$style.label, $style[`label--${labelPosition}`]]"
    >
      {{ label }}
    </label>
    <div :class="$style.wrapper">
      <select :id="subId('dropdown')" :class="$style.input" v-model="value">
        <option v-for="opt in dropdownOptions" value="opt.value">
          {{ opt.label }}
        </option>
      </select>
      <font-awesome-icon icon="fa-solid fa-caret-down" :class="$style.arrow" />
    </div>
  </div>
</template>

<script setup>
import { useComponentId } from '../../utils/compid.js';
import { computed } from 'vue';
import FontAwesomeIcon from '../../../icons.js';
import { useChangeEmits } from '../common.js';

const props = defineProps({
  labelPosition: {
    type: String,
    default: 'above',
  },
  label: {
    type: String,
    default: 'Dropdown',
  },
  delay: {
    type: Number,
    default: 0,
  },
  options: {
    type: Array,
  },
});

const { componentId, subId } = useComponentId();

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

const emit = defineEmits(['change', 'update:modelValue']);
const { value } = useChangeEmits(emit, props);
</script>

<style module lang="scss">
@import '../inputs';

.input {
  appearance: none;
  -webkit-appearance: none;
  width: 100%;
  cursor: pointer;
}

.wrapper {
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
