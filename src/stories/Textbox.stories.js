import Textbox from '../components/Textbox.ce.vue';
import '../styles/textbox.scss';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction
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
