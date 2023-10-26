import ZoaMultiselect from './Multiselect.vue';
import { nanoid } from 'nanoid';

const meta = {
  component: ZoaMultiselect,
  title: 'Components/Inputs/Select/Multiselect',
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
          'A dropdown/select component allowing selection of multiple options. Options can be passed in as a mixed list of strings or objects with `label`, `value`, and (optionally) `group` keys. Each option must have a unique value (or label, if not using values), even between groups.',
      },
    },
  },
};

export default meta;

const Base = {
  args: {
    label: 'Multiselect',
    labelPosition: 'above',
    options: [
      'Option 1',
      {
        label: 'Option 2',
        value: 'opt2',
      },
      { label: 'Option 3', value: 'opt3', group: 'Subgroup' },
      { label: 'Option 4', group: 'Subgroup' },
    ],
  },
  render: (args) => ({
    components: { ZoaMultiselect },
    setup() {
      return { args };
    },
    template: `
          <zoa-multiselect v-bind="args"/>
        `,
  }),
};

export const Default = {
  ...Base,
};

const groups = ['root'];
[...Array(200).keys()].forEach((i) => {
  groups.push(`Group ${i + 1}`);
});

export const Many = {
  ...Base,
  args: {
    label: 'Many Options',
    options: [...Array(300).keys()].map((i) => {
      let opt = {
        value: nanoid(5),
      };
      const group = groups[Math.floor(Math.random() * groups.length)];
      if (group !== 'root') {
        opt['group'] = group;
      }
      return opt;
    }),
    enableSearch: true,
  },
};
