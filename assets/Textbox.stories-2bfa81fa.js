import{k as p,b as s}from"./Modal-bf621d7c.js";import"./Button-bdae5805.js";import"./ToggleButton-482eb4a4.js";import"./Tabs-b137f73b.js";import"./Flash-f9b6ddcb.js";import{a as l,r as i}from"./stories-be5014a9.js";import"./vue.esm-bundler-b24b9645.js";import"./index-036ad48b.js";import"./_plugin-vue_export-helper-3e980904.js";import"./iframe-7b0d74e4.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";const T={component:p,title:"Components/Inputs/Textbox/Simple",argTypes:l,parameters:{docs:{description:{component:"A one-line textbox."}}}},n={args:{class:"",label:"Textbox",labelPosition:"above",help:"Some example help text.",helpPosition:"right",delay:200,placeholder:"Write something here..."},render:a=>({components:{ZoaInput:s},setup(){return i(a)},template:`
      <zoa-input zoa-type="textbox"
                 :class="rootClass"
                 :label="label"
                 :label-position="labelPosition"
                 :help="help"
                 :help-position="helpPosition"
                 :options="{delay, placeholder}"
      />
    `})},e={...n};var o,t,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Base
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const z=["Default"];export{e as Default,z as __namedExportsOrder,T as default};
