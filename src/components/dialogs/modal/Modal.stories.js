import ZoaModal from './Modal.vue';

const meta = {
  component: ZoaModal,
  title: 'Components/Dialogs/Modal',
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
    components: { ZoaModal },
    setup() {
      return { args };
    },
    template: `
      <zoa-modal v-bind="args"><span>Here is some content that goes in the modal.</span></zoa-modal>
        `,
  }),
};

export const Info = {
  ...Base,
  args: {
    kind: 'info',
    header: 'Here is an informational message.',
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
