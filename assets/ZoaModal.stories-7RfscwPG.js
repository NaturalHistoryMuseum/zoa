import{h as c,r as x}from"./stories-DRgnFlAq.js";import{Z as d}from"./ZoaModal-CokGILv-.js";import"./vue.esm-bundler-B4QjTGXh.js";import"./ZoaToggleButton-Cs0GATk4.js";import"./compid-BcxCROCr.js";import"./_plugin-vue_export-helper-_YPhuzn9.js";import"./ZoaFlash-DDlCptjI.js";import"./ZoaButton-DhoEM5N4.js";import"./ZoaTabs-QjsEMde2.js";import"./iframe-Bn3UxRf9.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";const O=`
<zoa-modal :kind="kind"
           :header="header"
           :message="message"
           :class="rootClass"
           :button-args="buttonArgs"
/>
`,N={component:d,title:"Components/Dialogs/Modal",argTypes:{kind:{control:"select",options:["info","warning","success","error"]}},parameters:{docs:{description:{component:"A modal dialog for displaying pop-up alert messages."},source:{code:O}}}},e={args:{kind:"info",header:"Modal dialog header",message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum.",class:"",buttonArgs:{label:"Open modal"}},render:Z=>({components:{ZoaModal:d},setup(){return x(Z)},template:O})},r={...e,tags:["!dev","!autodocs"]},m=`
<zoa-modal>
  <template v-slot:button>Button label</template>
  <template v-slot:header>You can also use slots!</template>
  <span>The default slot defines the modal body.</span>
</zoa-modal>
`,s={render:()=>({components:{ZoaModal:d},template:m}),parameters:{docs:{source:{code:m}}}},p={kind:"info"},o={...e,args:p,parameters:{docs:{source:{code:`<zoa-modal ${c(p)}/>`}}}},i={kind:"warning",header:"Are you sure that's a good idea?"},a={...e,args:i,parameters:{docs:{source:{code:`<zoa-modal ${c(i)}/>`}}}},l={kind:"error",header:"Oh no! Something went wrong."},n={...e,args:l,parameters:{docs:{source:{code:`<zoa-modal ${c(l)}/>`}}}},u={kind:"success",header:"Congratulations! The thing worked."},t={...e,args:u,parameters:{docs:{source:{code:`<zoa-modal ${c(u)}/>`}}}};var g,h,A;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Base,
  tags: ['!dev', '!autodocs'] // hides it from the sidebar and variant section
}`,...(A=(h=r.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var f,S,z;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ZoaModal
    },
    template: slotTemplate
  }),
  parameters: {
    docs: {
      source: {
        code: slotTemplate
      }
    }
  }
}`,...(z=(S=s.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var b,k,w;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...Base,
  args: infoArgs,
  parameters: {
    docs: {
      source: {
        code: \`<zoa-modal \${htmlArgs(infoArgs)}/>\`
      }
    }
  }
}`,...(w=(k=o.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var $,B,T;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...Base,
  args: warningArgs,
  parameters: {
    docs: {
      source: {
        code: \`<zoa-modal \${htmlArgs(warningArgs)}/>\`
      }
    }
  }
}`,...(T=(B=a.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var v,y,D;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  ...Base,
  args: errorArgs,
  parameters: {
    docs: {
      source: {
        code: \`<zoa-modal \${htmlArgs(errorArgs)}/>\`
      }
    }
  }
}`,...(D=(y=n.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var M,C,E;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...Base,
  args: successArgs,
  parameters: {
    docs: {
      source: {
        code: \`<zoa-modal \${htmlArgs(successArgs)}/>\`
      }
    }
  }
}`,...(E=(C=t.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const P=["Default","Slots","Info","Warning","Error","Success"];export{r as Default,n as Error,o as Info,s as Slots,t as Success,a as Warning,P as __namedExportsOrder,N as default};
