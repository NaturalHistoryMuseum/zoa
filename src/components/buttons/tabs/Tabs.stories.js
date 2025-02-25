import ZoaTabs from './Tabs.vue';
import { renderSetup } from '../../utils/stories.js';

const template = `
<zoa-tabs :class="rootClass"
          :delay="delay"
          :active-position="activePosition"
          :initial-value="initialValue"
          :kind="kind"
          :options="options"
          :size="size"
/>
`;

const meta = {
  component: ZoaTabs,
  title: 'Components/Buttons/Tabs',
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
    activePosition: 'below',
    initialValue: 'Tab 1',
    kind: 'normal',
    options: [
      'Tab 1',
      'Tab 2',
      { label: 'Tab 3', value: 'tab3', order: 0 },
      { label: 'Tab 4', order: 2 },
    ],
    size: 'md',
  },
  render: (args) => ({
    components: { ZoaTabs },
    setup() {
      return renderSetup(args);
    },
    template,
  }),
};

export const Default = {
  ...Base,
};
