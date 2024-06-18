import{e as s,b as r}from"./Modal-2ab67ce5.js";import"./Button-bdae5805.js";import"./ToggleButton-ce082f8d.js";import"./Tabs-4e0434fc.js";import"./Flash-450398d5.js";import{a as l,r as n}from"./stories-3167c046.js";import"./vue.esm-bundler-b24b9645.js";import"./index-036ad48b.js";import"./_plugin-vue_export-helper-3e980904.js";import"./iframe-cd6fae2b.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";const O={component:s,title:"Components/Inputs/Select/Dropdown",argTypes:l,parameters:{docs:{description:{component:"A dropdown/select component. Options can be passed in as a mixed list of strings or objects with `label` and `value` keys."}}}},i={args:{class:"",label:"Dropdown",labelPosition:"above",help:"Some example help text.",helpPosition:"right",disabled:!1,delay:0,placeholder:"select an option",options:["Option 1","Option 2",{label:"Option 3",value:"opt3"}]},render:p=>({components:{ZoaInput:r},setup(){return n(p)},template:`
      <zoa-input zoa-type="dropdown"
                 :class="rootClass"
                 :label="label"
                 :label-position="labelPosition"
                 :help="help"
                 :help-position="helpPosition"
                 :disabled="disabled"
                 :options="{delay, placeholder, options}"
      />
    `})},o={...i};var e,t,a;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  ...Base
}`,...(a=(t=o.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const P=["Default"];export{o as Default,P as __namedExportsOrder,O as default};
