import{h as t,r as E}from"./stories-DRgnFlAq.js";import{Z as b}from"./ZoaFlash-DDlCptjI.js";import"./vue.esm-bundler-B4QjTGXh.js";import"./_plugin-vue_export-helper-_YPhuzn9.js";const v=`
<zoa-flash :kind="kind"
           :header="header"
           :message="message"
           :class="rootClass"
/>
`,T={component:b,title:"Components/Dialogs/Flash",argTypes:{kind:{control:"select",options:["info","warning","success","error"]}},parameters:{docs:{description:{component:"A flash dialog for displaying alert messages within the body of the page."},source:{code:v}}}},s={args:{kind:"info",header:"Flash dialog header",message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum.",class:""},render:C=>({components:{ZoaFlash:b},setup(){return E(C)},template:v})},e={...s,tags:["!dev","!autodocs"]},c={kind:"info"},r={...s,args:c,parameters:{docs:{source:{code:`<zoa-flash ${t(c)}/>`}}}},d={kind:"warning",header:"Are you sure that's a good idea?"},a={...s,args:d,parameters:{docs:{source:{code:`<zoa-flash ${t(d)}/>`}}}},i={kind:"error",header:"Oh no! Something went wrong."},o={...s,args:i,parameters:{docs:{source:{code:`<zoa-flash ${t(i)}/>`}}}},m={kind:"success",header:"Congratulations! The thing worked."},n={...s,args:m,parameters:{docs:{source:{code:`<zoa-flash ${t(m)}/>`}}}};var g,u,p;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...Base,
  tags: ['!dev', '!autodocs'] // hides it from the sidebar and variant section
}`,...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var l,h,f;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...Base,
  args: infoArgs,
  parameters: {
    docs: {
      source: {
        code: \`<zoa-flash \${htmlArgs(infoArgs)}/>\`
      }
    }
  }
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var A,k,w;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Base,
  args: warningArgs,
  parameters: {
    docs: {
      source: {
        code: \`<zoa-flash \${htmlArgs(warningArgs)}/>\`
      }
    }
  }
}`,...(w=(k=a.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var z,S,$;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...Base,
  args: errorArgs,
  parameters: {
    docs: {
      source: {
        code: \`<zoa-flash \${htmlArgs(errorArgs)}/>\`
      }
    }
  }
}`,...($=(S=o.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var B,y,D;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...Base,
  args: successArgs,
  parameters: {
    docs: {
      source: {
        code: \`<zoa-flash \${htmlArgs(successArgs)}/>\`
      }
    }
  }
}`,...(D=(y=n.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};const W=["Default","Info","Warning","Error","Success"];export{e as Default,o as Error,r as Info,n as Success,a as Warning,W as __namedExportsOrder,T as default};
