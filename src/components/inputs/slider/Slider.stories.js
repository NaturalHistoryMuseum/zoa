import ZoaSlider from './Slider.vue';

const meta = {
  component: ZoaSlider,
  title: 'Components/Inputs/Slider/Single',
  argTypes: {
    'update:modelValue': {
      table: {
        disable: true,
      },
    },
    labelPosition: {
      control: 'select',
      options: ['above', 'below', 'left', 'right', 'none'],
    },
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
    valueLabelPosition: 'below',
    activeTrackRight: false,
  },
  render: (args) => ({
    components: { ZoaSlider },
    setup() {
      return { args };
    },
    template: `
          <zoa-slider v-bind="args"/>
        `,
  }),
};

export const Default = {
  ...Base,
};
