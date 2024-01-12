import{b as a,a as s}from"./Modal-72e04429.js";import"./Button-9bf32460.js";import"./ToggleButton-66942192.js";import"./Flash-f5b2953c.js";import{a as n,r as i}from"./stories-be5014a9.js";import"./vue.esm-bundler-9e01c687.js";import"./classes-b26c0b12.js";import"./iframe-8b4bca48.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";const A={component:a,title:"Components/Inputs/Textbox/Autocomplete",argTypes:n,parameters:{docs:{description:{component:"A textbox with dropdown options. The text entered into the box is the returned value; options are supplied from outside of the component, and users can choose whether or not to click them."}}}},l={args:{label:"Autocomplete",labelPosition:"above",help:"Some example help text.",helpPosition:"right",delay:200,placeholder:"Write something here...",options:["Option 1","Option 2",{label:"Option 3",value:"opt3"}]},render:r=>({components:{ZoaInput:s},setup(){return i(r)},template:`
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
}`,...(p=(t=e.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};const O=["Default"];export{e as Default,O as __namedExportsOrder,A as default};
//# sourceMappingURL=AutocompleteTextbox.stories-99d6c51c.js.map
