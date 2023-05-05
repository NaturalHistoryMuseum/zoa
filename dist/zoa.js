import { allElements as n } from "./zoa-wc.js";
import "./Textbox.ce-af5e5fd4.js";
const i = new RegExp("([^/.]+)(?=.ce)"), d = new RegExp("[A-Z]+(?![a-z])|[A-Z]", "g"), b = "zoa";
function l(a) {
  let o;
  try {
    o = i.exec(a)[0];
  } catch {
    return;
  }
  let t = o.replace(
    d,
    (e, r) => (r ? "-" : "") + e.toLowerCase()
  );
  return [b, t].join("-");
}
function c(a) {
  a = a || n, a.forEach((o) => {
    const t = l(o.def.__name);
    t === null && console.error(`${o.def.__name} could not be registered.`), customElements.define(t, o);
  });
}
export {
  c as registerZoa
};
