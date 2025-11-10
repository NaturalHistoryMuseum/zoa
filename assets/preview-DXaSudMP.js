import{e as de,r as pe,s as ce}from"./entry-preview-CjTR8P0R.js";import"./vue.esm-bundler-B4QjTGXh.js";import{Z as ge}from"./ZoaButton-DhoEM5N4.js";import{Z as me}from"./ZoaTabs-QjsEMde2.js";import{Z as be}from"./ZoaToggleButton-Cs0GATk4.js";import{b as he,Z as ye}from"./ZoaModal-CokGILv-.js";import{Z as ve}from"./ZoaFlash-DDlCptjI.js";import"./_plugin-vue_export-helper-_YPhuzn9.js";import"./compid-BcxCROCr.js";import"./iframe-Bn3UxRf9.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-CqkleIqs.js";const Fe=Object.freeze(Object.defineProperty({__proto__:null,ZoaButton:ge,ZoaFlash:ve,ZoaInput:he,ZoaModal:ye,ZoaTabs:me,ZoaToggleButton:be},Symbol.toStringTag,{value:"Module"})),{global:xe}=__STORYBOOK_MODULE_GLOBAL__;__STORYBOOK_MODULE_PREVIEW_API__;var{window:C}=xe;C.STORYBOOK_ENV="vue3";C.PLUGINS_SETUP_FUNCTIONS||(C.PLUGINS_SETUP_FUNCTIONS=new Set);({...de});var G;try{(G=module==null?void 0:module.hot)!=null&&G.decline&&module.hot.decline()}catch{}const we=new RegExp("[A-Z]+(?![a-z])|[A-Z]","g");function Ce(e){return e.replace(we,(t,a)=>(a?"-":"")+t.toLowerCase())}const Se={install(e,t){Object.entries(Fe).forEach(a=>{const r=Ce(a[0]);e.component(r,a[1])})}};var ke=Object.defineProperty,n=(e,t)=>ke(e,"name",{value:t,configurable:!0});function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},h.apply(null,arguments)}n(h,"_extends");function K(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n(K,"_assertThisInitialized");function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,r){return a.__proto__=r,a},y(e,t)}n(y,"_setPrototypeOf");function V(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,y(e,t)}n(V,"_inheritsLoose");function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(e)}n(P,"_getPrototypeOf");function J(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch{return typeof e=="function"}}n(J,"_isNativeFunction");function H(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(H=n(function(){return!!e},"_isNativeReflectConstruct"))()}n(H,"_isNativeReflectConstruct");function Q(e,t,a){if(H())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,t);var o=new(e.bind.apply(e,r));return a&&y(o,a.prototype),o}n(Q,"_construct");function B(e){var t=typeof Map=="function"?new Map:void 0;return B=n(function(a){if(a===null||!J(a))return a;if(typeof a!="function")throw new TypeError("Super expression must either be null or a function");if(t!==void 0){if(t.has(a))return t.get(a);t.set(a,r)}function r(){return Q(a,arguments,P(this).constructor)}return n(r,"Wrapper"),r.prototype=Object.create(a.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),y(r,a)},"_wrapNativeSuper"),B(e)}n(B,"_wrapNativeSuper");var Pe={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,2:`Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,3:`Passed an incorrect argument to a color function, please pass a string representation of a color.

`,4:`Couldn't generate valid rgb string from %s, it returned %s.

`,5:`Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,6:`Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,7:`Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,8:`Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,9:`Please provide a number of steps to the modularScale helper.

`,10:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,11:`Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,12:`Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,13:`Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,14:`Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,15:`Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,16:`You must provide a template to this method.

`,17:`You passed an unsupported selector state to this method.

`,18:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,19:`fromSize and toSize must be provided as stringified numbers with the same units.

`,20:`expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:`fontFace expects a name of a font-family.

`,24:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,25:`fontFace expects localFonts to be an array.

`,26:`fontFace expects fileFormats to be an array.

`,27:`radialGradient requries at least 2 color-stops to properly render.

`,28:`Please supply a filename to retinaImage() as the first argument.

`,29:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,32:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,33:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,34:`borderRadius expects a radius value as a string or number as the second argument.

`,35:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,36:`Property must be a string value.

`,37:`Syntax Error at %s.

`,38:`Formula contains a function that needs parentheses at %s.

`,39:`Formula is missing closing parenthesis at %s.

`,40:`Formula has too many closing parentheses at %s.

`,41:`All values in a formula must have the same unit or be unitless.

`,42:`Please provide a number of steps to the modularScale helper.

`,43:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,44:`Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,45:`Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,46:`Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,47:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,48:`fromSize and toSize must be provided as stringified numbers with the same units.

`,49:`Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,50:`Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,51:`Expects the first argument object to have the properties prop, fromSize, and toSize.

`,52:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,53:`fontFace expects localFonts to be an array.

`,54:`fontFace expects fileFormats to be an array.

`,55:`fontFace expects a name of a font-family.

`,56:`linearGradient requries at least 2 color-stops to properly render.

`,57:`radialGradient requries at least 2 color-stops to properly render.

`,58:`Please supply a filename to retinaImage() as the first argument.

`,59:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:`Property must be a string value.

`,62:`borderRadius expects a radius value as a string or number as the second argument.

`,63:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,64:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,65:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,66:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,67:`You must provide a template to this method.

`,68:`You passed an unsupported selector state to this method.

`,69:`Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,70:`Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,71:`Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,72:`Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,73:`Please provide a valid CSS variable.

`,74:`CSS variable not found and no default was provided.

`,75:`important requires a valid style object, got a %s instead.

`,76:`fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,77:`remToPx expects a value in "rem" but you provided it in "%s".

`,78:`base must be set in "px" or "%" but you set it in "%s".
`};function X(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var r=t[0],o=[],s;for(s=1;s<t.length;s+=1)o.push(t[s]);return o.forEach(function(l){r=r.replace(/%[a-z]/,l)}),r}n(X,"format");var p=function(e){V(t,e);function t(a){for(var r,o=arguments.length,s=new Array(o>1?o-1:0),l=1;l<o;l++)s[l-1]=arguments[l];return r=e.call(this,X.apply(void 0,[Pe[a]].concat(s)))||this,K(r)}return n(t,"PolishedError"),t}(B(Error));function S(e){return Math.round(e*255)}n(S,"colorToInt");function W(e,t,a){return S(e)+","+S(t)+","+S(a)}n(W,"convertToInt");function v(e,t,a,r){if(r===void 0&&(r=W),t===0)return r(a,a,a);var o=(e%360+360)%360/60,s=(1-Math.abs(2*a-1))*t,l=s*(1-Math.abs(o%2-1)),u=0,f=0,d=0;o>=0&&o<1?(u=s,f=l):o>=1&&o<2?(u=l,f=s):o>=2&&o<3?(f=s,d=l):o>=3&&o<4?(f=l,d=s):o>=4&&o<5?(u=l,d=s):o>=5&&o<6&&(u=s,d=l);var m=a-s/2,b=u+m,c=f+m,E=d+m;return r(b,c,E)}n(v,"hslToRgb");var L={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function ee(e){if(typeof e!="string")return e;var t=e.toLowerCase();return L[t]?"#"+L[t]:e}n(ee,"nameToHex");var Be=/^#[a-fA-F0-9]{6}$/,Te=/^#[a-fA-F0-9]{8}$/,Ie=/^#[a-fA-F0-9]{3}$/,_e=/^#[a-fA-F0-9]{4}$/,R=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,Oe=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,je=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,Ee=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function _(e){if(typeof e!="string")throw new p(3);var t=ee(e);if(t.match(Be))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(Te)){var a=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:a}}if(t.match(Ie))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(_e)){var r=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:r}}var o=R.exec(t);if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10)};var s=Oe.exec(t.substring(0,50));if(s)return{red:parseInt(""+s[1],10),green:parseInt(""+s[2],10),blue:parseInt(""+s[3],10),alpha:parseFloat(""+s[4])>1?parseFloat(""+s[4])/100:parseFloat(""+s[4])};var l=je.exec(t);if(l){var u=parseInt(""+l[1],10),f=parseInt(""+l[2],10)/100,d=parseInt(""+l[3],10)/100,m="rgb("+v(u,f,d)+")",b=R.exec(m);if(!b)throw new p(4,t,m);return{red:parseInt(""+b[1],10),green:parseInt(""+b[2],10),blue:parseInt(""+b[3],10)}}var c=Ee.exec(t.substring(0,50));if(c){var E=parseInt(""+c[1],10),ue=parseInt(""+c[2],10)/100,fe=parseInt(""+c[3],10)/100,q="rgb("+v(E,ue,fe)+")",w=R.exec(q);if(!w)throw new p(4,t,q);return{red:parseInt(""+w[1],10),green:parseInt(""+w[2],10),blue:parseInt(""+w[3],10),alpha:parseFloat(""+c[4])>1?parseFloat(""+c[4])/100:parseFloat(""+c[4])}}throw new p(5)}n(_,"parseToRgb");function te(e){var t=e.red/255,a=e.green/255,r=e.blue/255,o=Math.max(t,a,r),s=Math.min(t,a,r),l=(o+s)/2;if(o===s)return e.alpha!==void 0?{hue:0,saturation:0,lightness:l,alpha:e.alpha}:{hue:0,saturation:0,lightness:l};var u,f=o-s,d=l>.5?f/(2-o-s):f/(o+s);switch(o){case t:u=(a-r)/f+(a<r?6:0);break;case a:u=(r-t)/f+2;break;default:u=(t-a)/f+4;break}return u*=60,e.alpha!==void 0?{hue:u,saturation:d,lightness:l,alpha:e.alpha}:{hue:u,saturation:d,lightness:l}}n(te,"rgbToHsl");function N(e){return te(_(e))}n(N,"parseToHsl");var Re=n(function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},"reduceHexValue"),D=Re;function g(e){var t=e.toString(16);return t.length===1?"0"+t:t}n(g,"numberToHex");function k(e){return g(Math.round(e*255))}n(k,"colorToHex");function ae(e,t,a){return D("#"+k(e)+k(t)+k(a))}n(ae,"convertToHex");function F(e,t,a){return v(e,t,a,ae)}n(F,"hslToHex");function re(e,t,a){if(typeof e=="number"&&typeof t=="number"&&typeof a=="number")return F(e,t,a);if(typeof e=="object"&&t===void 0&&a===void 0)return F(e.hue,e.saturation,e.lightness);throw new p(1)}n(re,"hsl");function ne(e,t,a,r){if(typeof e=="number"&&typeof t=="number"&&typeof a=="number"&&typeof r=="number")return r>=1?F(e,t,a):"rgba("+v(e,t,a)+","+r+")";if(typeof e=="object"&&t===void 0&&a===void 0&&r===void 0)return e.alpha>=1?F(e.hue,e.saturation,e.lightness):"rgba("+v(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new p(2)}n(ne,"hsla");function T(e,t,a){if(typeof e=="number"&&typeof t=="number"&&typeof a=="number")return D("#"+g(e)+g(t)+g(a));if(typeof e=="object"&&t===void 0&&a===void 0)return D("#"+g(e.red)+g(e.green)+g(e.blue));throw new p(6)}n(T,"rgb");function x(e,t,a,r){if(typeof e=="string"&&typeof t=="number"){var o=_(e);return"rgba("+o.red+","+o.green+","+o.blue+","+t+")"}else{if(typeof e=="number"&&typeof t=="number"&&typeof a=="number"&&typeof r=="number")return r>=1?T(e,t,a):"rgba("+e+","+t+","+a+","+r+")";if(typeof e=="object"&&t===void 0&&a===void 0&&r===void 0)return e.alpha>=1?T(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new p(7)}n(x,"rgba");var ze=n(function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},"isRgb"),Me=n(function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},"isRgba"),Ae=n(function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},"isHsl"),De=n(function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"},"isHsla");function Z(e){if(typeof e!="object")throw new p(8);if(Me(e))return x(e);if(ze(e))return T(e);if(De(e))return ne(e);if(Ae(e))return re(e);throw new p(8)}n(Z,"toColorString");function $(e,t,a){return n(function(){var r=a.concat(Array.prototype.slice.call(arguments));return r.length>=t?e.apply(this,r):$(e,t,r)},"fn")}n($,"curried");function O(e){return $(e,e.length,[])}n(O,"curry");function j(e,t,a){return Math.max(e,Math.min(t,a))}n(j,"guard");function oe(e,t){if(t==="transparent")return t;var a=N(t);return Z(h({},a,{lightness:j(0,1,a.lightness-parseFloat(e))}))}n(oe,"darken");var He=O(oe),Ne=He;function se(e,t){if(t==="transparent")return t;var a=N(t);return Z(h({},a,{lightness:j(0,1,a.lightness+parseFloat(e))}))}n(se,"lighten");var Ze=O(se),$e=Ze;function ie(e,t){if(t==="transparent")return t;var a=_(t),r=typeof a.alpha=="number"?a.alpha:1,o=h({},a,{alpha:j(0,1,+(r*100-parseFloat(e)*100).toFixed(2)/100)});return x(o)}n(ie,"transparentize");var qe=O(ie),Le=qe,i={primary:"#FF4785",secondary:"#029CFD",tertiary:"#FAFBFC",ancillary:"#22a699",orange:"#FC521F",gold:"#FFAE00",green:"#66BF3C",seafoam:"#37D5D3",purple:"#6F2CAC",ultraviolet:"#2A0481",lightest:"#FFFFFF",lighter:"#F7FAFC",light:"#EEF3F6",mediumlight:"#ECF4F9",medium:"#D9E8F2",mediumdark:"#73828C",dark:"#5C6870",darker:"#454E54",darkest:"#2E3438",border:"hsla(203, 50%, 30%, 0.15)",positive:"#66BF3C",negative:"#FF4400",warning:"#E69D00",critical:"#FFFFFF",defaultText:"#2E3438",inverseText:"#FFFFFF",positiveText:"#448028",negativeText:"#D43900",warningText:"#A15C20"},U={app:"#F6F9FC",bar:i.lightest,content:i.lightest,preview:i.lightest,gridCellSize:10,hoverable:Le(.9,i.secondary),positive:"#E1FFD4",negative:"#FEDED2",warning:"#FFF5CF",critical:"#FF4400"},I={fonts:{base:['"Nunito Sans"',"-apple-system",'".SFNSText-Regular"','"San Francisco"',"BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Helvetica","Arial","sans-serif"].join(", "),mono:["ui-monospace","Menlo","Monaco",'"Roboto Mono"','"Oxygen Mono"','"Ubuntu Monospace"','"Source Code Pro"','"Droid Sans Mono"','"Courier New"',"monospace"].join(", ")},weight:{regular:400,bold:700},size:{s1:12,s2:14,s3:16,m1:20,m2:24,m3:28,l1:32,l2:40,l3:48,code:90}},Ue={base:"dark",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:"#222425",appContentBg:"#1B1C1D",appPreviewBg:i.lightest,appBorderColor:"rgba(255,255,255,.1)",appBorderRadius:4,fontBase:I.fonts.base,fontCode:I.fonts.mono,textColor:"#C9CDCF",textInverseColor:"#222425",textMutedColor:"#798186",barTextColor:i.mediumdark,barHoverColor:i.secondary,barSelectedColor:i.secondary,barBg:"#292C2E",buttonBg:"#222425",buttonBorder:"rgba(255,255,255,.1)",booleanBg:"#222425",booleanSelectedBg:"#2E3438",inputBg:"#1B1C1D",inputBorder:"rgba(255,255,255,.1)",inputTextColor:i.lightest,inputBorderRadius:4},Ye=Ue,Ge={base:"light",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:U.app,appContentBg:i.lightest,appPreviewBg:i.lightest,appBorderColor:i.border,appBorderRadius:4,fontBase:I.fonts.base,fontCode:I.fonts.mono,textColor:i.darkest,textInverseColor:i.lightest,textMutedColor:i.dark,barTextColor:i.mediumdark,barHoverColor:i.secondary,barSelectedColor:i.secondary,barBg:i.lightest,buttonBg:U.app,buttonBorder:i.medium,booleanBg:i.mediumlight,booleanSelectedBg:i.lightest,inputBg:i.lightest,inputBorder:i.border,inputTextColor:i.darkest,inputBorderRadius:4},Y=Ge,Ke=(()=>{let e;return typeof window<"u"?e=window:typeof globalThis<"u"?e=globalThis:typeof global<"u"?e=global:typeof self<"u"?e=self:e={},e})();const{logger:Ve}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var{window:z}=Ke,Je=n(e=>typeof e!="string"?(Ve.warn(`Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`),!1):!0,"isColorString"),Qe=n(e=>!/(gradient|var|calc)/.test(e),"isValidColorForPolished"),Xe=n((e,t)=>e==="darken"?x(`${Ne(1,t)}`,.95):e==="lighten"?x(`${$e(1,t)}`,.95):t,"applyPolished"),le=n(e=>t=>{if(!Je(t)||!Qe(t))return t;try{return Xe(e,t)}catch{return t}},"colorFactory");le("lighten");le("darken");var We=n(()=>!z||!z.matchMedia?"light":z.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light","getPreferredColorScheme"),M={light:Y,dark:Ye,normal:Y},A=We(),et=n((e={base:A},t)=>{let a={...M[A],...M[e.base]||{},...e,base:M[e.base]?e.base:A};return{...t,...a,barSelectedColor:e.barSelectedColor||a.colorSecondary}},"create");const tt=et({base:"light",fontBase:'"Source Sans 3", sans-serif',fontCode:"monospace",brandTitle:"Zoa",brandUrl:"https://github.com/NaturalHistoryMuseum/zoa",brandImage:"https://data.nhm.ac.uk/images/nhm_logo_black.svg",brandTarget:"_blank",colorPrimary:"#188100",colorSecondary:"#188100",appBg:"#f2f2f2",appContentBg:"#ffffff",appBorderColor:"#dddddd",appBorderRadius:4,textColor:"#343434",textInverseColor:"#ffffff",barTextColor:"#343434",barSelectedColor:"#188100",barBg:"#f2f2f2",inputBg:"#ffffff",inputBorder:"#dddddd",inputTextColor:"#343434",inputBorderRadius:2});ce(e=>{e.use(Se)});const gt={controls:{expanded:!0},docs:{theme:tt},backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"},{name:"colour",value:"#188100"},{name:"dark",value:"#343434"}]}};export{gt as parameters};
