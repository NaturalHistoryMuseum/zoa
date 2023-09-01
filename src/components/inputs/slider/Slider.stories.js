import ZoaSlider from './Slider.vue';

const meta = {
  component: ZoaSlider,
  title: 'Components/Inputs/Slider/Single',
  argTypes: {
    placeholder: {
      control: 'number',
    },
    label: {
      control: 'text',
      default: 'Slider',
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
    label: 'Slider',
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
