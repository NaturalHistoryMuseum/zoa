import ZoaDateSimple from './DateSimple.vue';
import { ZoaInput } from '../../index.js';
import { argTypes, renderSetup } from '../stories.js';

const meta = {
  component: ZoaDateSimple,
  title: 'Components/Inputs/Date/Simple Date',
  argTypes,
  parameters: {
    docs: {
      description: {
        component: 'A standard date picker.',
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
    template: `
      <zoa-input zoa-type="date-simple"
                 :class="rootClass"
                 :label="label"
                 :label-position="labelPosition"
                 :help="help"
                 :help-position="helpPosition"
                 :disabled="disabled"
                 :options="{delay, placeholder, min, max, step}"
      />
        `,
  }),
};

export const Default = {
  ...Base,
};
