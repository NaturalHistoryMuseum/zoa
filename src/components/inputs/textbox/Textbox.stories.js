import Textbox from './Textbox.ce.vue';
import './textbox.scss';

const meta = {
  title: 'Components/Textbox',
  component: Textbox,
  argTypes: {
    placeholder: {
      control: 'text',
    },
  },
  render: (args) => ({
    components: { Textbox },
    setup() {
      return { args };
    },
    template: `
      <Textbox v-bind="args"/>
    `,
  }),
};

export default meta;

export const Default = {
  args: {
    placeholder: 'Write something here...',
  },
  render: meta.render,
};
