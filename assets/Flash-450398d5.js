import{g as W,B as bt,s as ht,h as yt,o as kt,b as xt,j as Te,C as wt,u as ze,n as ee,t as un,d as At,e as Ot}from"./vue.esm-bundler-b24b9645.js";import{_ as St,u as _t}from"./_plugin-vue_export-helper-3e980904.js";function Pt(e){return{icon:W(()=>{switch(e.kind){case"info":return"fa-circle-info";case"warning":return"fa-circle-exclamation";case"error":return"fa-circle-xmark";case"success":return"fa-circle-check";default:return"fa-circle-question"}})}}function mn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?mn(Object(t),!0).forEach(function(a){O(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):mn(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function Ae(e){"@babel/helpers - typeof";return Ae=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ae(e)}function Ct(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function dn(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Et(e,n,t){return n&&dn(e.prototype,n),t&&dn(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function O(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Ze(e,n){return It(e)||zt(e,n)||jn(e,n)||Lt()}function le(e){return Nt(e)||Tt(e)||jn(e)||Mt()}function Nt(e){if(Array.isArray(e))return je(e)}function It(e){if(Array.isArray(e))return e}function Tt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function zt(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var a=[],r=!0,i=!1,o,s;try{for(t=t.call(e);!(r=(o=t.next()).done)&&(a.push(o.value),!(n&&a.length===n));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&t.return!=null&&t.return()}finally{if(i)throw s}}return a}}function jn(e,n){if(e){if(typeof e=="string")return je(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return je(e,n)}}function je(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function Mt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var vn=function(){},Qe={},$n={},Yn=null,Bn={mark:vn,measure:vn};try{typeof window<"u"&&(Qe=window),typeof document<"u"&&($n=document),typeof MutationObserver<"u"&&(Yn=MutationObserver),typeof performance<"u"&&(Bn=performance)}catch{}var Ft=Qe.navigator||{},pn=Ft.userAgent,gn=pn===void 0?"":pn,Y=Qe,k=$n,bn=Yn,me=Bn;Y.document;var D=!!k.documentElement&&!!k.head&&typeof k.addEventListener=="function"&&typeof k.createElement=="function",Un=~gn.indexOf("MSIE")||~gn.indexOf("Trident/"),de,ve,pe,ge,be,L="___FONT_AWESOME___",$e=16,Wn="fa",Hn="svg-inline--fa",V="data-fa-i2svg",Ye="data-fa-pseudo-element",Rt="data-fa-pseudo-element-pending",Je="data-prefix",en="data-icon",hn="fontawesome-i2svg",Dt="async",jt=["HTML","HEAD","STYLE","SCRIPT"],Xn=function(){try{return!0}catch{return!1}}(),y="classic",x="sharp",nn=[y,x];function ce(e){return new Proxy(e,{get:function(t,a){return a in t?t[a]:t[y]}})}var re=ce((de={},O(de,y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),O(de,x,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),de)),ie=ce((ve={},O(ve,y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),O(ve,x,{solid:"fass",regular:"fasr",light:"fasl"}),ve)),oe=ce((pe={},O(pe,y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),O(pe,x,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),pe)),$t=ce((ge={},O(ge,y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),O(ge,x,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),ge)),Yt=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Vn="fa-layers-text",Bt=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ut=ce((be={},O(be,y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),O(be,x,{900:"fass",400:"fasr",300:"fasl"}),be)),Gn=[1,2,3,4,5,6,7,8,9,10],Wt=Gn.concat([11,12,13,14,15,16,17,18,19,20]),Ht=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],H={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},se=new Set;Object.keys(ie[y]).map(se.add.bind(se));Object.keys(ie[x]).map(se.add.bind(se));var Xt=[].concat(nn,le(se),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",H.GROUP,H.SWAP_OPACITY,H.PRIMARY,H.SECONDARY]).concat(Gn.map(function(e){return"".concat(e,"x")})).concat(Wt.map(function(e){return"w-".concat(e)})),te=Y.FontAwesomeConfig||{};function Vt(e){var n=k.querySelector("script["+e+"]");if(n)return n.getAttribute(e)}function Gt(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(k&&typeof k.querySelector=="function"){var Kt=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Kt.forEach(function(e){var n=Ze(e,2),t=n[0],a=n[1],r=Gt(Vt(t));r!=null&&(te[a]=r)})}var Kn={styleDefault:"solid",familyDefault:"classic",cssPrefix:Wn,replacementClass:Hn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};te.familyPrefix&&(te.cssPrefix=te.familyPrefix);var Q=u(u({},Kn),te);Q.autoReplaceSvg||(Q.observeMutations=!1);var m={};Object.keys(Kn).forEach(function(e){Object.defineProperty(m,e,{enumerable:!0,set:function(t){Q[e]=t,ae.forEach(function(a){return a(m)})},get:function(){return Q[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(n){Q.cssPrefix=n,ae.forEach(function(t){return t(m)})},get:function(){return Q.cssPrefix}});Y.FontAwesomeConfig=m;var ae=[];function qt(e){return ae.push(e),function(){ae.splice(ae.indexOf(e),1)}}var $=$e,z={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Zt(e){if(!(!e||!D)){var n=k.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e;for(var t=k.head.childNodes,a=null,r=t.length-1;r>-1;r--){var i=t[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return k.head.insertBefore(n,a),e}}var Qt="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function fe(){for(var e=12,n="";e-- >0;)n+=Qt[Math.random()*62|0];return n}function J(e){for(var n=[],t=(e||[]).length>>>0;t--;)n[t]=e[t];return n}function tn(e){return e.classList?J(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(n){return n})}function qn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Jt(e){return Object.keys(e||{}).reduce(function(n,t){return n+"".concat(t,'="').concat(qn(e[t]),'" ')},"").trim()}function Pe(e){return Object.keys(e||{}).reduce(function(n,t){return n+"".concat(t,": ").concat(e[t].trim(),";")},"")}function an(e){return e.size!==z.size||e.x!==z.x||e.y!==z.y||e.rotate!==z.rotate||e.flipX||e.flipY}function ea(e){var n=e.transform,t=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),s="rotate(".concat(n.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:c}}function na(e){var n=e.transform,t=e.width,a=t===void 0?$e:t,r=e.height,i=r===void 0?$e:r,o=e.startCentered,s=o===void 0?!1:o,f="";return s&&Un?f+="translate(".concat(n.x/$-a/2,"em, ").concat(n.y/$-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(n.x/$,"em), calc(-50% + ").concat(n.y/$,"em)) "):f+="translate(".concat(n.x/$,"em, ").concat(n.y/$,"em) "),f+="scale(".concat(n.size/$*(n.flipX?-1:1),", ").concat(n.size/$*(n.flipY?-1:1),") "),f+="rotate(".concat(n.rotate,"deg) "),f}var ta=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Zn(){var e=Wn,n=Hn,t=m.cssPrefix,a=m.replacementClass,r=ta;if(t!==e||a!==n){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(s,".".concat(a))}return r}var yn=!1;function Me(){m.autoAddCss&&!yn&&(Zt(Zn()),yn=!0)}var aa={mixout:function(){return{dom:{css:Zn,insertCss:Me}}},hooks:function(){return{beforeDOMElementCreation:function(){Me()},beforeI2svg:function(){Me()}}}},F=Y||{};F[L]||(F[L]={});F[L].styles||(F[L].styles={});F[L].hooks||(F[L].hooks={});F[L].shims||(F[L].shims=[]);var I=F[L],Qn=[],ra=function e(){k.removeEventListener("DOMContentLoaded",e),Oe=1,Qn.map(function(n){return n()})},Oe=!1;D&&(Oe=(k.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(k.readyState),Oe||k.addEventListener("DOMContentLoaded",ra));function ia(e){D&&(Oe?setTimeout(e,0):Qn.push(e))}function ue(e){var n=e.tag,t=e.attributes,a=t===void 0?{}:t,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?qn(e):"<".concat(n," ").concat(Jt(a),">").concat(i.map(ue).join(""),"</").concat(n,">")}function kn(e,n,t){if(e&&e[n]&&e[n][t])return{prefix:n,iconName:t,icon:e[n][t]}}var oa=function(n,t){return function(a,r,i,o){return n.call(t,a,r,i,o)}},Le=function(n,t,a,r){var i=Object.keys(n),o=i.length,s=r!==void 0?oa(t,r):t,f,c,l;for(a===void 0?(f=1,l=n[i[0]]):(f=0,l=a);f<o;f++)c=i[f],l=s(l,n[c],c,n);return l};function sa(e){for(var n=[],t=0,a=e.length;t<a;){var r=e.charCodeAt(t++);if(r>=55296&&r<=56319&&t<a){var i=e.charCodeAt(t++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),t--)}else n.push(r)}return n}function Be(e){var n=sa(e);return n.length===1?n[0].toString(16):null}function fa(e,n){var t=e.length,a=e.charCodeAt(n),r;return a>=55296&&a<=56319&&t>n+1&&(r=e.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function xn(e){return Object.keys(e).reduce(function(n,t){var a=e[t],r=!!a.icon;return r?n[a.iconName]=a.icon:n[t]=a,n},{})}function Ue(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=t.skipHooks,r=a===void 0?!1:a,i=xn(n);typeof I.hooks.addPack=="function"&&!r?I.hooks.addPack(e,xn(n)):I.styles[e]=u(u({},I.styles[e]||{}),i),e==="fas"&&Ue("fa",n)}var he,ye,ke,K=I.styles,la=I.shims,ca=(he={},O(he,y,Object.values(oe[y])),O(he,x,Object.values(oe[x])),he),rn=null,Jn={},et={},nt={},tt={},at={},ua=(ye={},O(ye,y,Object.keys(re[y])),O(ye,x,Object.keys(re[x])),ye);function ma(e){return~Xt.indexOf(e)}function da(e,n){var t=n.split("-"),a=t[0],r=t.slice(1).join("-");return a===e&&r!==""&&!ma(r)?r:null}var rt=function(){var n=function(i){return Le(K,function(o,s,f){return o[f]=Le(s,i,{}),o},{})};Jn=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),et=n(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),at=n(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var t="far"in K||m.autoFetchSvg,a=Le(la,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});nt=a.names,tt=a.unicodes,rn=Ce(m.styleDefault,{family:m.familyDefault})};qt(function(e){rn=Ce(e.styleDefault,{family:m.familyDefault})});rt();function on(e,n){return(Jn[e]||{})[n]}function va(e,n){return(et[e]||{})[n]}function X(e,n){return(at[e]||{})[n]}function it(e){return nt[e]||{prefix:null,iconName:null}}function pa(e){var n=tt[e],t=on("fas",e);return n||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function B(){return rn}var sn=function(){return{prefix:null,iconName:null,rest:[]}};function Ce(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.family,a=t===void 0?y:t,r=re[a][e],i=ie[a][e]||ie[a][r],o=e in I.styles?e:null;return i||o||null}var wn=(ke={},O(ke,y,Object.keys(oe[y])),O(ke,x,Object.keys(oe[x])),ke);function Ee(e){var n,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,r=a===void 0?!1:a,i=(n={},O(n,y,"".concat(m.cssPrefix,"-").concat(y)),O(n,x,"".concat(m.cssPrefix,"-").concat(x)),n),o=null,s=y;(e.includes(i[y])||e.some(function(c){return wn[y].includes(c)}))&&(s=y),(e.includes(i[x])||e.some(function(c){return wn[x].includes(c)}))&&(s=x);var f=e.reduce(function(c,l){var d=da(m.cssPrefix,l);if(K[l]?(l=ca[s].includes(l)?$t[s][l]:l,o=l,c.prefix=l):ua[s].indexOf(l)>-1?(o=l,c.prefix=Ce(l,{family:s})):d?c.iconName=d:l!==m.replacementClass&&l!==i[y]&&l!==i[x]&&c.rest.push(l),!r&&c.prefix&&c.iconName){var g=o==="fa"?it(c.iconName):{},b=X(c.prefix,c.iconName);g.prefix&&(o=null),c.iconName=g.iconName||b||c.iconName,c.prefix=g.prefix||c.prefix,c.prefix==="far"&&!K.far&&K.fas&&!m.autoFetchSvg&&(c.prefix="fas")}return c},sn());return(e.includes("fa-brands")||e.includes("fab"))&&(f.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===x&&(K.fass||m.autoFetchSvg)&&(f.prefix="fass",f.iconName=X(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=B()||"fas"),f}var ga=function(){function e(){Ct(this,e),this.definitions={}}return Et(e,[{key:"add",value:function(){for(var t=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){t.definitions[s]=u(u({},t.definitions[s]||{}),o[s]),Ue(s,o[s]);var f=oe[y][s];f&&Ue(f,o[s]),rt()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,c=o.icon,l=c[2];t[s]||(t[s]={}),l.length>0&&l.forEach(function(d){typeof d=="string"&&(t[s][d]=c)}),t[s][f]=c}),t}}]),e}(),An=[],q={},Z={},ba=Object.keys(Z);function ha(e,n){var t=n.mixoutsTo;return An=e,q={},Object.keys(Z).forEach(function(a){ba.indexOf(a)===-1&&delete Z[a]}),An.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(t[o]=r[o]),Ae(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){t[o]||(t[o]={}),t[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){q[o]||(q[o]=[]),q[o].push(i[o])})}a.provides&&a.provides(Z)}),t}function We(e,n){for(var t=arguments.length,a=new Array(t>2?t-2:0),r=2;r<t;r++)a[r-2]=arguments[r];var i=q[e]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(a))}),n}function G(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];var r=q[e]||[];r.forEach(function(i){i.apply(null,t)})}function R(){var e=arguments[0],n=Array.prototype.slice.call(arguments,1);return Z[e]?Z[e].apply(null,n):void 0}function He(e){e.prefix==="fa"&&(e.prefix="fas");var n=e.iconName,t=e.prefix||B();if(n)return n=X(t,n)||n,kn(ot.definitions,t,n)||kn(I.styles,t,n)}var ot=new ga,ya=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,G("noAuto")},ka={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return D?(G("beforeI2svg",n),R("pseudoElements2svg",n),R("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,ia(function(){wa({autoReplaceSvgRoot:t}),G("watch",n)})}},xa={icon:function(n){if(n===null)return null;if(Ae(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:X(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var t=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=Ce(n[0]);return{prefix:a,iconName:X(a,t)||t}}if(typeof n=="string"&&(n.indexOf("".concat(m.cssPrefix,"-"))>-1||n.match(Yt))){var r=Ee(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||B(),iconName:X(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=B();return{prefix:i,iconName:X(i,n)||n}}}},E={noAuto:ya,config:m,dom:ka,parse:xa,library:ot,findIconDefinition:He,toHtml:ue},wa=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot,a=t===void 0?k:t;(Object.keys(I.styles).length>0||m.autoFetchSvg)&&D&&m.autoReplaceSvg&&E.dom.i2svg({node:a})};function Ne(e,n){return Object.defineProperty(e,"abstract",{get:n}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return ue(a)})}}),Object.defineProperty(e,"node",{get:function(){if(D){var a=k.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function Aa(e){var n=e.children,t=e.main,a=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(an(o)&&t.found&&!a.found){var s=t.width,f=t.height,c={x:s/f/2,y:.5};r.style=Pe(u(u({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function Oa(e){var n=e.prefix,t=e.iconName,a=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(n,"-").concat(m.cssPrefix,"-").concat(t):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:a}]}]}function fn(e){var n=e.icons,t=n.main,a=n.mask,r=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,f=e.title,c=e.maskId,l=e.titleId,d=e.extra,g=e.watchable,b=g===void 0?!1:g,S=a.found?a:t,_=S.width,P=S.height,v=r==="fak",p=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(j){return d.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(d.classes).join(" "),h={children:[],attributes:u(u({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:p,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(P)})},w=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(_/P*16*.0625,"em")}:{};b&&(h.attributes[V]=""),f&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(l||fe())},children:[f]}),delete h.attributes.title);var A=u(u({},h),{},{prefix:r,iconName:i,main:t,mask:a,maskId:c,transform:o,symbol:s,styles:u(u({},w),d.styles)}),T=a.found&&t.found?R("generateAbstractMask",A)||{children:[],attributes:{}}:R("generateAbstractIcon",A)||{children:[],attributes:{}},N=T.children,Ie=T.attributes;return A.children=N,A.attributes=Ie,s?Oa(A):Aa(A)}function On(e){var n=e.content,t=e.width,a=e.height,r=e.transform,i=e.title,o=e.extra,s=e.watchable,f=s===void 0?!1:s,c=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(c[V]="");var l=u({},o.styles);an(r)&&(l.transform=na({transform:r,startCentered:!0,width:t,height:a}),l["-webkit-transform"]=l.transform);var d=Pe(l);d.length>0&&(c.style=d);var g=[];return g.push({tag:"span",attributes:c,children:[n]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function Sa(e){var n=e.content,t=e.title,a=e.extra,r=u(u(u({},a.attributes),t?{title:t}:{}),{},{class:a.classes.join(" ")}),i=Pe(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[n]}),t&&o.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),o}var Fe=I.styles;function Xe(e){var n=e[0],t=e[1],a=e.slice(4),r=Ze(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(H.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(H.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(H.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:t,icon:o}}var _a={found:!1,width:512,height:512};function Pa(e,n){!Xn&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(n,'" is missing.'))}function Ve(e,n){var t=n;return n==="fa"&&m.styleDefault!==null&&(n=B()),new Promise(function(a,r){if(R("missingIconAbstract"),t==="fa"){var i=it(e)||{};e=i.iconName||e,n=i.prefix||n}if(e&&n&&Fe[n]&&Fe[n][e]){var o=Fe[n][e];return a(Xe(o))}Pa(e,n),a(u(u({},_a),{},{icon:m.showMissingIcons&&e?R("missingIconAbstract")||{}:{}}))})}var Sn=function(){},Ge=m.measurePerformance&&me&&me.mark&&me.measure?me:{mark:Sn,measure:Sn},ne='FA "6.4.2"',Ca=function(n){return Ge.mark("".concat(ne," ").concat(n," begins")),function(){return st(n)}},st=function(n){Ge.mark("".concat(ne," ").concat(n," ends")),Ge.measure("".concat(ne," ").concat(n),"".concat(ne," ").concat(n," begins"),"".concat(ne," ").concat(n," ends"))},ln={begin:Ca,end:st},xe=function(){};function _n(e){var n=e.getAttribute?e.getAttribute(V):null;return typeof n=="string"}function Ea(e){var n=e.getAttribute?e.getAttribute(Je):null,t=e.getAttribute?e.getAttribute(en):null;return n&&t}function Na(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function Ia(){if(m.autoReplaceSvg===!0)return we.replace;var e=we[m.autoReplaceSvg];return e||we.replace}function Ta(e){return k.createElementNS("http://www.w3.org/2000/svg",e)}function za(e){return k.createElement(e)}function ft(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.ceFn,a=t===void 0?e.tag==="svg"?Ta:za:t;if(typeof e=="string")return k.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(ft(o,{ceFn:a}))}),r}function Ma(e){var n=" ".concat(e.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var we={replace:function(n){var t=n[0];if(t.parentNode)if(n[1].forEach(function(r){t.parentNode.insertBefore(ft(r),t)}),t.getAttribute(V)===null&&m.keepOriginalSource){var a=k.createComment(Ma(t));t.parentNode.replaceChild(a,t)}else t.remove()},nest:function(n){var t=n[0],a=n[1];if(~tn(t).indexOf(m.replacementClass))return we.replace(n);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===m.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return ue(s)}).join(`
`);t.setAttribute(V,""),t.innerHTML=o}};function Pn(e){e()}function lt(e,n){var t=typeof n=="function"?n:xe;if(e.length===0)t();else{var a=Pn;m.mutateApproach===Dt&&(a=Y.requestAnimationFrame||Pn),a(function(){var r=Ia(),i=ln.begin("mutate");e.map(r),i(),t()})}}var cn=!1;function ct(){cn=!0}function Ke(){cn=!1}var Se=null;function Cn(e){if(bn&&m.observeMutations){var n=e.treeCallback,t=n===void 0?xe:n,a=e.nodeCallback,r=a===void 0?xe:a,i=e.pseudoElementsCallback,o=i===void 0?xe:i,s=e.observeMutationsRoot,f=s===void 0?k:s;Se=new bn(function(c){if(!cn){var l=B();J(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!_n(d.addedNodes[0])&&(m.searchPseudoElements&&o(d.target),t(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&_n(d.target)&&~Ht.indexOf(d.attributeName))if(d.attributeName==="class"&&Ea(d.target)){var g=Ee(tn(d.target)),b=g.prefix,S=g.iconName;d.target.setAttribute(Je,b||l),S&&d.target.setAttribute(en,S)}else Na(d.target)&&r(d.target)})}}),D&&Se.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function La(){Se&&Se.disconnect()}function Fa(e){var n=e.getAttribute("style"),t=[];return n&&(t=n.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),t}function Ra(e){var n=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=Ee(tn(e));return r.prefix||(r.prefix=B()),n&&t&&(r.prefix=n,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=va(r.prefix,e.innerText)||on(r.prefix,Be(e.innerText))),!r.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Da(e){var n=J(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),t=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return m.autoA11y&&(t?n["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||fe()):(n["aria-hidden"]="true",n.focusable="false")),n}function ja(){return{iconName:null,title:null,titleId:null,prefix:null,transform:z,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function En(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=Ra(e),a=t.iconName,r=t.prefix,i=t.rest,o=Da(e),s=We("parseNodeAttributes",{},e),f=n.styleParser?Fa(e):[];return u({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:z,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var $a=I.styles;function ut(e){var n=m.autoReplaceSvg==="nest"?En(e,{styleParser:!1}):En(e);return~n.extra.classes.indexOf(Vn)?R("generateLayersText",e,n):R("generateSvgReplacementMutation",e,n)}var U=new Set;nn.map(function(e){U.add("fa-".concat(e))});Object.keys(re[y]).map(U.add.bind(U));Object.keys(re[x]).map(U.add.bind(U));U=le(U);function Nn(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!D)return Promise.resolve();var t=k.documentElement.classList,a=function(d){return t.add("".concat(hn,"-").concat(d))},r=function(d){return t.remove("".concat(hn,"-").concat(d))},i=m.autoFetchSvg?U:nn.map(function(l){return"fa-".concat(l)}).concat(Object.keys($a));i.includes("fa")||i.push("fa");var o=[".".concat(Vn,":not([").concat(V,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(V,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=J(e.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=ln.begin("onTree"),c=s.reduce(function(l,d){try{var g=ut(d);g&&l.push(g)}catch(b){Xn||b.name==="MissingIcon"&&console.error(b)}return l},[]);return new Promise(function(l,d){Promise.all(c).then(function(g){lt(g,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),f(),l()})}).catch(function(g){f(),d(g)})})}function Ya(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ut(e).then(function(t){t&&lt([t],n)})}function Ba(e){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:He(n||{}),r=t.mask;return r&&(r=(r||{}).icon?r:He(r||{})),e(a,u(u({},t),{},{mask:r}))}}var Ua=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.transform,r=a===void 0?z:a,i=t.symbol,o=i===void 0?!1:i,s=t.mask,f=s===void 0?null:s,c=t.maskId,l=c===void 0?null:c,d=t.title,g=d===void 0?null:d,b=t.titleId,S=b===void 0?null:b,_=t.classes,P=_===void 0?[]:_,v=t.attributes,p=v===void 0?{}:v,h=t.styles,w=h===void 0?{}:h;if(n){var A=n.prefix,T=n.iconName,N=n.icon;return Ne(u({type:"icon"},n),function(){return G("beforeDOMElementCreation",{iconDefinition:n,params:t}),m.autoA11y&&(g?p["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(S||fe()):(p["aria-hidden"]="true",p.focusable="false")),fn({icons:{main:Xe(N),mask:f?Xe(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:T,transform:u(u({},z),r),symbol:o,title:g,maskId:l,titleId:S,extra:{attributes:p,styles:w,classes:P}})})}},Wa={mixout:function(){return{icon:Ba(Ua)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=Nn,t.nodeCallback=Ya,t}}},provides:function(n){n.i2svg=function(t){var a=t.node,r=a===void 0?k:a,i=t.callback,o=i===void 0?function(){}:i;return Nn(r,o)},n.generateSvgReplacementMutation=function(t,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,c=a.symbol,l=a.mask,d=a.maskId,g=a.extra;return new Promise(function(b,S){Promise.all([Ve(r,s),l.iconName?Ve(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var P=Ze(_,2),v=P[0],p=P[1];b([t,fn({icons:{main:v,mask:p},prefix:s,iconName:r,transform:f,symbol:c,maskId:d,title:i,titleId:o,extra:g,watchable:!0})])}).catch(S)})},n.generateAbstractIcon=function(t){var a=t.children,r=t.attributes,i=t.main,o=t.transform,s=t.styles,f=Pe(s);f.length>0&&(r.style=f);var c;return an(o)&&(c=R("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(c||i.icon),{children:a,attributes:r}}}},Ha={mixout:function(){return{layer:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Ne({type:"layer"},function(){G("beforeDOMElementCreation",{assembler:t,params:a});var o=[];return t(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(le(i)).join(" ")},children:o}]})}}}},Xa={mixout:function(){return{counter:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,c=f===void 0?{}:f,l=a.styles,d=l===void 0?{}:l;return Ne({type:"counter",content:t},function(){return G("beforeDOMElementCreation",{content:t,params:a}),Sa({content:t.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(le(s))}})})}}}},Va={mixout:function(){return{text:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?z:r,o=a.title,s=o===void 0?null:o,f=a.classes,c=f===void 0?[]:f,l=a.attributes,d=l===void 0?{}:l,g=a.styles,b=g===void 0?{}:g;return Ne({type:"text",content:t},function(){return G("beforeDOMElementCreation",{content:t,params:a}),On({content:t,transform:u(u({},z),i),title:s,extra:{attributes:d,styles:b,classes:["".concat(m.cssPrefix,"-layers-text")].concat(le(c))}})})}}},provides:function(n){n.generateLayersText=function(t,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(Un){var c=parseInt(getComputedStyle(t).fontSize,10),l=t.getBoundingClientRect();s=l.width/c,f=l.height/c}return m.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,On({content:t.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},Ga=new RegExp('"',"ug"),In=[1105920,1112319];function Ka(e){var n=e.replace(Ga,""),t=fa(n,0),a=t>=In[0]&&t<=In[1],r=n.length===2?n[0]===n[1]:!1;return{value:Be(r?n[0]:n),isSecondary:a||r}}function Tn(e,n){var t="".concat(Rt).concat(n.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(t)!==null)return a();var i=J(e.children),o=i.filter(function(N){return N.getAttribute(Ye)===n})[0],s=Y.getComputedStyle(e,n),f=s.getPropertyValue("font-family").match(Bt),c=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!f)return e.removeChild(o),a();if(f&&l!=="none"&&l!==""){var d=s.getPropertyValue("content"),g=~["Sharp"].indexOf(f[2])?x:y,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?ie[g][f[2].toLowerCase()]:Ut[g][c],S=Ka(d),_=S.value,P=S.isSecondary,v=f[0].startsWith("FontAwesome"),p=on(b,_),h=p;if(v){var w=pa(_);w.iconName&&w.prefix&&(p=w.iconName,b=w.prefix)}if(p&&!P&&(!o||o.getAttribute(Je)!==b||o.getAttribute(en)!==h)){e.setAttribute(t,h),o&&e.removeChild(o);var A=ja(),T=A.extra;T.attributes[Ye]=n,Ve(p,b).then(function(N){var Ie=fn(u(u({},A),{},{icons:{main:N,mask:sn()},prefix:b,iconName:h,extra:T,watchable:!0})),j=k.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?e.insertBefore(j,e.firstChild):e.appendChild(j),j.outerHTML=Ie.map(function(gt){return ue(gt)}).join(`
`),e.removeAttribute(t),a()}).catch(r)}else a()}else a()})}function qa(e){return Promise.all([Tn(e,"::before"),Tn(e,"::after")])}function Za(e){return e.parentNode!==document.head&&!~jt.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ye)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function zn(e){if(D)return new Promise(function(n,t){var a=J(e.querySelectorAll("*")).filter(Za).map(qa),r=ln.begin("searchPseudoElements");ct(),Promise.all(a).then(function(){r(),Ke(),n()}).catch(function(){r(),Ke(),t()})})}var Qa={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=zn,t}}},provides:function(n){n.pseudoElements2svg=function(t){var a=t.node,r=a===void 0?k:a;m.searchPseudoElements&&zn(r)}}},Mn=!1,Ja={mixout:function(){return{dom:{unwatch:function(){ct(),Mn=!0}}}},hooks:function(){return{bootstrap:function(){Cn(We("mutationObserverCallbacks",{}))},noAuto:function(){La()},watch:function(t){var a=t.observeMutationsRoot;Mn?Ke():Cn(We("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Ln=function(n){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},t)},er={mixout:function(){return{parse:{transform:function(t){return Ln(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,a){var r=a.getAttribute("data-fa-transform");return r&&(t.transform=Ln(r)),t}}},provides:function(n){n.generateAbstractTransformGrouping=function(t){var a=t.main,r=t.transform,i=t.containerWidth,o=t.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(f," ").concat(c," ").concat(l)},g={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:d,path:g};return{tag:"g",attributes:u({},b.outer),children:[{tag:"g",attributes:u({},b.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:u(u({},a.icon.attributes),b.path)}]}]}}}},Re={x:0,y:0,width:"100%",height:"100%"};function Fn(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||n)&&(e.attributes.fill="black"),e}function nr(e){return e.tag==="g"?e.children:[e]}var tr={hooks:function(){return{parseNodeAttributes:function(t,a){var r=a.getAttribute("data-fa-mask"),i=r?Ee(r.split(" ").map(function(o){return o.trim()})):sn();return i.prefix||(i.prefix=B()),t.mask=i,t.maskId=a.getAttribute("data-fa-mask-id"),t}}},provides:function(n){n.generateAbstractMask=function(t){var a=t.children,r=t.attributes,i=t.main,o=t.mask,s=t.maskId,f=t.transform,c=i.width,l=i.icon,d=o.width,g=o.icon,b=ea({transform:f,containerWidth:d,iconWidth:c}),S={tag:"rect",attributes:u(u({},Re),{},{fill:"white"})},_=l.children?{children:l.children.map(Fn)}:{},P={tag:"g",attributes:u({},b.inner),children:[Fn(u({tag:l.tag,attributes:u(u({},l.attributes),b.path)},_))]},v={tag:"g",attributes:u({},b.outer),children:[P]},p="mask-".concat(s||fe()),h="clip-".concat(s||fe()),w={tag:"mask",attributes:u(u({},Re),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,v]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:nr(g)},w]};return a.push(A,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(p,")")},Re)}),{children:a,attributes:r}}}},ar={provides:function(n){var t=!1;Y.matchMedia&&(t=Y.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||a.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},rr={hooks:function(){return{parseNodeAttributes:function(t,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return t.symbol=i,t}}}},ir=[aa,Wa,Ha,Xa,Va,Qa,Ja,er,tr,ar,rr];ha(ir,{mixoutsTo:E});E.noAuto;E.config;var or=E.library;E.dom;var qe=E.parse;E.findIconDefinition;E.toHtml;var sr=E.icon;E.layer;E.text;E.counter;function Rn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,a)}return t}function M(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Rn(Object(t),!0).forEach(function(a){C(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Rn(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function _e(e){"@babel/helpers - typeof";return _e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},_e(e)}function C(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function fr(e,n){if(e==null)return{};var t={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(n.indexOf(r)>=0)&&(t[r]=e[r]);return t}function lr(e,n){if(e==null)return{};var t=fr(e,n),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var cr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},mt={exports:{}};(function(e){(function(n){var t=function(v,p,h){if(!c(p)||d(p)||g(p)||b(p)||f(p))return p;var w,A=0,T=0;if(l(p))for(w=[],T=p.length;A<T;A++)w.push(t(v,p[A],h));else{w={};for(var N in p)Object.prototype.hasOwnProperty.call(p,N)&&(w[v(N,h)]=t(v,p[N],h))}return w},a=function(v,p){p=p||{};var h=p.separator||"_",w=p.split||/(?=[A-Z])/;return v.split(w).join(h)},r=function(v){return S(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(p,h){return h?h.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var p=r(v);return p.substr(0,1).toUpperCase()+p.substr(1)},o=function(v,p){return a(v,p).toLowerCase()},s=Object.prototype.toString,f=function(v){return typeof v=="function"},c=function(v){return v===Object(v)},l=function(v){return s.call(v)=="[object Array]"},d=function(v){return s.call(v)=="[object Date]"},g=function(v){return s.call(v)=="[object RegExp]"},b=function(v){return s.call(v)=="[object Boolean]"},S=function(v){return v=v-0,v===v},_=function(v,p){var h=p&&"process"in p?p.process:p;return typeof h!="function"?v:function(w,A){return h(w,v,A)}},P={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(v,p){return t(_(r,p),v)},decamelizeKeys:function(v,p){return t(_(o,p),v,p)},pascalizeKeys:function(v,p){return t(_(i,p),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=P:n.humps=P})(cr)})(mt);var ur=mt.exports,mr=["class","style"];function dr(e){return e.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,t){var a=t.indexOf(":"),r=ur.camelize(t.slice(0,a)),i=t.slice(a+1).trim();return n[r]=i,n},{})}function vr(e){return e.split(/\s+/).reduce(function(n,t){return n[t]=!0,n},{})}function dt(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(f){return dt(f)}),r=Object.keys(e.attributes||{}).reduce(function(f,c){var l=e.attributes[c];switch(c){case"class":f.class=vr(l);break;case"style":f.style=dr(l);break;default:f.attrs[c]=l}return f},{attrs:{},class:{},style:{}});t.class;var i=t.style,o=i===void 0?{}:i,s=lr(t,mr);return yt(e.tag,M(M(M({},n),{},{class:r.class,style:M(M({},r.style),o)},r.attrs),s),a)}var vt=!1;try{vt=!0}catch{}function pr(){if(!vt&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function De(e,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?C({},e,n):{}}function gr(e){var n,t=(n={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},C(n,"fa-".concat(e.size),e.size!==null),C(n,"fa-rotate-".concat(e.rotation),e.rotation!==null),C(n,"fa-pull-".concat(e.pull),e.pull!==null),C(n,"fa-swap-opacity",e.swapOpacity),C(n,"fa-bounce",e.bounce),C(n,"fa-shake",e.shake),C(n,"fa-beat",e.beat),C(n,"fa-fade",e.fade),C(n,"fa-beat-fade",e.beatFade),C(n,"fa-flash",e.flash),C(n,"fa-spin-pulse",e.spinPulse),C(n,"fa-spin-reverse",e.spinReverse),n);return Object.keys(t).map(function(a){return t[a]?a:null}).filter(function(a){return a})}function Dn(e){if(e&&_e(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(qe.icon)return qe.icon(e);if(e===null)return null;if(_e(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var br=bt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(n){return[!0,!1,"horizontal","vertical","both"].indexOf(n)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(n){return["right","left"].indexOf(n)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(n){return[90,180,270].indexOf(Number.parseInt(n,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(n){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(n)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(n,t){var a=t.attrs,r=W(function(){return Dn(n.icon)}),i=W(function(){return De("classes",gr(n))}),o=W(function(){return De("transform",typeof n.transform=="string"?qe.transform(n.transform):n.transform)}),s=W(function(){return De("mask",Dn(n.mask))}),f=W(function(){return sr(r.value,M(M(M(M({},i.value),o.value),s.value),{},{symbol:n.symbol,title:n.title}))});ht(f,function(l){if(!l)return pr("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var c=W(function(){return f.value?dt(f.value.abstract[0],{},a):null});return function(){return c.value}}}),hr={prefix:"fas",iconName:"circle-exclamation",icon:[512,512,["exclamation-circle"],"f06a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},yr={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},kr={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},xr={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},wr={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]},Ar={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Or={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},Sr={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]};or.add(Sr,Ar,xr,hr,yr,kr,Or,wr);const _r="zoa__flash__main",Pr="zoa__flash__container",Cr="zoa__flash__header",Er="zoa__flash__icon",Nr="zoa__flash__headerText",Ir="zoa__flash__content",Tr={main:_r,container:Pr,header:Cr,icon:Er,headerText:Nr,content:Ir,"kind--info":"zoa__flash__kind--info","kind--warning":"zoa__flash__kind--warning","kind--error":"zoa__flash__kind--error","kind--success":"zoa__flash__kind--success"},pt={__name:"Flash",props:{class:{type:[String,Array,null],default:null},kind:{type:String,default:"info"},header:{type:String,default:"Here is an informational message."},message:{type:String,default:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum."}},setup(e){const n=e,{icon:t}=Pt(n),{addPropClasses:a}=_t(n);return(r,i)=>(kt(),xt("div",{class:ee(ze(a)([r.$style.main,r.$style.container,r.$style[`kind--${e.kind}`]]))},[Te("div",{class:ee(r.$style.header)},[wt(ze(br),{icon:["fa-solid",ze(t)],class:ee(r.$style.icon)},null,8,["icon","class"]),Te("h2",{class:ee(r.$style.headerText)},un(e.header),3)],2),Te("div",{class:ee(r.$style.content)},[At(r.$slots,"default",{},()=>[Ot(un(e.message),1)])],2)],2))}},zr={$style:Tr},Fr=St(pt,[["__cssModules",zr]]);pt.__docgenInfo={exportName:"default",displayName:"Flash",description:"",tags:{},props:[{name:"class",description:"Additional class(es) to add to the root element.",type:{name:"string|array|null"},defaultValue:{func:!1,value:"null"}},{name:"kind",description:"The type of message being displayed.",tags:{},values:["info","success","warning","error"],type:{name:"string"},defaultValue:{func:!1,value:"'info'"}},{name:"header",description:"The header for the flash message.",type:{name:"string"},defaultValue:{func:!1,value:"'Here is an informational message.'"}},{name:"message",description:"The body of the flash message. Overridden by the default slot.",type:{name:"string"},defaultValue:{func:!1,value:"'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum.'"}}],slots:[{name:"default",description:"The main content of the flash message; overrides the message prop."}],sourceFiles:["/home/runner/work/zoa/zoa/src/components/dialogs/flash/Flash.vue"]};export{br as F,Fr as Z,Pt as u};
