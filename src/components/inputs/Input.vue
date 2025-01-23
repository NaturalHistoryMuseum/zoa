<template>
  <div
    :id="componentId"
    ref="rootContainer"
    :class="addPropClasses(rootClassKeys.map((k) => $style[k]))"
  >
    <template v-if="zoaInput.multi">
      <fieldset :class="$style.fieldset">
        <zoa-label
          :input-id="inputId"
          :legend="true"
          :label="label"
          :label-position="labelPosition"
          :tabbable="zoaInput.tabLabel"
        />
        <zoa-help v-if="help" :text="help" :position="helpPosition" />
        <div
          :class="[gridClass || $style.emptyGrid, $style.inputWrapper]"
          v-if="ZoaInputComponent == null"
        >
          <slot />
        </div>
        <zoa-input-component
          v-bind="options"
          v-model="value"
          ref="inputComponent"
          v-else
        />
      </fieldset>
    </template>
    <template v-else>
      <zoa-label
        :input-id="inputId"
        :legend="false"
        :label="label"
        :label-position="labelPosition"
        :tabbable="zoaInput.tabLabel"
        :help="help"
      />
      <zoa-help v-if="help" :text="help" :position="helpPosition" />
      <zoa-input-component
        v-bind="options"
        v-model="value"
        ref="inputComponent"
      />
    </template>
  </div>
</template>

<script setup>
import { useComponentId } from '../utils/compid.js';
import { useChangeEmits } from './common.js';
import { computed, provide, ref } from 'vue';
import { usePropClasses } from '../utils/classes.js';
import ZoaLabel from './_parts/Label.vue';
import ZoaHelp from './_parts/Help.vue';
import zoaInputConfig from './zoaInputs.js';

const props = defineProps({
  /**
   * @model
   */
  modelValue: {
    default: undefined,
  },
  /**
   * Zoa input type.
   * @values checkbox, date-ambiguous, date-simple, dropdown, multiselect, empty, number, range-slider, slider, autocomplete-textbox, textbox
   */
  zoaType: {
    type: String,
    default: 'empty',
  },
  /**
   * Additional class(es) to add to the root element.
   */
  class: {
    type: [String, Array, null],
    default: null,
  },
  /**
   * Text for the input label.
   */
  label: {
    type: String,
    default: 'Input',
  },
  /**
   * Position of the input label (or none to only show to screenreaders).
   * @values left, right, above, below, none
   */
  labelPosition: {
    type: String,
    default: 'above',
  },
  /**
   * Parameters passed to the input.
   */
  options: {
    type: Object,
    default: () => {
      return {};
    },
  },
  /**
   * Class(es) for the empty grid; only used if the zoaType is 'empty' or null.
   * Defaults to an auto column grid if nothing is provided.
   */
  gridClass: {
    type: [String, Array, null],
    default: null,
  },
  /**
   * Help text.
   */
  help: {
    type: [String, null],
    default: null,
  },
  /**
   * Position of the help popup.
   * @values left, right
   */
  helpPosition: {
    type: String,
    default: 'right',
  },
  /**
   * Disables the input.
   */
  disabled: {
    type: Boolean,
    default: false,
  },
});

const zoaInput = computed(() => {
  let _zoaInput = zoaInputConfig[props.zoaType];
  if (_zoaInput == null) {
    _zoaInput = zoaInputConfig['empty'];
  }
  return _zoaInput;
});
const ZoaInputComponent = computed(() => {
  return zoaInput.value.component;
});

const { componentId, subId } = useComponentId();
const inputId = subId('input');
const labelId = subId('label');
const helpId = subId('help');

const rootClassKeys = computed(() => {
  let _keys = [
    'rootWrapper',
    `rootWrapper--${props.labelPosition}`,
    props.zoaType,
  ];
  if (!!props.help) {
    _keys.push('rootWrapper--help');
  }
  if (zoaInput.value.wrapperProps) {
    zoaInput.value.wrapperProps.forEach((p) => {
      if (props.options[p] != null) {
        _keys.push(`rootWrapper-${p}--${props.options[p]}`);
      }
    });
  }
  return _keys;
});
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

const rootContainer = ref(null);

// PROVIDE
// any provided variables that need to be reactive, e.g. props, should be
// wrapped in computed properties; if not, only the initial value will be passed
const _label = computed(() => {
  return props.label;
});
const _labelPosition = computed(() => {
  return props.labelPosition;
});
const _helpId = computed(() => {
  return props.help ? helpId : null;
});
const _disabled = computed(() => {
  return props.disabled;
});
provide('label', _label);
provide('labelPosition', _labelPosition);
provide('componentId', componentId);
provide('subId', subId); // this *sort of* works
provide('inputId', inputId);
provide('labelId', labelId);
provide('helpId', _helpId);
provide('rootContainer', rootContainer);
provide('disabled', _disabled);

const inputComponent = ref(null);
function focus() {
  if (inputComponent.value) {
    inputComponent.value.target.focus();
  }
}
function blur() {
  if (inputComponent.value) {
    inputComponent.value.target.blur();
  }
}
const target = computed(() => {
  // the primary target, e.g. the input
  if (inputComponent.value) {
    return inputComponent.value.target;
  }
});
const elements = computed(() => {
  // any other elements that might need to be exposed
  if (inputComponent.value && inputComponent.value.elements) {
    return inputComponent.value.elements;
  } else {
    return {};
  }
});
defineExpose({
  focus,
  blur,
  target,
  elements,
});
</script>

<style module lang="scss">
@use 'inputs';
@use '../../styles/vars';

.rootWrapper {
  display: grid;
  align-items: center;
  gap: vars.$label-gap;
  grid-template-rows: auto;

  // because sometimes the label is a <legend> and that has to be directly under
  // the <fieldset> element, we can't group the label and help, so we end up
  // with... this
  &.rootWrapper--above {
    grid-template-areas:
      'label'
      'input';
    grid-template-columns: 1fr;

    &.rootWrapper--help {
      grid-template-areas:
        'label help'
        'input input';
      grid-template-columns: 1fr auto;
    }
  }

  &.rootWrapper--below {
    grid-template-areas:
      'input'
      'label';
    grid-template-columns: 1fr;

    &.rootWrapper--help {
      grid-template-areas:
        'input input'
        'label help';
      grid-template-columns: 1fr auto;
    }
  }

  &.rootWrapper--left {
    grid-template-areas: 'label input';
    grid-template-columns: auto 1fr;

    &.rootWrapper--help {
      grid-template-areas: 'label input help';
      grid-template-columns: auto 1fr auto;
    }
  }

  &.rootWrapper--right {
    grid-template-areas: 'input label';
    grid-template-columns: 1fr auto;

    &.rootWrapper--help {
      grid-template-areas: 'input label help';
      grid-template-columns: 1fr auto auto;
    }
  }

  &.rootWrapper--none {
    grid-template-areas: 'input';
    grid-template-columns: 1fr;

    &.rootWrapper--help {
      grid-template-areas: 'input help';
      grid-template-columns: 1fr auto;
    }
  }
}

.checkbox,
.radio {
  &.rootWrapper {
    width: auto;

    &.rootWrapper--above {
      & > label {
        padding: 0;
        justify-self: center;
      }

      &.rootWrapper--help {
        grid-template-areas:
          '. label help'
          '. input .';
        grid-template-columns: 1fr auto 1fr;
      }
    }

    &.rootWrapper--below {
      & > label {
        padding: 0;
        justify-self: center;
      }

      &.rootWrapper--help {
        grid-template-areas:
          '. input .'
          '. label help';
        grid-template-columns: 1fr auto 1fr;
      }
    }

    &.rootWrapper--left {
      grid-template-areas: 'label input .';
      grid-template-columns: auto auto 1fr;

      &.rootWrapper--help {
        grid-template-areas: 'label input help';
      }
    }

    &.rootWrapper--right {
      grid-template-areas: 'input label .';
      grid-template-columns: auto auto 1fr;

      &.rootWrapper--help {
        grid-template-areas: 'input label help';
      }
    }

    &.rootWrapper--none {
      &.rootWrapper--help {
        grid-template-areas: 'input help';
        grid-template-columns: auto 1fr;
      }
    }
  }
}

.slider {
  &.rootWrapper,
  &.rootWrapper-valueLabelPosition--below {
    // this is the default, so apply even if the class isn't specified
    margin-bottom: 35px;
  }

  &.rootWrapper-valueLabelPosition--above {
    margin-top: 35px;
    margin-bottom: 0;
  }
}

.range-slider {
  &.rootWrapper--above {
    & > fieldset > legend {
      margin-bottom: -35px;
    }
  }
  &.rootWrapper--below {
    & > fieldset > legend {
      margin-top: -35px;
    }
  }
}

.emptyGrid {
  display: grid;
  grid-auto-flow: column;
}

.fieldset {
  border: none;
  display: contents;
}
</style>
