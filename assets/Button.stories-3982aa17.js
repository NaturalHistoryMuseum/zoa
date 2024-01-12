import{Z as p}from"./Button-9bf32460.js";import"./vue.esm-bundler-9e01c687.js";import"./classes-b26c0b12.js";const g={component:p,title:"Components/Inputs/Button/Button",argTypes:{kind:{control:"select",options:["normal","primary","alt"]},size:{control:"select",options:["sm","md"]}},parameters:{docs:{description:{component:"A button."}}}},c={args:{label:"Button",size:"md"},render:i=>({components:{ZoaButton:p},setup(){return{args:i}},template:`
          <zoa-button v-bind="args"/>
        `})},r={...c,args:{kind:"normal"}},o={...c,args:{kind:"primary",label:"Special Button"}};var e,t,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  ...Base,
  args: {
    kind: 'normal'
  }
}`,...(a=(t=r.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};var n,s,m;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Base,
  args: {
    kind: 'primary',
    label: 'Special Button'
  }
}`,...(m=(s=o.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const B=["Normal","Primary"];export{r as Normal,o as Primary,B as __namedExportsOrder,g as default};
//# sourceMappingURL=Button.stories-3982aa17.js.map
