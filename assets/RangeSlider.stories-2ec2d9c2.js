import{h as l,b as s}from"./Modal-2ab67ce5.js";import"./Button-bdae5805.js";import"./ToggleButton-ce082f8d.js";import"./Tabs-4e0434fc.js";import"./Flash-450398d5.js";import{a as p,r as i}from"./stories-3167c046.js";import"./vue.esm-bundler-b24b9645.js";import"./index-036ad48b.js";import"./_plugin-vue_export-helper-3e980904.js";import"./iframe-cd6fae2b.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";const S={component:l,title:"Components/Inputs/Slider/Range",argTypes:{...p,labelsRight:{control:"boolean"}},parameters:{docs:{description:{component:"A component with two sliders representing a lower and upper value. Returns the values as an array."}}}},n={args:{label:"Range",labelPosition:"above",help:"Some example help text.",helpPosition:"right",disabled:!1,delay:200,placeholder:null,min:0,max:100,step:1,labelsRight:!1,labelUpper:"Upper",labelLower:"Lower"},render:t=>({components:{ZoaInput:s},setup(){return i(t)},template:`
      <zoa-input zoa-type="range-slider"
                 :class="rootClass"
                 :label="label"
                 :label-position="labelPosition"
                 :help="help"
                 :help-position="helpPosition"
                 :disabled="disabled"
                 :options="{delay, placeholder, min, max, step, labelsRight,
                           labelUpper, labelLower}"
      />
    `})},e={...n};var a,o,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...Base
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const P=["Default"];export{e as Default,P as __namedExportsOrder,S as default};
