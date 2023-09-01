import ZoaDateAmbiguous from './DateAmbiguous.vue';

const meta = {
  component: ZoaDateAmbiguous,
  title: 'Components/Inputs/Date/Ambiguous Date',
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
    components: { ZoaDateAmbiguous },
    setup() {
      return { args };
    },
    template: `
          <zoa-date-ambiguous v-bind="args"/>
        `,
  }),
};

export const Default = {
  ...Base,
};
