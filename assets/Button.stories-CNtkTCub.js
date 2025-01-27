import{Z as h}from"./Button-Csj6IT7x.js";import{h as t,r as $}from"./stories-DRgnFlAq.js";import"./vue.esm-bundler-jKUKFo4Q.js";import"./_plugin-vue_export-helper-_YPhuzn9.js";const k=`
<zoa-button :class="rootClass"
            :label="label"
            :kind="kind"
            :size="size"/>
`,N={component:h,title:"Components/Buttons/Button",argTypes:{kind:{control:"select",options:["normal","primary","alt"]},size:{control:"select",options:["sm","md"]}},parameters:{docs:{description:{component:"A button."},source:{code:k}}}},a={args:{class:"",label:"Button",size:"md"},render:S=>({components:{ZoaButton:h},setup(){return $(S)},template:k})},r={...a,tags:["!dev","!autodocs"]},n={kind:"normal"},s={...a,args:n,parameters:{docs:{source:{code:`<zoa-button ${t(n)}/>`}}}},c={kind:"primary",label:"Special Button"},e={...a,args:c,parameters:{docs:{source:{code:`<zoa-button ${t(c)}/>`}}}},m={kind:"alt",label:"Different Button"},o={...a,args:m,parameters:{docs:{source:{code:`<zoa-button ${t(m)}/>`}}}};var d,p,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...Base,
  tags: ['!dev', '!autodocs'] // hides it from the sidebar and variant section
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var i,u,g;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  ...Base,
  args: normalArgs,
  parameters: {
    docs: {
      source: {
        code: \`<zoa-button \${htmlArgs(normalArgs)}/>\`
      }
    }
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var A,b,z;e.parameters={...e.parameters,docs:{...(A=e.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...Base,
  args: primaryArgs,
  parameters: {
    docs: {
      source: {
        code: \`<zoa-button \${htmlArgs(primaryArgs)}/>\`
      }
    }
  }
}`,...(z=(b=e.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var B,f,y;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...Base,
  args: altArgs,
  parameters: {
    docs: {
      source: {
        code: \`<zoa-button \${htmlArgs(altArgs)}/>\`
      }
    }
  }
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const P=["Default","Normal","Primary","Alt"];export{o as Alt,r as Default,s as Normal,e as Primary,P as __namedExportsOrder,N as default};
