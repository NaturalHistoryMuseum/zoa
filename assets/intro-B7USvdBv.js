import{am as n,an as a,ao as p}from"./index-ku68P6bd.js";import{u as i}from"./index-DWr15mJx.js";import"./iframe-DnF1o5Z-.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Cu4lwwaE.js";import"./index-DkDiOc0H.js";import"./index-ogSvIofg.js";const r=`# Zoa

UI components for the Data Portal team.

**NB: Zoa is in alpha and is subject to frequent API changes with no prior notification or appropriate semantic version change.**

## Installation

Zoa is designed for use with Vue 3.

\`\`\`shell
npm i @nhm-data/zoa
\`\`\`

## Usage

See the [storybook](https://naturalhistorymuseum.github.io/zoa) for more details on specific components.

The components can either be registered globally:

\`\`\`javascript
// main.js
import { createApp } from 'vue';
import App from './App.vue';
import { Zoa } from '@nhm-data/zoa';
import '@nhm-data/zoa/theme';

const app = createApp(App);
app.use(Zoa);
app.mount('#app');
\`\`\`

\`\`\`vue
<!-- Component.vue -->
<template>
  <zoa-button label="Submit" />
</template>
\`\`\`

Or imported manually into individual components:

\`\`\`vue
<!-- Component.vue -->
<template>
  <zoa-button label="Submit" />
</template>

<script setup>
import { ZoaButton } from '@nhm-data/zoa';
import '@nhm-data/zoa/theme';
<\/script>
\`\`\`

### Inputs

Inputs (other than the button and toggle button) are used via the \`<zoa-input>\` (or \`<ZoaInput>\`) component:

\`\`\`vue
<template>
  <zoa-input
    zoa-type="checkbox"
    label="Checkbox"
    :options="{ name: 'chkbox', delay: '200' }"
  />
  <zoa-input
    zoa-type="textbox"
    label="Textbox"
    :options="{ placeholder: 'this is a placeholder' }"
  />
</template>

<script setup>
import { ZoaInput } from '@nhm-data/zoa';
<\/script>
\`\`\`
`;function e(t){return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Introduction"}),`
`,n.jsx(p,{children:r})]})}function f(t={}){const{wrapper:o}={...i(),...t.components};return o?n.jsx(o,{...t,children:n.jsx(e,{...t})}):e()}export{f as default};
