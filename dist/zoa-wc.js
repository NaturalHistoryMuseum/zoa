import { d as L, n as B, c as u, t as S, h as f, b as M, e as g, B as D, i as d, f as I, g as j, j as H, k as Z, l as _, m as z, o as F, p as O, q as W, Z as q, a as $ } from "./Textbox.ce-af5e5fd4.js";
const K = "http://www.w3.org/2000/svg", a = typeof document < "u" ? document : null, P = a && /* @__PURE__ */ a.createElement("template"), U = {
  insert: (s, t, e) => {
    t.insertBefore(s, e || null);
  },
  remove: (s) => {
    const t = s.parentNode;
    t && t.removeChild(s);
  },
  createElement: (s, t, e, i) => {
    const n = t ? a.createElementNS(K, s) : a.createElement(s, e ? { is: e } : void 0);
    return s === "select" && i && i.multiple != null && n.setAttribute("multiple", i.multiple), n;
  },
  createText: (s) => a.createTextNode(s),
  createComment: (s) => a.createComment(s),
  setText: (s, t) => {
    s.nodeValue = t;
  },
  setElementText: (s, t) => {
    s.textContent = t;
  },
  parentNode: (s) => s.parentNode,
  nextSibling: (s) => s.nextSibling,
  querySelector: (s) => a.querySelector(s),
  setScopeId(s, t) {
    s.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(s, t, e, i, n, o) {
    const c = e ? e.previousSibling : t.lastChild;
    if (n && (n === o || n.nextSibling))
      for (; t.insertBefore(n.cloneNode(!0), e), !(n === o || !(n = n.nextSibling)); )
        ;
    else {
      P.innerHTML = i ? `<svg>${s}</svg>` : s;
      const l = P.content;
      if (i) {
        const r = l.firstChild;
        for (; r.firstChild; )
          l.appendChild(r.firstChild);
        l.removeChild(r);
      }
      t.insertBefore(l, e);
    }
    return [
      // first
      c ? c.nextSibling : t.firstChild,
      // last
      e ? e.previousSibling : t.lastChild
    ];
  }
};
function X(s, t, e) {
  const i = s._vtc;
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? s.removeAttribute("class") : e ? s.setAttribute("class", t) : s.className = t;
}
function J(s, t, e) {
  const i = s.style, n = _(e);
  if (e && !n) {
    if (t && !_(t))
      for (const o in t)
        e[o] == null && b(i, o, "");
    for (const o in e)
      b(i, o, e[o]);
  } else {
    const o = i.display;
    n ? t !== e && (i.cssText = e) : t && s.removeAttribute("style"), "_vod" in s && (i.display = o);
  }
}
const A = /\s*!important$/;
function b(s, t, e) {
  if (d(e))
    e.forEach((i) => b(s, t, i));
  else if (e == null && (e = ""), t.startsWith("--"))
    s.setProperty(t, e);
  else {
    const i = Q(s, t);
    A.test(e) ? s.setProperty(f(i), e.replace(A, ""), "important") : s[i] = e;
  }
}
const E = ["Webkit", "Moz", "ms"], h = {};
function Q(s, t) {
  const e = h[t];
  if (e)
    return e;
  let i = u(t);
  if (i !== "filter" && i in s)
    return h[t] = i;
  i = z(i);
  for (let n = 0; n < E.length; n++) {
    const o = E[n] + i;
    if (o in s)
      return h[t] = o;
  }
  return t;
}
const v = "http://www.w3.org/1999/xlink";
function Y(s, t, e, i, n) {
  if (i && t.startsWith("xlink:"))
    e == null ? s.removeAttributeNS(v, t.slice(6, t.length)) : s.setAttributeNS(v, t, e);
  else {
    const o = F(t);
    e == null || o && !O(e) ? s.removeAttribute(t) : s.setAttribute(t, o ? "" : e);
  }
}
function G(s, t, e, i, n, o, c) {
  if (t === "innerHTML" || t === "textContent") {
    i && c(i, n, o), s[t] = e ?? "";
    return;
  }
  if (t === "value" && s.tagName !== "PROGRESS" && // custom elements may use _value internally
  !s.tagName.includes("-")) {
    s._value = e;
    const r = e ?? "";
    (s.value !== r || // #4956: always set for OPTION elements because its value falls back to
    // textContent if no value attribute is present. And setting .value for
    // OPTION has no side effect
    s.tagName === "OPTION") && (s.value = r), e == null && s.removeAttribute(t);
    return;
  }
  let l = !1;
  if (e === "" || e == null) {
    const r = typeof s[t];
    r === "boolean" ? e = O(e) : e == null && r === "string" ? (e = "", l = !0) : r === "number" && (e = 0, l = !0);
  }
  try {
    s[t] = e;
  } catch {
  }
  l && s.removeAttribute(t);
}
function V(s, t, e, i) {
  s.addEventListener(t, e, i);
}
function y(s, t, e, i) {
  s.removeEventListener(t, e, i);
}
function k(s, t, e, i, n = null) {
  const o = s._vei || (s._vei = {}), c = o[t];
  if (i && c)
    c.value = i;
  else {
    const [l, r] = tt(t);
    if (i) {
      const p = o[t] = it(i, n);
      V(s, l, p, r);
    } else
      c && (y(s, l, c, r), o[t] = void 0);
  }
}
const N = /(?:Once|Passive|Capture)$/;
function tt(s) {
  let t;
  if (N.test(s)) {
    t = {};
    let i;
    for (; i = s.match(N); )
      s = s.slice(0, s.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [s[2] === ":" ? s.slice(3) : f(s.slice(2)), t];
}
let m = 0;
const et = /* @__PURE__ */ Promise.resolve(), st = () => m || (et.then(() => m = 0), m = Date.now());
function it(s, t) {
  const e = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= e.attached)
      return;
    W(nt(i, e.value), t, 5, [i]);
  };
  return e.value = s, e.attached = st(), e;
}
function nt(s, t) {
  if (d(t)) {
    const e = s.stopImmediatePropagation;
    return s.stopImmediatePropagation = () => {
      e.call(s), s._stopped = !0;
    }, t.map((i) => (n) => !n._stopped && i && i(n));
  } else
    return t;
}
const T = /^on[a-z]/, ot = (s, t, e, i, n = !1, o, c, l, r) => {
  t === "class" ? X(s, i, n) : t === "style" ? J(s, e, i) : j(t) ? H(t) || k(s, t, e, i, c) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : rt(s, t, i, n)) ? G(s, t, i, o, c, l, r) : (t === "true-value" ? s._trueValue = i : t === "false-value" && (s._falseValue = i), Y(s, t, i, n));
};
function rt(s, t, e, i) {
  return i ? !!(t === "innerHTML" || t === "textContent" || t in s && T.test(t) && Z(e)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && s.tagName === "INPUT" || t === "type" && s.tagName === "TEXTAREA" || T.test(t) && _(e) ? !1 : t in s;
}
function R(s, t) {
  const e = L(s);
  class i extends C {
    constructor(o) {
      super(e, o, t);
    }
  }
  return i.def = e, i;
}
const ct = typeof HTMLElement < "u" ? HTMLElement : class {
};
class C extends ct {
  constructor(t, e = {}, i) {
    super(), this._def = t, this._props = e, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && i ? i(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, B(() => {
      this._connected || (x(null, this.shadowRoot), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let i = 0; i < this.attributes.length; i++)
      this._setAttr(this.attributes[i].name);
    new MutationObserver((i) => {
      for (const n of i)
        this._setAttr(n.attributeName);
    }).observe(this, { attributes: !0 });
    const t = (i, n = !1) => {
      const { props: o, styles: c } = i;
      let l;
      if (o && !d(o))
        for (const r in o) {
          const p = o[r];
          (p === Number || p && p.type === Number) && (r in this._props && (this._props[r] = S(this._props[r])), (l || (l = /* @__PURE__ */ Object.create(null)))[u(r)] = !0);
        }
      this._numberProps = l, n && this._resolveProps(i), this._applyStyles(c), this._update();
    }, e = this._def.__asyncLoader;
    e ? e().then((i) => t(i, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: e } = t, i = d(e) ? e : Object.keys(e || {});
    for (const n of Object.keys(this))
      n[0] !== "_" && i.includes(n) && this._setProp(n, this[n], !0, !1);
    for (const n of i.map(u))
      Object.defineProperty(this, n, {
        get() {
          return this._getProp(n);
        },
        set(o) {
          this._setProp(n, o);
        }
      });
  }
  _setAttr(t) {
    let e = this.getAttribute(t);
    const i = u(t);
    this._numberProps && this._numberProps[i] && (e = S(e)), this._setProp(i, e, !1);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, e, i = !0, n = !0) {
    e !== this._props[t] && (this._props[t] = e, n && this._instance && this._update(), i && (e === !0 ? this.setAttribute(f(t), "") : typeof e == "string" || typeof e == "number" ? this.setAttribute(f(t), e + "") : e || this.removeAttribute(f(t))));
  }
  _update() {
    x(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = M(this._def, g({}, this._props));
    return this._instance || (t.ce = (e) => {
      this._instance = e, e.isCE = !0;
      const i = (o, c) => {
        this.dispatchEvent(new CustomEvent(o, {
          detail: c
        }));
      };
      e.emit = (o, ...c) => {
        i(o, c), f(o) !== o && i(f(o), c);
      };
      let n = this;
      for (; n = n && (n.parentNode || n.host); )
        if (n instanceof C) {
          e.parent = n._instance, e.provides = n._instance.provides;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((e) => {
      const i = document.createElement("style");
      i.textContent = e, this.shadowRoot.appendChild(i);
    });
  }
}
const lt = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
D.props;
const ft = /* @__PURE__ */ g({ patchProp: ot }, U);
let w;
function at() {
  return w || (w = I(ft));
}
const x = (...s) => {
  at().render(...s);
}, pt = R(q), ut = R($), ht = [pt, ut];
export {
  pt as ZoaButton,
  ut as ZoaTextbox,
  ht as allElements
};
