import { loremIpsum } from 'lorem-ipsum';
import { ZoaInput } from '../../index.js';
import { renderSetup } from '../../utils/stories.js';
import { argTypes } from '../stories.js';
import ZoaMultiselect from './ZoaMultiselect.vue';

const template = `
<zoa-input zoa-type="multiselect"
           :class="rootClass"
           :label="label"
           :label-position="labelPosition"
           :help="help"
           :help-position="helpPosition"
           :disabled="disabled"
           :config="{delay, placeholder, options, itemName, itemNamePlural, searchDelay, enableSearch, itemHeight}"
/>
`;

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
      source: {
        code: template,
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
    template,
  }),
};

export const Default = {
  ...Base,
};

const groups = ['root'];
[...Array(200).keys()].forEach((i) => {
  groups.push(`Group ${i + 1}`);
});

const manyArgs = {
  label: 'Many Options',
  labelPosition: 'above',
  help: 'An example with a lot of randomly generated options and groups.',
  options: [...Array(300).keys()].map((i) => {
    let opt = {
      value: loremIpsum({
        count: Math.ceil(Math.random() * 20),
        units: 'words',
        suffix: '',
      }),
    };
    const group = groups[Math.floor(Math.random() * groups.length)];
    if (group !== 'root') {
      opt['group'] = group;
    }
    return opt;
  }),
  itemName: 'datum',
  itemNamePlural: 'data',
  enableSearch: true,
  searchDelay: 200,
};
export const Many = {
  ...Base,
  args: manyArgs,
  parameters: {
    docs: {
      source: {
        code: `
<zoa-input zoa-type="multiselect"
           label="${manyArgs.label}"
           label-position="${manyArgs.labelPosition}"
           help="${manyArgs.help}"
           :config="{options, itemName: '${manyArgs.itemName}', itemNamePlural: '${manyArgs.itemNamePlural}', enableSearch: ${manyArgs.enableSearch}, searchDelay: ${manyArgs.searchDelay}}"
/>
        `,
      },
    },
  },
};
