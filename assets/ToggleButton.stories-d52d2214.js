import{Z as l}from"./ToggleButton-ce082f8d.js";import"./vue.esm-bundler-b24b9645.js";import"./index-036ad48b.js";import"./_plugin-vue_export-helper-3e980904.js";const i={component:l,title:"Components/Buttons/ToggleButton",argTypes:{"update:modelValue":{table:{disable:!0}},"v-model":{table:{category:"Output"}},kind:{control:"select",options:["normal","primary","alt"]},size:{control:"select",options:["sm","md"]}},parameters:{docs:{description:{component:"A toggleable button. Only shows its status via colour change, so it's mostly useful for things like opening menus rather than as a part of a form."}}}},n={args:{class:"",delay:0,label:"Button",checkValue:"toggle",kind:"normal",name:"toggle-group",size:"md"},render:e=>({components:{ZoaToggleButton:l},setup(){return e.rootClass=e.class,delete e.class,e},template:`
          <zoa-toggle-button :class="rootClass"
                             :delay="delay"
                             :label="label"
                             :check-value="checkValue"
                             :kind="kind"
                             :name="name"
                             :size="size"
          />
        `})},t={...n};var o,a,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Base
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const p=["Default"];export{t as Default,p as __namedExportsOrder,i as default};
