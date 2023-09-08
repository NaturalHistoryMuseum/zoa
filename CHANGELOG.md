## v0.3.1 (2023-09-08)

### Performance

- import and register only specific icons

## v0.3.0 (2023-09-01)

### Feature

- add autocomplete/dropdown textbox
- add range slider with two handles
- close date picker when clicking outside, add max width
- add slider input
- add date inputs
- add size option for buttons
- add number input
- add emits and v-model to inputs
- add checkbox
- add dropdown
- add breakpoint mixins
- add favicon
- add main style file and css reset
- add modal
- add icons to flash
- add fontawesome, disable umd build
- add flash dialog component

### Fix

- handle autocomplete with no options
- add the autocomplete textbox to index
- return a value from range slider
- add sliders to index
- return correct value from ambiguous date
- use a ref as well as a prop for the emits
- use a prop for emits again
- use a ref, not a prop, for the emits
- remove padding around inputs
- use properties and computed values for emits
- add prop types
- explicitly define props
- tweak padding
- fix path to modern-css-reset
- change default dialog message
- don't add fontawesome to the app

### Refactor

- prevent crossover in range slider for accessibility
- move components into individual folders
- move change emits into common file
- abstract some common features of input components
- add common prop generator for inputs
- move the shared props/icons for dialogs
- improve dialogs, share styles
- use css modules

### Docs

- add docs for useChangeEmits
- add basic installation and usage docs to readme

### Style

- move modelValue to the top of the props list

### Build System(s)

- update storybook
- configure name style for css modules classes
- use modern yarn

### Chores/Misc

- rebuild
- build
- add .prettierrc at root
- update storybook
- rearrange inputs folder
- move inputs stories into inputs folder

### Minor UI Changes

- use wallop for storybook

## v0.2.3 (2023-07-12)

### Docs

- add introduction file
- theme the docs

## v0.2.2 (2023-07-11)

### Fix

- fix dependency version

### Chores/Misc

- remove yarn cache from action

## v0.2.1 (2023-07-11)

### Fix

- move storybook css into assets folder

## v0.2.0 (2023-07-11)

### Feature

- add a label to the textbox
- add "all" bundle
- add textbox
- use css variables for colours and fonts

### Refactor

- package to better support vue
- use web component names in stories
- move components into individual folders

### Docs

- enable autodocs for everything by default

### Build System(s)

- add an action to rebuild and deploy docs to gh pages

### Chores/Misc

- improve package.json and rebuild elements

### Minor UI Changes

- update styles for button and textbox

## v0.1.0 (2023-04-20)

### Feature

- initial commit

### Fix

- fix version numbers
