import ZoaAutocompleteTextbox from './AutocompleteTextbox.vue';
import { ZoaInput } from '../../index.js';
import { argTypes } from '../stories.js';
import { renderSetup } from '../../utils/stories.js';
import { loremIpsum } from 'lorem-ipsum';

const template = `
<zoa-input zoa-type="autocomplete-textbox"
           :class="rootClass"
           :label="label"
           :label-position="labelPosition"
           :help="help"
           :help-position="helpPosition"
           :disabled="disabled"
           :options="{delay, placeholder, options, enableSearch}"
/>
`;

const meta = {
  component: ZoaAutocompleteTextbox,
  title: 'Components/Inputs/Textbox/Autocomplete',
  argTypes,
  parameters: {
    docs: {
      description: {
        component:
          'A textbox with dropdown options. The text entered into the box is the returned value; options are supplied from outside of the component, and users can choose whether or not to click them.',
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
    label: 'Autocomplete',
    labelPosition: 'above',
    help: 'Some example help text.',
    helpPosition: 'right',
    disabled: false,
    delay: 200,
    placeholder: 'Write something here...',
    options: [
      'Option 1',
      { value: 'Option 2', order: 0 },
      { value: 'opt3', order: 1 },
    ],
    enableSearch: false,
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

const manyArgs = {
  label: 'Many Options',
  labelPosition: 'above',
  help: 'An example with a lot of randomly generated options.',
  options: [...Array(300).keys()].map((i) => {
    return loremIpsum({
      count: Math.ceil(Math.random() * 20),
      units: 'words',
      suffix: '',
    });
  }),
  enableSearch: true,
};
export const Many = {
  ...Base,
  args: manyArgs,
  parameters: {
    docs: {
      source: {
        code: `
<zoa-input zoa-type="autocomplete-textbox"
           label="${manyArgs.label}"
           label-position="${manyArgs.labelPosition}"
           help="${manyArgs.help}"
           :options="{options, enableSearch: ${manyArgs.enableSearch}}"
/>
        `,
      },
    },
  },
};
