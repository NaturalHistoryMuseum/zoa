import{Z as k}from"./Flash-450398d5.js";import"./vue.esm-bundler-b24b9645.js";import"./_plugin-vue_export-helper-3e980904.js";const A={component:k,title:"Components/Dialogs/Flash",argTypes:{kind:{control:"select",options:["info","warning","success","error"]}},parameters:{docs:{description:{component:"A flash dialog for displaying alert messages within the body of the page."}}}},o={args:{},render:w=>({components:{ZoaFlash:k},setup(){return{args:w}},template:`
          <zoa-flash v-bind="args"/>
        `})},r={...o,args:{kind:"info"}},e={...o,args:{kind:"warning",header:"Are you sure that's a good idea?"}},s={...o,args:{kind:"error",header:"Oh no! Something went wrong."}},a={...o,args:{kind:"success",header:"Congratulations! The thing worked."}};var n,t,c;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(g=(d=e.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var p,m,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Base,
  args: {
    kind: 'error',
    header: 'Oh no! Something went wrong.'
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,l,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Base,
  args: {
    kind: 'success',
    header: 'Congratulations! The thing worked.'
  }
}`,...(f=(l=a.parameters)==null?void 0:l.docs)==null?void 0:f.source}}};const C=["Info","Warning","Error","Success"];export{s as Error,r as Info,a as Success,e as Warning,C as __namedExportsOrder,A as default};
