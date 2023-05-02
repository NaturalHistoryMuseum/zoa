const meta = {
  title: 'Components/Textbox',
  argTypes: {
    placeholder: {
      control: 'text',
    },
  },
};

export default meta;

const Base = {
  args: {
    placeholder: 'Write something here...',
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
