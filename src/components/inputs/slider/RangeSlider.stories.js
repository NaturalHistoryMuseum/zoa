import ZoaRangeSlider from './RangeSlider.vue';
import { ZoaInput } from '../../index.js';
import { argTypes, renderSetup } from '../stories.js';

const meta = {
  component: ZoaRangeSlider,
  title: 'Components/Inputs/Slider/Range',
  argTypes: {
    ...argTypes,
    labelsRight: {
      control: 'boolean',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A component with two sliders representing a lower and upper value. Returns the values as an array.',
      },
    },
  },
};

export default meta;

const Base = {
  args: {
    label: 'Range',
    labelPosition: 'above',
    help: 'Some example help text.',
    helpPosition: 'right',
    delay: 200,
    placeholder: null,
    min: 0,
    max: 100,
    step: 1,
    labelsRight: false,
    labelUpper: 'Upper',
    labelLower: 'Lower',
  },
  render: (args) => ({
    components: { ZoaInput },
    setup() {
      return renderSetup(args);
    },
    template: `
      <zoa-input zoa-type="range-slider"
                 :class="rootClass"
                 :label="label"
                 :label-position="labelPosition"
                 :help="help"
                 :help-position="helpPosition"
                 :options="{delay, placeholder, min, max, step, labelsRight,
                           labelUpper, labelLower}"
      />
    `,
  }),
};

export const Default = {
  ...Base,
};
