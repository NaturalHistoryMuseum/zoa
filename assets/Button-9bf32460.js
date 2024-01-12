import{o,b as l,d as r,n as u,u as i,e as d,t as c}from"./vue.esm-bundler-9e01c687.js";import{_ as m,u as p}from"./classes-b26c0b12.js";const _="zoa__button__main",f="zoa__button__checkbox",b={main:_,"kind--normal":"zoa__button__kind--normal",checkbox:f,"kind--primary":"zoa__button__kind--primary","kind--alt":"zoa__button__kind--alt","size--sm":"zoa__button__size--sm","size--md":"zoa__button__size--md"},a={__name:"Button",props:{class:{type:[String,Array,null],default:null},label:{type:String,default:"Button"},kind:{type:String,default:"normal"},size:{type:String,default:"md"}},setup(e){const n=e,{addPropClasses:s}=p(n);return(t,z)=>(o(),l("button",{class:u(i(s)([t.$style.main,t.$style[`kind--${e.kind}`],t.$style[`size--${e.size}`]]))},[r(t.$slots,"default",{},()=>[d(c(e.label),1)])],2))}},y={$style:b},g=m(a,[["__cssModules",y]]);a.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"class",description:"Additional class(es) to add to the root element.",type:{name:"string|array|null"},defaultValue:{func:!1,value:"null"}},{name:"label",description:"The text for the button; overridden by the default slot.",type:{name:"string"},defaultValue:{func:!1,value:"'Button'"}},{name:"kind",description:"The appearance class of the button.",tags:{},values:["normal","primary","alt"],type:{name:"string"},defaultValue:{func:!1,value:"'normal'"}},{name:"size",description:"The size class of the button.",tags:{},values:["sm","md"],type:{name:"string"},defaultValue:{func:!1,value:"'md'"}}],slots:[{name:"default",description:"Text for the button; overrides the label prop."}],sourceFiles:["/home/runner/work/zoa/zoa/src/components/inputs/button/Button.vue"]};export{g as Z};
//# sourceMappingURL=Button-9bf32460.js.map
