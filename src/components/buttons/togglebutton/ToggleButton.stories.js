import ZoaToggleButton from './ToggleButton.vue';

const meta = {
  component: ZoaToggleButton,
  title: 'Components/Buttons/ToggleButton',
  argTypes: {
    'update:modelValue': {
      table: {
        disable: true,
      },
    },
    'v-model': {
      table: {
        category: 'Output',
      },
    },
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
        component:
          "A toggleable button. Only shows its status via colour change, so it's mostly useful for things like opening menus rather than as a part of a form.",
      },
    },
  },
};

export default meta;

const Base = {
  args: {
    class: '',
    delay: 0,
    label: 'Button',
    checkValue: 'toggle',
    kind: 'normal',
    name: 'toggle-group',
    size: 'md',
  },
  render: (args) => ({
    components: { ZoaToggleButton },
    setup() {
      args['rootClass'] = args.class;
      delete args.class;
      return args;
    },
    template: `
          <zoa-toggle-button :class="rootClass"
                             :delay="delay"
                             :label="label"
                             :check-value="checkValue"
                             :kind="kind"
                             :name="name"
                             :size="size"
          />
        `,
  }),
};

export const Default = {
  ...Base,
};
