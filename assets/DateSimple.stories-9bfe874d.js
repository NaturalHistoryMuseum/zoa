import{d as s,b as r}from"./Modal-2ab67ce5.js";import"./Button-bdae5805.js";import"./ToggleButton-ce082f8d.js";import"./Tabs-4e0434fc.js";import"./Flash-450398d5.js";import{a as l,r as i}from"./stories-3167c046.js";import"./vue.esm-bundler-b24b9645.js";import"./index-036ad48b.js";import"./_plugin-vue_export-helper-3e980904.js";import"./iframe-cd6fae2b.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";const P={component:s,title:"Components/Inputs/Date/Simple Date",argTypes:l,parameters:{docs:{description:{component:"A standard date picker."}}}},n={args:{class:"",label:"Date",labelPosition:"above",help:"Some example help text.",helpPosition:"right",disabled:!1,delay:200,placeholder:"placeholder",min:null,max:null,step:"any"},render:p=>({components:{ZoaInput:r},setup(){return i(p)},template:`
      <zoa-input zoa-type="date-simple"
                 :class="rootClass"
                 :label="label"
                 :label-position="labelPosition"
                 :help="help"
                 :help-position="helpPosition"
                 :disabled="disabled"
                 :options="{delay, placeholder, min, max, step}"
      />
        `})},e={...n};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...Base
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const z=["Default"];export{e as Default,z as __namedExportsOrder,P as default};
