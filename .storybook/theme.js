import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  // Typography
  fontBase: '"Source Sans 3", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Zoa',
  brandUrl: 'https://github.com/NaturalHistoryMuseum/zoa',
  brandImage: 'https://data.nhm.ac.uk/images/nhm_logo_black.svg',
  brandTarget: '_blank',

  colorPrimary: '#188100',
  colorSecondary: '#188100',

  // UI
  appBg: '#f2f2f2',
  appContentBg: '#ffffff',
  appBorderColor: '#dddddd',
  appBorderRadius: 4,

  // Text colors
  textColor: '#343434',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#343434',
  barSelectedColor: '#188100',
  barBg: '#f2f2f2',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#dddddd',
  inputTextColor: '#343434',
  inputBorderRadius: 2,
});
