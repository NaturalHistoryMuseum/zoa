import{Z as s}from"./Tabs-DKBHZb_U.js";import{r as n}from"./stories-DRgnFlAq.js";import"./vue.esm-bundler-jKUKFo4Q.js";import"./index-Bi6-mJwv.js";import"./_plugin-vue_export-helper-_YPhuzn9.js";const r=`
<zoa-tabs :class="rootClass"
          :delay="delay"
          :active-position="activePosition"
          :initial-value="initialValue"
          :kind="kind"
          :options="options"
          :size="size"
/>
`,b={component:s,title:"Components/Buttons/Tabs",argTypes:{"update:modelValue":{table:{disable:!0}},"v-model":{table:{category:"Output"}},kind:{control:"select",options:["normal","primary","alt"]},size:{control:"select",options:["sm","md"]},activePosition:{control:"select",options:["above","below","left","right"]}},parameters:{docs:{description:{component:"A set of radio buttons displayed as tabs."},source:{code:r}}}},l={args:{class:"",delay:0,activePosition:"below",initialValue:"Tab 1",kind:"normal",options:["Tab 1","Tab 2",{label:"Tab 3",value:"tab3",order:0},{label:"Tab 4",order:2}],size:"md"},render:i=>({components:{ZoaTabs:s},setup(){return n(i)},template:r})},e={...l};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Base
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const v=["Default"];export{e as Default,v as __namedExportsOrder,b as default};
