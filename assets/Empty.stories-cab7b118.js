import"./Button-bdae5805.js";import"./ToggleButton-ce082f8d.js";import"./Tabs-4e0434fc.js";import{b as p}from"./Modal-c098256f.js";import"./Flash-450398d5.js";import{a as r,r as l}from"./stories-3167c046.js";import"./vue.esm-bundler-b24b9645.js";import"./_plugin-vue_export-helper-3e980904.js";import"./index-036ad48b.js";import"./iframe-043f1358.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";const C={component:p,title:"Components/Inputs/Empty",argTypes:{...r,zoaType:{table:{disable:!0}},options:{table:{disable:!0}},gridClass:{table:{category:"Root props"}},"v-model":{table:{disable:!0}},change:{table:{disable:!0}}},parameters:{docs:{description:{component:"An empty grid for positioning other inputs under a single label."}}}},i={args:{class:"",label:"Empty",labelPosition:"above",help:"Some example help text.",helpPosition:"right",gridClass:""},render:s=>({components:{ZoaInput:p},setup(){return l(s)},template:`
      <zoa-input zoa-type="empty"
                 :class="rootClass"
                 :label="label"
                 :label-position="labelPosition"
                 :help="help"
                 :help-position="helpPosition"
                 :grid-class="gridClass"
      >
        <zoa-input zoa-type="checkbox" label-position="below" label="option 1"/>
        <zoa-input zoa-type="checkbox" label-position="below" label="option 2"/>
      </zoa-input>
        `})},e={...i};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Base
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const P=["Default"];export{e as Default,P as __namedExportsOrder,C as default};
