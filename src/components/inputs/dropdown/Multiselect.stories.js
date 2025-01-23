import ZoaMultiselect from './Multiselect.vue';
import { nanoid } from 'nanoid';
import { ZoaInput } from '../../index.js';
import { argTypes, renderSetup } from '../stories.js';

const meta = {
  component: ZoaMultiselect,
  title: 'Components/Inputs/Select/Multiselect',
  argTypes,
  parameters: {
    docs: {
      description: {
        component:
          'A dropdown/select component allowing selection of multiple options. Options can be passed in as a mixed list of strings or objects with `label`, `value`, and (optionally) `group` keys. Each option must have a unique value (or label, if not using values), even between groups.',
      },
    },
  },
};

export default meta;

const Base = {
  args: {
    label: 'Multiselect',
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
      { label: 'Option 3', value: 'opt3', group: 'Subgroup' },
      { label: 'Option 4', group: 'Subgroup' },
    ],
    itemName: 'item',
    itemNamePlural: '',
    searchDelay: 200,
    enableSearch: false,
    itemHeight: 38,
  },
  render: (args) => ({
    components: { ZoaInput },
    setup() {
      return renderSetup(args);
    },
    template: `
      <zoa-input zoa-type="multiselect"
                 :class="rootClass"
                 :label="label"
                 :label-position="labelPosition"
                 :help="help"
                 :help-position="helpPosition"
                 :disabled="disabled"
                 :options="{delay, placeholder, options, itemName, itemNamePlural, searchDelay, enableSearch, itemHeight}"
      />
    `,
  }),
};

export const Default = {
  ...Base,
};

const groups = ['root'];
[...Array(200).keys()].forEach((i) => {
  groups.push(`Group ${i + 1}`);
});

export const Many = {
  ...Base,
  args: {
    label: 'Many Options',
    labelPosition: 'above',
    help: 'Some example help text.',
    helpPosition: 'right',
    delay: 0,
    placeholder: 'select option',
    options: [...Array(300).keys()].map((i) => {
      let opt = {
        value: nanoid(Math.ceil(Math.random() * 100)),
      };
      const group = groups[Math.floor(Math.random() * groups.length)];
      if (group !== 'root') {
        opt['group'] = group;
      }
      return opt;
    }),
    itemName: 'datum',
    itemNamePlural: 'data',
    searchDelay: 200,
    enableSearch: true,
    itemHeight: 38,
  },
};
