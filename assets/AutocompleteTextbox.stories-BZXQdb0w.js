import{l as s,b as l}from"./Modal-CbRs2Ka8.js";import"./Button-Csj6IT7x.js";import"./ToggleButton-BLoBQghb.js";import"./Tabs-8IVrqThf.js";import"./Flash-5_NEKTbu.js";import{a as i}from"./stories-DyPMmuse.js";import{r as n}from"./stories-DRgnFlAq.js";import"./vue.esm-bundler-jKUKFo4Q.js";import"./index-B6Qe4-Nf.js";import"./_plugin-vue_export-helper-_YPhuzn9.js";import"./iframe-Ch7-j-JB.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";const a=`
<zoa-input zoa-type="autocomplete-textbox"
           :class="rootClass"
           :label="label"
           :label-position="labelPosition"
           :help="help"
           :help-position="helpPosition"
           :disabled="disabled"
           :options="{delay, placeholder, options, enableSearch}"
/>
`,T={component:s,title:"Components/Inputs/Textbox/Autocomplete",argTypes:i,parameters:{docs:{description:{component:"A textbox with dropdown options. The text entered into the box is the returned value; options are supplied from outside of the component, and users can choose whether or not to click them."},source:{code:a}}}},m={args:{label:"Autocomplete",labelPosition:"above",help:"Some example help text.",helpPosition:"right",disabled:!1,delay:200,placeholder:"Write something here...",options:["Option 1",{value:"Option 2",order:0},{value:"opt3",order:1}],enableSearch:!1},render:p=>({components:{ZoaInput:l},setup(){return n(p)},template:a})},e={...m};var o,t,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Base
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const w=["Default"];export{e as Default,w as __namedExportsOrder,T as default};
