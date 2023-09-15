import{p as E,b as p,o as n,d as a,u as f,n as s,t as x,k,f as b,w as O,v as F,l as T,F as A,q as C}from"./vue.esm-bundler-edf20d86.js";import{u as I,a as N}from"./common-06502fb3.js";import{u as P,a as q,o as B,b as _}from"./index-8e700bfe.js";import{_ as Z}from"./_plugin-vue_export-helper-c27b6911.js";const D="zoa__u1jpB__input",M="zoa__K4jZT__label",j="zoa__wc4xP__grid",K="zoa__0mMOV__wrapper",U="zoa__FvT7h__options",J="zoa__hqIBJ__option",L="zoa__V565X__noOptions",R={input:D,label:M,"label--right":"zoa__CsI39__label--right","label--below":"zoa__OyBO0__label--below","label--above":"zoa__rnMm-__label--above",grid:j,"grid--above":"zoa__lZr2b__grid--above","grid--below":"zoa__s1ZFN__grid--below","grid--left":"zoa__Imuk0__grid--left","grid--right":"zoa__2DZpe__grid--right",wrapper:K,options:U,option:J,noOptions:L},W=["id"],X=["for"],G=["placeholder","id"],H={key:0},Q=["onClick"],Y=["value"],z={__name:"AutocompleteTextbox",props:{modelValue:{type:String},label:{type:String,default:"Autocomplete"},labelPosition:{type:String,default:"above"},delay:{type:Number,default:200},placeholder:{type:[String,void 0],default:null},options:{type:Array}},emits:["change","update:modelValue"],setup(o,{emit:S}){const y=o,{componentId:V,subId:g}=I(),{value:u}=N(S,y),r=E(()=>{let e=[];return y.options.forEach(t=>{typeof t=="object"?e.push({label:t.label,value:t.value}):e.push({label:t,value:t})}),e}),m=p(null),c=p(null),l=p(null),d=p(!1),$=P(c),v=q(l);function h(){try{m.value.blur(),c.value.blur(),l.value.blur()}catch{}d.value=!1}B(m,()=>{d.value=!1}),_("ArrowDown",()=>{if(r.value.length!==0){if($.focused.value)l.value.children[0].children[0].focus();else if(v.focused.value){const e=l.value.querySelector("li:focus");!e||!e.nextElementSibling?l.value.children[0].children[0].focus():e.nextElementSibling.focus()}}}),_("ArrowUp",()=>{if(r.value.length!==0&&v.focused.value){const e=l.value.querySelector("li:focus");!e||!e.previousElementSibling?c.value.focus():e.previousElementSibling.focus()}}),_("Enter",()=>{if(v.focused.value){const e=l.value.querySelector("li:focus");e&&w(e.querySelector("input").value)}h()});function w(e){u.value=e,h()}return(e,t)=>(n(),a("div",{class:s([e.$style.grid,e.$style[`grid--${o.labelPosition}`]]),id:f(V)},[o.label&&o.labelPosition!=="none"?(n(),a("label",{key:0,for:f(g)("textbox"),class:s([e.$style.label,e.$style[`label--${o.labelPosition}`]])},x(o.label),11,X)):k("",!0),b("div",{class:s(e.$style.wrapper),ref_key:"container",ref:m},[O(b("input",{type:"text",placeholder:o.placeholder,id:f(g)("textbox"),class:s(e.$style.input),"onUpdate:modelValue":t[0]||(t[0]=i=>T(u)?u.value=i:null),onFocusin:t[1]||(t[1]=i=>d.value=!0),ref_key:"textbox",ref:c},null,42,G),[[F,f(u)]]),d.value?(n(),a("div",{key:0,class:s(e.$style.options),ref_key:"dropdown",ref:l},[r.value.length>0?(n(),a("ul",H,[(n(!0),a(A,null,C(r.value,i=>(n(),a("li",{class:s(e.$style.option),onClick:te=>w(i.value),tabindex:"0"},[b("span",null,x(i.label),1),b("input",{type:"hidden",value:i.value},null,8,Y)],10,Q))),256))])):(n(),a("div",{key:1,class:s(e.$style.noOptions)},"No options found",2))],2)):k("",!0)],2)],10,W))}},ee={$style:R},se=Z(z,[["__cssModules",ee]]);z.__docgenInfo={exportName:"default",displayName:"AutocompleteTextbox",description:"",tags:{},props:[{name:"v-model",tags:{model:[{description:!0,title:"model"}]},type:{name:"string"}},{name:"label",description:"Text for the input label.",type:{name:"string"},defaultValue:{func:!1,value:"'Autocomplete'"}},{name:"labelPosition",description:"Position of the input label (or none).",tags:{},values:["left","right","above","below","none"],type:{name:"string"},defaultValue:{func:!1,value:"'above'"}},{name:"delay",description:"Debounce delay for the `change` event, in ms.",type:{name:"number"},defaultValue:{func:!1,value:"200"}},{name:"placeholder",description:"Text to display in the blank input.",type:{name:"string|undefined"},defaultValue:{func:!1,value:"null"}},{name:"options",description:"The options available to select. Each item can be a string, or an object with `label` and `value` keys.",type:{name:"array"}}],events:[{name:"change",description:"Emitted when the value changes; debounced if the delay prop is > 0.",properties:[{type:{names:["string"]},name:"newValue",description:"the new value"}],tags:[{title:"arg",type:{name:"string"},name:"newValue",description:"the new value"}]},{name:"update:modelValue",tags:[{title:"ignore",content:!0}]}],sourceFiles:["/home/runner/work/zoa/zoa/src/components/inputs/textbox/AutocompleteTextbox.vue"]};export{se as Z};
//# sourceMappingURL=AutocompleteTextbox-53423e33.js.map
