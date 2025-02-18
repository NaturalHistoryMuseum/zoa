import{g as b,b as g}from"./Modal-dX3kwc13.js";import"./Button-Csj6IT7x.js";import"./ToggleButton-Bm4SYgdV.js";import"./Tabs-DKBHZb_U.js";import"./Flash-5_NEKTbu.js";import{a as y}from"./stories-C8tJLLqD.js";import{r as f}from"./stories-DRgnFlAq.js";import{d as $}from"./index-CQDB1i6d.js";import"./vue.esm-bundler-jKUKFo4Q.js";import"./index-Bi6-mJwv.js";import"./_plugin-vue_export-helper-_YPhuzn9.js";import"./iframe-UoQItGig.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";const d=`
<zoa-input zoa-type="multiselect"
           :class="rootClass"
           :label="label"
           :label-position="labelPosition"
           :help="help"
           :help-position="helpPosition"
           :disabled="disabled"
           :config="{delay, placeholder, options, itemName, itemNamePlural, searchDelay, enableSearch, itemHeight}"
/>
`,I={component:b,title:"Components/Inputs/Select/Multiselect",argTypes:y,parameters:{docs:{description:{component:"A dropdown/select component allowing selection of multiple options. Options can be passed in as a mixed list of strings or objects with `label`, `value`, and (optionally) `group` keys. Each option must have a unique value (or label, if not using values), even between groups."},source:{code:d}}}},h={args:{label:"Multiselect",labelPosition:"above",help:"Some example help text.",helpPosition:"right",disabled:!1,delay:0,placeholder:"select option",options:["Option 1",{label:"Option 2",value:"opt2"},{label:"Option 3",value:"opt3",group:"Subgroup"},{label:"Option 4",group:"Subgroup"}],itemName:"item",itemNamePlural:"",searchDelay:200,enableSearch:!1,itemHeight:38},render:a=>({components:{ZoaInput:g},setup(){return f(a)},template:d})},o={...h},l=["root"];[...Array(200).keys()].forEach(a=>{l.push(`Group ${a+1}`)});const e={label:"Many Options",labelPosition:"above",help:"An example with a lot of randomly generated options and groups.",options:[...Array(300).keys()].map(a=>{let r={value:$.loremIpsum({count:Math.ceil(Math.random()*20),units:"words",suffix:""})};const s=l[Math.floor(Math.random()*l.length)];return s!=="root"&&(r.group=s),r}),itemName:"datum",itemNamePlural:"data",enableSearch:!0,searchDelay:200},t={...h,args:e,parameters:{docs:{source:{code:`
<zoa-input zoa-type="multiselect"
           label="${e.label}"
           label-position="${e.labelPosition}"
           help="${e.help}"
           :config="{options, itemName: '${e.itemName}', itemNamePlural: '${e.itemNamePlural}', enableSearch: ${e.enableSearch}, searchDelay: ${e.searchDelay}}"
/>
        `}}}};var n,i,p;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Base
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const C=["Default","Many"];export{o as Default,t as Many,C as __namedExportsOrder,I as default};
