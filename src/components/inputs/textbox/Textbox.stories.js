const meta = {
  title: 'Components/Textbox',
  argTypes: {
    placeholder: {
      control: 'text',
    },
    label: {
      control: 'text',
      default: 'Textbox',
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
    label: 'Textbox',
  },
  render: (args) => ({
    components: 'zoa-textbox',
    setup() {
      return { args };
    },
    template: `
      <zoa-textbox v-bind="args"/>
    `,
  }),
};

export const Default = {
  ...Base,
};
