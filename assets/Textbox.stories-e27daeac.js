import{Z as a}from"./Textbox-f903a799.js";import"./vue.esm-bundler-759d8a4a.js";import"./common-ade8d041.js";import"./_plugin-vue_export-helper-c27b6911.js";const c={component:a,title:"Components/Inputs/Textbox/Simple",argTypes:{"update:modelValue":{table:{disable:!0}},labelPosition:{control:"select",options:["above","below","left","right","none"]}},parameters:{docs:{description:{component:"A one-line textbox."}}}},n={args:{label:"Textbox",labelPosition:"above",placeholder:"Write something here..."},render:s=>({components:{ZoaTextbox:a},setup(){return{args:s}},template:`
          <zoa-textbox v-bind="args"/>
        `})},e={...n};var o,t,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Base
}`,...(r=(t=e.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const b=["Default"];export{e as Default,b as __namedExportsOrder,c as default};
//# sourceMappingURL=Textbox.stories-e27daeac.js.map