import{j as a,b as s}from"./Modal-bf621d7c.js";import"./Button-bdae5805.js";import"./ToggleButton-482eb4a4.js";import"./Tabs-b137f73b.js";import"./Flash-f9b6ddcb.js";import{a as i,r as n}from"./stories-be5014a9.js";import"./vue.esm-bundler-b24b9645.js";import"./index-036ad48b.js";import"./_plugin-vue_export-helper-3e980904.js";import"./iframe-7b0d74e4.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";const P={component:a,title:"Components/Inputs/Textbox/Autocomplete",argTypes:i,parameters:{docs:{description:{component:"A textbox with dropdown options. The text entered into the box is the returned value; options are supplied from outside of the component, and users can choose whether or not to click them."}}}},l={args:{label:"Autocomplete",labelPosition:"above",help:"Some example help text.",helpPosition:"right",delay:200,placeholder:"Write something here...",options:["Option 1","Option 2",{label:"Option 3",value:"opt3"}]},render:r=>({components:{ZoaInput:s},setup(){return n(r)},template:`
      <zoa-input zoa-type="autocomplete-textbox"
                 :class="rootClass"
                 :label="label"
                 :label-position="labelPosition"
                 :help="help"
                 :help-position="helpPosition"
                 :options="{delay, placeholder, options}"
      />
        `})},e={...l};var o,t,p;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Base
}`,...(p=(t=e.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};const T=["Default"];export{e as Default,T as __namedExportsOrder,P as default};
