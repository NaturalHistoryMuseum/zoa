import{g as s,a as r}from"./Modal-72e04429.js";import"./Button-9bf32460.js";import"./ToggleButton-66942192.js";import"./Flash-f5b2953c.js";import{a as n,r as l}from"./stories-be5014a9.js";import"./vue.esm-bundler-9e01c687.js";import"./classes-b26c0b12.js";import"./iframe-8b4bca48.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";const y={component:s,title:"Components/Inputs/Select/Dropdown",argTypes:n,parameters:{docs:{description:{component:"A dropdown/select component. Options can be passed in as a mixed list of strings or objects with `label` and `value` keys."}}}},i={args:{class:"",label:"Dropdown",labelPosition:"above",help:"Some example help text.",helpPosition:"right",delay:0,placeholder:"select an option",options:["Option 1","Option 2",{label:"Option 3",value:"opt3"}]},render:a=>({components:{ZoaInput:r},setup(){return l(a)},template:`
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
}`,...(p=(t=o.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};const D=["Default"];export{o as Default,D as __namedExportsOrder,y as default};
//# sourceMappingURL=Dropdown.stories-6747f88c.js.map
