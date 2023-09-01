import{Z as f}from"./Modal-3b1af5d4.js";import"./vue.esm-bundler-480dfa76.js";import"./Button-c200b95d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Textbox-e56ecb08.js";import"./common-563d614d.js";import"./AutocompleteTextbox-6382d598.js";import"./index-e0b2a32e.js";import"./Dropdown-1665c589.js";import"./icons-f170c3be.js";import"./Checkbox-825d5cad.js";import"./Number-a53fc826.js";import"./DateSimple-9bbc05d3.js";import"./DateAmbiguous-91b36631.js";import"./_commonjsHelpers-725317a4.js";import"./Slider-2dd214d3.js";import"./slider-ac1f9846.js";import"./RangeSlider-32943fa4.js";import"./Flash-53965301.js";const j={component:f,title:"Components/Dialogs/Modal",argTypes:{kind:{control:"select",options:["info","warning","success","error"],default:"normal"},header:{control:"text"}}},n={args:{},render:w=>({components:{ZoaModal:f},setup(){return{args:w}},template:`
      <zoa-modal v-bind="args"><span>Here is some content that goes in the modal.</span></zoa-modal>
        `})},r={...n,args:{kind:"info",header:"Here is an informational message."}},e={...n,args:{kind:"warning",header:"Are you sure that's a good idea?"}},o={...n,args:{kind:"error",header:"Oh no! Something went wrong."}},a={...n,args:{kind:"success",header:"Congratulations! The thing worked."}};var s,t,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...Base,
  args: {
    kind: 'info',
    header: 'Here is an informational message.'
  }
}`,...(i=(t=r.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var m,c,d;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Base,
  args: {
    kind: 'warning',
    header: "Are you sure that's a good idea?"
  }
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,g,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(k=(h=a.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const q=["Info","Warning","Error","Success"];export{o as Error,r as Info,a as Success,e as Warning,q as __namedExportsOrder,j as default};
//# sourceMappingURL=Modal.stories-b9287205.js.map
