import ZoaModal from './Modal.vue';

const meta = {
  component: ZoaModal,
  title: 'Components/Dialogs/Modal',
  argTypes: {
    kind: {
      control: 'select',
      options: ['info', 'warning', 'success', 'error'],
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A modal dialog for displaying pop-up alert messages.',
      },
    },
  },
};

export default meta;

const Base = {
  args: {
    message: 'Here is some content that goes in the modal.',
  },
  render: (args) => ({
    components: { ZoaModal },
    setup() {
      return { args };
    },
    template: `
      <zoa-modal v-bind="args"/>
        `,
  }),
};

export const Default = {
  ...Base,
  args: {
    ...Base.args,
    kind: 'info',
    header: 'Parameters can be set using properties',
  },
};

export const Slot = {
  ...Base,
  args: {
    kind: 'info',
  },
  render: (args) => ({
    components: { ZoaModal },
    setup() {
      return { args };
    },
    template: `
      <zoa-modal v-bind="args">
        <template v-slot:button>Button slot</template>
        <template v-slot:header>Or you can use slots</template>
        <span>The default slot defines the modal body.</span>
      </zoa-modal>
        `,
  }),
};

export const Info = {
  ...Base,
  args: {
    ...Base.args,
    kind: 'info',
    header: 'Here is an informational message.',
  },
};

export const Warning = {
  ...Base,
  args: {
    ...Base.args,
    kind: 'warning',
    header: "Are you sure that's a good idea?",
  },
};

export const Error = {
  ...Base,
  args: {
    ...Base.args,
    kind: 'error',
    header: 'Oh no! Something went wrong.',
  },
};

export const Success = {
  ...Base,
  args: {
    ...Base.args,
    kind: 'success',
    header: 'Congratulations! The thing worked.',
  },
};
