import{d}from"./index-CQDB1i6d.js";import"./ZoaButton-DhoEM5N4.js";import"./ZoaTabs-QjsEMde2.js";import"./ZoaToggleButton-Cs0GATk4.js";import{l as u,b}from"./ZoaModal-CokGILv-.js";import"./ZoaFlash-DDlCptjI.js";import{r as h}from"./stories-DRgnFlAq.js";import{a as x}from"./stories-C8tJLLqD.js";import"./vue.esm-bundler-B4QjTGXh.js";import"./_plugin-vue_export-helper-_YPhuzn9.js";import"./compid-BcxCROCr.js";import"./iframe-Bn3UxRf9.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";const i=`
<zoa-input zoa-type="autocomplete-textbox"
           :class="rootClass"
           :label="label"
           :label-position="labelPosition"
           :help="help"
           :help-position="helpPosition"
           :disabled="disabled"
           :config="{delay, placeholder, options, enableSearch}"
/>
`,I={component:u,title:"Components/Inputs/Textbox/Autocomplete",argTypes:x,parameters:{docs:{description:{component:"A textbox with dropdown options. The text entered into the box is the returned value; options are supplied from outside of the component, and users can choose whether or not to click them."},source:{code:i}}}},m={args:{label:"Autocomplete",labelPosition:"above",help:"Some example help text.",helpPosition:"right",disabled:!1,delay:200,placeholder:"Write something here...",options:["Option 1",{value:"Option 2",order:0},{value:"opt3",order:1}],enableSearch:!1},render:c=>({components:{ZoaInput:b},setup(){return h(c)},template:i})},o={...m},e={label:"Many Options",labelPosition:"above",help:"An example with a lot of randomly generated options.",options:[...Array(300).keys()].map(()=>d.loremIpsum({count:Math.ceil(Math.random()*20),units:"words",suffix:""})),enableSearch:!0},t={...m,args:e,parameters:{docs:{source:{code:`
<zoa-input zoa-type="autocomplete-textbox"
           label="${e.label}"
           label-position="${e.labelPosition}"
           help="${e.help}"
           :config="{options, enableSearch: ${e.enableSearch}}"
/>
        `}}}};var a,r,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...Base
}`,...(n=(r=o.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var s,l,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...Base,
  args: manyArgs,
  parameters: {
    docs: {
      source: {
        code: \`
<zoa-input zoa-type="autocomplete-textbox"
           label="\${manyArgs.label}"
           label-position="\${manyArgs.labelPosition}"
           help="\${manyArgs.help}"
           :config="{options, enableSearch: \${manyArgs.enableSearch}}"
/>
        \`
      }
    }
  }
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const k=["Default","Many"];export{o as Default,t as Many,k as __namedExportsOrder,I as default};
