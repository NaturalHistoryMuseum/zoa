import{Z as f}from"./Flash-53965301.js";import"./vue.esm-bundler-480dfa76.js";import"./icons-f170c3be.js";import"./_plugin-vue_export-helper-c27b6911.js";const C={component:f,title:"Components/Dialogs/Flash",argTypes:{kind:{control:"select",options:["info","warning","success","error"],default:"normal"},header:{control:"text"}}},n={args:{},render:w=>({components:{ZoaFlash:f},setup(){return{args:w}},template:`
          <zoa-flash v-bind="args"/>
        `})},r={...n,args:{kind:"info"}},e={...n,args:{kind:"warning",header:"Are you sure that's a good idea?"}},s={...n,args:{kind:"error",header:"Oh no! Something went wrong."}},a={...n,args:{kind:"success",header:"Congratulations! The thing worked."}};var o,t,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Base,
  args: {
    kind: 'info'
  }
}`,...(c=(t=r.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var i,d,g;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...Base,
  args: {
    kind: 'warning',
    header: "Are you sure that's a good idea?"
  }
}`,...(g=(d=e.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var m,p,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Base,
  args: {
    kind: 'error',
    header: 'Oh no! Something went wrong.'
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,l,k;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Base,
  args: {
    kind: 'success',
    header: 'Congratulations! The thing worked.'
  }
}`,...(k=(l=a.parameters)==null?void 0:l.docs)==null?void 0:k.source}}};const E=["Info","Warning","Error","Success"];export{s as Error,r as Info,a as Success,e as Warning,E as __namedExportsOrder,C as default};
//# sourceMappingURL=Flash.stories-27f24122.js.map
