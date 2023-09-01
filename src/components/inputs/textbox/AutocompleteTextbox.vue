<template>
  <div
    :class="[$style.grid, $style[`grid--${labelPosition}`]]"
    :id="componentId"
  >
    <label
      :for="subId('textbox')"
      v-if="label && labelPosition !== 'none'"
      :class="[$style.label, $style[`label--${labelPosition}`]]"
    >
      {{ label }}
    </label>
    <div :class="$style.wrapper" ref="container">
      <input
        type="text"
        :placeholder="placeholder"
        :id="subId('textbox')"
        :class="$style.input"
        v-model="value"
        @focusin="focused = true"
        ref="textbox"
      />
      <div :class="$style.options" v-if="focused" ref="dropdown">
        <ul>
          <li
            v-for="opt in dropdownOptions"
            :class="$style.option"
            @click="setOption(opt.value)"
            tabindex="0"
          >
            <span>{{ opt.label }}</span>
            <input type="hidden" :value="opt.value" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useComponentId } from '../../utils/compid.js';
import { useChangeEmits } from '../common.js';
import { computed, ref } from 'vue';
import {
  onClickOutside,
  onKeyStroke,
  useFocusWithin,
  useFocus,
} from '@vueuse/core';

const props = defineProps({
  modelValue: {},
  labelPosition: {
    type: String,
    default: 'above',
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
    default: 200,
  },
  options: {
    type: Array,
  },
});

const { componentId, subId } = useComponentId();

const emit = defineEmits(['change', 'update:modelValue']);
const { value } = useChangeEmits(emit, props);

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

// elements
const container = ref(null);
const textbox = ref(null);
const dropdown = ref(null);

const focused = ref(false);
const textboxFocus = useFocus(textbox);
const dropdownFocus = useFocusWithin(dropdown);

function unfocus() {
  container.value.blur();
  textbox.value.blur();
  dropdown.value.blur();
  focused.value = false;
}

onClickOutside(container, () => {
  focused.value = false;
});

onKeyStroke('ArrowDown', () => {
  if (textboxFocus.focused.value) {
    dropdown.value.children[0].children[0].focus();
  } else if (dropdownFocus.focused.value) {
    const selectedElement = dropdown.value.querySelector('li:focus');
    if (!selectedElement || !selectedElement.nextElementSibling) {
      dropdown.value.children[0].children[0].focus();
    } else {
      selectedElement.nextElementSibling.focus();
    }
  }
});

onKeyStroke('ArrowUp', () => {
  if (dropdownFocus.focused.value) {
    const selectedElement = dropdown.value.querySelector('li:focus');
    if (!selectedElement || !selectedElement.previousElementSibling) {
      textbox.value.focus();
    } else {
      selectedElement.previousElementSibling.focus();
    }
  }
});

onKeyStroke('Enter', () => {
  if (dropdownFocus.focused.value) {
    const selectedElement = dropdown.value.querySelector('li:focus');
    if (selectedElement) {
      setOption(selectedElement.querySelector('input').value);
    }
  }
  unfocus();
});

function setOption(text) {
  value.value = text;
  unfocus();
}
</script>

<style module lang="scss">
@import '../inputs';

.wrapper {
  position: relative;
}

.options {
  position: absolute;
  background: white;
  border: 1px solid $grey;
  border-radius: $rounding;
  width: 100%;
  margin-top: 2px;
  font-size: 0.9em;

  & > ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
}

.option {
  padding: $padding;

  &:hover,
  &:focus {
    background: $secondary;
  }

  &:first-child {
    border-radius: $rounding $rounding 0 0;
  }

  &:last-child {
    border-radius: 0 0 $rounding $rounding;
  }
}
</style>
