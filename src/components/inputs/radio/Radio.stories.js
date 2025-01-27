import ZoaRadio from './Radio.vue';
import { ZoaInput } from '../../index.js';
import { argTypes } from '../stories.js';
import { renderSetup } from '../../utils/stories.js';

const template = `
<zoa-input zoa-type="radio"
           :class="rootClass"
           :label="label"
           :label-position="labelPosition"
           :help="help"
           :help-position="helpPosition"
           :disabled="disabled"
           :options="{delay, name, checkValue}"
/>
`;

const meta = {
  component: ZoaRadio,
  title: 'Components/Inputs/Radio',
  argTypes,
  parameters: {
    docs: {
      description: {
        component: 'A single radio button with an optional label.',
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
    label: 'Radio button',
    labelPosition: 'right',
    help: 'Some example help text.',
    helpPosition: 'right',
    disabled: false,
    delay: 0,
    name: '',
    checkValue: 'radiobtn',
  },
  render: (args) => ({
    components: { ZoaInput },
    setup() {
      return renderSetup(args);
    },
    template,
  }),
};

export const Default = {
  ...Base,
};
