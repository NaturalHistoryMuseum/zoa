import ZoaDateSimple from './DateSimple.vue';

const meta = {
  component: ZoaDateSimple,
  title: 'Components/Inputs/Date/Simple Date',
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
        component: 'A standard date picker.',
      },
    },
  },
};

export default meta;

const Base = {
  args: {
    label: 'Date',
  },
  render: (args) => ({
    components: { ZoaDateSimple },
    setup() {
      return { args };
    },
    template: `
          <zoa-date-simple v-bind="args"/>
        `,
  }),
};

export const Default = {
  ...Base,
};
