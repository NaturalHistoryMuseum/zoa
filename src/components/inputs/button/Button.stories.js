import Button from './Button.ce.vue';
import './button.scss';

const meta = {
  title: 'Components/Button',
  component: Button,
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
