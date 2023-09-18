import{Z as f}from"./Modal-cc163a74.js";import"./vue.esm-bundler-759d8a4a.js";import"./Button-cf6534c9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Textbox-f903a799.js";import"./common-ade8d041.js";import"./AutocompleteTextbox-7cb8fbf8.js";import"./index-b9f4cbeb.js";import"./Dropdown-916ad15b.js";import"./icons-9fc8db14.js";import"./Checkbox-3e4d7fad.js";import"./Number-4f8df59f.js";import"./DateSimple-71d0c52f.js";import"./DateAmbiguous-ab5783d6.js";import"./_commonjsHelpers-725317a4.js";import"./Slider-72ff35a3.js";import"./RangeSlider-63538907.js";import"./Flash-3e4145c9.js";const D={component:f,title:"Components/Dialogs/Modal",argTypes:{kind:{control:"select",options:["info","warning","success","error"]}},parameters:{docs:{description:{component:"A modal dialog for displaying pop-up alert messages."}}}},s={args:{},render:w=>({components:{ZoaModal:f},setup(){return{args:w}},template:`
      <zoa-modal v-bind="args"><span>Here is some content that goes in the modal.</span></zoa-modal>
        `})},r={...s,args:{kind:"info",header:"Here is an informational message."}},e={...s,args:{kind:"warning",header:"Are you sure that's a good idea?"}},o={...s,args:{kind:"error",header:"Oh no! Something went wrong."}},a={...s,args:{kind:"success",header:"Congratulations! The thing worked."}};var n,t,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Base,
  args: {
    kind: 'info',
    header: 'Here is an informational message.'
  }
}`,...(i=(t=r.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var m,p,d;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Base,
  args: {
    kind: 'warning',
    header: "Are you sure that's a good idea?"
  }
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,g,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(k=(h=a.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const j=["Info","Warning","Error","Success"];export{o as Error,r as Info,a as Success,e as Warning,j as __namedExportsOrder,D as default};
//# sourceMappingURL=Modal.stories-7fec5f74.js.map
