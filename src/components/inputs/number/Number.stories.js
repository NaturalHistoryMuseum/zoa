import ZoaNumber from './Number.vue';

const meta = {
  component: ZoaNumber,
  title: 'Components/Inputs/Number',
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
  },
  parameters: {
    docs: {
      description: {
        component: 'A number select component.',
      },
    },
  },
};

export default meta;

const Base = {
  args: {
    label: 'Number',
    labelPosition: 'above',
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
