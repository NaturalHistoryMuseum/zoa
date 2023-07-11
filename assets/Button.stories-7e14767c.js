import{o as i,a as p,b as d,n as g}from"./vue.esm-bundler-1b5c98f3.js";const n={__name:"Button",props:{kind:{type:String,default:"normal"},label:{type:String,default:"Button"}},setup(e){return(_,b)=>(i(),p("button",{class:g(["zoa-button",`zoa-button-kind--${e.kind}`])},d(e.label),3))}};n.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"kind",type:{name:"string"},defaultValue:{func:!1,value:"'normal'"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"'Button'"}}],sourceFiles:["/home/runner/work/zoa/zoa/src/components/inputs/button/Button.vue"]};const f={component:n,title:"Components/Button",argTypes:{kind:{control:"select",options:["normal","primary"],default:"normal"},label:{control:"text"}}},m={args:{label:"Button"},render:e=>({components:{ZoaButton:n},setup(){return{args:e}},template:`
      <zoa-button v-bind="args"/>
    `})},t={...m,args:{kind:"normal"}},a={...m,args:{kind:"primary",label:"Special Button"}};var o,r,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Base,
  args: {
    kind: 'normal'
  }
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var l,u,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Base,
  args: {
    kind: 'primary',
    label: 'Special Button'
  }
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const y=["Normal","Primary"];export{t as Normal,a as Primary,y as __namedExportsOrder,f as default};
//# sourceMappingURL=Button.stories-7e14767c.js.map
