import{d as r,b as s}from"./Modal-bf621d7c.js";import"./Button-bdae5805.js";import"./ToggleButton-482eb4a4.js";import"./Tabs-b137f73b.js";import"./Flash-f9b6ddcb.js";import{a as l,r as i}from"./stories-be5014a9.js";import"./vue.esm-bundler-b24b9645.js";import"./index-036ad48b.js";import"./_plugin-vue_export-helper-3e980904.js";import"./iframe-7b0d74e4.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";const P={component:r,title:"Components/Inputs/Date/Simple Date",argTypes:l,parameters:{docs:{description:{component:"A standard date picker."}}}},n={args:{class:"",label:"Date",labelPosition:"above",help:"Some example help text.",helpPosition:"right",delay:200,placeholder:"placeholder",min:null,max:null,step:"any"},render:p=>({components:{ZoaInput:s},setup(){return i(p)},template:`
      <zoa-input zoa-type="date-simple"
                 :class="rootClass"
                 :label="label"
                 :label-position="labelPosition"
                 :help="help"
                 :help-position="helpPosition"
                 :options="{delay, placeholder, min, max, step}"
      />
        `})},e={...n};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...Base
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const z=["Default"];export{e as Default,z as __namedExportsOrder,P as default};
