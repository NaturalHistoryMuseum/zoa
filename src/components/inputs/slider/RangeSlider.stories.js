import ZoaRangeSlider from './RangeSlider.vue';

const meta = {
  component: ZoaRangeSlider,
  title: 'Components/Inputs/Slider/Range',
  argTypes: {
    placeholder: {
      control: 'number',
    },
    label: {
      control: 'text',
      default: 'Range',
    },
    labelPosition: {
      control: 'select',
      options: ['above', 'below', 'left', 'right', 'none'],
      default: 'above',
    },
  },
};

export default meta;

const Base = {
  args: {
    label: 'Range',
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
