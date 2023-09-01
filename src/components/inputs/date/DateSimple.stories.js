import ZoaDateSimple from './DateSimple.vue';

const meta = {
  component: ZoaDateSimple,
  title: 'Components/Inputs/Date/Simple Date',
  argTypes: {
    placeholder: {
      control: 'text',
    },
    label: {
      control: 'text',
      default: 'Date',
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
