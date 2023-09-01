import{Z as p}from"./Button-c200b95d.js";import"./vue.esm-bundler-480dfa76.js";import"./_plugin-vue_export-helper-c27b6911.js";const g={component:p,title:"Components/Inputs/Button",argTypes:{kind:{control:"select",options:["normal","primary"],default:"normal"},label:{control:"text"}}},l={args:{label:"Button"},render:c=>({components:{ZoaButton:p},setup(){return{args:c}},template:`
          <zoa-button v-bind="args"/>
        `})},r={...l,args:{kind:"normal"}},a={...l,args:{kind:"primary",label:"Special Button"}};var e,o,t;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  ...Base,
  args: {
    kind: 'normal'
  }
}`,...(t=(o=r.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var n,s,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Base,
  args: {
    kind: 'primary',
    label: 'Special Button'
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const B=["Normal","Primary"];export{r as Normal,a as Primary,B as __namedExportsOrder,g as default};
//# sourceMappingURL=Button.stories-9a34539d.js.map
