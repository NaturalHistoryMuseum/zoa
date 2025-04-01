import ZoaDropdownSearch from './ZoaDropdownSearch.vue';
import { ZoaInput } from '../../index.js';
import { argTypes } from '../stories.js';
import { renderSetup } from '../../utils/stories.js';

const template = `
<zoa-input zoa-type="dropdown-search"
           :class="rootClass"
           :label="label"
           :label-position="labelPosition"
           :help="help"
           :help-position="helpPosition"
           :disabled="disabled"
           :config="{delay, placeholder, options, searchDelay, enableSearch, itemHeight}"
/>
`;

const meta = {
  component: ZoaDropdownSearch,
  title: 'Components/Inputs/Select/DropdownSearch',
  argTypes,
  parameters: {
    docs: {
      description: {
        component:
          'A dropdown/select component allowing searching/filtering the list of potential options. Options can be passed in as a mixed list of strings or objects with `label` and `value` keys. Each option must have a unique value (or label, if not using values).',
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
    label: 'Searchable Dropdown',
    labelPosition: 'above',
    help: 'Some example help text.',
    helpPosition: 'right',
    disabled: false,
    delay: 0,
    placeholder: 'select option',
    options: [
      'Option 1',
      {
        label: 'Option 2',
        value: 'opt2',
      },
      { label: 'Option 3', value: 'opt3' },
      { label: 'Option 4' },
      'Option 5',
    ],
    searchDelay: 200,
    enableSearch: true,
    itemHeight: 38,
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
