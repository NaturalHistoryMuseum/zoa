import ZoaNumber from './Number.vue';

const meta = {
  component: ZoaNumber,
  title: 'Components/Inputs/Number',
  argTypes: {
    placeholder: {
      control: 'text',
    },
    label: {
      control: 'text',
      default: 'Number',
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
    label: 'Number',
  },
  render: (args) => ({
    components: { ZoaNumber },
    setup() {
      return { args };
    },
    template: `
          <zoa-number v-bind="args"/>
        `,
  }),
};

export const Default = {
  ...Base,
};
