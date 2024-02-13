import{Z as c}from"./Button-bdae5805.js";import"./vue.esm-bundler-b24b9645.js";import"./_plugin-vue_export-helper-3e980904.js";const B={component:c,title:"Components/Buttons/Button",argTypes:{kind:{control:"select",options:["normal","primary","alt"]},size:{control:"select",options:["sm","md"]}},parameters:{docs:{description:{component:"A button."}}}},i={args:{class:"",label:"Button",size:"md"},render:e=>({components:{ZoaButton:c},setup(){return e.rootClass=e.class,delete e.class,e},template:`
      <zoa-button :class="rootClass"
                  :label="label"
                  :kind="kind"
                  :size="size"/>
        `})},o={...i,args:{kind:"normal"}},r={...i,args:{kind:"primary",label:"Special Button"}};var s,a,t;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...Base,
  args: {
    kind: 'normal'
  }
}`,...(t=(a=o.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};var n,l,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Base,
  args: {
    kind: 'primary',
    label: 'Special Button'
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const b=["Normal","Primary"];export{o as Normal,r as Primary,b as __namedExportsOrder,B as default};
