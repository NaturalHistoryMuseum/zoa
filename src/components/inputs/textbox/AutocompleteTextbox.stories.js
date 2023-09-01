import ZoaAutocompleteTextbox from './AutocompleteTextbox.vue';

const meta = {
  component: ZoaAutocompleteTextbox,
  title: 'Components/Inputs/Textbox/Autocomplete',
  argTypes: {
    placeholder: {
      control: 'text',
    },
    label: {
      control: 'text',
      default: 'Autocomplete Textbox',
    },
    labelPosition: {
      control: 'select',
      options: ['above', 'below', 'left', 'right', 'none'],
      default: 'above',
    },
  },
};

export default meta;

const Base = {
  args: {
    placeholder: 'Write something here...',
    label: 'Autocomplete Textbox',
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
