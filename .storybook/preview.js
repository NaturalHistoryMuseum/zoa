/** @type { import('@storybook/vue3').Preview } */

import './assets/storybook.css';
import theme from './theme.js';

const preview = {
  parameters: {
    controls: {
      expanded: true,
    },
    docs: {
      theme: theme,
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'colour',
          value: '#188100',
        },
        {
          name: 'dark',
          value: '#343434',
        },
      ],
    },
  },
};

export default preview;
