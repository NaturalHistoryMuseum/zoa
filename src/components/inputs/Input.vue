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
        <div
          :class="gridClass || $style.emptyGrid"
          v-if="ZoaInputComponent == null"
        >
          <slot />
        </div>
        <zoa-input-component v-bind="options" v-model="value" v-else />
      </fieldset>
    </template>
    <template v-else>
      <zoa-label
        :input-id="inputId"
        :legend="false"
        :label="label"
        :label-position="labelPosition"
        :tabbable="zoaInput.tabLabel"
      />
      <zoa-input-component v-bind="options" v-model="value" />
    </template>
  </div>
</template>

<script setup>
import { useComponentId } from '../utils/compid.js';
import { useChangeEmits } from './common.js';
import { computed, provide, ref } from 'vue';
import { usePropClasses } from '../utils/classes.js';
import ZoaLabel from './_parts/Label.vue';
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
    default: 'left',
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
const inputId = subId(props.zoaType);

const rootClassKeys = computed(() => {
  let _keys = [
    'rootWrapper',
    `rootWrapper--${props.labelPosition}`,
    props.zoaType,
  ];
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

// provide
provide('label', props.label);
provide('componentId', componentId);
provide('subId', subId); // this *sort of* works
provide('inputId', inputId);
provide('rootContainer', rootContainer);
</script>

<style module lang="scss">
@import 'inputs';

.checkbox {
  &.rootWrapper {
    justify-items: center;

    &.rootWrapper--left {
      grid-template-columns: auto min-content;
    }

    &.rootWrapper--right {
      grid-template-columns: min-content auto;
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
