import{f as l,b as p}from"./Modal-CbRs2Ka8.js";import"./Button-Csj6IT7x.js";import"./ToggleButton-BLoBQghb.js";import"./Tabs-8IVrqThf.js";import"./Flash-5_NEKTbu.js";import{a as i}from"./stories-DyPMmuse.js";import{r as n}from"./stories-DRgnFlAq.js";import"./vue.esm-bundler-jKUKFo4Q.js";import"./index-B6Qe4-Nf.js";import"./_plugin-vue_export-helper-_YPhuzn9.js";import"./iframe-Ch7-j-JB.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";const s=`
<zoa-input zoa-type="dropdown-search"
           :class="rootClass"
           :label="label"
           :label-position="labelPosition"
           :help="help"
           :help-position="helpPosition"
           :disabled="disabled"
           :options="{delay, placeholder, options, searchDelay, enableSearch, itemHeight}"
/>
`,x={component:l,title:"Components/Inputs/Select/DropdownSearch",argTypes:i,parameters:{docs:{description:{component:"A dropdown/select component allowing searching/filtering the list of potential options. Options can be passed in as a mixed list of strings or objects with `label` and `value` keys. Each option must have a unique value (or label, if not using values)."},source:{code:s}}}},c={args:{label:"Searchable Dropdown",labelPosition:"above",help:"Some example help text.",helpPosition:"right",disabled:!1,delay:0,placeholder:"select option",options:["Option 1",{label:"Option 2",value:"opt2"},{label:"Option 3",value:"opt3"},{label:"Option 4"},"Option 5"],searchDelay:200,enableSearch:!0,itemHeight:38},render:r=>({components:{ZoaInput:p},setup(){return n(r)},template:s})},e={...c};var o,t,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...Base
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const P=["Default"];export{e as Default,P as __namedExportsOrder,x as default};
