import{o as s,d as u,u as l,n,t as c,k as f,w as g,v as y,f as h,l as _}from"./vue.esm-bundler-edf20d86.js";import{u as v,a as N}from"./common-06502fb3.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";const V="zoa__79mQo__input",z="zoa__WTN5H__label",$="zoa__DqiKb__grid",x={input:V,label:z,"label--right":"zoa__iMSda__label--right","label--below":"zoa__r6OsR__label--below","label--above":"zoa__iXvOz__label--above",grid:$,"grid--above":"zoa__9WSIP__grid--above","grid--below":"zoa__iK09A__grid--below","grid--left":"zoa__KhHio__grid--left","grid--right":"zoa__M6mbm__grid--right"},P=["id"],T=["for"],k=["placeholder","min","max","step","id"],r={__name:"Number",props:{modelValue:{type:Number},label:{type:String,default:"Number"},labelPosition:{type:String,default:"above"},delay:{type:Number,default:200},placeholder:{type:Number,default:0},min:{type:Number,default:null},max:{type:Number,default:null},step:{type:Number,default:1}},emits:["change","update:modelValue"],setup(e,{emit:m}){const d=e,{componentId:b,subId:o}=v(),{value:t}=N(m,d);return(a,i)=>(s(),u("div",{class:n([a.$style.grid,a.$style[`grid--${e.labelPosition}`]]),id:l(b)},[e.label&&e.labelPosition!=="none"?(s(),u("label",{key:0,for:l(o)("number"),class:n([a.$style.label,a.$style[`label--${e.labelPosition}`]])},c(e.label),11,T)):f("",!0),g(h("input",{type:"number",placeholder:e.placeholder,min:e.min,max:e.max,step:e.step,id:l(o)("number"),class:n(a.$style.input),"onUpdate:modelValue":i[0]||(i[0]=p=>_(t)?t.value=p:null)},null,10,k),[[y,l(t)]])],10,P))}},I={$style:x},D=w(r,[["__cssModules",I]]);r.__docgenInfo={exportName:"default",displayName:"Number",description:"",tags:{},props:[{name:"v-model",tags:{model:[{description:!0,title:"model"}]},type:{name:"number"}},{name:"label",description:"Text for the input label.",type:{name:"string"},defaultValue:{func:!1,value:"'Number'"}},{name:"labelPosition",description:"Position of the input label (or none).",tags:{},values:["left","right","above","below","none"],type:{name:"string"},defaultValue:{func:!1,value:"'above'"}},{name:"delay",description:"Debounce delay for the `change` event, in ms.",type:{name:"number"},defaultValue:{func:!1,value:"200"}},{name:"placeholder",description:"Text to display in the blank input.",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"min",description:"The lowest valid number.",type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"max",description:"The highest valid number.",type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"step",description:"The granularity of accepted values; e.g. 1 allows any integer and 0.1 allows floats to one decimal place.",type:{name:"number"},defaultValue:{func:!1,value:"1"}}],events:[{name:"change",description:"Emitted when the value changes; debounced if the delay prop is > 0.",properties:[{type:{names:["number"]},name:"newValue",description:"the new value"}],tags:[{title:"arg",type:{name:"number"},name:"newValue",description:"the new value"}]},{name:"update:modelValue",tags:[{title:"ignore",content:!0}]}],sourceFiles:["/home/runner/work/zoa/zoa/src/components/inputs/number/Number.vue"]};export{D as Z};
//# sourceMappingURL=Number-2a4b95a2.js.map
