import ZoaTextbox from './Textbox.vue';

const meta = {
  component: ZoaTextbox,
  title: 'Components/Inputs/Textbox',
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
    components: { ZoaTextbox },
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
