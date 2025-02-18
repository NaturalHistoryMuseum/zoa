import{l as d,b as u}from"./Modal-BFBf7P4R.js";import"./Button-Csj6IT7x.js";import"./ToggleButton-Bm4SYgdV.js";import"./Tabs-DKBHZb_U.js";import"./Flash-5_NEKTbu.js";import{a as b}from"./stories-C8tJLLqD.js";import{r as h}from"./stories-DRgnFlAq.js";import{d as x}from"./index-CQDB1i6d.js";import"./vue.esm-bundler-jKUKFo4Q.js";import"./index-Bi6-mJwv.js";import"./_plugin-vue_export-helper-_YPhuzn9.js";import"./iframe-DnF1o5Z-.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";const m=`
<zoa-input zoa-type="autocomplete-textbox"
           :class="rootClass"
           :label="label"
           :label-position="labelPosition"
           :help="help"
           :help-position="helpPosition"
           :disabled="disabled"
           :config="{delay, placeholder, options, enableSearch}"
/>
`,I={component:d,title:"Components/Inputs/Textbox/Autocomplete",argTypes:b,parameters:{docs:{description:{component:"A textbox with dropdown options. The text entered into the box is the returned value; options are supplied from outside of the component, and users can choose whether or not to click them."},source:{code:m}}}},c={args:{label:"Autocomplete",labelPosition:"above",help:"Some example help text.",helpPosition:"right",disabled:!1,delay:200,placeholder:"Write something here...",options:["Option 1",{value:"Option 2",order:0},{value:"opt3",order:1}],enableSearch:!1},render:a=>({components:{ZoaInput:u},setup(){return h(a)},template:m})},o={...c},e={label:"Many Options",labelPosition:"above",help:"An example with a lot of randomly generated options.",options:[...Array(300).keys()].map(a=>x.loremIpsum({count:Math.ceil(Math.random()*20),units:"words",suffix:""})),enableSearch:!0},t={...c,args:e,parameters:{docs:{source:{code:`
<zoa-input zoa-type="autocomplete-textbox"
           label="${e.label}"
           label-position="${e.labelPosition}"
           help="${e.help}"
           :config="{options, enableSearch: ${e.enableSearch}}"
/>
        `}}}};var r,n,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  ...Base
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var l,p,i;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(i=(p=t.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const k=["Default","Many"];export{o as Default,t as Many,k as __namedExportsOrder,I as default};
