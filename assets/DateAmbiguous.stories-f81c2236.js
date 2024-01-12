import{i as r,a as p}from"./Modal-72e04429.js";import"./Button-9bf32460.js";import"./ToggleButton-66942192.js";import"./Flash-f5b2953c.js";import{a as i,r as l}from"./stories-be5014a9.js";import"./vue.esm-bundler-9e01c687.js";import"./classes-b26c0b12.js";import"./iframe-8b4bca48.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";const D={component:r,title:"Components/Inputs/Date/Ambiguous Date",argTypes:i,parameters:{docs:{description:{component:"A date picker that allows for missing parts, e.g. just a year, a year and a month, a month and a day, etc."}}}},n={args:{class:"",label:"Date",labelPosition:"above",help:"Some example help text.",helpPosition:"right",delay:200,placeholder:"placeholder",min:"0000-01-01",max:"today"},render:s=>({components:{ZoaInput:p},setup(){return l(s)},template:`
      <zoa-input zoa-type="date-ambiguous"
                 :class="rootClass"
                 :label="label"
                 :label-position="labelPosition"
                 :help="help"
                 :help-position="helpPosition"
                 :options="{delay, placeholder, min, max}"
      />
    `})},e={...n};var a,o,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...Base
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const P=["Default"];export{e as Default,P as __namedExportsOrder,D as default};
//# sourceMappingURL=DateAmbiguous.stories-f81c2236.js.map
