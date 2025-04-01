import ZoaCheckbox from './ZoaCheckbox.vue';
import { ZoaInput } from '../../index.js';
import { argTypes } from '../stories.js';
import { renderSetup } from '../../utils/stories.js';

const template = `
<zoa-input zoa-type="checkbox"
           :class="rootClass"
           :label="label"
           :label-position="labelPosition"
           :help="help"
           :help-position="helpPosition"
           :disabled="disabled"
           :config="{delay, name, checkValue}"
/>
`;

const meta = {
  component: ZoaCheckbox,
  title: 'Components/Inputs/Checkbox',
  argTypes,
  parameters: {
    docs: {
      description: {
        component: 'A single checkbox with an optional label.',
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
    label: 'Checkbox',
    labelPosition: 'right',
    help: 'Some example help text.',
    helpPosition: 'right',
    disabled: false,
    delay: 0,
    name: '',
    checkValue: 'chkbx',
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
