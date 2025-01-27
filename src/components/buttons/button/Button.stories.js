import ZoaButton from './Button.vue';
import { renderSetup, htmlArgs } from '../../utils/stories.js';

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
      return renderSetup(args);
    },
    template,
  }),
};

// this is the main example; if we don't have this then the first variant is
// used
export const Default = {
  ...Base,
  tags: ['!dev', '!autodocs'], // hides it from the sidebar and variant section
};

// VARIANTS =====
const normalArgs = {
  kind: 'normal',
};
export const Normal = {
  ...Base,
  args: normalArgs,
  parameters: {
    docs: {
      source: {
        code: `<zoa-button ${htmlArgs(normalArgs)}/>`,
      },
    },
  },
};

const primaryArgs = {
  kind: 'primary',
  label: 'Special Button',
};
export const Primary = {
  ...Base,
  args: primaryArgs,
  parameters: {
    docs: {
      source: {
        code: `<zoa-button ${htmlArgs(primaryArgs)}/>`,
      },
    },
  },
};

const altArgs = {
  kind: 'alt',
  label: 'Different Button',
};
export const Alt = {
  ...Base,
  args: altArgs,
  parameters: {
    docs: {
      source: {
        code: `<zoa-button ${htmlArgs(altArgs)}/>`,
      },
    },
  },
};
