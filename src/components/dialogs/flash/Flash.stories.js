import ZoaFlash from './Flash.vue';
import { renderSetup, htmlArgs } from '../../utils/stories.js';

const template = `
<zoa-flash :kind="kind"
           :header="header"
           :message="message"
           :class="rootClass"
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
  args: {
    kind: 'info',
    header: 'Flash dialog header',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum.',
    class: '',
  },
  render: (args) => ({
    components: { ZoaFlash },
    setup() {
      return renderSetup(args);
    },
    template,
  }),
};

// this is the main example; if we don't have this then Info is used
export const Default = {
  ...Base,
  tags: ['!dev', '!autodocs'], // hides it from the sidebar and variant section
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
        code: `<zoa-flash ${htmlArgs(infoArgs)}/>`,
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
        code: `<zoa-flash ${htmlArgs(warningArgs)}/>`,
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
        code: `<zoa-flash ${htmlArgs(errorArgs)}/>`,
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
        code: `<zoa-flash ${htmlArgs(successArgs)}/>`,
      },
    },
  },
};
