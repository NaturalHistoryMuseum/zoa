import ZoaFlash from './Flash.vue';

const template = `
<zoa-flash :kind="kind"
           :class="rootClass"
           :header="header"
           :message="message"
/>
`;

const meta = {
  component: ZoaFlash,
  title: 'Components/Dialogs/Flash',
  argTypes: {
    kind: {
      control: 'select',
      options: ['info', 'warning', 'success', 'error'],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A flash dialog for displaying alert messages within the body of the page.',
      },
      source: {
        code: template,
      },
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
    template,
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
