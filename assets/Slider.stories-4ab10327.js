import{Z as r}from"./Slider-d6f20605.js";import"./vue.esm-bundler-edf20d86.js";import"./common-06502fb3.js";import"./index-8e700bfe.js";import"./_plugin-vue_export-helper-c27b6911.js";const d={component:r,title:"Components/Inputs/Slider/Single",argTypes:{"update:modelValue":{table:{disable:!0}},labelPosition:{control:"select",options:["above","below","left","right","none"]},valueLabelPosition:{control:"select",options:["above","below"]},activeTrackRight:{control:"boolean"}},parameters:{docs:{description:{component:"A slider component, returning a single value."}}}},l={args:{label:"Slider",labelPosition:"above",valueLabelPosition:"below",activeTrackRight:!1},render:s=>({components:{ZoaSlider:r},setup(){return{args:s}},template:`
          <zoa-slider v-bind="args"/>
        `})},e={...l};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Base
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,d as default};
//# sourceMappingURL=Slider.stories-4ab10327.js.map
