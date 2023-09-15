import{Z as p}from"./Button-322058b4.js";import"./vue.esm-bundler-edf20d86.js";import"./_plugin-vue_export-helper-c27b6911.js";const g={component:p,title:"Components/Inputs/Button",argTypes:{kind:{control:"select",options:["normal","primary"]},size:{control:"select",options:["sm","md"]}},parameters:{docs:{description:{component:"A button."}}}},c={args:{label:"Button",size:"md"},render:i=>({components:{ZoaButton:p},setup(){return{args:i}},template:`
          <zoa-button v-bind="args"/>
        `})},r={...c,args:{kind:"normal"}},o={...c,args:{kind:"primary",label:"Special Button"}};var e,a,t;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  ...Base,
  args: {
    kind: 'normal'
  }
}`,...(t=(a=r.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};var n,s,m;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Base,
  args: {
    kind: 'primary',
    label: 'Special Button'
  }
}`,...(m=(s=o.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const B=["Normal","Primary"];export{r as Normal,o as Primary,B as __namedExportsOrder,g as default};
//# sourceMappingURL=Button.stories-2d9d48e1.js.map
