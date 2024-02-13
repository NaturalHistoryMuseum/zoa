import ZoaButton from './Button.vue';

const meta = {
  component: ZoaButton,
  title: 'Components/Buttons/Button',
  argTypes: {
    kind: {
      control: 'select',
      options: ['normal', 'primary', 'alt'],
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
    class: '',
    label: 'Button',
    size: 'md',
  },
  render: (args) => ({
    components: { ZoaButton },
    setup() {
      args['rootClass'] = args.class;
      delete args.class;
      return args;
    },
    template: `
      <zoa-button :class="rootClass"
                  :label="label"
                  :kind="kind"
                  :size="size"/>
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
