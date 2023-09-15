import{Z as s}from"./Dropdown-d8430b14.js";import"./vue.esm-bundler-edf20d86.js";import"./common-06502fb3.js";import"./icons-88c9d24d.js";import"./_plugin-vue_export-helper-c27b6911.js";const m={component:s,title:"Components/Inputs/Dropdown",argTypes:{"update:modelValue":{table:{disable:!0}},labelPosition:{control:"select",options:["above","below","left","right","none"]}},parameters:{docs:{description:{component:"A dropdown/select component. Options can be passed in as a mixed list of strings or objects with `label` and `value` keys."}}}},r={args:{label:"Dropdown",labelPosition:"above",options:["Option 1","Option 2",{label:"Option 3",value:"opt3"}]},render:n=>({components:{ZoaDropdown:s},setup(){return{args:n}},template:`
          <zoa-dropdown v-bind="args"/>
        `})},o={...r};var e,t,a;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  ...Base
}`,...(a=(t=o.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const u=["Default"];export{o as Default,u as __namedExportsOrder,m as default};
//# sourceMappingURL=Dropdown.stories-63281e40.js.map
