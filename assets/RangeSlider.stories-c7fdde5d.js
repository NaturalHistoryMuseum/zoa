import{h as l,b as p}from"./Modal-bf621d7c.js";import"./Button-bdae5805.js";import"./ToggleButton-482eb4a4.js";import"./Tabs-b137f73b.js";import"./Flash-f9b6ddcb.js";import{a as s,r as n}from"./stories-be5014a9.js";import"./vue.esm-bundler-b24b9645.js";import"./index-036ad48b.js";import"./_plugin-vue_export-helper-3e980904.js";import"./iframe-7b0d74e4.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";const S={component:l,title:"Components/Inputs/Slider/Range",argTypes:{...s,labelsRight:{control:"boolean"}},parameters:{docs:{description:{component:"A component with two sliders representing a lower and upper value. Returns the values as an array."}}}},i={args:{label:"Range",labelPosition:"above",help:"Some example help text.",helpPosition:"right",delay:200,placeholder:null,min:0,max:100,step:1,labelsRight:!1,labelUpper:"Upper",labelLower:"Lower"},render:t=>({components:{ZoaInput:p},setup(){return n(t)},template:`
      <zoa-input zoa-type="range-slider"
                 :class="rootClass"
                 :label="label"
                 :label-position="labelPosition"
                 :help="help"
                 :help-position="helpPosition"
                 :options="{delay, placeholder, min, max, step, labelsRight,
                           labelUpper, labelLower}"
      />
    `})},e={...i};var o,a,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Base
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const P=["Default"];export{e as Default,P as __namedExportsOrder,S as default};
