import{i,b as r}from"./Modal-41f92685.js";import"./Button-bdae5805.js";import"./ToggleButton-ce082f8d.js";import"./Tabs-4e0434fc.js";import"./Flash-450398d5.js";import{a as s,r as n}from"./stories-3167c046.js";import"./vue.esm-bundler-b24b9645.js";import"./index-036ad48b.js";import"./_plugin-vue_export-helper-3e980904.js";import"./iframe-0baf6d7a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";const y={component:i,title:"Components/Inputs/Slider/Single",argTypes:{...s,valueLabelPosition:{control:"select",options:["above","below"]},activeTrackRight:{control:"boolean"}},parameters:{docs:{description:{component:"A slider component, returning a single value."}}}},p={args:{label:"Slider",labelPosition:"above",help:"Some example help text.",helpPosition:"right",disabled:!1,delay:200,placeholder:null,min:0,max:100,step:1,placeholderPosition:.5,validMin:null,validMax:null,valueLabelPosition:"below",activeTrackRight:!1},render:t=>({components:{ZoaInput:r},setup(){return n(t)},template:`
      <zoa-input zoa-type="slider"
                 :class="rootClass"
                 :label="label"
                 :label-position="labelPosition"
                 :help="help"
                 :help-position="helpPosition"
                 :disabled="disabled"
                 :options="{delay, placeholder, min, max, step,
                           placeholderPosition, validMin, validMax,
                           activeTrackRight, valueLabelPosition}"
      />
    `})},e={...p};var o,a,l;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Base
}`,...(l=(a=e.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const T=["Default"];export{e as Default,T as __namedExportsOrder,y as default};
