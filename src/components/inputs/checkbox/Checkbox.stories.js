import ZoaCheckbox from './Checkbox.vue';

const meta = {
  component: ZoaCheckbox,
  title: 'Components/Inputs/Checkbox',
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
        component: 'A single checkbox with an optional label.',
      },
    },
  },
};

export default meta;

const Base = {
  args: {
    label: 'Checkbox',
    labelPosition: 'left',
  },
  render: (args) => ({
    components: { ZoaCheckbox },
    setup() {
      return { args };
    },
    template: `
          <zoa-checkbox v-bind="args"/>
        `,
  }),
};

export const Default = {
  ...Base,
};
