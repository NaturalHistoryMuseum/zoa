import{c as r,b as p}from"./Modal-c098256f.js";import"./Button-bdae5805.js";import"./ToggleButton-ce082f8d.js";import"./Tabs-4e0434fc.js";import"./Flash-450398d5.js";import{a as i,r as l}from"./stories-3167c046.js";import"./vue.esm-bundler-b24b9645.js";import"./index-036ad48b.js";import"./_plugin-vue_export-helper-3e980904.js";import"./iframe-043f1358.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";const A={component:r,title:"Components/Inputs/Date/Ambiguous Date",argTypes:i,parameters:{docs:{description:{component:"A date picker that allows for missing parts, e.g. just a year, a year and a month, a month and a day, etc."}}}},m={args:{class:"",label:"Date",labelPosition:"above",help:"Some example help text.",helpPosition:"right",disabled:!1,delay:200,placeholder:"placeholder",min:"0000-01-01",max:"today"},render:s=>({components:{ZoaInput:p},setup(){return l(s)},template:`
      <zoa-input zoa-type="date-ambiguous"
                 :class="rootClass"
                 :label="label"
                 :label-position="labelPosition"
                 :help="help"
                 :help-position="helpPosition"
                 :disabled="disabled"
                 :options="{delay, placeholder, min, max}"
      />
    `})},e={...m};var a,o,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...Base
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const S=["Default"];export{e as Default,S as __namedExportsOrder,A as default};
