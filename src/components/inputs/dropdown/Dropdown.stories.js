import ZoaDropdown from './Dropdown.vue';

const meta = {
  component: ZoaDropdown,
  title: 'Components/Inputs/Dropdown',
  argTypes: {
    placeholder: {
      control: 'text',
    },
    label: {
      control: 'text',
      default: 'Dropdown',
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
    placeholder: 'Write something here...',
    label: 'Dropdown',
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
