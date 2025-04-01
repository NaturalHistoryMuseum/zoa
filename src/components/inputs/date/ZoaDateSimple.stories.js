import ZoaDateSimple from './ZoaDateSimple.vue';
import { ZoaInput } from '../../index.js';
import { argTypes } from '../stories.js';
import { renderSetup } from '../../utils/stories.js';

const template = `
<zoa-input zoa-type="date-simple"
           :class="rootClass"
           :label="label"
           :label-position="labelPosition"
           :help="help"
           :help-position="helpPosition"
           :disabled="disabled"
           :config="{delay, placeholder, min, max, step}"
/>
`;

const meta = {
  component: ZoaDateSimple,
  title: 'Components/Inputs/Date/Simple Date',
  argTypes,
  parameters: {
    docs: {
      description: {
        component: 'A standard date picker.',
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
    label: 'Date',
    labelPosition: 'above',
    help: 'Some example help text.',
    helpPosition: 'right',
    disabled: false,
    delay: 200,
    placeholder: 'placeholder',
    min: null,
    max: null,
    step: 'any',
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
