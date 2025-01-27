import { ZoaInput } from '../../index.js';
import { argTypes } from '../stories.js';
import { renderSetup } from '../../utils/stories.js';

const template = `
<zoa-input zoa-type="empty"
           :class="rootClass"
           :label="label"
           :label-position="labelPosition"
           :help="help"
           :help-position="helpPosition"
           :grid-class="gridClass"
>
  <zoa-input zoa-type="checkbox" label-position="below" label="option 1"/>
  <zoa-input zoa-type="checkbox" label-position="below" label="option 2"/>
</zoa-input>
`;

const meta = {
  component: ZoaInput,
  title: 'Components/Inputs/Empty',
  argTypes: {
    ...argTypes,
    zoaType: {
      table: {
        disable: true,
      },
    },
    options: {
      table: {
        disable: true,
      },
    },
    gridClass: {
      table: {
        category: 'Root props',
      },
    },
    'v-model': {
      table: {
        disable: true,
      },
    },
    change: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'An empty grid for positioning other inputs under a single label.',
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
    label: 'Empty',
    labelPosition: 'above',
    help: 'Some example help text.',
    helpPosition: 'right',
    gridClass: '',
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
