import{g as s,b as p}from"./Modal-2ab67ce5.js";import"./Button-bdae5805.js";import"./ToggleButton-ce082f8d.js";import"./Tabs-4e0434fc.js";import"./Flash-450398d5.js";import{a as l,r as m}from"./stories-3167c046.js";import"./vue.esm-bundler-b24b9645.js";import"./index-036ad48b.js";import"./_plugin-vue_export-helper-3e980904.js";import"./iframe-cd6fae2b.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";const S={component:s,title:"Components/Inputs/Number",argTypes:l,parameters:{docs:{description:{component:"A number select component."}}}},n={args:{class:"",label:"Number",labelPosition:"above",help:"Some example help text.",helpPosition:"right",disabled:!1,delay:200,placeholder:0,min:null,max:null,step:1},render:r=>({components:{ZoaInput:p},setup(){return m(r)},template:`
      <zoa-input zoa-type="number"
                 :class="rootClass"
                 :label="label"
                 :label-position="labelPosition"
                 :help="help"
                 :help-position="helpPosition"
                 :disabled="disabled"
                 :options="{delay, placeholder, min, max, step}"
      />
        `})},e={...n};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Base
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const z=["Default"];export{e as Default,z as __namedExportsOrder,S as default};
