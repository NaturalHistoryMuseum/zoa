import Button from '../components/Button.ce.vue';
import '../styles/button.scss';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction
const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    kind: {
      control: 'select',
      options: ['normal', 'primary'],
      default: 'normal',
    },
    label: {
      control: 'text',
    },
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args"/>
    `,
  }),
};

export default meta;

export const Normal = {
  args: {
    kind: 'normal',
    label: 'Button',
  },
  render: meta.render,
};

export const Primary = {
  args: {
    kind: 'primary',
    label: 'Special Button',
  },
  render: meta.render,
};
