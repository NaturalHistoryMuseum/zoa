import ZoaDateAmbiguous from './DateAmbiguous.vue';

const meta = {
  component: ZoaDateAmbiguous,
  title: 'Components/Inputs/Date/Ambiguous Date',
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
        component:
          'A date picker that allows for missing parts, e.g. just a year, a year and a month, a month and a day, etc.',
      },
    },
  },
};

export default meta;

const Base = {
  args: {
    label: 'Date',
    labelPosition: 'above',
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
