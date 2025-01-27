import ZoaDropdown from './Dropdown.vue';
import { ZoaInput } from '../../index.js';
import { argTypes } from '../stories.js';
import { renderSetup } from '../../utils/stories.js';

const template = `
<zoa-input zoa-type="dropdown"
           :class="rootClass"
           :label="label"
           :label-position="labelPosition"
           :help="help"
           :help-position="helpPosition"
           :disabled="disabled"
           :options="{delay, placeholder, options}"
/>
`;

const meta = {
  component: ZoaDropdown,
  title: 'Components/Inputs/Select/Dropdown',
  argTypes,
  parameters: {
    docs: {
      description: {
        component:
          'A dropdown/select component. Options can be passed in as a mixed list of strings or objects with `label` and `value` keys.',
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
    label: 'Dropdown',
    labelPosition: 'above',
    help: 'Some example help text.',
    helpPosition: 'right',
    disabled: false,
    delay: 0,
    placeholder: 'select an option',
    options: ['Option 1', 'Option 2', { label: 'Option 3', value: 'opt3' }],
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
