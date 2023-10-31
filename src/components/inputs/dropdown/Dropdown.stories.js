import ZoaDropdown from './Dropdown.vue';

const meta = {
  component: ZoaDropdown,
  title: 'Components/Inputs/Select/Dropdown',
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
          'A dropdown/select component. Options can be passed in as a mixed list of strings or objects with `label` and `value` keys.',
      },
    },
  },
};

export default meta;

const Base = {
  args: {
    label: 'Dropdown',
    labelPosition: 'above',
    options: ['Option 1', 'Option 2', { label: 'Option 3', value: 'opt3' }],
  },
  render: (args) => ({
    components: { ZoaDropdown },
    setup() {
      return { args };
    },
    template: `
          <zoa-dropdown v-bind="args"/>
        `,
  }),
};

export const Default = {
  ...Base,
};
