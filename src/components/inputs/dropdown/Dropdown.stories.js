import ZoaDropdown from './Dropdown.vue';
import { ZoaInput } from '../../index.js';
import { argTypes, renderSetup } from '../stories.js';

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
    delay: 0,
    placeholder: 'select an option',
    options: ['Option 1', 'Option 2', { label: 'Option 3', value: 'opt3' }],
  },
  render: (args) => ({
    components: { ZoaInput },
    setup() {
      return renderSetup(args);
    },
    template: `
      <zoa-input zoa-type="dropdown"
                 :class="rootClass"
                 :label="label"
                 :label-position="labelPosition"
                 :help="help"
                 :options="{delay, placeholder, options}"
      />
    `,
  }),
};

export const Default = {
  ...Base,
};
