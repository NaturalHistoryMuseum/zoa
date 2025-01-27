import{Z as s}from"./ToggleButton-BLoBQghb.js";import{r as l}from"./stories-DRgnFlAq.js";import"./vue.esm-bundler-jKUKFo4Q.js";import"./index-B6Qe4-Nf.js";import"./_plugin-vue_export-helper-_YPhuzn9.js";const r=`
<zoa-toggle-button :class="rootClass"
                   :delay="delay"
                   :label="label"
                   :check-value="checkValue"
                   :kind="kind"
                   :name="name"
                   :size="size"
/>
`,g={component:s,title:"Components/Buttons/ToggleButton",argTypes:{"update:modelValue":{table:{disable:!0}},"v-model":{table:{category:"Output"}},kind:{control:"select",options:["normal","primary","alt"]},size:{control:"select",options:["sm","md"]}},parameters:{docs:{description:{component:"A toggleable button. Only shows its status via colour change, so it's mostly useful for things like opening menus rather than as a part of a form."},source:{code:r}}}},c={args:{class:"",delay:0,label:"Button",checkValue:"toggle",kind:"normal",name:"toggle-group",size:"md"},render:n=>({components:{ZoaToggleButton:s},setup(){return l(n)},template:r})},e={...c};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...Base
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const b=["Default"];export{e as Default,b as __namedExportsOrder,g as default};
