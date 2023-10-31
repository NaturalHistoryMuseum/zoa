import{u as Y,b as x,s as R,C as $,D as z,E as G,p as L,r as F}from"./vue.esm-bundler-322ccd87.js";function J(e,o){let t,n,r;const l=x(!0),a=()=>{l.value=!0,r()};R(e,a,{flush:"sync"});const u=typeof o=="function"?o:o.get,i=typeof o=="function"?void 0:o.set,c=$((f,v)=>(n=f,r=v,{get(){return l.value&&(t=u(),l.value=!1),n(),t},set(s){i==null||i(s)}}));return Object.isExtensible(c)&&(c.trigger=a),c}function Q(e){return z()?(G(e),!0):!1}function g(e){return typeof e=="function"?e():Y(e)}const X=typeof window<"u"&&typeof document<"u",U=Object.prototype.toString,Z=e=>U.call(e)==="[object Object]",S=()=>{},ee=te();function te(){var e;return X&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function q(e,o){function t(...n){return new Promise((r,l)=>{Promise.resolve(e(()=>o.apply(this,n),{fn:o,thisArg:this,args:n})).then(r).catch(l)})}return t}function ne(e,o={}){let t,n,r=S;const l=u=>{clearTimeout(u),r(),r=S};return u=>{const i=g(e),c=g(o.maxWait);return t&&l(t),i<=0||c!==void 0&&c<=0?(n&&(l(n),n=null),Promise.resolve(u())):new Promise((f,v)=>{r=o.rejectOnCancel?v:f,c&&!n&&(n=setTimeout(()=>{t&&l(t),n=null,f(u())},c)),t=setTimeout(()=>{n&&l(n),n=null,f(u())},i)})}}function oe(e,o=!0,t=!0,n=!1){let r=0,l,a=!0,u=S,i;const c=()=>{l&&(clearTimeout(l),l=void 0,u(),u=S)};return v=>{const s=g(e),d=Date.now()-r,p=()=>i=v();return c(),s<=0?(r=Date.now(),p()):(d>s&&(t||!a)?(r=Date.now(),p()):o&&(i=new Promise((_,b)=>{u=n?b:_,l=setTimeout(()=>{r=Date.now(),a=!0,_(p()),c()},Math.max(0,s-d))})),!t&&!l&&(l=setTimeout(()=>a=!0,s)),a=!1,i)}}function re(e,o=200,t={}){return q(ne(o,t),e)}function le(e,o=200,t=!1,n=!0,r=!1){return q(oe(o,t,n,r),e)}function D(e){var o;const t=g(e);return(o=t==null?void 0:t.$el)!=null?o:t}const j=X?window:void 0;function y(...e){let o,t,n,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,n,r]=e,o=j):[o,t,n,r]=e,!o)return S;Array.isArray(t)||(t=[t]),Array.isArray(n)||(n=[n]);const l=[],a=()=>{l.forEach(f=>f()),l.length=0},u=(f,v,s,d)=>(f.addEventListener(v,s,d),()=>f.removeEventListener(v,s,d)),i=R(()=>[D(o),g(r)],([f,v])=>{if(a(),!f)return;const s=Z(v)?{...v}:v;l.push(...t.flatMap(d=>n.map(p=>u(f,d,p,s))))},{immediate:!0,flush:"post"}),c=()=>{i(),a()};return Q(c),c}let K=!1;function ce(e,o,t={}){const{window:n=j,ignore:r=[],capture:l=!0,detectIframe:a=!1}=t;if(!n)return;ee&&!K&&(K=!0,Array.from(n.document.body.children).forEach(s=>s.addEventListener("click",S)),n.document.documentElement.addEventListener("click",S));let u=!0;const i=s=>r.some(d=>{if(typeof d=="string")return Array.from(n.document.querySelectorAll(d)).some(p=>p===s.target||s.composedPath().includes(p));{const p=D(d);return p&&(s.target===p||s.composedPath().includes(p))}}),f=[y(n,"click",s=>{const d=D(e);if(!(!d||d===s.target||s.composedPath().includes(d))){if(s.detail===0&&(u=!i(s)),!u){u=!0;return}o(s)}},{passive:!0,capture:l}),y(n,"pointerdown",s=>{const d=D(e);d&&(u=!s.composedPath().includes(d)&&!i(s))},{passive:!0}),a&&y(n,"blur",s=>{setTimeout(()=>{var d;const p=D(e);((d=n.document.activeElement)==null?void 0:d.tagName)==="IFRAME"&&!(p!=null&&p.contains(n.document.activeElement))&&o(s)},0)})].filter(Boolean);return()=>f.forEach(s=>s())}function se(e){return typeof e=="function"?e:typeof e=="string"?o=>o.key===e:Array.isArray(e)?o=>e.includes(o.key):()=>!0}function ae(...e){let o,t,n={};e.length===3?(o=e[0],t=e[1],n=e[2]):e.length===2?typeof e[1]=="object"?(o=!0,t=e[0],n=e[1]):(o=e[0],t=e[1]):(o=!0,t=e[0]);const{target:r=j,eventName:l="keydown",passive:a=!1,dedupe:u=!1}=n,i=se(o);return y(r,l,f=>{f.repeat&&g(u)||i(f)&&t(f)},a)}function ue(e={}){var o;const{window:t=j,deep:n=!0}=e,r=(o=e.document)!=null?o:t==null?void 0:t.document,l=()=>{var u;let i=r==null?void 0:r.activeElement;if(n)for(;i!=null&&i.shadowRoot;)i=(u=i==null?void 0:i.shadowRoot)==null?void 0:u.activeElement;return i},a=J(()=>null,()=>l());return t&&(y(t,"blur",u=>{u.relatedTarget===null&&a.trigger()},!0),y(t,"focus",a.trigger,!0)),a}function fe(e,o={}){const{initialValue:t=!1,focusVisible:n=!1}=o,r=x(!1),l=L(()=>D(e));y(l,"focus",u=>{var i,c;(!n||(c=(i=u.target).matches)!=null&&c.call(i,":focus-visible"))&&(r.value=!0)}),y(l,"blur",()=>r.value=!1);const a=L({get:()=>r.value,set(u){var i,c;!u&&r.value?(i=l.value)==null||i.blur():u&&!r.value&&((c=l.value)==null||c.focus())}});return R(l,()=>{a.value=t},{immediate:!0,flush:"post"}),{focused:a}}function de(e,o={}){const t=ue(o),n=L(()=>D(e));return{focused:L(()=>n.value&&t.value?n.value.contains(t.value):!1)}}const N=1;function me(e,o={}){const{throttle:t=0,idle:n=200,onStop:r=S,onScroll:l=S,offset:a={left:0,right:0,top:0,bottom:0},eventListenerOptions:u={capture:!1,passive:!0},behavior:i="auto",window:c=j}=o,f=x(0),v=x(0),s=L({get(){return f.value},set(m){p(m,void 0)}}),d=L({get(){return v.value},set(m){p(void 0,m)}});function p(m,A){var h,O,P;if(!c)return;const w=g(e);w&&((P=w instanceof Document?c.document.body:w)==null||P.scrollTo({top:(h=g(A))!=null?h:d.value,left:(O=g(m))!=null?O:s.value,behavior:g(i)}))}const _=x(!1),b=F({left:!0,right:!1,top:!0,bottom:!1}),E=F({left:!1,right:!1,top:!1,bottom:!1}),W=m=>{_.value&&(_.value=!1,E.left=!1,E.right=!1,E.top=!1,E.bottom=!1,r(m))},B=re(W,t+n),C=m=>{var A;if(!c)return;const h=m.document?m.document.documentElement:(A=m.documentElement)!=null?A:m,{display:O,flexDirection:P}=getComputedStyle(h),w=h.scrollLeft;E.left=w<f.value,E.right=w>f.value;const M=Math.abs(w)<=0+(a.left||0),k=Math.abs(w)+h.clientWidth>=h.scrollWidth-(a.right||0)-N;O==="flex"&&P==="row-reverse"?(b.left=k,b.right=M):(b.left=M,b.right=k),f.value=w;let T=h.scrollTop;m===c.document&&!T&&(T=c.document.body.scrollTop),E.top=T<v.value,E.bottom=T>v.value;const H=Math.abs(T)<=0+(a.top||0),V=Math.abs(T)+h.clientHeight>=h.scrollHeight-(a.bottom||0)-N;O==="flex"&&P==="column-reverse"?(b.top=V,b.bottom=H):(b.top=H,b.bottom=V),v.value=T},I=m=>{var A;if(!c)return;const h=(A=m.target.documentElement)!=null?A:m.target;C(h),_.value=!0,B(m),l(m)};return y(e,"scroll",t?le(I,t,!0,!1):I,u),y(e,"scrollend",W,u),{x:s,y:d,isScrolling:_,arrivedState:b,directions:E,measure(){const m=g(e);c&&m&&C(m)}}}export{de as a,ae as b,me as c,ce as o,fe as u};
//# sourceMappingURL=index-8677b196.js.map
