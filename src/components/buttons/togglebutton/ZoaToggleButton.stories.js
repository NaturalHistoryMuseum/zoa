import { renderSetup } from '../../utils/stories.js';
import ZoaToggleButton from './ZoaToggleButton.vue';

const template = `
<zoa-toggle-button :class="rootClass"
                   :delay="delay"
                   :label="label"
                   :kind="kind"
                   :size="size"
/>
`;

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
    delay: 0,
    label: 'Button',
    kind: 'normal',
    size: 'md',
  },
  render: (args) => ({
    components: { ZoaToggleButton },
    setup() {
      return renderSetup(args);
    },
    template,
  }),
};

export const Default = {
  ...Base,
};
