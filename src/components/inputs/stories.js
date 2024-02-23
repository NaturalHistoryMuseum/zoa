export const argTypes = {
  'update:modelValue': {
    table: {
      disable: true,
    },
  },
  class: {
    control: 'text',
    description:
      'Additional class(es) to add to the root element. (Shown as `rootClass` in the code preview.)',
    table: {
      type: { summary: ['string', 'array', 'null'] },
      category: 'Root props',
    },
  },
  label: {
    control: 'text',
    description: 'Text for the input label.',
    table: {
      type: { summary: 'string' },
      category: 'Root props',
    },
  },
  labelPosition: {
    control: 'select',
    description:
      'Position of the input label (or none to only show to screenreaders).',
    options: ['above', 'below', 'left', 'right', 'none'],
    table: {
      type: { summary: 'string' },
      category: 'Root props',
    },
  },
  help: {
    control: 'text',
    description:
      'Help text to show in a tooltip when hovering over the "?" icon.',
    table: {
      type: { summary: 'string' },
      category: 'Root props',
    },
  },
  helpPosition: {
    control: 'select',
    description: 'Position of the help text.',
    options: ['left', 'right'],
    table: {
      type: { summary: 'string' },
      category: 'Root props',
    },
  },
  disabled: {
    control: 'boolean',
    description: 'Disables the input.',
    table: {
      type: { summary: 'boolean' },
      category: 'Root props',
    },
  },
  'v-model': {
    table: {
      category: 'Output',
    },
  },
};

export function renderSetup(args) {
  args['rootClass'] = args.class;
  delete args.class;
  return args;
}
