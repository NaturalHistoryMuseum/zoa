<template>
  <div :class="addPropClasses([])">
    <ul :class="[$style.tabContainer, $style[`orient--${activePosition}`]]">
      <li v-for="tab in tabOptions">
        <label
          tabindex="0"
          :class="[
            $style.tab,
            $style[`orient--${activePosition}`],
            $style[`kind--${kind}`],
            $style[`size--${size}`],
            $style[`state--${value === tab.value ? 'active' : 'inactive'}`],
          ]"
        >
          <input type="radio" :value="tab.value" v-model="value" />
          <span>{{ tab.label }}</span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useComponentId } from '../../utils/compid.js';
import { useChangeEmits } from '../../inputs/common.js';
import { useFocusWithin, onKeyStroke } from '@vueuse/core';
import { ref, computed, isProxy, toRaw } from 'vue';
import { usePropClasses } from '../../utils/classes.js';

const props = defineProps({
  /**
   * @model
   */
  modelValue: {
    type: String,
    default: undefined,
  },
  /**
   * Additional class(es) to add to the root element.
   */
  class: {
    type: [String, Array, null],
    default: null,
  },
  /**
   * Debounce delay for the `change` event, in ms.
   */
  delay: {
    type: Number,
    default: 0,
  },
  /**
   * The appearance class of the tabs.
   * @values normal, primary, alt
   */
  kind: {
    type: String,
    default: 'normal',
  },
  /**
   * The size class of the tabs.
   * @values sm, md
   */
  size: {
    type: String,
    default: 'md',
  },
  /**
   * The orientation of the tab group (above/below are horizontal, left/right
   * are vertical) and position of the active indicator.
   * @values above, below, left, right
   */
  activePosition: {
    type: String,
    default: 'below',
  },
  /**
   * The options available to select. Each item can be a string, or an object
   * with `label`, `value`, and `order` keys (one of label/value required; order
   * is optional).
   */
  options: {
    type: Array,
  },
  /**
   * Initial value to set. If not set, or not a valid option, the first option
   * will be used.
   */
  initialValue: {
    type: [String, null],
    default: null,
  },
});

const { componentId, subId } = useComponentId();
const { addPropClasses } = usePropClasses(props);

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
const checkboxContainer = ref(null);
const checkboxInput = ref(null);
const focus = useFocusWithin(checkboxContainer);

// PROP PROCESSING
const tabOptions = computed(() => {
  let outputOptions = [];
  props.options.forEach((o) => {
    if (typeof o === 'object') {
      outputOptions.push({
        label: o.label || o.value,
        value: o.value || o.label,
        order: o.order == null ? null : o.order,
      });
    } else {
      outputOptions.push({ label: o, value: o });
    }
  });
  outputOptions.sort((a, b) => {
    let orderSort = 0;
    if (a.order != null || b.order != null) {
      orderSort =
        a.order != null && b.order != null
          ? a.order - b.order
          : a.order != null
            ? -1
            : 1;
    }

    let labelSort = a.label.localeCompare(b.label);

    return orderSort !== 0 ? orderSort : labelSort;
  });
  return outputOptions;
});

// set initial value
if (value.value == null) {
  if (
    props.initialValue &&
    tabOptions.value.some((o) => o.value === props.initialValue)
  ) {
    value.value = props.initialValue;
  } else {
    value.value = tabOptions.value[0].value;
  }
}
</script>

<style module lang="scss">
@use '../../inputs/inputs';
@use '../../../styles/fonts';
@use '../../../styles/palette';
@use '../../../styles/vars';

.tab {
  $arrowSize: 6px;

  font-family: fonts.$header-font;
  font-weight: 600;
  border: none;
  border-radius: vars.$rounding;
  position: relative;
  transition: 0.2s;
  cursor: pointer;
  color: black;
  background-color: palette.$grey;

  & input {
    @include vars.sr-only;
  }

  &::after {
    content: '';
    height: 0;
    width: 0;
  }

  &.state--active::after {
    position: absolute;
    border: $arrowSize solid transparent;
  }

  &.orient--left,
  &.orient--right {
    writing-mode: vertical-lr;

    &.state--active::after {
      top: 50%;
      margin-top: -$arrowSize;
    }
  }
  &.orient--left.state--active::after {
    right: 100%;
  }
  &.orient--right.state--active::after {
    left: 100%;
  }

  &.orient--above.state--active::after,
  &.orient--below.state--active::after {
    left: 50%;
    margin-left: -$arrowSize;
  }
  &.orient--above.state--active::after {
    bottom: 100%;
  }
  &.orient--below.state--active::after {
    top: 100%;
  }
}

.kind--normal {
  &:hover,
  &:focus,
  &:active {
    background-color: palette.$secondary-b;
    color: palette.$secondary-text;
  }

  &.state--active {
    background-color: palette.$secondary;
    color: palette.$secondary-text;

    &.orient--above::after {
      border-bottom-color: palette.$secondary;
    }
    &.orient--below::after {
      border-top-color: palette.$secondary;
    }
    &.orient--left::after {
      border-right-color: palette.$secondary;
    }
    &.orient--right::after {
      border-left-color: palette.$secondary;
    }
  }
}

.kind--primary {
  &:hover,
  &:focus,
  &:active {
    background-color: palette.$primary-b;
    color: palette.$primary-text;
  }

  &.state--active {
    background-color: palette.$primary;
    color: palette.$primary-text;

    &.orient--above::after {
      border-bottom-color: palette.$primary;
    }
    &.orient--below::after {
      border-top-color: palette.$primary;
    }
    &.orient--left::after {
      border-right-color: palette.$primary;
    }
    &.orient--right::after {
      border-left-color: palette.$primary;
    }
  }
}

.kind--alt {
  &:hover,
  &:focus,
  &:active {
    background-color: palette.$tertiary-b;
    color: palette.$tertiary-text;
  }

  &.state--active {
    background-color: palette.$tertiary;
    color: palette.$tertiary-text;

    &.orient--above::after {
      border-bottom-color: palette.$tertiary;
    }
    &.orient--below::after {
      border-top-color: palette.$tertiary;
    }
    &.orient--left::after {
      border-right-color: palette.$tertiary;
    }
    &.orient--right::after {
      border-left-color: palette.$tertiary;
    }
  }
}

.size--sm {
  font-size: 0.8em;

  &.orient--above,
  &.orient--below {
    padding: calc(vars.$v-pad / 2) calc(vars.$h-pad / 2);
  }
  &.orient--left,
  &.orient--right {
    padding: calc(vars.$h-pad / 2) calc(vars.$v-pad / 2);
  }
}

.size--md {
  &.orient--above,
  &.orient--below {
    padding: vars.$padding;
  }
  &.orient--left,
  &.orient--right {
    padding: vars.$h-pad vars.$v-pad;
  }
}

.tabContainer {
  list-style: none;
  display: flex;
  gap: 5px;
  margin: 0;

  &.orient--above,
  &.orient--below {
    padding: 0 5px;
  }

  &.orient--left,
  &.orient--right {
    padding: 5px 0;
    flex-direction: column;
  }
}
</style>
