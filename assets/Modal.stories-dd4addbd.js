import{k as f}from"./Modal-72e04429.js";import"./vue.esm-bundler-9e01c687.js";import"./Button-9bf32460.js";import"./classes-b26c0b12.js";import"./ToggleButton-66942192.js";import"./Flash-f5b2953c.js";import"./iframe-8b4bca48.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";const x={component:f,title:"Components/Dialogs/Modal",argTypes:{kind:{control:"select",options:["info","warning","success","error"]}},parameters:{docs:{description:{component:"A modal dialog for displaying pop-up alert messages."}}}},s={args:{},render:w=>({components:{ZoaModal:f},setup(){return{args:w}},template:`
      <zoa-modal v-bind="args"><span>Here is some content that goes in the modal.</span></zoa-modal>
        `})},e={...s,args:{kind:"info",header:"Here is an informational message."}},r={...s,args:{kind:"warning",header:"Are you sure that's a good idea?"}},o={...s,args:{kind:"error",header:"Oh no! Something went wrong."}},a={...s,args:{kind:"success",header:"Congratulations! The thing worked."}};var n,t,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Base,
  args: {
    kind: 'info',
    header: 'Here is an informational message.'
  }
}`,...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var d,c,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Base,
  args: {
    kind: 'warning',
    header: "Are you sure that's a good idea?"
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,g,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...Base,
  args: {
    kind: 'error',
    header: 'Oh no! Something went wrong.'
  }
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var l,h,k;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Base,
  args: {
    kind: 'success',
    header: 'Congratulations! The thing worked.'
  }
}`,...(k=(h=a.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const z=["Info","Warning","Error","Success"];export{o as Error,e as Info,a as Success,r as Warning,z as __namedExportsOrder,x as default};
//# sourceMappingURL=Modal.stories-dd4addbd.js.map
