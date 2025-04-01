import { htmlArgs, renderSetup } from '../../utils/stories.js';
import ZoaModal from './ZoaModal.vue';

const template = `
<zoa-modal :kind="kind"
           :header="header"
           :message="message"
           :class="rootClass"
           :button-args="buttonArgs"
/>
`;

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
      source: {
        code: template,
      },
    },
  },
};

export default meta;

const Base = {
  args: {
    kind: 'info',
    header: 'Modal dialog header',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum.',
    class: '',
    buttonArgs: { label: 'Open modal' },
  },
  render: (args) => ({
    components: { ZoaModal },
    setup() {
      return renderSetup(args);
    },
    template,
  }),
};

export const Default = {
  ...Base,
  tags: ['!dev', '!autodocs'], // hides it from the sidebar and variant section
};

const slotTemplate = `
<zoa-modal>
  <template v-slot:button>Button label</template>
  <template v-slot:header>You can also use slots!</template>
  <span>The default slot defines the modal body.</span>
</zoa-modal>
`;
export const Slots = {
  render: () => ({
    components: { ZoaModal },
    template: slotTemplate,
  }),
  parameters: {
    docs: {
      source: {
        code: slotTemplate,
      },
    },
  },
};

// VARIANTS =====
const infoArgs = {
  kind: 'info',
};
export const Info = {
  ...Base,
  args: infoArgs,
  parameters: {
    docs: {
      source: {
        code: `<zoa-modal ${htmlArgs(infoArgs)}/>`,
      },
    },
  },
};

const warningArgs = {
  kind: 'warning',
  header: "Are you sure that's a good idea?",
};
export const Warning = {
  ...Base,
  args: warningArgs,
  parameters: {
    docs: {
      source: {
        code: `<zoa-modal ${htmlArgs(warningArgs)}/>`,
      },
    },
  },
};

const errorArgs = {
  kind: 'error',
  header: 'Oh no! Something went wrong.',
};
export const Error = {
  ...Base,
  args: errorArgs,
  parameters: {
    docs: {
      source: {
        code: `<zoa-modal ${htmlArgs(errorArgs)}/>`,
      },
    },
  },
};

const successArgs = {
  kind: 'success',
  header: 'Congratulations! The thing worked.',
};
export const Success = {
  ...Base,
  args: successArgs,
  parameters: {
    docs: {
      source: {
        code: `<zoa-modal ${htmlArgs(successArgs)}/>`,
      },
    },
  },
};
