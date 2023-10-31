import{Z as m}from"./Multiselect-8bd7a645.js";import{n as d}from"./common-880f5067.js";import"./vue.esm-bundler-322ccd87.js";import"./index-8677b196.js";import"./icons-b305d7ce.js";import"./Checkbox-d48cabb4.js";import"./_plugin-vue_export-helper-c27b6911.js";const S={component:m,title:"Components/Inputs/Select/Multiselect",argTypes:{"update:modelValue":{table:{disable:!0}},labelPosition:{control:"select",options:["above","below","left","right","none"]}},parameters:{docs:{description:{component:"A dropdown/select component allowing selection of multiple options. Options can be passed in as a mixed list of strings or objects with `label`, `value`, and (optionally) `group` keys. Each option must have a unique value (or label, if not using values), even between groups."}}}},g={args:{label:"Multiselect",labelPosition:"above",options:["Option 1",{label:"Option 2",value:"opt2"},{label:"Option 3",value:"opt3",group:"Subgroup"},{label:"Option 4",group:"Subgroup"}]},render:o=>({components:{ZoaMultiselect:m},setup(){return{args:o}},template:`
          <zoa-multiselect v-bind="args"/>
        `})},e={...g},a=["root"];[...Array(200).keys()].forEach(o=>{a.push(`Group ${o+1}`)});const t={...g,args:{label:"Many Options",options:[...Array(300).keys()].map(o=>{let r={value:d(Math.ceil(Math.random()*100))};const n=a[Math.floor(Math.random()*a.length)];return n!=="root"&&(r.group=n),r}),enableSearch:!0}};var s,p,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...Base
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var i,u,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...Base,
  args: {
    label: 'Many Options',
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
    enableSearch: true
  }
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const w=["Default","Many"];export{e as Default,t as Many,w as __namedExportsOrder,S as default};
//# sourceMappingURL=Multiselect.stories-efa90243.js.map
