## v0.10.0 (2024-06-18)

### Feature

- add max-height and scroll to autocomplete options

### Chores/Misc

- build dist package
- build dist package

## v0.9.0 (2024-03-05)

### Feature

- add "disabled" property to inputs
- close modal when clicking outside
- add more slots to modal

### Fix

- don't round all corners on internal dialog boxes
- **toggle**: fix toggle button spacing
- **tabs**: only set initial value if value not already set
- make content of tab label afters always empty

### Refactor

- make only the header of dialogs the highlight colour

### Chores/Misc

- build dist package
- build dist package
- build dist package

## v0.8.0 (2024-02-13)

### Feature

- add tabs component

### Fix

- fix option sorting based on order

### Refactor

- move buttons into separate folder

### Docs

- **storybook**: improve docs for buttons in storybook

### Chores/Misc

- build dist package
- build dist package

## v0.7.0 (2024-01-12)

### Feature

- add order for dropdown options
- skip level of year options if there's only one option
- move between year part boxes automatically on typing
- expose target element(s) on input components
- add clear button to y/m/d options
- add min/max date options to ambiguous date
- add earliest/latest date estimates to ambiguous date
- add help icon with tooltip
- add "empty" input for positioning multiple inputs under one label
- add class prop to all components
- add toggle button

### Fix

- remove misleading pointer hands
- add high z-index for multiselect popup
- use computed wrapper value for checkbox to avoid nulls
- define checked before it's used
- move toggle function onto checkbox from wrapper
- handle multiselect value = null, use array if checkbox name is set
- break loop after first different digit
- pad earliest/latest date parts to avoid ambiguity
- use utc date parts for min/max
- improve layout for no label, enable changing help popup position
- use fieldset for empty input
- export empty input
- make labels available to screen readers even if not shown
- show all items if the list is short
- set initial checkbox modelValue to undefined

### Refactor

- major refactor to use single input component
- use zoa-empty to structure range slider
- rearrange checkbox elements to match structure of other inputs

### Docs

- update readme

### Build System(s)

- replace hash with component name in css modules

### Chores/Misc

- build dist package
- build dist package
- build dist package
- build dist package
- build dist package

### Minor UI Changes

- make the dropdown for ambiguous date smaller and left aligned
- move labels closer vertically and make gap configurable separately
- change tertiary colour, add text colour vars, add alt button type

## v0.6.0 (2023-10-31)

### Feature

- sort dropdown items (by group, order, then label)
- implement basic fuzzy search for multiselect
- implement crude filtering for multiselect
- add multiselect component
- add name and value to checkbox

### Fix

- force all options to be single-line and truncate strings
- add extra space for the group header by increasing ix
- add array to value types for checkbox
- set correct default label
- toggle checkbox on space, not enter, and make it work in a group

### Refactor

- distinguish between visible and filtered
- remove nesting and render options as a single list

### Performance

- lazy-load date utils
- debounce updating the search term
- load a subset of multiselect options at once for large lists

### Docs

- randomise length of option names
- add notice about alpha status and frequent changes

### Style

- remove border on top group if no ungrouped items
- set maximum height for dropdown
- explicitly define the input text colour
- rename "dark" to "tertiary" and add new neutral dark

### Build System(s)

- add rollup visualiser

### Chores/Misc

- build dist package
- build dist package
- regenerate package-lock.json
- build dist package

### Minor UI Changes

- remove extra selectAll border and make labels fit li height
- stop checkbox label wrapping unnecessarily

## v0.5.1 (2023-09-18)

### Build System(s)

- use npm as package manager

### Chores/Misc

- build dist package

## v0.5.0 (2023-09-18)

### Feature

- add keyboard navigation for ambiguous date
- add keyboard navigation for checkbox

### Fix

- use number for placeholderPosition

### Chores/Misc

- build dist package
- build dist package

## v0.4.1 (2023-09-15)

### Fix

- force update label text before calculating width

### Refactor

- move slider.js functions into vue file

### Docs

- add docstrings for inputs
- add docstrings for dialogs

### Chores/Misc

- build dist package
- build dist package
- update storybook to 7.4.1
- merge build and bump jobs so they run sequentially
- remove permissions block from npm publish workflow
- build dist package
- add registry url to npm publish workflow

## v0.4.0 (2023-09-12)

### Feature

- add keyboard controls to slider
- add value label to single slider

### Fix

- allow switching the active track colour to the right side
- add a label for range slider and allow putting sublabels at right
- show both sliders in the range slider
- make valueLabel a span and reassociate the main label
- set better initial values for the range slider

### Chores/Misc

- separate build workflows for dev/patch and main
- build dist package
- build dist package
- add workflow to push releases to npm
- build dist package
- rename build workflow
- build dist package
- add workflow to build dist on push to any primary branch

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
