import ZoaSlider from './Slider.vue';
import { ZoaInput } from '../../index.js';
import { argTypes } from '../stories.js';
import { renderSetup } from '../../utils/stories.js';

const template = `
<zoa-input zoa-type="slider"
           :class="rootClass"
           :label="label"
           :label-position="labelPosition"
           :help="help"
           :help-position="helpPosition"
           :disabled="disabled"
           :options="{delay, placeholder, min, max, step,
                     placeholderPosition, validMin, validMax,
                     activeTrackRight, valueLabelPosition}"
/>
`;

const meta = {
  component: ZoaSlider,
  title: 'Components/Inputs/Slider/Single',
  argTypes: {
    ...argTypes,
    valueLabelPosition: {
      control: 'select',
      options: ['above', 'below'],
    },
    activeTrackRight: {
      control: 'boolean',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A slider component, returning a single value.',
      },
      source: {
        code: template,
      },
    },
  },
};

export default meta;

const Base = {
  args: {
    label: 'Slider',
    labelPosition: 'above',
    help: 'Some example help text.',
    helpPosition: 'right',
    disabled: false,
    delay: 200,
    placeholder: null,
    min: 0,
    max: 100,
    step: 1,
    placeholderPosition: 0.5,
    validMin: null,
    validMax: null,
    valueLabelPosition: 'below',
    activeTrackRight: false,
  },
  render: (args) => ({
    components: { ZoaInput },
    setup() {
      return renderSetup(args);
    },
    template,
  }),
};

export const Default = {
  ...Base,
};
