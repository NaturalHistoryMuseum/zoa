import{i,b as r}from"./Modal-bf621d7c.js";import"./Button-bdae5805.js";import"./ToggleButton-482eb4a4.js";import"./Tabs-b137f73b.js";import"./Flash-f9b6ddcb.js";import{a as s,r as n}from"./stories-be5014a9.js";import"./vue.esm-bundler-b24b9645.js";import"./index-036ad48b.js";import"./_plugin-vue_export-helper-3e980904.js";import"./iframe-7b0d74e4.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";const y={component:i,title:"Components/Inputs/Slider/Single",argTypes:{...s,valueLabelPosition:{control:"select",options:["above","below"]},activeTrackRight:{control:"boolean"}},parameters:{docs:{description:{component:"A slider component, returning a single value."}}}},p={args:{label:"Slider",labelPosition:"above",help:"Some example help text.",helpPosition:"right",delay:200,placeholder:null,min:0,max:100,step:1,placeholderPosition:.5,validMin:null,validMax:null,valueLabelPosition:"below",activeTrackRight:!1},render:l=>({components:{ZoaInput:r},setup(){return n(l)},template:`
      <zoa-input zoa-type="slider"
                 :class="rootClass"
                 :label="label"
                 :label-position="labelPosition"
                 :help="help"
                 :help-position="helpPosition"
                 :options="{delay, placeholder, min, max, step,
                           placeholderPosition, validMin, validMax,
                           activeTrackRight, valueLabelPosition}"
      />
    `})},e={...p};var o,a,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Base
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const T=["Default"];export{e as Default,T as __namedExportsOrder,y as default};
