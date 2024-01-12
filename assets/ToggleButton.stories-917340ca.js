import{Z as a}from"./ToggleButton-66942192.js";import"./vue.esm-bundler-9e01c687.js";import"./classes-b26c0b12.js";const u={component:a,title:"Components/Inputs/Button/ToggleButton",argTypes:{"update:modelValue":{table:{disable:!0}},kind:{control:"select",options:["normal","primary","alt"]},size:{control:"select",options:["sm","md"]}},parameters:{docs:{description:{component:"A toggleable button. Only shows its status via colour change, so it's mostly useful for things like opening menus rather than as a part of a form."}}}},n={args:{label:"Button",size:"md"},render:r=>({components:{ZoaToggleButton:a},setup(){return{args:r}},template:`
          <zoa-toggle-button v-bind="args"/>
        `})},t={...n};var e,o,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  ...Base
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const i=["Default"];export{t as Default,i as __namedExportsOrder,u as default};
//# sourceMappingURL=ToggleButton.stories-917340ca.js.map
