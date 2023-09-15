import ZoaTextbox from './Textbox.vue';

const meta = {
  component: ZoaTextbox,
  title: 'Components/Inputs/Textbox/Simple',
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
        component: 'A one-line textbox.',
      },
    },
  },
};

export default meta;

const Base = {
  args: {
    label: 'Textbox',
    labelPosition: 'above',
    placeholder: 'Write something here...',
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
