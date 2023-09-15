import ZoaAutocompleteTextbox from './AutocompleteTextbox.vue';

const meta = {
  component: ZoaAutocompleteTextbox,
  title: 'Components/Inputs/Textbox/Autocomplete',
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
          'A textbox with dropdown options. The text entered into the box is the returned value; options are supplied from outside of the component, and users can choose whether or not to click them.',
      },
    },
  },
};

export default meta;

const Base = {
  args: {
    label: 'Autocomplete',
    labelPosition: 'above',
    placeholder: 'Write something here...',
    options: ['Option 1', 'Option 2', { label: 'Option 3', value: 'opt3' }],
  },
  render: (args) => ({
    components: { ZoaAutocompleteTextbox },
    setup() {
      return { args };
    },
    template: `
          <zoa-autocomplete-textbox v-bind="args"/>
        `,
  }),
};

export const Default = {
  ...Base,
};
