import { openBlock as O, createElementBlock as C, normalizeClass as g, unref as m, renderSlot as Ne, createTextVNode as Se, toDisplayString as G, ref as w, computed as I, watch as Ae, customRef as Gt, getCurrentScope as jt, onScopeDispose as Ft, reactive as bt, withDirectives as pe, createElementVNode as R, isRef as _e, vModelCheckbox as Tt, isProxy as Yt, toRaw as Kt, Fragment as ge, renderList as Oe, vModelRadio as Zt, inject as M, createCommentVNode as ze, defineComponent as st, h as xt, createVNode as F, vShow as at, vModelText as We, watchEffect as Xt, withKeys as qt, withCtx as je, createBlock as Ce, vModelSelect as Jt, normalizeStyle as Fe, provide as ke, mergeProps as ot } from "vue";
import { parse as Xe, icon as Qt, config as Et, text as el, library as tl } from "@fortawesome/fontawesome-svg-core";
import { faCircleXmark as ll, faXmark as nl, faCircleInfo as al, faCircleExclamation as ol, faCircleCheck as rl, faCircleQuestion as ul, faCheck as sl, faCaretDown as il } from "@fortawesome/free-solid-svg-icons";
function Ue(e) {
  function t(n) {
    return n = n || [], e.class && Array.isArray(e.class) ? n = n.concat(e.class) : e.class && n.push(e.class), n;
  }
  return { addPropClasses: t };
}
const cl = "zoa__button__main", dl = "zoa__button__checkbox", pl = {
  main: cl,
  "kind--normal": "zoa__button__kind--normal",
  checkbox: dl,
  "kind--primary": "zoa__button__kind--primary",
  "kind--alt": "zoa__button__kind--alt",
  "size--sm": "zoa__button__size--sm",
  "size--md": "zoa__button__size--md"
}, Q = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, o] of t)
    n[l] = o;
  return n;
}, fl = {
  __name: "Button",
  props: {
    /**
     * Additional class(es) to add to the root element.
     */
    class: {
      type: [String, Array, null],
      default: null
    },
    /**
     * The text for the button; overridden by the default slot.
     */
    label: {
      type: String,
      default: "Button"
    },
    /**
     * The appearance class of the button.
     * @values normal, primary, alt
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
    const t = e, { addPropClasses: n } = Ue(t);
    return (l, o) => (O(), C("button", {
      class: g(
        m(n)([
          l.$style.main,
          l.$style[`kind--${e.kind}`],
          l.$style[`size--${e.size}`]
        ])
      )
    }, [
      Ne(l.$slots, "default", {}, () => [
        Se(G(e.label), 1)
      ])
    ], 2));
  }
}, ml = {
  $style: pl
}, Ye = /* @__PURE__ */ Q(fl, [["__cssModules", ml]]);
let bl = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
function it() {
  const e = w(bl(6));
  function t(n) {
    return `${e.value}__${n}`;
  }
  return { componentId: e, subId: t };
}
const { now: vt } = Date, qe = (e, t = 1, n) => {
  t = Math.max(1, t);
  const l = (n == null ? void 0 : n.leading) ?? !1, o = (n == null ? void 0 : n.trailing) ?? !0, r = Math.max((n == null ? void 0 : n.maxWait) ?? 1 / 0, t);
  let c, u, a = 0, s = 0;
  const p = () => {
    const x = vt(), V = x - a, P = x - s, L = V >= t || P >= r;
    return [x, L];
  }, d = (x) => {
    if (s = x, !c)
      return;
    const V = c;
    c = void 0, e.apply(void 0, V);
  }, f = () => {
    b(0);
  }, _ = () => {
    u && (f(), d(vt()));
  }, T = (x) => {
    if (s = x, l)
      return d(x);
  }, k = (x) => {
    if (o && c)
      return d(x);
    c = void 0;
  }, N = () => {
    u = void 0;
    const [x, V] = p();
    return V ? k(x) : v(x);
  }, v = (x) => {
    const V = x - a, P = x - s, L = t - V, $ = r - P, U = Math.min(L, $);
    return b(U);
  }, b = (x) => {
    u && clearTimeout(u), !(x <= 0) && (u = setTimeout(N, x));
  }, y = (...x) => {
    const [V, P] = p(), L = !!u;
    if (c = x, a = V, (P || !u) && b(t), P)
      return L ? d(V) : T(V);
  };
  return y.cancel = f, y.flush = _, y;
};
function se(e, t) {
  let n;
  try {
    n = parseInt(t.delay) || 0;
  } catch {
    n = 0;
  }
  const l = w(null);
  function o(a) {
    e("change", a);
  }
  const r = qe(o, n);
  function c(a) {
    e("update:modelValue", a), l.value = a, r(a);
  }
  const u = I({
    get() {
      return t.modelValue === void 0 ? l.value : t.modelValue;
    },
    set(a) {
      c(a);
    }
  });
  return { emitChange: r, valueChanged: c, value: u };
}
function vl(e, t) {
  let n, l, o;
  const r = w(!0), c = () => {
    r.value = !0, o();
  };
  Ae(e, c, { flush: "sync" });
  const u = typeof t == "function" ? t : t.get, a = typeof t == "function" ? void 0 : t.set, s = Gt((p, d) => (l = p, o = d, {
    get() {
      return r.value && (n = u(), r.value = !1), l(), n;
    },
    set(f) {
      a == null || a(f);
    }
  }));
  return Object.isExtensible(s) && (s.trigger = c), s;
}
function _l(e) {
  return jt() ? (Ft(e), !0) : !1;
}
function be(e) {
  return typeof e == "function" ? e() : m(e);
}
const Ot = typeof window < "u" && typeof document < "u", yl = Object.prototype.toString, hl = (e) => yl.call(e) === "[object Object]", Te = () => {
}, gl = /* @__PURE__ */ $l();
function $l() {
  var e;
  return Ot && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function Nt(e, t) {
  function n(...l) {
    return new Promise((o, r) => {
      Promise.resolve(e(() => t.apply(this, l), { fn: t, thisArg: this, args: l })).then(o).catch(r);
    });
  }
  return n;
}
function Il(e, t = {}) {
  let n, l, o = Te;
  const r = (u) => {
    clearTimeout(u), o(), o = Te;
  };
  return (u) => {
    const a = be(e), s = be(t.maxWait);
    return n && r(n), a <= 0 || s !== void 0 && s <= 0 ? (l && (r(l), l = null), Promise.resolve(u())) : new Promise((p, d) => {
      o = t.rejectOnCancel ? d : p, s && !l && (l = setTimeout(() => {
        n && r(n), l = null, p(u());
      }, s)), n = setTimeout(() => {
        l && r(l), l = null, p(u());
      }, a);
    });
  };
}
function kl(e, t = !0, n = !0, l = !1) {
  let o = 0, r, c = !0, u = Te, a;
  const s = () => {
    r && (clearTimeout(r), r = void 0, u(), u = Te);
  };
  return (d) => {
    const f = be(e), _ = Date.now() - o, T = () => a = d();
    return s(), f <= 0 ? (o = Date.now(), T()) : (_ > f && (n || !c) ? (o = Date.now(), T()) : t && (a = new Promise((k, N) => {
      u = l ? N : k, r = setTimeout(() => {
        o = Date.now(), c = !0, k(T()), s();
      }, Math.max(0, f - _));
    })), !n && !r && (r = setTimeout(() => c = !0, f)), c = !1, a);
  };
}
function Sl(e, t = 200, n = {}) {
  return Nt(
    Il(t, n),
    e
  );
}
function zl(e, t = 200, n = !1, l = !0, o = !1) {
  return Nt(
    kl(t, n, l, o),
    e
  );
}
function Me(e) {
  var t;
  const n = be(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Le = Ot ? window : void 0;
function de(...e) {
  let t, n, l, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, l, o] = e, t = Le) : [t, n, l, o] = e, !t)
    return Te;
  Array.isArray(n) || (n = [n]), Array.isArray(l) || (l = [l]);
  const r = [], c = () => {
    r.forEach((p) => p()), r.length = 0;
  }, u = (p, d, f, _) => (p.addEventListener(d, f, _), () => p.removeEventListener(d, f, _)), a = Ae(
    () => [Me(t), be(o)],
    ([p, d]) => {
      if (c(), !p)
        return;
      const f = hl(d) ? { ...d } : d;
      r.push(
        ...n.flatMap((_) => l.map((T) => u(p, _, T, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), s = () => {
    a(), c();
  };
  return _l(s), s;
}
let _t = !1;
function ct(e, t, n = {}) {
  const { window: l = Le, ignore: o = [], capture: r = !0, detectIframe: c = !1 } = n;
  if (!l)
    return;
  gl && !_t && (_t = !0, Array.from(l.document.body.children).forEach((f) => f.addEventListener("click", Te)), l.document.documentElement.addEventListener("click", Te));
  let u = !0;
  const a = (f) => o.some((_) => {
    if (typeof _ == "string")
      return Array.from(l.document.querySelectorAll(_)).some((T) => T === f.target || f.composedPath().includes(T));
    {
      const T = Me(_);
      return T && (f.target === T || f.composedPath().includes(T));
    }
  }), p = [
    de(l, "click", (f) => {
      const _ = Me(e);
      if (!(!_ || _ === f.target || f.composedPath().includes(_))) {
        if (f.detail === 0 && (u = !a(f)), !u) {
          u = !0;
          return;
        }
        t(f);
      }
    }, { passive: !0, capture: r }),
    de(l, "pointerdown", (f) => {
      const _ = Me(e);
      _ && (u = !f.composedPath().includes(_) && !a(f));
    }, { passive: !0 }),
    c && de(l, "blur", (f) => {
      setTimeout(() => {
        var _;
        const T = Me(e);
        ((_ = l.document.activeElement) == null ? void 0 : _.tagName) === "IFRAME" && !(T != null && T.contains(l.document.activeElement)) && t(f);
      }, 0);
    })
  ].filter(Boolean);
  return () => p.forEach((f) => f());
}
function Tl(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function J(...e) {
  let t, n, l = {};
  e.length === 3 ? (t = e[0], n = e[1], l = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], l = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = Le,
    eventName: r = "keydown",
    passive: c = !1,
    dedupe: u = !1
  } = l, a = Tl(t);
  return de(o, r, (p) => {
    p.repeat && be(u) || a(p) && n(p);
  }, c);
}
function xl(e = {}) {
  var t;
  const {
    window: n = Le,
    deep: l = !0
  } = e, o = (t = e.document) != null ? t : n == null ? void 0 : n.document, r = () => {
    var u;
    let a = o == null ? void 0 : o.activeElement;
    if (l)
      for (; a != null && a.shadowRoot; )
        a = (u = a == null ? void 0 : a.shadowRoot) == null ? void 0 : u.activeElement;
    return a;
  }, c = vl(
    () => null,
    () => r()
  );
  return n && (de(n, "blur", (u) => {
    u.relatedTarget === null && c.trigger();
  }, !0), de(n, "focus", c.trigger, !0)), c;
}
function El(e, t = {}) {
  const {
    delayEnter: n = 0,
    delayLeave: l = 0,
    window: o = Le
  } = t, r = w(!1);
  let c;
  const u = (a) => {
    const s = a ? n : l;
    c && (clearTimeout(c), c = void 0), s ? c = setTimeout(() => r.value = a, s) : r.value = a;
  };
  return o && (de(e, "mouseenter", () => u(!0), { passive: !0 }), de(e, "mouseleave", () => u(!1), { passive: !0 })), r;
}
function Ve(e, t = {}) {
  const { initialValue: n = !1, focusVisible: l = !1 } = t, o = w(!1), r = I(() => Me(e));
  de(r, "focus", (u) => {
    var a, s;
    (!l || (s = (a = u.target).matches) != null && s.call(a, ":focus-visible")) && (o.value = !0);
  }), de(r, "blur", () => o.value = !1);
  const c = I({
    get: () => o.value,
    set(u) {
      var a, s;
      !u && o.value ? (a = r.value) == null || a.blur() : u && !o.value && ((s = r.value) == null || s.focus());
    }
  });
  return Ae(
    r,
    () => {
      c.value = n;
    },
    { immediate: !0, flush: "post" }
  ), { focused: c };
}
function $e(e, t = {}) {
  const n = xl(t), l = I(() => Me(e));
  return { focused: I(() => l.value && n.value ? l.value.contains(n.value) : !1) };
}
const yt = 1;
function Ol(e, t = {}) {
  const {
    throttle: n = 0,
    idle: l = 200,
    onStop: o = Te,
    onScroll: r = Te,
    offset: c = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions: u = {
      capture: !1,
      passive: !0
    },
    behavior: a = "auto",
    window: s = Le
  } = t, p = w(0), d = w(0), f = I({
    get() {
      return p.value;
    },
    set(P) {
      T(P, void 0);
    }
  }), _ = I({
    get() {
      return d.value;
    },
    set(P) {
      T(void 0, P);
    }
  });
  function T(P, L) {
    var $, U, Y;
    if (!s)
      return;
    const X = be(e);
    X && ((Y = X instanceof Document ? s.document.body : X) == null || Y.scrollTo({
      top: ($ = be(L)) != null ? $ : _.value,
      left: (U = be(P)) != null ? U : f.value,
      behavior: be(a)
    }));
  }
  const k = w(!1), N = bt({
    left: !0,
    right: !1,
    top: !0,
    bottom: !1
  }), v = bt({
    left: !1,
    right: !1,
    top: !1,
    bottom: !1
  }), b = (P) => {
    k.value && (k.value = !1, v.left = !1, v.right = !1, v.top = !1, v.bottom = !1, o(P));
  }, y = Sl(b, n + l), x = (P) => {
    var L;
    if (!s)
      return;
    const $ = P.document ? P.document.documentElement : (L = P.documentElement) != null ? L : P, { display: U, flexDirection: Y } = getComputedStyle($), X = $.scrollLeft;
    v.left = X < p.value, v.right = X > p.value;
    const xe = Math.abs(X) <= 0 + (c.left || 0), ye = Math.abs(X) + $.clientWidth >= $.scrollWidth - (c.right || 0) - yt;
    U === "flex" && Y === "row-reverse" ? (N.left = ye, N.right = xe) : (N.left = xe, N.right = ye), p.value = X;
    let Z = $.scrollTop;
    P === s.document && !Z && (Z = s.document.body.scrollTop), v.top = Z < d.value, v.bottom = Z > d.value;
    const ie = Math.abs(Z) <= 0 + (c.top || 0), le = Math.abs(Z) + $.clientHeight >= $.scrollHeight - (c.bottom || 0) - yt;
    U === "flex" && Y === "column-reverse" ? (N.top = le, N.bottom = ie) : (N.top = ie, N.bottom = le), d.value = Z;
  }, V = (P) => {
    var L;
    if (!s)
      return;
    const $ = (L = P.target.documentElement) != null ? L : P.target;
    x($), k.value = !0, y(P), r(P);
  };
  return de(
    e,
    "scroll",
    n ? zl(V, n, !0, !1) : V,
    u
  ), de(
    e,
    "scrollend",
    b,
    u
  ), {
    x: f,
    y: _,
    isScrolling: k,
    arrivedState: N,
    directions: v,
    measure() {
      const P = be(e);
      s && P && x(P);
    }
  };
}
const Nl = "zoa__togglebutton__input", Al = "zoa__togglebutton__inputWrapper", wl = "zoa__togglebutton__container", Ml = "zoa__togglebutton__main", Cl = "zoa__togglebutton__checkbox", Rl = {
  input: Nl,
  inputWrapper: Al,
  container: wl,
  main: Ml,
  "kind--normal": "zoa__togglebutton__kind--normal",
  checkbox: Cl,
  "kind--primary": "zoa__togglebutton__kind--primary",
  "kind--alt": "zoa__togglebutton__kind--alt",
  "size--sm": "zoa__togglebutton__size--sm",
  "size--md": "zoa__togglebutton__size--md"
}, Pl = ["id", "for"], Dl = ["id", "name", "value"], Vl = {
  __name: "ToggleButton",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: [Boolean, Array],
      default: void 0
    },
    /**
     * Additional class(es) to add to the root element.
     */
    class: {
      type: [String, Array, null],
      default: null
    },
    /**
     * Text for the input label.
     */
    label: {
      type: String,
      default: "Checkbox"
    },
    /**
     * Debounce delay for the `change` event, in ms.
     */
    delay: {
      type: Number,
      default: 0
    },
    /**
     * An optional name for the toggle; useful if making a group.
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
    },
    /**
     * The appearance class of the button.
     * @values normal, primary, alt
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
    const n = e, { componentId: l, subId: o } = it(), { addPropClasses: r } = Ue(n), { value: c } = se(t, n), u = w(null), a = w(null), s = $e(u), p = I(() => n.checkValue || n.label);
    function d() {
      let f = Yt(c.value) ? Kt(c.value) : c.value;
      if (Array.isArray(f)) {
        let _ = !a.value.checked;
        f = f.filter((T) => T !== p.value), _ && f.push(p.value), c.value = f, a.value.checked = _;
      } else
        c.value = !c.value;
    }
    return J(" ", () => {
      s.focused.value && d();
    }), J("Enter", () => {
      s.focused.value && d();
    }), (f, _) => (O(), C("label", {
      id: m(l),
      for: m(o)("toggle"),
      tabindex: "0",
      ref_key: "checkboxContainer",
      ref: u,
      class: g(m(r)([f.$style.container]))
    }, [
      pe(R("input", {
        type: "checkbox",
        id: m(o)("toggle"),
        class: g(f.$style.checkbox),
        "onUpdate:modelValue": _[0] || (_[0] = (T) => _e(c) ? c.value = T : null),
        name: e.name,
        value: p.value,
        ref_key: "checkboxInput",
        ref: a
      }, null, 10, Dl), [
        [Tt, m(c)]
      ]),
      R("span", {
        class: g([f.$style.main, f.$style[`kind--${e.kind}`], f.$style[`size--${e.size}`]])
      }, [
        Ne(f.$slots, "default", {}, () => [
          Se(G(e.label), 1)
        ])
      ], 2)
    ], 10, Pl));
  }
}, Wl = {
  $style: Rl
}, Ul = /* @__PURE__ */ Q(Vl, [["__cssModules", Wl]]), Ll = "zoa__tabs__input", Bl = "zoa__tabs__inputWrapper", Hl = "zoa__tabs__tab", Gl = "zoa__tabs__tabContainer", jl = {
  input: Ll,
  inputWrapper: Bl,
  tab: Hl,
  "state--active": "zoa__tabs__state--active",
  "orient--left": "zoa__tabs__orient--left",
  "orient--right": "zoa__tabs__orient--right",
  "orient--above": "zoa__tabs__orient--above",
  "orient--below": "zoa__tabs__orient--below",
  "kind--normal": "zoa__tabs__kind--normal",
  "kind--primary": "zoa__tabs__kind--primary",
  "kind--alt": "zoa__tabs__kind--alt",
  "size--sm": "zoa__tabs__size--sm",
  "size--md": "zoa__tabs__size--md",
  tabContainer: Gl
}, Fl = ["value"], Yl = {
  __name: "Tabs",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: String,
      default: void 0
    },
    /**
     * Additional class(es) to add to the root element.
     */
    class: {
      type: [String, Array, null],
      default: null
    },
    /**
     * Debounce delay for the `change` event, in ms.
     */
    delay: {
      type: Number,
      default: 0
    },
    /**
     * The appearance class of the tabs.
     * @values normal, primary, alt
     */
    kind: {
      type: String,
      default: "normal"
    },
    /**
     * The size class of the tabs.
     * @values sm, md
     */
    size: {
      type: String,
      default: "md"
    },
    /**
     * The orientation of the tab group (above/below are horizontal, left/right
     * are vertical) and position of the active indicator.
     * @values above, below, left, right
     */
    activePosition: {
      type: String,
      default: "below"
    },
    /**
     * The options available to select. Each item can be a string, or an object
     * with `label`, `value`, and `order` keys (one of label/value required; order
     * is optional).
     */
    options: {
      type: Array
    },
    /**
     * Initial value to set. If not set, or not a valid option, the first option
     * will be used.
     */
    initialValue: {
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
    const n = e;
    it();
    const { addPropClasses: l } = Ue(n), { value: o } = se(t, n), r = w(null);
    w(null), $e(r);
    const c = I(() => {
      let u = [];
      return n.options.forEach((a) => {
        typeof a == "object" ? u.push({
          label: a.label || a.value,
          value: a.value || a.label,
          order: a.order == null ? null : a.order
        }) : u.push({ label: a, value: a });
      }), u.sort((a, s) => {
        let p = 0;
        (a.order != null || s.order != null) && (p = a.order != null && s.order != null ? a.order - s.order : a.order != null ? -1 : 1);
        let d = a.label.localeCompare(s.label);
        return p !== 0 ? p : d;
      }), u;
    });
    return o.value == null && (n.initialValue && c.value.some((u) => u.value === n.initialValue) ? o.value = n.initialValue : o.value = c.value[0].value), (u, a) => (O(), C("div", {
      class: g(m(l)([]))
    }, [
      R("ul", {
        class: g([u.$style.tabContainer, u.$style[`orient--${e.activePosition}`]])
      }, [
        (O(!0), C(ge, null, Oe(c.value, (s) => (O(), C("li", null, [
          R("label", {
            tabindex: "0",
            class: g([
              u.$style.tab,
              u.$style[`orient--${e.activePosition}`],
              u.$style[`kind--${e.kind}`],
              u.$style[`size--${e.size}`],
              u.$style[`state--${m(o) === s.value ? "active" : "inactive"}`]
            ])
          }, [
            pe(R("input", {
              type: "radio",
              value: s.value,
              "onUpdate:modelValue": a[0] || (a[0] = (p) => _e(o) ? o.value = p : null)
            }, null, 8, Fl), [
              [Zt, m(o)]
            ]),
            R("span", null, G(s.label), 1)
          ], 2)
        ]))), 256))
      ], 2)
    ], 2));
  }
}, Kl = {
  $style: jl
}, Zl = /* @__PURE__ */ Q(Yl, [["__cssModules", Kl]]), Xl = "zoa__label__main", ql = {
  main: Xl,
  "main--right": "zoa__label__main--right",
  "main--left": "zoa__label__main--left",
  "main--above": "zoa__label__main--above",
  "main--below": "zoa__label__main--below",
  "main--none": "zoa__label__main--none"
}, Jl = ["id", "for", "tabindex"], Ql = ["id"], en = {
  __name: "Label",
  props: {
    label: {
      type: String
    },
    labelPosition: {
      type: String,
      default: "above"
    },
    inputId: {
      type: String
    },
    legend: {
      type: Boolean,
      default: !1
    },
    tabbable: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = M("labelId");
    return (n, l) => e.label && !e.legend ? (O(), C("label", {
      key: 0,
      id: m(t),
      for: e.inputId,
      class: g([n.$style.main, n.$style[`main--${e.labelPosition}`]]),
      tabindex: e.tabbable ? 0 : -1
    }, G(e.label), 11, Jl)) : e.label ? (O(), C("legend", {
      key: 1,
      id: m(t),
      class: g([n.$style.main, n.$style[`main--${e.labelPosition}`]])
    }, G(e.label), 11, Ql)) : ze("", !0);
  }
}, tn = {
  $style: ql
}, ht = /* @__PURE__ */ Q(en, [["__cssModules", tn]]);
function gt(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    t && (l = l.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, l);
  }
  return n;
}
function ve(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gt(Object(n), !0).forEach(function(l) {
      ae(e, l, n[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gt(Object(n)).forEach(function(l) {
      Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(n, l));
    });
  }
  return e;
}
function Je(e) {
  "@babel/helpers - typeof";
  return Je = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Je(e);
}
function ae(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function ln(e, t) {
  if (e == null)
    return {};
  var n = {}, l = Object.keys(e), o, r;
  for (r = 0; r < l.length; r++)
    o = l[r], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function nn(e, t) {
  if (e == null)
    return {};
  var n = ln(e, t), l, o;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    for (o = 0; o < r.length; o++)
      l = r[o], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (n[l] = e[l]);
  }
  return n;
}
function rt(e) {
  return an(e) || on(e) || rn(e) || un();
}
function an(e) {
  if (Array.isArray(e))
    return ut(e);
}
function on(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function rn(e, t) {
  if (e) {
    if (typeof e == "string")
      return ut(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ut(e, t);
  }
}
function ut(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, l = new Array(t); n < t; n++)
    l[n] = e[n];
  return l;
}
function un() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var sn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, At = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(v, b, y) {
      if (!s(b) || d(b) || f(b) || _(b) || a(b))
        return b;
      var x, V = 0, P = 0;
      if (p(b))
        for (x = [], P = b.length; V < P; V++)
          x.push(n(v, b[V], y));
      else {
        x = {};
        for (var L in b)
          Object.prototype.hasOwnProperty.call(b, L) && (x[v(L, y)] = n(v, b[L], y));
      }
      return x;
    }, l = function(v, b) {
      b = b || {};
      var y = b.separator || "_", x = b.split || /(?=[A-Z])/;
      return v.split(x).join(y);
    }, o = function(v) {
      return T(v) ? v : (v = v.replace(/[\-_\s]+(.)?/g, function(b, y) {
        return y ? y.toUpperCase() : "";
      }), v.substr(0, 1).toLowerCase() + v.substr(1));
    }, r = function(v) {
      var b = o(v);
      return b.substr(0, 1).toUpperCase() + b.substr(1);
    }, c = function(v, b) {
      return l(v, b).toLowerCase();
    }, u = Object.prototype.toString, a = function(v) {
      return typeof v == "function";
    }, s = function(v) {
      return v === Object(v);
    }, p = function(v) {
      return u.call(v) == "[object Array]";
    }, d = function(v) {
      return u.call(v) == "[object Date]";
    }, f = function(v) {
      return u.call(v) == "[object RegExp]";
    }, _ = function(v) {
      return u.call(v) == "[object Boolean]";
    }, T = function(v) {
      return v = v - 0, v === v;
    }, k = function(v, b) {
      var y = b && "process" in b ? b.process : b;
      return typeof y != "function" ? v : function(x, V) {
        return y(x, v, V);
      };
    }, N = {
      camelize: o,
      decamelize: c,
      pascalize: r,
      depascalize: c,
      camelizeKeys: function(v, b) {
        return n(k(o, b), v);
      },
      decamelizeKeys: function(v, b) {
        return n(k(c, b), v, b);
      },
      pascalizeKeys: function(v, b) {
        return n(k(r, b), v);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = N : t.humps = N;
  })(sn);
})(At);
var cn = At.exports, dn = ["class", "style"];
function pn(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var l = n.indexOf(":"), o = cn.camelize(n.slice(0, l)), r = n.slice(l + 1).trim();
    return t[o] = r, t;
  }, {});
}
function fn(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function dt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var l = (e.children || []).map(function(a) {
    return dt(a);
  }), o = Object.keys(e.attributes || {}).reduce(function(a, s) {
    var p = e.attributes[s];
    switch (s) {
      case "class":
        a.class = fn(p);
        break;
      case "style":
        a.style = pn(p);
        break;
      default:
        a.attrs[s] = p;
    }
    return a;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var r = n.style, c = r === void 0 ? {} : r, u = nn(n, dn);
  return xt(e.tag, ve(ve(ve({}, t), {}, {
    class: o.class,
    style: ve(ve({}, o.style), c)
  }, o.attrs), u), l);
}
var wt = !1;
try {
  wt = !0;
} catch {
}
function mn() {
  if (!wt && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Ke(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? ae({}, e, t) : {};
}
function bn(e) {
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
  }, ae(t, "fa-".concat(e.size), e.size !== null), ae(t, "fa-rotate-".concat(e.rotation), e.rotation !== null), ae(t, "fa-pull-".concat(e.pull), e.pull !== null), ae(t, "fa-swap-opacity", e.swapOpacity), ae(t, "fa-bounce", e.bounce), ae(t, "fa-shake", e.shake), ae(t, "fa-beat", e.beat), ae(t, "fa-fade", e.fade), ae(t, "fa-beat-fade", e.beatFade), ae(t, "fa-flash", e.flash), ae(t, "fa-spin-pulse", e.spinPulse), ae(t, "fa-spin-reverse", e.spinReverse), t);
  return Object.keys(n).map(function(l) {
    return n[l] ? l : null;
  }).filter(function(l) {
    return l;
  });
}
function $t(e) {
  if (e && Je(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Xe.icon)
    return Xe.icon(e);
  if (e === null)
    return null;
  if (Je(e) === "object" && e.prefix && e.iconName)
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
var Re = st({
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
    var l = n.attrs, o = I(function() {
      return $t(t.icon);
    }), r = I(function() {
      return Ke("classes", bn(t));
    }), c = I(function() {
      return Ke("transform", typeof t.transform == "string" ? Xe.transform(t.transform) : t.transform);
    }), u = I(function() {
      return Ke("mask", $t(t.mask));
    }), a = I(function() {
      return Qt(o.value, ve(ve(ve(ve({}, r.value), c.value), u.value), {}, {
        symbol: t.symbol,
        title: t.title
      }));
    });
    Ae(a, function(p) {
      if (!p)
        return mn("Could not find one or more icon(s)", o.value, u.value);
    }, {
      immediate: !0
    });
    var s = I(function() {
      return a.value ? dt(a.value.abstract[0], {}, l) : null;
    });
    return function() {
      return s.value;
    };
  }
});
st({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var l = n.slots, o = Et.familyPrefix, r = I(function() {
      return ["".concat(o, "-layers")].concat(rt(t.fixedWidth ? ["".concat(o, "-fw")] : []));
    });
    return function() {
      return xt("div", {
        class: r.value
      }, l.default ? l.default() : []);
    };
  }
});
st({
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
    var l = n.attrs, o = Et.familyPrefix, r = I(function() {
      return Ke("classes", [].concat(rt(t.counter ? ["".concat(o, "-layers-counter")] : []), rt(t.position ? ["".concat(o, "-layers-").concat(t.position)] : [])));
    }), c = I(function() {
      return Ke("transform", typeof t.transform == "string" ? Xe.transform(t.transform) : t.transform);
    }), u = I(function() {
      var s = el(t.value.toString(), ve(ve({}, c.value), r.value)), p = s.abstract;
      return t.counter && (p[0].attributes.class = p[0].attributes.class.replace("fa-layers-text", "")), p[0];
    }), a = I(function() {
      return dt(u.value, {}, l);
    });
    return function() {
      return a.value;
    };
  }
});
tl.add(
  ll,
  nl,
  al,
  ol,
  rl,
  ul,
  sl,
  il
);
const vn = "zoa__help__main", _n = "zoa__help__icon", yn = "zoa__help__popup", hn = {
  main: vn,
  "main--above": "zoa__help__main--above",
  "main--below": "zoa__help__main--below",
  icon: _n,
  popup: yn,
  "popup--right": "zoa__help__popup--right"
}, gn = ["id"], $n = {
  __name: "Help",
  props: {
    text: {
      type: String
    },
    position: {
      type: String,
      default: "right"
    }
  },
  setup(e) {
    const t = M("labelPosition"), n = M("helpId"), l = w(!1), o = w(null), r = El(o, { delayEnter: 500 });
    return Ae(r, () => {
      l.value = r.value;
    }), J("Escape", () => l.value = !1), (c, u) => (O(), C("div", {
      class: g([c.$style.main, c.$style[`main--${m(t)}`]]),
      ref_key: "helpContainer",
      ref: o
    }, [
      F(m(Re), {
        icon: ["fa-solid", "fa-circle-question"],
        class: g(c.$style.icon)
      }, null, 8, ["class"]),
      pe(R("div", {
        class: g([c.$style.popup, c.$style[`popup--${e.position}`]]),
        id: m(n),
        role: "tooltip"
      }, [
        Ne(c.$slots, "default", {}, () => [
          Se(G(e.text), 1)
        ])
      ], 10, gn), [
        [at, l.value]
      ])
    ], 2));
  }
}, In = {
  $style: hn
}, It = /* @__PURE__ */ Q($n, [["__cssModules", In]]), kn = "zoa__autocompletetextbox__input", Sn = "zoa__autocompletetextbox__inputWrapper", zn = "zoa__autocompletetextbox__disabled", Tn = "zoa__autocompletetextbox__options", xn = "zoa__autocompletetextbox__option", En = "zoa__autocompletetextbox__noOptions", On = {
  input: kn,
  inputWrapper: Sn,
  disabled: zn,
  options: Tn,
  option: xn,
  noOptions: En
}, Nn = ["aria-labelledby", "aria-describedby"], An = ["placeholder", "id", "disabled"], wn = { key: 0 }, Mn = ["onClick"], Cn = ["value"], Rn = {
  __name: "AutocompleteTextbox",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: String
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
     * The options available to select. Each item can be a string, or an object
     * with `label`, `value`, and `order` keys (one of label/value required; order
     * is optional).
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
  setup(e, { expose: t, emit: n }) {
    const l = e, o = M("inputId"), r = M("labelId"), c = M("helpId"), u = M("disabled"), { value: a } = se(n, l), s = I(() => {
      let b = [];
      return l.options.forEach((y) => {
        typeof y == "object" ? b.push({
          label: y.label || y.value,
          value: y.value || y.label,
          order: y.order == null ? null : y.order
        }) : b.push({ label: y, value: y });
      }), b.sort((y, x) => {
        let V = 0;
        (y.order != null || x.order != null) && (V = y.order != null && x.order != null ? y.order - x.order : y.order != null ? -1 : 1);
        let P = y.label.localeCompare(x.label);
        return V !== 0 ? V : P;
      }), b;
    }), p = w(null), d = w(null), f = w(null);
    t({
      target: d
    });
    const _ = w(!1), T = Ve(d), k = $e(f);
    function N() {
      try {
        p.value.blur(), d.value.blur(), f.value.blur();
      } catch {
      }
      _.value = !1;
    }
    ct(p, () => {
      _.value = !1;
    }), J("ArrowDown", () => {
      if (s.value.length !== 0) {
        if (T.focused.value)
          f.value.children[0].children[0].focus();
        else if (k.focused.value) {
          const b = f.value.querySelector("li:focus");
          !b || !b.nextElementSibling ? f.value.children[0].children[0].focus() : b.nextElementSibling.focus();
        }
      }
    }), J("ArrowUp", () => {
      if (s.value.length !== 0 && k.focused.value) {
        const b = f.value.querySelector("li:focus");
        !b || !b.previousElementSibling ? d.value.focus() : b.previousElementSibling.focus();
      }
    }), J("Enter", () => {
      if (k.focused.value) {
        const b = f.value.querySelector("li:focus");
        b && v(b.querySelector("input").value);
      }
      N();
    });
    function v(b) {
      a.value = b, N();
    }
    return (b, y) => (O(), C("div", {
      class: g([b.$style.inputWrapper, m(u) ? b.$style.disabled : ""]),
      ref_key: "container",
      ref: p,
      "aria-labelledby": m(r),
      "aria-describedby": m(c)
    }, [
      pe(R("input", {
        type: "text",
        placeholder: e.placeholder,
        id: m(o),
        class: g(b.$style.input),
        "onUpdate:modelValue": y[0] || (y[0] = (x) => _e(a) ? a.value = x : null),
        onFocusin: y[1] || (y[1] = (x) => _.value = !0),
        ref_key: "textbox",
        ref: d,
        disabled: m(u)
      }, null, 42, An), [
        [We, m(a)]
      ]),
      _.value && !m(u) ? (O(), C("div", {
        key: 0,
        class: g(b.$style.options),
        ref_key: "dropdown",
        ref: f
      }, [
        s.value.length > 0 ? (O(), C("ul", wn, [
          (O(!0), C(ge, null, Oe(s.value, (x) => (O(), C("li", {
            class: g(b.$style.option),
            onClick: (V) => v(x.value),
            tabindex: "0"
          }, [
            R("span", null, G(x.label), 1),
            R("input", {
              type: "hidden",
              value: x.value
            }, null, 8, Cn)
          ], 10, Mn))), 256))
        ])) : (O(), C("div", {
          key: 1,
          class: g(b.$style.noOptions)
        }, "No options found", 2))
      ], 2)) : ze("", !0)
    ], 10, Nn));
  }
}, Pn = {
  $style: On
}, Dn = /* @__PURE__ */ Q(Rn, [["__cssModules", Pn]]), Vn = "zoa__checkbox__input", Wn = "zoa__checkbox__inputWrapper", Un = "zoa__checkbox__defaultCheckbox", Ln = "zoa__checkbox__checkbox", Bn = "zoa__checkbox__check", Hn = "zoa__checkbox__disabled", Gn = {
  input: Vn,
  inputWrapper: Wn,
  defaultCheckbox: Un,
  checkbox: Ln,
  check: Bn,
  disabled: Hn
}, jn = ["aria-labelledby", "aria-describedby"], Fn = ["id", "name", "value", "disabled"], Yn = {
  __name: "Checkbox",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: [Boolean, Array],
      default: void 0
    },
    /**
     * Debounce delay for the `change` event, in ms.
     */
    delay: {
      type: Number,
      default: 0
    },
    /**
     * An optional name for the checkbox; if this is set, the checkbox will return
     * the checkValue/label instead of a boolean.
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
  setup(e, { expose: t, emit: n }) {
    const l = e, o = M("inputId"), r = M("labelId"), c = M("helpId"), u = M("disabled"), { value: a, valueChanged: s } = se(n, l), p = M("rootContainer"), d = w(null), f = $e(p);
    t({
      target: d
    });
    const _ = M("label"), T = I(() => l.checkValue || _.value), k = I({
      get() {
        return l.name ? a.value || [] : a.value || !1;
      },
      set(v) {
        s(v);
      }
    });
    function N() {
      if (!u.value)
        if (l.name) {
          let v = !k.value.includes(T.value), b = k.value.filter((y) => y !== T.value);
          v && b.push(T.value), k.value = b;
        } else
          k.value = !k.value;
    }
    return J(" ", () => {
      f.focused.value && N();
    }), (v, b) => (O(), C("div", {
      class: g([v.$style.inputWrapper, m(u) ? v.$style.disabled : ""]),
      "aria-labelledby": m(r),
      "aria-describedby": m(c)
    }, [
      pe(R("input", {
        type: "checkbox",
        id: m(o),
        class: g(v.$style.defaultCheckbox),
        "onUpdate:modelValue": b[0] || (b[0] = (y) => k.value = y),
        name: e.name ? e.name : null,
        value: T.value,
        ref_key: "checkboxInput",
        ref: d,
        disabled: m(u)
      }, null, 10, Fn), [
        [Tt, k.value]
      ]),
      R("span", {
        class: g(v.$style.checkbox),
        onClick: N
      }, [
        F(m(Re), {
          icon: "fa-solid fa-check",
          class: g(v.$style.check)
        }, null, 8, ["class"])
      ], 2)
    ], 10, jn));
  }
}, Kn = {
  $style: Gn
}, Zn = /* @__PURE__ */ Q(Yn, [["__cssModules", Kn]]);
function Xn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var qn = {
  __locale: "en",
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  abbreviated_days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  abbreviated_months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  am: "AM",
  pm: "PM"
}, Jn = qn;
const kt = /* @__PURE__ */ Xn(Jn), Qn = "zoa__dateambiguous__input", ea = "zoa__dateambiguous__inputWrapper", ta = "zoa__dateambiguous__disabled", la = "zoa__dateambiguous__datePopup", na = "zoa__dateambiguous__popupSection", aa = "zoa__dateambiguous__yearGrid", oa = "zoa__dateambiguous__monthGrid", ra = "zoa__dateambiguous__dayGrid", ua = "zoa__dateambiguous__editing", sa = "zoa__dateambiguous__suggestion", ia = "zoa__dateambiguous__dateRange", ca = "zoa__dateambiguous__yearParts", da = {
  input: Qn,
  inputWrapper: ea,
  disabled: ta,
  datePopup: la,
  popupSection: na,
  yearGrid: aa,
  monthGrid: oa,
  dayGrid: ra,
  editing: ua,
  suggestion: sa,
  dateRange: ia,
  yearParts: ca
}, pa = ["aria-labelledby", "aria-describedby"], fa = ["placeholder", "id", "disabled"], ma = ["onClick", "onKeydown"], ba = {
  __name: "DateAmbiguous",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: Object
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
     * The earliest accepted date, in yyyy-mm-dd format (or 'today').
     */
    min: {
      type: String,
      default: "1582-01-01"
    },
    /**
     * The latest accepted date, in yyyy-mm-dd format (or 'today').
     */
    max: {
      type: String,
      default: "today"
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
  setup(e, { expose: t, emit: n }) {
    const l = e, o = () => import("./dates-b5f87c32.js"), r = M("inputId"), c = M("labelId"), u = M("helpId"), a = M("disabled"), { valueChanged: s } = se(n, l.delay), p = I(() => {
      let i;
      try {
        i = new Date(
          l.min === "today" ? Date.now() : Date.parse(l.min || "0000-01-01")
        );
      } catch {
        i = new Date(0, 0, 1);
      }
      return {
        year: i.getUTCFullYear(),
        month: i.getUTCMonth() + 1,
        day: i.getUTCDate(),
        date: i
      };
    }), d = I(() => {
      let i;
      try {
        i = new Date(
          l.max === "today" ? Date.now() : Date.parse(l.max || "9999-12-31")
        );
      } catch {
        i = new Date(9999, 11, 31);
      }
      return {
        year: i.getUTCFullYear(),
        month: i.getUTCMonth() + 1,
        day: i.getUTCDate(),
        date: i
      };
    }), f = w(null), _ = M("rootContainer"), T = w(null), k = w(null), N = w(null), v = w(null), b = w(null), y = w(null), x = w(null), V = w(!1), { focused: P } = $e(_);
    t({
      target: f
    });
    const L = Ve(T), $ = $e(T), U = Ve(k), Y = $e(k), X = Ve(N), xe = $e(N), ye = I(() => {
      let i;
      return L.focused.value ? i = T.value : U.focused.value ? i = k.value : X.focused.value && (i = N.value), i;
    }), Z = I(() => {
      let i;
      return $.focused.value ? i = T.value : Y.focused.value ? i = k.value : xe.focused.value && (i = N.value), i;
    });
    J("Enter", () => {
      ye && ye.value.children[0].focus();
    }), J("ArrowLeft", () => {
      if (!Z.value)
        return;
      const i = Z.value.querySelector("button:focus");
      !i || !i.previousElementSibling ? Z.value.children[Z.value.children.length - 1].focus() : i.previousElementSibling.focus();
    }), J("ArrowRight", () => {
      if (!Z.value)
        return;
      const i = Z.value.querySelector("button:focus");
      !i || !i.nextElementSibling ? Z.value.children[0].focus() : i.nextElementSibling.focus();
    }), J("Escape", () => {
      const i = _.value.querySelector("*:focus");
      i && i.blur();
    });
    function ie(i, z, S) {
      i.value && (i.value.target.onkeyup = (D) => {
        /^[0-9]$/.test(D.key) && z ? z.value.focus() : D.key === "Backspace" && S && S.value.focus();
      });
    }
    Xt(() => {
      ie(v, b, null), ie(b, y, v), ie(y, x, b), ie(x, null, y);
    });
    const le = I(() => ({
      year: H.value,
      month: me.value,
      day: ce.value,
      earliest: `${h.value.lower.year.toString().padStart(4, "0")}-${h.value.lower.month.toString().padStart(2, "0")}-${h.value.lower.day.toString().padStart(2, "0")}`,
      latest: `${h.value.upper.year.toString().padStart(4, "0")}-${h.value.upper.month.toString().padStart(2, "0")}-${h.value.upper.day.toString().padStart(2, "0")}`
    })), et = I(() => pt(
      le.value.year,
      le.value.month,
      le.value.day
    )), h = I(() => {
      let i, z;
      if (!Ee.value)
        i = p.value.year, z = d.value.year;
      else {
        const he = 10 ** (4 - (Math.max(
          ...fe.map((Bt, Ht) => isNaN(parseInt(B.value[Bt])) ? -1 : Ht)
        ) + 1)), re = Be(B.value, 4), Ge = Math.floor(p.value.year / he) * he, mt = Math.floor(d.value.year / he) * he;
        re < Ge || re > mt ? (i = p.value.year, z = d.value.year) : re === Ge ? (i = p.value.year, z = re + he - 1) : re === mt ? (i = re, z = d.value.year) : (i = re, z = re + he - 1);
      }
      const S = i === p.value.year, D = z === d.value.year, ee = S ? Math.max(p.value.month, Ie.value || 1) : Ie.value || 1, te = D ? Math.min(d.value.month, Ie.value || 12) : Ie.value || 12, oe = ee === p.value.month, K = te === d.value.month;
      let j = De.value || 1, ne = De.value || He(te);
      return j = S && oe ? Math.max(j, p.value.day) : j, ne = D && K ? Math.min(ne, d.value.day) : ne, i === z && ee === te && (D && K && j > ne && (j = 1), S && oe && ne < j && (ne = He(te))), {
        lower: {
          year: i,
          month: ee,
          day: j,
          isMinYear: S,
          isMinMonth: oe
        },
        upper: {
          year: z,
          month: te,
          day: ne,
          isMaxYear: D,
          isMaxMonth: K
        }
      };
    });
    function E(i, z, S) {
      const D = isNaN(parseInt(i)), ee = isNaN(parseInt(z)), te = isNaN(parseInt(S)), oe = ee || z <= 12 && z >= 1, K = te || S <= He(z);
      if (D || i > h.value.lower.year && i < h.value.upper.year)
        return {
          year: !0,
          month: oe,
          day: K
        };
      if (i < h.value.lower.year || i > h.value.upper.year)
        return {
          year: !1,
          month: oe,
          day: K
        };
      let j = oe, ne = K;
      return i === h.value.lower.year && (j = j && (ee || z >= h.value.lower.month), z === h.value.lower.month && (ne = ne && (te || S >= h.value.lower.day))), i === h.value.upper.year && (j = j && (ee || z <= h.value.upper.month), z === h.value.upper.month && (ne = ne && (te || S <= h.value.upper.day))), {
        year: !0,
        month: j,
        day: ne
      };
    }
    function A() {
      f.value.value = et.value, V.value = !1;
    }
    const W = w([]);
    function q(i) {
      V.value = !0, o().then((z) => {
        W.value = z.parseDate(i.target.value);
      });
    }
    const Pe = qe(q, 200);
    function we(i) {
      B.value = lt(i.year), me.value = i.month, ce.value = i.day, W.value = [];
    }
    const H = I(() => {
      if (!Ee.value)
        return null;
      const i = Be(B.value, 4);
      return E(i, me.value, ce.value).year ? i : null;
    }), B = w({
      millenium: null,
      century: null,
      decade: null,
      year: null
    }), fe = ["millenium", "century", "decade", "year"], Ee = I(() => Object.values(B.value).some((i) => !isNaN(parseInt(i)))), tt = I(() => {
      const i = lt(h.value.lower.year), z = {
        millenium: null,
        century: null,
        decade: null,
        year: null
      };
      if (p.value.year === d.value.year && isNaN(parseInt(B.value.year)))
        return [i];
      if (h.value.lower.year === h.value.upper.year)
        return [z];
      const S = lt(h.value.upper.year);
      let D, ee = { ...z };
      if (Ee.value)
        D = Math.max(
          ...fe.map((K, j) => (ee[K] = B.value[K], isNaN(parseInt(B.value[K])) ? -1 : j))
        ) + 1;
      else
        for (let K = 0; K < fe.length; K++) {
          let j = fe[K];
          if (i[j] === S[j])
            ee[j] = i[j];
          else if (D == null) {
            D = K;
            break;
          }
        }
      function te(K) {
        let j = fe[K];
        const ne = Be(i, K + 1), ft = Be(S, K + 1);
        return Array(10).fill(0).map((he, re) => {
          let Ge = { ...ee };
          return Ge[j] = he + re, Ge;
        }).filter((he) => {
          const re = Be(he, K + 1);
          return re >= ne && re <= ft;
        });
      }
      let oe = te(D);
      return oe.length === 1 && D < 3 && (ee = { ...oe[0] }, oe = te(D + 1)), Ee.value && oe.push(z), oe;
    }), Dt = I(() => H.value % 100 === 0 ? H.value % 400 === 0 : H.value % 4 === 0);
    function Vt(i) {
      return Object.values(i).every((z) => z == null) ? "clear" : fe.map((z) => i[z] || 0).join("");
    }
    function Be(i, z) {
      return fe.slice(0, z).reduce((S, D, ee) => {
        let te = i[D] || 0;
        return S + te * 10 ** (3 - ee);
      }, 0);
    }
    function lt(i) {
      return {
        millenium: Math.floor(i / 1e3),
        century: Math.floor(i % 1e3 / 100),
        decade: Math.floor(i % 100 / 10),
        year: Math.floor(i % 10)
      };
    }
    function Wt(i) {
      if (B.value = i, Math.max(
        ...fe.map(
          (S, D) => isNaN(parseInt(B.value[S])) ? -1 : D
        )
      ) === 3) {
        let S = E(H.value, me.value, ce.value);
        (!S.month || !S.day) && (me.value = null, ce.value = null);
      }
    }
    const Ie = w(null), me = I({
      get() {
        return E(H.value, Ie.value, ce.value).month ? Ie.value : null;
      },
      set(i) {
        Ie.value = isNaN(parseInt(i)) ? null : i, ce.value && ce.value > nt.value && (ce.value = nt.value);
      }
    }), Ut = I(() => {
      let i = kt.abbreviated_months.map((S, D) => [S, D + 1]);
      const z = H.value ? H.value : p.value.year === d.value.year ? p.value.year : null;
      if (z === p.value.year && (i = i.slice(p.value.month - 1, i.length)), z === d.value.year) {
        const S = 12 - i.length;
        i = i.slice(0, d.value.month - S);
      }
      return Ie.value && i.push(["clear", null]), i;
    }), nt = I(() => He(me.value));
    function He(i) {
      return [4, 6, 9, 11].includes(i) ? 30 : i === 2 ? Dt.value ? 29 : 28 : 31;
    }
    const De = w(null), ce = I({
      get() {
        const i = E(H.value, Ie.value, De.value);
        return i.month && i.day ? De.value : null;
      },
      set(i) {
        De.value = isNaN(parseInt(i)) ? null : i;
      }
    }), Lt = I(() => {
      const i = H.value ? H.value : p.value.year === d.value.year ? p.value.year : null, z = me.value ? me.value : p.value.year === d.value.year && p.value.month === d.value.month ? p.value.month : null, S = He(z);
      let D = Array(S).fill(1).map((ee, te) => te + 1);
      if (i === p.value.year && !isNaN(parseInt(z)) && z <= p.value.month && (D = D.slice(p.value.day - 1)), i === d.value.year && !isNaN(parseInt(z)) && z >= d.value.month) {
        const ee = S - D.length;
        D = D.slice(0, d.value.day - ee);
      }
      return De.value && D.push(null), D;
    });
    function pt(i, z, S) {
      const D = kt.abbreviated_months[z - 1];
      return i && z && S ? `${S} ${D} ${i}` : i && z ? `${D} ${i}` : i && S ? `${S} ??? ${i}` : z && S ? `${S} ${D}` : i || (z ? D : S ? `day ${S}` : null);
    }
    return Ae(le, () => {
      A(), s(le.value);
    }), (i, z) => (O(), C("div", {
      class: g([i.$style.inputWrapper, m(a) ? i.$style.disabled : ""]),
      "aria-labelledby": m(c),
      "aria-describedby": m(u)
    }, [
      R("input", {
        type: "text",
        placeholder: e.placeholder,
        id: m(r),
        class: g([i.$style.input, V.value ? i.$style.editing : ""]),
        ref_key: "displayBox",
        ref: f,
        onInput: z[0] || (z[0] = (...S) => m(Pe) && m(Pe)(...S)),
        disabled: m(a)
      }, null, 42, fa),
      m(P) && !m(a) ? (O(), C("div", {
        key: 0,
        class: g(i.$style.datePopup)
      }, [
        W.value.length > 0 ? (O(), C("div", {
          key: 0,
          class: g(i.$style.popupSection)
        }, [
          (O(!0), C(ge, null, Oe(W.value, (S) => (O(), C("span", {
            onClick: (D) => we(S),
            onKeydown: qt((D) => we(S), ["enter"]),
            class: g(i.$style.suggestion),
            tabindex: "0"
          }, G(pt(S.year, S.month, S.day)), 43, ma))), 256))
        ], 2)) : ze("", !0),
        R("div", {
          class: g(i.$style.popupSection)
        }, [
          F(m(ue), {
            label: "year",
            "grid-class": i.$style.yearParts
          }, {
            default: je(() => [
              F(m(ue), {
                "zoa-type": "number",
                label: "millenium",
                "label-position": "none",
                options: { placeholder: 0, min: 0, max: 9 },
                modelValue: B.value.millenium,
                "onUpdate:modelValue": z[1] || (z[1] = (S) => B.value.millenium = S),
                ref_key: "yrM",
                ref: v
              }, null, 8, ["modelValue"]),
              F(m(ue), {
                "zoa-type": "number",
                label: "century",
                "label-position": "none",
                options: { placeholder: 0, min: 0, max: 9 },
                modelValue: B.value.century,
                "onUpdate:modelValue": z[2] || (z[2] = (S) => B.value.century = S),
                ref_key: "yrC",
                ref: b
              }, null, 8, ["modelValue"]),
              F(m(ue), {
                "zoa-type": "number",
                label: "decade",
                "label-position": "none",
                options: { placeholder: 0, min: 0, max: 9 },
                modelValue: B.value.decade,
                "onUpdate:modelValue": z[3] || (z[3] = (S) => B.value.decade = S),
                ref_key: "yrD",
                ref: y
              }, null, 8, ["modelValue"]),
              F(m(ue), {
                "zoa-type": "number",
                label: "year",
                "label-position": "none",
                options: { placeholder: 0, min: 0, max: 9 },
                modelValue: B.value.year,
                "onUpdate:modelValue": z[4] || (z[4] = (S) => B.value.year = S),
                ref_key: "yrY",
                ref: x
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["grid-class"]),
          R("div", {
            class: g(i.$style.yearGrid),
            tabindex: "0",
            ref_key: "yearBtns",
            ref: T
          }, [
            (O(!0), C(ge, null, Oe(tt.value, (S) => (O(), Ce(m(Ye), {
              size: "sm",
              onClick: (D) => Wt(S),
              tabindex: "-1"
            }, {
              default: je(() => [
                Se(G(Vt(S)), 1)
              ]),
              _: 2
            }, 1032, ["onClick"]))), 256))
          ], 2)
        ], 2),
        R("div", {
          class: g(i.$style.popupSection)
        }, [
          F(m(ue), {
            "zoa-type": "number",
            label: "month",
            options: { placeholder: 1, min: 1, max: 12 },
            modelValue: me.value,
            "onUpdate:modelValue": z[5] || (z[5] = (S) => me.value = S)
          }, null, 8, ["modelValue"]),
          R("div", {
            class: g(i.$style.monthGrid),
            tabindex: "0",
            ref_key: "monthBtns",
            ref: k
          }, [
            (O(!0), C(ge, null, Oe(Ut.value, (S) => (O(), Ce(m(Ye), {
              size: "sm",
              onClick: (D) => me.value = S[1],
              tabindex: "-1"
            }, {
              default: je(() => [
                Se(G(S[0]), 1)
              ]),
              _: 2
            }, 1032, ["onClick"]))), 256))
          ], 2)
        ], 2),
        R("div", {
          class: g(i.$style.popupSection)
        }, [
          F(m(ue), {
            "zoa-type": "number",
            label: "day",
            options: { placeholder: 1, min: 1, max: nt.value },
            modelValue: ce.value,
            "onUpdate:modelValue": z[6] || (z[6] = (S) => ce.value = S)
          }, null, 8, ["options", "modelValue"]),
          R("div", {
            class: g(i.$style.dayGrid),
            tabindex: "0",
            ref_key: "dayBtns",
            ref: N
          }, [
            (O(!0), C(ge, null, Oe(Lt.value, (S) => (O(), Ce(m(Ye), {
              size: "sm",
              onClick: (D) => ce.value = S,
              tabindex: "-1"
            }, {
              default: je(() => [
                Se(G(S || "clear"), 1)
              ]),
              _: 2
            }, 1032, ["onClick"]))), 256))
          ], 2)
        ], 2),
        R("div", {
          class: g(i.$style.popupSection)
        }, [
          R("small", {
            class: g(i.$style.dateRange)
          }, G(le.value.earliest) + " to " + G(le.value.latest), 3)
        ], 2)
      ], 2)) : ze("", !0)
    ], 10, pa));
  }
}, va = {
  $style: da
}, _a = /* @__PURE__ */ Q(ba, [["__cssModules", va]]), ya = "zoa__datesimple__input", ha = "zoa__datesimple__inputWrapper", ga = "zoa__datesimple__disabled", $a = {
  input: ya,
  inputWrapper: ha,
  disabled: ga
}, Ia = ["aria-labelledby", "aria-describedby"], ka = ["placeholder", "min", "max", "step", "id", "disabled"], Sa = {
  __name: "DateSimple",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: Object
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
  setup(e, { expose: t, emit: n }) {
    const l = e, o = M("inputId"), r = M("labelId"), c = M("helpId"), u = M("disabled"), { value: a } = se(n, l), s = w(null);
    return t({
      target: s
    }), (p, d) => (O(), C("div", {
      class: g([p.$style.inputWrapper, m(u) ? p.$style.disabled : ""]),
      "aria-labelledby": m(r),
      "aria-describedby": m(c)
    }, [
      pe(R("input", {
        type: "date",
        placeholder: e.placeholder,
        min: e.min,
        max: e.max,
        step: e.step,
        id: m(o),
        class: g(p.$style.input),
        "onUpdate:modelValue": d[0] || (d[0] = (f) => _e(a) ? a.value = f : null),
        ref_key: "target",
        ref: s,
        disabled: m(u)
      }, null, 10, ka), [
        [We, m(a)]
      ])
    ], 10, Ia));
  }
}, za = {
  $style: $a
}, Ta = /* @__PURE__ */ Q(Sa, [["__cssModules", za]]), xa = "zoa__dropdown__input", Ea = "zoa__dropdown__inputWrapper", Oa = "zoa__dropdown__arrow", Na = "zoa__dropdown__disabled", Aa = {
  input: xa,
  inputWrapper: Ea,
  arrow: Oa,
  disabled: Na
}, wa = ["aria-labelledby", "aria-describedby"], Ma = ["id", "disabled"], Ca = { value: null }, Ra = ["value"], Pa = {
  __name: "Dropdown",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: String
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
     * The options available to select. Each item can be a string, or an object
     * with `label`, `value`, and `order` keys (one of label/value required; order
     * is optional).
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
  setup(e, { expose: t, emit: n }) {
    const l = e, o = M("inputId"), r = M("labelId"), c = M("helpId"), u = M("disabled"), a = I(() => {
      let d = [];
      return l.options.forEach((f) => {
        typeof f == "object" ? d.push({
          label: f.label || f.value,
          value: f.value || f.label,
          order: f.order == null ? null : f.order
        }) : d.push({ label: f, value: f });
      }), d.sort((f, _) => {
        let T = 0;
        (f.order != null || _.order != null) && (T = f.order != null && _.order != null ? f.order - _.order : f.order != null ? -1 : 1);
        let k = f.label.localeCompare(_.label);
        return T !== 0 ? T : k;
      }), d;
    }), { value: s } = se(n, l), p = w(null);
    return t({
      target: p
    }), (d, f) => (O(), C("div", {
      class: g([d.$style.inputWrapper, m(u) ? d.$style.disabled : ""]),
      "aria-labelledby": m(r),
      "aria-describedby": m(c)
    }, [
      pe(R("select", {
        id: m(o),
        class: g(d.$style.input),
        "onUpdate:modelValue": f[0] || (f[0] = (_) => _e(s) ? s.value = _ : null),
        ref_key: "target",
        ref: p,
        disabled: m(u)
      }, [
        R("option", Ca, G(e.placeholder), 1),
        (O(!0), C(ge, null, Oe(a.value, (_) => (O(), C("option", {
          value: _.value
        }, G(_.label), 9, Ra))), 256))
      ], 10, Ma), [
        [Jt, m(s)]
      ]),
      F(m(Re), {
        icon: "fa-solid fa-caret-down",
        class: g(d.$style.arrow)
      }, null, 8, ["class"])
    ], 10, wa));
  }
}, Da = {
  $style: Aa
}, Va = /* @__PURE__ */ Q(Pa, [["__cssModules", Da]]);
function* Wa(e, t, n = 0, l = null) {
  if (e.length === 0)
    return;
  l === null && (l = t.length);
  let r;
  for (; (r = t.indexOf(e, n)) > -1 && !(r + e.length > l); )
    yield r, n = r + 1;
}
function Ua(e) {
  return e.split("").reverse().join("");
}
var La = {
  searchExact: Wa,
  reverse: Ua
};
const { searchExact: Mt, reverse: St } = La;
function Ba(e, t, n) {
  e.length > t.length && ([e, t] = [t, e]);
  const l = t.length - e.length;
  if (l > n)
    return !1;
  if (n === 0)
    return e === t;
  let o;
  for (o = 0; o < e.length && e[o] === t[o]; o++)
    ;
  if (o === e.length)
    return l <= n;
  let r;
  for (r = e.length - 1; r >= 0 && e[r] === t[r + l]; r--)
    ;
  e = e.slice(o, r + 1), t = t.slice(o, r + 1 + l);
  const [c, u] = Qe(e, t, n);
  return c + (t.length - u) <= n;
}
function Ha(e, t) {
  e.length > t.length && ([e, t] = [t, e]);
  const n = new Array(e.length + 1);
  for (let r = 0; r <= e.length; r++)
    n[r] = r;
  let l, o;
  for (let r = 0; r < t.length; r++) {
    n[0] = r + 1, o = r;
    for (let c = 0; c < e.length; c++)
      l = n[c + 1], n[c + 1] = Math.min(
        o + +(e[c] !== t[r]),
        n[c] + 1,
        n[c + 1] + 1
      ), o = l;
  }
  return n[e.length];
}
function Ga(e, t) {
  const n = {};
  for (let l = Math.min(e.length - 1, t); l >= 0; l--)
    n[e[l]] = l;
  return n;
}
function* ja(e, t, n) {
  if (e.length > t.length + n)
    return;
  const l = Math.floor(e.length / (n + 1));
  if (n === 0)
    for (const o of Mt(e, t))
      yield {
        start: o,
        end: o + e.length,
        dist: 0
      };
  else
    l >= 10 ? yield* Ct(e, t, n) : yield* Rt(e, t, n);
}
function Qe(e, t, n) {
  n = +n;
  let l;
  for (l = 0; l < Math.min(e.length, t.length) && e.charCodeAt(l) === t.charCodeAt(l); l++)
    ;
  if (l && (e = e.slice(l), t = t.slice(l)), e) {
    if (!t)
      return e.length <= n ? [e.length, l] : [null, null];
  } else
    return [0, l];
  if (n === 0)
    return [null, null];
  let o = new Array(e.length + 1);
  for (let d = 0; d <= n; d++)
    o[d] = d;
  let r = new Array(e.length + 1), c = null, u = null, a = n, s = 0, p = e.length - 1;
  for (let d = 0; d < t.length; d++) {
    const f = t.charCodeAt(d), _ = Math.max(0, s - 1), T = Math.min(
      d + n,
      e.length - 1,
      p
    );
    r[0] = o[0] + 1, s = r[0] <= a ? 0 : null, p = r[0] <= a ? 0 : -1;
    let k;
    for (k = _; k < T; k++) {
      const v = r[k + 1] = Math.min(
        o[k] + +(f !== e.charCodeAt(k)),
        o[k + 1] + 1,
        r[k] + 1
      );
      v <= a && (s === null && (s = k + 1), p = Math.max(
        p,
        k + 1 + (a - v)
      ));
    }
    const N = r[k + 1] = Math.min(
      o[k] + +(f !== e.charCodeAt(k)),
      r[k] + 1
    );
    if (N <= a && (s === null && (s = k + 1), p = k + 1), k === e.length - 1 && (c === null || N <= c) && (c = N, u = d, c < a && (a = c)), [o, r] = [r, o], s === null)
      break;
  }
  return c !== null && c <= n ? [c, u + 1 + l] : [null, null];
}
function* Ct(e, t, n) {
  const l = Math.floor(e.length / (n + 1)), o = e.length, r = t.length;
  for (let c = 0; c <= e.length - l; c += l) {
    const u = e.slice(c, c + l), a = c + l, s = St(e.slice(0, c)), p = e.slice(a), d = Math.max(0, c - n), f = Math.min(r, r - o + a + n);
    for (const _ of Mt(u, t, d, f)) {
      const [T, k] = Qe(
        p,
        t.slice(
          _ + l,
          _ - c + o + n
        ),
        n
      );
      if (T === null)
        continue;
      const [N, v] = Qe(
        s,
        St(t.slice(
          Math.max(0, _ - c - (n - T)),
          _
        )),
        n - T
      );
      N !== null && (yield {
        start: _ - v,
        end: _ + l + k,
        dist: N + T
      });
    }
  }
}
function* Rt(e, t, n) {
  const l = e.length, o = t.length;
  if (l > o + n)
    return;
  const r = Ga(e, n);
  let c = [], u = [];
  for (let a = 0; a < t.length; a++) {
    const s = t[a];
    c = u, u = [];
    const p = r[s];
    p !== void 0 && (p + 1 === l ? yield {
      start: a,
      end: a + 1,
      dist: p
    } : u.push({
      startIdx: a,
      needleIdx: p + 1,
      dist: p
    }));
    for (const d of c)
      if (e[d.needleIdx] === s)
        d.needleIdx + 1 === l ? yield {
          start: d.startIdx,
          end: a + 1,
          dist: d.dist
        } : u.push({
          startIdx: d.startIdx,
          needleIdx: d.needleIdx + 1,
          dist: d.dist
        });
      else {
        if (d.dist === n)
          continue;
        u.push({
          startIdx: d.startIdx,
          needleIdx: d.needleIdx,
          dist: d.dist + 1
        });
        for (let f = 1; f <= n - d.dist; f++)
          if (d.needleIdx + f === l) {
            yield {
              start: d.startIdx,
              end: a + 1,
              dist: d.dist + f
            };
            break;
          } else if (e[d.needleIdx + f] === s) {
            d.needleIdx + f + 1 === l ? yield {
              start: d.startIdx,
              end: a + 1,
              dist: d.dist + f
            } : u.push({
              startIdx: d.startIdx,
              needleIdx: d.needleIdx + 1 + f,
              dist: d.dist + f
            });
            break;
          }
        a + 1 < o && d.needleIdx + 1 < l && u.push({
          startIdx: d.startIdx,
          needleIdx: d.needleIdx + 1,
          dist: d.dist + 1
        });
      }
  }
  for (const a of u)
    a.dist += e.length - a.needleIdx, a.dist <= n && (yield {
      start: a.startIdx,
      end: t.length,
      dist: a.dist
    });
}
var Fa = {
  _expand: Qe,
  editDistance: Ha,
  fuzzySearch: ja,
  fuzzySearchNgrams: Ct,
  fuzzySearchCandidates: Rt,
  isEditDistanceNoGreaterThan: Ba
};
const { editDistance: Ya, fuzzySearch: Ka, isEditDistanceNoGreaterThan: Za } = Fa;
var Xa = {
  editDistance: Ya,
  fuzzySearch: Ka,
  isEditDistanceNoGreaterThan: Za
};
const qa = "zoa__multiselect__input", Ja = "zoa__multiselect__inputWrapper", Qa = "zoa__multiselect__disabled", eo = "zoa__multiselect__options", to = "zoa__multiselect__optlist", lo = "zoa__multiselect__listItem", no = "zoa__multiselect__option", ao = "zoa__multiselect__selectAll", oo = "zoa__multiselect__subgroup", ro = "zoa__multiselect__noOptions", uo = "zoa__multiselect__textboxWrapper", so = "zoa__multiselect__arrow", io = {
  input: qa,
  inputWrapper: Ja,
  disabled: Qa,
  options: eo,
  optlist: to,
  listItem: lo,
  option: no,
  selectAll: ao,
  subgroup: oo,
  noOptions: ro,
  textboxWrapper: uo,
  arrow: so
}, co = ["aria-labelledby", "aria-describedby"], po = ["placeholder", "id", "disabled"], fo = ["title"], mo = ["onClick"], bo = { key: 1 }, Ze = 10, vo = {
  __name: "Multiselect",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: Array
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
     * The options available to select. Each item can be a string, or an object
     * with `label`, `value`, `group`, and `order` keys (one of label/value
     * required; group and order are optional).
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
    },
    /**
     * Enables an internal list filtering based on the search value. Disable if implementing an external filter using the emit.
     */
    enableSearch: {
      type: Boolean,
      default: !1
    },
    /**
     * Override the height (in px) of each list item. May be necessary if font family or size is changed from the default.
     */
    itemHeight: {
      type: Number,
      default: 38
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
  setup(e, { expose: t, emit: n }) {
    const l = e, o = M("inputId"), r = M("subId"), c = M("labelId"), u = M("helpId"), a = M("disabled"), { value: s } = se(n, l);
    Array.isArray(s) || (s.value = []);
    const p = w(null), d = qe((h) => {
      n("search", h);
    }, l.searchDelay), f = qe((h) => {
      p.value = h;
    }, l.searchDelay), _ = I({
      get() {
        return p.value;
      },
      set(h) {
        f(h), d(h);
      }
    }), T = I(() => (s.value ? s.value.length !== 1 : !0) ? l.itemNamePlural || l.itemName + "s" : l.itemName), k = I(() => {
      let h = [];
      return l.options.forEach((E) => {
        typeof E == "object" ? h.push({
          label: E.label || E.value,
          value: E.value || E.label,
          group: E.group || null,
          order: E.order == null ? null : E.order
        }) : h.push({ label: E, value: E, group: null });
      }), h.sort((E, A) => {
        let W;
        E.group === A.group ? W = 0 : !E.group || !A.group ? W = E.group ? 1 : -1 : W = E.group.localeCompare(A.group);
        let q = 0;
        (E.order != null || A.order != null) && (q = E.order != null && A.order != null ? E.order - A.order : E.order != null ? -1 : 1);
        let Pe = E.label.localeCompare(A.label);
        return W !== 0 ? W : q !== 0 ? q : Pe;
      }), h;
    }), N = I(() => {
      const h = l.enableSearch && _.value, E = h ? _.value.toLowerCase() : null, A = (H) => H ? [...Xa.fuzzySearch(E, H.toLowerCase(), 1)].length > 0 : !1;
      let W;
      h ? W = k.value.filter((H) => A(H.group) || A(H.label) || A(H.value)) : W = k.value;
      let q = [], Pe = Object.entries(
        Object.groupBy(W, ({ group: H }) => H)
      ), we = E ? 2 : 1;
      return Pe.forEach((H) => {
        let B = H[0], fe = H[1];
        B && B !== "null" && (q.push({
          ix: we,
          kind: "group",
          label: B,
          value: B,
          group: B
        }), we += 1), q = q.concat(
          fe.map((Ee, tt) => ({
            ix: we + tt,
            kind: "option",
            label: Ee.label,
            value: Ee.value,
            group: Ee.group
          }))
        ), we += fe.length;
      }), q;
    }), v = w(null), b = w(null), y = w(null);
    t({
      target: b
    });
    const { y: x } = Ol(y), V = I(() => !y.value || y.value && x.value !== y.value.scrollTop ? 0 : x.value), P = I(() => {
      try {
        return y.value.clientHeight;
      } catch {
        return 500;
      }
    }), L = I(() => N.value.length < Ze * 2 ? 0 : Math.floor(V.value / l.itemHeight) - Ze), $ = I(() => N.value.length < Ze * 2 ? N.value.length + Ze : Math.ceil((V.value + P.value) / l.itemHeight)), U = w(!1), Y = Ve(b), X = $e(y);
    function xe() {
      U.value = !0, setTimeout(() => {
        b.value.focus();
      }, 50);
    }
    function ye() {
      try {
        v.value.blur(), b.value.blur(), y.value.blur();
      } catch {
      }
      U.value = !1;
    }
    function Z() {
      U.value ? ye() : xe();
    }
    ct(v, () => {
      ye();
    }), J("ArrowDown", () => {
      if (k.value.length !== 0) {
        if (Y.focused.value)
          y.value.children[0].children[0].children[0].focus();
        else if (X.focused.value) {
          const h = [...y.value.querySelectorAll("label")], E = y.value.querySelector("label:focus");
          if (!E)
            h[0].focus();
          else {
            const A = h.findIndex((W) => W === E);
            A === h.length - 1 ? h[0].focus() : h[A + 1].focus();
          }
        }
      }
    }), J("ArrowUp", () => {
      if (k.value.length !== 0 && X.focused.value) {
        const h = [...y.value.querySelectorAll("label")], E = y.value.querySelector("label:focus");
        if (!E)
          b.value.focus();
        else {
          const A = h.findIndex((W) => W === E);
          A === 0 ? b.value.focus() : h[A - 1].focus();
        }
      }
    }), J("Enter", () => {
      ye();
    });
    const ie = I({
      get() {
        const h = k.value;
        return s.value == null || s.value.length !== h.length ? !1 : h.filter((A) => !s.value.includes(A.value)).length === 0;
      },
      set(h) {
        h ? s.value = k.value.map((E) => E.value) : s.value = [];
      }
    }), le = I({
      get() {
        let h = N.value.filter((A) => A.kind === "option").map((A) => A.value);
        return s.value == null || s.value.length < h.length ? !1 : h.filter((A) => !s.value.includes(A)).length === 0;
      },
      set(h) {
        let E = N.value.filter((q) => q.kind === "option").map((q) => q.value);
        const A = s.value ? s.value : [], W = E.filter((q) => !A.includes(q));
        h ? s.value = A.concat(W) : s.value = A.filter((q) => !E.includes(q));
      }
    });
    function et(h) {
      const E = N.value.filter((W) => W.kind === "option" && W.group === h).map((W) => W.value);
      s.value = s.value ? s.value : [];
      const A = E.filter((W) => !s.value.includes(W));
      A.length > 0 ? A.forEach((W) => {
        s.value.push(W);
      }) : s.value = s.value.filter((W) => !E.includes(W));
    }
    return (h, E) => (O(), C("div", {
      class: g([h.$style.inputWrapper, m(a) ? h.$style.disabled : ""]),
      ref_key: "container",
      ref: v,
      "aria-labelledby": m(c),
      "aria-describedby": m(u)
    }, [
      R("div", {
        class: g(h.$style.textboxWrapper)
      }, [
        pe(R("input", {
          type: "text",
          placeholder: e.placeholder,
          id: m(o),
          class: g(h.$style.input),
          "onUpdate:modelValue": E[0] || (E[0] = (A) => _.value = A),
          ref_key: "textbox",
          ref: b,
          disabled: m(a)
        }, null, 10, po), [
          [We, _.value],
          [at, U.value && !m(a)]
        ]),
        pe(R("div", {
          class: g(h.$style.input),
          tabindex: "0",
          onFocusin: xe
        }, G(m(s) ? m(s).length : 0) + " " + G(T.value) + " selected ", 35), [
          [at, !U.value || m(a)]
        ]),
        F(m(Re), {
          icon: "fa-solid fa-caret-down",
          class: g(h.$style.arrow),
          onClick: Z
        }, null, 8, ["class"])
      ], 2),
      U.value && !m(a) ? (O(), C("div", {
        key: 0,
        class: g(h.$style.options),
        ref_key: "dropdown",
        ref: y
      }, [
        k.value.length > 0 ? (O(), C("ul", {
          key: 0,
          class: g(h.$style.optlist)
        }, [
          R("li", {
            title: "Select all",
            class: g([h.$style.selectAll, h.$style.listItem, h.$style.option]),
            style: Fe({ height: `${e.itemHeight}px` })
          }, [
            F(m(ue), {
              "zoa-type": "checkbox",
              label: "Select all",
              "label-position": "right",
              modelValue: ie.value,
              "onUpdate:modelValue": E[1] || (E[1] = (A) => ie.value = A)
            }, null, 8, ["modelValue"])
          ], 6),
          p.value ? (O(), C("li", {
            key: 0,
            title: "Select results",
            class: g([h.$style.selectAll, h.$style.listItem, h.$style.option]),
            style: Fe({ height: `${e.itemHeight}px` })
          }, [
            F(m(ue), {
              "zoa-type": "checkbox",
              label: "Select results",
              "label-position": "right",
              modelValue: le.value,
              "onUpdate:modelValue": E[2] || (E[2] = (A) => le.value = A)
            }, null, 8, ["modelValue"])
          ], 6)) : ze("", !0),
          (O(!0), C(ge, null, Oe(N.value, (A) => (O(), C("li", {
            title: A.label,
            class: g([
              h.$style.listItem,
              A.kind === "group" ? h.$style.subgroup : h.$style.option
            ]),
            style: Fe({ height: `${e.itemHeight}px` })
          }, [
            A.kind === "group" ? (O(), C("div", {
              key: 0,
              onClick: (W) => et(A.group)
            }, G(A.label), 9, mo)) : (O(), C("div", bo, [
              A.ix >= L.value && A.ix <= $.value ? (O(), Ce(m(ue), {
                key: 0,
                "zoa-type": "checkbox",
                label: A.label,
                "label-position": "right",
                options: { checkValue: A.value, name: m(r)("checkboxes") },
                modelValue: m(s),
                "onUpdate:modelValue": E[3] || (E[3] = (W) => _e(s) ? s.value = W : null)
              }, null, 8, ["label", "options", "modelValue"])) : ze("", !0)
            ]))
          ], 14, fo))), 256))
        ], 2)) : (O(), C("div", {
          key: 1,
          class: g(h.$style.noOptions)
        }, "No options found", 2))
      ], 2)) : ze("", !0)
    ], 10, co));
  }
}, _o = {
  $style: io
}, yo = /* @__PURE__ */ Q(vo, [["__cssModules", _o]]), ho = "zoa__number__input", go = "zoa__number__inputWrapper", $o = "zoa__number__disabled", Io = {
  input: ho,
  inputWrapper: go,
  disabled: $o
}, ko = ["aria-labelledby", "aria-describedby"], So = ["placeholder", "min", "max", "step", "id", "disabled"], zo = {
  __name: "Number",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: Number
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
  setup(e, { expose: t, emit: n }) {
    const l = e, o = M("inputId"), r = M("labelId"), c = M("helpId"), u = M("disabled"), { value: a } = se(n, l), s = w(null);
    return t({
      target: s
    }), (p, d) => (O(), C("div", {
      class: g([p.$style.inputWrapper, m(u) ? p.$style.disabled : ""]),
      "aria-labelledby": m(r),
      "aria-describedby": m(c)
    }, [
      pe(R("input", {
        type: "number",
        placeholder: e.placeholder,
        min: e.min,
        max: e.max,
        step: e.step,
        id: m(o),
        class: g(p.$style.input),
        "onUpdate:modelValue": d[0] || (d[0] = (f) => _e(a) ? a.value = f : null),
        ref_key: "target",
        ref: s,
        disabled: m(u)
      }, null, 10, So), [
        [We, m(a)]
      ])
    ], 10, ko));
  }
}, To = {
  $style: Io
}, xo = /* @__PURE__ */ Q(zo, [["__cssModules", To]]), Eo = "zoa__rangeslider__input", Oo = "zoa__rangeslider__inputWrapper", No = {
  input: Eo,
  inputWrapper: Oo
}, Ao = ["aria-labelledby", "aria-describedby"], wo = {
  __name: "RangeSlider",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: Array
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
  setup(e, { expose: t, emit: n }) {
    const l = e;
    M("inputId");
    const o = M("labelId"), r = M("helpId"), c = M("disabled"), { valueChanged: u } = se(n, l), a = w(null), s = w(null), p = I(() => {
      if (a.value)
        return a.value.target;
    }), d = I(() => a.value && s.value ? [a.value.target, s.value.target] : []);
    t({
      target: p,
      elements: d
    });
    const f = w(null), _ = w(null), T = I(() => Math.max(
      Number(_.value) - Number(l.step),
      Number(l.min)
    )), k = I(() => Math.min(
      Number(f.value) + Number(l.step),
      Number(l.max)
    )), N = I(() => {
      const v = Math.min(f.value, T.value), b = Math.max(_.value, k.value);
      return [v, b];
    });
    return Ae(N, () => {
      u(N.value);
    }), (v, b) => (O(), C("div", {
      class: g(v.$style.inputWrapper),
      "aria-labelledby": m(o),
      "aria-describedby": m(r)
    }, [
      F(m(ue), {
        "zoa-type": "slider",
        label: e.labelLower,
        "label-position": e.labelsRight ? "right" : "left",
        options: {
          min: e.min,
          max: e.max,
          step: e.step,
          validMax: T.value,
          valueLabelPosition: "above",
          placeholderPosition: 0.25
        },
        modelValue: f.value,
        "onUpdate:modelValue": b[0] || (b[0] = (y) => f.value = y),
        ref: "lowerTrack",
        disabled: m(c)
      }, null, 8, ["label", "label-position", "options", "modelValue", "disabled"]),
      F(m(ue), {
        "zoa-type": "slider",
        label: e.labelUpper,
        "label-position": e.labelsRight ? "right" : "left",
        options: {
          min: e.min,
          max: e.max,
          step: e.step,
          validMin: k.value,
          placeholderPosition: 0.75,
          activeTrackRight: !0
        },
        modelValue: _.value,
        "onUpdate:modelValue": b[1] || (b[1] = (y) => _.value = y),
        ref: "upperTrack",
        disabled: m(c)
      }, null, 8, ["label", "label-position", "options", "modelValue", "disabled"])
    ], 10, Ao));
  }
}, Mo = {
  $style: No
}, Co = /* @__PURE__ */ Q(wo, [["__cssModules", Mo]]), Ro = "zoa__slider__input", Po = "zoa__slider__inputWrapper", Do = "zoa__slider__track", Vo = "zoa__slider__valueLabel", Wo = "zoa__slider__disabled", Uo = {
  input: Ro,
  inputWrapper: Po,
  track: Do,
  "track--active": "zoa__slider__track--active",
  valueLabel: Vo,
  "valueLabel--below": "zoa__slider__valueLabel--below",
  "valueLabel--above": "zoa__slider__valueLabel--above",
  disabled: Wo
}, Lo = ["aria-labelledby", "aria-describedby"], Bo = ["min", "max", "step", "id", "disabled"], Ho = {
  __name: "Slider",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: Number
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
  setup(e, { expose: t, emit: n }) {
    const l = e, o = M("inputId"), r = M("labelId"), c = M("helpId"), u = M("disabled"), { value: a } = se(n, l), s = w(null), p = w(null);
    t({
      target: s
    });
    const d = I(() => l.validMin ? Math.max(Number(l.validMin), Number(l.min)) : Number(l.min)), f = I(() => l.validMax ? Math.min(Number(l.validMax), Number(l.max)) : Number(l.max)), _ = $e(s), T = Ve(p), k = I(() => a.value < d.value ? d.value : a.value > f.value ? f.value : a.value), N = I(() => l.activeTrackRight ? { left: `${b.value.handle}%` } : { right: `${100 - b.value.handle}%` }), v = I(() => (a.value - l.min) / (l.max - l.min)), b = I(() => y());
    function y() {
      try {
        const $ = s.value.clientWidth, U = 24;
        p.value && (p.value.innerText = k.value);
        const Y = p.value ? p.value.clientWidth : 0, X = $ / 2, Z = (v.value * $ - X) / X * (U / 2), ie = Z + Y / 2, le = Z / $;
        return {
          handle: ((v.value - le) * 100).toFixed(2),
          label: ((v.value - ie / $) * 100).toFixed(2)
        };
      } catch {
        const $ = v.value * 100;
        return { handle: $.toFixed(2), label: $.toFixed(2) };
      }
    }
    function x() {
      if (l.placeholder !== null && l.placeholder !== void 0)
        return l.placeholder;
      let U = (l.max - l.min) / (1 / l.placeholderPosition), Y = U % l.step;
      return U - Y + l.min;
    }
    function V() {
      if (a.value === l.max)
        return;
      let $ = Number(a.value) + Number(l.step);
      $ > l.max ? a.value = l.max : a.value = $;
    }
    function P() {
      if (a.value === l.min)
        return;
      let $ = Number(a.value) - Number(l.step);
      $ < l.min ? a.value = l.min : a.value = $;
    }
    function L($) {
      $.preventDefault(), $.wheelDelta > 0 ? V() : $.wheelDelta < 0 && P();
    }
    return J("ArrowDown", ($) => {
      $.preventDefault(), (_.focused.value || T.focused.value) && P();
    }), J("ArrowLeft", ($) => {
      $.preventDefault(), (_.focused.value || T.focused.value) && P();
    }), J("ArrowUp", ($) => {
      $.preventDefault(), (_.focused.value || T.focused.value) && V();
    }), J("ArrowRight", ($) => {
      $.preventDefault(), (_.focused.value || T.focused.value) && V();
    }), Ae(a, ($) => {
      Number($) >= Number(f.value) && (a.value = f.value), Number($) <= Number(d.value) && (a.value = d.value);
    }), a.value = x(), ($, U) => (O(), C("div", {
      class: g([$.$style.inputWrapper, , m(u) ? $.$style.disabled : ""]),
      onWheel: L,
      "aria-labelledby": m(r),
      "aria-describedby": m(c)
    }, [
      R("span", {
        class: g($.$style.track)
      }, null, 2),
      R("span", {
        class: g([$.$style.track, $.$style["track--active"]]),
        style: Fe(N.value)
      }, null, 6),
      R("span", {
        class: g([$.$style.valueLabel, $.$style[`valueLabel--${e.valueLabelPosition}`]]),
        style: Fe({ left: `${b.value.label}%` }),
        ref_key: "valueLabel",
        ref: p,
        tabindex: "0"
      }, G(k.value), 7),
      pe(R("input", {
        type: "range",
        min: e.min,
        max: e.max,
        step: e.step,
        id: m(o),
        class: g($.$style.input),
        "onUpdate:modelValue": U[0] || (U[0] = (Y) => _e(a) ? a.value = Y : null),
        ref_key: "slider",
        ref: s,
        disabled: m(u)
      }, null, 10, Bo), [
        [We, m(a)]
      ])
    ], 42, Lo));
  }
}, Go = {
  $style: Uo
}, jo = /* @__PURE__ */ Q(Ho, [["__cssModules", Go]]), Fo = "zoa__textbox__input", Yo = "zoa__textbox__inputWrapper", Ko = "zoa__textbox__disabled", Zo = {
  input: Fo,
  inputWrapper: Yo,
  disabled: Ko
}, Xo = ["aria-labelledby", "aria-describedby"], qo = ["placeholder", "id", "disabled"], Jo = {
  __name: "Textbox",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: String
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
  setup(e, { expose: t, emit: n }) {
    const l = e, o = M("inputId"), r = M("labelId"), c = M("helpId"), u = M("disabled"), { value: a } = se(n, l), s = w(null);
    return t({
      target: s
    }), (p, d) => (O(), C("div", {
      class: g([p.$style.inputWrapper, m(u) ? p.$style.disabled : ""]),
      "aria-labelledby": m(r),
      "aria-describedby": m(c)
    }, [
      pe(R("input", {
        type: "text",
        placeholder: e.placeholder,
        id: m(o),
        class: g(p.$style.input),
        "onUpdate:modelValue": d[0] || (d[0] = (f) => _e(a) ? a.value = f : null),
        ref_key: "target",
        ref: s,
        disabled: m(u)
      }, null, 10, qo), [
        [We, m(a)]
      ])
    ], 10, Xo));
  }
}, Qo = {
  $style: Zo
}, er = /* @__PURE__ */ Q(Jo, [["__cssModules", Qo]]), zt = {
  checkbox: {
    component: Zn,
    multi: !1,
    delay: 0,
    tabLabel: !0
  },
  "date-ambiguous": {
    component: _a,
    multi: !1,
    delay: 200
  },
  "date-simple": {
    component: Ta,
    multi: !1,
    delay: 200
  },
  dropdown: {
    component: Va,
    multi: !1,
    delay: 0
  },
  multiselect: {
    component: yo,
    multi: !1,
    delay: 0
  },
  empty: {
    component: null,
    multi: !0
  },
  number: {
    component: xo,
    multi: !1,
    delay: 200
  },
  "range-slider": {
    component: Co,
    multi: !0,
    delay: 200
  },
  slider: {
    component: jo,
    multi: !1,
    delay: 200,
    wrapperProps: ["valueLabelPosition"]
  },
  "autocomplete-textbox": {
    component: Dn,
    multi: !1,
    delay: 200
  },
  textbox: {
    component: er,
    multi: !1,
    delay: 200
  }
}, tr = "zoa__input__input", lr = "zoa__input__inputWrapper", nr = "zoa__input__rootWrapper", ar = "zoa__input__checkbox", or = "zoa__input__slider", rr = "zoa__input__emptyGrid", ur = "zoa__input__fieldset", sr = {
  input: tr,
  inputWrapper: lr,
  rootWrapper: nr,
  "rootWrapper--above": "zoa__input__rootWrapper--above",
  "rootWrapper--help": "zoa__input__rootWrapper--help",
  "rootWrapper--below": "zoa__input__rootWrapper--below",
  "rootWrapper--left": "zoa__input__rootWrapper--left",
  "rootWrapper--right": "zoa__input__rootWrapper--right",
  "rootWrapper--none": "zoa__input__rootWrapper--none",
  checkbox: ar,
  slider: or,
  "rootWrapper-valueLabelPosition--below": "zoa__input__rootWrapper-valueLabelPosition--below",
  "rootWrapper-valueLabelPosition--above": "zoa__input__rootWrapper-valueLabelPosition--above",
  "range-slider": "zoa__input__range-slider",
  emptyGrid: rr,
  fieldset: ur
}, ir = ["id"], cr = {
  __name: "Input",
  props: {
    /**
     * @model
     */
    modelValue: {
      default: void 0
    },
    /**
     * Zoa input type.
     * @values checkbox, date-ambiguous, date-simple, dropdown, multiselect, empty, number, range-slider, slider, autocomplete-textbox, textbox
     */
    zoaType: {
      type: String,
      default: "empty"
    },
    /**
     * Additional class(es) to add to the root element.
     */
    class: {
      type: [String, Array, null],
      default: null
    },
    /**
     * Text for the input label.
     */
    label: {
      type: String,
      default: "Input"
    },
    /**
     * Position of the input label (or none to only show to screenreaders).
     * @values left, right, above, below, none
     */
    labelPosition: {
      type: String,
      default: "above"
    },
    /**
     * Parameters passed to the input.
     */
    options: {
      type: Object,
      default: () => ({})
    },
    /**
     * Class(es) for the empty grid; only used if the zoaType is 'empty' or null.
     * Defaults to an auto column grid if nothing is provided.
     */
    gridClass: {
      type: [String, Array, null],
      default: null
    },
    /**
     * Help text.
     */
    help: {
      type: [String, null],
      default: null
    },
    /**
     * Position of the help popup.
     * @values left, right
     */
    helpPosition: {
      type: String,
      default: "right"
    },
    /**
     * Disables the input.
     */
    disabled: {
      type: Boolean,
      default: !1
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
  setup(e, { expose: t, emit: n }) {
    const l = e, o = I(() => {
      let $ = zt[l.zoaType];
      return $ == null && ($ = zt.empty), $;
    }), r = I(() => o.value.component), { componentId: c, subId: u } = it(), a = u("input"), s = u("label"), p = u("help"), d = I(() => {
      let $ = [
        "rootWrapper",
        `rootWrapper--${l.labelPosition}`,
        l.zoaType
      ];
      return l.help && $.push("rootWrapper--help"), o.value.wrapperProps && o.value.wrapperProps.forEach((U) => {
        l.options[U] != null && $.push(`rootWrapper-${U}--${l.options[U]}`);
      }), $;
    }), { addPropClasses: f } = Ue(l), { value: _ } = se(n, l), T = w(null), k = I(() => l.label), N = I(() => l.labelPosition), v = I(() => l.help ? p : null), b = I(() => l.disabled);
    ke("label", k), ke("labelPosition", N), ke("componentId", c), ke("subId", u), ke("inputId", a), ke("labelId", s), ke("helpId", v), ke("rootContainer", T), ke("disabled", b);
    const y = w(null);
    function x() {
      y.value && y.value.target.focus();
    }
    function V() {
      y.value && y.value.target.blur();
    }
    const P = I(() => {
      if (y.value)
        return y.value.target;
    }), L = I(() => y.value && y.value.elements ? y.value.elements : {});
    return t({
      focus: x,
      blur: V,
      target: P,
      elements: L
    }), ($, U) => (O(), C("div", {
      id: m(c),
      ref_key: "rootContainer",
      ref: T,
      class: g(m(f)(d.value.map((Y) => $.$style[Y])))
    }, [
      o.value.multi ? (O(), C("fieldset", {
        key: 0,
        class: g($.$style.fieldset)
      }, [
        F(ht, {
          "input-id": m(a),
          legend: !0,
          label: e.label,
          "label-position": e.labelPosition,
          tabbable: o.value.tabLabel
        }, null, 8, ["input-id", "label", "label-position", "tabbable"]),
        e.help ? (O(), Ce(It, {
          key: 0,
          text: e.help,
          position: e.helpPosition
        }, null, 8, ["text", "position"])) : ze("", !0),
        r.value == null ? (O(), C("div", {
          key: 1,
          class: g([e.gridClass || $.$style.emptyGrid, $.$style.inputWrapper])
        }, [
          Ne($.$slots, "default")
        ], 2)) : (O(), Ce(m(r), ot({ key: 2 }, e.options, {
          modelValue: m(_),
          "onUpdate:modelValue": U[0] || (U[0] = (Y) => _e(_) ? _.value = Y : null),
          ref_key: "inputComponent",
          ref: y
        }), null, 16, ["modelValue"]))
      ], 2)) : (O(), C(ge, { key: 1 }, [
        F(ht, {
          "input-id": m(a),
          legend: !1,
          label: e.label,
          "label-position": e.labelPosition,
          tabbable: o.value.tabLabel,
          help: e.help
        }, null, 8, ["input-id", "label", "label-position", "tabbable", "help"]),
        e.help ? (O(), Ce(It, {
          key: 0,
          text: e.help,
          position: e.helpPosition
        }, null, 8, ["text", "position"])) : ze("", !0),
        F(m(r), ot(e.options, {
          modelValue: m(_),
          "onUpdate:modelValue": U[1] || (U[1] = (Y) => _e(_) ? _.value = Y : null),
          ref_key: "inputComponent",
          ref: y
        }), null, 16, ["modelValue"])
      ], 64))
    ], 10, ir));
  }
}, dr = {
  $style: sr
}, ue = /* @__PURE__ */ Q(cr, [["__cssModules", dr]]);
function Pt(e) {
  return { icon: I(() => {
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
const pr = "zoa__flash__main", fr = "zoa__flash__container", mr = "zoa__flash__header", br = "zoa__flash__icon", vr = "zoa__flash__headerText", _r = "zoa__flash__content", yr = {
  main: pr,
  container: fr,
  header: mr,
  icon: br,
  headerText: vr,
  content: _r,
  "kind--info": "zoa__flash__kind--info",
  "kind--warning": "zoa__flash__kind--warning",
  "kind--error": "zoa__flash__kind--error",
  "kind--success": "zoa__flash__kind--success"
}, hr = {
  __name: "Flash",
  props: {
    /**
     * Additional class(es) to add to the root element.
     */
    class: {
      type: [String, Array, null],
      default: null
    },
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
    const t = e, { icon: n } = Pt(t), { addPropClasses: l } = Ue(t);
    return (o, r) => (O(), C("div", {
      class: g(
        m(l)([o.$style.main, o.$style.container, o.$style[`kind--${e.kind}`]])
      )
    }, [
      R("div", {
        class: g(o.$style.header)
      }, [
        F(m(Re), {
          icon: ["fa-solid", m(n)],
          class: g(o.$style.icon)
        }, null, 8, ["icon", "class"]),
        R("h2", {
          class: g(o.$style.headerText)
        }, G(e.header), 3)
      ], 2),
      R("div", {
        class: g(o.$style.content)
      }, [
        Ne(o.$slots, "default", {}, () => [
          Se(G(e.message), 1)
        ])
      ], 2)
    ], 2));
  }
}, gr = {
  $style: yr
}, $r = /* @__PURE__ */ Q(hr, [["__cssModules", gr]]), Ir = "zoa__modal__main", kr = "zoa__modal__container", Sr = "zoa__modal__header", zr = "zoa__modal__icon", Tr = "zoa__modal__headerText", xr = "zoa__modal__content", Er = "zoa__modal__form", Or = "zoa__modal__close", Nr = {
  main: Ir,
  container: kr,
  header: Sr,
  icon: zr,
  headerText: Tr,
  content: xr,
  "kind--info": "zoa__modal__kind--info",
  "kind--warning": "zoa__modal__kind--warning",
  "kind--error": "zoa__modal__kind--error",
  "kind--success": "zoa__modal__kind--success",
  form: Er,
  close: Or
}, Ar = {
  __name: "Modal",
  props: {
    /**
     * Additional class(es) to add to the root element.
     */
    class: {
      type: [String, Array, null],
      default: null
    },
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
    const n = e, { icon: l } = Pt(n), { addPropClasses: o } = Ue(n), r = w(null);
    function c() {
      r.value.show(), t("opened");
    }
    return ct(r, () => {
      r.value.close(), t("closed");
    }), (u, a) => (O(), C(ge, null, [
      F(m(Ye), ot(e.buttonArgs, { onClick: c }), {
        default: je(() => [
          Ne(u.$slots, "button")
        ]),
        _: 3
      }, 16),
      R("dialog", {
        ref_key: "modal",
        ref: r,
        class: g(m(o)([u.$style.main, u.$style[`kind--${e.kind}`]]))
      }, [
        R("div", {
          class: g(u.$style.container)
        }, [
          R("div", {
            class: g(u.$style.header)
          }, [
            F(m(Re), {
              icon: ["fa-solid", m(l)],
              class: g(u.$style.icon)
            }, null, 8, ["icon", "class"]),
            R("h2", {
              class: g(u.$style.headerText)
            }, [
              Ne(u.$slots, "header", {}, () => [
                Se(G(e.header), 1)
              ])
            ], 2),
            R("form", {
              method: "dialog",
              class: g(u.$style.form),
              onSubmit: a[0] || (a[0] = (s) => t("closed"))
            }, [
              R("button", {
                class: g(u.$style.close)
              }, [
                F(m(Re), { icon: "fa-solid fa-xmark" })
              ], 2)
            ], 34)
          ], 2),
          R("div", {
            class: g(u.$style.content)
          }, [
            Ne(u.$slots, "default", {}, () => [
              Se(G(e.message), 1)
            ])
          ], 2)
        ], 2)
      ], 2)
    ], 64));
  }
}, wr = {
  $style: Nr
}, Mr = /* @__PURE__ */ Q(Ar, [["__cssModules", wr]]), Cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ZoaButton: Ye,
  ZoaFlash: $r,
  ZoaInput: ue,
  ZoaModal: Mr,
  ZoaTabs: Zl,
  ZoaToggleButton: Ul
}, Symbol.toStringTag, { value: "Module" })), Rr = new RegExp("[A-Z]+(?![a-z])|[A-Z]", "g");
function Pr(e) {
  return e.replace(Rr, (t, n) => (n ? "-" : "") + t.toLowerCase());
}
const Ur = {
  install(e, t) {
    Object.entries(Cr).forEach((n) => {
      const l = Pr(n[0]);
      e.component(l, n[1]);
    });
  }
};
export {
  $r as F,
  Mr as M,
  Ul as T,
  Ur as Z,
  Ye as a,
  Zl as b,
  ue as c,
  kt as d,
  Xn as g
};
