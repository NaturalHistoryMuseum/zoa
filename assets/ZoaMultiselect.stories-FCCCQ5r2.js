import{d as h}from"./index-CQDB1i6d.js";import"./ZoaButton-DhoEM5N4.js";import"./ZoaTabs-QjsEMde2.js";import"./ZoaToggleButton-Cs0GATk4.js";import{g as b,b as g}from"./ZoaModal-CokGILv-.js";import"./ZoaFlash-DDlCptjI.js";import{r as y}from"./stories-DRgnFlAq.js";import{a as f}from"./stories-C8tJLLqD.js";import"./vue.esm-bundler-B4QjTGXh.js";import"./_plugin-vue_export-helper-_YPhuzn9.js";import"./compid-BcxCROCr.js";import"./iframe-Bn3UxRf9.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";const u=`
<zoa-input zoa-type="multiselect"
           :class="rootClass"
           :label="label"
           :label-position="labelPosition"
           :help="help"
           :help-position="helpPosition"
           :disabled="disabled"
           :config="{delay, placeholder, options, itemName, itemNamePlural, searchDelay, enableSearch, itemHeight}"
/>
`,B={component:b,title:"Components/Inputs/Select/Multiselect",argTypes:f,parameters:{docs:{description:{component:"A dropdown/select component allowing selection of multiple options. Options can be passed in as a mixed list of strings or objects with `label`, `value`, and (optionally) `group` keys. Each option must have a unique value (or label, if not using values), even between groups."},source:{code:u}}}},d={args:{label:"Multiselect",labelPosition:"above",help:"Some example help text.",helpPosition:"right",disabled:!1,delay:0,placeholder:"select option",options:["Option 1",{label:"Option 2",value:"opt2"},{label:"Option 3",value:"opt3",group:"Subgroup"},{label:"Option 4",group:"Subgroup"}],itemName:"item",itemNamePlural:"",searchDelay:200,enableSearch:!1,itemHeight:38},render:a=>({components:{ZoaInput:g},setup(){return y(a)},template:u})},o={...d},l=["root"];[...Array(200).keys()].forEach(a=>{l.push(`Group ${a+1}`)});const e={label:"Many Options",labelPosition:"above",help:"An example with a lot of randomly generated options and groups.",options:[...Array(300).keys()].map(()=>{let a={value:h.loremIpsum({count:Math.ceil(Math.random()*20),units:"words",suffix:""})};const r=l[Math.floor(Math.random()*l.length)];return r!=="root"&&(a.group=r),a}),itemName:"datum",itemNamePlural:"data",enableSearch:!0,searchDelay:200},t={...d,args:e,parameters:{docs:{source:{code:`
<zoa-input zoa-type="multiselect"
           label="${e.label}"
           label-position="${e.labelPosition}"
           help="${e.help}"
           :config="{options, itemName: '${e.itemName}', itemNamePlural: '${e.itemNamePlural}', enableSearch: ${e.enableSearch}, searchDelay: ${e.searchDelay}}"
/>
        `}}}};var s,n,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...Base
}`,...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var p,m,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Base,
  args: manyArgs,
  parameters: {
    docs: {
      source: {
        code: \`
<zoa-input zoa-type="multiselect"
           label="\${manyArgs.label}"
           label-position="\${manyArgs.labelPosition}"
           help="\${manyArgs.help}"
           :config="{options, itemName: '\${manyArgs.itemName}', itemNamePlural: '\${manyArgs.itemNamePlural}', enableSearch: \${manyArgs.enableSearch}, searchDelay: \${manyArgs.searchDelay}}"
/>
        \`
      }
    }
  }
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const I=["Default","Many"];export{o as Default,t as Many,I as __namedExportsOrder,B as default};
