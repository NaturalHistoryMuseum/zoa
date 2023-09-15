import{Z as f}from"./Modal-73a7dc77.js";import"./vue.esm-bundler-edf20d86.js";import"./Button-322058b4.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Textbox-2a6c67c4.js";import"./common-06502fb3.js";import"./AutocompleteTextbox-53423e33.js";import"./index-8e700bfe.js";import"./Dropdown-d8430b14.js";import"./icons-88c9d24d.js";import"./Checkbox-042b08ea.js";import"./Number-2a4b95a2.js";import"./DateSimple-263d8371.js";import"./DateAmbiguous-efb5d961.js";import"./_commonjsHelpers-725317a4.js";import"./Slider-d6f20605.js";import"./RangeSlider-bae4d8c7.js";import"./Flash-f249be30.js";const D={component:f,title:"Components/Dialogs/Modal",argTypes:{kind:{control:"select",options:["info","warning","success","error"]}},parameters:{docs:{description:{component:"A modal dialog for displaying pop-up alert messages."}}}},s={args:{},render:w=>({components:{ZoaModal:f},setup(){return{args:w}},template:`
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
//# sourceMappingURL=Modal.stories-20a4f7f1.js.map
