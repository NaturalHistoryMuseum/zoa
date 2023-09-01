import { openBlock as $, createElementBlock as w, normalizeClass as d, renderSlot as Ne, createTextVNode as ee, toDisplayString as O, ref as E, computed as S, unref as m, createCommentVNode as L, withDirectives as Z, createElementVNode as y, isRef as te, vModelText as q, watch as K, customRef as mt, getCurrentScope as _t, onScopeDispose as pt, Fragment as X, renderList as Q, defineComponent as Ie, h as Ke, vModelSelect as yt, createVNode as G, createBlock as he, withCtx as ve, normalizeStyle as de, mergeProps as bt } from "vue";
import { parse as me, icon as gt, config as We, text as ht, library as vt } from "@fortawesome/fontawesome-svg-core";
import { fas as Tt } from "@fortawesome/free-solid-svg-icons";
const $t = "zoa__7U7z2__main", St = {
  main: $t,
  "kind--normal": "zoa__wSMFS__kind--normal",
  "kind--primary": "zoa__MVt5D__kind--primary",
  "size--sm": "zoa__Fg-Hw__size--sm",
  "size--md": "zoa__We5yW__size--md"
}, U = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, o] of t)
    n[a] = o;
  return n;
}, At = {
  __name: "Button",
  props: {
    label: {
      type: String,
      default: "Button"
    },
    kind: {
      type: String,
      default: "normal"
    },
    size: {
      type: String,
      default: "md"
    }
  },
  setup(e) {
    return (t, n) => ($(), w("button", {
      class: d([t.$style.main, t.$style[`kind--${e.kind}`], t.$style[`size--${e.size}`]])
    }, [
      Ne(t.$slots, "default", {}, () => [
        ee(O(e.label), 1)
      ])
    ], 2));
  }
}, wt = {
  $style: St
}, ae = /* @__PURE__ */ U(At, [["__cssModules", wt]]);
let Dt = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
function Y() {
  const e = E(Dt(6));
  function t(n) {
    return `${e.value}__${n}`;
  }
  return { componentId: e, subId: t };
}
const { now: Re } = Date, Ze = (e, t = 1, n) => {
  t = Math.max(1, t);
  const a = (n == null ? void 0 : n.leading) ?? !1, o = (n == null ? void 0 : n.trailing) ?? !0, r = Math.max((n == null ? void 0 : n.maxWait) ?? 1 / 0, t);
  let l, s, i = 0, u = 0;
  const f = () => {
    const v = Re(), M = v - i, x = v - u, I = M >= t || x >= r;
    return [v, I];
  }, b = (v) => {
    if (u = v, !l)
      return;
    const M = l;
    l = void 0, e.apply(void 0, M);
  }, g = () => {
    p(0);
  }, A = () => {
    s && (g(), b(Re()));
  }, C = (v) => {
    if (u = v, a)
      return b(v);
  }, T = (v) => {
    if (o && l)
      return b(v);
    l = void 0;
  }, k = () => {
    s = void 0;
    const [v, M] = f();
    return M ? T(v) : c(v);
  }, c = (v) => {
    const M = v - i, x = v - u, I = t - M, ge = r - x, B = Math.min(I, ge);
    return p(B);
  }, p = (v) => {
    s && clearTimeout(s), !(v <= 0) && (s = setTimeout(k, v));
  }, h = (...v) => {
    const [M, x] = f(), I = !!s;
    if (l = v, i = M, (x || !s) && p(t), x)
      return I ? b(M) : C(M);
  };
  return h.cancel = g, h.flush = A, h;
};
function V(e, t) {
  let n;
  try {
    n = parseInt(t.delay) || 0;
  } catch {
    n = 0;
  }
  const a = E(null);
  function o(i) {
    e("change", i);
  }
  const r = Ze(o, n);
  function l(i) {
    e("update:modelValue", i), a.value = i, r(i);
  }
  const s = S({
    get() {
      return t.modelValue === void 0 ? a.value : t.modelValue;
    },
    set(i) {
      l(i);
    }
  });
  return { emitChange: r, valueChanged: l, value: s };
}
const Et = "zoa__qbf-G__input", Ot = "zoa__SIpST__label", Ct = "zoa__wOUkj__grid", Mt = {
  input: Et,
  label: Ot,
  "label--right": "zoa__2sgZ2__label--right",
  "label--below": "zoa__FvTDX__label--below",
  "label--above": "zoa__CxNSj__label--above",
  grid: Ct,
  "grid--above": "zoa__tVRUr__grid--above",
  "grid--below": "zoa__pLLs-__grid--below",
  "grid--left": "zoa__0xief__grid--left",
  "grid--right": "zoa__GFcsT__grid--right"
}, zt = ["id"], kt = ["for"], Nt = ["placeholder", "id"], It = {
  __name: "Textbox",
  props: {
    modelValue: {},
    labelPosition: {
      type: String,
      default: "above"
    },
    label: {
      type: String,
      default: "Text"
    },
    placeholder: {
      type: String,
      default: null
    },
    delay: {
      type: Number,
      default: 200
    }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { componentId: a, subId: o } = Y(), { value: r } = V(t, n);
    return (l, s) => ($(), w("div", {
      class: d([l.$style.grid, l.$style[`grid--${e.labelPosition}`]]),
      id: m(a)
    }, [
      e.label && e.labelPosition !== "none" ? ($(), w("label", {
        key: 0,
        for: m(o)("textbox"),
        class: d([l.$style.label, l.$style[`label--${e.labelPosition}`]])
      }, O(e.label), 11, kt)) : L("", !0),
      Z(y("input", {
        type: "text",
        placeholder: e.placeholder,
        id: m(o)("textbox"),
        class: d(l.$style.input),
        "onUpdate:modelValue": s[0] || (s[0] = (i) => te(r) ? r.value = i : null)
      }, null, 10, Nt), [
        [q, m(r)]
      ])
    ], 10, zt));
  }
}, Pt = {
  $style: Mt
}, Lt = /* @__PURE__ */ U(It, [["__cssModules", Pt]]);
function Ut(e, t) {
  let n, a, o;
  const r = E(!0), l = () => {
    r.value = !0, o();
  };
  K(e, l, { flush: "sync" });
  const s = typeof t == "function" ? t : t.get, i = typeof t == "function" ? void 0 : t.set, u = mt((f, b) => (a = f, o = b, {
    get() {
      return r.value && (n = s(), r.value = !1), a(), n;
    },
    set(g) {
      i == null || i(g);
    }
  }));
  return Object.isExtensible(u) && (u.trigger = l), u;
}
function xt(e) {
  return _t() ? (pt(e), !0) : !1;
}
function Pe(e) {
  return typeof e == "function" ? e() : m(e);
}
const Xe = typeof window < "u" && typeof document < "u", Rt = Object.prototype.toString, Ft = (e) => Rt.call(e) === "[object Object]", we = () => {
}, Ht = /* @__PURE__ */ jt();
function jt() {
  var e;
  return Xe && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function J(e) {
  var t;
  const n = Pe(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const pe = Xe ? window : void 0;
function W(...e) {
  let t, n, a, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, a, o] = e, t = pe) : [t, n, a, o] = e, !t)
    return we;
  Array.isArray(n) || (n = [n]), Array.isArray(a) || (a = [a]);
  const r = [], l = () => {
    r.forEach((f) => f()), r.length = 0;
  }, s = (f, b, g, A) => (f.addEventListener(b, g, A), () => f.removeEventListener(b, g, A)), i = K(
    () => [J(t), Pe(o)],
    ([f, b]) => {
      if (l(), !f)
        return;
      const g = Ft(b) ? { ...b } : b;
      r.push(
        ...n.flatMap((A) => a.map((C) => s(f, A, C, g)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    i(), l();
  };
  return xt(u), u;
}
let Fe = !1;
function Je(e, t, n = {}) {
  const { window: a = pe, ignore: o = [], capture: r = !0, detectIframe: l = !1 } = n;
  if (!a)
    return;
  Ht && !Fe && (Fe = !0, Array.from(a.document.body.children).forEach((g) => g.addEventListener("click", we)), a.document.documentElement.addEventListener("click", we));
  let s = !0;
  const i = (g) => o.some((A) => {
    if (typeof A == "string")
      return Array.from(a.document.querySelectorAll(A)).some((C) => C === g.target || g.composedPath().includes(C));
    {
      const C = J(A);
      return C && (g.target === C || g.composedPath().includes(C));
    }
  }), f = [
    W(a, "click", (g) => {
      const A = J(e);
      if (!(!A || A === g.target || g.composedPath().includes(A))) {
        if (g.detail === 0 && (s = !i(g)), !s) {
          s = !0;
          return;
        }
        t(g);
      }
    }, { passive: !0, capture: r }),
    W(a, "pointerdown", (g) => {
      const A = J(e);
      A && (s = !g.composedPath().includes(A) && !i(g));
    }, { passive: !0 }),
    l && W(a, "blur", (g) => {
      setTimeout(() => {
        var A;
        const C = J(e);
        ((A = a.document.activeElement) == null ? void 0 : A.tagName) === "IFRAME" && !(C != null && C.contains(a.document.activeElement)) && t(g);
      }, 0);
    })
  ].filter(Boolean);
  return () => f.forEach((g) => g());
}
function Gt(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Te(...e) {
  let t, n, a = {};
  e.length === 3 ? (t = e[0], n = e[1], a = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], a = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = pe,
    eventName: r = "keydown",
    passive: l = !1,
    dedupe: s = !1
  } = a, i = Gt(t);
  return W(o, r, (f) => {
    f.repeat && Pe(s) || i(f) && n(f);
  }, l);
}
function Yt(e = {}) {
  var t;
  const {
    window: n = pe,
    deep: a = !0
  } = e, o = (t = e.document) != null ? t : n == null ? void 0 : n.document, r = () => {
    var s;
    let i = o == null ? void 0 : o.activeElement;
    if (a)
      for (; i != null && i.shadowRoot; )
        i = (s = i == null ? void 0 : i.shadowRoot) == null ? void 0 : s.activeElement;
    return i;
  }, l = Ut(
    () => null,
    () => r()
  );
  return n && (W(n, "blur", (s) => {
    s.relatedTarget === null && l.trigger();
  }, !0), W(n, "focus", l.trigger, !0)), l;
}
function Vt(e, t = {}) {
  const { initialValue: n = !1, focusVisible: a = !1 } = t, o = E(!1), r = S(() => J(e));
  W(r, "focus", (s) => {
    var i, u;
    (!a || (u = (i = s.target).matches) != null && u.call(i, ":focus-visible")) && (o.value = !0);
  }), W(r, "blur", () => o.value = !1);
  const l = S({
    get: () => o.value,
    set(s) {
      var i, u;
      !s && o.value ? (i = r.value) == null || i.blur() : s && !o.value && ((u = r.value) == null || u.focus());
    }
  });
  return K(
    r,
    () => {
      l.value = n;
    },
    { immediate: !0, flush: "post" }
  ), { focused: l };
}
function Bt(e, t = {}) {
  const n = Yt(t), a = S(() => J(e));
  return { focused: S(() => a.value && n.value ? a.value.contains(n.value) : !1) };
}
const Kt = "zoa__u1jpB__input", Wt = "zoa__K4jZT__label", Zt = "zoa__wc4xP__grid", Xt = "zoa__0mMOV__wrapper", Jt = "zoa__FvT7h__options", qt = "zoa__hqIBJ__option", Qt = {
  input: Kt,
  label: Wt,
  "label--right": "zoa__CsI39__label--right",
  "label--below": "zoa__OyBO0__label--below",
  "label--above": "zoa__rnMm-__label--above",
  grid: Zt,
  "grid--above": "zoa__lZr2b__grid--above",
  "grid--below": "zoa__s1ZFN__grid--below",
  "grid--left": "zoa__Imuk0__grid--left",
  "grid--right": "zoa__2DZpe__grid--right",
  wrapper: Xt,
  options: Jt,
  option: qt
}, en = ["id"], tn = ["for"], nn = ["placeholder", "id"], an = ["onClick"], on = ["value"], ln = {
  __name: "AutocompleteTextbox",
  props: {
    modelValue: {},
    labelPosition: {
      type: String,
      default: "above"
    },
    label: {
      type: String,
      default: "Text"
    },
    placeholder: {
      type: String,
      default: null
    },
    delay: {
      type: Number,
      default: 200
    },
    options: {
      type: Array
    }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { componentId: a, subId: o } = Y(), { value: r } = V(t, n), l = S(() => {
      let T = [];
      return n.options.forEach((k) => {
        typeof k == "object" ? T.push({ label: k.label, value: k.value }) : T.push({ label: k, value: k });
      }), T;
    }), s = E(null), i = E(null), u = E(null), f = E(!1), b = Vt(i), g = Bt(u);
    function A() {
      s.value.blur(), i.value.blur(), u.value.blur(), f.value = !1;
    }
    Je(s, () => {
      f.value = !1;
    }), Te("ArrowDown", () => {
      if (b.focused.value)
        u.value.children[0].children[0].focus();
      else if (g.focused.value) {
        const T = u.value.querySelector("li:focus");
        !T || !T.nextElementSibling ? u.value.children[0].children[0].focus() : T.nextElementSibling.focus();
      }
    }), Te("ArrowUp", () => {
      if (g.focused.value) {
        const T = u.value.querySelector("li:focus");
        !T || !T.previousElementSibling ? i.value.focus() : T.previousElementSibling.focus();
      }
    }), Te("Enter", () => {
      if (g.focused.value) {
        const T = u.value.querySelector("li:focus");
        T && C(T.querySelector("input").value);
      }
      A();
    });
    function C(T) {
      r.value = T, A();
    }
    return (T, k) => ($(), w("div", {
      class: d([T.$style.grid, T.$style[`grid--${e.labelPosition}`]]),
      id: m(a)
    }, [
      e.label && e.labelPosition !== "none" ? ($(), w("label", {
        key: 0,
        for: m(o)("textbox"),
        class: d([T.$style.label, T.$style[`label--${e.labelPosition}`]])
      }, O(e.label), 11, tn)) : L("", !0),
      y("div", {
        class: d(T.$style.wrapper),
        ref_key: "container",
        ref: s
      }, [
        Z(y("input", {
          type: "text",
          placeholder: e.placeholder,
          id: m(o)("textbox"),
          class: d(T.$style.input),
          "onUpdate:modelValue": k[0] || (k[0] = (c) => te(r) ? r.value = c : null),
          onFocusin: k[1] || (k[1] = (c) => f.value = !0),
          ref_key: "textbox",
          ref: i
        }, null, 42, nn), [
          [q, m(r)]
        ]),
        f.value ? ($(), w("div", {
          key: 0,
          class: d(T.$style.options),
          ref_key: "dropdown",
          ref: u
        }, [
          y("ul", null, [
            ($(!0), w(X, null, Q(l.value, (c) => ($(), w("li", {
              class: d(T.$style.option),
              onClick: (p) => C(c.value),
              tabindex: "0"
            }, [
              y("span", null, O(c.label), 1),
              y("input", {
                type: "hidden",
                value: c.value
              }, null, 8, on)
            ], 10, an))), 256))
          ])
        ], 2)) : L("", !0)
      ], 2)
    ], 10, en));
  }
}, rn = {
  $style: Qt
}, sn = /* @__PURE__ */ U(ln, [["__cssModules", rn]]);
function He(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? He(Object(n), !0).forEach(function(a) {
      P(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : He(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function _e(e) {
  "@babel/helpers - typeof";
  return _e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _e(e);
}
function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function un(e, t) {
  if (e == null)
    return {};
  var n = {}, a = Object.keys(e), o, r;
  for (r = 0; r < a.length; r++)
    o = a[r], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function cn(e, t) {
  if (e == null)
    return {};
  var n = un(e, t), a, o;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    for (o = 0; o < r.length; o++)
      a = r[o], !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]);
  }
  return n;
}
function De(e) {
  return dn(e) || fn(e) || mn(e) || _n();
}
function dn(e) {
  if (Array.isArray(e))
    return Ee(e);
}
function fn(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function mn(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ee(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Ee(e, t);
  }
}
function Ee(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = new Array(t); n < t; n++)
    a[n] = e[n];
  return a;
}
function _n() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var pn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, qe = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(c, p, h) {
      if (!u(p) || b(p) || g(p) || A(p) || i(p))
        return p;
      var v, M = 0, x = 0;
      if (f(p))
        for (v = [], x = p.length; M < x; M++)
          v.push(n(c, p[M], h));
      else {
        v = {};
        for (var I in p)
          Object.prototype.hasOwnProperty.call(p, I) && (v[c(I, h)] = n(c, p[I], h));
      }
      return v;
    }, a = function(c, p) {
      p = p || {};
      var h = p.separator || "_", v = p.split || /(?=[A-Z])/;
      return c.split(v).join(h);
    }, o = function(c) {
      return C(c) ? c : (c = c.replace(/[\-_\s]+(.)?/g, function(p, h) {
        return h ? h.toUpperCase() : "";
      }), c.substr(0, 1).toLowerCase() + c.substr(1));
    }, r = function(c) {
      var p = o(c);
      return p.substr(0, 1).toUpperCase() + p.substr(1);
    }, l = function(c, p) {
      return a(c, p).toLowerCase();
    }, s = Object.prototype.toString, i = function(c) {
      return typeof c == "function";
    }, u = function(c) {
      return c === Object(c);
    }, f = function(c) {
      return s.call(c) == "[object Array]";
    }, b = function(c) {
      return s.call(c) == "[object Date]";
    }, g = function(c) {
      return s.call(c) == "[object RegExp]";
    }, A = function(c) {
      return s.call(c) == "[object Boolean]";
    }, C = function(c) {
      return c = c - 0, c === c;
    }, T = function(c, p) {
      var h = p && "process" in p ? p.process : p;
      return typeof h != "function" ? c : function(v, M) {
        return h(v, c, M);
      };
    }, k = {
      camelize: o,
      decamelize: l,
      pascalize: r,
      depascalize: l,
      camelizeKeys: function(c, p) {
        return n(T(o, p), c);
      },
      decamelizeKeys: function(c, p) {
        return n(T(l, p), c, p);
      },
      pascalizeKeys: function(c, p) {
        return n(T(r, p), c);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = k : t.humps = k;
  })(pn);
})(qe);
var yn = qe.exports, bn = ["class", "style"];
function gn(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var a = n.indexOf(":"), o = yn.camelize(n.slice(0, a)), r = n.slice(a + 1).trim();
    return t[o] = r, t;
  }, {});
}
function hn(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function Le(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var a = (e.children || []).map(function(i) {
    return Le(i);
  }), o = Object.keys(e.attributes || {}).reduce(function(i, u) {
    var f = e.attributes[u];
    switch (u) {
      case "class":
        i.class = hn(f);
        break;
      case "style":
        i.style = gn(f);
        break;
      default:
        i.attrs[u] = f;
    }
    return i;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var r = n.style, l = r === void 0 ? {} : r, s = cn(n, bn);
  return Ke(e.tag, F(F(F({}, t), {}, {
    class: o.class,
    style: F(F({}, o.style), l)
  }, o.attrs), s), a);
}
var Qe = !1;
try {
  Qe = !0;
} catch {
}
function vn() {
  if (!Qe && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function oe(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? P({}, e, t) : {};
}
function Tn(e) {
  var t, n = (t = {
    "fa-spin": e.spin,
    "fa-pulse": e.pulse,
    "fa-fw": e.fixedWidth,
    "fa-border": e.border,
    "fa-li": e.listItem,
    "fa-inverse": e.inverse,
    "fa-flip": e.flip === !0,
    "fa-flip-horizontal": e.flip === "horizontal" || e.flip === "both",
    "fa-flip-vertical": e.flip === "vertical" || e.flip === "both"
  }, P(t, "fa-".concat(e.size), e.size !== null), P(t, "fa-rotate-".concat(e.rotation), e.rotation !== null), P(t, "fa-pull-".concat(e.pull), e.pull !== null), P(t, "fa-swap-opacity", e.swapOpacity), P(t, "fa-bounce", e.bounce), P(t, "fa-shake", e.shake), P(t, "fa-beat", e.beat), P(t, "fa-fade", e.fade), P(t, "fa-beat-fade", e.beatFade), P(t, "fa-flash", e.flash), P(t, "fa-spin-pulse", e.spinPulse), P(t, "fa-spin-reverse", e.spinReverse), t);
  return Object.keys(n).map(function(a) {
    return n[a] ? a : null;
  }).filter(function(a) {
    return a;
  });
}
function je(e) {
  if (e && _e(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (me.icon)
    return me.icon(e);
  if (e === null)
    return null;
  if (_e(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
var le = Ie({
  name: "FontAwesomeIcon",
  props: {
    border: {
      type: Boolean,
      default: !1
    },
    fixedWidth: {
      type: Boolean,
      default: !1
    },
    flip: {
      type: [Boolean, String],
      default: !1,
      validator: function(t) {
        return [!0, !1, "horizontal", "vertical", "both"].indexOf(t) > -1;
      }
    },
    icon: {
      type: [Object, Array, String],
      required: !0
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    listItem: {
      type: Boolean,
      default: !1
    },
    pull: {
      type: String,
      default: null,
      validator: function(t) {
        return ["right", "left"].indexOf(t) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: !1
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function(t) {
        return [90, 180, 270].indexOf(Number.parseInt(t, 10)) > -1;
      }
    },
    swapOpacity: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null,
      validator: function(t) {
        return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(t) > -1;
      }
    },
    spin: {
      type: Boolean,
      default: !1
    },
    transform: {
      type: [String, Object],
      default: null
    },
    symbol: {
      type: [Boolean, String],
      default: !1
    },
    title: {
      type: String,
      default: null
    },
    inverse: {
      type: Boolean,
      default: !1
    },
    bounce: {
      type: Boolean,
      default: !1
    },
    shake: {
      type: Boolean,
      default: !1
    },
    beat: {
      type: Boolean,
      default: !1
    },
    fade: {
      type: Boolean,
      default: !1
    },
    beatFade: {
      type: Boolean,
      default: !1
    },
    flash: {
      type: Boolean,
      default: !1
    },
    spinPulse: {
      type: Boolean,
      default: !1
    },
    spinReverse: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var a = n.attrs, o = S(function() {
      return je(t.icon);
    }), r = S(function() {
      return oe("classes", Tn(t));
    }), l = S(function() {
      return oe("transform", typeof t.transform == "string" ? me.transform(t.transform) : t.transform);
    }), s = S(function() {
      return oe("mask", je(t.mask));
    }), i = S(function() {
      return gt(o.value, F(F(F(F({}, r.value), l.value), s.value), {}, {
        symbol: t.symbol,
        title: t.title
      }));
    });
    K(i, function(f) {
      if (!f)
        return vn("Could not find one or more icon(s)", o.value, s.value);
    }, {
      immediate: !0
    });
    var u = S(function() {
      return i.value ? Le(i.value.abstract[0], {}, a) : null;
    });
    return function() {
      return u.value;
    };
  }
});
Ie({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var a = n.slots, o = We.familyPrefix, r = S(function() {
      return ["".concat(o, "-layers")].concat(De(t.fixedWidth ? ["".concat(o, "-fw")] : []));
    });
    return function() {
      return Ke("div", {
        class: r.value
      }, a.default ? a.default() : []);
    };
  }
});
Ie({
  name: "FontAwesomeLayersText",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    transform: {
      type: [String, Object],
      default: null
    },
    counter: {
      type: Boolean,
      default: !1
    },
    position: {
      type: String,
      default: null,
      validator: function(t) {
        return ["bottom-left", "bottom-right", "top-left", "top-right"].indexOf(t) > -1;
      }
    }
  },
  setup: function(t, n) {
    var a = n.attrs, o = We.familyPrefix, r = S(function() {
      return oe("classes", [].concat(De(t.counter ? ["".concat(o, "-layers-counter")] : []), De(t.position ? ["".concat(o, "-layers-").concat(t.position)] : [])));
    }), l = S(function() {
      return oe("transform", typeof t.transform == "string" ? me.transform(t.transform) : t.transform);
    }), s = S(function() {
      var u = ht(t.value.toString(), F(F({}, l.value), r.value)), f = u.abstract;
      return t.counter && (f[0].attributes.class = f[0].attributes.class.replace("fa-layers-text", "")), f[0];
    }), i = S(function() {
      return Le(s.value, {}, a);
    });
    return function() {
      return i.value;
    };
  }
});
vt.add(Tt);
const $n = "zoa__c-K88__input", Sn = "zoa__XFR4x__label", An = "zoa__csc-y__grid", wn = "zoa__oUR-j__wrapper", Dn = "zoa__f0lOR__arrow", En = {
  input: $n,
  label: Sn,
  "label--right": "zoa__3XTm6__label--right",
  "label--below": "zoa__vTCRg__label--below",
  "label--above": "zoa__7KR2L__label--above",
  grid: An,
  "grid--above": "zoa__PN-na__grid--above",
  "grid--below": "zoa__-GDMi__grid--below",
  "grid--left": "zoa__v81WH__grid--left",
  "grid--right": "zoa__Clcgi__grid--right",
  wrapper: wn,
  arrow: Dn
}, On = ["id"], Cn = ["for"], Mn = ["id"], zn = { value: "opt.value" }, kn = {
  __name: "Dropdown",
  props: {
    modelValue: {},
    labelPosition: {
      type: String,
      default: "above"
    },
    label: {
      type: String,
      default: "Dropdown"
    },
    delay: {
      type: Number,
      default: 0
    },
    options: {
      type: Array
    }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { componentId: a, subId: o } = Y(), r = S(() => {
      let s = [];
      return n.options.forEach((i) => {
        typeof i == "object" ? s.push({ label: i.label, value: i.value }) : s.push({ label: i, value: i });
      }), s;
    }), { value: l } = V(t, n);
    return (s, i) => ($(), w("div", {
      class: d([s.$style.grid, s.$style[`grid--${e.labelPosition}`]]),
      id: m(a)
    }, [
      e.label && e.labelPosition !== "none" ? ($(), w("label", {
        key: 0,
        for: m(o)("dropdown"),
        class: d([s.$style.label, s.$style[`label--${e.labelPosition}`]])
      }, O(e.label), 11, Cn)) : L("", !0),
      y("div", {
        class: d(s.$style.wrapper)
      }, [
        Z(y("select", {
          id: m(o)("dropdown"),
          class: d(s.$style.input),
          "onUpdate:modelValue": i[0] || (i[0] = (u) => te(l) ? l.value = u : null)
        }, [
          ($(!0), w(X, null, Q(r.value, (u) => ($(), w("option", zn, O(u.label), 1))), 256))
        ], 10, Mn), [
          [yt, m(l)]
        ]),
        G(m(le), {
          icon: "fa-solid fa-caret-down",
          class: d(s.$style.arrow)
        }, null, 8, ["class"])
      ], 2)
    ], 10, On));
  }
}, Nn = {
  $style: En
}, In = /* @__PURE__ */ U(kn, [["__cssModules", Nn]]), Pn = "zoa__EjsEt__input", Ln = "zoa__A3qeJ__label", Un = "zoa__J-EVV__grid", xn = "zoa__3vUBH__defaultCheckbox", Rn = "zoa__uHbf1__checkbox", Fn = "zoa__6OoQN__check", Hn = {
  input: Pn,
  label: Ln,
  "label--right": "zoa__pku0V__label--right",
  "label--below": "zoa__U-wXq__label--below",
  "label--above": "zoa__bglwu__label--above",
  grid: Un,
  "grid--above": "zoa__xWwl6__grid--above",
  "grid--below": "zoa__MxvdG__grid--below",
  "grid--left": "zoa__ePg1o__grid--left",
  "grid--right": "zoa__dovWb__grid--right",
  defaultCheckbox: xn,
  checkbox: Rn,
  check: Fn
}, jn = ["id", "for"], Gn = ["id"], Yn = {
  __name: "Checkbox",
  props: {
    modelValue: {},
    labelPosition: {
      type: String,
      default: "left"
    },
    label: {
      type: String,
      default: "Text"
    },
    placeholder: {
      type: String,
      default: null
    },
    delay: {
      type: Number,
      default: 0
    }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { componentId: a, subId: o } = Y(), { value: r } = V(t, n);
    return (l, s) => ($(), w("label", {
      id: m(a),
      for: m(o)("checkbox"),
      class: d([l.$style.grid, l.$style[`grid--${e.labelPosition}`]])
    }, [
      e.label && e.labelPosition !== "none" ? ($(), w("span", {
        key: 0,
        class: d([l.$style.label, l.$style[`label--${e.labelPosition}`]])
      }, O(e.label), 3)) : L("", !0),
      y("input", {
        type: "checkbox",
        id: m(o)("checkbox"),
        class: d(l.$style.defaultCheckbox),
        onChange: s[0] || (s[0] = (...i) => m(r) && m(r)(...i))
      }, null, 42, Gn),
      y("span", {
        class: d(l.$style.checkbox)
      }, [
        G(m(le), {
          icon: "fa-solid fa-check",
          class: d(l.$style.check)
        }, null, 8, ["class"])
      ], 2)
    ], 10, jn));
  }
}, Vn = {
  $style: Hn
}, Bn = /* @__PURE__ */ U(Yn, [["__cssModules", Vn]]), Kn = "zoa__79mQo__input", Wn = "zoa__WTN5H__label", Zn = "zoa__DqiKb__grid", Xn = {
  input: Kn,
  label: Wn,
  "label--right": "zoa__iMSda__label--right",
  "label--below": "zoa__r6OsR__label--below",
  "label--above": "zoa__iXvOz__label--above",
  grid: Zn,
  "grid--above": "zoa__9WSIP__grid--above",
  "grid--below": "zoa__iK09A__grid--below",
  "grid--left": "zoa__KhHio__grid--left",
  "grid--right": "zoa__M6mbm__grid--right"
}, Jn = ["id"], qn = ["for"], Qn = ["placeholder", "min", "max", "step", "id"], ea = {
  __name: "Number",
  props: {
    modelValue: {},
    labelPosition: {
      type: String,
      default: "above"
    },
    label: {
      type: String,
      default: "Number"
    },
    placeholder: {
      type: String,
      default: 0
    },
    delay: {
      type: Number,
      default: 200
    },
    min: {
      type: Number,
      default: null
    },
    max: {
      type: Number,
      default: null
    },
    step: {
      type: Number,
      default: 0.1
    }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { componentId: a, subId: o } = Y(), { value: r } = V(t, n);
    return (l, s) => ($(), w("div", {
      class: d([l.$style.grid, l.$style[`grid--${e.labelPosition}`]]),
      id: m(a)
    }, [
      e.label && e.labelPosition !== "none" ? ($(), w("label", {
        key: 0,
        for: m(o)("number"),
        class: d([l.$style.label, l.$style[`label--${e.labelPosition}`]])
      }, O(e.label), 11, qn)) : L("", !0),
      Z(y("input", {
        type: "number",
        placeholder: e.placeholder,
        min: e.min,
        max: e.max,
        step: e.step,
        id: m(o)("number"),
        class: d(l.$style.input),
        "onUpdate:modelValue": s[0] || (s[0] = (i) => te(r) ? r.value = i : null)
      }, null, 10, Qn), [
        [q, m(r)]
      ])
    ], 10, Jn));
  }
}, ta = {
  $style: Xn
}, fe = /* @__PURE__ */ U(ea, [["__cssModules", ta]]), na = "zoa__BWNey__input", aa = "zoa__EwgZe__label", oa = "zoa__Xjves__grid", la = {
  input: na,
  label: aa,
  "label--right": "zoa__GxE5U__label--right",
  "label--below": "zoa__K1mOk__label--below",
  "label--above": "zoa__33h7g__label--above",
  grid: oa,
  "grid--above": "zoa__caz05__grid--above",
  "grid--below": "zoa__pnjLn__grid--below",
  "grid--left": "zoa__utweT__grid--left",
  "grid--right": "zoa__E6CuQ__grid--right"
}, ra = ["id"], sa = ["for"], ia = ["placeholder", "min", "max", "step", "id"], ua = {
  __name: "DateSimple",
  props: {
    modelValue: {},
    labelPosition: {
      type: String,
      default: "above"
    },
    label: {
      type: String,
      default: "Number"
    },
    placeholder: {
      type: String,
      default: null
    },
    delay: {
      type: Number,
      default: 200
    },
    min: {
      type: String,
      default: null
    },
    max: {
      type: String,
      default: null
    },
    step: {
      type: String,
      default: "any"
    }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { componentId: a, subId: o } = Y(), { value: r } = V(t, n);
    return (l, s) => ($(), w("div", {
      class: d([l.$style.grid, l.$style[`grid--${e.labelPosition}`]]),
      id: m(a)
    }, [
      e.label && e.labelPosition !== "none" ? ($(), w("label", {
        key: 0,
        for: m(o)("date"),
        class: d([l.$style.label, l.$style[`label--${e.labelPosition}`]])
      }, O(e.label), 11, sa)) : L("", !0),
      Z(y("input", {
        type: "date",
        placeholder: e.placeholder,
        min: e.min,
        max: e.max,
        step: e.step,
        id: m(o)("date"),
        class: d(l.$style.input),
        "onUpdate:modelValue": s[0] || (s[0] = (i) => te(r) ? r.value = i : null)
      }, null, 10, ia), [
        [q, m(r)]
      ])
    ], 10, ra));
  }
}, ca = {
  $style: la
}, da = /* @__PURE__ */ U(ua, [["__cssModules", ca]]);
function et(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function fa(e) {
  e = e.replace(/_/g, "-"), e = e.replace(/[.:][\w-]*$/, "");
  try {
    return new Intl.Locale(e).baseName;
  } catch {
    return "en-US";
  }
}
var ma = fa;
const _a = ma;
let re;
if (typeof navigator < "u") {
  const e = navigator;
  re = Array.isArray(e.languages) ? e.languages[0] : e.language;
} else if (typeof process < "u") {
  const e = { SHELL: "/bin/zsh", npm_command: "run-script", npm_config_userconfig: "/home/ginger/.npmrc", npm_config_cache: "/home/ginger/.npm", I3SOCK: "/run/user/1000/sway-ipc.1000.2322.sock", NODE: "/usr/bin/node", DOTNET_ROOT: "/usr/share/dotnet", XDG_CONFIG_HOME: "/home/ginger/.config/", COLOR: "1", npm_config_local_prefix: "/home/ginger/projects/zoa", npm_config_globalconfig: "/etc/npmrc", XCURSOR_SIZE: "24", EDITOR: "vi", XDG_SEAT: "seat0", PWD: "/home/ginger/projects/zoa", XDG_SESSION_DESKTOP: "sway", LOGNAME: "ginger", XDG_SESSION_TYPE: "wayland", npm_config_init_module: "/home/ginger/.npm-init.js", MOTD_SHOWN: "pam", HOME: "/home/ginger", AUTOJUMP_ERROR_PATH: "/home/ginger/.local/share/autojump/errors.log", LANG: "en_GB.UTF-8", _JAVA_AWT_WM_NONREPARENTING: "1", XDG_CURRENT_DESKTOP: "sway", npm_package_version: "0.2.3", SWAYSOCK: "/run/user/1000/sway-ipc.1000.2322.sock", WAYLAND_DISPLAY: "wayland-1", INIT_CWD: "/home/ginger/projects/zoa", ATOM_HOME: "/home/ginger/.config//.atom", DOTNET_BUNDLE_EXTRACT_BASE_DIR: "/home/ginger/.cache/dotnet_bundle_extract", QT_QPA_PLATFORM: "xcb", npm_lifecycle_script: "vite build", XDG_ACTIVATION_TOKEN: "b06a99e617863f46af8794926c2768cf", npm_config_npm_version: "9.8.1", XDG_SESSION_CLASS: "user", PYTHONPATH: ":/usr/share/usd/lib/python", TERM: "xterm-256color", npm_package_name: "@nhm-data/zoa", npm_config_prefix: "/usr", USER: "ginger", CUDA_PATH: "/opt/cuda", AUTOJUMP_SOURCED: "1", DISPLAY: ":0", npm_lifecycle_event: "build", SHLVL: "1", MOZ_ENABLE_WAYLAND: "1", XDG_VTNR: "1", XDG_SESSION_ID: "4", npm_config_user_agent: "npm/9.8.1 node/v16.20.1 linux x64 workspaces/false", npm_execpath: "/usr/lib/node_modules/npm/bin/npm-cli.js", XDG_RUNTIME_DIR: "/run/user/1000", DEBUGINFOD_URLS: "https://debuginfod.archlinux.org ", npm_package_json: "/home/ginger/projects/zoa/package.json", GREETD_SOCK: "/run/greetd-1106.sock", JOURNAL_STREAM: "8:31634", XDG_DATA_DIRS: "/usr/local/share:/usr/share:/var/lib/snapd/desktop", npm_config_noproxy: "", PATH: "/home/ginger/projects/zoa/node_modules/.bin:/home/ginger/projects/node_modules/.bin:/home/ginger/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/usr/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/usr/local/sbin:/usr/local/bin:/usr/bin:/opt/cuda/bin:/opt/cuda/nsight_compute:/opt/cuda/nsight_systems/bin:/home/ginger/.dotnet/tools:/usr/lib/jvm/default/bin:/usr/bin/site_perl:/usr/bin/vendor_perl:/usr/bin/core_perl:/usr/lib/rustup/bin:/var/lib/snapd/snap/bin:/usr/share/usd/bin:/home/ginger/.local/share/JetBrains/Toolbox/scripts", npm_config_metrics_registry: "https://registry.npmjs.org/", npm_config_node_gyp: "/usr/lib/node_modules/node-gyp/bin/node-gyp.js", DBUS_SESSION_BUS_ADDRESS: "unix:path=/run/user/1000/bus", npm_config_global_prefix: "/usr", HG: "/usr/bin/hg", MAIL: "/var/spool/mail/ginger", GIO_LAUNCHED_DESKTOP_FILE_PID: "11697", npm_node_execpath: "/usr/bin/node", GIO_LAUNCHED_DESKTOP_FILE: "/home/ginger/.local/share/applications/jetbrains-webstorm.desktop", _: "/home/ginger/projects/zoa/node_modules/.bin/vite", NODE_ENV: "production" };
  re = e.LC_ALL || e.LC_MESSAGES || e.LANG || e.LANGUAGE;
}
re || (re = "en-US");
var ye = _a(re);
const tt = {};
for (let e = 1; e < 100; e++) {
  const t = (e < 9 ? "0" : "") + e;
  tt[t] = e + (e > 51 ? 1900 : 2e3);
}
var pa = tt;
const ya = {
  "Eastern Daylight Time": -240,
  "Eastern Standard Time": -300,
  "Central Daylight Time": -300,
  "Central Standard Time": -360,
  "Mountain Daylight Time": -360,
  "Mountain Standard Time": -420,
  "Pacific Daylight Time": -420,
  "Pacific Standard Time": -480,
  ACDT: 630,
  // Australian Central Daylight Savings Time
  ACST: 570,
  // Australian Central Standard Time
  ACT: 480,
  // ASEAN Common Time
  ADT: -180,
  // Atlantic Daylight Time
  AEDT: 660,
  // Australian Eastern Daylight Savings Time
  AEST: 600,
  // Australian Eastern Standard Time
  AFT: 270,
  // Afghanistan Time
  AKDT: -480,
  // Alaska Daylight Time
  AKST: -540,
  // Alaska Standard Time
  AMST: -180,
  // Amazon Summer Time (Brazil)
  AMT: -240,
  // Amazon Time (Brazil)
  ART: -180,
  // Argentina Time
  AST: 180,
  // Arabia Standard Time
  AWDT: 540,
  // Australian Western Daylight Time
  AWST: 480,
  // Australian Western Standard Time
  AZOST: -60,
  // Azores Standard Time
  AZT: 240,
  // Azerbaijan Time
  BDT: 360,
  // Bangladesh Daylight Time (Bangladesh Daylight saving time keeps UTC+06 offset)
  BIOT: 360,
  // British Indian Ocean Time
  BIT: -720,
  // Baker Island Time
  BOT: -240,
  // Bolivia Time
  BRST: -120,
  // Brasilia Summer Time
  BRT: -180,
  // Brasilia Time
  BTT: 360,
  // Bhutan Time
  CAT: 120,
  // Central Africa Time
  CCT: 390,
  // Cocos Islands Time
  CDT: -300,
  // Central Daylight Time (North America)
  CEDT: 120,
  // Central European Daylight Time
  CEST: 120,
  // Central European Summer Time (Cf. HAEC)
  CET: 60,
  // Central European Time
  CHADT: 825,
  // Chatham Daylight Time
  CHAST: 765,
  // Chatham Standard Time
  CHOT: 480,
  // Choibalsan
  ChST: 600,
  // Chamorro Standard Time
  CHUT: 600,
  // Chuuk Time
  CIST: -480,
  // Clipperton Island Standard Time
  CIT: 480,
  // Central Indonesia Time
  CKT: -600,
  // Cook Island Time
  CLST: -180,
  // Chile Summer Time
  CLT: -240,
  // Chile Standard Time
  COST: -240,
  // Colombia Summer Time
  COT: -300,
  // Colombia Time
  CST: -360,
  // Central Standard Time (North America)
  CT: 480,
  // China time
  CVT: -60,
  // Cape Verde Time
  CXT: 420,
  // Christmas Island Time
  DAVT: 420,
  // Davis Time
  DDUT: 600,
  // Dumont d'Urville Time
  DFT: 60,
  // AIX specific equivalent of Central European Time
  EASST: -300,
  // Easter Island Standard Summer Time
  EAST: -360,
  // Easter Island Standard Time
  EAT: 180,
  // East Africa Time
  ECT: -300,
  // Ecuador Time
  EDT: -240,
  // Eastern Daylight Time (North America)
  EEDT: 180,
  // Eastern European Daylight Time
  EEST: 180,
  // Eastern European Summer Time
  EET: 120,
  // Eastern European Time
  EGST: 0,
  // Eastern Greenland Summer Time
  EGT: -60,
  // Eastern Greenland Time
  EIT: 540,
  // Eastern Indonesian Time
  EST: -300,
  // Eastern Standard Time (North America)
  FET: 180,
  // Further-eastern European Time
  FJT: 720,
  // Fiji Time
  FKST: -180,
  // Falkland Islands Standard Time
  FKT: -240,
  // Falkland Islands Time
  FNT: -120,
  // Fernando de Noronha Time
  GALT: -360,
  // Galapagos Time
  GAMT: -540,
  // Gambier Islands
  GET: 240,
  // Georgia Standard Time
  GFT: -180,
  // French Guiana Time
  GILT: 720,
  // Gilbert Island Time
  GIT: -540,
  // Gambier Island Time
  GMT: 0,
  // Greenwich Mean Time
  GST: -120,
  // South Georgia and the South Sandwich Islands
  GYT: -240,
  // Guyana Time
  HADT: -540,
  // Hawaii-Aleutian Daylight Time
  HAEC: 120,
  // Heure Avancée d'Europe Centrale francised name for CEST
  HAST: -600,
  // Hawaii-Aleutian Standard Time
  HKT: 480,
  // Hong Kong Time
  HMT: 300,
  // Heard and McDonald Islands Time
  HOVT: 420,
  // Khovd Time
  HST: -600,
  // Hawaii Standard Time
  IBST: 0,
  // International Business Standard Time
  ICT: 420,
  // Indochina Time
  IDT: 180,
  // Israel Daylight Time
  IOT: 180,
  // Indian Ocean Time
  IRDT: 270,
  // Iran Daylight Time
  IRKT: 480,
  // Irkutsk Time
  IRST: 210,
  // Iran Standard Time
  IST: 120,
  // Israel Standard Time
  JST: 540,
  // Japan Standard Time
  KGT: 360,
  // Kyrgyzstan time
  KOST: 660,
  // Kosrae Time
  KRAT: 420,
  // Krasnoyarsk Time
  KST: 540,
  // Korea Standard Time
  LHST: 630,
  // Lord Howe Standard Time
  LINT: 840,
  // Line Islands Time
  MAGT: 720,
  // Magadan Time
  MART: -510,
  // Marquesas Islands Time
  MAWT: 300,
  // Mawson Station Time
  MDT: -360,
  // Mountain Daylight Time (North America)
  MET: 60,
  // Middle European Time Same zone as CET
  MEST: 120,
  // Middle European Summer Time Same zone as CEST
  MHT: 720,
  // Marshall Islands
  MIST: 660,
  // Macquarie Island Station Time
  MIT: -510,
  // Marquesas Islands Time
  MMT: 390,
  // Myanmar Time
  MSK: 180,
  // Moscow Time
  MST: -420,
  // Mountain Standard Time (North America)
  MUT: 240,
  // Mauritius Time
  MVT: 300,
  // Maldives Time
  MYT: 480,
  // Malaysia Time
  NCT: 660,
  // New Caledonia Time
  NDT: -90,
  // Newfoundland Daylight Time
  NFT: 660,
  // Norfolk Time
  NPT: 345,
  // Nepal Time
  NST: -150,
  // Newfoundland Standard Time
  NT: -150,
  // Newfoundland Time
  NUT: -660,
  // Niue Time
  NZDT: 780,
  // New Zealand Daylight Time
  NZST: 720,
  // New Zealand Standard Time
  OMST: 360,
  // Omsk Time
  ORAT: 300,
  // Oral Time
  PDT: -420,
  // Pacific Daylight Time (North America)
  PET: -300,
  // Peru Time
  PETT: 720,
  // Kamchatka Time
  PGT: 600,
  // Papua New Guinea Time
  PHOT: 780,
  // Phoenix Island Time
  PKT: 300,
  // Pakistan Standard Time
  PMDT: -120,
  // Saint Pierre and Miquelon Daylight time
  PMST: -180,
  // Saint Pierre and Miquelon Standard Time
  PONT: 660,
  // Pohnpei Standard Time
  PST: -480,
  // Pacific Standard Time (North America)
  PYST: -180,
  // Paraguay Summer Time (South America)
  PYT: -240,
  // Paraguay Time (South America)
  RET: 240,
  // Réunion Time
  ROTT: -180,
  // Rothera Research Station Time
  SAKT: 660,
  // Sakhalin Island time
  SAMT: 240,
  // Samara Time
  SAST: 120,
  // South African Standard Time
  SBT: 660,
  // Solomon Islands Time
  SCT: 240,
  // Seychelles Time
  SGT: 480,
  // Singapore Time
  SLST: 330,
  // Sri Lanka Standard Time
  SRET: 660,
  // Srednekolymsk Time
  SRT: -180,
  // Suriname Time
  SST: 480,
  // Singapore Standard Time
  SYOT: 180,
  // Showa Station Time
  TAHT: -600,
  // Tahiti Time
  THA: 420,
  // Thailand Standard Time
  TFT: 300,
  // Indian/Kerguelen
  TJT: 300,
  // Tajikistan Time
  TKT: 780,
  // Tokelau Time
  TLT: 540,
  // Timor Leste Time
  TMT: 300,
  // Turkmenistan Time
  TOT: 780,
  // Tonga Time
  TVT: 720,
  // Tuvalu Time
  UCT: 0,
  // Coordinated Universal Time
  ULAT: 480,
  // Ulaanbaatar Time
  USZ1: 120,
  // Kaliningrad Time
  UTC: 0,
  // Coordinated Universal Time
  UYST: -120,
  // Uruguay Summer Time
  UYT: -180,
  // Uruguay Standard Time
  UZT: 300,
  // Uzbekistan Time
  VET: -240,
  // Venezuelan Standard Time
  VLAT: 600,
  // Vladivostok Time
  VOLT: 240,
  // Volgograd Time
  VOST: 360,
  // Vostok Station Time
  VUT: 660,
  // Vanuatu Time
  WAKT: 720,
  // Wake Island Time
  WAST: 120,
  // West Africa Summer Time
  WAT: 60,
  // West Africa Time
  WEDT: 60,
  // Western European Daylight Time
  WEST: 60,
  // Western European Summer Time
  WET: 0,
  // Western European Time
  WIT: 420,
  // Western Indonesian Time
  WST: 480,
  // Western Standard Time
  YAKT: 540,
  // Yakutsk Time
  YEKT: 300,
  // Yekaterinburg Time
  Z: 0
  // Zulu Time (Coordinated Universal Time)
};
var Ue = ya;
const ba = pa, ga = Ue, ha = {
  zone: ga,
  year: ba,
  meridiem: { am: 0, pm: 12, "a.m.": 0, "p.m.": 12 },
  month: {
    january: 1,
    jan: 1,
    february: 2,
    feb: 2,
    march: 3,
    mar: 3,
    april: 4,
    apr: 4,
    may: 5,
    june: 6,
    jun: 6,
    july: 7,
    jul: 7,
    august: 8,
    aug: 8,
    september: 9,
    sep: 9,
    october: 10,
    oct: 10,
    november: 11,
    nov: 11,
    december: 12,
    dec: 12
  },
  dayname: {
    sunday: 0,
    sun: 0,
    monday: 1,
    mon: 1,
    tuesday: 2,
    tue: 2,
    wednesday: 3,
    wed: 3,
    thursday: 4,
    thu: 4,
    friday: 5,
    fri: 5,
    saturday: 6,
    sat: 6
  },
  digit: {}
};
var va = ha;
const Ta = Ue, nt = {
  MONTHNAME: "january|february|march|april|may|june|july|august|september|october|november|december|jan\\.?|feb\\.?|mar\\.?|apr\\.?|may\\.?|jun\\.?|jul\\.?|aug\\.?|sep\\.?|oct\\.?|nov\\.?|dec\\.?",
  DAYNAME: "sunday|monday|tuesday|wednesday|thursday|friday|saturday|sun\\.?|mon\\.?|tue\\.?|wed\\.?|thu\\.?|fri\\.?|sat\\.?",
  ZONE: "\\(?(" + Object.keys(Ta).join("|") + ")\\)?",
  MERIDIEM: "[ap]\\.?m?\\.?",
  ORDINAL: "st|nd|rd|th|\\.",
  YEAR: "[1-9]\\d{3}|\\d{2}",
  MONTH: "1[0-2]|0?[1-9]",
  MONTH2: "1[0-2]|0[1-9]",
  DAY: "3[01]|[12]\\d|0?[1-9]",
  DAY2: "3[01]|[12]\\d|0[1-9]",
  OFFSET: "[+-][01]?\\d?\\:?(?:[0-5]\\d)?",
  H24: "[01]\\d|2[0-3]",
  H12: "0?[1-9]|1[012]",
  MIN: "[0-5]\\d",
  SEC: "[0-5]\\d|60",
  MS: "\\d{9}|\\d{6}|\\d{1,3}",
  SPACE: "[\\s,-]"
}, $a = {
  ...nt,
  YEAR: "*{4}|*{2}",
  MONTH: "*{1,2}",
  MONTH2: "*{2}",
  DAY: "*{1,2}",
  DAY2: "*{2}",
  OFFSET: "[+-]*{1,2}\\:?*{0,2}",
  H24: "*{2}",
  H12: "*{1,2}",
  MIN: "*{2}",
  SEC: "*{2}",
  MS: "*{9}|*{6}|*{3}"
};
var Sa = { latn: nt, other: $a };
const at = {
  arab: 1632,
  arabext: 1776,
  bali: 6992,
  beng: 2534,
  deva: 2406,
  fullwide: 65296,
  gujr: 2790,
  khmr: 6112,
  knda: 3302,
  laoo: 3792,
  limb: 6470,
  mlym: 3430,
  mong: 6160,
  mymr: 4160,
  orya: 2918,
  tamldec: 3046,
  telu: 3174,
  thai: 3664,
  tibt: 3872
}, ot = "[０１２３４５６７８９〇一二三四五六七八九\\d]", Oe = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  "０": 0,
  "１": 1,
  "２": 2,
  "３": 3,
  "４": 4,
  "５": 5,
  "６": 6,
  "７": 7,
  "８": 8,
  "９": 9,
  "〇": 0,
  一: 1,
  二: 2,
  三: 3,
  四: 4,
  五: 5,
  六: 6,
  七: 7,
  八: 8,
  九: 9
}, ie = {};
function Aa(e) {
  if (ie[e])
    return ie[e];
  if (e === "fullwide" || e === "hanidec")
    return { group: ot, lookup: { ...Oe } };
  const t = at[e];
  if (!t)
    return { group: "\\d", lookup: { ...Oe } };
  const n = String.fromCharCode(t), a = String.fromCharCode(t + 9), o = {};
  for (let r = 0; r < 10; r++)
    o[String.fromCharCode(t + r)] = r;
  return ie[e] = {
    group: `[${n}-${a}]`,
    lookup: o
  }, ie[e];
}
var lt = { chineseGroup: ot, defaultLookup: Oe, startCodes: at, buildDigits: Aa };
const wa = [
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
var Da = wa;
const Ea = va, { latn: Oa, other: $e } = Sa, { buildDigits: Ca } = lt, Ge = ye, Ma = Da, Se = {};
let za = class rt {
  /**
   * Get a singleton instance with the given locale
   * @param {String} locale such as en, en-US, es, fr-FR, etc.
   * @returns {LocaleHelper}
   */
  static factory(t = Ge) {
    return Se[t.toLowerCase()] || (Se[t.toLowerCase()] = new rt(t)), Se[t.toLowerCase()];
  }
  /**
   * Create a new instance with the given locale
   * @param {String} locale such as en, en-US, es, fr-FR, etc.
   */
  constructor(t = Ge) {
    this.locale = t, this.lookups = { ...Ea }, this.vars = { ...Oa };
    const n = new Intl.NumberFormat(this.locale);
    this.numberingSystem = n.resolvedOptions().numberingSystem, this.build();
  }
  /**
   * Cast a string to an integer, minding numbering system
   * @param {String|Number} digitString  Such as "2020" or "二〇二〇"
   * @returns {Number}
   */
  toInt(t) {
    if (typeof t == "number")
      return t;
    if (this.numberingSystem === "latn")
      return parseInt(t, 10);
    let n = "";
    for (let a = 0; a < t.length; a++)
      n += String(this.lookups.digit[t[a]]);
    return parseInt(n, 10);
  }
  /**
   * Build lookups for digits, month names, day names, and meridiems based on the locale
   */
  build() {
    this.numberingSystem !== "latn" && this.buildNumbers(), /^en/i.test(this.locale) || (this.buildMonthNames(), this.buildDaynames(), this.buildMeridiems());
  }
  /**
   * Build lookups for digits
   */
  buildNumbers() {
    const t = this.numberingSystem, { group: n, lookup: a } = Ca(t);
    this.lookups.digit = a;
    for (const o in $e)
      $e.hasOwnProperty(o) && (this.vars[o] = $e[o].replace(/\*/g, n));
  }
  /**
   * Build lookup for month names
   */
  buildMonthNames() {
    const t = {}, n = {};
    if (/^fi/i.test(this.locale))
      "tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu".split("|").forEach((o, r) => {
        ["", "k", "kuu", "kuuta"].forEach((l, s) => {
          const i = s < 2 ? "\\.?" : "";
          t[o + l + i] = !0, n[o + l] = r + 1;
        });
      });
    else {
      const a = [], o = (s) => s.type === "month";
      for (let s = 0; s < 12; s++)
        a.push(new Date(2017, s, 1));
      const r = ["full", "long", "medium"];
      for (const s of r) {
        const i = Intl.DateTimeFormat(this.locale, { dateStyle: s });
        for (let u = 0; u < 12; u++) {
          let b = i.formatToParts(a[u]).find(o).value.toLowerCase();
          if (/^ko/i.test(this.locale) && (b += "월"), s === "medium") {
            if (/^ar|zh/i.test(this.locale))
              return;
            b = b.replace(/\.$/, ""), t[`${b}\\.?`] = !0;
          } else
            t[b] = !0;
          n[b] = u + 1;
        }
      }
      const l = Intl.DateTimeFormat(this.locale, { month: "short" });
      for (let s = 0; s < 12; s++) {
        let u = l.formatToParts(a[s]).find(o).value.toLowerCase();
        u = u.replace(/\.$/, ""), t[`${u}\\.?`] = !0, n[u] = s + 1;
      }
    }
    this.vars.MONTHNAME = Object.keys(t).join("|"), this.lookups.month = n;
  }
  /**
   * Build lookup for day name
   */
  buildDaynames() {
    const t = [], n = (l) => l.type === "weekday";
    for (let l = 0; l < 7; l++)
      t.push(new Date(2017, 0, l + 1));
    const a = ["long", "short"], o = [], r = {};
    for (const l of a) {
      const s = Intl.DateTimeFormat(this.locale, { weekday: l });
      for (let i = 0; i < 7; i++) {
        let f = s.formatToParts(t[i]).find(n).value.toLowerCase();
        l === "short" ? (f = f.replace(/\.$/, ""), o.push(`${f}\\.?`)) : o.push(f), r[f] = i;
      }
    }
    this.vars.DAYNAME = o.join("|"), this.lookups.dayname = r;
  }
  /**
   * Build lookup for meridiems (e.g. AM/PM)
   */
  buildMeridiems() {
    const t = [new Date(2017, 0, 1), new Date(2017, 0, 1, 23, 0, 0)], n = (l) => l.type === "dayPeriod", a = [], o = {}, r = Intl.DateTimeFormat(this.locale, { timeStyle: "long" });
    for (let l = 0; l < 2; l++) {
      const i = r.formatToParts(t[l]).find(n);
      if (!i)
        return;
      const u = i.value.toLowerCase();
      a.push(u), o[u] = l * 12;
    }
    this.vars.MERIDIEM = a.join("|"), this.lookups.meridiem = o;
  }
  /**
   * Given a list of unit names and matches, build result object
   * @param {Array} units  Unit names such as "year", "month" and "millisecond"
   * @param {Array} matches  The values matched by a Format's RegExp
   * @returns {Object}
   */
  getObject(t, n) {
    const a = {};
    return t.forEach((o, r) => {
      if (!o)
        return;
      let l = n[r + 1];
      l = l.toLowerCase(), l = l.replace(/\.$/, ""), o === "offset" ? a.offset = this.offsetToMinutes(l) : this.lookups[o] ? a[o] = this.lookups[o][l] || this.toInt(l) : a[o] = this.toInt(l);
    }), a;
  }
  /**
   * Take a response object and cast each unit to Number
   * @param {Object} object  An object with one or more units
   * @returns {Object}  An object with same units but Numeric
   */
  castObject(t) {
    const n = {};
    return Ma.forEach((a) => {
      a in t && (n[a] = this.toInt(t[a]));
    }), typeof t.offset == "string" ? n.offset = this.offsetToMinutes(t.offset) : typeof t.offset == "number" && (n.offset = t.offset), n;
  }
  /**
   * Convert an offset string to Numeric minutes (e.g. "-0500", "+5", "+03:30")
   * @param {String} offsetString
   * @returns {Number}
   */
  offsetToMinutes(t) {
    const n = t.match(/^([+-])(..?):?(..)?$/);
    if (n) {
      const [, a, o, r] = n;
      return (a === "-" ? -1 : 1) * (this.toInt(o) * 60 + this.toInt(r || 0));
    }
    return 0;
  }
  /**
   * Compile template into a RegExp and return it
   * @param {String} template  The template string
   * @returns {RegExp}
   */
  compile(t) {
    const n = t.replace(/_([A-Z0-9]+)_/g, (a, o) => {
      if (!this.vars[o])
        throw new Error(`Template string contains invalid variable _${o}_`);
      return this.vars[o];
    });
    return new RegExp(n, "i");
  }
};
var se = za;
const Ye = se, ue = ye;
let ka = class {
  /**
   * Given a definition, create a parsable format
   * @param {Object} definition  The format definition
   * @property {String} template  A template for RegExp that can handle multiple languages
   * @property {RegExp} matcher  An actual RegExp to match against
   * @property {Array} units  If the template or RegExp match exact units, you can define the units
   * @property {Function} handler  A flexible alternative to units; must return an object
   * @property {Array} locales  A list of locales that this format should be restricted to
   */
  constructor({
    template: t = null,
    matcher: n = null,
    units: a = null,
    handler: o = null,
    locales: r = null
  }) {
    if (!Array.isArray(a) && typeof o != "function")
      throw new Error(
        'new Format must receive a "units" array or "handler" function'
      );
    if (typeof t != "string" && !(n instanceof RegExp))
      throw new Error(
        'new Format must receive a "template" string or "matcher" RegExp'
      );
    this.template = t, this.units = a, this.matcher = n, this.handler = o, this.locales = r, this.regexByLocale = {};
  }
  /**
   * Build the RegExp from the template for a given locale
   * @param {String} locale  The language locale such as en-US, pt-BR, zh, es, etc.
   * @returns {RegExp}  A RegExp that matches when this format is recognized
   */
  getRegExp(t = ue) {
    return this.template ? (this.regexByLocale[t] || (this.regexByLocale[t] = Ye.factory(t).compile(
      this.template
    )), this.regexByLocale[t]) : this.matcher;
  }
  /**
   * Run this format's RegExp against the given string
   * @param {String} string  The date string
   * @param {String} locale  The language locale such as en-US, pt-BR, zh, es, etc.
   * @returns {Array|null}  Array of matches or null on non-match
   */
  getMatches(t, n = ue) {
    return t.match(this.getRegExp(n));
  }
  /**
   * Given matches against this RegExp, convert to object
   * @param {String[]} matches  An array of matched parts
   * @param {String} locale  The language locale such as en-US, pt-BR, zh, es, etc.
   * @returns {Object}  Object which may contain year, month, day, hour, minute, second, millisecond, offset, invalid
   */
  toDateTime(t, n = ue) {
    const a = Ye.factory(n);
    if (this.units)
      return a.getObject(this.units, t);
    const o = this.handler(t, n);
    return !o || o.invalid ? o : a.castObject(o);
  }
  /**
   * Attempt to parse a string in this format
   * @param {String} string  The date string
   * @param {String} locale  The language locale such as en-US, pt-BR, zh, es, etc.
   * @returns {Object|null}  Null if format can't handle this string, Object for result or error
   */
  attempt(t, n = ue) {
    t = String(t).trim();
    const a = this.getMatches(t, n);
    if (a) {
      const o = this.toDateTime(a, n);
      if (o && !o.invalid)
        return o;
    }
    return null;
  }
  /**
   * Return the current date (used to support unit testing)
   * @returns {Date}
   */
  now() {
    return /* @__PURE__ */ new Date();
  }
};
var N = ka;
function Na(e, t) {
  return function(a, o = t) {
    const r = e.attempt(a, o);
    if (r.invalid)
      return r;
    const l = new Date(2e3, 0, 1);
    return typeof r.day == "number" && l.setUTCDate(r.day), typeof r.year == "number" && l.setUTCFullYear(r.year), typeof r.month == "number" && l.setUTCMonth(r.month - 1), l.setUTCHours(r.hour || 0), l.setUTCMinutes(r.minute || 0), l.setUTCSeconds(r.second || 0), l.setUTCMilliseconds(r.millisecond || 0), typeof r.offset == "number" ? new Date(l - r.offset * 60 * 1e3) : l;
  };
}
var Ia = Na;
function Pa(e) {
  return function(n, a) {
    return n instanceof Date ? n : typeof n == "number" ? new Date(n) : e(n, a);
  };
}
var La = Pa;
const Ae = ye, Ve = Ia, Ua = La;
let xa = class {
  /**
   * Initialize an object with an empty array of registered formats
   */
  constructor() {
    this.formats = [];
  }
  /**
   * Register a format object representing a parseable date format
   * @param {Format} format  The Format to add
   * @returns {Parser}
   * @chainable
   */
  addFormat(t) {
    return this.formats.push(t), t.parser = this, this;
  }
  /**
   * Register multiple formats
   * @param {Format[]} formats  The array of Formats to add
   * @returns {Parser}
   * @chainable
   */
  addFormats(t) {
    return t.forEach((n) => this.addFormat(n)), this;
  }
  /**
   * Unregister a format
   * @param {Format} format  The Format to remove
   * @returns {Boolean}  true if format was found and removed, false if it wasn't registered
   */
  removeFormat(t) {
    const n = this.formats.indexOf(t);
    if (n > -1) {
      const a = this.formats[n];
      return this.formats.splice(n, 1), a.parser = null, !0;
    }
    return !1;
  }
  /**
   * Attempt to parse a date string
   * @param {String} date  A parseable date string
   * @param {String} locale  The name of the locale
   * @returns {Object}
   */
  attempt(t, n = Ae) {
    for (const o of this.formats) {
      if (Array.isArray(o.locales) && o.locales.length > 0 && !o.locales.includes(new Intl.Locale(n).baseName))
        continue;
      const r = o.attempt(t, n);
      if (r)
        return r;
    }
    let a = String(t).slice(0, 200);
    return a === "" && (a = "empty string"), { invalid: `Unable to parse ${a}` };
  }
  /**
   * Export this parser as a single function that takes a string
   * @param {String} locale  The default locale it should use
   * @returns {Function}
   */
  exportAsFunction(t = Ae) {
    return Ve(this, t);
  }
  /**
   * Export this parser as a single function that takes a string or Date
   * @param {String} locale  The default locale it should use
   * @returns {Function}
   */
  exportAsFunctionAny(t = Ae) {
    return Ua(Ve(this, t));
  }
};
var Ra = xa;
const Fa = N, Ha = new Fa({
  template: "^@(\\d+)$",
  handler: function(e) {
    const t = parseInt(e[1], 10), n = new Date(t * 1e3);
    return {
      year: n.getUTCFullYear(),
      month: n.getUTCMonth() + 1,
      day: n.getUTCDate(),
      hour: n.getUTCHours(),
      minute: n.getUTCMinutes(),
      second: n.getUTCSeconds()
    };
  }
});
var ja = Ha;
const Ga = N, Ya = new Ga({
  matcher: /^\/Date\((\d+)([+-]\d{4})?\)\/$/,
  handler: function(e) {
    const t = parseInt(e[1], 10), n = new Date(t);
    return {
      year: n.getUTCFullYear(),
      month: n.getUTCMonth() + 1,
      day: n.getUTCDate(),
      hour: n.getUTCHours(),
      minute: n.getUTCMinutes(),
      second: n.getUTCSeconds(),
      millisecond: n.getUTCMilliseconds(),
      offset: e[2] || 0
    };
  }
});
var Va = Ya;
const Ba = {
  y: "year",
  M: "month",
  d: "day",
  w: "week",
  h: "hour",
  m: "minute",
  s: "second",
  ms: "millisecond"
};
var Ka = Ba;
const Wa = N, Za = Ka, Xa = new Wa({
  /* prettier-ignore */
  //          $1          $2        $3                                                                                   $4
  matcher: /^(\+|-|in|) ?([\d.]+) ?(years?|months?|weeks?|days?|hours?|minutes?|seconds?|milliseconds?|ms|s|m|h|w|d|M|y)( ago)?$/i,
  handler: function([, e, t, n, a]) {
    t = parseFloat(t), n.length <= 2 ? n = Za[n] : (n = n.replace(/s$/, ""), n = n.toLowerCase()), n === "week" && (n = "day", t *= 7), (e === "-" || a) && (t *= -1);
    const o = this.now();
    return n === "millisecond" ? o.setUTCMilliseconds(o.getUTCMilliseconds() + t) : n === "second" ? o.setUTCSeconds(o.getUTCSeconds() + t) : n === "minute" ? o.setUTCMinutes(o.getUTCMinutes() + t) : n === "hour" ? o.setUTCHours(o.getUTCHours() + t) : n === "day" ? o.setUTCDate(o.getUTCDate() + t) : n === "month" ? o.setUTCMonth(o.getUTCMonth() + t) : n === "year" && o.setUTCFullYear(o.getUTCFullYear() + t), {
      year: o.getUTCFullYear(),
      month: o.getUTCMonth() + 1,
      day: o.getUTCDate(),
      hour: o.getUTCHours(),
      minute: o.getUTCMinutes(),
      second: o.getUTCSeconds(),
      millisecond: o.getUTCMilliseconds()
    };
  }
});
var Ja = Xa;
const qa = N, Qa = se, { chineseGroup: ce } = lt;
let ne;
const eo = new qa({
  /* prettier-ignore */
  //           $1                         $2                  $3
  template: `^(${ce}{4}|${ce}{2})\\s*年\\s*(${ce}{1,2})\\s*月\\s*(${ce}{1,2})\\s*日$`,
  handler: function([, e, t, n]) {
    return ne || (ne = new Qa("zh"), ne.numberingSystem = "hanidec", ne.buildNumbers()), ne.castObject({ year: e, month: t, day: n });
  }
});
var to = eo;
const no = N, ao = new no({
  /* prettier-ignore */
  //           $1            $2
  template: "^(_DAY_)[\\/. ](_MONTH_)$",
  units: ["day", "month"]
});
var oo = ao;
const lo = N, ro = new lo({
  /* prettier-ignore */
  //           $1                       $2
  template: "^(_DAY_)(?:_ORDINAL_)?[ -](_MONTHNAME_)$",
  units: ["day", "month"]
});
var so = ro;
const io = N, uo = new io({
  /* prettier-ignore */
  //                                $1                   $2    $3              $4
  template: "^(?:(?:_DAYNAME_),? )?(_DAY_)(?:_ORDINAL_)?([ -])(_MONTHNAME_)\\2(_YEAR_)$",
  units: ["day", null, "month", "year"]
});
var co = uo;
const fo = N, mo = new fo({
  /* prettier-ignore */
  //           $1     $2        $3          $4
  template: "^(_DAY_)([\\/. -])(_MONTH_)\\2(_YEAR_)$",
  units: ["day", null, "month", "year"]
});
var _o = mo;
const po = N, yo = new po({
  /* prettier-ignore */
  //           $1                 $2
  template: "^(_MONTH_)(?:[\\/-])(_DAY_)$",
  units: ["month", "day"]
});
var bo = yo;
const go = N, ho = new go({
  /* prettier-ignore */
  //           $1       $2      $3        $4
  template: "^(_MONTH_)([\\/-])(_DAY_)\\2(_YEAR_)$",
  units: ["month", null, "day", "year"],
  // only certain locales use this date
  // see https://en.wikipedia.org/wiki/Date_format_by_country
  // see https://www.localeplanet.com/icu/
  locales: [
    "ee-TG",
    // Togo (Ewe)
    "en-AS",
    // American Samoa
    "en-CA",
    // Canada
    "en-FM",
    // Federated States of Micronesia
    "en-GH",
    // Ghana
    "en-GU",
    // Guam
    "en-KE",
    // Kenya
    "en-KY",
    // Cayman Islands
    "en-MH",
    // Marshall Islands
    "en-MP",
    // Northern Mariana Islands
    "en-US",
    // United States
    "en-VI",
    // US Virgin Islands
    "en-WS",
    // Western Samoa
    "sm-AS",
    // American Samoa (Samoan)
    "sm-SM"
    // Samoa
  ]
});
var vo = ho;
const To = N, $o = new To({
  /* prettier-ignore */
  //                                $1             $2
  template: "^(?:(?:_DAYNAME_),? )?(_MONTHNAME_)? (_DAY_)(?:_ORDINAL_)?$",
  units: ["month", "day"]
});
var So = $o;
const Ao = N, wo = new Ao({
  /* prettier-ignore */
  //                                $1             $2                      $3
  template: "^(?:(?:_DAYNAME_),? )?(_MONTHNAME_)? (_DAY_)(?:_ORDINAL_)?,? (_YEAR_)$",
  units: ["month", "day", "year"]
});
var Do = wo;
const Eo = se, Oo = N, Co = new Oo({
  /* prettier-ignore */
  //           $1                               $2                 $3           $4                 $5
  template: "^(.*?)_SPACE_*(?:at|on|T|)_SPACE_*(_H12_|_H24_)(?:\\:(_MIN_)(?:\\:(_SEC_))?)?_SPACE_*(_MERIDIEM_)$",
  handler: function(e, t) {
    let [, n, a, o, r, l] = e, s = {};
    if (n && (s = this.parser.attempt(n, t), s.invalid))
      return null;
    const i = Eo.factory(t);
    if (l) {
      const u = i.lookups.meridiem[l.toLowerCase()] || 0;
      a = parseFloat(a), a === 12 ? a = u : a > 12 && u === 12 ? a += 0 : a += u;
    }
    return s.hour = a, o && (s.minute = o), r && (s.second = r), s;
  }
});
var Mo = Co;
const zo = se, ko = N, Be = Ue, No = new ko({
  /* prettier-ignore */
  //           $1                               $2        $3           $4              $5                                $6                 $7
  template: "^(.*?)_SPACE_*(?:at|on|T|)_SPACE_*(_H24_)\\:(_MIN_)(?:\\:(_SEC_)(?:[\\.,](_MS_))?)?_SPACE_*(?:GMT)?_SPACE_*(_OFFSET_)?_SPACE_*(_ZONE_)?$",
  handler: function(e, t) {
    let [, n, a, o, r, l, s, i] = e, u = {};
    if (n && (u = this.parser.attempt(n, t), u.invalid))
      return u;
    if (u.hour = a, u.minute = o, r && (u.second = r), l && l.length > 3 ? u.millisecond = l.slice(0, 3) : l && (u.millisecond = l), i && !s && i in Be)
      u.offset = Be[i];
    else if (s) {
      const f = zo.factory(t);
      u.offset = f.offsetToMinutes(s);
    }
    return u;
  }
});
var Io = No;
const Po = N, Lo = new Po({
  matcher: /^(now|today|tomorrow|yesterday)/i,
  handler: function(e) {
    const t = this.now(), n = e[1].toLowerCase();
    switch (n) {
      case "tomorrow":
        t.setUTCDate(t.getUTCDate() + 1);
        break;
      case "yesterday":
        t.setUTCDate(t.getUTCDate() - 1);
        break;
    }
    const a = {
      year: t.getUTCFullYear(),
      month: t.getUTCMonth() + 1,
      day: t.getUTCDate()
    };
    return n === "now" && (a.hour = t.getUTCHours(), a.minute = t.getUTCMinutes(), a.second = t.getUTCSeconds(), a.millisecond = t.getUTCMilliseconds()), a;
  }
});
var Uo = Lo;
const xo = N, Ro = new xo({
  /* prettier-ignore */
  //                         $1            $2      $3      $4      $5      $6         $7
  template: "^(?:_DAYNAME_) (_MONTHNAME_) (_DAY_) (_H24_):(_MIN_):(_SEC_) (_OFFSET_) (_YEAR_)$",
  units: ["month", "day", "hour", "minute", "second", "offset", "year"]
});
var Fo = Ro;
const Ho = N, jo = new Ho({
  /* prettier-ignore */
  //           $1      $2  $3          $4
  template: "^(_YEAR_)(-?)(_MONTH_)\\2(_DAY_)$",
  units: ["year", null, "month", "day"]
});
var Go = jo;
const st = Ra, Yo = N, Vo = se, Bo = ja, Ko = Va, Wo = Ja, Zo = to, Xo = oo, Jo = so, qo = co, Qo = _o, el = ye, tl = bo, nl = vo, al = So, ol = Do, ll = Mo, rl = Io, sl = Uo, il = Fo, ul = Go, H = new st();
H.addFormats([
  rl,
  ll,
  // from most unambiguous and popular to least
  ul,
  qo,
  ol,
  nl,
  Qo,
  Zo,
  il,
  sl,
  Wo,
  al,
  Jo,
  tl,
  Xo,
  Bo,
  Ko
]);
H.Parser = st;
H.Format = Yo;
H.LocaleHelper = Vo;
H.defaultLocale = el;
H.fromString = Date.fromString = H.exportAsFunction();
H.fromAny = Date.fromAny = H.exportAsFunctionAny();
typeof window < "u" && (window.anyDateParser = H);
var be = H;
const cl = /* @__PURE__ */ et(be);
var dl = {
  __locale: "en",
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  abbreviated_days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  abbreviated_months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  am: "AM",
  pm: "PM"
}, fl = dl;
const Ce = /* @__PURE__ */ et(fl), ml = new RegExp(
  `(${Ce.abbreviated_months.map((e) => e.toLowerCase()).join("|")})`
), _l = new be.Format({
  matcher: /^'?(\d{2}|\d{4})$/,
  units: ["year"]
}), pl = new be.Format({
  matcher: /^(\d{1,2})\D*'?(\d{2}|\d{4})$/,
  units: ["month", "year"]
}), it = new be.Parser();
it.addFormats([_l, pl]);
function yl(e) {
  e = e.trim();
  let t = [], n;
  return n = it.attempt(e), n.invalid || t.push({
    year: n.year,
    month: n.month,
    day: n.day
  }), n = cl.attempt(e), n.invalid || t.push({
    year: n.year,
    month: n.month,
    day: n.day
  }), ml.test(e.toLowerCase()) || [...t].forEach((a) => {
    a.day <= 12 && a.day !== a.month && t.push({
      year: a.year,
      month: a.day,
      day: a.month
    });
  }), t;
}
const bl = "zoa__T01c0__input", gl = "zoa__Zrad1__label", hl = "zoa__-K9Da__grid", vl = "zoa__zCutL__inputContainer", Tl = "zoa__DBAOk__datePopup", $l = "zoa__e8GS9__popupSection", Sl = "zoa__tN5Fw__yearGrid", Al = "zoa__Z8UyZ__monthGrid", wl = "zoa__6Tknh__dayGrid", Dl = "zoa__oPUQ-__editing", El = "zoa__GtJv-__suggestion", Ol = {
  input: bl,
  label: gl,
  "label--right": "zoa__SxVfB__label--right",
  "label--below": "zoa__YLIdi__label--below",
  "label--above": "zoa__E7ufb__label--above",
  grid: hl,
  "grid--above": "zoa__KeVwr__grid--above",
  "grid--below": "zoa__KyL5-__grid--below",
  "grid--left": "zoa__Ytl98__grid--left",
  "grid--right": "zoa__KxP7T__grid--right",
  inputContainer: vl,
  datePopup: Tl,
  popupSection: $l,
  yearGrid: Sl,
  monthGrid: Al,
  dayGrid: wl,
  editing: Dl,
  suggestion: El
}, Cl = ["id"], Ml = ["for"], zl = ["placeholder", "id"], kl = ["onClick"], Nl = {
  __name: "DateAmbiguous",
  props: {
    modelValue: {},
    labelPosition: {
      type: String,
      default: "above"
    },
    label: {
      type: String,
      default: "Number"
    },
    placeholder: {
      type: String,
      default: null
    },
    delay: {
      type: Number,
      default: 200
    },
    min: {
      type: String,
      default: null
    },
    max: {
      type: String,
      default: null
    },
    step: {
      type: String,
      default: "any"
    }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { componentId: a, subId: o } = Y(), { valueChanged: r } = V(t, n.delay), l = E(!1), s = E(null), i = E(!1), u = E(null);
    Je(u, () => {
      l.value = !1;
    });
    const f = S(() => ({
      year: h.value,
      month: I.value,
      day: R.value
    })), b = S(() => xe(
      f.value.year,
      f.value.month,
      f.value.day
    ));
    function g() {
      s.value.value = b.value, i.value = !1;
    }
    const A = E([]);
    function C(_) {
      i.value = !0, A.value = yl(_.target.value);
    }
    const T = Ze(C, 200);
    function k(_) {
      c.value = _.year, I.value = _.month, R.value = _.day, A.value = [];
    }
    const c = E(null), p = S(() => {
      let _ = 11;
      return c.value && c.value >= 1e3 ? _ = Math.floor(c.value / 10) * 10 : c.value && c.value < 1e3 && (_ = c.value * 10), Array(10).fill(_).map((z, D) => z + D);
    }), h = S(() => {
      if (!c.value)
        return null;
      if (c.value >= 1e3)
        return c.value;
      let _ = 10 ** (4 - c.value.toString().length);
      return c.value * _;
    }), v = S(() => h.value % 100 === 0 ? h.value % 400 === 0 : h.value % 4 === 0);
    function M(_) {
      return _.toString().padEnd(4, "0");
    }
    function x(_) {
      c.value = _, R.value && R.value > B.value && (R.value = B.value);
    }
    const I = E(null), ge = E(Ce.abbreviated_months), B = S(() => [4, 6, 9, 11].includes(I.value) ? 30 : I.value === 2 ? v.value ? 29 : 28 : 31);
    function ct(_) {
      I.value = _, R.value && R.value > B.value && (R.value = B.value);
    }
    const R = E(null), dt = S(() => Array(B.value).fill(1).map((_, z) => z + 1));
    function ft(_) {
      R.value = _;
    }
    function xe(_, z, D) {
      const j = Ce.abbreviated_months[z - 1];
      return _ && z && D ? `${D} ${j} ${_}` : _ && z ? `${j} ${_}` : _ && D ? `${D} ??? ${_}` : z && D ? `${D} ${j}` : _ || (z ? j : D ? `day ${D}` : null);
    }
    return K(f, () => {
      g(), r(f.value);
    }), (_, z) => ($(), w("div", {
      class: d([_.$style.grid, _.$style[`grid--${e.labelPosition}`]]),
      id: m(a),
      ref_key: "container",
      ref: u
    }, [
      e.label && e.labelPosition !== "none" ? ($(), w("label", {
        key: 0,
        for: m(o)("date"),
        class: d([_.$style.label, _.$style[`label--${e.labelPosition}`]])
      }, O(e.label), 11, Ml)) : L("", !0),
      y("div", {
        class: d(_.$style.inputContainer)
      }, [
        y("input", {
          type: "text",
          placeholder: e.placeholder,
          id: m(o)("date"),
          class: d([_.$style.input, i.value ? _.$style.editing : ""]),
          onFocusin: z[0] || (z[0] = (D) => l.value = !0),
          ref_key: "displayBox",
          ref: s,
          onInput: z[1] || (z[1] = (...D) => m(T) && m(T)(...D))
        }, null, 42, zl),
        l.value ? ($(), w("div", {
          key: 0,
          class: d(_.$style.datePopup)
        }, [
          A.value.length > 0 ? ($(), w("div", {
            key: 0,
            class: d(_.$style.popupSection)
          }, [
            ($(!0), w(X, null, Q(A.value, (D) => ($(), w("span", {
              onClick: (j) => k(D),
              class: d(_.$style.suggestion)
            }, O(xe(D.year, D.month, D.day)), 11, kl))), 256))
          ], 2)) : L("", !0),
          y("div", {
            class: d(_.$style.popupSection)
          }, [
            G(fe, {
              label: "year",
              "label-position": "left",
              step: "1",
              placeholder: "1900",
              modelValue: c.value,
              "onUpdate:modelValue": z[2] || (z[2] = (D) => c.value = D),
              min: "0",
              max: "9999"
            }, null, 8, ["modelValue"]),
            y("div", {
              class: d(_.$style.yearGrid)
            }, [
              ($(!0), w(X, null, Q(p.value, (D) => ($(), he(ae, {
                size: "sm",
                onClick: (j) => x(D)
              }, {
                default: ve(() => [
                  ee(O(M(D)), 1)
                ]),
                _: 2
              }, 1032, ["onClick"]))), 256))
            ], 2)
          ], 2),
          y("div", {
            class: d(_.$style.popupSection)
          }, [
            G(fe, {
              label: "month",
              "label-position": "left",
              step: "1",
              placeholder: "01",
              modelValue: I.value,
              "onUpdate:modelValue": z[3] || (z[3] = (D) => I.value = D),
              min: "1",
              max: "12"
            }, null, 8, ["modelValue"]),
            y("div", {
              class: d(_.$style.monthGrid)
            }, [
              ($(!0), w(X, null, Q(ge.value, (D, j) => ($(), he(ae, {
                size: "sm",
                onClick: (Pr) => ct(j + 1)
              }, {
                default: ve(() => [
                  ee(O(D), 1)
                ]),
                _: 2
              }, 1032, ["onClick"]))), 256))
            ], 2)
          ], 2),
          y("div", {
            class: d(_.$style.popupSection)
          }, [
            G(fe, {
              label: "day",
              "label-position": "left",
              step: "1",
              placeholder: "01",
              modelValue: R.value,
              "onUpdate:modelValue": z[4] || (z[4] = (D) => R.value = D),
              min: "1",
              max: B.value
            }, null, 8, ["modelValue", "max"]),
            y("div", {
              class: d(_.$style.dayGrid)
            }, [
              ($(!0), w(X, null, Q(dt.value, (D) => ($(), he(ae, {
                size: "sm",
                onClick: (j) => ft(D)
              }, {
                default: ve(() => [
                  ee(O(D), 1)
                ]),
                _: 2
              }, 1032, ["onClick"]))), 256))
            ], 2)
          ], 2)
        ], 2)) : L("", !0)
      ], 2)
    ], 10, Cl));
  }
}, Il = {
  $style: Ol
}, Pl = /* @__PURE__ */ U(Nl, [["__cssModules", Il]]);
function Me(e, t) {
  return (e - t.min) / (t.max - t.min);
}
function ze(e, t, n) {
  try {
    const a = e.clientWidth, o = 20, r = 2, l = n ? n.clientWidth : 0, s = a / 2, f = (t * a - s) / s * (o / 2) - r, b = f + l / 2, g = f / a;
    return {
      handle: (t - g) * 100,
      label: (t - b / a) * 100
    };
  } catch {
    const a = t * 100;
    return { handle: a, label: a };
  }
}
function ke(e) {
  return e.placeholder || (e.max - e.min) / 2 - (e.max - e.min) / 2 % e.step;
}
const Ll = "zoa__wKiUj__input", Ul = "zoa__wdDOR__label", xl = "zoa__NU5xO__grid", Rl = "zoa__eEu2G__trackLabel", Fl = "zoa__3j2fO__wrapper", Hl = "zoa__faDBS__slider", jl = "zoa__pxPuS__track", Gl = {
  input: Ll,
  label: Ul,
  "label--right": "zoa__-ofKG__label--right",
  "label--below": "zoa__0HdYJ__label--below",
  "label--above": "zoa__PM4XH__label--above",
  grid: xl,
  "grid--above": "zoa__mmKWI__grid--above",
  "grid--below": "zoa__6m720__grid--below",
  "grid--left": "zoa__y6mEj__grid--left",
  "grid--right": "zoa__-c8cX__grid--right",
  trackLabel: Rl,
  wrapper: Fl,
  slider: Hl,
  track: jl,
  "track--active": "zoa__q61Yj__track--active"
}, Yl = ["id"], Vl = ["for"], Bl = ["min", "max", "step", "id"], Kl = {
  __name: "Slider",
  props: {
    modelValue: {},
    labelPosition: {
      type: String,
      default: "above"
    },
    label: {
      type: String,
      default: "Slider"
    },
    delay: {
      type: Number,
      default: 200
    },
    placeholder: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { componentId: a, subId: o } = Y(), { value: r } = V(t, n), l = E(null), s = S(() => Me(r.value, n)), i = S(() => ze(l.value, s.value));
    return r.value = ke(n), (u, f) => ($(), w("div", {
      class: d([u.$style.grid, u.$style[`grid--${e.labelPosition}`]]),
      id: m(a)
    }, [
      e.label && e.labelPosition !== "none" ? ($(), w("label", {
        key: 0,
        for: m(o)("slider"),
        class: d([u.$style.label, u.$style[`label--${e.labelPosition}`]])
      }, O(e.label), 11, Vl)) : L("", !0),
      y("div", {
        class: d(u.$style.wrapper)
      }, [
        y("div", {
          class: d(u.$style.slider)
        }, [
          y("span", {
            class: d(u.$style.track)
          }, null, 2),
          y("span", {
            class: d([u.$style.track, u.$style["track--active"]]),
            style: de({ right: `${100 - i.value.handle}%` })
          }, null, 6),
          Z(y("input", {
            type: "range",
            min: e.min,
            max: e.max,
            step: e.step,
            id: m(o)("slider"),
            class: d(u.$style.input),
            "onUpdate:modelValue": f[0] || (f[0] = (b) => te(r) ? r.value = b : null),
            ref_key: "slider",
            ref: l
          }, null, 10, Bl), [
            [q, m(r)]
          ])
        ], 2),
        y("span", {
          class: d(u.$style.trackLabel)
        }, O(m(r)), 3)
      ], 2)
    ], 10, Yl));
  }
}, Wl = {
  $style: Gl
}, Zl = /* @__PURE__ */ U(Kl, [["__cssModules", Wl]]), Xl = "zoa__O86-F__input", Jl = "zoa__0YsN9__label", ql = "zoa__SiTNx__grid", Ql = "zoa__axrcz__trackLabel", er = "zoa__xvNqS__wrapper", tr = "zoa__sPYgx__slider", nr = "zoa__9vB2G__track", ar = "zoa__Zik-k__valueLabel", or = {
  input: Xl,
  label: Jl,
  "label--right": "zoa__pjeV2__label--right",
  "label--below": "zoa__12bIu__label--below",
  "label--above": "zoa__sjy2f__label--above",
  grid: ql,
  "grid--above": "zoa__8N5XC__grid--above",
  "grid--below": "zoa__X9vRI__grid--below",
  "grid--left": "zoa__unXPL__grid--left",
  "grid--right": "zoa__WXVvK__grid--right",
  trackLabel: Ql,
  wrapper: er,
  slider: tr,
  track: nr,
  "track--active": "zoa__Tgbve__track--active",
  valueLabel: ar
}, lr = ["id"], rr = ["for"], sr = ["for"], ir = ["min", "max", "step", "id"], ur = ["min", "max", "step", "id"], cr = {
  __name: "RangeSlider",
  props: {
    modelValue: {},
    labelPosition: {
      type: String,
      default: "above"
    },
    label: {
      type: String,
      default: "Range"
    },
    delay: {
      type: Number,
      default: 200
    },
    placeholder: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    }
  },
  emits: ["change", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { componentId: a, subId: o } = Y(), { valueChanged: r } = V(t, n), l = E(null), s = E(null), i = E(null), u = E(null), f = E(null), b = E(null), g = S(() => Math.max(
      Number(b.value) - Number(n.step),
      Number(n.min)
    )), A = S(() => Math.min(
      Number(f.value) + Number(n.step),
      Number(n.max)
    )), C = S(() => {
      const h = Math.min(f.value, g.value), v = Math.max(b.value, A.value);
      return [h, v];
    }), T = S(() => Me(f.value, n)), k = S(() => Me(b.value, n)), c = S(
      () => ze(l.value, T.value, i.value)
    ), p = S(
      () => ze(s.value, k.value, u.value)
    );
    return f.value = ke(n) - n.step, b.value = ke(n) + n.step, K(f, (h) => {
      Number(h) >= Number(b.value) && (f.value = g.value);
    }), K(b, (h) => {
      Number(h) <= Number(f.value) && (b.value = A.value);
    }), K(C, () => {
      r(C.value);
    }), (h, v) => ($(), w("div", {
      class: d([h.$style.grid, h.$style[`grid--${e.labelPosition}`]]),
      id: m(a)
    }, [
      e.label && e.labelPosition !== "none" ? ($(), w("label", {
        key: 0,
        class: d([h.$style.label, h.$style[`label--${e.labelPosition}`]])
      }, O(e.label), 3)) : L("", !0),
      y("div", {
        class: d(h.$style.wrapper)
      }, [
        y("div", {
          class: d(h.$style.slider)
        }, [
          y("span", {
            class: d(h.$style.track)
          }, null, 2),
          y("span", {
            class: d([h.$style.track, h.$style["track--active"]]),
            style: de({
              left: `${c.value.handle}%`,
              right: `${100 - p.value.handle}%`
            })
          }, null, 6),
          y("label", {
            for: m(o)("range-slider-lower"),
            class: d(h.$style.valueLabel),
            style: de({ left: `${c.value.label}%` }),
            ref_key: "labelLower",
            ref: i
          }, O(f.value), 15, rr),
          y("label", {
            for: m(o)("range-slider-upper"),
            class: d(h.$style.valueLabel),
            style: de({ left: `${p.value.label}%` }),
            ref_key: "labelUpper",
            ref: u
          }, O(b.value), 15, sr),
          Z(y("input", {
            type: "range",
            min: e.min,
            max: e.max,
            step: e.step,
            id: m(o)("range-slider-lower"),
            class: d(h.$style.input),
            "onUpdate:modelValue": v[0] || (v[0] = (M) => f.value = M),
            ref_key: "sliderLower",
            ref: l
          }, null, 10, ir), [
            [q, f.value]
          ]),
          Z(y("input", {
            type: "range",
            min: e.min,
            max: e.max,
            step: e.step,
            id: m(o)("range-slider-upper"),
            class: d(h.$style.input),
            "onUpdate:modelValue": v[1] || (v[1] = (M) => b.value = M),
            ref_key: "sliderUpper",
            ref: s
          }, null, 10, ur), [
            [q, b.value]
          ])
        ], 2),
        y("span", {
          class: d(h.$style.trackLabel)
        }, O(b.value - f.value), 3)
      ], 2)
    ], 10, lr));
  }
}, dr = {
  $style: or
}, fr = /* @__PURE__ */ U(cr, [["__cssModules", dr]]);
function ut(e) {
  return { icon: S(() => {
    switch (e.kind) {
      case "info":
        return "fa-circle-info";
      case "warning":
        return "fa-circle-exclamation";
      case "error":
        return "fa-circle-xmark";
      case "success":
        return "fa-circle-check";
      default:
        return "fa-circle-question";
    }
  }) };
}
const mr = "zoa__VAeTu__main", _r = "zoa__fVs2o__container", pr = "zoa__THVXY__header", yr = "zoa__paVgB__icon", br = {
  main: mr,
  container: _r,
  header: pr,
  icon: yr,
  "kind--info": "zoa__ITcbz__kind--info",
  "kind--warning": "zoa__ePWkZ__kind--warning",
  "kind--error": "zoa__uCNxg__kind--error",
  "kind--success": "zoa__QTxj6__kind--success"
}, gr = {
  __name: "Flash",
  props: {
    kind: {
      type: String,
      default: "info"
    },
    header: {
      type: String,
      default: "Here is an informational message."
    },
    message: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum."
    }
  },
  setup(e) {
    const t = e, { icon: n } = ut(t);
    return (a, o) => ($(), w("div", {
      class: d([a.$style.main, a.$style.container, a.$style[`kind--${e.kind}`]])
    }, [
      y("div", {
        class: d(a.$style.header)
      }, [
        G(m(le), {
          icon: ["fa-solid", m(n)],
          class: d(a.$style.icon)
        }, null, 8, ["icon", "class"]),
        y("h2", null, O(e.header), 1)
      ], 2),
      y("div", {
        class: d(a.$style.content)
      }, [
        Ne(a.$slots, "default", {}, () => [
          ee(O(e.message), 1)
        ])
      ], 2)
    ], 2));
  }
}, hr = {
  $style: br
}, vr = /* @__PURE__ */ U(gr, [["__cssModules", hr]]), Tr = "zoa__-6BJv__main", $r = "zoa__JzwYn__container", Sr = "zoa__Fn9SR__header", Ar = "zoa__G4zlh__icon", wr = "zoa__KdMNq__form", Dr = "zoa__PyVzA__close", Er = "zoa__YKx2f__content", Or = {
  main: Tr,
  container: $r,
  header: Sr,
  icon: Ar,
  "kind--info": "zoa__dJXHY__kind--info",
  "kind--warning": "zoa__GLN89__kind--warning",
  "kind--error": "zoa__3HPxn__kind--error",
  "kind--success": "zoa__O1vse__kind--success",
  form: wr,
  close: Dr,
  content: Er
}, Cr = {
  __name: "Modal",
  props: {
    kind: {
      type: String,
      default: "info"
    },
    header: {
      type: String,
      default: "Here is an informational message."
    },
    message: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum."
    },
    buttonArgs: {
      type: Object,
      default: () => ({
        label: "Open modal"
      })
    }
  },
  emits: ["opened", "closed"],
  setup(e, { emit: t }) {
    const n = e, { icon: a } = ut(n), o = E(null);
    function r() {
      o.value.show(), t("opened");
    }
    return (l, s) => ($(), w(X, null, [
      G(m(ae), bt(e.buttonArgs, { onClick: r }), null, 16),
      y("dialog", {
        ref_key: "modal",
        ref: o,
        class: d([l.$style.main, l.$style[`kind--${e.kind}`]])
      }, [
        y("div", {
          class: d(l.$style.container)
        }, [
          y("form", {
            method: "dialog",
            class: d(l.$style.form),
            onSubmit: s[0] || (s[0] = (i) => t("closed"))
          }, [
            y("button", {
              class: d(l.$style.close)
            }, [
              G(m(le), { icon: "fa-solid fa-xmark" })
            ], 2)
          ], 34),
          y("div", {
            class: d(l.$style.header)
          }, [
            G(m(le), {
              icon: ["fa-solid", m(a)],
              class: d(l.$style.icon)
            }, null, 8, ["icon", "class"]),
            y("h2", null, O(e.header), 1)
          ], 2),
          y("div", {
            class: d(l.$style.content)
          }, [
            Ne(l.$slots, "default", {}, () => [
              ee(O(e.message), 1)
            ])
          ], 2)
        ], 2)
      ], 2)
    ], 64));
  }
}, Mr = {
  $style: Or
}, zr = /* @__PURE__ */ U(Cr, [["__cssModules", Mr]]), kr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ZoaAutocompleteTextbox: sn,
  ZoaButton: ae,
  ZoaCheckbox: Bn,
  ZoaDateAmbiguous: Pl,
  ZoaDateSimple: da,
  ZoaDropdown: In,
  ZoaFlash: vr,
  ZoaModal: zr,
  ZoaNumber: fe,
  ZoaRangeSlider: fr,
  ZoaSlider: Zl,
  ZoaTextbox: Lt
}, Symbol.toStringTag, { value: "Module" })), Nr = new RegExp("[A-Z]+(?![a-z])|[A-Z]", "g");
function Ir(e) {
  return e.replace(Nr, (t, n) => (n ? "-" : "") + t.toLowerCase());
}
const Hr = {
  install(e, t) {
    Object.entries(kr).forEach((n) => {
      const a = Ir(n[0]);
      e.component(a, n[1]);
    });
  }
};
export {
  Hr as Zoa,
  sn as ZoaAutocompleteTextbox,
  ae as ZoaButton,
  Bn as ZoaCheckbox,
  Pl as ZoaDateAmbiguous,
  da as ZoaDateSimple,
  In as ZoaDropdown,
  vr as ZoaFlash,
  zr as ZoaModal,
  fe as ZoaNumber,
  fr as ZoaRangeSlider,
  Zl as ZoaSlider,
  Lt as ZoaTextbox
};
