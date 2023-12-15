import ZoaTextbox from './Textbox.vue';
import { ZoaInput } from '../../index.js';
import { argTypes, renderSetup } from '../stories.js';

const meta = {
  component: ZoaTextbox,
  title: 'Components/Inputs/Textbox/Simple',
  argTypes,
  parameters: {
    docs: {
      description: {
        component: 'A one-line textbox.',
      },
    },
  },
};

export default meta;

const Base = {
  args: {
    class: '',
    label: 'Textbox',
    labelPosition: 'above',
    help: 'Some example help text.',
    delay: 200,
    placeholder: 'Write something here...',
  },
  render: (args) => ({
    components: { ZoaInput },
    setup() {
      return renderSetup(args);
    },
    template: `
      <zoa-input zoa-type="textbox"
                 :class="rootClass"
                 :label="label"
                 :label-position="labelPosition"
                 :help="help"
                 :options="{delay, placeholder}"
      />
    `,
  }),
};

export const Default = {
  ...Base,
};
