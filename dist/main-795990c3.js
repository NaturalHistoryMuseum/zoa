import { openBlock as T, createElementBlock as w, normalizeClass as h, unref as _, renderSlot as Ve, createTextVNode as Te, toDisplayString as G, ref as A, computed as I, watch as ze, customRef as Ht, getCurrentScope as Gt, onScopeDispose as jt, reactive as ft, withDirectives as pe, createElementVNode as M, isRef as ye, vModelCheckbox as St, isProxy as Ft, toRaw as Yt, Fragment as ge, renderList as Oe, vModelRadio as Kt, inject as V, createCommentVNode as ke, defineComponent as ut, h as xt, createVNode as F, vShow as nt, vModelText as We, watchEffect as Zt, withKeys as Xt, withCtx as Ke, createBlock as we, vModelSelect as qt, normalizeStyle as je, provide as Ee, mergeProps as at } from "vue";
import { parse as Xe, icon as Jt, config as Et, text as Qt, library as el } from "@fortawesome/fontawesome-svg-core";
import { faCircleXmark as tl, faXmark as ll, faCircleInfo as nl, faCircleExclamation as al, faCircleCheck as ol, faCircleQuestion as rl, faCheck as ul, faCaretDown as sl } from "@fortawesome/free-solid-svg-icons";
function Ue(e) {
  function t(n) {
    return n = n || [], e.class && Array.isArray(e.class) ? n = n.concat(e.class) : e.class && n.push(e.class), n;
  }
  return { addPropClasses: t };
}
const il = "zoa__button__main", cl = "zoa__button__checkbox", dl = {
  main: il,
  "kind--normal": "zoa__button__kind--normal",
  checkbox: cl,
  "kind--primary": "zoa__button__kind--primary",
  "kind--alt": "zoa__button__kind--alt",
  "size--sm": "zoa__button__size--sm",
  "size--md": "zoa__button__size--md"
}, X = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, r] of t)
    n[l] = r;
  return n;
}, pl = {
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
    return (l, r) => (T(), w("button", {
      class: h(
        _(n)([
          l.$style.main,
          l.$style[`kind--${e.kind}`],
          l.$style[`size--${e.size}`]
        ])
      )
    }, [
      Ve(l.$slots, "default", {}, () => [
        Te(G(e.label), 1)
      ])
    ], 2));
  }
}, fl = {
  $style: dl
}, Fe = /* @__PURE__ */ X(pl, [["__cssModules", fl]]);
let ml = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
function st() {
  const e = A(ml(6));
  function t(n) {
    return `${e.value}__${n}`;
  }
  return { componentId: e, subId: t };
}
const { now: mt } = Date, qe = (e, t = 1, n) => {
  t = Math.max(1, t);
  const l = (n == null ? void 0 : n.leading) ?? !1, r = (n == null ? void 0 : n.trailing) ?? !0, u = Math.max((n == null ? void 0 : n.maxWait) ?? 1 / 0, t);
  let i, o, a = 0, c = 0;
  const p = () => {
    const z = mt(), U = z - a, D = z - c, g = U >= t || D >= u;
    return [z, g];
  }, d = (z) => {
    if (c = z, !i)
      return;
    const U = i;
    i = void 0, e.apply(void 0, U);
  }, v = () => {
    m(0);
  }, y = () => {
    o && (v(), d(mt()));
  }, $ = (z) => {
    if (c = z, l)
      return d(z);
  }, x = (z) => {
    if (r && i)
      return d(z);
    i = void 0;
  }, E = () => {
    o = void 0;
    const [z, U] = p();
    return U ? x(z) : f(z);
  }, f = (z) => {
    const U = z - a, D = z - c, g = t - U, R = u - D, B = Math.min(g, R);
    return m(B);
  }, m = (z) => {
    o && clearTimeout(o), !(z <= 0) && (o = setTimeout(E, z));
  }, C = (...z) => {
    const [U, D] = p(), g = !!o;
    if (i = z, a = U, (D || !o) && m(t), D)
      return g ? d(U) : $(U);
  };
  return C.cancel = v, C.flush = y, C;
};
function ie(e, t) {
  let n;
  try {
    n = parseInt(t.delay) || 0;
  } catch {
    n = 0;
  }
  const l = A(null);
  function r(a) {
    e("change", a);
  }
  const u = qe(r, n);
  function i(a) {
    e("update:modelValue", a), l.value = a, u(a);
  }
  const o = I({
    get() {
      return t.modelValue === void 0 ? l.value : t.modelValue;
    },
    set(a) {
      i(a);
    }
  });
  return { emitChange: u, valueChanged: i, value: o };
}
function vl(e, t) {
  let n, l, r;
  const u = A(!0), i = () => {
    u.value = !0, r();
  };
  ze(e, i, { flush: "sync" });
  const o = typeof t == "function" ? t : t.get, a = typeof t == "function" ? void 0 : t.set, c = Ht((p, d) => (l = p, r = d, {
    get() {
      return u.value && (n = o(), u.value = !1), l(), n;
    },
    set(v) {
      a == null || a(v);
    }
  }));
  return Object.isExtensible(c) && (c.trigger = i), c;
}
function _l(e) {
  return Gt() ? (jt(e), !0) : !1;
}
function ve(e) {
  return typeof e == "function" ? e() : _(e);
}
const Ot = typeof window < "u" && typeof document < "u", yl = Object.prototype.toString, bl = (e) => yl.call(e) === "[object Object]", Se = () => {
}, hl = /* @__PURE__ */ gl();
function gl() {
  var e;
  return Ot && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function Tt(e, t) {
  function n(...l) {
    return new Promise((r, u) => {
      Promise.resolve(e(() => t.apply(this, l), { fn: t, thisArg: this, args: l })).then(r).catch(u);
    });
  }
  return n;
}
function $l(e, t = {}) {
  let n, l, r = Se;
  const u = (o) => {
    clearTimeout(o), r(), r = Se;
  };
  return (o) => {
    const a = ve(e), c = ve(t.maxWait);
    return n && u(n), a <= 0 || c !== void 0 && c <= 0 ? (l && (u(l), l = null), Promise.resolve(o())) : new Promise((p, d) => {
      r = t.rejectOnCancel ? d : p, c && !l && (l = setTimeout(() => {
        n && u(n), l = null, p(o());
      }, c)), n = setTimeout(() => {
        l && u(l), l = null, p(o());
      }, a);
    });
  };
}
function Il(e, t = !0, n = !0, l = !1) {
  let r = 0, u, i = !0, o = Se, a;
  const c = () => {
    u && (clearTimeout(u), u = void 0, o(), o = Se);
  };
  return (d) => {
    const v = ve(e), y = Date.now() - r, $ = () => a = d();
    return c(), v <= 0 ? (r = Date.now(), $()) : (y > v && (n || !i) ? (r = Date.now(), $()) : t && (a = new Promise((x, E) => {
      o = l ? E : x, u = setTimeout(() => {
        r = Date.now(), i = !0, x($()), c();
      }, Math.max(0, v - y));
    })), !n && !u && (u = setTimeout(() => i = !0, v)), i = !1, a);
  };
}
function kl(e, t = 200, n = {}) {
  return Tt(
    $l(t, n),
    e
  );
}
function Sl(e, t = 200, n = !1, l = !0, r = !1) {
  return Tt(
    Il(t, n, l, r),
    e
  );
}
function Ae(e) {
  var t;
  const n = ve(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Le = Ot ? window : void 0;
function de(...e) {
  let t, n, l, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, l, r] = e, t = Le) : [t, n, l, r] = e, !t)
    return Se;
  Array.isArray(n) || (n = [n]), Array.isArray(l) || (l = [l]);
  const u = [], i = () => {
    u.forEach((p) => p()), u.length = 0;
  }, o = (p, d, v, y) => (p.addEventListener(d, v, y), () => p.removeEventListener(d, v, y)), a = ze(
    () => [Ae(t), ve(r)],
    ([p, d]) => {
      if (i(), !p)
        return;
      const v = bl(d) ? { ...d } : d;
      u.push(
        ...n.flatMap((y) => l.map(($) => o(p, y, $, v)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    a(), i();
  };
  return _l(c), c;
}
let vt = !1;
function zt(e, t, n = {}) {
  const { window: l = Le, ignore: r = [], capture: u = !0, detectIframe: i = !1 } = n;
  if (!l)
    return;
  hl && !vt && (vt = !0, Array.from(l.document.body.children).forEach((v) => v.addEventListener("click", Se)), l.document.documentElement.addEventListener("click", Se));
  let o = !0;
  const a = (v) => r.some((y) => {
    if (typeof y == "string")
      return Array.from(l.document.querySelectorAll(y)).some(($) => $ === v.target || v.composedPath().includes($));
    {
      const $ = Ae(y);
      return $ && (v.target === $ || v.composedPath().includes($));
    }
  }), p = [
    de(l, "click", (v) => {
      const y = Ae(e);
      if (!(!y || y === v.target || v.composedPath().includes(y))) {
        if (v.detail === 0 && (o = !a(v)), !o) {
          o = !0;
          return;
        }
        t(v);
      }
    }, { passive: !0, capture: u }),
    de(l, "pointerdown", (v) => {
      const y = Ae(e);
      y && (o = !v.composedPath().includes(y) && !a(v));
    }, { passive: !0 }),
    i && de(l, "blur", (v) => {
      setTimeout(() => {
        var y;
        const $ = Ae(e);
        ((y = l.document.activeElement) == null ? void 0 : y.tagName) === "IFRAME" && !($ != null && $.contains(l.document.activeElement)) && t(v);
      }, 0);
    })
  ].filter(Boolean);
  return () => p.forEach((v) => v());
}
function xl(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Z(...e) {
  let t, n, l = {};
  e.length === 3 ? (t = e[0], n = e[1], l = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], l = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: r = Le,
    eventName: u = "keydown",
    passive: i = !1,
    dedupe: o = !1
  } = l, a = xl(t);
  return de(r, u, (p) => {
    p.repeat && ve(o) || a(p) && n(p);
  }, i);
}
function El(e = {}) {
  var t;
  const {
    window: n = Le,
    deep: l = !0
  } = e, r = (t = e.document) != null ? t : n == null ? void 0 : n.document, u = () => {
    var o;
    let a = r == null ? void 0 : r.activeElement;
    if (l)
      for (; a != null && a.shadowRoot; )
        a = (o = a == null ? void 0 : a.shadowRoot) == null ? void 0 : o.activeElement;
    return a;
  }, i = vl(
    () => null,
    () => u()
  );
  return n && (de(n, "blur", (o) => {
    o.relatedTarget === null && i.trigger();
  }, !0), de(n, "focus", i.trigger, !0)), i;
}
function Ol(e, t = {}) {
  const {
    delayEnter: n = 0,
    delayLeave: l = 0,
    window: r = Le
  } = t, u = A(!1);
  let i;
  const o = (a) => {
    const c = a ? n : l;
    i && (clearTimeout(i), i = void 0), c ? i = setTimeout(() => u.value = a, c) : u.value = a;
  };
  return r && (de(e, "mouseenter", () => o(!0), { passive: !0 }), de(e, "mouseleave", () => o(!1), { passive: !0 })), u;
}
function De(e, t = {}) {
  const { initialValue: n = !1, focusVisible: l = !1 } = t, r = A(!1), u = I(() => Ae(e));
  de(u, "focus", (o) => {
    var a, c;
    (!l || (c = (a = o.target).matches) != null && c.call(a, ":focus-visible")) && (r.value = !0);
  }), de(u, "blur", () => r.value = !1);
  const i = I({
    get: () => r.value,
    set(o) {
      var a, c;
      !o && r.value ? (a = u.value) == null || a.blur() : o && !r.value && ((c = u.value) == null || c.focus());
    }
  });
  return ze(
    u,
    () => {
      i.value = n;
    },
    { immediate: !0, flush: "post" }
  ), { focused: i };
}
function $e(e, t = {}) {
  const n = El(t), l = I(() => Ae(e));
  return { focused: I(() => l.value && n.value ? l.value.contains(n.value) : !1) };
}
const _t = 1;
function Tl(e, t = {}) {
  const {
    throttle: n = 0,
    idle: l = 200,
    onStop: r = Se,
    onScroll: u = Se,
    offset: i = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions: o = {
      capture: !1,
      passive: !0
    },
    behavior: a = "auto",
    window: c = Le
  } = t, p = A(0), d = A(0), v = I({
    get() {
      return p.value;
    },
    set(D) {
      $(D, void 0);
    }
  }), y = I({
    get() {
      return d.value;
    },
    set(D) {
      $(void 0, D);
    }
  });
  function $(D, g) {
    var R, B, ae;
    if (!c)
      return;
    const ee = ve(e);
    ee && ((ae = ee instanceof Document ? c.document.body : ee) == null || ae.scrollTo({
      top: (R = ve(g)) != null ? R : y.value,
      left: (B = ve(D)) != null ? B : v.value,
      behavior: ve(a)
    }));
  }
  const x = A(!1), E = ft({
    left: !0,
    right: !1,
    top: !0,
    bottom: !1
  }), f = ft({
    left: !1,
    right: !1,
    top: !1,
    bottom: !1
  }), m = (D) => {
    x.value && (x.value = !1, f.left = !1, f.right = !1, f.top = !1, f.bottom = !1, r(D));
  }, C = kl(m, n + l), z = (D) => {
    var g;
    if (!c)
      return;
    const R = D.document ? D.document.documentElement : (g = D.documentElement) != null ? g : D, { display: B, flexDirection: ae } = getComputedStyle(R), ee = R.scrollLeft;
    f.left = ee < p.value, f.right = ee > p.value;
    const be = Math.abs(ee) <= 0 + (i.left || 0), te = Math.abs(ee) + R.clientWidth >= R.scrollWidth - (i.right || 0) - _t;
    B === "flex" && ae === "row-reverse" ? (E.left = te, E.right = be) : (E.left = be, E.right = te), p.value = ee;
    let q = R.scrollTop;
    D === c.document && !q && (q = c.document.body.scrollTop), f.top = q < d.value, f.bottom = q > d.value;
    const le = Math.abs(q) <= 0 + (i.top || 0), Ce = Math.abs(q) + R.clientHeight >= R.scrollHeight - (i.bottom || 0) - _t;
    B === "flex" && ae === "column-reverse" ? (E.top = Ce, E.bottom = le) : (E.top = le, E.bottom = Ce), d.value = q;
  }, U = (D) => {
    var g;
    if (!c)
      return;
    const R = (g = D.target.documentElement) != null ? g : D.target;
    z(R), x.value = !0, C(D), u(D);
  };
  return de(
    e,
    "scroll",
    n ? Sl(U, n, !0, !1) : U,
    o
  ), de(
    e,
    "scrollend",
    m,
    o
  ), {
    x: v,
    y,
    isScrolling: x,
    arrivedState: E,
    directions: f,
    measure() {
      const D = ve(e);
      c && D && z(D);
    }
  };
}
const zl = "zoa__togglebutton__input", Nl = "zoa__togglebutton__inputWrapper", Al = "zoa__togglebutton__main", wl = "zoa__togglebutton__checkbox", Ml = {
  input: zl,
  inputWrapper: Nl,
  main: Al,
  "kind--normal": "zoa__togglebutton__kind--normal",
  checkbox: wl,
  "kind--primary": "zoa__togglebutton__kind--primary",
  "kind--alt": "zoa__togglebutton__kind--alt",
  "size--sm": "zoa__togglebutton__size--sm",
  "size--md": "zoa__togglebutton__size--md"
}, Cl = ["id", "for"], Rl = ["id", "name", "value"], Pl = {
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
    const n = e, { componentId: l, subId: r } = st(), { addPropClasses: u } = Ue(n), { value: i } = ie(t, n), o = A(null), a = A(null), c = $e(o), p = I(() => n.checkValue || n.label);
    function d() {
      let v = Ft(i.value) ? Yt(i.value) : i.value;
      if (Array.isArray(v)) {
        let y = !a.value.checked;
        v = v.filter(($) => $ !== p.value), y && v.push(p.value), i.value = v, a.value.checked = y;
      } else
        i.value = !i.value;
    }
    return Z(" ", () => {
      c.focused.value && d();
    }), Z("Enter", () => {
      c.focused.value && d();
    }), (v, y) => (T(), w("label", {
      id: _(l),
      for: _(r)("toggle"),
      tabindex: "0",
      ref_key: "checkboxContainer",
      ref: o,
      class: h(_(u)([]))
    }, [
      pe(M("input", {
        type: "checkbox",
        id: _(r)("toggle"),
        class: h(v.$style.checkbox),
        "onUpdate:modelValue": y[0] || (y[0] = ($) => ye(i) ? i.value = $ : null),
        name: e.name,
        value: p.value,
        ref_key: "checkboxInput",
        ref: a
      }, null, 10, Rl), [
        [St, _(i)]
      ]),
      M("span", {
        class: h([v.$style.main, v.$style[`kind--${e.kind}`], v.$style[`size--${e.size}`]])
      }, [
        Ve(v.$slots, "default", {}, () => [
          Te(G(e.label), 1)
        ])
      ], 2)
    ], 10, Cl));
  }
}, Dl = {
  $style: Ml
}, Vl = /* @__PURE__ */ X(Pl, [["__cssModules", Dl]]), Wl = "zoa__tabs__input", Ul = "zoa__tabs__inputWrapper", Ll = "zoa__tabs__tab", Bl = "zoa__tabs__tabContainer", Hl = {
  input: Wl,
  inputWrapper: Ul,
  tab: Ll,
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
  tabContainer: Bl
}, Gl = ["value"], jl = {
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
    st();
    const { addPropClasses: l } = Ue(n), { value: r } = ie(t, n), u = A(null);
    A(null), $e(u);
    const i = I(() => {
      let o = [];
      return n.options.forEach((a) => {
        typeof a == "object" ? o.push({
          label: a.label || a.value,
          value: a.value || a.label,
          order: a.order == null ? null : a.order
        }) : o.push({ label: a, value: a });
      }), o.sort((a, c) => {
        let p = 0;
        (a.order != null || c.order != null) && (p = a.order != null && c.order != null ? a.order - c.order : a.order != null ? -1 : 1);
        let d = a.label.localeCompare(c.label);
        return p !== 0 ? p : d;
      }), o;
    });
    return n.initialValue && i.value.some((o) => o.value === n.initialValue) ? r.value = n.initialValue : r.value = i.value[0].value, (o, a) => (T(), w("div", {
      class: h(_(l)([]))
    }, [
      M("ul", {
        class: h([o.$style.tabContainer, o.$style[`orient--${e.activePosition}`]])
      }, [
        (T(!0), w(ge, null, Oe(i.value, (c) => (T(), w("li", null, [
          M("label", {
            tabindex: "0",
            class: h([
              o.$style.tab,
              o.$style[`orient--${e.activePosition}`],
              o.$style[`kind--${e.kind}`],
              o.$style[`size--${e.size}`],
              o.$style[`state--${_(r) === c.value ? "active" : "inactive"}`]
            ])
          }, [
            pe(M("input", {
              type: "radio",
              value: c.value,
              "onUpdate:modelValue": a[0] || (a[0] = (p) => ye(r) ? r.value = p : null)
            }, null, 8, Gl), [
              [Kt, _(r)]
            ]),
            M("span", null, G(c.label), 1)
          ], 2)
        ]))), 256))
      ], 2)
    ], 2));
  }
}, Fl = {
  $style: Hl
}, Yl = /* @__PURE__ */ X(jl, [["__cssModules", Fl]]), Kl = "zoa__label__main", Zl = {
  main: Kl,
  "main--right": "zoa__label__main--right",
  "main--left": "zoa__label__main--left",
  "main--above": "zoa__label__main--above",
  "main--below": "zoa__label__main--below",
  "main--none": "zoa__label__main--none"
}, Xl = ["id", "for", "tabindex"], ql = ["id"], Jl = {
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
    const t = V("labelId");
    return (n, l) => e.label && !e.legend ? (T(), w("label", {
      key: 0,
      id: _(t),
      for: e.inputId,
      class: h([n.$style.main, n.$style[`main--${e.labelPosition}`]]),
      tabindex: e.tabbable ? 0 : -1
    }, G(e.label), 11, Xl)) : e.label ? (T(), w("legend", {
      key: 1,
      id: _(t),
      class: h([n.$style.main, n.$style[`main--${e.labelPosition}`]])
    }, G(e.label), 11, ql)) : ke("", !0);
  }
}, Ql = {
  $style: Zl
}, yt = /* @__PURE__ */ X(Jl, [["__cssModules", Ql]]);
function bt(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    t && (l = l.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, l);
  }
  return n;
}
function _e(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bt(Object(n), !0).forEach(function(l) {
      oe(e, l, n[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bt(Object(n)).forEach(function(l) {
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
function oe(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function en(e, t) {
  if (e == null)
    return {};
  var n = {}, l = Object.keys(e), r, u;
  for (u = 0; u < l.length; u++)
    r = l[u], !(t.indexOf(r) >= 0) && (n[r] = e[r]);
  return n;
}
function tn(e, t) {
  if (e == null)
    return {};
  var n = en(e, t), l, r;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    for (r = 0; r < u.length; r++)
      l = u[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (n[l] = e[l]);
  }
  return n;
}
function ot(e) {
  return ln(e) || nn(e) || an(e) || on();
}
function ln(e) {
  if (Array.isArray(e))
    return rt(e);
}
function nn(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function an(e, t) {
  if (e) {
    if (typeof e == "string")
      return rt(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return rt(e, t);
  }
}
function rt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, l = new Array(t); n < t; n++)
    l[n] = e[n];
  return l;
}
function on() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var rn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Nt = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(f, m, C) {
      if (!c(m) || d(m) || v(m) || y(m) || a(m))
        return m;
      var z, U = 0, D = 0;
      if (p(m))
        for (z = [], D = m.length; U < D; U++)
          z.push(n(f, m[U], C));
      else {
        z = {};
        for (var g in m)
          Object.prototype.hasOwnProperty.call(m, g) && (z[f(g, C)] = n(f, m[g], C));
      }
      return z;
    }, l = function(f, m) {
      m = m || {};
      var C = m.separator || "_", z = m.split || /(?=[A-Z])/;
      return f.split(z).join(C);
    }, r = function(f) {
      return $(f) ? f : (f = f.replace(/[\-_\s]+(.)?/g, function(m, C) {
        return C ? C.toUpperCase() : "";
      }), f.substr(0, 1).toLowerCase() + f.substr(1));
    }, u = function(f) {
      var m = r(f);
      return m.substr(0, 1).toUpperCase() + m.substr(1);
    }, i = function(f, m) {
      return l(f, m).toLowerCase();
    }, o = Object.prototype.toString, a = function(f) {
      return typeof f == "function";
    }, c = function(f) {
      return f === Object(f);
    }, p = function(f) {
      return o.call(f) == "[object Array]";
    }, d = function(f) {
      return o.call(f) == "[object Date]";
    }, v = function(f) {
      return o.call(f) == "[object RegExp]";
    }, y = function(f) {
      return o.call(f) == "[object Boolean]";
    }, $ = function(f) {
      return f = f - 0, f === f;
    }, x = function(f, m) {
      var C = m && "process" in m ? m.process : m;
      return typeof C != "function" ? f : function(z, U) {
        return C(z, f, U);
      };
    }, E = {
      camelize: r,
      decamelize: i,
      pascalize: u,
      depascalize: i,
      camelizeKeys: function(f, m) {
        return n(x(r, m), f);
      },
      decamelizeKeys: function(f, m) {
        return n(x(i, m), f, m);
      },
      pascalizeKeys: function(f, m) {
        return n(x(u, m), f);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = E : t.humps = E;
  })(rn);
})(Nt);
var un = Nt.exports, sn = ["class", "style"];
function cn(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var l = n.indexOf(":"), r = un.camelize(n.slice(0, l)), u = n.slice(l + 1).trim();
    return t[r] = u, t;
  }, {});
}
function dn(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function it(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var l = (e.children || []).map(function(a) {
    return it(a);
  }), r = Object.keys(e.attributes || {}).reduce(function(a, c) {
    var p = e.attributes[c];
    switch (c) {
      case "class":
        a.class = dn(p);
        break;
      case "style":
        a.style = cn(p);
        break;
      default:
        a.attrs[c] = p;
    }
    return a;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var u = n.style, i = u === void 0 ? {} : u, o = tn(n, sn);
  return xt(e.tag, _e(_e(_e({}, t), {}, {
    class: r.class,
    style: _e(_e({}, r.style), i)
  }, r.attrs), o), l);
}
var At = !1;
try {
  At = !0;
} catch {
}
function pn() {
  if (!At && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Ye(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? oe({}, e, t) : {};
}
function fn(e) {
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
  }, oe(t, "fa-".concat(e.size), e.size !== null), oe(t, "fa-rotate-".concat(e.rotation), e.rotation !== null), oe(t, "fa-pull-".concat(e.pull), e.pull !== null), oe(t, "fa-swap-opacity", e.swapOpacity), oe(t, "fa-bounce", e.bounce), oe(t, "fa-shake", e.shake), oe(t, "fa-beat", e.beat), oe(t, "fa-fade", e.fade), oe(t, "fa-beat-fade", e.beatFade), oe(t, "fa-flash", e.flash), oe(t, "fa-spin-pulse", e.spinPulse), oe(t, "fa-spin-reverse", e.spinReverse), t);
  return Object.keys(n).map(function(l) {
    return n[l] ? l : null;
  }).filter(function(l) {
    return l;
  });
}
function ht(e) {
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
var Me = ut({
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
    var l = n.attrs, r = I(function() {
      return ht(t.icon);
    }), u = I(function() {
      return Ye("classes", fn(t));
    }), i = I(function() {
      return Ye("transform", typeof t.transform == "string" ? Xe.transform(t.transform) : t.transform);
    }), o = I(function() {
      return Ye("mask", ht(t.mask));
    }), a = I(function() {
      return Jt(r.value, _e(_e(_e(_e({}, u.value), i.value), o.value), {}, {
        symbol: t.symbol,
        title: t.title
      }));
    });
    ze(a, function(p) {
      if (!p)
        return pn("Could not find one or more icon(s)", r.value, o.value);
    }, {
      immediate: !0
    });
    var c = I(function() {
      return a.value ? it(a.value.abstract[0], {}, l) : null;
    });
    return function() {
      return c.value;
    };
  }
});
ut({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var l = n.slots, r = Et.familyPrefix, u = I(function() {
      return ["".concat(r, "-layers")].concat(ot(t.fixedWidth ? ["".concat(r, "-fw")] : []));
    });
    return function() {
      return xt("div", {
        class: u.value
      }, l.default ? l.default() : []);
    };
  }
});
ut({
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
    var l = n.attrs, r = Et.familyPrefix, u = I(function() {
      return Ye("classes", [].concat(ot(t.counter ? ["".concat(r, "-layers-counter")] : []), ot(t.position ? ["".concat(r, "-layers-").concat(t.position)] : [])));
    }), i = I(function() {
      return Ye("transform", typeof t.transform == "string" ? Xe.transform(t.transform) : t.transform);
    }), o = I(function() {
      var c = Qt(t.value.toString(), _e(_e({}, i.value), u.value)), p = c.abstract;
      return t.counter && (p[0].attributes.class = p[0].attributes.class.replace("fa-layers-text", "")), p[0];
    }), a = I(function() {
      return it(o.value, {}, l);
    });
    return function() {
      return a.value;
    };
  }
});
el.add(
  tl,
  ll,
  nl,
  al,
  ol,
  rl,
  ul,
  sl
);
const mn = "zoa__help__main", vn = "zoa__help__icon", _n = "zoa__help__popup", yn = {
  main: mn,
  "main--above": "zoa__help__main--above",
  "main--below": "zoa__help__main--below",
  icon: vn,
  popup: _n,
  "popup--right": "zoa__help__popup--right"
}, bn = ["id"], hn = {
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
    const t = V("labelPosition"), n = V("helpId"), l = A(!1), r = A(null), u = Ol(r, { delayEnter: 500 });
    return ze(u, () => {
      l.value = u.value;
    }), Z("Escape", () => l.value = !1), (i, o) => (T(), w("div", {
      class: h([i.$style.main, i.$style[`main--${_(t)}`]]),
      ref_key: "helpContainer",
      ref: r
    }, [
      F(_(Me), {
        icon: ["fa-solid", "fa-circle-question"],
        class: h(i.$style.icon)
      }, null, 8, ["class"]),
      pe(M("div", {
        class: h([i.$style.popup, i.$style[`popup--${e.position}`]]),
        id: _(n),
        role: "tooltip"
      }, [
        Ve(i.$slots, "default", {}, () => [
          Te(G(e.text), 1)
        ])
      ], 10, bn), [
        [nt, l.value]
      ])
    ], 2));
  }
}, gn = {
  $style: yn
}, gt = /* @__PURE__ */ X(hn, [["__cssModules", gn]]), $n = "zoa__autocompletetextbox__input", In = "zoa__autocompletetextbox__inputWrapper", kn = "zoa__autocompletetextbox__options", Sn = "zoa__autocompletetextbox__option", xn = "zoa__autocompletetextbox__noOptions", En = {
  input: $n,
  inputWrapper: In,
  options: kn,
  option: Sn,
  noOptions: xn
}, On = ["aria-labelledby", "aria-describedby"], Tn = ["placeholder", "id"], zn = { key: 0 }, Nn = ["onClick"], An = ["value"], wn = {
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
    const l = e, r = V("inputId"), u = V("labelId"), i = V("helpId"), { value: o } = ie(n, l), a = I(() => {
      let f = [];
      return l.options.forEach((m) => {
        typeof m == "object" ? f.push({
          label: m.label || m.value,
          value: m.value || m.label,
          order: m.order == null ? null : m.order
        }) : f.push({ label: m, value: m });
      }), f.sort((m, C) => {
        let z = 0;
        (m.order != null || C.order != null) && (z = m.order != null && C.order != null ? m.order - C.order : m.order != null ? -1 : 1);
        let U = m.label.localeCompare(C.label);
        return z !== 0 ? z : U;
      }), f;
    }), c = A(null), p = A(null), d = A(null);
    t({
      target: p
    });
    const v = A(!1), y = De(p), $ = $e(d);
    function x() {
      try {
        c.value.blur(), p.value.blur(), d.value.blur();
      } catch {
      }
      v.value = !1;
    }
    zt(c, () => {
      v.value = !1;
    }), Z("ArrowDown", () => {
      if (a.value.length !== 0) {
        if (y.focused.value)
          d.value.children[0].children[0].focus();
        else if ($.focused.value) {
          const f = d.value.querySelector("li:focus");
          !f || !f.nextElementSibling ? d.value.children[0].children[0].focus() : f.nextElementSibling.focus();
        }
      }
    }), Z("ArrowUp", () => {
      if (a.value.length !== 0 && $.focused.value) {
        const f = d.value.querySelector("li:focus");
        !f || !f.previousElementSibling ? p.value.focus() : f.previousElementSibling.focus();
      }
    }), Z("Enter", () => {
      if ($.focused.value) {
        const f = d.value.querySelector("li:focus");
        f && E(f.querySelector("input").value);
      }
      x();
    });
    function E(f) {
      o.value = f, x();
    }
    return (f, m) => (T(), w("div", {
      class: h(f.$style.inputWrapper),
      ref_key: "container",
      ref: c,
      "aria-labelledby": _(u),
      "aria-describedby": _(i)
    }, [
      pe(M("input", {
        type: "text",
        placeholder: e.placeholder,
        id: _(r),
        class: h(f.$style.input),
        "onUpdate:modelValue": m[0] || (m[0] = (C) => ye(o) ? o.value = C : null),
        onFocusin: m[1] || (m[1] = (C) => v.value = !0),
        ref_key: "textbox",
        ref: p
      }, null, 42, Tn), [
        [We, _(o)]
      ]),
      v.value ? (T(), w("div", {
        key: 0,
        class: h(f.$style.options),
        ref_key: "dropdown",
        ref: d
      }, [
        a.value.length > 0 ? (T(), w("ul", zn, [
          (T(!0), w(ge, null, Oe(a.value, (C) => (T(), w("li", {
            class: h(f.$style.option),
            onClick: (z) => E(C.value),
            tabindex: "0"
          }, [
            M("span", null, G(C.label), 1),
            M("input", {
              type: "hidden",
              value: C.value
            }, null, 8, An)
          ], 10, Nn))), 256))
        ])) : (T(), w("div", {
          key: 1,
          class: h(f.$style.noOptions)
        }, "No options found", 2))
      ], 2)) : ke("", !0)
    ], 10, On));
  }
}, Mn = {
  $style: En
}, Cn = /* @__PURE__ */ X(wn, [["__cssModules", Mn]]), Rn = "zoa__checkbox__input", Pn = "zoa__checkbox__inputWrapper", Dn = "zoa__checkbox__defaultCheckbox", Vn = "zoa__checkbox__checkbox", Wn = "zoa__checkbox__check", Un = {
  input: Rn,
  inputWrapper: Pn,
  defaultCheckbox: Dn,
  checkbox: Vn,
  check: Wn
}, Ln = ["aria-labelledby", "aria-describedby"], Bn = ["id", "name", "value"], Hn = {
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
    const l = e, r = V("inputId"), u = V("labelId"), i = V("helpId"), { value: o, valueChanged: a } = ie(n, l), c = V("rootContainer"), p = A(null), d = $e(c);
    t({
      target: p
    });
    const v = V("label"), y = I(() => l.checkValue || v.value), $ = I({
      get() {
        return l.name ? o.value || [] : o.value || !1;
      },
      set(E) {
        a(E);
      }
    });
    function x() {
      if (l.name) {
        let E = !$.value.includes(y.value), f = $.value.filter((m) => m !== y.value);
        E && f.push(y.value), $.value = f;
      } else
        $.value = !$.value;
    }
    return Z(" ", () => {
      d.focused.value && x();
    }), (E, f) => (T(), w("div", {
      class: h(E.$style.inputWrapper),
      "aria-labelledby": _(u),
      "aria-describedby": _(i)
    }, [
      pe(M("input", {
        type: "checkbox",
        id: _(r),
        class: h(E.$style.defaultCheckbox),
        "onUpdate:modelValue": f[0] || (f[0] = (m) => $.value = m),
        name: e.name ? e.name : null,
        value: y.value,
        ref_key: "checkboxInput",
        ref: p
      }, null, 10, Bn), [
        [St, $.value]
      ]),
      M("span", {
        class: h(E.$style.checkbox),
        onClick: x
      }, [
        F(_(Me), {
          icon: "fa-solid fa-check",
          class: h(E.$style.check)
        }, null, 8, ["class"])
      ], 2)
    ], 10, Ln));
  }
}, Gn = {
  $style: Un
}, jn = /* @__PURE__ */ X(Hn, [["__cssModules", Gn]]);
function Fn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yn = {
  __locale: "en",
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  abbreviated_days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  abbreviated_months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  am: "AM",
  pm: "PM"
}, Kn = Yn;
const $t = /* @__PURE__ */ Fn(Kn), Zn = "zoa__dateambiguous__input", Xn = "zoa__dateambiguous__inputWrapper", qn = "zoa__dateambiguous__datePopup", Jn = "zoa__dateambiguous__popupSection", Qn = "zoa__dateambiguous__yearGrid", ea = "zoa__dateambiguous__monthGrid", ta = "zoa__dateambiguous__dayGrid", la = "zoa__dateambiguous__editing", na = "zoa__dateambiguous__suggestion", aa = "zoa__dateambiguous__dateRange", oa = "zoa__dateambiguous__yearParts", ra = {
  input: Zn,
  inputWrapper: Xn,
  datePopup: qn,
  popupSection: Jn,
  yearGrid: Qn,
  monthGrid: ea,
  dayGrid: ta,
  editing: la,
  suggestion: na,
  dateRange: aa,
  yearParts: oa
}, ua = ["aria-labelledby", "aria-describedby"], sa = ["placeholder", "id"], ia = ["onClick", "onKeydown"], ca = {
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
    const l = e, r = () => import("./dates-51ce3462.js"), u = V("inputId"), i = V("labelId"), o = V("helpId"), { valueChanged: a } = ie(n, l.delay), c = I(() => {
      let s;
      try {
        s = new Date(
          l.min === "today" ? Date.now() : Date.parse(l.min || "0000-01-01")
        );
      } catch {
        s = new Date(0, 0, 1);
      }
      return {
        year: s.getUTCFullYear(),
        month: s.getUTCMonth() + 1,
        day: s.getUTCDate(),
        date: s
      };
    }), p = I(() => {
      let s;
      try {
        s = new Date(
          l.max === "today" ? Date.now() : Date.parse(l.max || "9999-12-31")
        );
      } catch {
        s = new Date(9999, 11, 31);
      }
      return {
        year: s.getUTCFullYear(),
        month: s.getUTCMonth() + 1,
        day: s.getUTCDate(),
        date: s
      };
    }), d = A(null), v = V("rootContainer"), y = A(null), $ = A(null), x = A(null), E = A(null), f = A(null), m = A(null), C = A(null), z = A(!1), { focused: U } = $e(v);
    t({
      target: d
    });
    const D = De(y), g = $e(y), R = De($), B = $e($), ae = De(x), ee = $e(x), be = I(() => {
      let s;
      return D.focused.value ? s = y.value : R.focused.value ? s = $.value : ae.focused.value && (s = x.value), s;
    }), te = I(() => {
      let s;
      return g.focused.value ? s = y.value : B.focused.value ? s = $.value : ee.focused.value && (s = x.value), s;
    });
    Z("Enter", () => {
      be && be.value.children[0].focus();
    }), Z("ArrowLeft", () => {
      if (!te.value)
        return;
      const s = te.value.querySelector("button:focus");
      !s || !s.previousElementSibling ? te.value.children[te.value.children.length - 1].focus() : s.previousElementSibling.focus();
    }), Z("ArrowRight", () => {
      if (!te.value)
        return;
      const s = te.value.querySelector("button:focus");
      !s || !s.nextElementSibling ? te.value.children[0].focus() : s.nextElementSibling.focus();
    }), Z("Escape", () => {
      const s = v.value.querySelector("*:focus");
      s && s.blur();
    });
    function q(s, S, k) {
      s.value && (s.value.target.onkeyup = (P) => {
        /^[0-9]$/.test(P.key) && S ? S.value.focus() : P.key === "Backspace" && k && k.value.focus();
      });
    }
    Zt(() => {
      q(E, f, null), q(f, m, E), q(m, C, f), q(C, null, m);
    });
    const le = I(() => ({
      year: H.value,
      month: me.value,
      day: ce.value,
      earliest: `${b.value.lower.year.toString().padStart(4, "0")}-${b.value.lower.month.toString().padStart(2, "0")}-${b.value.lower.day.toString().padStart(2, "0")}`,
      latest: `${b.value.upper.year.toString().padStart(4, "0")}-${b.value.upper.month.toString().padStart(2, "0")}-${b.value.upper.day.toString().padStart(2, "0")}`
    })), Ce = I(() => ct(
      le.value.year,
      le.value.month,
      le.value.day
    )), b = I(() => {
      let s, S;
      if (!xe.value)
        s = c.value.year, S = p.value.year;
      else {
        const he = 10 ** (4 - (Math.max(
          ...fe.map((Lt, Bt) => isNaN(parseInt(L.value[Lt])) ? -1 : Bt)
        ) + 1)), ue = Be(L.value, 4), Ge = Math.floor(c.value.year / he) * he, pt = Math.floor(p.value.year / he) * he;
        ue < Ge || ue > pt ? (s = c.value.year, S = p.value.year) : ue === Ge ? (s = c.value.year, S = ue + he - 1) : ue === pt ? (s = ue, S = p.value.year) : (s = ue, S = ue + he - 1);
      }
      const k = s === c.value.year, P = S === p.value.year, J = k ? Math.max(c.value.month, Ie.value || 1) : Ie.value || 1, Q = P ? Math.min(p.value.month, Ie.value || 12) : Ie.value || 12, re = J === c.value.month, Y = Q === p.value.month;
      let j = Pe.value || 1, ne = Pe.value || He(Q);
      return j = k && re ? Math.max(j, c.value.day) : j, ne = P && Y ? Math.min(ne, p.value.day) : ne, s === S && J === Q && (P && Y && j > ne && (j = 1), k && re && ne < j && (ne = He(Q))), {
        lower: {
          year: s,
          month: J,
          day: j,
          isMinYear: k,
          isMinMonth: re
        },
        upper: {
          year: S,
          month: Q,
          day: ne,
          isMaxYear: P,
          isMaxMonth: Y
        }
      };
    });
    function O(s, S, k) {
      const P = isNaN(parseInt(s)), J = isNaN(parseInt(S)), Q = isNaN(parseInt(k)), re = J || S <= 12 && S >= 1, Y = Q || k <= He(S);
      if (P || s > b.value.lower.year && s < b.value.upper.year)
        return {
          year: !0,
          month: re,
          day: Y
        };
      if (s < b.value.lower.year || s > b.value.upper.year)
        return {
          year: !1,
          month: re,
          day: Y
        };
      let j = re, ne = Y;
      return s === b.value.lower.year && (j = j && (J || S >= b.value.lower.month), S === b.value.lower.month && (ne = ne && (Q || k >= b.value.lower.day))), s === b.value.upper.year && (j = j && (J || S <= b.value.upper.month), S === b.value.upper.month && (ne = ne && (Q || k <= b.value.upper.day))), {
        year: !0,
        month: j,
        day: ne
      };
    }
    function N() {
      d.value.value = Ce.value, z.value = !1;
    }
    const W = A([]);
    function K(s) {
      z.value = !0, r().then((S) => {
        W.value = S.parseDate(s.target.value);
      });
    }
    const Re = qe(K, 200);
    function Ne(s) {
      L.value = tt(s.year), me.value = s.month, ce.value = s.day, W.value = [];
    }
    const H = I(() => {
      if (!xe.value)
        return null;
      const s = Be(L.value, 4);
      return O(s, me.value, ce.value).year ? s : null;
    }), L = A({
      millenium: null,
      century: null,
      decade: null,
      year: null
    }), fe = ["millenium", "century", "decade", "year"], xe = I(() => Object.values(L.value).some((s) => !isNaN(parseInt(s)))), et = I(() => {
      const s = tt(b.value.lower.year), S = {
        millenium: null,
        century: null,
        decade: null,
        year: null
      };
      if (c.value.year === p.value.year && isNaN(parseInt(L.value.year)))
        return [s];
      if (b.value.lower.year === b.value.upper.year)
        return [S];
      const k = tt(b.value.upper.year);
      let P, J = { ...S };
      if (xe.value)
        P = Math.max(
          ...fe.map((Y, j) => (J[Y] = L.value[Y], isNaN(parseInt(L.value[Y])) ? -1 : j))
        ) + 1;
      else
        for (let Y = 0; Y < fe.length; Y++) {
          let j = fe[Y];
          if (s[j] === k[j])
            J[j] = s[j];
          else if (P == null) {
            P = Y;
            break;
          }
        }
      function Q(Y) {
        let j = fe[Y];
        const ne = Be(s, Y + 1), dt = Be(k, Y + 1);
        return Array(10).fill(0).map((he, ue) => {
          let Ge = { ...J };
          return Ge[j] = he + ue, Ge;
        }).filter((he) => {
          const ue = Be(he, Y + 1);
          return ue >= ne && ue <= dt;
        });
      }
      let re = Q(P);
      return re.length === 1 && P < 3 && (J = { ...re[0] }, re = Q(P + 1)), xe.value && re.push(S), re;
    }), Pt = I(() => H.value % 100 === 0 ? H.value % 400 === 0 : H.value % 4 === 0);
    function Dt(s) {
      return Object.values(s).every((S) => S == null) ? "clear" : fe.map((S) => s[S] || 0).join("");
    }
    function Be(s, S) {
      return fe.slice(0, S).reduce((k, P, J) => {
        let Q = s[P] || 0;
        return k + Q * 10 ** (3 - J);
      }, 0);
    }
    function tt(s) {
      return {
        millenium: Math.floor(s / 1e3),
        century: Math.floor(s % 1e3 / 100),
        decade: Math.floor(s % 100 / 10),
        year: Math.floor(s % 10)
      };
    }
    function Vt(s) {
      if (L.value = s, Math.max(
        ...fe.map(
          (k, P) => isNaN(parseInt(L.value[k])) ? -1 : P
        )
      ) === 3) {
        let k = O(H.value, me.value, ce.value);
        (!k.month || !k.day) && (me.value = null, ce.value = null);
      }
    }
    const Ie = A(null), me = I({
      get() {
        return O(H.value, Ie.value, ce.value).month ? Ie.value : null;
      },
      set(s) {
        Ie.value = isNaN(parseInt(s)) ? null : s, ce.value && ce.value > lt.value && (ce.value = lt.value);
      }
    }), Wt = I(() => {
      let s = $t.abbreviated_months.map((k, P) => [k, P + 1]);
      const S = H.value ? H.value : c.value.year === p.value.year ? c.value.year : null;
      if (S === c.value.year && (s = s.slice(c.value.month - 1, s.length)), S === p.value.year) {
        const k = 12 - s.length;
        s = s.slice(0, p.value.month - k);
      }
      return Ie.value && s.push(["clear", null]), s;
    }), lt = I(() => He(me.value));
    function He(s) {
      return [4, 6, 9, 11].includes(s) ? 30 : s === 2 ? Pt.value ? 29 : 28 : 31;
    }
    const Pe = A(null), ce = I({
      get() {
        const s = O(H.value, Ie.value, Pe.value);
        return s.month && s.day ? Pe.value : null;
      },
      set(s) {
        Pe.value = isNaN(parseInt(s)) ? null : s;
      }
    }), Ut = I(() => {
      const s = H.value ? H.value : c.value.year === p.value.year ? c.value.year : null, S = me.value ? me.value : c.value.year === p.value.year && c.value.month === p.value.month ? c.value.month : null, k = He(S);
      let P = Array(k).fill(1).map((J, Q) => Q + 1);
      if (s === c.value.year && !isNaN(parseInt(S)) && S <= c.value.month && (P = P.slice(c.value.day - 1)), s === p.value.year && !isNaN(parseInt(S)) && S >= p.value.month) {
        const J = k - P.length;
        P = P.slice(0, p.value.day - J);
      }
      return Pe.value && P.push(null), P;
    });
    function ct(s, S, k) {
      const P = $t.abbreviated_months[S - 1];
      return s && S && k ? `${k} ${P} ${s}` : s && S ? `${P} ${s}` : s && k ? `${k} ??? ${s}` : S && k ? `${k} ${P}` : s || (S ? P : k ? `day ${k}` : null);
    }
    return ze(le, () => {
      N(), a(le.value);
    }), (s, S) => (T(), w("div", {
      class: h(s.$style.inputWrapper),
      "aria-labelledby": _(i),
      "aria-describedby": _(o)
    }, [
      M("input", {
        type: "text",
        placeholder: e.placeholder,
        id: _(u),
        class: h([s.$style.input, z.value ? s.$style.editing : ""]),
        ref_key: "displayBox",
        ref: d,
        onInput: S[0] || (S[0] = (...k) => _(Re) && _(Re)(...k))
      }, null, 42, sa),
      _(U) ? (T(), w("div", {
        key: 0,
        class: h(s.$style.datePopup)
      }, [
        W.value.length > 0 ? (T(), w("div", {
          key: 0,
          class: h(s.$style.popupSection)
        }, [
          (T(!0), w(ge, null, Oe(W.value, (k) => (T(), w("span", {
            onClick: (P) => Ne(k),
            onKeydown: Xt((P) => Ne(k), ["enter"]),
            class: h(s.$style.suggestion),
            tabindex: "0"
          }, G(ct(k.year, k.month, k.day)), 43, ia))), 256))
        ], 2)) : ke("", !0),
        M("div", {
          class: h(s.$style.popupSection)
        }, [
          F(_(se), {
            label: "year",
            "grid-class": s.$style.yearParts
          }, {
            default: Ke(() => [
              F(_(se), {
                "zoa-type": "number",
                label: "millenium",
                "label-position": "none",
                options: { placeholder: 0, min: 0, max: 9 },
                modelValue: L.value.millenium,
                "onUpdate:modelValue": S[1] || (S[1] = (k) => L.value.millenium = k),
                ref_key: "yrM",
                ref: E
              }, null, 8, ["modelValue"]),
              F(_(se), {
                "zoa-type": "number",
                label: "century",
                "label-position": "none",
                options: { placeholder: 0, min: 0, max: 9 },
                modelValue: L.value.century,
                "onUpdate:modelValue": S[2] || (S[2] = (k) => L.value.century = k),
                ref_key: "yrC",
                ref: f
              }, null, 8, ["modelValue"]),
              F(_(se), {
                "zoa-type": "number",
                label: "decade",
                "label-position": "none",
                options: { placeholder: 0, min: 0, max: 9 },
                modelValue: L.value.decade,
                "onUpdate:modelValue": S[3] || (S[3] = (k) => L.value.decade = k),
                ref_key: "yrD",
                ref: m
              }, null, 8, ["modelValue"]),
              F(_(se), {
                "zoa-type": "number",
                label: "year",
                "label-position": "none",
                options: { placeholder: 0, min: 0, max: 9 },
                modelValue: L.value.year,
                "onUpdate:modelValue": S[4] || (S[4] = (k) => L.value.year = k),
                ref_key: "yrY",
                ref: C
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["grid-class"]),
          M("div", {
            class: h(s.$style.yearGrid),
            tabindex: "0",
            ref_key: "yearBtns",
            ref: y
          }, [
            (T(!0), w(ge, null, Oe(et.value, (k) => (T(), we(_(Fe), {
              size: "sm",
              onClick: (P) => Vt(k),
              tabindex: "-1"
            }, {
              default: Ke(() => [
                Te(G(Dt(k)), 1)
              ]),
              _: 2
            }, 1032, ["onClick"]))), 256))
          ], 2)
        ], 2),
        M("div", {
          class: h(s.$style.popupSection)
        }, [
          F(_(se), {
            "zoa-type": "number",
            label: "month",
            options: { placeholder: 1, min: 1, max: 12 },
            modelValue: me.value,
            "onUpdate:modelValue": S[5] || (S[5] = (k) => me.value = k)
          }, null, 8, ["modelValue"]),
          M("div", {
            class: h(s.$style.monthGrid),
            tabindex: "0",
            ref_key: "monthBtns",
            ref: $
          }, [
            (T(!0), w(ge, null, Oe(Wt.value, (k) => (T(), we(_(Fe), {
              size: "sm",
              onClick: (P) => me.value = k[1],
              tabindex: "-1"
            }, {
              default: Ke(() => [
                Te(G(k[0]), 1)
              ]),
              _: 2
            }, 1032, ["onClick"]))), 256))
          ], 2)
        ], 2),
        M("div", {
          class: h(s.$style.popupSection)
        }, [
          F(_(se), {
            "zoa-type": "number",
            label: "day",
            options: { placeholder: 1, min: 1, max: lt.value },
            modelValue: ce.value,
            "onUpdate:modelValue": S[6] || (S[6] = (k) => ce.value = k)
          }, null, 8, ["options", "modelValue"]),
          M("div", {
            class: h(s.$style.dayGrid),
            tabindex: "0",
            ref_key: "dayBtns",
            ref: x
          }, [
            (T(!0), w(ge, null, Oe(Ut.value, (k) => (T(), we(_(Fe), {
              size: "sm",
              onClick: (P) => ce.value = k,
              tabindex: "-1"
            }, {
              default: Ke(() => [
                Te(G(k || "clear"), 1)
              ]),
              _: 2
            }, 1032, ["onClick"]))), 256))
          ], 2)
        ], 2),
        M("div", {
          class: h(s.$style.popupSection)
        }, [
          M("small", {
            class: h(s.$style.dateRange)
          }, G(le.value.earliest) + " to " + G(le.value.latest), 3)
        ], 2)
      ], 2)) : ke("", !0)
    ], 10, ua));
  }
}, da = {
  $style: ra
}, pa = /* @__PURE__ */ X(ca, [["__cssModules", da]]), fa = "zoa__datesimple__input", ma = "zoa__datesimple__inputWrapper", va = {
  input: fa,
  inputWrapper: ma
}, _a = ["aria-labelledby", "aria-describedby"], ya = ["placeholder", "min", "max", "step", "id"], ba = {
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
    const l = e, r = V("inputId"), u = V("labelId"), i = V("helpId"), { value: o } = ie(n, l), a = A(null);
    return t({
      target: a
    }), (c, p) => (T(), w("div", {
      class: h(c.$style.inputWrapper),
      "aria-labelledby": _(u),
      "aria-describedby": _(i)
    }, [
      pe(M("input", {
        type: "date",
        placeholder: e.placeholder,
        min: e.min,
        max: e.max,
        step: e.step,
        id: _(r),
        class: h(c.$style.input),
        "onUpdate:modelValue": p[0] || (p[0] = (d) => ye(o) ? o.value = d : null),
        ref_key: "target",
        ref: a
      }, null, 10, ya), [
        [We, _(o)]
      ])
    ], 10, _a));
  }
}, ha = {
  $style: va
}, ga = /* @__PURE__ */ X(ba, [["__cssModules", ha]]), $a = "zoa__dropdown__input", Ia = "zoa__dropdown__inputWrapper", ka = "zoa__dropdown__arrow", Sa = {
  input: $a,
  inputWrapper: Ia,
  arrow: ka
}, xa = ["aria-labelledby", "aria-describedby"], Ea = ["id"], Oa = { value: null }, Ta = ["value"], za = {
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
    const l = e, r = V("inputId"), u = V("labelId"), i = V("helpId"), o = I(() => {
      let p = [];
      return l.options.forEach((d) => {
        typeof d == "object" ? p.push({
          label: d.label || d.value,
          value: d.value || d.label,
          order: d.order == null ? null : d.order
        }) : p.push({ label: d, value: d });
      }), p.sort((d, v) => {
        let y = 0;
        (d.order != null || v.order != null) && (y = d.order != null && v.order != null ? d.order - v.order : d.order != null ? -1 : 1);
        let $ = d.label.localeCompare(v.label);
        return y !== 0 ? y : $;
      }), p;
    }), { value: a } = ie(n, l), c = A(null);
    return t({
      target: c
    }), (p, d) => (T(), w("div", {
      class: h(p.$style.inputWrapper),
      "aria-labelledby": _(u),
      "aria-describedby": _(i)
    }, [
      pe(M("select", {
        id: _(r),
        class: h(p.$style.input),
        "onUpdate:modelValue": d[0] || (d[0] = (v) => ye(a) ? a.value = v : null),
        ref_key: "target",
        ref: c
      }, [
        M("option", Oa, G(e.placeholder), 1),
        (T(!0), w(ge, null, Oe(o.value, (v) => (T(), w("option", {
          value: v.value
        }, G(v.label), 9, Ta))), 256))
      ], 10, Ea), [
        [qt, _(a)]
      ]),
      F(_(Me), {
        icon: "fa-solid fa-caret-down",
        class: h(p.$style.arrow)
      }, null, 8, ["class"])
    ], 10, xa));
  }
}, Na = {
  $style: Sa
}, Aa = /* @__PURE__ */ X(za, [["__cssModules", Na]]);
function* wa(e, t, n = 0, l = null) {
  if (e.length === 0)
    return;
  l === null && (l = t.length);
  let u;
  for (; (u = t.indexOf(e, n)) > -1 && !(u + e.length > l); )
    yield u, n = u + 1;
}
function Ma(e) {
  return e.split("").reverse().join("");
}
var Ca = {
  searchExact: wa,
  reverse: Ma
};
const { searchExact: wt, reverse: It } = Ca;
function Ra(e, t, n) {
  e.length > t.length && ([e, t] = [t, e]);
  const l = t.length - e.length;
  if (l > n)
    return !1;
  if (n === 0)
    return e === t;
  let r;
  for (r = 0; r < e.length && e[r] === t[r]; r++)
    ;
  if (r === e.length)
    return l <= n;
  let u;
  for (u = e.length - 1; u >= 0 && e[u] === t[u + l]; u--)
    ;
  e = e.slice(r, u + 1), t = t.slice(r, u + 1 + l);
  const [i, o] = Qe(e, t, n);
  return i + (t.length - o) <= n;
}
function Pa(e, t) {
  e.length > t.length && ([e, t] = [t, e]);
  const n = new Array(e.length + 1);
  for (let u = 0; u <= e.length; u++)
    n[u] = u;
  let l, r;
  for (let u = 0; u < t.length; u++) {
    n[0] = u + 1, r = u;
    for (let i = 0; i < e.length; i++)
      l = n[i + 1], n[i + 1] = Math.min(
        r + +(e[i] !== t[u]),
        n[i] + 1,
        n[i + 1] + 1
      ), r = l;
  }
  return n[e.length];
}
function Da(e, t) {
  const n = {};
  for (let l = Math.min(e.length - 1, t); l >= 0; l--)
    n[e[l]] = l;
  return n;
}
function* Va(e, t, n) {
  if (e.length > t.length + n)
    return;
  const l = Math.floor(e.length / (n + 1));
  if (n === 0)
    for (const r of wt(e, t))
      yield {
        start: r,
        end: r + e.length,
        dist: 0
      };
  else
    l >= 10 ? yield* Mt(e, t, n) : yield* Ct(e, t, n);
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
  let r = new Array(e.length + 1);
  for (let d = 0; d <= n; d++)
    r[d] = d;
  let u = new Array(e.length + 1), i = null, o = null, a = n, c = 0, p = e.length - 1;
  for (let d = 0; d < t.length; d++) {
    const v = t.charCodeAt(d), y = Math.max(0, c - 1), $ = Math.min(
      d + n,
      e.length - 1,
      p
    );
    u[0] = r[0] + 1, c = u[0] <= a ? 0 : null, p = u[0] <= a ? 0 : -1;
    let x;
    for (x = y; x < $; x++) {
      const f = u[x + 1] = Math.min(
        r[x] + +(v !== e.charCodeAt(x)),
        r[x + 1] + 1,
        u[x] + 1
      );
      f <= a && (c === null && (c = x + 1), p = Math.max(
        p,
        x + 1 + (a - f)
      ));
    }
    const E = u[x + 1] = Math.min(
      r[x] + +(v !== e.charCodeAt(x)),
      u[x] + 1
    );
    if (E <= a && (c === null && (c = x + 1), p = x + 1), x === e.length - 1 && (i === null || E <= i) && (i = E, o = d, i < a && (a = i)), [r, u] = [u, r], c === null)
      break;
  }
  return i !== null && i <= n ? [i, o + 1 + l] : [null, null];
}
function* Mt(e, t, n) {
  const l = Math.floor(e.length / (n + 1)), r = e.length, u = t.length;
  for (let i = 0; i <= e.length - l; i += l) {
    const o = e.slice(i, i + l), a = i + l, c = It(e.slice(0, i)), p = e.slice(a), d = Math.max(0, i - n), v = Math.min(u, u - r + a + n);
    for (const y of wt(o, t, d, v)) {
      const [$, x] = Qe(
        p,
        t.slice(
          y + l,
          y - i + r + n
        ),
        n
      );
      if ($ === null)
        continue;
      const [E, f] = Qe(
        c,
        It(t.slice(
          Math.max(0, y - i - (n - $)),
          y
        )),
        n - $
      );
      E !== null && (yield {
        start: y - f,
        end: y + l + x,
        dist: E + $
      });
    }
  }
}
function* Ct(e, t, n) {
  const l = e.length, r = t.length;
  if (l > r + n)
    return;
  const u = Da(e, n);
  let i = [], o = [];
  for (let a = 0; a < t.length; a++) {
    const c = t[a];
    i = o, o = [];
    const p = u[c];
    p !== void 0 && (p + 1 === l ? yield {
      start: a,
      end: a + 1,
      dist: p
    } : o.push({
      startIdx: a,
      needleIdx: p + 1,
      dist: p
    }));
    for (const d of i)
      if (e[d.needleIdx] === c)
        d.needleIdx + 1 === l ? yield {
          start: d.startIdx,
          end: a + 1,
          dist: d.dist
        } : o.push({
          startIdx: d.startIdx,
          needleIdx: d.needleIdx + 1,
          dist: d.dist
        });
      else {
        if (d.dist === n)
          continue;
        o.push({
          startIdx: d.startIdx,
          needleIdx: d.needleIdx,
          dist: d.dist + 1
        });
        for (let v = 1; v <= n - d.dist; v++)
          if (d.needleIdx + v === l) {
            yield {
              start: d.startIdx,
              end: a + 1,
              dist: d.dist + v
            };
            break;
          } else if (e[d.needleIdx + v] === c) {
            d.needleIdx + v + 1 === l ? yield {
              start: d.startIdx,
              end: a + 1,
              dist: d.dist + v
            } : o.push({
              startIdx: d.startIdx,
              needleIdx: d.needleIdx + 1 + v,
              dist: d.dist + v
            });
            break;
          }
        a + 1 < r && d.needleIdx + 1 < l && o.push({
          startIdx: d.startIdx,
          needleIdx: d.needleIdx + 1,
          dist: d.dist + 1
        });
      }
  }
  for (const a of o)
    a.dist += e.length - a.needleIdx, a.dist <= n && (yield {
      start: a.startIdx,
      end: t.length,
      dist: a.dist
    });
}
var Wa = {
  _expand: Qe,
  editDistance: Pa,
  fuzzySearch: Va,
  fuzzySearchNgrams: Mt,
  fuzzySearchCandidates: Ct,
  isEditDistanceNoGreaterThan: Ra
};
const { editDistance: Ua, fuzzySearch: La, isEditDistanceNoGreaterThan: Ba } = Wa;
var Ha = {
  editDistance: Ua,
  fuzzySearch: La,
  isEditDistanceNoGreaterThan: Ba
};
const Ga = "zoa__multiselect__input", ja = "zoa__multiselect__inputWrapper", Fa = "zoa__multiselect__options", Ya = "zoa__multiselect__optlist", Ka = "zoa__multiselect__listItem", Za = "zoa__multiselect__option", Xa = "zoa__multiselect__selectAll", qa = "zoa__multiselect__subgroup", Ja = "zoa__multiselect__noOptions", Qa = "zoa__multiselect__textboxWrapper", eo = "zoa__multiselect__arrow", to = {
  input: Ga,
  inputWrapper: ja,
  options: Fa,
  optlist: Ya,
  listItem: Ka,
  option: Za,
  selectAll: Xa,
  subgroup: qa,
  noOptions: Ja,
  textboxWrapper: Qa,
  arrow: eo
}, lo = ["aria-labelledby", "aria-describedby"], no = ["placeholder", "id"], ao = ["title"], oo = ["onClick"], ro = { key: 1 }, Ze = 10, uo = {
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
    const l = e, r = V("inputId"), u = V("subId"), i = V("labelId"), o = V("helpId"), { value: a } = ie(n, l);
    Array.isArray(a) || (a.value = []);
    const c = A(null), p = qe((b) => {
      n("search", b);
    }, l.searchDelay), d = qe((b) => {
      c.value = b;
    }, l.searchDelay), v = I({
      get() {
        return c.value;
      },
      set(b) {
        d(b), p(b);
      }
    }), y = I(() => (a.value ? a.value.length !== 1 : !0) ? l.itemNamePlural || l.itemName + "s" : l.itemName), $ = I(() => {
      let b = [];
      return l.options.forEach((O) => {
        typeof O == "object" ? b.push({
          label: O.label || O.value,
          value: O.value || O.label,
          group: O.group || null,
          order: O.order == null ? null : O.order
        }) : b.push({ label: O, value: O, group: null });
      }), b.sort((O, N) => {
        let W;
        O.group === N.group ? W = 0 : !O.group || !N.group ? W = O.group ? 1 : -1 : W = O.group.localeCompare(N.group);
        let K = 0;
        (O.order != null || N.order != null) && (K = O.order != null && N.order != null ? O.order - N.order : O.order != null ? -1 : 1);
        let Re = O.label.localeCompare(N.label);
        return W !== 0 ? W : K !== 0 ? K : Re;
      }), b;
    }), x = I(() => {
      const b = l.enableSearch && v.value, O = b ? v.value.toLowerCase() : null, N = (H) => H ? [...Ha.fuzzySearch(O, H.toLowerCase(), 1)].length > 0 : !1;
      let W;
      b ? W = $.value.filter((H) => N(H.group) || N(H.label) || N(H.value)) : W = $.value;
      let K = [], Re = Object.entries(
        Object.groupBy(W, ({ group: H }) => H)
      ), Ne = O ? 2 : 1;
      return Re.forEach((H) => {
        let L = H[0], fe = H[1];
        L && L !== "null" && (K.push({
          ix: Ne,
          kind: "group",
          label: L,
          value: L,
          group: L
        }), Ne += 1), K = K.concat(
          fe.map((xe, et) => ({
            ix: Ne + et,
            kind: "option",
            label: xe.label,
            value: xe.value,
            group: xe.group
          }))
        ), Ne += fe.length;
      }), K;
    }), E = A(null), f = A(null), m = A(null);
    t({
      target: f
    });
    const { y: C } = Tl(m), z = I(() => !m.value || m.value && C.value !== m.value.scrollTop ? 0 : C.value), U = I(() => {
      try {
        return m.value.clientHeight;
      } catch {
        return 500;
      }
    }), D = I(() => x.value.length < Ze * 2 ? 0 : Math.floor(z.value / l.itemHeight) - Ze), g = I(() => x.value.length < Ze * 2 ? x.value.length + Ze : Math.ceil((z.value + U.value) / l.itemHeight)), R = A(!1), B = De(f), ae = $e(m);
    function ee() {
      R.value = !0, setTimeout(() => {
        f.value.focus();
      }, 50);
    }
    function be() {
      try {
        E.value.blur(), f.value.blur(), m.value.blur();
      } catch {
      }
      R.value = !1;
    }
    function te() {
      R.value ? be() : ee();
    }
    zt(E, () => {
      be();
    }), Z("ArrowDown", () => {
      if ($.value.length !== 0) {
        if (B.focused.value)
          m.value.children[0].children[0].children[0].focus();
        else if (ae.focused.value) {
          const b = [...m.value.querySelectorAll("label")], O = m.value.querySelector("label:focus");
          if (!O)
            b[0].focus();
          else {
            const N = b.findIndex((W) => W === O);
            N === b.length - 1 ? b[0].focus() : b[N + 1].focus();
          }
        }
      }
    }), Z("ArrowUp", () => {
      if ($.value.length !== 0 && ae.focused.value) {
        const b = [...m.value.querySelectorAll("label")], O = m.value.querySelector("label:focus");
        if (!O)
          f.value.focus();
        else {
          const N = b.findIndex((W) => W === O);
          N === 0 ? f.value.focus() : b[N - 1].focus();
        }
      }
    }), Z("Enter", () => {
      be();
    });
    const q = I({
      get() {
        const b = $.value;
        return a.value == null || a.value.length !== b.length ? !1 : b.filter((N) => !a.value.includes(N.value)).length === 0;
      },
      set(b) {
        b ? a.value = $.value.map((O) => O.value) : a.value = [];
      }
    }), le = I({
      get() {
        let b = x.value.filter((N) => N.kind === "option").map((N) => N.value);
        return a.value == null || a.value.length < b.length ? !1 : b.filter((N) => !a.value.includes(N)).length === 0;
      },
      set(b) {
        let O = x.value.filter((K) => K.kind === "option").map((K) => K.value);
        const N = a.value ? a.value : [], W = O.filter((K) => !N.includes(K));
        b ? a.value = N.concat(W) : a.value = N.filter((K) => !O.includes(K));
      }
    });
    function Ce(b) {
      const O = x.value.filter((W) => W.kind === "option" && W.group === b).map((W) => W.value);
      a.value = a.value ? a.value : [];
      const N = O.filter((W) => !a.value.includes(W));
      N.length > 0 ? N.forEach((W) => {
        a.value.push(W);
      }) : a.value = a.value.filter((W) => !O.includes(W));
    }
    return (b, O) => (T(), w("div", {
      class: h(b.$style.inputWrapper),
      ref_key: "container",
      ref: E,
      "aria-labelledby": _(i),
      "aria-describedby": _(o)
    }, [
      M("div", {
        class: h(b.$style.textboxWrapper)
      }, [
        pe(M("input", {
          type: "text",
          placeholder: e.placeholder,
          id: _(r),
          class: h(b.$style.input),
          "onUpdate:modelValue": O[0] || (O[0] = (N) => v.value = N),
          ref_key: "textbox",
          ref: f
        }, null, 10, no), [
          [We, v.value],
          [nt, R.value]
        ]),
        pe(M("div", {
          class: h(b.$style.input),
          tabindex: "0",
          onFocusin: ee
        }, G(_(a) ? _(a).length : 0) + " " + G(y.value) + " selected ", 35), [
          [nt, !R.value]
        ]),
        F(_(Me), {
          icon: "fa-solid fa-caret-down",
          class: h(b.$style.arrow),
          onClick: te
        }, null, 8, ["class"])
      ], 2),
      R.value ? (T(), w("div", {
        key: 0,
        class: h(b.$style.options),
        ref_key: "dropdown",
        ref: m
      }, [
        $.value.length > 0 ? (T(), w("ul", {
          key: 0,
          class: h(b.$style.optlist)
        }, [
          M("li", {
            title: "Select all",
            class: h([b.$style.selectAll, b.$style.listItem, b.$style.option]),
            style: je({ height: `${e.itemHeight}px` })
          }, [
            F(_(se), {
              "zoa-type": "checkbox",
              label: "Select all",
              "label-position": "right",
              modelValue: q.value,
              "onUpdate:modelValue": O[1] || (O[1] = (N) => q.value = N)
            }, null, 8, ["modelValue"])
          ], 6),
          c.value ? (T(), w("li", {
            key: 0,
            title: "Select results",
            class: h([b.$style.selectAll, b.$style.listItem, b.$style.option]),
            style: je({ height: `${e.itemHeight}px` })
          }, [
            F(_(se), {
              "zoa-type": "checkbox",
              label: "Select results",
              "label-position": "right",
              modelValue: le.value,
              "onUpdate:modelValue": O[2] || (O[2] = (N) => le.value = N)
            }, null, 8, ["modelValue"])
          ], 6)) : ke("", !0),
          (T(!0), w(ge, null, Oe(x.value, (N) => (T(), w("li", {
            title: N.label,
            class: h([
              b.$style.listItem,
              N.kind === "group" ? b.$style.subgroup : b.$style.option
            ]),
            style: je({ height: `${e.itemHeight}px` })
          }, [
            N.kind === "group" ? (T(), w("div", {
              key: 0,
              onClick: (W) => Ce(N.group)
            }, G(N.label), 9, oo)) : (T(), w("div", ro, [
              N.ix >= D.value && N.ix <= g.value ? (T(), we(_(se), {
                key: 0,
                "zoa-type": "checkbox",
                label: N.label,
                "label-position": "right",
                options: { checkValue: N.value, name: _(u)("checkboxes") },
                modelValue: _(a),
                "onUpdate:modelValue": O[3] || (O[3] = (W) => ye(a) ? a.value = W : null)
              }, null, 8, ["label", "options", "modelValue"])) : ke("", !0)
            ]))
          ], 14, ao))), 256))
        ], 2)) : (T(), w("div", {
          key: 1,
          class: h(b.$style.noOptions)
        }, "No options found", 2))
      ], 2)) : ke("", !0)
    ], 10, lo));
  }
}, so = {
  $style: to
}, io = /* @__PURE__ */ X(uo, [["__cssModules", so]]), co = "zoa__number__input", po = "zoa__number__inputWrapper", fo = {
  input: co,
  inputWrapper: po
}, mo = ["aria-labelledby", "aria-describedby"], vo = ["placeholder", "min", "max", "step", "id"], _o = {
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
    const l = e, r = V("inputId"), u = V("labelId"), i = V("helpId"), { value: o } = ie(n, l), a = A(null);
    return t({
      target: a
    }), (c, p) => (T(), w("div", {
      class: h(c.$style.inputWrapper),
      "aria-labelledby": _(u),
      "aria-describedby": _(i)
    }, [
      pe(M("input", {
        type: "number",
        placeholder: e.placeholder,
        min: e.min,
        max: e.max,
        step: e.step,
        id: _(r),
        class: h(c.$style.input),
        "onUpdate:modelValue": p[0] || (p[0] = (d) => ye(o) ? o.value = d : null),
        ref_key: "target",
        ref: a
      }, null, 10, vo), [
        [We, _(o)]
      ])
    ], 10, mo));
  }
}, yo = {
  $style: fo
}, bo = /* @__PURE__ */ X(_o, [["__cssModules", yo]]), ho = "zoa__rangeslider__input", go = "zoa__rangeslider__inputWrapper", $o = {
  input: ho,
  inputWrapper: go
}, Io = ["aria-labelledby", "aria-describedby"], ko = {
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
    V("inputId");
    const r = V("labelId"), u = V("helpId"), { valueChanged: i } = ie(n, l), o = A(null), a = A(null), c = I(() => {
      if (o.value)
        return o.value.target;
    }), p = I(() => o.value && a.value ? [o.value.target, a.value.target] : []);
    t({
      target: c,
      elements: p
    });
    const d = A(null), v = A(null), y = I(() => Math.max(
      Number(v.value) - Number(l.step),
      Number(l.min)
    )), $ = I(() => Math.min(
      Number(d.value) + Number(l.step),
      Number(l.max)
    )), x = I(() => {
      const E = Math.min(d.value, y.value), f = Math.max(v.value, $.value);
      return [E, f];
    });
    return ze(x, () => {
      i(x.value);
    }), (E, f) => (T(), w("div", {
      class: h(E.$style.inputWrapper),
      "aria-labelledby": _(r),
      "aria-describedby": _(u)
    }, [
      F(_(se), {
        "zoa-type": "slider",
        label: e.labelLower,
        "label-position": e.labelsRight ? "right" : "left",
        options: {
          min: e.min,
          max: e.max,
          step: e.step,
          validMax: y.value,
          valueLabelPosition: "above",
          placeholderPosition: 0.25
        },
        modelValue: d.value,
        "onUpdate:modelValue": f[0] || (f[0] = (m) => d.value = m),
        ref: "lowerTrack"
      }, null, 8, ["label", "label-position", "options", "modelValue"]),
      F(_(se), {
        "zoa-type": "slider",
        label: e.labelUpper,
        "label-position": e.labelsRight ? "right" : "left",
        options: {
          min: e.min,
          max: e.max,
          step: e.step,
          validMin: $.value,
          placeholderPosition: 0.75,
          activeTrackRight: !0
        },
        modelValue: v.value,
        "onUpdate:modelValue": f[1] || (f[1] = (m) => v.value = m),
        ref: "upperTrack"
      }, null, 8, ["label", "label-position", "options", "modelValue"])
    ], 10, Io));
  }
}, So = {
  $style: $o
}, xo = /* @__PURE__ */ X(ko, [["__cssModules", So]]), Eo = "zoa__slider__input", Oo = "zoa__slider__inputWrapper", To = "zoa__slider__track", zo = "zoa__slider__valueLabel", No = {
  input: Eo,
  inputWrapper: Oo,
  track: To,
  "track--active": "zoa__slider__track--active",
  valueLabel: zo,
  "valueLabel--below": "zoa__slider__valueLabel--below",
  "valueLabel--above": "zoa__slider__valueLabel--above"
}, Ao = ["aria-labelledby", "aria-describedby"], wo = ["min", "max", "step", "id"], Mo = {
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
    const l = e, r = V("inputId"), u = V("labelId"), i = V("helpId"), { value: o } = ie(n, l), a = A(null), c = A(null);
    t({
      target: a
    });
    const p = I(() => l.validMin ? Math.max(Number(l.validMin), Number(l.min)) : Number(l.min)), d = I(() => l.validMax ? Math.min(Number(l.validMax), Number(l.max)) : Number(l.max)), v = $e(a), y = De(c), $ = I(() => o.value < p.value ? p.value : o.value > d.value ? d.value : o.value), x = I(() => l.activeTrackRight ? { left: `${f.value.handle}%` } : { right: `${100 - f.value.handle}%` }), E = I(() => (o.value - l.min) / (l.max - l.min)), f = I(() => m());
    function m() {
      try {
        const g = a.value.clientWidth, R = 24;
        c.value && (c.value.innerText = $.value);
        const B = c.value ? c.value.clientWidth : 0, ae = g / 2, te = (E.value * g - ae) / ae * (R / 2), q = te + B / 2, le = te / g;
        return {
          handle: ((E.value - le) * 100).toFixed(2),
          label: ((E.value - q / g) * 100).toFixed(2)
        };
      } catch {
        const g = E.value * 100;
        return { handle: g.toFixed(2), label: g.toFixed(2) };
      }
    }
    function C() {
      if (l.placeholder !== null && l.placeholder !== void 0)
        return l.placeholder;
      let R = (l.max - l.min) / (1 / l.placeholderPosition), B = R % l.step;
      return R - B + l.min;
    }
    function z() {
      if (o.value === l.max)
        return;
      let g = Number(o.value) + Number(l.step);
      g > l.max ? o.value = l.max : o.value = g;
    }
    function U() {
      if (o.value === l.min)
        return;
      let g = Number(o.value) - Number(l.step);
      g < l.min ? o.value = l.min : o.value = g;
    }
    function D(g) {
      g.preventDefault(), g.wheelDelta > 0 ? z() : g.wheelDelta < 0 && U();
    }
    return Z("ArrowDown", (g) => {
      g.preventDefault(), (v.focused.value || y.focused.value) && U();
    }), Z("ArrowLeft", (g) => {
      g.preventDefault(), (v.focused.value || y.focused.value) && U();
    }), Z("ArrowUp", (g) => {
      g.preventDefault(), (v.focused.value || y.focused.value) && z();
    }), Z("ArrowRight", (g) => {
      g.preventDefault(), (v.focused.value || y.focused.value) && z();
    }), ze(o, (g) => {
      Number(g) >= Number(d.value) && (o.value = d.value), Number(g) <= Number(p.value) && (o.value = p.value);
    }), o.value = C(), (g, R) => (T(), w("div", {
      class: h(g.$style.inputWrapper),
      onWheel: D,
      "aria-labelledby": _(u),
      "aria-describedby": _(i)
    }, [
      M("span", {
        class: h(g.$style.track)
      }, null, 2),
      M("span", {
        class: h([g.$style.track, g.$style["track--active"]]),
        style: je(x.value)
      }, null, 6),
      M("span", {
        class: h([g.$style.valueLabel, g.$style[`valueLabel--${e.valueLabelPosition}`]]),
        style: je({ left: `${f.value.label}%` }),
        ref_key: "valueLabel",
        ref: c,
        tabindex: "0"
      }, G($.value), 7),
      pe(M("input", {
        type: "range",
        min: e.min,
        max: e.max,
        step: e.step,
        id: _(r),
        class: h(g.$style.input),
        "onUpdate:modelValue": R[0] || (R[0] = (B) => ye(o) ? o.value = B : null),
        ref_key: "slider",
        ref: a
      }, null, 10, wo), [
        [We, _(o)]
      ])
    ], 42, Ao));
  }
}, Co = {
  $style: No
}, Ro = /* @__PURE__ */ X(Mo, [["__cssModules", Co]]), Po = "zoa__textbox__input", Do = "zoa__textbox__inputWrapper", Vo = {
  input: Po,
  inputWrapper: Do
}, Wo = ["aria-labelledby", "aria-describedby"], Uo = ["placeholder", "id"], Lo = {
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
    const l = e, r = V("inputId"), u = V("labelId"), i = V("helpId"), { value: o } = ie(n, l), a = A(null);
    return t({
      target: a
    }), (c, p) => (T(), w("div", {
      class: h(c.$style.inputWrapper),
      "aria-labelledby": _(u),
      "aria-describedby": _(i)
    }, [
      pe(M("input", {
        type: "text",
        placeholder: e.placeholder,
        id: _(r),
        class: h(c.$style.input),
        "onUpdate:modelValue": p[0] || (p[0] = (d) => ye(o) ? o.value = d : null),
        ref_key: "target",
        ref: a
      }, null, 10, Uo), [
        [We, _(o)]
      ])
    ], 10, Wo));
  }
}, Bo = {
  $style: Vo
}, Ho = /* @__PURE__ */ X(Lo, [["__cssModules", Bo]]), kt = {
  checkbox: {
    component: jn,
    multi: !1,
    delay: 0,
    tabLabel: !0
  },
  "date-ambiguous": {
    component: pa,
    multi: !1,
    delay: 200
  },
  "date-simple": {
    component: ga,
    multi: !1,
    delay: 200
  },
  dropdown: {
    component: Aa,
    multi: !1,
    delay: 0
  },
  multiselect: {
    component: io,
    multi: !1,
    delay: 0
  },
  empty: {
    component: null,
    multi: !0
  },
  number: {
    component: bo,
    multi: !1,
    delay: 200
  },
  "range-slider": {
    component: xo,
    multi: !0,
    delay: 200
  },
  slider: {
    component: Ro,
    multi: !1,
    delay: 200,
    wrapperProps: ["valueLabelPosition"]
  },
  "autocomplete-textbox": {
    component: Cn,
    multi: !1,
    delay: 200
  },
  textbox: {
    component: Ho,
    multi: !1,
    delay: 200
  }
}, Go = "zoa__input__input", jo = "zoa__input__inputWrapper", Fo = "zoa__input__rootWrapper", Yo = "zoa__input__checkbox", Ko = "zoa__input__slider", Zo = "zoa__input__emptyGrid", Xo = "zoa__input__fieldset", qo = {
  input: Go,
  inputWrapper: jo,
  rootWrapper: Fo,
  "rootWrapper--above": "zoa__input__rootWrapper--above",
  "rootWrapper--help": "zoa__input__rootWrapper--help",
  "rootWrapper--below": "zoa__input__rootWrapper--below",
  "rootWrapper--left": "zoa__input__rootWrapper--left",
  "rootWrapper--right": "zoa__input__rootWrapper--right",
  "rootWrapper--none": "zoa__input__rootWrapper--none",
  checkbox: Yo,
  slider: Ko,
  "rootWrapper-valueLabelPosition--below": "zoa__input__rootWrapper-valueLabelPosition--below",
  "rootWrapper-valueLabelPosition--above": "zoa__input__rootWrapper-valueLabelPosition--above",
  "range-slider": "zoa__input__range-slider",
  emptyGrid: Zo,
  fieldset: Xo
}, Jo = ["id"], Qo = {
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
    const l = e, r = I(() => {
      let g = kt[l.zoaType];
      return g == null && (g = kt.empty), g;
    }), u = I(() => r.value.component), { componentId: i, subId: o } = st(), a = o("input"), c = o("label"), p = o("help"), d = I(() => {
      let g = [
        "rootWrapper",
        `rootWrapper--${l.labelPosition}`,
        l.zoaType
      ];
      return l.help && g.push("rootWrapper--help"), r.value.wrapperProps && r.value.wrapperProps.forEach((R) => {
        l.options[R] != null && g.push(`rootWrapper-${R}--${l.options[R]}`);
      }), g;
    }), { addPropClasses: v } = Ue(l), { value: y } = ie(n, l), $ = A(null), x = I(() => l.label), E = I(() => l.labelPosition), f = I(() => l.help ? p : null);
    Ee("label", x), Ee("labelPosition", E), Ee("componentId", i), Ee("subId", o), Ee("inputId", a), Ee("labelId", c), Ee("helpId", f), Ee("rootContainer", $);
    const m = A(null);
    function C() {
      m.value && m.value.target.focus();
    }
    function z() {
      m.value && m.value.target.blur();
    }
    const U = I(() => {
      if (m.value)
        return m.value.target;
    }), D = I(() => m.value && m.value.elements ? m.value.elements : {});
    return t({
      focus: C,
      blur: z,
      target: U,
      elements: D
    }), (g, R) => (T(), w("div", {
      id: _(i),
      ref_key: "rootContainer",
      ref: $,
      class: h(_(v)(d.value.map((B) => g.$style[B])))
    }, [
      r.value.multi ? (T(), w("fieldset", {
        key: 0,
        class: h(g.$style.fieldset)
      }, [
        F(yt, {
          "input-id": _(a),
          legend: !0,
          label: e.label,
          "label-position": e.labelPosition,
          tabbable: r.value.tabLabel
        }, null, 8, ["input-id", "label", "label-position", "tabbable"]),
        e.help ? (T(), we(gt, {
          key: 0,
          text: e.help,
          position: e.helpPosition
        }, null, 8, ["text", "position"])) : ke("", !0),
        u.value == null ? (T(), w("div", {
          key: 1,
          class: h([e.gridClass || g.$style.emptyGrid, g.$style.inputWrapper])
        }, [
          Ve(g.$slots, "default")
        ], 2)) : (T(), we(_(u), at({ key: 2 }, e.options, {
          modelValue: _(y),
          "onUpdate:modelValue": R[0] || (R[0] = (B) => ye(y) ? y.value = B : null),
          ref_key: "inputComponent",
          ref: m
        }), null, 16, ["modelValue"]))
      ], 2)) : (T(), w(ge, { key: 1 }, [
        F(yt, {
          "input-id": _(a),
          legend: !1,
          label: e.label,
          "label-position": e.labelPosition,
          tabbable: r.value.tabLabel,
          help: e.help
        }, null, 8, ["input-id", "label", "label-position", "tabbable", "help"]),
        e.help ? (T(), we(gt, {
          key: 0,
          text: e.help,
          position: e.helpPosition
        }, null, 8, ["text", "position"])) : ke("", !0),
        F(_(u), at(e.options, {
          modelValue: _(y),
          "onUpdate:modelValue": R[1] || (R[1] = (B) => ye(y) ? y.value = B : null),
          ref_key: "inputComponent",
          ref: m
        }), null, 16, ["modelValue"])
      ], 64))
    ], 10, Jo));
  }
}, er = {
  $style: qo
}, se = /* @__PURE__ */ X(Qo, [["__cssModules", er]]);
function Rt(e) {
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
const tr = "zoa__flash__main", lr = "zoa__flash__container", nr = "zoa__flash__header", ar = "zoa__flash__icon", or = {
  main: tr,
  container: lr,
  header: nr,
  icon: ar,
  "kind--info": "zoa__flash__kind--info",
  "kind--warning": "zoa__flash__kind--warning",
  "kind--error": "zoa__flash__kind--error",
  "kind--success": "zoa__flash__kind--success"
}, rr = {
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
    const t = e, { icon: n } = Rt(t), { addPropClasses: l } = Ue(t);
    return (r, u) => (T(), w("div", {
      class: h(
        _(l)([r.$style.main, r.$style.container, r.$style[`kind--${e.kind}`]])
      )
    }, [
      M("div", {
        class: h(r.$style.header)
      }, [
        F(_(Me), {
          icon: ["fa-solid", _(n)],
          class: h(r.$style.icon)
        }, null, 8, ["icon", "class"]),
        M("h2", null, G(e.header), 1)
      ], 2),
      M("div", {
        class: h(r.$style.content)
      }, [
        Ve(r.$slots, "default", {}, () => [
          Te(G(e.message), 1)
        ])
      ], 2)
    ], 2));
  }
}, ur = {
  $style: or
}, sr = /* @__PURE__ */ X(rr, [["__cssModules", ur]]), ir = "zoa__modal__main", cr = "zoa__modal__container", dr = "zoa__modal__header", pr = "zoa__modal__icon", fr = "zoa__modal__form", mr = "zoa__modal__close", vr = "zoa__modal__content", _r = {
  main: ir,
  container: cr,
  header: dr,
  icon: pr,
  "kind--info": "zoa__modal__kind--info",
  "kind--warning": "zoa__modal__kind--warning",
  "kind--error": "zoa__modal__kind--error",
  "kind--success": "zoa__modal__kind--success",
  form: fr,
  close: mr,
  content: vr
}, yr = {
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
    const n = e, { icon: l } = Rt(n), { addPropClasses: r } = Ue(n), u = A(null);
    function i() {
      u.value.show(), t("opened");
    }
    return (o, a) => (T(), w(ge, null, [
      F(_(Fe), at(e.buttonArgs, { onClick: i }), null, 16),
      M("dialog", {
        ref_key: "modal",
        ref: u,
        class: h(_(r)([o.$style.main, o.$style[`kind--${e.kind}`]]))
      }, [
        M("div", {
          class: h(o.$style.container)
        }, [
          M("form", {
            method: "dialog",
            class: h(o.$style.form),
            onSubmit: a[0] || (a[0] = (c) => t("closed"))
          }, [
            M("button", {
              class: h(o.$style.close)
            }, [
              F(_(Me), { icon: "fa-solid fa-xmark" })
            ], 2)
          ], 34),
          M("div", {
            class: h(o.$style.header)
          }, [
            F(_(Me), {
              icon: ["fa-solid", _(l)],
              class: h(o.$style.icon)
            }, null, 8, ["icon", "class"]),
            M("h2", null, G(e.header), 1)
          ], 2),
          M("div", {
            class: h(o.$style.content)
          }, [
            Ve(o.$slots, "default", {}, () => [
              Te(G(e.message), 1)
            ])
          ], 2)
        ], 2)
      ], 2)
    ], 64));
  }
}, br = {
  $style: _r
}, hr = /* @__PURE__ */ X(yr, [["__cssModules", br]]), gr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ZoaButton: Fe,
  ZoaFlash: sr,
  ZoaInput: se,
  ZoaModal: hr,
  ZoaTabs: Yl,
  ZoaToggleButton: Vl
}, Symbol.toStringTag, { value: "Module" })), $r = new RegExp("[A-Z]+(?![a-z])|[A-Z]", "g");
function Ir(e) {
  return e.replace($r, (t, n) => (n ? "-" : "") + t.toLowerCase());
}
const Er = {
  install(e, t) {
    Object.entries(gr).forEach((n) => {
      const l = Ir(n[0]);
      e.component(l, n[1]);
    });
  }
};
export {
  sr as F,
  hr as M,
  Vl as T,
  Er as Z,
  Fe as a,
  Yl as b,
  se as c,
  $t as d,
  Fn as g
};
