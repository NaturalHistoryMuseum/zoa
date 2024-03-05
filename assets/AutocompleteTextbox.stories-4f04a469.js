import{j as a,b as s}from"./Modal-41f92685.js";import"./Button-bdae5805.js";import"./ToggleButton-ce082f8d.js";import"./Tabs-4e0434fc.js";import"./Flash-450398d5.js";import{a as i,r as l}from"./stories-3167c046.js";import"./vue.esm-bundler-b24b9645.js";import"./index-036ad48b.js";import"./_plugin-vue_export-helper-3e980904.js";import"./iframe-0baf6d7a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";const P={component:a,title:"Components/Inputs/Textbox/Autocomplete",argTypes:i,parameters:{docs:{description:{component:"A textbox with dropdown options. The text entered into the box is the returned value; options are supplied from outside of the component, and users can choose whether or not to click them."}}}},n={args:{label:"Autocomplete",labelPosition:"above",help:"Some example help text.",helpPosition:"right",disabled:!1,delay:200,placeholder:"Write something here...",options:["Option 1","Option 2",{label:"Option 3",value:"opt3"}]},render:r=>({components:{ZoaInput:s},setup(){return l(r)},template:`
      <zoa-input zoa-type="autocomplete-textbox"
                 :class="rootClass"
                 :label="label"
                 :label-position="labelPosition"
                 :help="help"
                 :help-position="helpPosition"
                 :disabled="disabled"
                 :options="{delay, placeholder, options}"
      />
        `})},e={...n};var o,t,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Base
}`,...(p=(t=e.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};const T=["Default"];export{e as Default,T as __namedExportsOrder,P as default};
