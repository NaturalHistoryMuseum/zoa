import ZoaButton from './Button.vue';

const template = `
<zoa-button :class="rootClass"
            :label="label"
            :kind="kind"
            :size="size"/>
`;

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
      source: {
        code: template,
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
    template,
  }),
};

export const Normal = {
  ...Base,
  args: {
    ...Base.args,
    kind: 'normal',
  },
};

export const Primary = {
  ...Base,
  args: {
    ...Base.args,
    kind: 'primary',
    label: 'Special Button',
  },
};
