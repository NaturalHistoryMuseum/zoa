import{r as c,M as f,e as d}from"./index-f9383271.js";import{u as h}from"./index-1cedad18.js";import"./iframe-60d9633c.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";var u={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=c,v=Symbol.for("react.element"),x=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,b=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function l(t,n,i){var e,r={},p=null,s=null;i!==void 0&&(p=""+i),n.key!==void 0&&(p=""+n.key),n.ref!==void 0&&(s=n.ref);for(e in n)j.call(n,e)&&!y.hasOwnProperty(e)&&(r[e]=n[e]);if(t&&t.defaultProps)for(e in n=t.defaultProps,n)r[e]===void 0&&(r[e]=n[e]);return{$$typeof:v,type:t,key:p,ref:s,props:r,_owner:b.current}}a.Fragment=x;a.jsx=l;a.jsxs=l;u.exports=a;var o=u.exports;const O=`# Zoa

UI components for the Data Portal team.

**NB: Zoa is in alpha and is subject to frequent API changes with no prior notification or appropriate semantic version change.**

## Installation

Zoa is designed for use with Vue 3.

\`\`\`shell
npm i @nhm-data/zoa
\`\`\`

## Usage

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
  <ZoaButton label="Submit"/>
</template>

<script setup>
import { ZoaButton } from '@nhm-data/zoa';
import '@nhm-data/zoa/theme';
<\/script>
\`\`\`
`;function m(t){return o.jsxs(o.Fragment,{children:[o.jsx(f,{title:"Introduction"}),`
`,o.jsx(d,{children:O})]})}function S(t={}){const{wrapper:n}=Object.assign({},h(),t.components);return n?o.jsx(n,Object.assign({},t,{children:o.jsx(m,t)})):m()}export{S as default};
//# sourceMappingURL=intro-aa57e488.js.map
