import{o as s,d as i,u as l,n,t as c,k as p,w as _,v as g,f as y,l as v}from"./vue.esm-bundler-480dfa76.js";import{u as h,a as N}from"./common-563d614d.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";const V="zoa__79mQo__input",$="zoa__WTN5H__label",w="zoa__DqiKb__grid",P={input:V,label:$,"label--right":"zoa__iMSda__label--right","label--below":"zoa__r6OsR__label--below","label--above":"zoa__iXvOz__label--above",grid:w,"grid--above":"zoa__9WSIP__grid--above","grid--below":"zoa__iK09A__grid--below","grid--left":"zoa__KhHio__grid--left","grid--right":"zoa__M6mbm__grid--right"},S=["id"],k=["for"],x=["placeholder","min","max","step","id"],m={__name:"Number",props:{modelValue:{},labelPosition:{type:String,default:"above"},label:{type:String,default:"Number"},placeholder:{type:String,default:0},delay:{type:Number,default:200},min:{type:Number,default:null},max:{type:Number,default:null},step:{type:Number,default:.1}},emits:["change","update:modelValue"],setup(e,{emit:r}){const d=e,{componentId:b,subId:o}=h(),{value:t}=N(r,d);return(a,u)=>(s(),i("div",{class:n([a.$style.grid,a.$style[`grid--${e.labelPosition}`]]),id:l(b)},[e.label&&e.labelPosition!=="none"?(s(),i("label",{key:0,for:l(o)("number"),class:n([a.$style.label,a.$style[`label--${e.labelPosition}`]])},c(e.label),11,k)):p("",!0),_(y("input",{type:"number",placeholder:e.placeholder,min:e.min,max:e.max,step:e.step,id:l(o)("number"),class:n(a.$style.input),"onUpdate:modelValue":u[0]||(u[0]=f=>v(t)?t.value=f:null)},null,10,x),[[g,l(t)]])],10,S))}},I={$style:P},D=z(m,[["__cssModules",I]]);m.__docgenInfo={exportName:"default",displayName:"Number",description:"",tags:{},props:[{name:"modelValue"},{name:"labelPosition",type:{name:"string"},defaultValue:{func:!1,value:"'above'"}},{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"'Number'"}},{name:"placeholder",type:{name:"string"},defaultValue:{func:!1,value:"0"}},{name:"delay",type:{name:"number"},defaultValue:{func:!1,value:"200"}},{name:"min",type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"max",type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"step",type:{name:"number"},defaultValue:{func:!1,value:"0.1"}}],events:[{name:"change"},{name:"update:modelValue"}],sourceFiles:["/home/runner/work/zoa/zoa/src/components/inputs/number/Number.vue"]};export{D as Z};
//# sourceMappingURL=Number-a53fc826.js.map
