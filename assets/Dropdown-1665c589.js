import{p as g,o as s,d as n,u as l,n as t,t as p,k as w,f as _,w as y,y as v,l as h,F as z,q as V,e as $}from"./vue.esm-bundler-480dfa76.js";import{u as D,a as N}from"./common-563d614d.js";import{F as C}from"./icons-f170c3be.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";const P="zoa__c-K88__input",R="zoa__XFR4x__label",k="zoa__csc-y__grid",I="zoa__oUR-j__wrapper",M="zoa__f0lOR__arrow",S={input:P,label:R,"label--right":"zoa__3XTm6__label--right","label--below":"zoa__vTCRg__label--below","label--above":"zoa__7KR2L__label--above",grid:k,"grid--above":"zoa__PN-na__grid--above","grid--below":"zoa__-GDMi__grid--below","grid--left":"zoa__v81WH__grid--left","grid--right":"zoa__Clcgi__grid--right",wrapper:I,arrow:M},B=["id"],E=["for"],O=["id"],j={value:"opt.value"},c={__name:"Dropdown",props:{modelValue:{},labelPosition:{type:String,default:"above"},label:{type:String,default:"Dropdown"},delay:{type:Number,default:0},options:{type:Array}},emits:["change","update:modelValue"],setup(o,{emit:m}){const d=o,{componentId:b,subId:u}=D(),f=g(()=>{let e=[];return d.options.forEach(a=>{typeof a=="object"?e.push({label:a.label,value:a.value}):e.push({label:a,value:a})}),e}),{value:r}=N(m,d);return(e,a)=>(s(),n("div",{class:t([e.$style.grid,e.$style[`grid--${o.labelPosition}`]]),id:l(b)},[o.label&&o.labelPosition!=="none"?(s(),n("label",{key:0,for:l(u)("dropdown"),class:t([e.$style.label,e.$style[`label--${o.labelPosition}`]])},p(o.label),11,E)):w("",!0),_("div",{class:t(e.$style.wrapper)},[y(_("select",{id:l(u)("dropdown"),class:t(e.$style.input),"onUpdate:modelValue":a[0]||(a[0]=i=>h(r)?r.value=i:null)},[(s(!0),n(z,null,V(f.value,i=>(s(),n("option",j,p(i.label),1))),256))],10,O),[[v,l(r)]]),$(l(C),{icon:"fa-solid fa-caret-down",class:t(e.$style.arrow)},null,8,["class"])],2)],10,B))}},A={$style:S},X=F(c,[["__cssModules",A]]);c.__docgenInfo={exportName:"default",displayName:"Dropdown",description:"",tags:{},props:[{name:"modelValue"},{name:"labelPosition",type:{name:"string"},defaultValue:{func:!1,value:"'above'"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"'Dropdown'"}},{name:"delay",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"options",type:{name:"array"}}],events:[{name:"change"},{name:"update:modelValue"}],sourceFiles:["/home/runner/work/zoa/zoa/src/components/inputs/dropdown/Dropdown.vue"]};export{X as Z};
//# sourceMappingURL=Dropdown-1665c589.js.map
