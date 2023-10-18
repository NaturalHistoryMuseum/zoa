import { openBlock as g, createElementBlock as S, normalizeClass as c, renderSlot as xe, createTextVNode as ie, toDisplayString as M, ref as R, computed as O, unref as y, createCommentVNode as F, withDirectives as ee, createElementVNode as $, isRef as te, vModelText as de, watch as re, customRef as $t, getCurrentScope as Nt, onScopeDispose as It, Fragment as X, renderList as Q, defineComponent as Be, h as ot, vModelSelect as wt, createVNode as x, vModelCheckbox as Rt, isProxy as Dt, toRaw as kt, vShow as We, withKeys as Mt, createBlock as we, withCtx as Re, normalizeStyle as Ke, mergeProps as Ct } from "vue";
import { parse as Se, icon as Ut, config as at, text as zt, library as Pt } from "@fortawesome/fontawesome-svg-core";
import { faCircleXmark as Ht, faXmark as Lt, faCircleInfo as xt, faCircleExclamation as Bt, faCircleCheck as Gt, faCircleQuestion as Ft, faCheck as Vt, faCaretDown as jt } from "@fortawesome/free-solid-svg-icons";
const Yt = "zoa__7U7z2__main", Wt = {
  main: Yt,
  "kind--normal": "zoa__wSMFS__kind--normal",
  "kind--primary": "zoa__MVt5D__kind--primary",
  "size--sm": "zoa__Fg-Hw__size--sm",
  "size--md": "zoa__We5yW__size--md"
}, V = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, a] of t)
    n[o] = a;
  return n;
}, Kt = {
  __name: "Button",
  props: {
    /**
     * The text for the button; overridden by the default slot.
     */
    label: {
      type: String,
      default: "Button"
    },
    /**
     * The appearance class of the button.
     * @values normal, primary
     */
    kind: {
      type: String,
      default: "normal"
    },
    /**
     * The size class of the button.
     * @values sm, md
     */
    size: {
      type: String,
      default: "md"
    }
  },
  setup(e) {
    return (t, n) => (g(), S("button", {
      class: c([t.$style.main, t.$style[`kind--${e.kind}`], t.$style[`size--${e.size}`]])
    }, [
      xe(t.$slots, "default", {}, () => [
        ie(M(e.label), 1)
      ])
    ], 2));
  }
}, Xt = {
  $style: Wt
}, fe = /* @__PURE__ */ V(Kt, [["__cssModules", Xt]]);
let Zt = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
function Z() {
  const e = R(Zt(6));
  function t(n) {
    return `${e.value}__${n}`;
  }
  return { componentId: e, subId: t };
}
const { now: Xe } = Date, Ge = (e, t = 1, n) => {
  t = Math.max(1, t);
  const o = (n == null ? void 0 : n.leading) ?? !1, a = (n == null ? void 0 : n.trailing) ?? !0, l = Math.max((n == null ? void 0 : n.maxWait) ?? 1 / 0, t);
  let r, s, i = 0, u = 0;
  const d = () => {
    const A = Xe(), f = A - i, U = A - u, _ = f >= t || U >= l;
    return [A, _];
  }, h = (A) => {
    if (u = A, !r)
      return;
    const f = r;
    r = void 0, e.apply(void 0, f);
  }, p = () => {
    v(0);
  }, N = () => {
    s && (p(), h(Xe()));
  }, I = (A) => {
    if (u = A, o)
      return h(A);
  }, E = (A) => {
    if (a && r)
      return h(A);
    r = void 0;
  }, D = () => {
    s = void 0;
    const [A, f] = d();
    return f ? E(A) : b(A);
  }, b = (A) => {
    const f = A - i, U = A - u, _ = t - f, T = l - U, k = Math.min(_, T);
    return v(k);
  }, v = (A) => {
    s && clearTimeout(s), !(A <= 0) && (s = setTimeout(D, A));
  }, C = (...A) => {
    const [f, U] = d(), _ = !!s;
    if (r = A, i = f, (U || !s) && v(t), U)
      return _ ? h(f) : I(f);
  };
  return C.cancel = p, C.flush = N, C;
};
function J(e, t) {
  let n;
  try {
    n = parseInt(t.delay) || 0;
  } catch {
    n = 0;
  }
  const o = R(null);
  function a(i) {
    e("change", i);
  }
  const l = Ge(a, n);
  function r(i) {
    e("update:modelValue", i), o.value = i, l(i);
  }
  const s = O({
    get() {
      return t.modelValue === void 0 ? o.value : t.modelValue;
    },
    set(i) {
      r(i);
    }
  });
  return { emitChange: l, valueChanged: r, value: s };
}
const Jt = "zoa__qbf-G__input", qt = "zoa__SIpST__label", Qt = "zoa__wOUkj__grid", en = {
  input: Jt,
  label: qt,
  "label--right": "zoa__2sgZ2__label--right",
  "label--below": "zoa__FvTDX__label--below",
  "label--above": "zoa__CxNSj__label--above",
  grid: Qt,
  "grid--above": "zoa__tVRUr__grid--above",
  "grid--below": "zoa__pLLs-__grid--below",
  "grid--left": "zoa__0xief__grid--left",
  "grid--right": "zoa__GFcsT__grid--right"
}, tn = ["id"], nn = ["for"], on = ["placeholder", "id"], an = {
  __name: "Textbox",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: String
    },
    /**
     * Text for the input label.
     */
    label: {
      type: String,
      default: "Text"
    },
    /**
     * Position of the input label (or none).
     * @values left, right, above, below, none
     */
    labelPosition: {
      type: String,
      default: "above"
    },
    /**
     * Debounce delay for the `change` event, in ms.
     */
    delay: {
      type: Number,
      default: 200
    },
    /**
     * Text to display in the blank input.
     */
    placeholder: {
      type: [String, void 0],
      default: null
    }
  },
  emits: [
    /**
     * Emitted when the value changes; debounced if the delay prop is > 0.
     * @arg {string} newValue the new value
     */
    "change",
    /**
     * @ignore
     */
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const n = e, { componentId: o, subId: a } = Z(), { value: l } = J(t, n);
    return (r, s) => (g(), S("div", {
      class: c([r.$style.grid, r.$style[`grid--${e.labelPosition}`]]),
      id: y(o)
    }, [
      e.label && e.labelPosition !== "none" ? (g(), S("label", {
        key: 0,
        for: y(a)("textbox"),
        class: c([r.$style.label, r.$style[`label--${e.labelPosition}`]])
      }, M(e.label), 11, nn)) : F("", !0),
      ee($("input", {
        type: "text",
        placeholder: e.placeholder,
        id: y(a)("textbox"),
        class: c(r.$style.input),
        "onUpdate:modelValue": s[0] || (s[0] = (i) => te(l) ? l.value = i : null)
      }, null, 10, on), [
        [de, y(l)]
      ])
    ], 10, tn));
  }
}, ln = {
  $style: en
}, rn = /* @__PURE__ */ V(an, [["__cssModules", ln]]);
function sn(e, t) {
  let n, o, a;
  const l = R(!0), r = () => {
    l.value = !0, a();
  };
  re(e, r, { flush: "sync" });
  const s = typeof t == "function" ? t : t.get, i = typeof t == "function" ? void 0 : t.set, u = $t((d, h) => (o = d, a = h, {
    get() {
      return l.value && (n = s(), l.value = !1), o(), n;
    },
    set(p) {
      i == null || i(p);
    }
  }));
  return Object.isExtensible(u) && (u.trigger = r), u;
}
function un(e) {
  return Nt() ? (It(e), !0) : !1;
}
function Fe(e) {
  return typeof e == "function" ? e() : y(e);
}
const lt = typeof window < "u" && typeof document < "u", cn = Object.prototype.toString, dn = (e) => cn.call(e) === "[object Object]", Ce = () => {
}, _n = /* @__PURE__ */ fn();
function fn() {
  var e;
  return lt && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function le(e) {
  var t;
  const n = Fe(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Oe = lt ? window : void 0;
function oe(...e) {
  let t, n, o, a;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, a] = e, t = Oe) : [t, n, o, a] = e, !t)
    return Ce;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const l = [], r = () => {
    l.forEach((d) => d()), l.length = 0;
  }, s = (d, h, p, N) => (d.addEventListener(h, p, N), () => d.removeEventListener(h, p, N)), i = re(
    () => [le(t), Fe(a)],
    ([d, h]) => {
      if (r(), !d)
        return;
      const p = dn(h) ? { ...h } : h;
      l.push(
        ...n.flatMap((N) => o.map((I) => s(d, N, I, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    i(), r();
  };
  return un(u), u;
}
let Ze = !1;
function rt(e, t, n = {}) {
  const { window: o = Oe, ignore: a = [], capture: l = !0, detectIframe: r = !1 } = n;
  if (!o)
    return;
  _n && !Ze && (Ze = !0, Array.from(o.document.body.children).forEach((p) => p.addEventListener("click", Ce)), o.document.documentElement.addEventListener("click", Ce));
  let s = !0;
  const i = (p) => a.some((N) => {
    if (typeof N == "string")
      return Array.from(o.document.querySelectorAll(N)).some((I) => I === p.target || p.composedPath().includes(I));
    {
      const I = le(N);
      return I && (p.target === I || p.composedPath().includes(I));
    }
  }), d = [
    oe(o, "click", (p) => {
      const N = le(e);
      if (!(!N || N === p.target || p.composedPath().includes(N))) {
        if (p.detail === 0 && (s = !i(p)), !s) {
          s = !0;
          return;
        }
        t(p);
      }
    }, { passive: !0, capture: l }),
    oe(o, "pointerdown", (p) => {
      const N = le(e);
      N && (s = !p.composedPath().includes(N) && !i(p));
    }, { passive: !0 }),
    r && oe(o, "blur", (p) => {
      setTimeout(() => {
        var N;
        const I = le(e);
        ((N = o.document.activeElement) == null ? void 0 : N.tagName) === "IFRAME" && !(I != null && I.contains(o.document.activeElement)) && t(p);
      }, 0);
    })
  ].filter(Boolean);
  return () => d.forEach((p) => p());
}
function mn(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function B(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: a = Oe,
    eventName: l = "keydown",
    passive: r = !1,
    dedupe: s = !1
  } = o, i = mn(t);
  return oe(a, l, (d) => {
    d.repeat && Fe(s) || i(d) && n(d);
  }, r);
}
function pn(e = {}) {
  var t;
  const {
    window: n = Oe,
    deep: o = !0
  } = e, a = (t = e.document) != null ? t : n == null ? void 0 : n.document, l = () => {
    var s;
    let i = a == null ? void 0 : a.activeElement;
    if (o)
      for (; i != null && i.shadowRoot; )
        i = (s = i == null ? void 0 : i.shadowRoot) == null ? void 0 : s.activeElement;
    return i;
  }, r = sn(
    () => null,
    () => l()
  );
  return n && (oe(n, "blur", (s) => {
    s.relatedTarget === null && r.trigger();
  }, !0), oe(n, "focus", r.trigger, !0)), r;
}
function ue(e, t = {}) {
  const { initialValue: n = !1, focusVisible: o = !1 } = t, a = R(!1), l = O(() => le(e));
  oe(l, "focus", (s) => {
    var i, u;
    (!o || (u = (i = s.target).matches) != null && u.call(i, ":focus-visible")) && (a.value = !0);
  }), oe(l, "blur", () => a.value = !1);
  const r = O({
    get: () => a.value,
    set(s) {
      var i, u;
      !s && a.value ? (i = l.value) == null || i.blur() : s && !a.value && ((u = l.value) == null || u.focus());
    }
  });
  return re(
    l,
    () => {
      r.value = n;
    },
    { immediate: !0, flush: "post" }
  ), { focused: r };
}
function ne(e, t = {}) {
  const n = pn(t), o = O(() => le(e));
  return { focused: O(() => o.value && n.value ? o.value.contains(n.value) : !1) };
}
const bn = "zoa__u1jpB__input", hn = "zoa__K4jZT__label", yn = "zoa__wc4xP__grid", vn = "zoa__0mMOV__wrapper", gn = "zoa__FvT7h__options", Tn = "zoa__hqIBJ__option", En = "zoa__V565X__noOptions", Sn = {
  input: bn,
  label: hn,
  "label--right": "zoa__CsI39__label--right",
  "label--below": "zoa__OyBO0__label--below",
  "label--above": "zoa__rnMm-__label--above",
  grid: yn,
  "grid--above": "zoa__lZr2b__grid--above",
  "grid--below": "zoa__s1ZFN__grid--below",
  "grid--left": "zoa__Imuk0__grid--left",
  "grid--right": "zoa__2DZpe__grid--right",
  wrapper: vn,
  options: gn,
  option: Tn,
  noOptions: En
}, An = ["id"], On = ["for"], $n = ["placeholder", "id"], Nn = { key: 0 }, In = ["onClick"], wn = ["value"], Rn = {
  __name: "AutocompleteTextbox",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: String
    },
    /**
     * Text for the input label.
     */
    label: {
      type: String,
      default: "Autocomplete"
    },
    /**
     * Position of the input label (or none).
     * @values left, right, above, below, none
     */
    labelPosition: {
      type: String,
      default: "above"
    },
    /**
     * Debounce delay for the `change` event, in ms.
     */
    delay: {
      type: Number,
      default: 200
    },
    /**
     * Text to display in the blank input.
     */
    placeholder: {
      type: [String, void 0],
      default: null
    },
    /**
     * The options available to select. Each item can be a string, or an object with `label` and `value` keys.
     */
    options: {
      type: Array
    }
  },
  emits: [
    /**
     * Emitted when the value changes; debounced if the delay prop is > 0.
     * @arg {string} newValue the new value
     */
    "change",
    /**
     * @ignore
     */
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const n = e, { componentId: o, subId: a } = Z(), { value: l } = J(t, n), r = O(() => {
      let E = [];
      return n.options.forEach((D) => {
        typeof D == "object" ? E.push({ label: D.label, value: D.value }) : E.push({ label: D, value: D });
      }), E;
    }), s = R(null), i = R(null), u = R(null), d = R(!1), h = ue(i), p = ne(u);
    function N() {
      try {
        s.value.blur(), i.value.blur(), u.value.blur();
      } catch {
      }
      d.value = !1;
    }
    rt(s, () => {
      d.value = !1;
    }), B("ArrowDown", () => {
      if (r.value.length !== 0) {
        if (h.focused.value)
          u.value.children[0].children[0].focus();
        else if (p.focused.value) {
          const E = u.value.querySelector("li:focus");
          !E || !E.nextElementSibling ? u.value.children[0].children[0].focus() : E.nextElementSibling.focus();
        }
      }
    }), B("ArrowUp", () => {
      if (r.value.length !== 0 && p.focused.value) {
        const E = u.value.querySelector("li:focus");
        !E || !E.previousElementSibling ? i.value.focus() : E.previousElementSibling.focus();
      }
    }), B("Enter", () => {
      if (p.focused.value) {
        const E = u.value.querySelector("li:focus");
        E && I(E.querySelector("input").value);
      }
      N();
    });
    function I(E) {
      l.value = E, N();
    }
    return (E, D) => (g(), S("div", {
      class: c([E.$style.grid, E.$style[`grid--${e.labelPosition}`]]),
      id: y(o)
    }, [
      e.label && e.labelPosition !== "none" ? (g(), S("label", {
        key: 0,
        for: y(a)("textbox"),
        class: c([E.$style.label, E.$style[`label--${e.labelPosition}`]])
      }, M(e.label), 11, On)) : F("", !0),
      $("div", {
        class: c(E.$style.wrapper),
        ref_key: "container",
        ref: s
      }, [
        ee($("input", {
          type: "text",
          placeholder: e.placeholder,
          id: y(a)("textbox"),
          class: c(E.$style.input),
          "onUpdate:modelValue": D[0] || (D[0] = (b) => te(l) ? l.value = b : null),
          onFocusin: D[1] || (D[1] = (b) => d.value = !0),
          ref_key: "textbox",
          ref: i
        }, null, 42, $n), [
          [de, y(l)]
        ]),
        d.value ? (g(), S("div", {
          key: 0,
          class: c(E.$style.options),
          ref_key: "dropdown",
          ref: u
        }, [
          r.value.length > 0 ? (g(), S("ul", Nn, [
            (g(!0), S(X, null, Q(r.value, (b) => (g(), S("li", {
              class: c(E.$style.option),
              onClick: (v) => I(b.value),
              tabindex: "0"
            }, [
              $("span", null, M(b.label), 1),
              $("input", {
                type: "hidden",
                value: b.value
              }, null, 8, wn)
            ], 10, In))), 256))
          ])) : (g(), S("div", {
            key: 1,
            class: c(E.$style.noOptions)
          }, "No options found", 2))
        ], 2)) : F("", !0)
      ], 2)
    ], 10, An));
  }
}, Dn = {
  $style: Sn
}, kn = /* @__PURE__ */ V(Rn, [["__cssModules", Dn]]);
function Je(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t && (o = o.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, o);
  }
  return n;
}
function Y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Je(Object(n), !0).forEach(function(o) {
      G(e, o, n[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Je(Object(n)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o));
    });
  }
  return e;
}
function Ae(e) {
  "@babel/helpers - typeof";
  return Ae = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ae(e);
}
function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Mn(e, t) {
  if (e == null)
    return {};
  var n = {}, o = Object.keys(e), a, l;
  for (l = 0; l < o.length; l++)
    a = o[l], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Cn(e, t) {
  if (e == null)
    return {};
  var n = Mn(e, t), o, a;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (a = 0; a < l.length; a++)
      o = l[a], !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (n[o] = e[o]);
  }
  return n;
}
function Ue(e) {
  return Un(e) || zn(e) || Pn(e) || Hn();
}
function Un(e) {
  if (Array.isArray(e))
    return ze(e);
}
function zn(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Pn(e, t) {
  if (e) {
    if (typeof e == "string")
      return ze(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ze(e, t);
  }
}
function ze(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, o = new Array(t); n < t; n++)
    o[n] = e[n];
  return o;
}
function Hn() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ln = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, st = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(b, v, C) {
      if (!u(v) || h(v) || p(v) || N(v) || i(v))
        return v;
      var A, f = 0, U = 0;
      if (d(v))
        for (A = [], U = v.length; f < U; f++)
          A.push(n(b, v[f], C));
      else {
        A = {};
        for (var _ in v)
          Object.prototype.hasOwnProperty.call(v, _) && (A[b(_, C)] = n(b, v[_], C));
      }
      return A;
    }, o = function(b, v) {
      v = v || {};
      var C = v.separator || "_", A = v.split || /(?=[A-Z])/;
      return b.split(A).join(C);
    }, a = function(b) {
      return I(b) ? b : (b = b.replace(/[\-_\s]+(.)?/g, function(v, C) {
        return C ? C.toUpperCase() : "";
      }), b.substr(0, 1).toLowerCase() + b.substr(1));
    }, l = function(b) {
      var v = a(b);
      return v.substr(0, 1).toUpperCase() + v.substr(1);
    }, r = function(b, v) {
      return o(b, v).toLowerCase();
    }, s = Object.prototype.toString, i = function(b) {
      return typeof b == "function";
    }, u = function(b) {
      return b === Object(b);
    }, d = function(b) {
      return s.call(b) == "[object Array]";
    }, h = function(b) {
      return s.call(b) == "[object Date]";
    }, p = function(b) {
      return s.call(b) == "[object RegExp]";
    }, N = function(b) {
      return s.call(b) == "[object Boolean]";
    }, I = function(b) {
      return b = b - 0, b === b;
    }, E = function(b, v) {
      var C = v && "process" in v ? v.process : v;
      return typeof C != "function" ? b : function(A, f) {
        return C(A, b, f);
      };
    }, D = {
      camelize: a,
      decamelize: r,
      pascalize: l,
      depascalize: r,
      camelizeKeys: function(b, v) {
        return n(E(a, v), b);
      },
      decamelizeKeys: function(b, v) {
        return n(E(r, v), b, v);
      },
      pascalizeKeys: function(b, v) {
        return n(E(l, v), b);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = D : t.humps = D;
  })(Ln);
})(st);
var xn = st.exports, Bn = ["class", "style"];
function Gn(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var o = n.indexOf(":"), a = xn.camelize(n.slice(0, o)), l = n.slice(o + 1).trim();
    return t[a] = l, t;
  }, {});
}
function Fn(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function Ve(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var o = (e.children || []).map(function(i) {
    return Ve(i);
  }), a = Object.keys(e.attributes || {}).reduce(function(i, u) {
    var d = e.attributes[u];
    switch (u) {
      case "class":
        i.class = Fn(d);
        break;
      case "style":
        i.style = Gn(d);
        break;
      default:
        i.attrs[u] = d;
    }
    return i;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var l = n.style, r = l === void 0 ? {} : l, s = Cn(n, Bn);
  return ot(e.tag, Y(Y(Y({}, t), {}, {
    class: a.class,
    style: Y(Y({}, a.style), r)
  }, a.attrs), s), o);
}
var it = !1;
try {
  it = !0;
} catch {
}
function Vn() {
  if (!it && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function me(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? G({}, e, t) : {};
}
function jn(e) {
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
  }, G(t, "fa-".concat(e.size), e.size !== null), G(t, "fa-rotate-".concat(e.rotation), e.rotation !== null), G(t, "fa-pull-".concat(e.pull), e.pull !== null), G(t, "fa-swap-opacity", e.swapOpacity), G(t, "fa-bounce", e.bounce), G(t, "fa-shake", e.shake), G(t, "fa-beat", e.beat), G(t, "fa-fade", e.fade), G(t, "fa-beat-fade", e.beatFade), G(t, "fa-flash", e.flash), G(t, "fa-spin-pulse", e.spinPulse), G(t, "fa-spin-reverse", e.spinReverse), t);
  return Object.keys(n).map(function(o) {
    return n[o] ? o : null;
  }).filter(function(o) {
    return o;
  });
}
function qe(e) {
  if (e && Ae(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Se.icon)
    return Se.icon(e);
  if (e === null)
    return null;
  if (Ae(e) === "object" && e.prefix && e.iconName)
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
var ce = Be({
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
    var o = n.attrs, a = O(function() {
      return qe(t.icon);
    }), l = O(function() {
      return me("classes", jn(t));
    }), r = O(function() {
      return me("transform", typeof t.transform == "string" ? Se.transform(t.transform) : t.transform);
    }), s = O(function() {
      return me("mask", qe(t.mask));
    }), i = O(function() {
      return Ut(a.value, Y(Y(Y(Y({}, l.value), r.value), s.value), {}, {
        symbol: t.symbol,
        title: t.title
      }));
    });
    re(i, function(d) {
      if (!d)
        return Vn("Could not find one or more icon(s)", a.value, s.value);
    }, {
      immediate: !0
    });
    var u = O(function() {
      return i.value ? Ve(i.value.abstract[0], {}, o) : null;
    });
    return function() {
      return u.value;
    };
  }
});
Be({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var o = n.slots, a = at.familyPrefix, l = O(function() {
      return ["".concat(a, "-layers")].concat(Ue(t.fixedWidth ? ["".concat(a, "-fw")] : []));
    });
    return function() {
      return ot("div", {
        class: l.value
      }, o.default ? o.default() : []);
    };
  }
});
Be({
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
    var o = n.attrs, a = at.familyPrefix, l = O(function() {
      return me("classes", [].concat(Ue(t.counter ? ["".concat(a, "-layers-counter")] : []), Ue(t.position ? ["".concat(a, "-layers-").concat(t.position)] : [])));
    }), r = O(function() {
      return me("transform", typeof t.transform == "string" ? Se.transform(t.transform) : t.transform);
    }), s = O(function() {
      var u = zt(t.value.toString(), Y(Y({}, r.value), l.value)), d = u.abstract;
      return t.counter && (d[0].attributes.class = d[0].attributes.class.replace("fa-layers-text", "")), d[0];
    }), i = O(function() {
      return Ve(s.value, {}, o);
    });
    return function() {
      return i.value;
    };
  }
});
Pt.add(
  Ht,
  Lt,
  xt,
  Bt,
  Gt,
  Ft,
  Vt,
  jt
);
const Yn = "zoa__c-K88__input", Wn = "zoa__XFR4x__label", Kn = "zoa__csc-y__grid", Xn = "zoa__oUR-j__wrapper", Zn = "zoa__f0lOR__arrow", Jn = {
  input: Yn,
  label: Wn,
  "label--right": "zoa__3XTm6__label--right",
  "label--below": "zoa__vTCRg__label--below",
  "label--above": "zoa__7KR2L__label--above",
  grid: Kn,
  "grid--above": "zoa__PN-na__grid--above",
  "grid--below": "zoa__-GDMi__grid--below",
  "grid--left": "zoa__v81WH__grid--left",
  "grid--right": "zoa__Clcgi__grid--right",
  wrapper: Xn,
  arrow: Zn
}, qn = ["id"], Qn = ["for"], eo = ["id"], to = { value: null }, no = ["value"], oo = {
  __name: "Dropdown",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: String
    },
    /**
     * Text for the input label.
     */
    label: {
      type: String,
      default: "Dropdown"
    },
    /**
     * Position of the input label (or none).
     * @values left, right, above, below, none
     */
    labelPosition: {
      type: String,
      default: "above"
    },
    /**
     * Debounce delay for the `change` event, in ms.
     */
    delay: {
      type: Number,
      default: 0
    },
    /**
     * Text to display in the blank input.
     */
    placeholder: {
      type: String,
      default: "Please choose an option"
    },
    /**
     * The options available to select. Each item can be a string, or an object with `label` and `value` keys.
     */
    options: {
      type: Array
    }
  },
  emits: [
    /**
     * Emitted when the value changes; debounced if the delay prop is > 0.
     * @arg {string} newValue the new value
     */
    "change",
    /**
     * @ignore
     */
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const n = e, { componentId: o, subId: a } = Z(), l = O(() => {
      let s = [];
      return n.options.forEach((i) => {
        typeof i == "object" ? s.push({ label: i.label, value: i.value }) : s.push({ label: i, value: i });
      }), s;
    }), { value: r } = J(t, n);
    return (s, i) => (g(), S("div", {
      class: c([s.$style.grid, s.$style[`grid--${e.labelPosition}`]]),
      id: y(o)
    }, [
      e.label && e.labelPosition !== "none" ? (g(), S("label", {
        key: 0,
        for: y(a)("dropdown"),
        class: c([s.$style.label, s.$style[`label--${e.labelPosition}`]])
      }, M(e.label), 11, Qn)) : F("", !0),
      $("div", {
        class: c(s.$style.wrapper)
      }, [
        ee($("select", {
          id: y(a)("dropdown"),
          class: c(s.$style.input),
          "onUpdate:modelValue": i[0] || (i[0] = (u) => te(r) ? r.value = u : null)
        }, [
          $("option", to, M(e.placeholder), 1),
          (g(!0), S(X, null, Q(l.value, (u) => (g(), S("option", {
            value: u.value
          }, M(u.label), 9, no))), 256))
        ], 10, eo), [
          [wt, y(r)]
        ]),
        x(y(ce), {
          icon: "fa-solid fa-caret-down",
          class: c(s.$style.arrow)
        }, null, 8, ["class"])
      ], 2)
    ], 10, qn));
  }
}, ao = {
  $style: Jn
}, lo = /* @__PURE__ */ V(oo, [["__cssModules", ao]]), ro = "zoa__EjsEt__input", so = "zoa__A3qeJ__label", io = "zoa__J-EVV__grid", uo = "zoa__3vUBH__defaultCheckbox", co = "zoa__uHbf1__checkbox", _o = "zoa__6OoQN__check", fo = {
  input: ro,
  label: so,
  "label--right": "zoa__pku0V__label--right",
  "label--below": "zoa__U-wXq__label--below",
  "label--above": "zoa__bglwu__label--above",
  grid: io,
  "grid--above": "zoa__xWwl6__grid--above",
  "grid--below": "zoa__MxvdG__grid--below",
  "grid--left": "zoa__ePg1o__grid--left",
  "grid--right": "zoa__dovWb__grid--right",
  "label--left": "zoa__-MSYg__label--left",
  defaultCheckbox: uo,
  checkbox: co,
  check: _o
}, mo = ["id", "for"], po = ["id", "name", "value"], bo = {
  __name: "Checkbox",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: Boolean,
      default: void 0
    },
    /**
     * Text for the input label.
     */
    label: {
      type: String,
      default: "Checkbox"
    },
    /**
     * Position of the input label (or none).
     * @values left, right, above, below, none
     */
    labelPosition: {
      type: String,
      default: "left"
    },
    /**
     * Debounce delay for the `change` event, in ms.
     */
    delay: {
      type: Number,
      default: 0
    },
    /**
     * An optional name for the checkbox; useful if making a group.
     */
    name: {
      type: [String, null],
      default: null
    },
    /**
     * An optional alternative value for the checkbox to return. If not specified,
     * the label value will be used.
     */
    checkValue: {
      type: [String, null],
      default: null
    }
  },
  emits: [
    /**
     * Emitted when the value changes; debounced if the delay prop is > 0.
     * @arg {boolean} newValue the new value
     */
    "change",
    /**
     * @ignore
     */
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const n = e, { componentId: o, subId: a } = Z(), { value: l } = J(t, n), r = R(null), s = R(null), i = ne(r), u = O(() => n.checkValue || n.label);
    return B(" ", () => {
      if (i.focused.value) {
        let d = Dt(l.value) ? kt(l.value) : l.value;
        if (Array.isArray(d)) {
          let h = !s.value.checked;
          d = d.filter((p) => p !== u.value), h && d.push(u.value), l.value = d, s.value.checked = h;
        } else
          l.value = !l.value;
      }
    }), (d, h) => (g(), S("label", {
      id: y(o),
      for: y(a)("checkbox"),
      class: c([d.$style.grid, d.$style[`grid--${e.labelPosition}`]]),
      tabindex: "0",
      ref_key: "checkboxContainer",
      ref: r
    }, [
      e.label && e.labelPosition !== "none" ? (g(), S("span", {
        key: 0,
        class: c([d.$style.label, d.$style[`label--${e.labelPosition}`]])
      }, M(e.label), 3)) : F("", !0),
      ee($("input", {
        type: "checkbox",
        id: y(a)("checkbox"),
        class: c(d.$style.defaultCheckbox),
        "onUpdate:modelValue": h[0] || (h[0] = (p) => te(l) ? l.value = p : null),
        name: e.name,
        value: u.value,
        ref_key: "checkboxInput",
        ref: s
      }, null, 10, po), [
        [Rt, y(l)]
      ]),
      $("span", {
        class: c(d.$style.checkbox)
      }, [
        x(y(ce), {
          icon: "fa-solid fa-check",
          class: c(d.$style.check)
        }, null, 8, ["class"])
      ], 2)
    ], 10, mo));
  }
}, ho = {
  $style: fo
}, Te = /* @__PURE__ */ V(bo, [["__cssModules", ho]]), yo = "zoa__-kaXq__input", vo = "zoa__eVS7Y__label", go = "zoa__pMc0u__grid", To = "zoa__5cpkc__wrapper", Eo = "zoa__AFCWm__options", So = "zoa__8vnuc__optlist", Ao = "zoa__bOurY__listItem", Oo = "zoa__Apoj0__option", $o = "zoa__MRbwy__selectAll", No = "zoa__m7bV0__subgroup", Io = "zoa__8rcID__noOptions", wo = "zoa__NWh1O__textboxWrapper", Ro = "zoa__P2F01__arrow", Do = {
  input: yo,
  label: vo,
  "label--right": "zoa__F-K-n__label--right",
  "label--below": "zoa__v3pp3__label--below",
  "label--above": "zoa__2fKCe__label--above",
  grid: go,
  "grid--above": "zoa__bnarX__grid--above",
  "grid--below": "zoa__8mlVJ__grid--below",
  "grid--left": "zoa__CQte7__grid--left",
  "grid--right": "zoa__4KDvP__grid--right",
  wrapper: To,
  options: Eo,
  optlist: So,
  listItem: Ao,
  option: Oo,
  selectAll: $o,
  subgroup: No,
  noOptions: Io,
  textboxWrapper: wo,
  arrow: Ro
}, ko = ["id"], Mo = ["for"], Co = ["placeholder", "id"], Uo = ["onClick"], zo = {
  __name: "Multiselect",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: Array
    },
    /**
     * Text for the input label.
     */
    label: {
      type: String,
      default: "Autocomplete"
    },
    /**
     * Position of the input label (or none).
     * @values left, right, above, below, none
     */
    labelPosition: {
      type: String,
      default: "above"
    },
    /**
     * Debounce delay for the `change` event, in ms.
     */
    delay: {
      type: Number,
      default: 0
    },
    /**
     * Text to display in the blank input.
     */
    placeholder: {
      type: [String, void 0],
      default: null
    },
    /**
     * The options available to select. Each item can be a string, or an object with `label` and `value` keys.
     */
    options: {
      type: Array
    },
    /**
     * The string used to describe the items being selected, in singular form e.g. "resource", "genus".
     */
    itemName: {
      type: String,
      default: "item"
    },
    /**
     * The plural form of itemName, e.g. "resources", "genera". If null (default), an "s" will be added to itemName.
     */
    itemNamePlural: {
      type: [String, null],
      default: null
    },
    /**
     * Debounce delay for the `search` event, in ms.
     */
    searchDelay: {
      type: Number,
      default: 200
    }
  },
  emits: [
    /**
     * Emitted when the value changes; debounced if the delay prop is > 0.
     * @arg {string} newValue the new value
     */
    "change",
    /**
     * @ignore
     */
    "update:modelValue",
    /**
     * Emitted when the search value changes; debounced if the searchDelay prop is > 0.
     * @arg {string} searchTerm the search term
     */
    "search"
  ],
  setup(e, { emit: t }) {
    const n = e, { componentId: o, subId: a } = Z(), { value: l } = J(t, n);
    Array.isArray(l) || (l.value = []);
    function r(_) {
      t("search", _);
    }
    const s = Ge(r, n.searchDelay), i = R(null), u = O({
      get() {
        return i.value;
      },
      set(_) {
        i.value = _, s(_);
      }
    }), d = O(() => (l.value ? l.value.length !== 1 : !0) ? n.itemNamePlural || n.itemName + "s" : n.itemName), h = O(() => {
      let _ = [];
      return n.options.forEach((T) => {
        typeof T == "object" ? _.push({
          label: T.label || T.value,
          value: T.value || T.label,
          group: T.group || null
        }) : _.push({ label: T, value: T, group: null });
      }), _;
    }), p = O(() => {
      let _ = { root: [], groups: {} };
      return h.value.forEach((T) => {
        if (T.group) {
          let k = _.groups[T.group] || [];
          k.push(T), _.groups[T.group] = k;
        } else
          _.root.push(T);
      }), _;
    }), N = R(null), I = R(null), E = R(null), D = R(!1), b = ue(I), v = ne(E);
    function C() {
      D.value = !0, setTimeout(() => {
        I.value.focus();
      }, 50);
    }
    function A() {
      try {
        N.value.blur(), I.value.blur(), E.value.blur();
      } catch {
      }
      D.value = !1;
    }
    rt(N, () => {
      D.value = !1;
    }), B("ArrowDown", () => {
      if (h.value.length !== 0) {
        if (b.focused.value)
          E.value.children[0].children[0].children[0].focus();
        else if (v.focused.value) {
          const _ = [...E.value.querySelectorAll("label")], T = E.value.querySelector("label:focus");
          if (!T)
            _[0].focus();
          else {
            const k = _.findIndex((z) => z === T);
            k === _.length - 1 ? _[0].focus() : _[k + 1].focus();
          }
        }
      }
    }), B("ArrowUp", () => {
      if (h.value.length !== 0 && v.focused.value) {
        const _ = [...E.value.querySelectorAll("label")], T = E.value.querySelector("label:focus");
        if (!T)
          I.value.focus();
        else {
          const k = _.findIndex((z) => z === T);
          k === 0 ? I.value.focus() : _[k - 1].focus();
        }
      }
    }), B("Enter", () => {
      A();
    });
    const f = O({
      get() {
        const _ = h.value;
        return l.value.length !== _.length ? !1 : _.filter((k) => !l.value.includes(k.value)).length === 0;
      },
      set(_) {
        _ ? l.value = h.value.map((T) => T.value) : l.value = [];
      }
    });
    function U(_) {
      const T = p.value.groups[_].map((z) => z.value), k = T.filter((z) => !l.value.includes(z));
      k.length > 0 ? k.forEach((z) => {
        l.value.push(z);
      }) : l.value = l.value.filter((z) => !T.includes(z));
    }
    return (_, T) => (g(), S("div", {
      class: c([_.$style.grid, _.$style[`grid--${e.labelPosition}`]]),
      id: y(o)
    }, [
      e.label && e.labelPosition !== "none" ? (g(), S("label", {
        key: 0,
        for: y(a)("textbox"),
        class: c([_.$style.label, _.$style[`label--${e.labelPosition}`]])
      }, M(e.label), 11, Mo)) : F("", !0),
      $("div", {
        class: c(_.$style.wrapper),
        ref_key: "container",
        ref: N
      }, [
        $("div", {
          class: c(_.$style.textboxWrapper)
        }, [
          ee($("input", {
            type: "text",
            placeholder: e.placeholder,
            id: y(a)("search"),
            class: c(_.$style.input),
            "onUpdate:modelValue": T[0] || (T[0] = (k) => u.value = k),
            ref_key: "textbox",
            ref: I
          }, null, 10, Co), [
            [de, u.value],
            [We, D.value]
          ]),
          ee($("div", {
            class: c(_.$style.input),
            tabindex: "0",
            onFocusin: C
          }, M(y(l) ? y(l).length : 0) + " " + M(d.value) + " selected ", 35), [
            [We, !D.value]
          ]),
          x(y(ce), {
            icon: "fa-solid fa-caret-down",
            class: c(_.$style.arrow),
            onClick: T[1] || (T[1] = (k) => D.value = !D.value)
          }, null, 8, ["class"])
        ], 2),
        D.value ? (g(), S("div", {
          key: 0,
          class: c(_.$style.options),
          ref_key: "dropdown",
          ref: E
        }, [
          h.value.length > 0 ? (g(), S("ul", {
            key: 0,
            class: c(_.$style.optlist)
          }, [
            $("li", {
              class: c([_.$style.selectAll, _.$style.listItem, _.$style.option])
            }, [
              x(Te, {
                label: "Select all",
                "label-position": "right",
                modelValue: f.value,
                "onUpdate:modelValue": T[2] || (T[2] = (k) => f.value = k)
              }, null, 8, ["modelValue"])
            ], 2),
            (g(!0), S(X, null, Q(p.value.root, (k) => (g(), S("li", {
              class: c([_.$style.listItem, _.$style.option])
            }, [
              x(Te, {
                label: k.label,
                "label-position": "right",
                "check-value": k.value,
                name: y(a)("checkboxes"),
                modelValue: y(l),
                "onUpdate:modelValue": T[3] || (T[3] = (z) => te(l) ? l.value = z : null)
              }, null, 8, ["label", "check-value", "name", "modelValue"])
            ], 2))), 256)),
            (g(!0), S(X, null, Q(p.value.groups, (k, z) => (g(), S("li", {
              class: c([_.$style.listItem, _.$style.subgroup])
            }, [
              $("div", {
                onClick: (q) => U(z)
              }, M(z), 9, Uo),
              $("ul", {
                class: c(_.$style.optlist)
              }, [
                (g(!0), S(X, null, Q(k, (q) => (g(), S("li", {
                  class: c([_.$style.listItem, _.$style.option])
                }, [
                  x(Te, {
                    label: q.label,
                    "label-position": "right",
                    "check-value": q.value,
                    name: y(a)("checkboxes"),
                    modelValue: y(l),
                    "onUpdate:modelValue": T[4] || (T[4] = (P) => te(l) ? l.value = P : null)
                  }, null, 8, ["label", "check-value", "name", "modelValue"])
                ], 2))), 256))
              ], 2)
            ], 2))), 256))
          ], 2)) : (g(), S("div", {
            key: 1,
            class: c(_.$style.noOptions)
          }, "No options found", 2))
        ], 2)) : F("", !0)
      ], 2)
    ], 10, ko));
  }
}, Po = {
  $style: Do
}, Ho = /* @__PURE__ */ V(zo, [["__cssModules", Po]]), Lo = "zoa__79mQo__input", xo = "zoa__WTN5H__label", Bo = "zoa__DqiKb__grid", Go = {
  input: Lo,
  label: xo,
  "label--right": "zoa__iMSda__label--right",
  "label--below": "zoa__r6OsR__label--below",
  "label--above": "zoa__iXvOz__label--above",
  grid: Bo,
  "grid--above": "zoa__9WSIP__grid--above",
  "grid--below": "zoa__iK09A__grid--below",
  "grid--left": "zoa__KhHio__grid--left",
  "grid--right": "zoa__M6mbm__grid--right"
}, Fo = ["id"], Vo = ["for"], jo = ["placeholder", "min", "max", "step", "id"], Yo = {
  __name: "Number",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: Number
    },
    /**
     * Text for the input label.
     */
    label: {
      type: String,
      default: "Number"
    },
    /**
     * Position of the input label (or none).
     * @values left, right, above, below, none
     */
    labelPosition: {
      type: String,
      default: "above"
    },
    /**
     * Debounce delay for the `change` event, in ms.
     */
    delay: {
      type: Number,
      default: 200
    },
    /**
     * Text to display in the blank input.
     */
    placeholder: {
      type: Number,
      default: 0
    },
    /**
     * The lowest valid number.
     */
    min: {
      type: Number,
      default: null
    },
    /**
     * The highest valid number.
     */
    max: {
      type: Number,
      default: null
    },
    /**
     * The granularity of accepted values; e.g. 1 allows any integer and 0.1 allows floats to one decimal place.
     */
    step: {
      type: Number,
      default: 1
    }
  },
  emits: [
    /**
     * Emitted when the value changes; debounced if the delay prop is > 0.
     * @arg {number} newValue the new value
     */
    "change",
    /**
     * @ignore
     */
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const n = e, { componentId: o, subId: a } = Z(), { value: l } = J(t, n);
    return (r, s) => (g(), S("div", {
      class: c([r.$style.grid, r.$style[`grid--${e.labelPosition}`]]),
      id: y(o)
    }, [
      e.label && e.labelPosition !== "none" ? (g(), S("label", {
        key: 0,
        for: y(a)("number"),
        class: c([r.$style.label, r.$style[`label--${e.labelPosition}`]])
      }, M(e.label), 11, Vo)) : F("", !0),
      ee($("input", {
        type: "number",
        placeholder: e.placeholder,
        min: e.min,
        max: e.max,
        step: e.step,
        id: y(a)("number"),
        class: c(r.$style.input),
        "onUpdate:modelValue": s[0] || (s[0] = (i) => te(l) ? l.value = i : null)
      }, null, 10, jo), [
        [de, y(l)]
      ])
    ], 10, Fo));
  }
}, Wo = {
  $style: Go
}, Ee = /* @__PURE__ */ V(Yo, [["__cssModules", Wo]]), Ko = "zoa__BWNey__input", Xo = "zoa__EwgZe__label", Zo = "zoa__Xjves__grid", Jo = {
  input: Ko,
  label: Xo,
  "label--right": "zoa__GxE5U__label--right",
  "label--below": "zoa__K1mOk__label--below",
  "label--above": "zoa__33h7g__label--above",
  grid: Zo,
  "grid--above": "zoa__caz05__grid--above",
  "grid--below": "zoa__pnjLn__grid--below",
  "grid--left": "zoa__utweT__grid--left",
  "grid--right": "zoa__E6CuQ__grid--right"
}, qo = ["id"], Qo = ["for"], ea = ["placeholder", "min", "max", "step", "id"], ta = {
  __name: "DateSimple",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: Object
    },
    /**
     * Text for the input label.
     */
    label: {
      type: String,
      default: "Date"
    },
    /**
     * Position of the input label (or none).
     * @values left, right, above, below, none
     */
    labelPosition: {
      type: String,
      default: "above"
    },
    /**
     * Debounce delay for the `change` event, in ms.
     */
    delay: {
      type: Number,
      default: 200
    },
    /**
     * Text to display in the blank input.
     */
    placeholder: {
      type: String,
      default: null
    },
    /**
     * The earliest accepted date, in yyyy-mm-dd format.
     */
    min: {
      type: String,
      default: null
    },
    /**
     * The latest accepted date, in yyyy-mm-dd format.
     */
    max: {
      type: String,
      default: null
    },
    /**
     * The increment size (in days) from the minimum date; e.g. 2 would make every other day valid. `'any'` allows all values.
     */
    step: {
      type: [String, Number],
      default: "any"
    }
  },
  emits: [
    /**
     * Emitted when the value changes; debounced if the delay prop is > 0.
     * @arg {string} newValue the new value
     */
    "change",
    /**
     * @ignore
     */
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const n = e, { componentId: o, subId: a } = Z(), { value: l } = J(t, n);
    return (r, s) => (g(), S("div", {
      class: c([r.$style.grid, r.$style[`grid--${e.labelPosition}`]]),
      id: y(o)
    }, [
      e.label && e.labelPosition !== "none" ? (g(), S("label", {
        key: 0,
        for: y(a)("date"),
        class: c([r.$style.label, r.$style[`label--${e.labelPosition}`]])
      }, M(e.label), 11, Qo)) : F("", !0),
      ee($("input", {
        type: "date",
        placeholder: e.placeholder,
        min: e.min,
        max: e.max,
        step: e.step,
        id: y(a)("date"),
        class: c(r.$style.input),
        "onUpdate:modelValue": s[0] || (s[0] = (i) => te(l) ? l.value = i : null)
      }, null, 10, ea), [
        [de, y(l)]
      ])
    ], 10, qo));
  }
}, na = {
  $style: Jo
}, oa = /* @__PURE__ */ V(ta, [["__cssModules", na]]);
function ut(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function aa(e) {
  e = e.replace(/_/g, "-"), e = e.replace(/[.:][\w-]*$/, "");
  try {
    return new Intl.Locale(e).baseName;
  } catch {
    return "en-US";
  }
}
var la = aa;
const ra = la;
let pe;
if (typeof navigator < "u") {
  const e = navigator;
  pe = Array.isArray(e.languages) ? e.languages[0] : e.language;
} else if (typeof process < "u") {
  const e = { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_c3815472-060d-4775-b9b3-13e349dd1aa8", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.2 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_c3815472-060d-4775-b9b3-13e349dd1aa8", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.2/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/zoa/zoa/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "NaturalHistoryMuseum", GRADLE_HOME: "/usr/share/gradle-8.3", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/26.0.10792818", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "5260760", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "ginger/multiselect", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/zoa/zoa", SYSTEMD_EXEC_PID: "568", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.8/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.1/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20231001.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:18448", GITHUB_WORKFLOW: "Build dist (dev/patch)", _: "/opt/hostedtoolcache/node/16.20.2/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.2/x64", GITHUB_RUN_ID: "6561871524", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "36557e1d31dffbf4ceff89d282b53400c61aa7c0", GITHUB_BASE_REF: "dev", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "NaturalHistoryMuseum/zoa/.github/workflows/build.yml@refs/heads/dev", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.2/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/zoa/zoa/node_modules/.bin:/home/runner/work/zoa/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.2/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/hostedtoolcache/node/16.20.2/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_6dbaa694-3f0d-41ed-bee4-98ad76c89999", INVOCATION_ID: "980878cb85154185b83edeea79f40297", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.13/x64", NODE: "/opt/hostedtoolcache/node/16.20.2/x64/bin/node", npm_package_name: "@nhm-data/zoa", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "11", GITHUB_TRIGGERING_ACTOR: "alycejenni", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 2", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "dev", GITHUB_REPOSITORY: "NaturalHistoryMuseum/zoa", npm_lifecycle_script: "vite build", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "630464665", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "0.5.1", npm_lifecycle_event: "build", GITHUB_REF_PROTECTED: "false", GITHUB_WORKSPACE: "/home/runner/work/zoa/zoa", ACCEPT_EULA: "Y", GITHUB_JOB: "build-dist", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "36557e1d31dffbf4ceff89d282b53400c61aa7c0", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/dev", GITHUB_ACTOR: "alycejenni", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.2/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_c3815472-060d-4775-b9b3-13e349dd1aa8", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/zoa/zoa", GITHUB_ACTOR_ID: "23579762", RUNNER_WORKSPACE: "/home/runner/work/zoa", npm_execpath: "/opt/hostedtoolcache/node/16.20.2/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_c3815472-060d-4775-b9b3-13e349dd1aa8", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.2/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_c3815472-060d-4775-b9b3-13e349dd1aa8", INIT_CWD: "/home/runner/work/zoa/zoa", EDITOR: "vi", NODE_ENV: "production" };
  pe = e.LC_ALL || e.LC_MESSAGES || e.LANG || e.LANGUAGE;
}
pe || (pe = "en-US");
var $e = ra(pe);
const ct = {};
for (let e = 1; e < 100; e++) {
  const t = (e < 9 ? "0" : "") + e;
  ct[t] = e + (e > 51 ? 1900 : 2e3);
}
var sa = ct;
const ia = {
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
var je = ia;
const ua = sa, ca = je, da = {
  zone: ca,
  year: ua,
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
var _a = da;
const fa = je, dt = {
  MONTHNAME: "january|february|march|april|may|june|july|august|september|october|november|december|jan\\.?|feb\\.?|mar\\.?|apr\\.?|may\\.?|jun\\.?|jul\\.?|aug\\.?|sep\\.?|oct\\.?|nov\\.?|dec\\.?",
  DAYNAME: "sunday|monday|tuesday|wednesday|thursday|friday|saturday|sun\\.?|mon\\.?|tue\\.?|wed\\.?|thu\\.?|fri\\.?|sat\\.?",
  ZONE: "\\(?(" + Object.keys(fa).join("|") + ")\\)?",
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
}, ma = {
  ...dt,
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
var pa = { latn: dt, other: ma };
const _t = {
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
}, ft = "[０１２３４５６７８９〇一二三四五六七八九\\d]", Pe = {
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
}, ye = {};
function ba(e) {
  if (ye[e])
    return ye[e];
  if (e === "fullwide" || e === "hanidec")
    return { group: ft, lookup: { ...Pe } };
  const t = _t[e];
  if (!t)
    return { group: "\\d", lookup: { ...Pe } };
  const n = String.fromCharCode(t), o = String.fromCharCode(t + 9), a = {};
  for (let l = 0; l < 10; l++)
    a[String.fromCharCode(t + l)] = l;
  return ye[e] = {
    group: `[${n}-${o}]`,
    lookup: a
  }, ye[e];
}
var mt = { chineseGroup: ft, defaultLookup: Pe, startCodes: _t, buildDigits: ba };
const ha = [
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
var ya = ha;
const va = _a, { latn: ga, other: De } = pa, { buildDigits: Ta } = mt, Qe = $e, Ea = ya, ke = {};
let Sa = class pt {
  /**
   * Get a singleton instance with the given locale
   * @param {String} locale such as en, en-US, es, fr-FR, etc.
   * @returns {LocaleHelper}
   */
  static factory(t = Qe) {
    return ke[t.toLowerCase()] || (ke[t.toLowerCase()] = new pt(t)), ke[t.toLowerCase()];
  }
  /**
   * Create a new instance with the given locale
   * @param {String} locale such as en, en-US, es, fr-FR, etc.
   */
  constructor(t = Qe) {
    this.locale = t, this.lookups = { ...va }, this.vars = { ...ga };
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
    for (let o = 0; o < t.length; o++)
      n += String(this.lookups.digit[t[o]]);
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
    const t = this.numberingSystem, { group: n, lookup: o } = Ta(t);
    this.lookups.digit = o;
    for (const a in De)
      De.hasOwnProperty(a) && (this.vars[a] = De[a].replace(/\*/g, n));
  }
  /**
   * Build lookup for month names
   */
  buildMonthNames() {
    const t = {}, n = {};
    if (/^fi/i.test(this.locale))
      "tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu".split("|").forEach((a, l) => {
        ["", "k", "kuu", "kuuta"].forEach((r, s) => {
          const i = s < 2 ? "\\.?" : "";
          t[a + r + i] = !0, n[a + r] = l + 1;
        });
      });
    else {
      const o = [], a = (s) => s.type === "month";
      for (let s = 0; s < 12; s++)
        o.push(new Date(2017, s, 1));
      const l = ["full", "long", "medium"];
      for (const s of l) {
        const i = Intl.DateTimeFormat(this.locale, { dateStyle: s });
        for (let u = 0; u < 12; u++) {
          let h = i.formatToParts(o[u]).find(a).value.toLowerCase();
          if (/^ko/i.test(this.locale) && (h += "월"), s === "medium") {
            if (/^ar|zh/i.test(this.locale))
              return;
            h = h.replace(/\.$/, ""), t[`${h}\\.?`] = !0;
          } else
            t[h] = !0;
          n[h] = u + 1;
        }
      }
      const r = Intl.DateTimeFormat(this.locale, { month: "short" });
      for (let s = 0; s < 12; s++) {
        let u = r.formatToParts(o[s]).find(a).value.toLowerCase();
        u = u.replace(/\.$/, ""), t[`${u}\\.?`] = !0, n[u] = s + 1;
      }
    }
    this.vars.MONTHNAME = Object.keys(t).join("|"), this.lookups.month = n;
  }
  /**
   * Build lookup for day name
   */
  buildDaynames() {
    const t = [], n = (r) => r.type === "weekday";
    for (let r = 0; r < 7; r++)
      t.push(new Date(2017, 0, r + 1));
    const o = ["long", "short"], a = [], l = {};
    for (const r of o) {
      const s = Intl.DateTimeFormat(this.locale, { weekday: r });
      for (let i = 0; i < 7; i++) {
        let d = s.formatToParts(t[i]).find(n).value.toLowerCase();
        r === "short" ? (d = d.replace(/\.$/, ""), a.push(`${d}\\.?`)) : a.push(d), l[d] = i;
      }
    }
    this.vars.DAYNAME = a.join("|"), this.lookups.dayname = l;
  }
  /**
   * Build lookup for meridiems (e.g. AM/PM)
   */
  buildMeridiems() {
    const t = [new Date(2017, 0, 1), new Date(2017, 0, 1, 23, 0, 0)], n = (r) => r.type === "dayPeriod", o = [], a = {}, l = Intl.DateTimeFormat(this.locale, { timeStyle: "long" });
    for (let r = 0; r < 2; r++) {
      const i = l.formatToParts(t[r]).find(n);
      if (!i)
        return;
      const u = i.value.toLowerCase();
      o.push(u), a[u] = r * 12;
    }
    this.vars.MERIDIEM = o.join("|"), this.lookups.meridiem = a;
  }
  /**
   * Given a list of unit names and matches, build result object
   * @param {Array} units  Unit names such as "year", "month" and "millisecond"
   * @param {Array} matches  The values matched by a Format's RegExp
   * @returns {Object}
   */
  getObject(t, n) {
    const o = {};
    return t.forEach((a, l) => {
      if (!a)
        return;
      let r = n[l + 1];
      r = r.toLowerCase(), r = r.replace(/\.$/, ""), a === "offset" ? o.offset = this.offsetToMinutes(r) : this.lookups[a] ? o[a] = this.lookups[a][r] || this.toInt(r) : o[a] = this.toInt(r);
    }), o;
  }
  /**
   * Take a response object and cast each unit to Number
   * @param {Object} object  An object with one or more units
   * @returns {Object}  An object with same units but Numeric
   */
  castObject(t) {
    const n = {};
    return Ea.forEach((o) => {
      o in t && (n[o] = this.toInt(t[o]));
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
      const [, o, a, l] = n;
      return (o === "-" ? -1 : 1) * (this.toInt(a) * 60 + this.toInt(l || 0));
    }
    return 0;
  }
  /**
   * Compile template into a RegExp and return it
   * @param {String} template  The template string
   * @returns {RegExp}
   */
  compile(t) {
    const n = t.replace(/_([A-Z0-9]+)_/g, (o, a) => {
      if (!this.vars[a])
        throw new Error(`Template string contains invalid variable _${a}_`);
      return this.vars[a];
    });
    return new RegExp(n, "i");
  }
};
var be = Sa;
const et = be, ve = $e;
let Aa = class {
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
    units: o = null,
    handler: a = null,
    locales: l = null
  }) {
    if (!Array.isArray(o) && typeof a != "function")
      throw new Error(
        'new Format must receive a "units" array or "handler" function'
      );
    if (typeof t != "string" && !(n instanceof RegExp))
      throw new Error(
        'new Format must receive a "template" string or "matcher" RegExp'
      );
    this.template = t, this.units = o, this.matcher = n, this.handler = a, this.locales = l, this.regexByLocale = {};
  }
  /**
   * Build the RegExp from the template for a given locale
   * @param {String} locale  The language locale such as en-US, pt-BR, zh, es, etc.
   * @returns {RegExp}  A RegExp that matches when this format is recognized
   */
  getRegExp(t = ve) {
    return this.template ? (this.regexByLocale[t] || (this.regexByLocale[t] = et.factory(t).compile(
      this.template
    )), this.regexByLocale[t]) : this.matcher;
  }
  /**
   * Run this format's RegExp against the given string
   * @param {String} string  The date string
   * @param {String} locale  The language locale such as en-US, pt-BR, zh, es, etc.
   * @returns {Array|null}  Array of matches or null on non-match
   */
  getMatches(t, n = ve) {
    return t.match(this.getRegExp(n));
  }
  /**
   * Given matches against this RegExp, convert to object
   * @param {String[]} matches  An array of matched parts
   * @param {String} locale  The language locale such as en-US, pt-BR, zh, es, etc.
   * @returns {Object}  Object which may contain year, month, day, hour, minute, second, millisecond, offset, invalid
   */
  toDateTime(t, n = ve) {
    const o = et.factory(n);
    if (this.units)
      return o.getObject(this.units, t);
    const a = this.handler(t, n);
    return !a || a.invalid ? a : o.castObject(a);
  }
  /**
   * Attempt to parse a string in this format
   * @param {String} string  The date string
   * @param {String} locale  The language locale such as en-US, pt-BR, zh, es, etc.
   * @returns {Object|null}  Null if format can't handle this string, Object for result or error
   */
  attempt(t, n = ve) {
    t = String(t).trim();
    const o = this.getMatches(t, n);
    if (o) {
      const a = this.toDateTime(o, n);
      if (a && !a.invalid)
        return a;
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
var L = Aa;
function Oa(e, t) {
  return function(o, a = t) {
    const l = e.attempt(o, a);
    if (l.invalid)
      return l;
    const r = new Date(2e3, 0, 1);
    return typeof l.day == "number" && r.setUTCDate(l.day), typeof l.year == "number" && r.setUTCFullYear(l.year), typeof l.month == "number" && r.setUTCMonth(l.month - 1), r.setUTCHours(l.hour || 0), r.setUTCMinutes(l.minute || 0), r.setUTCSeconds(l.second || 0), r.setUTCMilliseconds(l.millisecond || 0), typeof l.offset == "number" ? new Date(r - l.offset * 60 * 1e3) : r;
  };
}
var $a = Oa;
function Na(e) {
  return function(n, o) {
    return n instanceof Date ? n : typeof n == "number" ? new Date(n) : e(n, o);
  };
}
var Ia = Na;
const Me = $e, tt = $a, wa = Ia;
let Ra = class {
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
      const o = this.formats[n];
      return this.formats.splice(n, 1), o.parser = null, !0;
    }
    return !1;
  }
  /**
   * Attempt to parse a date string
   * @param {String} date  A parseable date string
   * @param {String} locale  The name of the locale
   * @returns {Object}
   */
  attempt(t, n = Me) {
    for (const a of this.formats) {
      if (Array.isArray(a.locales) && a.locales.length > 0 && !a.locales.includes(new Intl.Locale(n).baseName))
        continue;
      const l = a.attempt(t, n);
      if (l)
        return l;
    }
    let o = String(t).slice(0, 200);
    return o === "" && (o = "empty string"), { invalid: `Unable to parse ${o}` };
  }
  /**
   * Export this parser as a single function that takes a string
   * @param {String} locale  The default locale it should use
   * @returns {Function}
   */
  exportAsFunction(t = Me) {
    return tt(this, t);
  }
  /**
   * Export this parser as a single function that takes a string or Date
   * @param {String} locale  The default locale it should use
   * @returns {Function}
   */
  exportAsFunctionAny(t = Me) {
    return wa(tt(this, t));
  }
};
var Da = Ra;
const ka = L, Ma = new ka({
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
var Ca = Ma;
const Ua = L, za = new Ua({
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
var Pa = za;
const Ha = {
  y: "year",
  M: "month",
  d: "day",
  w: "week",
  h: "hour",
  m: "minute",
  s: "second",
  ms: "millisecond"
};
var La = Ha;
const xa = L, Ba = La, Ga = new xa({
  /* prettier-ignore */
  //          $1          $2        $3                                                                                   $4
  matcher: /^(\+|-|in|) ?([\d.]+) ?(years?|months?|weeks?|days?|hours?|minutes?|seconds?|milliseconds?|ms|s|m|h|w|d|M|y)( ago)?$/i,
  handler: function([, e, t, n, o]) {
    t = parseFloat(t), n.length <= 2 ? n = Ba[n] : (n = n.replace(/s$/, ""), n = n.toLowerCase()), n === "week" && (n = "day", t *= 7), (e === "-" || o) && (t *= -1);
    const a = this.now();
    return n === "millisecond" ? a.setUTCMilliseconds(a.getUTCMilliseconds() + t) : n === "second" ? a.setUTCSeconds(a.getUTCSeconds() + t) : n === "minute" ? a.setUTCMinutes(a.getUTCMinutes() + t) : n === "hour" ? a.setUTCHours(a.getUTCHours() + t) : n === "day" ? a.setUTCDate(a.getUTCDate() + t) : n === "month" ? a.setUTCMonth(a.getUTCMonth() + t) : n === "year" && a.setUTCFullYear(a.getUTCFullYear() + t), {
      year: a.getUTCFullYear(),
      month: a.getUTCMonth() + 1,
      day: a.getUTCDate(),
      hour: a.getUTCHours(),
      minute: a.getUTCMinutes(),
      second: a.getUTCSeconds(),
      millisecond: a.getUTCMilliseconds()
    };
  }
});
var Fa = Ga;
const Va = L, ja = be, { chineseGroup: ge } = mt;
let _e;
const Ya = new Va({
  /* prettier-ignore */
  //           $1                         $2                  $3
  template: `^(${ge}{4}|${ge}{2})\\s*年\\s*(${ge}{1,2})\\s*月\\s*(${ge}{1,2})\\s*日$`,
  handler: function([, e, t, n]) {
    return _e || (_e = new ja("zh"), _e.numberingSystem = "hanidec", _e.buildNumbers()), _e.castObject({ year: e, month: t, day: n });
  }
});
var Wa = Ya;
const Ka = L, Xa = new Ka({
  /* prettier-ignore */
  //           $1            $2
  template: "^(_DAY_)[\\/. ](_MONTH_)$",
  units: ["day", "month"]
});
var Za = Xa;
const Ja = L, qa = new Ja({
  /* prettier-ignore */
  //           $1                       $2
  template: "^(_DAY_)(?:_ORDINAL_)?[ -](_MONTHNAME_)$",
  units: ["day", "month"]
});
var Qa = qa;
const el = L, tl = new el({
  /* prettier-ignore */
  //                                $1                   $2    $3              $4
  template: "^(?:(?:_DAYNAME_),? )?(_DAY_)(?:_ORDINAL_)?([ -])(_MONTHNAME_)\\2(_YEAR_)$",
  units: ["day", null, "month", "year"]
});
var nl = tl;
const ol = L, al = new ol({
  /* prettier-ignore */
  //           $1     $2        $3          $4
  template: "^(_DAY_)([\\/. -])(_MONTH_)\\2(_YEAR_)$",
  units: ["day", null, "month", "year"]
});
var ll = al;
const rl = L, sl = new rl({
  /* prettier-ignore */
  //           $1                 $2
  template: "^(_MONTH_)(?:[\\/-])(_DAY_)$",
  units: ["month", "day"]
});
var il = sl;
const ul = L, cl = new ul({
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
var dl = cl;
const _l = L, fl = new _l({
  /* prettier-ignore */
  //                                $1             $2
  template: "^(?:(?:_DAYNAME_),? )?(_MONTHNAME_)? (_DAY_)(?:_ORDINAL_)?$",
  units: ["month", "day"]
});
var ml = fl;
const pl = L, bl = new pl({
  /* prettier-ignore */
  //                                $1             $2                      $3
  template: "^(?:(?:_DAYNAME_),? )?(_MONTHNAME_)? (_DAY_)(?:_ORDINAL_)?,? (_YEAR_)$",
  units: ["month", "day", "year"]
});
var hl = bl;
const yl = be, vl = L, gl = new vl({
  /* prettier-ignore */
  //           $1                               $2                 $3           $4                 $5
  template: "^(.*?)_SPACE_*(?:at|on|T|)_SPACE_*(_H12_|_H24_)(?:\\:(_MIN_)(?:\\:(_SEC_))?)?_SPACE_*(_MERIDIEM_)$",
  handler: function(e, t) {
    let [, n, o, a, l, r] = e, s = {};
    if (n && (s = this.parser.attempt(n, t), s.invalid))
      return null;
    const i = yl.factory(t);
    if (r) {
      const u = i.lookups.meridiem[r.toLowerCase()] || 0;
      o = parseFloat(o), o === 12 ? o = u : o > 12 && u === 12 ? o += 0 : o += u;
    }
    return s.hour = o, a && (s.minute = a), l && (s.second = l), s;
  }
});
var Tl = gl;
const El = be, Sl = L, nt = je, Al = new Sl({
  /* prettier-ignore */
  //           $1                               $2        $3           $4              $5                                $6                 $7
  template: "^(.*?)_SPACE_*(?:at|on|T|)_SPACE_*(_H24_)\\:(_MIN_)(?:\\:(_SEC_)(?:[\\.,](_MS_))?)?_SPACE_*(?:GMT)?_SPACE_*(_OFFSET_)?_SPACE_*(_ZONE_)?$",
  handler: function(e, t) {
    let [, n, o, a, l, r, s, i] = e, u = {};
    if (n && (u = this.parser.attempt(n, t), u.invalid))
      return u;
    if (u.hour = o, u.minute = a, l && (u.second = l), r && r.length > 3 ? u.millisecond = r.slice(0, 3) : r && (u.millisecond = r), i && !s && i in nt)
      u.offset = nt[i];
    else if (s) {
      const d = El.factory(t);
      u.offset = d.offsetToMinutes(s);
    }
    return u;
  }
});
var Ol = Al;
const $l = L, Nl = new $l({
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
    const o = {
      year: t.getUTCFullYear(),
      month: t.getUTCMonth() + 1,
      day: t.getUTCDate()
    };
    return n === "now" && (o.hour = t.getUTCHours(), o.minute = t.getUTCMinutes(), o.second = t.getUTCSeconds(), o.millisecond = t.getUTCMilliseconds()), o;
  }
});
var Il = Nl;
const wl = L, Rl = new wl({
  /* prettier-ignore */
  //                         $1            $2      $3      $4      $5      $6         $7
  template: "^(?:_DAYNAME_) (_MONTHNAME_) (_DAY_) (_H24_):(_MIN_):(_SEC_) (_OFFSET_) (_YEAR_)$",
  units: ["month", "day", "hour", "minute", "second", "offset", "year"]
});
var Dl = Rl;
const kl = L, Ml = new kl({
  /* prettier-ignore */
  //           $1      $2  $3          $4
  template: "^(_YEAR_)(-?)(_MONTH_)\\2(_DAY_)$",
  units: ["year", null, "month", "day"]
});
var Cl = Ml;
const bt = Da, Ul = L, zl = be, Pl = Ca, Hl = Pa, Ll = Fa, xl = Wa, Bl = Za, Gl = Qa, Fl = nl, Vl = ll, jl = $e, Yl = il, Wl = dl, Kl = ml, Xl = hl, Zl = Tl, Jl = Ol, ql = Il, Ql = Dl, er = Cl, W = new bt();
W.addFormats([
  Jl,
  Zl,
  // from most unambiguous and popular to least
  er,
  Fl,
  Xl,
  Wl,
  Vl,
  xl,
  Ql,
  ql,
  Ll,
  Kl,
  Gl,
  Yl,
  Bl,
  Pl,
  Hl
]);
W.Parser = bt;
W.Format = Ul;
W.LocaleHelper = zl;
W.defaultLocale = jl;
W.fromString = Date.fromString = W.exportAsFunction();
W.fromAny = Date.fromAny = W.exportAsFunctionAny();
typeof window < "u" && (window.anyDateParser = W);
var Ne = W;
const tr = /* @__PURE__ */ ut(Ne);
var nr = {
  __locale: "en",
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  abbreviated_days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  abbreviated_months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  am: "AM",
  pm: "PM"
}, or = nr;
const He = /* @__PURE__ */ ut(or), ar = new RegExp(
  `(${He.abbreviated_months.map((e) => e.toLowerCase()).join("|")})`
), lr = new Ne.Format({
  matcher: /^'?(\d{2}|\d{4})$/,
  units: ["year"]
}), rr = new Ne.Format({
  matcher: /^(\d{1,2})\D*'?(\d{2}|\d{4})$/,
  units: ["month", "year"]
}), ht = new Ne.Parser();
ht.addFormats([lr, rr]);
function sr(e) {
  e = e.trim();
  let t = [], n;
  return n = ht.attempt(e), n.invalid || t.push({
    year: n.year,
    month: n.month,
    day: n.day
  }), n = tr.attempt(e), n.invalid || t.push({
    year: n.year,
    month: n.month,
    day: n.day
  }), ar.test(e.toLowerCase()) || [...t].forEach((o) => {
    o.day <= 12 && o.day !== o.month && t.push({
      year: o.year,
      month: o.day,
      day: o.month
    });
  }), t;
}
const ir = "zoa__T01c0__input", ur = "zoa__Zrad1__label", cr = "zoa__-K9Da__grid", dr = "zoa__zCutL__inputContainer", _r = "zoa__DBAOk__datePopup", fr = "zoa__e8GS9__popupSection", mr = "zoa__tN5Fw__yearGrid", pr = "zoa__Z8UyZ__monthGrid", br = "zoa__6Tknh__dayGrid", hr = "zoa__oPUQ-__editing", yr = "zoa__GtJv-__suggestion", vr = {
  input: ir,
  label: ur,
  "label--right": "zoa__SxVfB__label--right",
  "label--below": "zoa__YLIdi__label--below",
  "label--above": "zoa__E7ufb__label--above",
  grid: cr,
  "grid--above": "zoa__KeVwr__grid--above",
  "grid--below": "zoa__KyL5-__grid--below",
  "grid--left": "zoa__Ytl98__grid--left",
  "grid--right": "zoa__KxP7T__grid--right",
  inputContainer: dr,
  datePopup: _r,
  popupSection: fr,
  yearGrid: mr,
  monthGrid: pr,
  dayGrid: br,
  editing: hr,
  suggestion: yr
}, gr = ["id"], Tr = ["for"], Er = ["placeholder", "id"], Sr = ["onClick", "onKeydown"], Ar = {
  __name: "DateAmbiguous",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: Object
    },
    /**
     * Text for the input label.
     */
    label: {
      type: String,
      default: "Date"
    },
    /**
     * Position of the input label (or none).
     * @values left, right, above, below, none
     */
    labelPosition: {
      type: String,
      default: "above"
    },
    /**
     * Debounce delay for the `change` event, in ms.
     */
    delay: {
      type: Number,
      default: 200
    },
    /**
     * Text to display in the blank input.
     */
    placeholder: {
      type: String,
      default: null
    }
  },
  emits: [
    /**
     * Emitted when the value changes; debounced if the delay prop is > 0.
     * @arg {object} newValue the new value
     */
    "change",
    /**
     * @ignore
     */
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const n = e, { componentId: o, subId: a } = Z(), { valueChanged: l } = J(t, n.delay), r = R(null), s = R(!1), i = R(null), { focused: u } = ne(i), d = R(null), h = R(null), p = R(null), N = ue(d), I = ne(d), E = ue(h), D = ne(h), b = ue(p), v = ne(p), C = O(() => {
      let m;
      return N.focused.value ? m = d.value : E.focused.value ? m = h.value : b.focused.value && (m = p.value), m;
    }), A = O(() => {
      let m;
      return I.focused.value ? m = d.value : D.focused.value ? m = h.value : v.focused.value && (m = p.value), m;
    });
    B("Enter", () => {
      C && C.value.children[0].focus();
    }), B("ArrowLeft", () => {
      if (!A.value)
        return;
      const m = A.value.querySelector("button:focus");
      !m || !m.previousElementSibling ? A.value.children[A.value.children.length - 1].focus() : m.previousElementSibling.focus();
    }), B("ArrowRight", () => {
      if (!A.value)
        return;
      const m = A.value.querySelector("button:focus");
      !m || !m.nextElementSibling ? A.value.children[0].focus() : m.nextElementSibling.focus();
    }), B("Escape", () => {
      const m = i.value.querySelector("*:focus");
      m && m.blur();
    });
    const f = O(() => ({
      year: he.value,
      month: ae.value,
      day: j.value
    })), U = O(() => Ye(
      f.value.year,
      f.value.month,
      f.value.day
    ));
    function _() {
      r.value.value = U.value, s.value = !1;
    }
    const T = R([]);
    function k(m) {
      s.value = !0, T.value = sr(m.target.value);
    }
    const z = Ge(k, 200);
    function q(m) {
      P.value = m.year, ae.value = m.month, j.value = m.day, T.value = [];
    }
    const P = R(null), Ie = O(() => {
      let m = 11;
      return P.value && P.value >= 1e3 ? m = Math.floor(P.value / 10) * 10 : P.value && P.value < 1e3 && (m = P.value * 10), Array(10).fill(m).map((H, w) => H + w);
    }), he = O(() => {
      if (!P.value)
        return null;
      if (P.value >= 1e3)
        return P.value;
      let m = 10 ** (4 - P.value.toString().length);
      return P.value * m;
    }), vt = O(() => he.value % 100 === 0 ? he.value % 400 === 0 : he.value % 4 === 0);
    function gt(m) {
      return m.toString().padEnd(4, "0");
    }
    function Tt(m) {
      P.value = m, j.value && j.value > se.value && (j.value = se.value);
    }
    const ae = R(null), Et = R(He.abbreviated_months), se = O(() => [4, 6, 9, 11].includes(ae.value) ? 30 : ae.value === 2 ? vt.value ? 29 : 28 : 31);
    function St(m) {
      ae.value = m, j.value && j.value > se.value && (j.value = se.value);
    }
    const j = R(null), At = O(() => Array(se.value).fill(1).map((m, H) => H + 1));
    function Ot(m) {
      j.value = m;
    }
    function Ye(m, H, w) {
      const K = He.abbreviated_months[H - 1];
      return m && H && w ? `${w} ${K} ${m}` : m && H ? `${K} ${m}` : m && w ? `${w} ??? ${m}` : H && w ? `${w} ${K}` : m || (H ? K : w ? `day ${w}` : null);
    }
    return re(f, () => {
      _(), l(f.value);
    }), (m, H) => (g(), S("div", {
      class: c([m.$style.grid, m.$style[`grid--${e.labelPosition}`]]),
      id: y(o),
      ref_key: "container",
      ref: i
    }, [
      e.label && e.labelPosition !== "none" ? (g(), S("label", {
        key: 0,
        for: y(a)("date"),
        class: c([m.$style.label, m.$style[`label--${e.labelPosition}`]])
      }, M(e.label), 11, Tr)) : F("", !0),
      $("div", {
        class: c(m.$style.inputContainer)
      }, [
        $("input", {
          type: "text",
          placeholder: e.placeholder,
          id: y(a)("date"),
          class: c([m.$style.input, s.value ? m.$style.editing : ""]),
          ref_key: "displayBox",
          ref: r,
          onInput: H[0] || (H[0] = (...w) => y(z) && y(z)(...w))
        }, null, 42, Er),
        y(u) ? (g(), S("div", {
          key: 0,
          class: c(m.$style.datePopup)
        }, [
          T.value.length > 0 ? (g(), S("div", {
            key: 0,
            class: c(m.$style.popupSection)
          }, [
            (g(!0), S(X, null, Q(T.value, (w) => (g(), S("span", {
              onClick: (K) => q(w),
              onKeydown: Mt((K) => q(w), ["enter"]),
              class: c(m.$style.suggestion),
              tabindex: "0"
            }, M(Ye(w.year, w.month, w.day)), 43, Sr))), 256))
          ], 2)) : F("", !0),
          $("div", {
            class: c(m.$style.popupSection)
          }, [
            x(Ee, {
              label: "year",
              "label-position": "left",
              placeholder: 1900,
              modelValue: P.value,
              "onUpdate:modelValue": H[1] || (H[1] = (w) => P.value = w),
              min: 0,
              max: 9999
            }, null, 8, ["modelValue"]),
            $("div", {
              class: c(m.$style.yearGrid),
              tabindex: "0",
              ref_key: "yearBtns",
              ref: d
            }, [
              (g(!0), S(X, null, Q(Ie.value, (w) => (g(), we(fe, {
                size: "sm",
                onClick: (K) => Tt(w),
                tabindex: "-1"
              }, {
                default: Re(() => [
                  ie(M(gt(w)), 1)
                ]),
                _: 2
              }, 1032, ["onClick"]))), 256))
            ], 2)
          ], 2),
          $("div", {
            class: c(m.$style.popupSection)
          }, [
            x(Ee, {
              label: "month",
              "label-position": "left",
              placeholder: 1,
              modelValue: ae.value,
              "onUpdate:modelValue": H[2] || (H[2] = (w) => ae.value = w),
              min: 1,
              max: 12
            }, null, 8, ["modelValue"]),
            $("div", {
              class: c(m.$style.monthGrid),
              tabindex: "0",
              ref_key: "monthBtns",
              ref: h
            }, [
              (g(!0), S(X, null, Q(Et.value, (w, K) => (g(), we(fe, {
                size: "sm",
                onClick: (ps) => St(K + 1),
                tabindex: "-1"
              }, {
                default: Re(() => [
                  ie(M(w), 1)
                ]),
                _: 2
              }, 1032, ["onClick"]))), 256))
            ], 2)
          ], 2),
          $("div", {
            class: c(m.$style.popupSection)
          }, [
            x(Ee, {
              label: "day",
              "label-position": "left",
              placeholder: 1,
              modelValue: j.value,
              "onUpdate:modelValue": H[3] || (H[3] = (w) => j.value = w),
              min: 1,
              max: se.value
            }, null, 8, ["modelValue", "max"]),
            $("div", {
              class: c(m.$style.dayGrid),
              tabindex: "0",
              ref_key: "dayBtns",
              ref: p
            }, [
              (g(!0), S(X, null, Q(At.value, (w) => (g(), we(fe, {
                size: "sm",
                onClick: (K) => Ot(w),
                tabindex: "-1"
              }, {
                default: Re(() => [
                  ie(M(w), 1)
                ]),
                _: 2
              }, 1032, ["onClick"]))), 256))
            ], 2)
          ], 2)
        ], 2)) : F("", !0)
      ], 2)
    ], 10, gr));
  }
}, Or = {
  $style: vr
}, $r = /* @__PURE__ */ V(Ar, [["__cssModules", Or]]), Nr = "zoa__wKiUj__input", Ir = "zoa__wdDOR__label", wr = "zoa__NU5xO__grid", Rr = "zoa__faDBS__slider", Dr = "zoa__pxPuS__track", kr = "zoa__YIkY8__valueLabel", Mr = {
  input: Nr,
  label: Ir,
  "label--right": "zoa__-ofKG__label--right",
  "label--below": "zoa__0HdYJ__label--below",
  "label--above": "zoa__PM4XH__label--above",
  grid: wr,
  "grid--above": "zoa__mmKWI__grid--above",
  "grid--below": "zoa__6m720__grid--below",
  "grid--left": "zoa__y6mEj__grid--left",
  "grid--right": "zoa__-c8cX__grid--right",
  "wrapper--value-label-below": "zoa__3DNmv__wrapper--value-label-below",
  "wrapper--value-label-above": "zoa__7bdFW__wrapper--value-label-above",
  slider: Rr,
  track: Dr,
  "track--active": "zoa__q61Yj__track--active",
  valueLabel: kr,
  "valueLabel--below": "zoa__LNFdb__valueLabel--below",
  "valueLabel--above": "zoa__xDqQu__valueLabel--above"
}, Cr = ["id"], Ur = ["for"], zr = ["min", "max", "step", "id"], Pr = {
  __name: "Slider",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: Number
    },
    /**
     * Text for the input label.
     */
    label: {
      type: String,
      default: "Range"
    },
    /**
     * Position of the input label (or none).
     * @values left, right, above, below, none
     */
    labelPosition: {
      type: String,
      default: "above"
    },
    /**
     * Debounce delay for the `change` event, in ms.
     */
    delay: {
      type: Number,
      default: 200
    },
    /**
     * Number to set the slider at initially.
     */
    placeholder: {
      type: [Number, void 0],
      default: null
    },
    /**
     * The lowest number displayed on the slider.
     */
    min: {
      type: Number,
      default: 0
    },
    /**
     * The highest number displayed on the slider.
     */
    max: {
      type: Number,
      default: 100
    },
    /**
     * The granularity of accepted values; e.g. 1 allows any integer and 0.1 allows floats to one decimal place.
     */
    step: {
      type: Number,
      default: 1
    },
    /**
     * The fraction along the bar to set the value initially (as opposed to setting an explicit number); e.g. 0.5 sets an initial value halfway along the bar.
     */
    placeholderPosition: {
      type: Number,
      default: 0.5
    },
    /**
     * The position of the dynamic label displaying the current value (above or below the slider).
     * @values above, below
     */
    valueLabelPosition: {
      type: String,
      default: "below"
    },
    /**
     * Do not allow values below this value; the handle will stop at this point, even if the `min` is lower than this.
     */
    validMin: {
      type: Number,
      default: null
    },
    /**
     * Do not allow values above this point; the handle will stop at this point, even if the `max` is higher than this.
     */
    validMax: {
      type: Number,
      default: null
    },
    /**
     * Highlight the track to the right of the handle rather than the left.
     */
    activeTrackRight: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    /**
     * Emitted when the value changes; debounced if the delay prop is > 0.
     * @arg {number} newValue the new value
     */
    "change",
    /**
     * @ignore
     */
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const n = e, { componentId: o, subId: a } = Z(), { value: l } = J(t, n), r = R(null), s = R(null), i = O(() => n.validMin ? Math.max(Number(n.validMin), Number(n.min)) : Number(n.min)), u = O(() => n.validMax ? Math.min(Number(n.validMax), Number(n.max)) : Number(n.max)), d = ne(r), h = ue(s), p = O(() => l.value < i.value ? i.value : l.value > u.value ? u.value : l.value), N = O(() => n.activeTrackRight ? { left: `${E.value.handle}%` } : { right: `${100 - E.value.handle}%` }), I = O(() => (l.value - n.min) / (n.max - n.min)), E = O(() => D());
    function D() {
      try {
        const f = r.value.clientWidth, U = 24;
        s.value && (s.value.innerText = p.value);
        const _ = s.value ? s.value.clientWidth : 0, T = f / 2, q = (I.value * f - T) / T * (U / 2), P = q + _ / 2, Ie = q / f;
        return {
          handle: ((I.value - Ie) * 100).toFixed(2),
          label: ((I.value - P / f) * 100).toFixed(2)
        };
      } catch {
        const f = I.value * 100;
        return { handle: f.toFixed(2), label: f.toFixed(2) };
      }
    }
    function b() {
      if (n.placeholder !== null && n.placeholder !== void 0)
        return n.placeholder;
      let U = (n.max - n.min) / (1 / n.placeholderPosition), _ = U % n.step;
      return U - _ + n.min;
    }
    function v() {
      if (l.value === n.max)
        return;
      let f = Number(l.value) + Number(n.step);
      f > n.max ? l.value = n.max : l.value = f;
    }
    function C() {
      if (l.value === n.min)
        return;
      let f = Number(l.value) - Number(n.step);
      f < n.min ? l.value = n.min : l.value = f;
    }
    function A(f) {
      f.preventDefault(), f.wheelDelta > 0 ? v() : f.wheelDelta < 0 && C();
    }
    return B("ArrowDown", (f) => {
      f.preventDefault(), (d.focused.value || h.focused.value) && C();
    }), B("ArrowLeft", (f) => {
      f.preventDefault(), (d.focused.value || h.focused.value) && C();
    }), B("ArrowUp", (f) => {
      f.preventDefault(), (d.focused.value || h.focused.value) && v();
    }), B("ArrowRight", (f) => {
      f.preventDefault(), (d.focused.value || h.focused.value) && v();
    }), re(l, (f) => {
      Number(f) >= Number(u.value) && (l.value = u.value), Number(f) <= Number(i.value) && (l.value = i.value);
    }), l.value = b(), (f, U) => (g(), S("div", {
      class: c([
        f.$style.grid,
        f.$style[`grid--${e.labelPosition}`],
        f.$style[`wrapper--value-label-${e.valueLabelPosition}`]
      ]),
      id: y(o)
    }, [
      e.label && e.labelPosition !== "none" ? (g(), S("label", {
        key: 0,
        class: c([f.$style.label, f.$style[`label--${e.labelPosition}`]]),
        for: y(a)("slider")
      }, M(e.label), 11, Ur)) : F("", !0),
      $("div", {
        class: c(f.$style.slider),
        onWheel: A
      }, [
        $("span", {
          class: c(f.$style.track)
        }, null, 2),
        $("span", {
          class: c([f.$style.track, f.$style["track--active"]]),
          style: Ke(N.value)
        }, null, 6),
        $("span", {
          class: c([
            f.$style.valueLabel,
            f.$style[`valueLabel--${e.valueLabelPosition}`]
          ]),
          style: Ke({ left: `${E.value.label}%` }),
          ref_key: "valueLabel",
          ref: s,
          tabindex: "0"
        }, M(p.value), 7),
        ee($("input", {
          type: "range",
          min: e.min,
          max: e.max,
          step: e.step,
          id: y(a)("slider"),
          class: c(f.$style.input),
          "onUpdate:modelValue": U[0] || (U[0] = (_) => te(l) ? l.value = _ : null),
          ref_key: "slider",
          ref: r
        }, null, 10, zr), [
          [de, y(l)]
        ])
      ], 34)
    ], 10, Cr));
  }
}, Hr = {
  $style: Mr
}, Le = /* @__PURE__ */ V(Pr, [["__cssModules", Hr]]), Lr = "zoa__O86-F__input", xr = "zoa__0YsN9__label", Br = "zoa__SiTNx__grid", Gr = {
  input: Lr,
  label: xr,
  "label--right": "zoa__pjeV2__label--right",
  "label--below": "zoa__12bIu__label--below",
  "label--above": "zoa__sjy2f__label--above",
  grid: Br,
  "grid--above": "zoa__8N5XC__grid--above",
  "grid--below": "zoa__X9vRI__grid--below",
  "grid--left": "zoa__unXPL__grid--left",
  "grid--right": "zoa__WXVvK__grid--right"
}, Fr = ["id"], Vr = {
  __name: "RangeSlider",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: Array
    },
    /**
     * Text for the input label.
     */
    label: {
      type: String,
      default: "Range"
    },
    /**
     * Position of the input label (or none).
     * @values left, right, above, below, none
     */
    labelPosition: {
      type: String,
      default: "above"
    },
    /**
     * Debounce delay for the `change` event, in ms.
     */
    delay: {
      type: Number,
      default: 200
    },
    /**
     * Number to set both sliders at initially.
     */
    placeholder: {
      type: Number,
      default: null
    },
    /**
     * The lowest number displayed on both sliders (will only be accessible by the lower value slider).
     */
    min: {
      type: Number,
      default: 0
    },
    /**
     * The highest number displayed on both sliders (will only be accessible by the upper value slider).
     */
    max: {
      type: Number,
      default: 100
    },
    /**
     * The granularity of accepted values; e.g. 1 allows any integer and 0.1 allows floats to one decimal place. Also the minimum gap between the two values.
     */
    step: {
      type: Number,
      default: 1
    },
    /**
     * The text label for the lower value slider.
     */
    labelLower: {
      type: String,
      default: "Lower"
    },
    /**
     * The text label for the upper value slider.
     */
    labelUpper: {
      type: String,
      default: "Upper"
    },
    /**
     * If true, place the slider text labels on the right rather than the left.
     */
    labelsRight: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    /**
     * Emitted when the value changes; debounced if the delay prop is > 0.
     * @arg {Array} newValue the new value
     */
    "change",
    /**
     * @ignore
     */
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const n = e, { componentId: o, subId: a } = Z(), { valueChanged: l } = J(t, n), r = R(null), s = R(null), i = O(() => Math.max(
      Number(s.value) - Number(n.step),
      Number(n.min)
    )), u = O(() => Math.min(
      Number(r.value) + Number(n.step),
      Number(n.max)
    )), d = O(() => {
      const h = Math.min(r.value, i.value), p = Math.max(s.value, u.value);
      return [h, p];
    });
    return re(d, () => {
      l(d.value);
    }), (h, p) => (g(), S("div", {
      class: c([h.$style.grid, h.$style[`grid--${e.labelPosition}`]]),
      id: y(o)
    }, [
      e.label && e.labelPosition !== "none" ? (g(), S("span", {
        key: 0,
        class: c([h.$style.label, h.$style[`label--${e.labelPosition}`]])
      }, M(e.label), 3)) : F("", !0),
      $("div", null, [
        x(Le, {
          min: e.min,
          max: e.max,
          "valid-max": i.value,
          step: e.step,
          modelValue: r.value,
          "onUpdate:modelValue": p[0] || (p[0] = (N) => r.value = N),
          label: e.labelLower,
          "label-position": e.labelsRight ? "right" : "left",
          "value-label-position": "above",
          "placeholder-position": 0.25
        }, null, 8, ["min", "max", "valid-max", "step", "modelValue", "label", "label-position"]),
        x(Le, {
          min: e.min,
          "valid-min": u.value,
          max: e.max,
          step: e.step,
          modelValue: s.value,
          "onUpdate:modelValue": p[1] || (p[1] = (N) => s.value = N),
          label: e.labelUpper,
          "label-position": e.labelsRight ? "right" : "left",
          "placeholder-position": 0.75,
          "active-track-right": !0
        }, null, 8, ["min", "valid-min", "max", "step", "modelValue", "label", "label-position"])
      ])
    ], 10, Fr));
  }
}, jr = {
  $style: Gr
}, Yr = /* @__PURE__ */ V(Vr, [["__cssModules", jr]]);
function yt(e) {
  return { icon: O(() => {
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
const Wr = "zoa__VAeTu__main", Kr = "zoa__fVs2o__container", Xr = "zoa__THVXY__header", Zr = "zoa__paVgB__icon", Jr = {
  main: Wr,
  container: Kr,
  header: Xr,
  icon: Zr,
  "kind--info": "zoa__ITcbz__kind--info",
  "kind--warning": "zoa__ePWkZ__kind--warning",
  "kind--error": "zoa__uCNxg__kind--error",
  "kind--success": "zoa__QTxj6__kind--success"
}, qr = {
  __name: "Flash",
  props: {
    /**
     * The type of message being displayed.
     * @values info, success, warning, error
     */
    kind: {
      type: String,
      default: "info"
    },
    /**
     * The header for the flash message.
     */
    header: {
      type: String,
      default: "Here is an informational message."
    },
    /**
     * The body of the flash message. Overridden by the default slot.
     */
    message: {
      type: String,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis at tellus at urna condimentum."
    }
  },
  setup(e) {
    const t = e, { icon: n } = yt(t);
    return (o, a) => (g(), S("div", {
      class: c([o.$style.main, o.$style.container, o.$style[`kind--${e.kind}`]])
    }, [
      $("div", {
        class: c(o.$style.header)
      }, [
        x(y(ce), {
          icon: ["fa-solid", y(n)],
          class: c(o.$style.icon)
        }, null, 8, ["icon", "class"]),
        $("h2", null, M(e.header), 1)
      ], 2),
      $("div", {
        class: c(o.$style.content)
      }, [
        xe(o.$slots, "default", {}, () => [
          ie(M(e.message), 1)
        ])
      ], 2)
    ], 2));
  }
}, Qr = {
  $style: Jr
}, es = /* @__PURE__ */ V(qr, [["__cssModules", Qr]]), ts = "zoa__-6BJv__main", ns = "zoa__JzwYn__container", os = "zoa__Fn9SR__header", as = "zoa__G4zlh__icon", ls = "zoa__KdMNq__form", rs = "zoa__PyVzA__close", ss = "zoa__YKx2f__content", is = {
  main: ts,
  container: ns,
  header: os,
  icon: as,
  "kind--info": "zoa__dJXHY__kind--info",
  "kind--warning": "zoa__GLN89__kind--warning",
  "kind--error": "zoa__3HPxn__kind--error",
  "kind--success": "zoa__O1vse__kind--success",
  form: ls,
  close: rs,
  content: ss
}, us = {
  __name: "Modal",
  props: {
    /**
     * The type of message being displayed.
     * @values info, success, warning, error
     */
    kind: {
      type: String,
      default: "info"
    },
    /**
     * The header for the modal.
     */
    header: {
      type: String,
      default: "Here is an informational message."
    },
    /**
     * The body of the modal. Overridden by the default slot.
     */
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
  emits: [
    /**
     * Modal opened.
     */
    "opened",
    /**
     * Modal closed.
     */
    "closed"
  ],
  setup(e, { emit: t }) {
    const n = e, { icon: o } = yt(n), a = R(null);
    function l() {
      a.value.show(), t("opened");
    }
    return (r, s) => (g(), S(X, null, [
      x(y(fe), Ct(e.buttonArgs, { onClick: l }), null, 16),
      $("dialog", {
        ref_key: "modal",
        ref: a,
        class: c([r.$style.main, r.$style[`kind--${e.kind}`]])
      }, [
        $("div", {
          class: c(r.$style.container)
        }, [
          $("form", {
            method: "dialog",
            class: c(r.$style.form),
            onSubmit: s[0] || (s[0] = (i) => t("closed"))
          }, [
            $("button", {
              class: c(r.$style.close)
            }, [
              x(y(ce), { icon: "fa-solid fa-xmark" })
            ], 2)
          ], 34),
          $("div", {
            class: c(r.$style.header)
          }, [
            x(y(ce), {
              icon: ["fa-solid", y(o)],
              class: c(r.$style.icon)
            }, null, 8, ["icon", "class"]),
            $("h2", null, M(e.header), 1)
          ], 2),
          $("div", {
            class: c(r.$style.content)
          }, [
            xe(r.$slots, "default", {}, () => [
              ie(M(e.message), 1)
            ])
          ], 2)
        ], 2)
      ], 2)
    ], 64));
  }
}, cs = {
  $style: is
}, ds = /* @__PURE__ */ V(us, [["__cssModules", cs]]), _s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ZoaAutocompleteTextbox: kn,
  ZoaButton: fe,
  ZoaCheckbox: Te,
  ZoaDateAmbiguous: $r,
  ZoaDateSimple: oa,
  ZoaDropdown: lo,
  ZoaFlash: es,
  ZoaModal: ds,
  ZoaMultiselect: Ho,
  ZoaNumber: Ee,
  ZoaRangeSlider: Yr,
  ZoaSlider: Le,
  ZoaTextbox: rn
}, Symbol.toStringTag, { value: "Module" })), fs = new RegExp("[A-Z]+(?![a-z])|[A-Z]", "g");
function ms(e) {
  return e.replace(fs, (t, n) => (n ? "-" : "") + t.toLowerCase());
}
const Ts = {
  install(e, t) {
    Object.entries(_s).forEach((n) => {
      const o = ms(n[0]);
      e.component(o, n[1]);
    });
  }
};
export {
  Ts as Zoa,
  kn as ZoaAutocompleteTextbox,
  fe as ZoaButton,
  Te as ZoaCheckbox,
  $r as ZoaDateAmbiguous,
  oa as ZoaDateSimple,
  lo as ZoaDropdown,
  es as ZoaFlash,
  ds as ZoaModal,
  Ho as ZoaMultiselect,
  Ee as ZoaNumber,
  Yr as ZoaRangeSlider,
  Le as ZoaSlider,
  rn as ZoaTextbox
};
