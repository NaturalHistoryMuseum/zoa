import ZoaEmpty from './Empty.vue';
import ZoaCheckbox from '../checkbox/Checkbox.vue';

const meta = {
  component: ZoaEmpty,
  title: 'Components/Inputs/Empty',
  argTypes: {
    'update:modelValue': {
      table: {
        disable: true,
      },
    },
    labelPosition: {
      control: 'select',
      options: ['above', 'below', 'left', 'right', 'none'],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'An empty grid for positioning other inputs under a single label.',
      },
    },
  },
};

export default meta;

const Base = {
  args: {
    label: 'Empty',
    labelPosition: 'above',
  },
  render: (args) => ({
    components: { ZoaEmpty, ZoaCheckbox },
    setup() {
      return { args };
    },
    template: `
      <zoa-empty v-bind="args">
        <zoa-checkbox label-position="below" label="option 1"/>
        <zoa-checkbox label-position="below" label="option 2"/>
      </zoa-empty>
        `,
  }),
};

export const Default = {
  ...Base,
};
