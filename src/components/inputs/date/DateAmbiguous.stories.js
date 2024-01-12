import ZoaDateAmbiguous from './DateAmbiguous.vue';
import { ZoaInput } from '../../index.js';
import { argTypes, renderSetup } from '../stories.js';

const meta = {
  component: ZoaDateAmbiguous,
  title: 'Components/Inputs/Date/Ambiguous Date',
  argTypes,
  parameters: {
    docs: {
      description: {
        component:
          'A date picker that allows for missing parts, e.g. just a year, a year and a month, a month and a day, etc.',
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
    delay: 200,
    placeholder: 'placeholder',
    min: '0000-01-01',
    max: 'today',
  },
  render: (args) => ({
    components: { ZoaInput },
    setup() {
      return renderSetup(args);
    },
    template: `
      <zoa-input zoa-type="date-ambiguous"
                 :class="rootClass"
                 :label="label"
                 :label-position="labelPosition"
                 :help="help"
                 :help-position="helpPosition"
                 :options="{delay, placeholder, min, max}"
      />
    `,
  }),
};

export const Default = {
  ...Base,
};
