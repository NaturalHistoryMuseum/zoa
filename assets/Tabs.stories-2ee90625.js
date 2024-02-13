import{Z as i}from"./Tabs-b137f73b.js";import"./vue.esm-bundler-b24b9645.js";import"./index-036ad48b.js";import"./_plugin-vue_export-helper-3e980904.js";const d={component:i,title:"Components/Buttons/Tabs",argTypes:{"update:modelValue":{table:{disable:!0}},"v-model":{table:{category:"Output"}},kind:{control:"select",options:["normal","primary","alt"]},size:{control:"select",options:["sm","md"]},activePosition:{control:"select",options:["above","below","left","right"]}},parameters:{docs:{description:{component:"A set of radio buttons displayed as tabs."}}}},l={args:{class:"",delay:0,activePosition:"below",initialValue:"Tab 1",kind:"normal",options:["Tab 1","Tab 2",{label:"Tab 3",value:"tab3",order:0},{label:"Tab 4",order:2}],size:"md"},render:e=>({components:{ZoaTabs:i},setup(){return e.rootClass=e.class,delete e.class,e},template:`
          <zoa-tabs :class="rootClass"
                    :delay="delay"
                    :active-position="activePosition"
                    :initial-value="initialValue"
                    :kind="kind"
                    :options="options"
                    :size="size"
          />
        `})},o={...l};var t,a,s;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  ...Base
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const m=["Default"];export{o as Default,m as __namedExportsOrder,d as default};
