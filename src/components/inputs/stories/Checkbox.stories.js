import ZoaCheckbox from '../Checkbox.vue';

const meta = {
  component: ZoaCheckbox,
  title: 'Components/Inputs/Checkbox',
  argTypes: {
    placeholder: {
      control: 'text',
    },
    label: {
      control: 'text',
      default: 'Checkbox',
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
    label: 'Checkbox',
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
