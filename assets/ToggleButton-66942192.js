import{m as T,j as V,u as P,w as R,p as J,q as Q,s as ee,r as N,o as te,b as ne,v as oe,x as le,k as F,n as O,y as ae,d as se,e as ue,t as re,z as ie,A as ce}from"./vue.esm-bundler-9e01c687.js";import{_ as fe,u as de}from"./classes-b26c0b12.js";const{now:U}=Date,me=(e,n=1,t)=>{n=Math.max(1,n);const o=(t==null?void 0:t.leading)??!1,i=(t==null?void 0:t.trailing)??!0,r=Math.max((t==null?void 0:t.maxWait)??1/0,n);let l,s,a=0,c=0;const f=()=>{const g=U(),h=g-a,m=g-c,_=h>=n||m>=r;return[g,_]},p=g=>{if(c=g,!l)return;const h=l;l=void 0,e.apply(void 0,h)},u=()=>{D(0)},d=()=>{s&&(u(),p(U()))},v=g=>{if(c=g,o)return p(g)},S=g=>{if(i&&l)return p(g);l=void 0},b=()=>{s=void 0;const[g,h]=f();return h?S(g):w(g)},w=g=>{const h=g-a,m=g-c,_=n-h,y=r-m,I=Math.min(_,y);return D(I)},D=g=>{s&&clearTimeout(s),!(g<=0)&&(s=setTimeout(b,g))},M=(...g)=>{const[h,m]=f(),_=!!s;if(l=g,a=h,(m||!s)&&D(n),m)return _?p(h):v(h)};return M.cancel=u,M.flush=d,M};function pe(e,n){let t;try{t=parseInt(n.delay)||0}catch{t=0}const o=T(null);function i(a){e("change",a)}const r=me(i,t);function l(a){e("update:modelValue",a),o.value=a,r(a)}const s=V({get(){return n.modelValue===void 0?o.value:n.modelValue},set(a){l(a)}});return{emitChange:r,valueChanged:l,value:s}}let ve=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((n,t)=>(t&=63,t<36?n+=t.toString(36):t<62?n+=(t-26).toString(36).toUpperCase():t>62?n+="-":n+="_",n),"");function ge(){const e=T(ve(6));function n(t){return`${e.value}__${t}`}return{componentId:e,subId:n}}function he(e,n){let t,o,i;const r=T(!0),l=()=>{r.value=!0,i()};R(e,l,{flush:"sync"});const s=typeof n=="function"?n:n.get,a=typeof n=="function"?void 0:n.set,c=J((f,p)=>(o=f,i=p,{get(){return r.value&&(t=s(),r.value=!1),o(),t},set(u){a==null||a(u)}}));return Object.isExtensible(c)&&(c.trigger=l),c}function ye(e){return Q()?(ee(e),!0):!1}function E(e){return typeof e=="function"?e():P(e)}const Z=typeof window<"u"&&typeof document<"u",be=Object.prototype.toString,_e=e=>be.call(e)==="[object Object]",A=()=>{},ke=we();function we(){var e;return Z&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function Y(e,n){function t(...o){return new Promise((i,r)=>{Promise.resolve(e(()=>n.apply(this,o),{fn:n,thisArg:this,args:o})).then(i).catch(r)})}return t}function Ee(e,n={}){let t,o,i=A;const r=s=>{clearTimeout(s),i(),i=A};return s=>{const a=E(e),c=E(n.maxWait);return t&&r(t),a<=0||c!==void 0&&c<=0?(o&&(r(o),o=null),Promise.resolve(s())):new Promise((f,p)=>{i=n.rejectOnCancel?p:f,c&&!o&&(o=setTimeout(()=>{t&&r(t),o=null,f(s())},c)),t=setTimeout(()=>{o&&r(o),o=null,f(s())},a)})}}function Te(e,n=!0,t=!0,o=!1){let i=0,r,l=!0,s=A,a;const c=()=>{r&&(clearTimeout(r),r=void 0,s(),s=A)};return p=>{const u=E(e),d=Date.now()-i,v=()=>a=p();return c(),u<=0?(i=Date.now(),v()):(d>u&&(t||!l)?(i=Date.now(),v()):n&&(a=new Promise((S,b)=>{s=o?b:S,r=setTimeout(()=>{i=Date.now(),l=!0,S(v()),c()},Math.max(0,u-d))})),!t&&!r&&(r=setTimeout(()=>l=!0,u)),l=!1,a)}}function Se(e,n=200,t={}){return Y(Ee(n,t),e)}function xe(e,n=200,t=!1,o=!0,i=!1){return Y(Te(n,t,o,i),e)}function z(e){var n;const t=E(e);return(n=t==null?void 0:t.$el)!=null?n:t}const L=Z?window:void 0;function k(...e){let n,t,o,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,o,i]=e,n=L):[n,t,o,i]=e,!n)return A;Array.isArray(t)||(t=[t]),Array.isArray(o)||(o=[o]);const r=[],l=()=>{r.forEach(f=>f()),r.length=0},s=(f,p,u,d)=>(f.addEventListener(p,u,d),()=>f.removeEventListener(p,u,d)),a=R(()=>[z(n),E(i)],([f,p])=>{if(l(),!f)return;const u=_e(p)?{...p}:p;r.push(...t.flatMap(d=>o.map(v=>s(f,d,v,u))))},{immediate:!0,flush:"post"}),c=()=>{a(),l()};return ye(c),c}let q=!1;function je(e,n,t={}){const{window:o=L,ignore:i=[],capture:r=!0,detectIframe:l=!1}=t;if(!o)return;ke&&!q&&(q=!0,Array.from(o.document.body.children).forEach(u=>u.addEventListener("click",A)),o.document.documentElement.addEventListener("click",A));let s=!0;const a=u=>i.some(d=>{if(typeof d=="string")return Array.from(o.document.querySelectorAll(d)).some(v=>v===u.target||u.composedPath().includes(v));{const v=z(d);return v&&(u.target===v||u.composedPath().includes(v))}}),f=[k(o,"click",u=>{const d=z(e);if(!(!d||d===u.target||u.composedPath().includes(d))){if(u.detail===0&&(s=!a(u)),!s){s=!0;return}n(u)}},{passive:!0,capture:r}),k(o,"pointerdown",u=>{const d=z(e);d&&(s=!u.composedPath().includes(d)&&!a(u))},{passive:!0}),l&&k(o,"blur",u=>{setTimeout(()=>{var d;const v=z(e);((d=o.document.activeElement)==null?void 0:d.tagName)==="IFRAME"&&!(v!=null&&v.contains(o.document.activeElement))&&n(u)},0)})].filter(Boolean);return()=>f.forEach(u=>u())}function Ae(e){return typeof e=="function"?e:typeof e=="string"?n=>n.key===e:Array.isArray(e)?n=>e.includes(n.key):()=>!0}function K(...e){let n,t,o={};e.length===3?(n=e[0],t=e[1],o=e[2]):e.length===2?typeof e[1]=="object"?(n=!0,t=e[0],o=e[1]):(n=e[0],t=e[1]):(n=!0,t=e[0]);const{target:i=L,eventName:r="keydown",passive:l=!1,dedupe:s=!1}=o,a=Ae(n);return k(i,r,f=>{f.repeat&&E(s)||a(f)&&t(f)},l)}function Ve(e={}){var n;const{window:t=L,deep:o=!0}=e,i=(n=e.document)!=null?n:t==null?void 0:t.document,r=()=>{var s;let a=i==null?void 0:i.activeElement;if(o)for(;a!=null&&a.shadowRoot;)a=(s=a==null?void 0:a.shadowRoot)==null?void 0:s.activeElement;return a},l=he(()=>null,()=>r());return t&&(k(t,"blur",s=>{s.relatedTarget===null&&l.trigger()},!0),k(t,"focus",l.trigger,!0)),l}function Be(e,n={}){const{delayEnter:t=0,delayLeave:o=0,window:i=L}=n,r=T(!1);let l;const s=a=>{const c=a?t:o;l&&(clearTimeout(l),l=void 0),c?l=setTimeout(()=>r.value=a,c):r.value=a};return i&&(k(e,"mouseenter",()=>s(!0),{passive:!0}),k(e,"mouseleave",()=>s(!1),{passive:!0})),r}function He(e,n={}){const{initialValue:t=!1,focusVisible:o=!1}=n,i=T(!1),r=V(()=>z(e));k(r,"focus",s=>{var a,c;(!o||(c=(a=s.target).matches)!=null&&c.call(a,":focus-visible"))&&(i.value=!0)}),k(r,"blur",()=>i.value=!1);const l=V({get:()=>i.value,set(s){var a,c;!s&&i.value?(a=r.value)==null||a.blur():s&&!i.value&&((c=r.value)==null||c.focus())}});return R(r,()=>{l.value=t},{immediate:!0,flush:"post"}),{focused:l}}function Ie(e,n={}){const t=Ve(n),o=V(()=>z(e));return{focused:V(()=>o.value&&t.value?o.value.contains(t.value):!1)}}const X=1;function Ne(e,n={}){const{throttle:t=0,idle:o=200,onStop:i=A,onScroll:r=A,offset:l={left:0,right:0,top:0,bottom:0},eventListenerOptions:s={capture:!1,passive:!0},behavior:a="auto",window:c=L}=n,f=T(0),p=T(0),u=V({get(){return f.value},set(m){v(m,void 0)}}),d=V({get(){return p.value},set(m){v(void 0,m)}});function v(m,_){var y,I,W;if(!c)return;const x=E(e);x&&((W=x instanceof Document?c.document.body:x)==null||W.scrollTo({top:(y=E(_))!=null?y:d.value,left:(I=E(m))!=null?I:u.value,behavior:E(a)}))}const S=T(!1),b=N({left:!0,right:!1,top:!0,bottom:!1}),w=N({left:!1,right:!1,top:!1,bottom:!1}),D=m=>{S.value&&(S.value=!1,w.left=!1,w.right=!1,w.top=!1,w.bottom=!1,i(m))},M=Se(D,t+o),g=m=>{var _;if(!c)return;const y=m.document?m.document.documentElement:(_=m.documentElement)!=null?_:m,{display:I,flexDirection:W}=getComputedStyle(y),x=y.scrollLeft;w.left=x<f.value,w.right=x>f.value;const $=Math.abs(x)<=0+(l.left||0),j=Math.abs(x)+y.clientWidth>=y.scrollWidth-(l.right||0)-X;I==="flex"&&W==="row-reverse"?(b.left=j,b.right=$):(b.left=$,b.right=j),f.value=x;let C=y.scrollTop;m===c.document&&!C&&(C=c.document.body.scrollTop),w.top=C<p.value,w.bottom=C>p.value;const B=Math.abs(C)<=0+(l.top||0),H=Math.abs(C)+y.clientHeight>=y.scrollHeight-(l.bottom||0)-X;I==="flex"&&W==="column-reverse"?(b.top=H,b.bottom=B):(b.top=B,b.bottom=H),p.value=C},h=m=>{var _;if(!c)return;const y=(_=m.target.documentElement)!=null?_:m.target;g(y),S.value=!0,M(m),r(m)};return k(e,"scroll",t?xe(h,t,!0,!1):h,s),k(e,"scrollend",D,s),{x:u,y:d,isScrolling:S,arrivedState:b,directions:w,measure(){const m=E(e);c&&m&&g(m)}}}const Ce="zoa__togglebutton__input",ze="zoa__togglebutton__inputWrapper",De="zoa__togglebutton__main",Pe="zoa__togglebutton__checkbox",Le={input:Ce,inputWrapper:ze,main:De,"kind--normal":"zoa__togglebutton__kind--normal",checkbox:Pe,"kind--primary":"zoa__togglebutton__kind--primary","kind--alt":"zoa__togglebutton__kind--alt","size--sm":"zoa__togglebutton__size--sm","size--md":"zoa__togglebutton__size--md"},Me=["id","for"],We=["id","name","value"],G={__name:"ToggleButton",props:{modelValue:{type:[Boolean,Array],default:void 0},class:{type:[String,Array,null],default:null},label:{type:String,default:"Checkbox"},delay:{type:Number,default:0},name:{type:[String,null],default:null},checkValue:{type:[String,null],default:null},kind:{type:String,default:"normal"},size:{type:String,default:"md"}},emits:["change","update:modelValue"],setup(e,{emit:n}){const t=e,{componentId:o,subId:i}=ge(),{addPropClasses:r}=de(t),{value:l}=pe(n,t),s=T(null),a=T(null),c=Ie(s),f=V(()=>t.checkValue||t.label);function p(){let u=ie(l.value)?ce(l.value):l.value;if(Array.isArray(u)){let d=!a.value.checked;u=u.filter(v=>v!==f.value),d&&u.push(f.value),l.value=u,a.value.checked=d}else l.value=!l.value}return K(" ",()=>{c.focused.value&&p()}),K("Enter",()=>{c.focused.value&&p()}),(u,d)=>(te(),ne("label",{id:P(o),for:P(i)("toggle"),tabindex:"0",ref_key:"checkboxContainer",ref:s,class:O(P(r)([]))},[oe(F("input",{type:"checkbox",id:P(i)("toggle"),class:O(u.$style.checkbox),"onUpdate:modelValue":d[0]||(d[0]=v=>ae(l)?l.value=v:null),name:e.name,value:f.value,ref_key:"checkboxInput",ref:a},null,10,We),[[le,P(l)]]),F("span",{class:O([u.$style.main,u.$style[`kind--${e.kind}`],u.$style[`size--${e.size}`]])},[se(u.$slots,"default",{},()=>[ue(re(e.label),1)])],2)],10,Me))}},Oe={$style:Le},Fe=fe(G,[["__cssModules",Oe]]);G.__docgenInfo={exportName:"default",displayName:"ToggleButton",description:"",tags:{},props:[{name:"v-model",tags:{model:[{description:!0,title:"model"}]},type:{name:"boolean|array"},defaultValue:{func:!1,value:"undefined"}},{name:"class",description:"Additional class(es) to add to the root element.",type:{name:"string|array|null"},defaultValue:{func:!1,value:"null"}},{name:"label",description:"Text for the input label.",type:{name:"string"},defaultValue:{func:!1,value:"'Checkbox'"}},{name:"delay",description:"Debounce delay for the `change` event, in ms.",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"name",description:"An optional name for the toggle; useful if making a group.",type:{name:"string|null"},defaultValue:{func:!1,value:"null"}},{name:"checkValue",description:`An optional alternative value for the checkbox to return. If not specified,
the label value will be used.`,type:{name:"string|null"},defaultValue:{func:!1,value:"null"}},{name:"kind",description:"The appearance class of the button.",tags:{},values:["normal","primary","alt"],type:{name:"string"},defaultValue:{func:!1,value:"'normal'"}},{name:"size",description:"The size class of the button.",tags:{},values:["sm","md"],type:{name:"string"},defaultValue:{func:!1,value:"'md'"}}],events:[{name:"change",description:"Emitted when the value changes; debounced if the delay prop is > 0.",properties:[{type:{names:["boolean"]},name:"newValue",description:"the new value"}],tags:[{title:"arg",type:{name:"boolean"},name:"newValue",description:"the new value"}]},{name:"update:modelValue",tags:[{title:"ignore",content:!0}]}],slots:[{name:"default",description:"Text for the button; overrides the label prop."}],sourceFiles:["/home/runner/work/zoa/zoa/src/components/inputs/button/ToggleButton.vue"]};export{Fe as Z,Be as a,He as b,Ie as c,je as d,me as e,Ne as f,ge as g,ve as n,K as o,pe as u};
//# sourceMappingURL=ToggleButton-66942192.js.map
