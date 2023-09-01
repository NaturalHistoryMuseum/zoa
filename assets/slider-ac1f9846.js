function d(t,n){return(t-n.min)/(n.max-n.min)}function m(t,n,c){try{const e=t.clientWidth,l=20,s=2,o=c?c.clientWidth:0,a=e/2,i=(n*e-a)/a*(l/2)-s,f=i+o/2,h=i/e;return{handle:(n-h)*100,label:(n-f/e)*100}}catch{const e=n*100;return{handle:e,label:e}}}function O(t){return t.placeholder||(t.max-t.min)/2-(t.max-t.min)/2%t.step}export{d as a,m as b,O as g};
//# sourceMappingURL=slider-ac1f9846.js.map
