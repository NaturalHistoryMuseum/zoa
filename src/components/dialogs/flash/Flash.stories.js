import ZoaFlash from './Flash.vue';

const meta = {
  component: ZoaFlash,
  title: 'Components/Dialogs/Flash',
  argTypes: {
    kind: {
      control: 'select',
      options: ['info', 'warning', 'success', 'error'],
      default: 'normal',
    },
    header: {
      control: 'text',
    },
  },
};

export default meta;

const Base = {
  args: {},
  render: (args) => ({
    components: { ZoaFlash },
    setup() {
      return { args };
    },
    template: `
          <zoa-flash v-bind="args"/>
        `,
  }),
};

export const Info = {
  ...Base,
  args: {
    kind: 'info',
  },
};

export const Warning = {
  ...Base,
  args: {
    kind: 'warning',
    header: "Are you sure that's a good idea?",
  },
};

export const Error = {
  ...Base,
  args: {
    kind: 'error',
    header: 'Oh no! Something went wrong.',
  },
};

export const Success = {
  ...Base,
  args: {
    kind: 'success',
    header: 'Congratulations! The thing worked.',
  },
};
