import{f as c}from"./Modal-2ab67ce5.js";import{n as d}from"./index-036ad48b.js";import"./Button-bdae5805.js";import"./ToggleButton-ce082f8d.js";import"./Tabs-4e0434fc.js";import"./Flash-450398d5.js";import{a as g,r as b}from"./stories-3167c046.js";import"./vue.esm-bundler-b24b9645.js";import"./_plugin-vue_export-helper-3e980904.js";import"./iframe-cd6fae2b.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";const A={component:c,title:"Components/Inputs/Select/Multiselect",argTypes:g,parameters:{docs:{description:{component:"A dropdown/select component allowing selection of multiple options. Options can be passed in as a mixed list of strings or objects with `label`, `value`, and (optionally) `group` keys. Each option must have a unique value (or label, if not using values), even between groups."}}}},h={args:{label:"Multiselect",labelPosition:"above",help:"Some example help text.",helpPosition:"right",disabled:!1,delay:0,placeholder:"select option",options:["Option 1",{label:"Option 2",value:"opt2"},{label:"Option 3",value:"opt3",group:"Subgroup"},{label:"Option 4",group:"Subgroup"}],itemName:"item",itemNamePlural:"",searchDelay:200,enableSearch:!1,itemHeight:38},render:e=>({components:{ZoaMultiselect:c},setup(){return b(e)},template:`
      <zoa-input zoa-type="multiselect"
                 :class="rootClass"
                 :label="label"
                 :label-position="labelPosition"
                 :help="help"
                 :help-position="helpPosition"
                 :disabled="disabled"
                 :options="{delay, placeholder, options, itemName, itemNamePlural, searchDelay, enableSearch, itemHeight}"
      />
    `})},o={...h},a=["root"];[...Array(200).keys()].forEach(e=>{a.push(`Group ${e+1}`)});const t={...h,args:{label:"Many Options",labelPosition:"above",help:"Some example help text.",helpPosition:"right",delay:0,placeholder:"select option",options:[...Array(300).keys()].map(e=>{let l={value:d(Math.ceil(Math.random()*100))};const r=a[Math.floor(Math.random()*a.length)];return r!=="root"&&(l.group=r),l}),itemName:"datum",itemNamePlural:"data",searchDelay:200,enableSearch:!0,itemHeight:38}};var n,s,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Base
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Base,
  args: {
    label: 'Many Options',
    labelPosition: 'above',
    help: 'Some example help text.',
    helpPosition: 'right',
    delay: 0,
    placeholder: 'select option',
    options: [...Array(300).keys()].map(i => {
      let opt = {
        value: nanoid(Math.ceil(Math.random() * 100))
      };
      const group = groups[Math.floor(Math.random() * groups.length)];
      if (group !== 'root') {
        opt['group'] = group;
      }
      return opt;
    }),
    itemName: 'datum',
    itemNamePlural: 'data',
    searchDelay: 200,
    enableSearch: true,
    itemHeight: 38
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const H=["Default","Many"];export{o as Default,t as Many,H as __namedExportsOrder,A as default};
