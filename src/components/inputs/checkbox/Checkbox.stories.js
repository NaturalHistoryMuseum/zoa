import ZoaCheckbox from './Checkbox.vue';
import { ZoaInput } from '../../index.js';
import { argTypes, renderSetup } from '../stories.js';

const meta = {
  component: ZoaCheckbox,
  title: 'Components/Inputs/Checkbox',
  argTypes,
  parameters: {
    docs: {
      description: {
        component: 'A single checkbox with an optional label.',
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
    template: `
      <zoa-input zoa-type="checkbox"
                 :class="rootClass"
                 :label="label"
                 :label-position="labelPosition"
                 :help="help"
                 :help-position="helpPosition"
                 :disabled="disabled"
                 :options="{delay, name, checkValue}"
      />
    `,
  }),
};

export const Default = {
  ...Base,
};
