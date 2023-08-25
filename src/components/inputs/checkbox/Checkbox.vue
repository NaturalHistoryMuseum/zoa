<template>
  <label
    :id="componentId"
    :for="subId('checkbox')"
    :class="[$style.grid, $style[`grid--${labelPosition}`]]"
  >
    <span
      v-if="label && labelPosition !== 'none'"
      :class="[$style.label, $style[`label--${labelPosition}`]]"
    >
      {{ label }}
    </span>
    <input
      type="checkbox"
      :id="subId('checkbox')"
      :class="$style.defaultCheckbox"
      @change="value"
    />
    <span :class="$style.checkbox">
      <font-awesome-icon icon="fa-solid fa-check" :class="$style.check" />
    </span>
  </label>
</template>

<script setup>
import { useComponentId } from '../../utils/compid.js';
import FontAwesomeIcon from '../../../icons.js';
import { useChangeEmits } from '../common.js';

const props = defineProps({
  labelPosition: {
    type: String,
    default: 'left',
  },
  label: {
    type: String,
    default: 'Text',
  },
  placeholder: {
    type: String,
    default: null,
  },
  delay: {
    type: Number,
    default: 0,
  },
  modelValue: {},
});

const { componentId, subId } = useComponentId();

const emit = defineEmits(['change', 'update:modelValue']);
const { value } = useChangeEmits(emit, props);
</script>

<style module lang="scss">
@import '../inputs';

.grid {
  width: min-content;
  justify-items: center;

  &.grid--left,
  &.grid--right {
    grid-template-columns: min-content min-content;
  }
}

.defaultCheckbox {
  display: none;
}

.label {
  cursor: pointer;
}

.checkbox {
  height: 1.5em;
  width: 1.5em;
  cursor: pointer;
  background: white;
  border: 1px solid $grey;
  border-radius: $rounding;
  position: relative;

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
</style>
