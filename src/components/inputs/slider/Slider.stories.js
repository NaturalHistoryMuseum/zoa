import ZoaSlider from './Slider.vue';
import { ZoaInput } from '../../index.js';
import { argTypes, renderSetup } from '../stories.js';

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
    },
  },
};

export default meta;

const Base = {
  args: {
    label: 'Slider',
    labelPosition: 'above',
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
    template: `
      <zoa-input zoa-type="slider"
                 :class="rootClass"
                 :label="label"
                 :label-position="labelPosition"
                 :options="{delay, placeholder, min, max, step,
                           placeholderPosition, validMin, validMax,
                           activeTrackRight, valueLabelPosition}"
      />
    `,
  }),
};

export const Default = {
  ...Base,
};
