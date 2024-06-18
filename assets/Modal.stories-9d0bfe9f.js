import{Z as d}from"./Modal-c098256f.js";import"./vue.esm-bundler-b24b9645.js";import"./Button-bdae5805.js";import"./_plugin-vue_export-helper-3e980904.js";import"./ToggleButton-ce082f8d.js";import"./index-036ad48b.js";import"./Tabs-4e0434fc.js";import"./Flash-450398d5.js";import"./iframe-043f1358.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";const _={component:d,title:"Components/Dialogs/Modal",argTypes:{kind:{control:"select",options:["info","warning","success","error"]}},parameters:{docs:{description:{component:"A modal dialog for displaying pop-up alert messages."}}}},e={args:{message:"Here is some content that goes in the modal."},render:i=>({components:{ZoaModal:d},setup(){return{args:i}},template:`
      <zoa-modal v-bind="args"/>
        `})},r={...e,args:{...e.args,kind:"info",header:"Parameters can be set using properties"}},a={...e,args:{kind:"info"},render:i=>({components:{ZoaModal:d},setup(){return{args:i}},template:`
      <zoa-modal v-bind="args">
        <template v-slot:button>Button slot</template>
        <template v-slot:header>Or you can use slots</template>
        <span>The default slot defines the modal body.</span>
      </zoa-modal>
        `})},s={...e,args:{...e.args,kind:"info",header:"Here is an informational message."}},n={...e,args:{...e.args,kind:"warning",header:"Are you sure that's a good idea?"}},o={...e,args:{...e.args,kind:"error",header:"Oh no! Something went wrong."}},t={...e,args:{...e.args,kind:"success",header:"Congratulations! The thing worked."}};var m,p,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...Base,
  args: {
    ...Base.args,
    kind: 'info',
    header: 'Parameters can be set using properties'
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var g,l,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Base,
  args: {
    kind: 'info'
  },
  render: args => ({
    components: {
      ZoaModal
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <zoa-modal v-bind="args">
        <template v-slot:button>Button slot</template>
        <template v-slot:header>Or you can use slots</template>
        <span>The default slot defines the modal body.</span>
      </zoa-modal>
        \`
  })
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var h,f,k;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  ...Base,
  args: {
    ...Base.args,
    kind: 'info',
    header: 'Here is an informational message.'
  }
}`,...(k=(f=s.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var B,S,b;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...Base,
  args: {
    ...Base.args,
    kind: 'warning',
    header: "Are you sure that's a good idea?"
  }
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var w,y,v;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...Base,
  args: {
    ...Base.args,
    kind: 'error',
    header: 'Oh no! Something went wrong.'
  }
}`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var z,O,T;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...Base,
  args: {
    ...Base.args,
    kind: 'success',
    header: 'Congratulations! The thing worked.'
  }
}`,...(T=(O=t.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};const j=["Default","Slot","Info","Warning","Error","Success"];export{r as Default,o as Error,s as Info,a as Slot,t as Success,n as Warning,j as __namedExportsOrder,_ as default};
