import{e as s,b as r}from"./Modal-bf621d7c.js";import"./Button-bdae5805.js";import"./ToggleButton-482eb4a4.js";import"./Tabs-b137f73b.js";import"./Flash-f9b6ddcb.js";import{a as n,r as l}from"./stories-be5014a9.js";import"./vue.esm-bundler-b24b9645.js";import"./index-036ad48b.js";import"./_plugin-vue_export-helper-3e980904.js";import"./iframe-7b0d74e4.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";const O={component:s,title:"Components/Inputs/Select/Dropdown",argTypes:n,parameters:{docs:{description:{component:"A dropdown/select component. Options can be passed in as a mixed list of strings or objects with `label` and `value` keys."}}}},i={args:{class:"",label:"Dropdown",labelPosition:"above",help:"Some example help text.",helpPosition:"right",delay:0,placeholder:"select an option",options:["Option 1","Option 2",{label:"Option 3",value:"opt3"}]},render:a=>({components:{ZoaInput:r},setup(){return l(a)},template:`
      <zoa-input zoa-type="dropdown"
                 :class="rootClass"
                 :label="label"
                 :label-position="labelPosition"
                 :help="help"
                 :help-position="helpPosition"
                 :options="{delay, placeholder, options}"
      />
    `})},o={...i};var e,t,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  ...Base
}`,...(p=(t=o.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};const P=["Default"];export{o as Default,P as __namedExportsOrder,O as default};
