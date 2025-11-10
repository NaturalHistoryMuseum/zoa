import"./ZoaButton-DhoEM5N4.js";import"./ZoaTabs-QjsEMde2.js";import"./ZoaToggleButton-Cs0GATk4.js";import{f as l,b as p}from"./ZoaModal-CokGILv-.js";import"./ZoaFlash-DDlCptjI.js";import{r as i}from"./stories-DRgnFlAq.js";import{a as n}from"./stories-C8tJLLqD.js";import"./vue.esm-bundler-B4QjTGXh.js";import"./_plugin-vue_export-helper-_YPhuzn9.js";import"./compid-BcxCROCr.js";import"./iframe-Bn3UxRf9.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";const r=`
<zoa-input zoa-type="dropdown-search"
           :class="rootClass"
           :label="label"
           :label-position="labelPosition"
           :help="help"
           :help-position="helpPosition"
           :disabled="disabled"
           :config="{delay, placeholder, options, searchDelay, enableSearch, itemHeight}"
/>
`,x={component:l,title:"Components/Inputs/Select/DropdownSearch",argTypes:n,parameters:{docs:{description:{component:"A dropdown/select component allowing searching/filtering the list of potential options. Options can be passed in as a mixed list of strings or objects with `label` and `value` keys. Each option must have a unique value (or label, if not using values)."},source:{code:r}}}},c={args:{label:"Searchable Dropdown",labelPosition:"above",help:"Some example help text.",helpPosition:"right",disabled:!1,delay:0,placeholder:"select option",options:["Option 1",{label:"Option 2",value:"opt2"},{label:"Option 3",value:"opt3"},{label:"Option 4"},"Option 5"],searchDelay:200,enableSearch:!0,itemHeight:38},render:s=>({components:{ZoaInput:p},setup(){return i(s)},template:r})},e={...c};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Base
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const P=["Default"];export{e as Default,P as __namedExportsOrder,x as default};
