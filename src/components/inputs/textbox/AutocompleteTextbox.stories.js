import ZoaAutocompleteTextbox from './AutocompleteTextbox.vue';
import { ZoaInput } from '../../index.js';
import { argTypes } from '../stories.js';
import { renderSetup } from '../../utils/stories.js';

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
