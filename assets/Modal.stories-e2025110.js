import{Z as f}from"./Modal-07225dca.js";import"./vue.esm-bundler-322ccd87.js";import"./Button-5c9ec013.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Textbox-1deab216.js";import"./common-880f5067.js";import"./AutocompleteTextbox-21d4de0a.js";import"./index-8677b196.js";import"./Dropdown-4d0fabce.js";import"./icons-b305d7ce.js";import"./Multiselect-8bd7a645.js";import"./Checkbox-d48cabb4.js";import"./Number-32185992.js";import"./DateSimple-1d576111.js";import"./DateAmbiguous-33a68284.js";import"./iframe-60d9633c.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./Slider-e5c3a00a.js";import"./RangeSlider-731ddcb4.js";import"./Flash-a166d594.js";const F={component:f,title:"Components/Dialogs/Modal",argTypes:{kind:{control:"select",options:["info","warning","success","error"]}},parameters:{docs:{description:{component:"A modal dialog for displaying pop-up alert messages."}}}},s={args:{},render:w=>({components:{ZoaModal:f},setup(){return{args:w}},template:`
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
}`,...(k=(h=a.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const G=["Info","Warning","Error","Success"];export{o as Error,r as Info,a as Success,e as Warning,G as __namedExportsOrder,F as default};
//# sourceMappingURL=Modal.stories-e2025110.js.map
