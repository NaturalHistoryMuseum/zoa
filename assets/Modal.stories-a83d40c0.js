import{Z as f}from"./Modal-aca02161.js";import"./vue.esm-bundler-b646f49e.js";import"./Button-3ef39845.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Textbox-1fef3ba3.js";import"./common-961257ff.js";import"./AutocompleteTextbox-10ec6aa5.js";import"./index-445dbd13.js";import"./Dropdown-e51a118b.js";import"./icons-f5a374f6.js";import"./Checkbox-5e639404.js";import"./Number-dc1afd08.js";import"./DateSimple-9c4997ac.js";import"./DateAmbiguous-a9121f4c.js";import"./_commonjsHelpers-725317a4.js";import"./Slider-2420a819.js";import"./RangeSlider-9f7de8b7.js";import"./Flash-f87fe32b.js";const D={component:f,title:"Components/Dialogs/Modal",argTypes:{kind:{control:"select",options:["info","warning","success","error"],default:"normal"},header:{control:"text"}}},n={args:{},render:w=>({components:{ZoaModal:f},setup(){return{args:w}},template:`
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
}`,...(k=(h=a.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};const j=["Info","Warning","Error","Success"];export{o as Error,r as Info,a as Success,e as Warning,j as __namedExportsOrder,D as default};
//# sourceMappingURL=Modal.stories-a83d40c0.js.map
