import"./Button-9bf32460.js";import"./ToggleButton-66942192.js";import{a as s}from"./Modal-72e04429.js";import"./Flash-f5b2953c.js";import{a as r,r as l}from"./stories-be5014a9.js";import"./vue.esm-bundler-9e01c687.js";import"./classes-b26c0b12.js";import"./iframe-8b4bca48.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";const f={component:s,title:"Components/Inputs/Empty",argTypes:{...r,zoaType:{table:{disable:!0}},options:{table:{disable:!0}},gridClass:{table:{category:"Root props"}},"v-model":{table:{disable:!0}},change:{table:{disable:!0}}},parameters:{docs:{description:{component:"An empty grid for positioning other inputs under a single label."}}}},i={args:{class:"",label:"Empty",labelPosition:"above",help:"Some example help text.",helpPosition:"right",gridClass:""},render:p=>({components:{ZoaInput:s},setup(){return l(p)},template:`
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
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,f as default};
//# sourceMappingURL=Empty.stories-492de78a.js.map
