import{c as i,a as r}from"./Modal-72e04429.js";import"./Button-9bf32460.js";import"./ToggleButton-66942192.js";import"./Flash-f5b2953c.js";import{a as s,r as n}from"./stories-be5014a9.js";import"./vue.esm-bundler-9e01c687.js";import"./classes-b26c0b12.js";import"./iframe-8b4bca48.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";const S={component:i,title:"Components/Inputs/Slider/Single",argTypes:{...s,valueLabelPosition:{control:"select",options:["above","below"]},activeTrackRight:{control:"boolean"}},parameters:{docs:{description:{component:"A slider component, returning a single value."}}}},p={args:{label:"Slider",labelPosition:"above",help:"Some example help text.",helpPosition:"right",delay:200,placeholder:null,min:0,max:100,step:1,placeholderPosition:.5,validMin:null,validMax:null,valueLabelPosition:"below",activeTrackRight:!1},render:l=>({components:{ZoaInput:r},setup(){return n(l)},template:`
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
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const f=["Default"];export{e as Default,f as __namedExportsOrder,S as default};
//# sourceMappingURL=Slider.stories-9ed9302f.js.map
