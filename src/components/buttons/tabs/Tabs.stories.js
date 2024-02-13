import ZoaTabs from './Tabs.vue';

const meta = {
  component: ZoaTabs,
  title: 'Components/Buttons/Tabs',
  argTypes: {
    'update:modelValue': {
      table: {
        disable: true,
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
    activePosition: {
      control: 'select',
      options: ['above', 'below', 'left', 'right'],
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A set of radio buttons displayed as tabs.',
      },
    },
  },
};

export default meta;

const Base = {
  args: {
    kind: 'normal',
    size: 'md',
    activePosition: 'below',
    options: [
      'Tab 1',
      'Tab 2',
      { label: 'Tab 3', value: 'tab3', order: 0 },
      { label: 'Tab 4', order: 2 },
    ],
  },
  render: (args) => ({
    components: { ZoaTabs },
    setup() {
      return { args };
    },
    template: `
          <zoa-tabs v-bind="args"/>
        `,
  }),
};

export const Default = {
  ...Base,
};
