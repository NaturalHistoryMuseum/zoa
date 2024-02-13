import{d as c,M as h,e as d}from"./index-4794cb07.js";import{u as f}from"./index-212dd111.js";import"./iframe-7b0d74e4.js";import"../sb-preview/runtime.js";import"./chunk-ZGA76URP-2bd2442b.js";import"./_commonjsHelpers-725317a4.js";import"./index-11d98b33.js";import"./index-38ad35d1.js";import"./index-356e4a49.js";var u={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b=c,x=Symbol.for("react.element"),v=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,_=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function l(t,n,i){var e,r={},p=null,s=null;i!==void 0&&(p=""+i),n.key!==void 0&&(p=""+n.key),n.ref!==void 0&&(s=n.ref);for(e in n)y.call(n,e)&&!j.hasOwnProperty(e)&&(r[e]=n[e]);if(t&&t.defaultProps)for(e in n=t.defaultProps,n)r[e]===void 0&&(r[e]=n[e]);return{$$typeof:x,type:t,key:p,ref:s,props:r,_owner:_.current}}a.Fragment=v;a.jsx=l;a.jsxs=l;u.exports=a;var o=u.exports;const z=`# Zoa

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
import {createApp} from 'vue'
import App from './App.vue'
import {Zoa} from '@nhm-data/zoa';
import '@nhm-data/zoa/theme';

const app = createApp(App)
app.use(Zoa)
app.mount('#app')
\`\`\`

\`\`\`vue
<!-- Component.vue -->
<template>
  <zoa-button label="Submit"/>
</template>
\`\`\`

Or imported manually into individual components:

\`\`\`vue
<!-- Component.vue -->
<template>
  <zoa-button label="Submit"/>
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
  <zoa-input zoa-type="checkbox" label="Checkbox" :options="{ name: 'chkbox', delay: '200' }"/>
  <zoa-input zoa-type="textbox" label="Textbox" :options="{ placeholder: 'this is a placeholder' }"/>
</template>

<script setup>
import { ZoaInput } from '@nhm-data/zoa';
<\/script>
\`\`\`
`;function m(t){return o.jsxs(o.Fragment,{children:[o.jsx(h,{title:"Introduction"}),`
`,o.jsx(d,{children:z})]})}function M(t={}){const{wrapper:n}=Object.assign({},f(),t.components);return n?o.jsx(n,Object.assign({},t,{children:o.jsx(m,t)})):m()}export{M as default};
