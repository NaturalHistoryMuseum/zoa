import{f as c}from"./Modal-72e04429.js";import{n as d}from"./ToggleButton-66942192.js";import"./Button-9bf32460.js";import"./Flash-f5b2953c.js";import{a as g,r as b}from"./stories-be5014a9.js";import"./vue.esm-bundler-9e01c687.js";import"./classes-b26c0b12.js";import"./iframe-8b4bca48.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";const k={component:c,title:"Components/Inputs/Select/Multiselect",argTypes:g,parameters:{docs:{description:{component:"A dropdown/select component allowing selection of multiple options. Options can be passed in as a mixed list of strings or objects with `label`, `value`, and (optionally) `group` keys. Each option must have a unique value (or label, if not using values), even between groups."}}}},h={args:{label:"Multiselect",labelPosition:"above",help:"Some example help text.",helpPosition:"right",delay:0,placeholder:"select option",options:["Option 1",{label:"Option 2",value:"opt2"},{label:"Option 3",value:"opt3",group:"Subgroup"},{label:"Option 4",group:"Subgroup"}],itemName:"item",itemNamePlural:"",searchDelay:200,enableSearch:!1,itemHeight:38},render:e=>({components:{ZoaMultiselect:c},setup(){return b(e)},template:`
      <zoa-input zoa-type="multiselect"
                 :class="rootClass"
                 :label="label"
                 :label-position="labelPosition"
                 :help="help"
                 :help-position="helpPosition"
                 :options="{delay, placeholder, options, itemName, itemNamePlural, searchDelay, enableSearch, itemHeight}"
      />
    `})},o={...h},a=["root"];[...Array(200).keys()].forEach(e=>{a.push(`Group ${e+1}`)});const t={...h,args:{label:"Many Options",labelPosition:"above",help:"Some example help text.",helpPosition:"right",delay:0,placeholder:"select option",options:[...Array(300).keys()].map(e=>{let l={value:d(Math.ceil(Math.random()*100))};const r=a[Math.floor(Math.random()*a.length)];return r!=="root"&&(l.group=r),l}),itemName:"datum",itemNamePlural:"data",searchDelay:200,enableSearch:!0,itemHeight:38}};var n,p,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Base
}`,...(s=(p=o.parameters)==null?void 0:p.docs)==null?void 0:s.source}}};var i,m,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const w=["Default","Many"];export{o as Default,t as Many,w as __namedExportsOrder,k as default};
//# sourceMappingURL=Multiselect.stories-6566d041.js.map
