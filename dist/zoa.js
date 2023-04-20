import { allElements as r } from "./zoa-elements.js";
const c = new RegExp("([^/.]+)(?=.ce)"), m = new RegExp("[A-Z]+(?![a-z])|[A-Z]", "g"), l = "zoa";
function s(n) {
  let e;
  try {
    e = c.exec(n)[0];
  } catch {
    return;
  }
  let o = e.replace(
    m,
    (t, a) => (a ? "-" : "") + t.toLowerCase()
  );
  return [l, o].join("-");
}
function g(n) {
  n = n || r, n.forEach((e) => {
    const o = s(e.def.__name);
    o === null && console.error(`${e.def.__name} could not be registered.`), customElements.define(o, e);
  });
}
export {
  g as registerZoa
};
