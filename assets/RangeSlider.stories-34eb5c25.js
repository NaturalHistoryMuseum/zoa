import{d as l,a as p}from"./Modal-72e04429.js";import"./Button-9bf32460.js";import"./ToggleButton-66942192.js";import"./Flash-f5b2953c.js";import{a as s,r as n}from"./stories-be5014a9.js";import"./vue.esm-bundler-9e01c687.js";import"./classes-b26c0b12.js";import"./iframe-8b4bca48.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";const x={component:l,title:"Components/Inputs/Slider/Range",argTypes:{...s,labelsRight:{control:"boolean"}},parameters:{docs:{description:{component:"A component with two sliders representing a lower and upper value. Returns the values as an array."}}}},i={args:{label:"Range",labelPosition:"above",help:"Some example help text.",helpPosition:"right",delay:200,placeholder:null,min:0,max:100,step:1,labelsRight:!1,labelUpper:"Upper",labelLower:"Lower"},render:t=>({components:{ZoaInput:p},setup(){return n(t)},template:`
      <zoa-input zoa-type="range-slider"
                 :class="rootClass"
                 :label="label"
                 :label-position="labelPosition"
                 :help="help"
                 :help-position="helpPosition"
                 :options="{delay, placeholder, min, max, step, labelsRight,
                           labelUpper, labelLower}"
      />
    `})},e={...i};var a,o,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  ...Base
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const y=["Default"];export{e as Default,y as __namedExportsOrder,x as default};
//# sourceMappingURL=RangeSlider.stories-34eb5c25.js.map
