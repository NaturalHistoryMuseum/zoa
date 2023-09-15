import ZoaRangeSlider from './RangeSlider.vue';

const meta = {
  component: ZoaRangeSlider,
  title: 'Components/Inputs/Slider/Range',
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
    labelsRight: false,
  },
  render: (args) => ({
    components: { ZoaRangeSlider },
    setup() {
      return { args };
    },
    template: `
          <zoa-range-slider v-bind="args"/>
        `,
  }),
};

export const Default = {
  ...Base,
};
