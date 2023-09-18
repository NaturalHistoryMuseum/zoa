import{r as c,M as f,e as d}from"./index-c24f9c67.js";import{u as _}from"./index-2c0eaf84.js";import"./iframe-59e41698.js";import"../sb-preview/runtime.js";import"./chunk-6P7RB4HF-36fee097.js";import"./_commonjsHelpers-725317a4.js";import"./index-d37d4223.js";import"./index-f073aaf1.js";import"./index-356e4a49.js";var u={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=c,v=Symbol.for("react.element"),x=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,y=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function l(t,n,m){var e,r={},p=null,i=null;m!==void 0&&(p=""+m),n.key!==void 0&&(p=""+n.key),n.ref!==void 0&&(i=n.ref);for(e in n)j.call(n,e)&&!b.hasOwnProperty(e)&&(r[e]=n[e]);if(t&&t.defaultProps)for(e in n=t.defaultProps,n)r[e]===void 0&&(r[e]=n[e]);return{$$typeof:v,type:t,key:p,ref:i,props:r,_owner:y.current}}a.Fragment=x;a.jsx=l;a.jsxs=l;u.exports=a;var o=u.exports;const O=`# Zoa

UI components for the Data Portal team.


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
`;function s(t){return o.jsxs(o.Fragment,{children:[o.jsx(f,{title:"Introduction"}),`
`,o.jsx(d,{children:O})]})}function k(t={}){const{wrapper:n}=Object.assign({},_(),t.components);return n?o.jsx(n,Object.assign({},t,{children:o.jsx(s,t)})):s()}export{k as default};
//# sourceMappingURL=intro-28481714.js.map
