import ZoaButton from './Button.vue';

const meta = {
  component: ZoaButton,
  title: 'Components/Inputs/Button/Button',
  argTypes: {
    kind: {
      control: 'select',
      options: ['normal', 'primary'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A button.',
      },
    },
  },
};

export default meta;

const Base = {
  args: {
    label: 'Button',
    size: 'md',
  },
  render: (args) => ({
    components: { ZoaButton },
    setup() {
      return { args };
    },
    template: `
          <zoa-button v-bind="args"/>
        `,
  }),
};

export const Normal = {
  ...Base,
  args: {
    kind: 'normal',
  },
};

export const Primary = {
  ...Base,
  args: {
    kind: 'primary',
    label: 'Special Button',
  },
};
