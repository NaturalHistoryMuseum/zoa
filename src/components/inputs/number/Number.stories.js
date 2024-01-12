import ZoaNumber from './Number.vue';
import { ZoaInput } from '../../index.js';
import { argTypes, renderSetup } from '../stories.js';

const meta = {
  component: ZoaNumber,
  title: 'Components/Inputs/Number',
  argTypes,
  parameters: {
    docs: {
      description: {
        component: 'A number select component.',
      },
    },
  },
};

export default meta;

const Base = {
  args: {
    class: '',
    label: 'Number',
    labelPosition: 'above',
    help: 'Some example help text.',
    helpPosition: 'right',
    delay: 200,
    placeholder: 0,
    min: null,
    max: null,
    step: 1,
  },
  render: (args) => ({
    components: { ZoaInput },
    setup() {
      return renderSetup(args);
    },
    template: `
      <zoa-input zoa-type="number"
                 :class="rootClass"
                 :label="label"
                 :label-position="labelPosition"
                 :help="help"
                 :help-position="helpPosition"
                 :options="{delay, placeholder, min, max, step}"
      />
        `,
  }),
};

export const Default = {
  ...Base,
};
