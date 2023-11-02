import ZoaToggleButton from './ToggleButton.vue';

const meta = {
  component: ZoaToggleButton,
  title: 'Components/Inputs/Button/ToggleButton',
  argTypes: {
    'update:modelValue': {
      table: {
        disable: true,
      },
    },
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
        component:
          "A toggleable button. Only shows its status via colour change, so it's mostly useful for things like opening menus rather than as a part of a form.",
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
    components: { ZoaToggleButton },
    setup() {
      return { args };
    },
    template: `
          <zoa-toggle-button v-bind="args"/>
        `,
  }),
};

export const Default = {
  ...Base,
};
