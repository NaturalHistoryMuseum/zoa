import { openBlock as N, createElementBlock as w, normalizeClass as g, unref as y, renderSlot as Ve, createTextVNode as Oe, toDisplayString as F, ref as A, computed as $, watch as Te, customRef as Ht, getCurrentScope as Gt, onScopeDispose as jt, reactive as pt, withDirectives as ye, createElementVNode as C, isRef as he, vModelCheckbox as kt, isProxy as Ft, toRaw as Yt, inject as D, createCommentVNode as ke, defineComponent as ut, h as St, createVNode as j, vShow as nt, vModelText as We, Fragment as Ie, renderList as ze, watchEffect as Kt, withKeys as Zt, withCtx as Ke, createBlock as we, vModelSelect as Xt, normalizeStyle as Ge, provide as Ee, mergeProps as at } from "vue";
import { parse as Xe, icon as qt, config as xt, text as Jt, library as Qt } from "@fortawesome/fontawesome-svg-core";
import { faCircleXmark as el, faXmark as tl, faCircleInfo as ll, faCircleExclamation as nl, faCircleCheck as al, faCircleQuestion as ol, faCheck as rl, faCaretDown as ul } from "@fortawesome/free-solid-svg-icons";
function Ye(e) {
  function t(n) {
    return n = n || [], e.class && Array.isArray(e.class) ? n = n.concat(e.class) : e.class && n.push(e.class), n;
  }
  return { addPropClasses: t };
}
const sl = "zoa__button__main", il = "zoa__button__checkbox", cl = {
  main: sl,
  "kind--normal": "zoa__button__kind--normal",
  checkbox: il,
  "kind--primary": "zoa__button__kind--primary",
  "kind--alt": "zoa__button__kind--alt",
  "size--sm": "zoa__button__size--sm",
  "size--md": "zoa__button__size--md"
}, J = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, o] of t)
    n[l] = o;
  return n;
}, dl = {
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
    const t = e, { addPropClasses: n } = Ye(t);
    return (l, o) => (N(), w("button", {
      class: g(
        y(n)([
          l.$style.main,
          l.$style[`kind--${e.kind}`],
          l.$style[`size--${e.size}`]
        ])
      )
    }, [
      Ve(l.$slots, "default", {}, () => [
        Oe(F(e.label), 1)
      ])
    ], 2));
  }
}, pl = {
  $style: cl
}, je = /* @__PURE__ */ J(dl, [["__cssModules", pl]]);
let fl = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
function Et() {
  const e = A(fl(6));
  function t(n) {
    return `${e.value}__${n}`;
  }
  return { componentId: e, subId: t };
}
const { now: ft } = Date, qe = (e, t = 1, n) => {
  t = Math.max(1, t);
  const l = (n == null ? void 0 : n.leading) ?? !1, o = (n == null ? void 0 : n.trailing) ?? !0, u = Math.max((n == null ? void 0 : n.maxWait) ?? 1 / 0, t);
  let i, r, a = 0, c = 0;
  const p = () => {
    const z = ft(), U = z - a, P = z - c, h = U >= t || P >= u;
    return [z, h];
  }, d = (z) => {
    if (c = z, !i)
      return;
    const U = i;
    i = void 0, e.apply(void 0, U);
  }, m = () => {
    v(0);
  }, _ = () => {
    r && (m(), d(ft()));
  }, I = (z) => {
    if (c = z, l)
      return d(z);
  }, x = (z) => {
    if (o && i)
      return d(z);
    i = void 0;
  }, E = () => {
    r = void 0;
    const [z, U] = p();
    return U ? x(z) : f(z);
  }, f = (z) => {
    const U = z - a, P = z - c, h = t - U, M = u - P, B = Math.min(h, M);
    return v(B);
  }, v = (z) => {
    r && clearTimeout(r), !(z <= 0) && (r = setTimeout(E, z));
  }, V = (...z) => {
    const [U, P] = p(), h = !!r;
    if (i = z, a = U, (P || !r) && v(t), P)
      return h ? d(U) : I(U);
  };
  return V.cancel = m, V.flush = _, V;
};
function de(e, t) {
  let n;
  try {
    n = parseInt(t.delay) || 0;
  } catch {
    n = 0;
  }
  const l = A(null);
  function o(a) {
    e("change", a);
  }
  const u = qe(o, n);
  function i(a) {
    e("update:modelValue", a), l.value = a, u(a);
  }
  const r = $({
    get() {
      return t.modelValue === void 0 ? l.value : t.modelValue;
    },
    set(a) {
      i(a);
    }
  });
  return { emitChange: u, valueChanged: i, value: r };
}
function ml(e, t) {
  let n, l, o;
  const u = A(!0), i = () => {
    u.value = !0, o();
  };
  Te(e, i, { flush: "sync" });
  const r = typeof t == "function" ? t : t.get, a = typeof t == "function" ? void 0 : t.set, c = Ht((p, d) => (l = p, o = d, {
    get() {
      return u.value && (n = r(), u.value = !1), l(), n;
    },
    set(m) {
      a == null || a(m);
    }
  }));
  return Object.isExtensible(c) && (c.trigger = i), c;
}
function vl(e) {
  return Gt() ? (jt(e), !0) : !1;
}
function me(e) {
  return typeof e == "function" ? e() : y(e);
}
const Ot = typeof window < "u" && typeof document < "u", yl = Object.prototype.toString, _l = (e) => yl.call(e) === "[object Object]", Se = () => {
}, bl = /* @__PURE__ */ hl();
function hl() {
  var e;
  return Ot && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function Tt(e, t) {
  function n(...l) {
    return new Promise((o, u) => {
      Promise.resolve(e(() => t.apply(this, l), { fn: t, thisArg: this, args: l })).then(o).catch(u);
    });
  }
  return n;
}
function gl(e, t = {}) {
  let n, l, o = Se;
  const u = (r) => {
    clearTimeout(r), o(), o = Se;
  };
  return (r) => {
    const a = me(e), c = me(t.maxWait);
    return n && u(n), a <= 0 || c !== void 0 && c <= 0 ? (l && (u(l), l = null), Promise.resolve(r())) : new Promise((p, d) => {
      o = t.rejectOnCancel ? d : p, c && !l && (l = setTimeout(() => {
        n && u(n), l = null, p(r());
      }, c)), n = setTimeout(() => {
        l && u(l), l = null, p(r());
      }, a);
    });
  };
}
function Il(e, t = !0, n = !0, l = !1) {
  let o = 0, u, i = !0, r = Se, a;
  const c = () => {
    u && (clearTimeout(u), u = void 0, r(), r = Se);
  };
  return (d) => {
    const m = me(e), _ = Date.now() - o, I = () => a = d();
    return c(), m <= 0 ? (o = Date.now(), I()) : (_ > m && (n || !i) ? (o = Date.now(), I()) : t && (a = new Promise((x, E) => {
      r = l ? E : x, u = setTimeout(() => {
        o = Date.now(), i = !0, x(I()), c();
      }, Math.max(0, m - _));
    })), !n && !u && (u = setTimeout(() => i = !0, m)), i = !1, a);
  };
}
function $l(e, t = 200, n = {}) {
  return Tt(
    gl(t, n),
    e
  );
}
function kl(e, t = 200, n = !1, l = !0, o = !1) {
  return Tt(
    Il(t, n, l, o),
    e
  );
}
function Ae(e) {
  var t;
  const n = me(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Ue = Ot ? window : void 0;
function ce(...e) {
  let t, n, l, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, l, o] = e, t = Ue) : [t, n, l, o] = e, !t)
    return Se;
  Array.isArray(n) || (n = [n]), Array.isArray(l) || (l = [l]);
  const u = [], i = () => {
    u.forEach((p) => p()), u.length = 0;
  }, r = (p, d, m, _) => (p.addEventListener(d, m, _), () => p.removeEventListener(d, m, _)), a = Te(
    () => [Ae(t), me(o)],
    ([p, d]) => {
      if (i(), !p)
        return;
      const m = _l(d) ? { ...d } : d;
      u.push(
        ...n.flatMap((_) => l.map((I) => r(p, _, I, m)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    a(), i();
  };
  return vl(c), c;
}
let mt = !1;
function Nt(e, t, n = {}) {
  const { window: l = Ue, ignore: o = [], capture: u = !0, detectIframe: i = !1 } = n;
  if (!l)
    return;
  bl && !mt && (mt = !0, Array.from(l.document.body.children).forEach((m) => m.addEventListener("click", Se)), l.document.documentElement.addEventListener("click", Se));
  let r = !0;
  const a = (m) => o.some((_) => {
    if (typeof _ == "string")
      return Array.from(l.document.querySelectorAll(_)).some((I) => I === m.target || m.composedPath().includes(I));
    {
      const I = Ae(_);
      return I && (m.target === I || m.composedPath().includes(I));
    }
  }), p = [
    ce(l, "click", (m) => {
      const _ = Ae(e);
      if (!(!_ || _ === m.target || m.composedPath().includes(_))) {
        if (m.detail === 0 && (r = !a(m)), !r) {
          r = !0;
          return;
        }
        t(m);
      }
    }, { passive: !0, capture: u }),
    ce(l, "pointerdown", (m) => {
      const _ = Ae(e);
      _ && (r = !m.composedPath().includes(_) && !a(m));
    }, { passive: !0 }),
    i && ce(l, "blur", (m) => {
      setTimeout(() => {
        var _;
        const I = Ae(e);
        ((_ = l.document.activeElement) == null ? void 0 : _.tagName) === "IFRAME" && !(I != null && I.contains(l.document.activeElement)) && t(m);
      }, 0);
    })
  ].filter(Boolean);
  return () => p.forEach((m) => m());
}
function Sl(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Z(...e) {
  let t, n, l = {};
  e.length === 3 ? (t = e[0], n = e[1], l = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], l = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: o = Ue,
    eventName: u = "keydown",
    passive: i = !1,
    dedupe: r = !1
  } = l, a = Sl(t);
  return ce(o, u, (p) => {
    p.repeat && me(r) || a(p) && n(p);
  }, i);
}
function xl(e = {}) {
  var t;
  const {
    window: n = Ue,
    deep: l = !0
  } = e, o = (t = e.document) != null ? t : n == null ? void 0 : n.document, u = () => {
    var r;
    let a = o == null ? void 0 : o.activeElement;
    if (l)
      for (; a != null && a.shadowRoot; )
        a = (r = a == null ? void 0 : a.shadowRoot) == null ? void 0 : r.activeElement;
    return a;
  }, i = ml(
    () => null,
    () => u()
  );
  return n && (ce(n, "blur", (r) => {
    r.relatedTarget === null && i.trigger();
  }, !0), ce(n, "focus", i.trigger, !0)), i;
}
function El(e, t = {}) {
  const {
    delayEnter: n = 0,
    delayLeave: l = 0,
    window: o = Ue
  } = t, u = A(!1);
  let i;
  const r = (a) => {
    const c = a ? n : l;
    i && (clearTimeout(i), i = void 0), c ? i = setTimeout(() => u.value = a, c) : u.value = a;
  };
  return o && (ce(e, "mouseenter", () => r(!0), { passive: !0 }), ce(e, "mouseleave", () => r(!1), { passive: !0 })), u;
}
function De(e, t = {}) {
  const { initialValue: n = !1, focusVisible: l = !1 } = t, o = A(!1), u = $(() => Ae(e));
  ce(u, "focus", (r) => {
    var a, c;
    (!l || (c = (a = r.target).matches) != null && c.call(a, ":focus-visible")) && (o.value = !0);
  }), ce(u, "blur", () => o.value = !1);
  const i = $({
    get: () => o.value,
    set(r) {
      var a, c;
      !r && o.value ? (a = u.value) == null || a.blur() : r && !o.value && ((c = u.value) == null || c.focus());
    }
  });
  return Te(
    u,
    () => {
      i.value = n;
    },
    { immediate: !0, flush: "post" }
  ), { focused: i };
}
function $e(e, t = {}) {
  const n = xl(t), l = $(() => Ae(e));
  return { focused: $(() => l.value && n.value ? l.value.contains(n.value) : !1) };
}
const vt = 1;
function Ol(e, t = {}) {
  const {
    throttle: n = 0,
    idle: l = 200,
    onStop: o = Se,
    onScroll: u = Se,
    offset: i = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions: r = {
      capture: !1,
      passive: !0
    },
    behavior: a = "auto",
    window: c = Ue
  } = t, p = A(0), d = A(0), m = $({
    get() {
      return p.value;
    },
    set(P) {
      I(P, void 0);
    }
  }), _ = $({
    get() {
      return d.value;
    },
    set(P) {
      I(void 0, P);
    }
  });
  function I(P, h) {
    var M, B, ae;
    if (!c)
      return;
    const ee = me(e);
    ee && ((ae = ee instanceof Document ? c.document.body : ee) == null || ae.scrollTo({
      top: (M = me(h)) != null ? M : _.value,
      left: (B = me(P)) != null ? B : m.value,
      behavior: me(a)
    }));
  }
  const x = A(!1), E = pt({
    left: !0,
    right: !1,
    top: !0,
    bottom: !1
  }), f = pt({
    left: !1,
    right: !1,
    top: !1,
    bottom: !1
  }), v = (P) => {
    x.value && (x.value = !1, f.left = !1, f.right = !1, f.top = !1, f.bottom = !1, o(P));
  }, V = $l(v, n + l), z = (P) => {
    var h;
    if (!c)
      return;
    const M = P.document ? P.document.documentElement : (h = P.documentElement) != null ? h : P, { display: B, flexDirection: ae } = getComputedStyle(M), ee = M.scrollLeft;
    f.left = ee < p.value, f.right = ee > p.value;
    const _e = Math.abs(ee) <= 0 + (i.left || 0), te = Math.abs(ee) + M.clientWidth >= M.scrollWidth - (i.right || 0) - vt;
    B === "flex" && ae === "row-reverse" ? (E.left = te, E.right = _e) : (E.left = _e, E.right = te), p.value = ee;
    let X = M.scrollTop;
    P === c.document && !X && (X = c.document.body.scrollTop), f.top = X < d.value, f.bottom = X > d.value;
    const le = Math.abs(X) <= 0 + (i.top || 0), Re = Math.abs(X) + M.clientHeight >= M.scrollHeight - (i.bottom || 0) - vt;
    B === "flex" && ae === "column-reverse" ? (E.top = Re, E.bottom = le) : (E.top = le, E.bottom = Re), d.value = X;
  }, U = (P) => {
    var h;
    if (!c)
      return;
    const M = (h = P.target.documentElement) != null ? h : P.target;
    z(M), x.value = !0, V(P), u(P);
  };
  return ce(
    e,
    "scroll",
    n ? kl(U, n, !0, !1) : U,
    r
  ), ce(
    e,
    "scrollend",
    v,
    r
  ), {
    x: m,
    y: _,
    isScrolling: x,
    arrivedState: E,
    directions: f,
    measure() {
      const P = me(e);
      c && P && z(P);
    }
  };
}
const Tl = "zoa__togglebutton__input", Nl = "zoa__togglebutton__inputWrapper", zl = "zoa__togglebutton__main", Al = "zoa__togglebutton__checkbox", wl = {
  input: Tl,
  inputWrapper: Nl,
  main: zl,
  "kind--normal": "zoa__togglebutton__kind--normal",
  checkbox: Al,
  "kind--primary": "zoa__togglebutton__kind--primary",
  "kind--alt": "zoa__togglebutton__kind--alt",
  "size--sm": "zoa__togglebutton__size--sm",
  "size--md": "zoa__togglebutton__size--md"
}, Ml = ["id", "for"], Rl = ["id", "name", "value"], Cl = {
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
    const n = e, { componentId: l, subId: o } = Et(), { addPropClasses: u } = Ye(n), { value: i } = de(t, n), r = A(null), a = A(null), c = $e(r), p = $(() => n.checkValue || n.label);
    function d() {
      let m = Ft(i.value) ? Yt(i.value) : i.value;
      if (Array.isArray(m)) {
        let _ = !a.value.checked;
        m = m.filter((I) => I !== p.value), _ && m.push(p.value), i.value = m, a.value.checked = _;
      } else
        i.value = !i.value;
    }
    return Z(" ", () => {
      c.focused.value && d();
    }), Z("Enter", () => {
      c.focused.value && d();
    }), (m, _) => (N(), w("label", {
      id: y(l),
      for: y(o)("toggle"),
      tabindex: "0",
      ref_key: "checkboxContainer",
      ref: r,
      class: g(y(u)([]))
    }, [
      ye(C("input", {
        type: "checkbox",
        id: y(o)("toggle"),
        class: g(m.$style.checkbox),
        "onUpdate:modelValue": _[0] || (_[0] = (I) => he(i) ? i.value = I : null),
        name: e.name,
        value: p.value,
        ref_key: "checkboxInput",
        ref: a
      }, null, 10, Rl), [
        [kt, y(i)]
      ]),
      C("span", {
        class: g([m.$style.main, m.$style[`kind--${e.kind}`], m.$style[`size--${e.size}`]])
      }, [
        Ve(m.$slots, "default", {}, () => [
          Oe(F(e.label), 1)
        ])
      ], 2)
    ], 10, Ml));
  }
}, Pl = {
  $style: wl
}, Dl = /* @__PURE__ */ J(Cl, [["__cssModules", Pl]]), Vl = "zoa__label__main", Wl = {
  main: Vl,
  "main--right": "zoa__label__main--right",
  "main--left": "zoa__label__main--left",
  "main--above": "zoa__label__main--above",
  "main--below": "zoa__label__main--below",
  "main--none": "zoa__label__main--none"
}, Ul = ["id", "for", "tabindex"], Ll = ["id"], Bl = {
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
    const t = D("labelId");
    return (n, l) => e.label && !e.legend ? (N(), w("label", {
      key: 0,
      id: y(t),
      for: e.inputId,
      class: g([n.$style.main, n.$style[`main--${e.labelPosition}`]]),
      tabindex: e.tabbable ? 0 : -1
    }, F(e.label), 11, Ul)) : e.label ? (N(), w("legend", {
      key: 1,
      id: y(t),
      class: g([n.$style.main, n.$style[`main--${e.labelPosition}`]])
    }, F(e.label), 11, Ll)) : ke("", !0);
  }
}, Hl = {
  $style: Wl
}, yt = /* @__PURE__ */ J(Bl, [["__cssModules", Hl]]);
function _t(e, t) {
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
    t % 2 ? _t(Object(n), !0).forEach(function(l) {
      oe(e, l, n[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _t(Object(n)).forEach(function(l) {
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
function Gl(e, t) {
  if (e == null)
    return {};
  var n = {}, l = Object.keys(e), o, u;
  for (u = 0; u < l.length; u++)
    o = l[u], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function jl(e, t) {
  if (e == null)
    return {};
  var n = Gl(e, t), l, o;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    for (o = 0; o < u.length; o++)
      l = u[o], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (n[l] = e[l]);
  }
  return n;
}
function ot(e) {
  return Fl(e) || Yl(e) || Kl(e) || Zl();
}
function Fl(e) {
  if (Array.isArray(e))
    return rt(e);
}
function Yl(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Kl(e, t) {
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
function Zl() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Xl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, zt = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(f, v, V) {
      if (!c(v) || d(v) || m(v) || _(v) || a(v))
        return v;
      var z, U = 0, P = 0;
      if (p(v))
        for (z = [], P = v.length; U < P; U++)
          z.push(n(f, v[U], V));
      else {
        z = {};
        for (var h in v)
          Object.prototype.hasOwnProperty.call(v, h) && (z[f(h, V)] = n(f, v[h], V));
      }
      return z;
    }, l = function(f, v) {
      v = v || {};
      var V = v.separator || "_", z = v.split || /(?=[A-Z])/;
      return f.split(z).join(V);
    }, o = function(f) {
      return I(f) ? f : (f = f.replace(/[\-_\s]+(.)?/g, function(v, V) {
        return V ? V.toUpperCase() : "";
      }), f.substr(0, 1).toLowerCase() + f.substr(1));
    }, u = function(f) {
      var v = o(f);
      return v.substr(0, 1).toUpperCase() + v.substr(1);
    }, i = function(f, v) {
      return l(f, v).toLowerCase();
    }, r = Object.prototype.toString, a = function(f) {
      return typeof f == "function";
    }, c = function(f) {
      return f === Object(f);
    }, p = function(f) {
      return r.call(f) == "[object Array]";
    }, d = function(f) {
      return r.call(f) == "[object Date]";
    }, m = function(f) {
      return r.call(f) == "[object RegExp]";
    }, _ = function(f) {
      return r.call(f) == "[object Boolean]";
    }, I = function(f) {
      return f = f - 0, f === f;
    }, x = function(f, v) {
      var V = v && "process" in v ? v.process : v;
      return typeof V != "function" ? f : function(z, U) {
        return V(z, f, U);
      };
    }, E = {
      camelize: o,
      decamelize: i,
      pascalize: u,
      depascalize: i,
      camelizeKeys: function(f, v) {
        return n(x(o, v), f);
      },
      decamelizeKeys: function(f, v) {
        return n(x(i, v), f, v);
      },
      pascalizeKeys: function(f, v) {
        return n(x(u, v), f);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = E : t.humps = E;
  })(Xl);
})(zt);
var ql = zt.exports, Jl = ["class", "style"];
function Ql(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var l = n.indexOf(":"), o = ql.camelize(n.slice(0, l)), u = n.slice(l + 1).trim();
    return t[o] = u, t;
  }, {});
}
function en(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function st(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var l = (e.children || []).map(function(a) {
    return st(a);
  }), o = Object.keys(e.attributes || {}).reduce(function(a, c) {
    var p = e.attributes[c];
    switch (c) {
      case "class":
        a.class = en(p);
        break;
      case "style":
        a.style = Ql(p);
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
  var u = n.style, i = u === void 0 ? {} : u, r = jl(n, Jl);
  return St(e.tag, ve(ve(ve({}, t), {}, {
    class: o.class,
    style: ve(ve({}, o.style), i)
  }, o.attrs), r), l);
}
var At = !1;
try {
  At = !0;
} catch {
}
function tn() {
  if (!At && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Fe(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? oe({}, e, t) : {};
}
function ln(e) {
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
function bt(e) {
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
    var l = n.attrs, o = $(function() {
      return bt(t.icon);
    }), u = $(function() {
      return Fe("classes", ln(t));
    }), i = $(function() {
      return Fe("transform", typeof t.transform == "string" ? Xe.transform(t.transform) : t.transform);
    }), r = $(function() {
      return Fe("mask", bt(t.mask));
    }), a = $(function() {
      return qt(o.value, ve(ve(ve(ve({}, u.value), i.value), r.value), {}, {
        symbol: t.symbol,
        title: t.title
      }));
    });
    Te(a, function(p) {
      if (!p)
        return tn("Could not find one or more icon(s)", o.value, r.value);
    }, {
      immediate: !0
    });
    var c = $(function() {
      return a.value ? st(a.value.abstract[0], {}, l) : null;
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
    var l = n.slots, o = xt.familyPrefix, u = $(function() {
      return ["".concat(o, "-layers")].concat(ot(t.fixedWidth ? ["".concat(o, "-fw")] : []));
    });
    return function() {
      return St("div", {
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
    var l = n.attrs, o = xt.familyPrefix, u = $(function() {
      return Fe("classes", [].concat(ot(t.counter ? ["".concat(o, "-layers-counter")] : []), ot(t.position ? ["".concat(o, "-layers-").concat(t.position)] : [])));
    }), i = $(function() {
      return Fe("transform", typeof t.transform == "string" ? Xe.transform(t.transform) : t.transform);
    }), r = $(function() {
      var c = Jt(t.value.toString(), ve(ve({}, i.value), u.value)), p = c.abstract;
      return t.counter && (p[0].attributes.class = p[0].attributes.class.replace("fa-layers-text", "")), p[0];
    }), a = $(function() {
      return st(r.value, {}, l);
    });
    return function() {
      return a.value;
    };
  }
});
Qt.add(
  el,
  tl,
  ll,
  nl,
  al,
  ol,
  rl,
  ul
);
const nn = "zoa__help__main", an = "zoa__help__icon", on = "zoa__help__popup", rn = {
  main: nn,
  "main--above": "zoa__help__main--above",
  "main--below": "zoa__help__main--below",
  icon: an,
  popup: on,
  "popup--right": "zoa__help__popup--right"
}, un = ["id"], sn = {
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
    const t = D("labelPosition"), n = D("helpId"), l = A(!1), o = A(null), u = El(o, { delayEnter: 500 });
    return Te(u, () => {
      l.value = u.value;
    }), Z("Escape", () => l.value = !1), (i, r) => (N(), w("div", {
      class: g([i.$style.main, i.$style[`main--${y(t)}`]]),
      ref_key: "helpContainer",
      ref: o
    }, [
      j(y(Me), {
        icon: ["fa-solid", "fa-circle-question"],
        class: g(i.$style.icon)
      }, null, 8, ["class"]),
      ye(C("div", {
        class: g([i.$style.popup, i.$style[`popup--${e.position}`]]),
        id: y(n),
        role: "tooltip"
      }, [
        Ve(i.$slots, "default", {}, () => [
          Oe(F(e.text), 1)
        ])
      ], 10, un), [
        [nt, l.value]
      ])
    ], 2));
  }
}, cn = {
  $style: rn
}, ht = /* @__PURE__ */ J(sn, [["__cssModules", cn]]), dn = "zoa__autocompletetextbox__input", pn = "zoa__autocompletetextbox__inputWrapper", fn = "zoa__autocompletetextbox__options", mn = "zoa__autocompletetextbox__option", vn = "zoa__autocompletetextbox__noOptions", yn = {
  input: dn,
  inputWrapper: pn,
  options: fn,
  option: mn,
  noOptions: vn
}, _n = ["aria-labelledby", "aria-describedby"], bn = ["placeholder", "id"], hn = { key: 0 }, gn = ["onClick"], In = ["value"], $n = {
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
  setup(e, { expose: t, emit: n }) {
    const l = e, o = D("inputId"), u = D("labelId"), i = D("helpId"), { value: r } = de(n, l), a = $(() => {
      let f = [];
      return l.options.forEach((v) => {
        typeof v == "object" ? f.push({ label: v.label, value: v.value }) : f.push({ label: v, value: v });
      }), f;
    }), c = A(null), p = A(null), d = A(null);
    t({
      target: p
    });
    const m = A(!1), _ = De(p), I = $e(d);
    function x() {
      try {
        c.value.blur(), p.value.blur(), d.value.blur();
      } catch {
      }
      m.value = !1;
    }
    Nt(c, () => {
      m.value = !1;
    }), Z("ArrowDown", () => {
      if (a.value.length !== 0) {
        if (_.focused.value)
          d.value.children[0].children[0].focus();
        else if (I.focused.value) {
          const f = d.value.querySelector("li:focus");
          !f || !f.nextElementSibling ? d.value.children[0].children[0].focus() : f.nextElementSibling.focus();
        }
      }
    }), Z("ArrowUp", () => {
      if (a.value.length !== 0 && I.focused.value) {
        const f = d.value.querySelector("li:focus");
        !f || !f.previousElementSibling ? p.value.focus() : f.previousElementSibling.focus();
      }
    }), Z("Enter", () => {
      if (I.focused.value) {
        const f = d.value.querySelector("li:focus");
        f && E(f.querySelector("input").value);
      }
      x();
    });
    function E(f) {
      r.value = f, x();
    }
    return (f, v) => (N(), w("div", {
      class: g(f.$style.inputWrapper),
      ref_key: "container",
      ref: c,
      "aria-labelledby": y(u),
      "aria-describedby": y(i)
    }, [
      ye(C("input", {
        type: "text",
        placeholder: e.placeholder,
        id: y(o),
        class: g(f.$style.input),
        "onUpdate:modelValue": v[0] || (v[0] = (V) => he(r) ? r.value = V : null),
        onFocusin: v[1] || (v[1] = (V) => m.value = !0),
        ref_key: "textbox",
        ref: p
      }, null, 42, bn), [
        [We, y(r)]
      ]),
      m.value ? (N(), w("div", {
        key: 0,
        class: g(f.$style.options),
        ref_key: "dropdown",
        ref: d
      }, [
        a.value.length > 0 ? (N(), w("ul", hn, [
          (N(!0), w(Ie, null, ze(a.value, (V) => (N(), w("li", {
            class: g(f.$style.option),
            onClick: (z) => E(V.value),
            tabindex: "0"
          }, [
            C("span", null, F(V.label), 1),
            C("input", {
              type: "hidden",
              value: V.value
            }, null, 8, In)
          ], 10, gn))), 256))
        ])) : (N(), w("div", {
          key: 1,
          class: g(f.$style.noOptions)
        }, "No options found", 2))
      ], 2)) : ke("", !0)
    ], 10, _n));
  }
}, kn = {
  $style: yn
}, Sn = /* @__PURE__ */ J($n, [["__cssModules", kn]]), xn = "zoa__checkbox__input", En = "zoa__checkbox__inputWrapper", On = "zoa__checkbox__defaultCheckbox", Tn = "zoa__checkbox__checkbox", Nn = "zoa__checkbox__check", zn = {
  input: xn,
  inputWrapper: En,
  defaultCheckbox: On,
  checkbox: Tn,
  check: Nn
}, An = ["aria-labelledby", "aria-describedby"], wn = ["id", "name", "value"], Mn = {
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
    const l = e, o = D("inputId"), u = D("labelId"), i = D("helpId"), { value: r, valueChanged: a } = de(n, l), c = D("rootContainer"), p = A(null), d = $e(c);
    t({
      target: p
    });
    const m = D("label"), _ = $(() => l.checkValue || m.value), I = $({
      get() {
        return l.name ? r.value || [] : r.value || !1;
      },
      set(E) {
        a(E);
      }
    });
    function x() {
      if (l.name) {
        let E = !I.value.includes(_.value), f = I.value.filter((v) => v !== _.value);
        E && f.push(_.value), I.value = f;
      } else
        I.value = !I.value;
    }
    return Z(" ", () => {
      d.focused.value && x();
    }), (E, f) => (N(), w("div", {
      class: g(E.$style.inputWrapper),
      "aria-labelledby": y(u),
      "aria-describedby": y(i)
    }, [
      ye(C("input", {
        type: "checkbox",
        id: y(o),
        class: g(E.$style.defaultCheckbox),
        "onUpdate:modelValue": f[0] || (f[0] = (v) => I.value = v),
        name: e.name ? e.name : null,
        value: _.value,
        ref_key: "checkboxInput",
        ref: p
      }, null, 10, wn), [
        [kt, I.value]
      ]),
      C("span", {
        class: g(E.$style.checkbox),
        onClick: x
      }, [
        j(y(Me), {
          icon: "fa-solid fa-check",
          class: g(E.$style.check)
        }, null, 8, ["class"])
      ], 2)
    ], 10, An));
  }
}, Rn = {
  $style: zn
}, Cn = /* @__PURE__ */ J(Mn, [["__cssModules", Rn]]);
function Pn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dn = {
  __locale: "en",
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  abbreviated_days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  abbreviated_months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  am: "AM",
  pm: "PM"
}, Vn = Dn;
const gt = /* @__PURE__ */ Pn(Vn), Wn = "zoa__dateambiguous__input", Un = "zoa__dateambiguous__inputWrapper", Ln = "zoa__dateambiguous__datePopup", Bn = "zoa__dateambiguous__popupSection", Hn = "zoa__dateambiguous__yearGrid", Gn = "zoa__dateambiguous__monthGrid", jn = "zoa__dateambiguous__dayGrid", Fn = "zoa__dateambiguous__editing", Yn = "zoa__dateambiguous__suggestion", Kn = "zoa__dateambiguous__dateRange", Zn = "zoa__dateambiguous__yearParts", Xn = {
  input: Wn,
  inputWrapper: Un,
  datePopup: Ln,
  popupSection: Bn,
  yearGrid: Hn,
  monthGrid: Gn,
  dayGrid: jn,
  editing: Fn,
  suggestion: Yn,
  dateRange: Kn,
  yearParts: Zn
}, qn = ["aria-labelledby", "aria-describedby"], Jn = ["placeholder", "id"], Qn = ["onClick", "onKeydown"], ea = {
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
    const l = e, o = () => import("./dates-29d3098f.js"), u = D("inputId"), i = D("labelId"), r = D("helpId"), { valueChanged: a } = de(n, l.delay), c = $(() => {
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
    }), p = $(() => {
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
    }), d = A(null), m = D("rootContainer"), _ = A(null), I = A(null), x = A(null), E = A(null), f = A(null), v = A(null), V = A(null), z = A(!1), { focused: U } = $e(m);
    t({
      target: d
    });
    const P = De(_), h = $e(_), M = De(I), B = $e(I), ae = De(x), ee = $e(x), _e = $(() => {
      let s;
      return P.focused.value ? s = _.value : M.focused.value ? s = I.value : ae.focused.value && (s = x.value), s;
    }), te = $(() => {
      let s;
      return h.focused.value ? s = _.value : B.focused.value ? s = I.value : ee.focused.value && (s = x.value), s;
    });
    Z("Enter", () => {
      _e && _e.value.children[0].focus();
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
      const s = m.value.querySelector("*:focus");
      s && s.blur();
    });
    function X(s, S, k) {
      s.value && (s.value.target.onkeyup = (R) => {
        /^[0-9]$/.test(R.key) && S ? S.value.focus() : R.key === "Backspace" && k && k.value.focus();
      });
    }
    Kt(() => {
      X(E, f, null), X(f, v, E), X(v, V, f), X(V, null, v);
    });
    const le = $(() => ({
      year: H.value,
      month: fe.value,
      day: ie.value,
      earliest: `${b.value.lower.year.toString().padStart(4, "0")}-${b.value.lower.month.toString().padStart(2, "0")}-${b.value.lower.day.toString().padStart(2, "0")}`,
      latest: `${b.value.upper.year.toString().padStart(4, "0")}-${b.value.upper.month.toString().padStart(2, "0")}-${b.value.upper.day.toString().padStart(2, "0")}`
    })), Re = $(() => it(
      le.value.year,
      le.value.month,
      le.value.day
    )), b = $(() => {
      let s, S;
      if (!xe.value)
        s = c.value.year, S = p.value.year;
      else {
        const be = 10 ** (4 - (Math.max(
          ...pe.map((Lt, Bt) => isNaN(parseInt(L.value[Lt])) ? -1 : Bt)
        ) + 1)), ue = Le(L.value, 4), He = Math.floor(c.value.year / be) * be, dt = Math.floor(p.value.year / be) * be;
        ue < He || ue > dt ? (s = c.value.year, S = p.value.year) : ue === He ? (s = c.value.year, S = ue + be - 1) : ue === dt ? (s = ue, S = p.value.year) : (s = ue, S = ue + be - 1);
      }
      const k = s === c.value.year, R = S === p.value.year, q = k ? Math.max(c.value.month, ge.value || 1) : ge.value || 1, Q = R ? Math.min(p.value.month, ge.value || 12) : ge.value || 12, re = q === c.value.month, Y = Q === p.value.month;
      let G = Pe.value || 1, ne = Pe.value || Be(Q);
      return G = k && re ? Math.max(G, c.value.day) : G, ne = R && Y ? Math.min(ne, p.value.day) : ne, s === S && q === Q && (R && Y && G > ne && (G = 1), k && re && ne < G && (ne = Be(Q))), {
        lower: {
          year: s,
          month: q,
          day: G,
          isMinYear: k,
          isMinMonth: re
        },
        upper: {
          year: S,
          month: Q,
          day: ne,
          isMaxYear: R,
          isMaxMonth: Y
        }
      };
    });
    function O(s, S, k) {
      const R = isNaN(parseInt(s)), q = isNaN(parseInt(S)), Q = isNaN(parseInt(k)), re = q || S <= 12 && S >= 1, Y = Q || k <= Be(S);
      if (R || s > b.value.lower.year && s < b.value.upper.year)
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
      let G = re, ne = Y;
      return s === b.value.lower.year && (G = G && (q || S >= b.value.lower.month), S === b.value.lower.month && (ne = ne && (Q || k >= b.value.lower.day))), s === b.value.upper.year && (G = G && (q || S <= b.value.upper.month), S === b.value.upper.month && (ne = ne && (Q || k <= b.value.upper.day))), {
        year: !0,
        month: G,
        day: ne
      };
    }
    function T() {
      d.value.value = Re.value, z.value = !1;
    }
    const W = A([]);
    function K(s) {
      z.value = !0, o().then((S) => {
        W.value = S.parseDate(s.target.value);
      });
    }
    const Ce = qe(K, 200);
    function Ne(s) {
      L.value = tt(s.year), fe.value = s.month, ie.value = s.day, W.value = [];
    }
    const H = $(() => {
      if (!xe.value)
        return null;
      const s = Le(L.value, 4);
      return O(s, fe.value, ie.value).year ? s : null;
    }), L = A({
      millenium: null,
      century: null,
      decade: null,
      year: null
    }), pe = ["millenium", "century", "decade", "year"], xe = $(() => Object.values(L.value).some((s) => !isNaN(parseInt(s)))), et = $(() => {
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
      let R, q = { ...S };
      if (xe.value)
        R = Math.max(
          ...pe.map((Y, G) => (q[Y] = L.value[Y], isNaN(parseInt(L.value[Y])) ? -1 : G))
        ) + 1;
      else
        for (let Y = 0; Y < pe.length; Y++) {
          let G = pe[Y];
          if (s[G] === k[G])
            q[G] = s[G];
          else if (R == null) {
            R = Y;
            break;
          }
        }
      function Q(Y) {
        let G = pe[Y];
        const ne = Le(s, Y + 1), ct = Le(k, Y + 1);
        return Array(10).fill(0).map((be, ue) => {
          let He = { ...q };
          return He[G] = be + ue, He;
        }).filter((be) => {
          const ue = Le(be, Y + 1);
          return ue >= ne && ue <= ct;
        });
      }
      let re = Q(R);
      return re.length === 1 && R < 3 && (q = { ...re[0] }, re = Q(R + 1)), xe.value && re.push(S), re;
    }), Pt = $(() => H.value % 100 === 0 ? H.value % 400 === 0 : H.value % 4 === 0);
    function Dt(s) {
      return Object.values(s).every((S) => S == null) ? "clear" : pe.map((S) => s[S] || 0).join("");
    }
    function Le(s, S) {
      return pe.slice(0, S).reduce((k, R, q) => {
        let Q = s[R] || 0;
        return k + Q * 10 ** (3 - q);
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
        ...pe.map(
          (k, R) => isNaN(parseInt(L.value[k])) ? -1 : R
        )
      ) === 3) {
        let k = O(H.value, fe.value, ie.value);
        (!k.month || !k.day) && (fe.value = null, ie.value = null);
      }
    }
    const ge = A(null), fe = $({
      get() {
        return O(H.value, ge.value, ie.value).month ? ge.value : null;
      },
      set(s) {
        ge.value = isNaN(parseInt(s)) ? null : s, ie.value && ie.value > lt.value && (ie.value = lt.value);
      }
    }), Wt = $(() => {
      let s = gt.abbreviated_months.map((k, R) => [k, R + 1]);
      const S = H.value ? H.value : c.value.year === p.value.year ? c.value.year : null;
      if (S === c.value.year && (s = s.slice(c.value.month - 1, s.length)), S === p.value.year) {
        const k = 12 - s.length;
        s = s.slice(0, p.value.month - k);
      }
      return ge.value && s.push(["clear", null]), s;
    }), lt = $(() => Be(fe.value));
    function Be(s) {
      return [4, 6, 9, 11].includes(s) ? 30 : s === 2 ? Pt.value ? 29 : 28 : 31;
    }
    const Pe = A(null), ie = $({
      get() {
        const s = O(H.value, ge.value, Pe.value);
        return s.month && s.day ? Pe.value : null;
      },
      set(s) {
        Pe.value = isNaN(parseInt(s)) ? null : s;
      }
    }), Ut = $(() => {
      const s = H.value ? H.value : c.value.year === p.value.year ? c.value.year : null, S = fe.value ? fe.value : c.value.year === p.value.year && c.value.month === p.value.month ? c.value.month : null, k = Be(S);
      let R = Array(k).fill(1).map((q, Q) => Q + 1);
      if (s === c.value.year && !isNaN(parseInt(S)) && S <= c.value.month && (R = R.slice(c.value.day - 1)), s === p.value.year && !isNaN(parseInt(S)) && S >= p.value.month) {
        const q = k - R.length;
        R = R.slice(0, p.value.day - q);
      }
      return Pe.value && R.push(null), R;
    });
    function it(s, S, k) {
      const R = gt.abbreviated_months[S - 1];
      return s && S && k ? `${k} ${R} ${s}` : s && S ? `${R} ${s}` : s && k ? `${k} ??? ${s}` : S && k ? `${k} ${R}` : s || (S ? R : k ? `day ${k}` : null);
    }
    return Te(le, () => {
      T(), a(le.value);
    }), (s, S) => (N(), w("div", {
      class: g(s.$style.inputWrapper),
      "aria-labelledby": y(i),
      "aria-describedby": y(r)
    }, [
      C("input", {
        type: "text",
        placeholder: e.placeholder,
        id: y(u),
        class: g([s.$style.input, z.value ? s.$style.editing : ""]),
        ref_key: "displayBox",
        ref: d,
        onInput: S[0] || (S[0] = (...k) => y(Ce) && y(Ce)(...k))
      }, null, 42, Jn),
      y(U) ? (N(), w("div", {
        key: 0,
        class: g(s.$style.datePopup)
      }, [
        W.value.length > 0 ? (N(), w("div", {
          key: 0,
          class: g(s.$style.popupSection)
        }, [
          (N(!0), w(Ie, null, ze(W.value, (k) => (N(), w("span", {
            onClick: (R) => Ne(k),
            onKeydown: Zt((R) => Ne(k), ["enter"]),
            class: g(s.$style.suggestion),
            tabindex: "0"
          }, F(it(k.year, k.month, k.day)), 43, Qn))), 256))
        ], 2)) : ke("", !0),
        C("div", {
          class: g(s.$style.popupSection)
        }, [
          j(y(se), {
            label: "year",
            "grid-class": s.$style.yearParts
          }, {
            default: Ke(() => [
              j(y(se), {
                "zoa-type": "number",
                label: "millenium",
                "label-position": "none",
                options: { placeholder: 0, min: 0, max: 9 },
                modelValue: L.value.millenium,
                "onUpdate:modelValue": S[1] || (S[1] = (k) => L.value.millenium = k),
                ref_key: "yrM",
                ref: E
              }, null, 8, ["modelValue"]),
              j(y(se), {
                "zoa-type": "number",
                label: "century",
                "label-position": "none",
                options: { placeholder: 0, min: 0, max: 9 },
                modelValue: L.value.century,
                "onUpdate:modelValue": S[2] || (S[2] = (k) => L.value.century = k),
                ref_key: "yrC",
                ref: f
              }, null, 8, ["modelValue"]),
              j(y(se), {
                "zoa-type": "number",
                label: "decade",
                "label-position": "none",
                options: { placeholder: 0, min: 0, max: 9 },
                modelValue: L.value.decade,
                "onUpdate:modelValue": S[3] || (S[3] = (k) => L.value.decade = k),
                ref_key: "yrD",
                ref: v
              }, null, 8, ["modelValue"]),
              j(y(se), {
                "zoa-type": "number",
                label: "year",
                "label-position": "none",
                options: { placeholder: 0, min: 0, max: 9 },
                modelValue: L.value.year,
                "onUpdate:modelValue": S[4] || (S[4] = (k) => L.value.year = k),
                ref_key: "yrY",
                ref: V
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["grid-class"]),
          C("div", {
            class: g(s.$style.yearGrid),
            tabindex: "0",
            ref_key: "yearBtns",
            ref: _
          }, [
            (N(!0), w(Ie, null, ze(et.value, (k) => (N(), we(je, {
              size: "sm",
              onClick: (R) => Vt(k),
              tabindex: "-1"
            }, {
              default: Ke(() => [
                Oe(F(Dt(k)), 1)
              ]),
              _: 2
            }, 1032, ["onClick"]))), 256))
          ], 2)
        ], 2),
        C("div", {
          class: g(s.$style.popupSection)
        }, [
          j(y(se), {
            "zoa-type": "number",
            label: "month",
            options: { placeholder: 1, min: 1, max: 12 },
            modelValue: fe.value,
            "onUpdate:modelValue": S[5] || (S[5] = (k) => fe.value = k)
          }, null, 8, ["modelValue"]),
          C("div", {
            class: g(s.$style.monthGrid),
            tabindex: "0",
            ref_key: "monthBtns",
            ref: I
          }, [
            (N(!0), w(Ie, null, ze(Wt.value, (k) => (N(), we(je, {
              size: "sm",
              onClick: (R) => fe.value = k[1],
              tabindex: "-1"
            }, {
              default: Ke(() => [
                Oe(F(k[0]), 1)
              ]),
              _: 2
            }, 1032, ["onClick"]))), 256))
          ], 2)
        ], 2),
        C("div", {
          class: g(s.$style.popupSection)
        }, [
          j(y(se), {
            "zoa-type": "number",
            label: "day",
            options: { placeholder: 1, min: 1, max: lt.value },
            modelValue: ie.value,
            "onUpdate:modelValue": S[6] || (S[6] = (k) => ie.value = k)
          }, null, 8, ["options", "modelValue"]),
          C("div", {
            class: g(s.$style.dayGrid),
            tabindex: "0",
            ref_key: "dayBtns",
            ref: x
          }, [
            (N(!0), w(Ie, null, ze(Ut.value, (k) => (N(), we(je, {
              size: "sm",
              onClick: (R) => ie.value = k,
              tabindex: "-1"
            }, {
              default: Ke(() => [
                Oe(F(k || "clear"), 1)
              ]),
              _: 2
            }, 1032, ["onClick"]))), 256))
          ], 2)
        ], 2),
        C("div", {
          class: g(s.$style.popupSection)
        }, [
          C("small", {
            class: g(s.$style.dateRange)
          }, F(le.value.earliest) + " to " + F(le.value.latest), 3)
        ], 2)
      ], 2)) : ke("", !0)
    ], 10, qn));
  }
}, ta = {
  $style: Xn
}, la = /* @__PURE__ */ J(ea, [["__cssModules", ta]]), na = "zoa__datesimple__input", aa = "zoa__datesimple__inputWrapper", oa = {
  input: na,
  inputWrapper: aa
}, ra = ["aria-labelledby", "aria-describedby"], ua = ["placeholder", "min", "max", "step", "id"], sa = {
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
    const l = e, o = D("inputId"), u = D("labelId"), i = D("helpId"), { value: r } = de(n, l), a = A(null);
    return t({
      target: a
    }), (c, p) => (N(), w("div", {
      class: g(c.$style.inputWrapper),
      "aria-labelledby": y(u),
      "aria-describedby": y(i)
    }, [
      ye(C("input", {
        type: "date",
        placeholder: e.placeholder,
        min: e.min,
        max: e.max,
        step: e.step,
        id: y(o),
        class: g(c.$style.input),
        "onUpdate:modelValue": p[0] || (p[0] = (d) => he(r) ? r.value = d : null),
        ref_key: "target",
        ref: a
      }, null, 10, ua), [
        [We, y(r)]
      ])
    ], 10, ra));
  }
}, ia = {
  $style: oa
}, ca = /* @__PURE__ */ J(sa, [["__cssModules", ia]]), da = "zoa__dropdown__input", pa = "zoa__dropdown__inputWrapper", fa = "zoa__dropdown__arrow", ma = {
  input: da,
  inputWrapper: pa,
  arrow: fa
}, va = ["aria-labelledby", "aria-describedby"], ya = ["id"], _a = { value: null }, ba = ["value"], ha = {
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
  setup(e, { expose: t, emit: n }) {
    const l = e, o = D("inputId"), u = D("labelId"), i = D("helpId"), r = $(() => {
      let p = [];
      return l.options.forEach((d) => {
        typeof d == "object" ? p.push({
          label: d.label || d.value,
          value: d.value || d.label,
          order: d.order || null
        }) : p.push({ label: d, value: d });
      }), p.sort((d, m) => {
        let _ = 0;
        (d.order || m.order) && (_ = d.order && m.order ? d.order - m.order : d.order ? 1 : -1);
        let I = d.label.localeCompare(m.label);
        return _ !== 0 ? _ : I;
      }), p;
    }), { value: a } = de(n, l), c = A(null);
    return t({
      target: c
    }), (p, d) => (N(), w("div", {
      class: g(p.$style.inputWrapper),
      "aria-labelledby": y(u),
      "aria-describedby": y(i)
    }, [
      ye(C("select", {
        id: y(o),
        class: g(p.$style.input),
        "onUpdate:modelValue": d[0] || (d[0] = (m) => he(a) ? a.value = m : null),
        ref_key: "target",
        ref: c
      }, [
        C("option", _a, F(e.placeholder), 1),
        (N(!0), w(Ie, null, ze(r.value, (m) => (N(), w("option", {
          value: m.value
        }, F(m.label), 9, ba))), 256))
      ], 10, ya), [
        [Xt, y(a)]
      ]),
      j(y(Me), {
        icon: "fa-solid fa-caret-down",
        class: g(p.$style.arrow)
      }, null, 8, ["class"])
    ], 10, va));
  }
}, ga = {
  $style: ma
}, Ia = /* @__PURE__ */ J(ha, [["__cssModules", ga]]);
function* $a(e, t, n = 0, l = null) {
  if (e.length === 0)
    return;
  l === null && (l = t.length);
  let u;
  for (; (u = t.indexOf(e, n)) > -1 && !(u + e.length > l); )
    yield u, n = u + 1;
}
function ka(e) {
  return e.split("").reverse().join("");
}
var Sa = {
  searchExact: $a,
  reverse: ka
};
const { searchExact: wt, reverse: It } = Sa;
function xa(e, t, n) {
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
  let u;
  for (u = e.length - 1; u >= 0 && e[u] === t[u + l]; u--)
    ;
  e = e.slice(o, u + 1), t = t.slice(o, u + 1 + l);
  const [i, r] = Qe(e, t, n);
  return i + (t.length - r) <= n;
}
function Ea(e, t) {
  e.length > t.length && ([e, t] = [t, e]);
  const n = new Array(e.length + 1);
  for (let u = 0; u <= e.length; u++)
    n[u] = u;
  let l, o;
  for (let u = 0; u < t.length; u++) {
    n[0] = u + 1, o = u;
    for (let i = 0; i < e.length; i++)
      l = n[i + 1], n[i + 1] = Math.min(
        o + +(e[i] !== t[u]),
        n[i] + 1,
        n[i + 1] + 1
      ), o = l;
  }
  return n[e.length];
}
function Oa(e, t) {
  const n = {};
  for (let l = Math.min(e.length - 1, t); l >= 0; l--)
    n[e[l]] = l;
  return n;
}
function* Ta(e, t, n) {
  if (e.length > t.length + n)
    return;
  const l = Math.floor(e.length / (n + 1));
  if (n === 0)
    for (const o of wt(e, t))
      yield {
        start: o,
        end: o + e.length,
        dist: 0
      };
  else
    l >= 10 ? yield* Mt(e, t, n) : yield* Rt(e, t, n);
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
  let u = new Array(e.length + 1), i = null, r = null, a = n, c = 0, p = e.length - 1;
  for (let d = 0; d < t.length; d++) {
    const m = t.charCodeAt(d), _ = Math.max(0, c - 1), I = Math.min(
      d + n,
      e.length - 1,
      p
    );
    u[0] = o[0] + 1, c = u[0] <= a ? 0 : null, p = u[0] <= a ? 0 : -1;
    let x;
    for (x = _; x < I; x++) {
      const f = u[x + 1] = Math.min(
        o[x] + +(m !== e.charCodeAt(x)),
        o[x + 1] + 1,
        u[x] + 1
      );
      f <= a && (c === null && (c = x + 1), p = Math.max(
        p,
        x + 1 + (a - f)
      ));
    }
    const E = u[x + 1] = Math.min(
      o[x] + +(m !== e.charCodeAt(x)),
      u[x] + 1
    );
    if (E <= a && (c === null && (c = x + 1), p = x + 1), x === e.length - 1 && (i === null || E <= i) && (i = E, r = d, i < a && (a = i)), [o, u] = [u, o], c === null)
      break;
  }
  return i !== null && i <= n ? [i, r + 1 + l] : [null, null];
}
function* Mt(e, t, n) {
  const l = Math.floor(e.length / (n + 1)), o = e.length, u = t.length;
  for (let i = 0; i <= e.length - l; i += l) {
    const r = e.slice(i, i + l), a = i + l, c = It(e.slice(0, i)), p = e.slice(a), d = Math.max(0, i - n), m = Math.min(u, u - o + a + n);
    for (const _ of wt(r, t, d, m)) {
      const [I, x] = Qe(
        p,
        t.slice(
          _ + l,
          _ - i + o + n
        ),
        n
      );
      if (I === null)
        continue;
      const [E, f] = Qe(
        c,
        It(t.slice(
          Math.max(0, _ - i - (n - I)),
          _
        )),
        n - I
      );
      E !== null && (yield {
        start: _ - f,
        end: _ + l + x,
        dist: E + I
      });
    }
  }
}
function* Rt(e, t, n) {
  const l = e.length, o = t.length;
  if (l > o + n)
    return;
  const u = Oa(e, n);
  let i = [], r = [];
  for (let a = 0; a < t.length; a++) {
    const c = t[a];
    i = r, r = [];
    const p = u[c];
    p !== void 0 && (p + 1 === l ? yield {
      start: a,
      end: a + 1,
      dist: p
    } : r.push({
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
        } : r.push({
          startIdx: d.startIdx,
          needleIdx: d.needleIdx + 1,
          dist: d.dist
        });
      else {
        if (d.dist === n)
          continue;
        r.push({
          startIdx: d.startIdx,
          needleIdx: d.needleIdx,
          dist: d.dist + 1
        });
        for (let m = 1; m <= n - d.dist; m++)
          if (d.needleIdx + m === l) {
            yield {
              start: d.startIdx,
              end: a + 1,
              dist: d.dist + m
            };
            break;
          } else if (e[d.needleIdx + m] === c) {
            d.needleIdx + m + 1 === l ? yield {
              start: d.startIdx,
              end: a + 1,
              dist: d.dist + m
            } : r.push({
              startIdx: d.startIdx,
              needleIdx: d.needleIdx + 1 + m,
              dist: d.dist + m
            });
            break;
          }
        a + 1 < o && d.needleIdx + 1 < l && r.push({
          startIdx: d.startIdx,
          needleIdx: d.needleIdx + 1,
          dist: d.dist + 1
        });
      }
  }
  for (const a of r)
    a.dist += e.length - a.needleIdx, a.dist <= n && (yield {
      start: a.startIdx,
      end: t.length,
      dist: a.dist
    });
}
var Na = {
  _expand: Qe,
  editDistance: Ea,
  fuzzySearch: Ta,
  fuzzySearchNgrams: Mt,
  fuzzySearchCandidates: Rt,
  isEditDistanceNoGreaterThan: xa
};
const { editDistance: za, fuzzySearch: Aa, isEditDistanceNoGreaterThan: wa } = Na;
var Ma = {
  editDistance: za,
  fuzzySearch: Aa,
  isEditDistanceNoGreaterThan: wa
};
const Ra = "zoa__multiselect__input", Ca = "zoa__multiselect__inputWrapper", Pa = "zoa__multiselect__options", Da = "zoa__multiselect__optlist", Va = "zoa__multiselect__listItem", Wa = "zoa__multiselect__option", Ua = "zoa__multiselect__selectAll", La = "zoa__multiselect__subgroup", Ba = "zoa__multiselect__noOptions", Ha = "zoa__multiselect__textboxWrapper", Ga = "zoa__multiselect__arrow", ja = {
  input: Ra,
  inputWrapper: Ca,
  options: Pa,
  optlist: Da,
  listItem: Va,
  option: Wa,
  selectAll: Ua,
  subgroup: La,
  noOptions: Ba,
  textboxWrapper: Ha,
  arrow: Ga
}, Fa = ["aria-labelledby", "aria-describedby"], Ya = ["placeholder", "id"], Ka = ["title"], Za = ["onClick"], Xa = { key: 1 }, Ze = 10, qa = {
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
    const l = e, o = D("inputId"), u = D("subId"), i = D("labelId"), r = D("helpId"), { value: a } = de(n, l);
    Array.isArray(a) || (a.value = []);
    const c = A(null), p = qe((b) => {
      n("search", b);
    }, l.searchDelay), d = qe((b) => {
      c.value = b;
    }, l.searchDelay), m = $({
      get() {
        return c.value;
      },
      set(b) {
        d(b), p(b);
      }
    }), _ = $(() => (a.value ? a.value.length !== 1 : !0) ? l.itemNamePlural || l.itemName + "s" : l.itemName), I = $(() => {
      let b = [];
      return l.options.forEach((O) => {
        typeof O == "object" ? b.push({
          label: O.label || O.value,
          value: O.value || O.label,
          group: O.group || null,
          order: O.order || null
        }) : b.push({ label: O, value: O, group: null });
      }), b.sort((O, T) => {
        let W;
        O.group === T.group ? W = 0 : !O.group || !T.group ? W = O.group ? 1 : -1 : W = O.group.localeCompare(T.group);
        let K = 0;
        (O.order || T.order) && (K = O.order && T.order ? O.order - T.order : O.order ? 1 : -1);
        let Ce = O.label.localeCompare(T.label);
        return W !== 0 ? W : K !== 0 ? K : Ce;
      }), b;
    }), x = $(() => {
      const b = l.enableSearch && m.value, O = b ? m.value.toLowerCase() : null, T = (H) => H ? [...Ma.fuzzySearch(O, H.toLowerCase(), 1)].length > 0 : !1;
      let W;
      b ? W = I.value.filter((H) => T(H.group) || T(H.label) || T(H.value)) : W = I.value;
      let K = [], Ce = Object.entries(
        Object.groupBy(W, ({ group: H }) => H)
      ), Ne = O ? 2 : 1;
      return Ce.forEach((H) => {
        let L = H[0], pe = H[1];
        L && L !== "null" && (K.push({
          ix: Ne,
          kind: "group",
          label: L,
          value: L,
          group: L
        }), Ne += 1), K = K.concat(
          pe.map((xe, et) => ({
            ix: Ne + et,
            kind: "option",
            label: xe.label,
            value: xe.value,
            group: xe.group
          }))
        ), Ne += pe.length;
      }), K;
    }), E = A(null), f = A(null), v = A(null);
    t({
      target: f
    });
    const { y: V } = Ol(v), z = $(() => !v.value || v.value && V.value !== v.value.scrollTop ? 0 : V.value), U = $(() => {
      try {
        return v.value.clientHeight;
      } catch {
        return 500;
      }
    }), P = $(() => x.value.length < Ze * 2 ? 0 : Math.floor(z.value / l.itemHeight) - Ze), h = $(() => x.value.length < Ze * 2 ? x.value.length + Ze : Math.ceil((z.value + U.value) / l.itemHeight)), M = A(!1), B = De(f), ae = $e(v);
    function ee() {
      M.value = !0, setTimeout(() => {
        f.value.focus();
      }, 50);
    }
    function _e() {
      try {
        E.value.blur(), f.value.blur(), v.value.blur();
      } catch {
      }
      M.value = !1;
    }
    function te() {
      M.value ? _e() : ee();
    }
    Nt(E, () => {
      _e();
    }), Z("ArrowDown", () => {
      if (I.value.length !== 0) {
        if (B.focused.value)
          v.value.children[0].children[0].children[0].focus();
        else if (ae.focused.value) {
          const b = [...v.value.querySelectorAll("label")], O = v.value.querySelector("label:focus");
          if (!O)
            b[0].focus();
          else {
            const T = b.findIndex((W) => W === O);
            T === b.length - 1 ? b[0].focus() : b[T + 1].focus();
          }
        }
      }
    }), Z("ArrowUp", () => {
      if (I.value.length !== 0 && ae.focused.value) {
        const b = [...v.value.querySelectorAll("label")], O = v.value.querySelector("label:focus");
        if (!O)
          f.value.focus();
        else {
          const T = b.findIndex((W) => W === O);
          T === 0 ? f.value.focus() : b[T - 1].focus();
        }
      }
    }), Z("Enter", () => {
      _e();
    });
    const X = $({
      get() {
        const b = I.value;
        return a.value == null || a.value.length !== b.length ? !1 : b.filter((T) => !a.value.includes(T.value)).length === 0;
      },
      set(b) {
        b ? a.value = I.value.map((O) => O.value) : a.value = [];
      }
    }), le = $({
      get() {
        let b = x.value.filter((T) => T.kind === "option").map((T) => T.value);
        return a.value == null || a.value.length < b.length ? !1 : b.filter((T) => !a.value.includes(T)).length === 0;
      },
      set(b) {
        let O = x.value.filter((K) => K.kind === "option").map((K) => K.value);
        const T = a.value ? a.value : [], W = O.filter((K) => !T.includes(K));
        b ? a.value = T.concat(W) : a.value = T.filter((K) => !O.includes(K));
      }
    });
    function Re(b) {
      const O = x.value.filter((W) => W.kind === "option" && W.group === b).map((W) => W.value);
      a.value = a.value ? a.value : [];
      const T = O.filter((W) => !a.value.includes(W));
      T.length > 0 ? T.forEach((W) => {
        a.value.push(W);
      }) : a.value = a.value.filter((W) => !O.includes(W));
    }
    return (b, O) => (N(), w("div", {
      class: g(b.$style.inputWrapper),
      ref_key: "container",
      ref: E,
      "aria-labelledby": y(i),
      "aria-describedby": y(r)
    }, [
      C("div", {
        class: g(b.$style.textboxWrapper)
      }, [
        ye(C("input", {
          type: "text",
          placeholder: e.placeholder,
          id: y(o),
          class: g(b.$style.input),
          "onUpdate:modelValue": O[0] || (O[0] = (T) => m.value = T),
          ref_key: "textbox",
          ref: f
        }, null, 10, Ya), [
          [We, m.value],
          [nt, M.value]
        ]),
        ye(C("div", {
          class: g(b.$style.input),
          tabindex: "0",
          onFocusin: ee
        }, F(y(a) ? y(a).length : 0) + " " + F(_.value) + " selected ", 35), [
          [nt, !M.value]
        ]),
        j(y(Me), {
          icon: "fa-solid fa-caret-down",
          class: g(b.$style.arrow),
          onClick: te
        }, null, 8, ["class"])
      ], 2),
      M.value ? (N(), w("div", {
        key: 0,
        class: g(b.$style.options),
        ref_key: "dropdown",
        ref: v
      }, [
        I.value.length > 0 ? (N(), w("ul", {
          key: 0,
          class: g(b.$style.optlist)
        }, [
          C("li", {
            title: "Select all",
            class: g([b.$style.selectAll, b.$style.listItem, b.$style.option]),
            style: Ge({ height: `${e.itemHeight}px` })
          }, [
            j(y(se), {
              "zoa-type": "checkbox",
              label: "Select all",
              "label-position": "right",
              modelValue: X.value,
              "onUpdate:modelValue": O[1] || (O[1] = (T) => X.value = T)
            }, null, 8, ["modelValue"])
          ], 6),
          c.value ? (N(), w("li", {
            key: 0,
            title: "Select results",
            class: g([b.$style.selectAll, b.$style.listItem, b.$style.option]),
            style: Ge({ height: `${e.itemHeight}px` })
          }, [
            j(y(se), {
              "zoa-type": "checkbox",
              label: "Select results",
              "label-position": "right",
              modelValue: le.value,
              "onUpdate:modelValue": O[2] || (O[2] = (T) => le.value = T)
            }, null, 8, ["modelValue"])
          ], 6)) : ke("", !0),
          (N(!0), w(Ie, null, ze(x.value, (T) => (N(), w("li", {
            title: T.label,
            class: g([
              b.$style.listItem,
              T.kind === "group" ? b.$style.subgroup : b.$style.option
            ]),
            style: Ge({ height: `${e.itemHeight}px` })
          }, [
            T.kind === "group" ? (N(), w("div", {
              key: 0,
              onClick: (W) => Re(T.group)
            }, F(T.label), 9, Za)) : (N(), w("div", Xa, [
              T.ix >= P.value && T.ix <= h.value ? (N(), we(y(se), {
                key: 0,
                "zoa-type": "checkbox",
                label: T.label,
                "label-position": "right",
                options: { checkValue: T.value, name: y(u)("checkboxes") },
                modelValue: y(a),
                "onUpdate:modelValue": O[3] || (O[3] = (W) => he(a) ? a.value = W : null)
              }, null, 8, ["label", "options", "modelValue"])) : ke("", !0)
            ]))
          ], 14, Ka))), 256))
        ], 2)) : (N(), w("div", {
          key: 1,
          class: g(b.$style.noOptions)
        }, "No options found", 2))
      ], 2)) : ke("", !0)
    ], 10, Fa));
  }
}, Ja = {
  $style: ja
}, Qa = /* @__PURE__ */ J(qa, [["__cssModules", Ja]]), eo = "zoa__number__input", to = "zoa__number__inputWrapper", lo = {
  input: eo,
  inputWrapper: to
}, no = ["aria-labelledby", "aria-describedby"], ao = ["placeholder", "min", "max", "step", "id"], oo = {
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
    const l = e, o = D("inputId"), u = D("labelId"), i = D("helpId"), { value: r } = de(n, l), a = A(null);
    return t({
      target: a
    }), (c, p) => (N(), w("div", {
      class: g(c.$style.inputWrapper),
      "aria-labelledby": y(u),
      "aria-describedby": y(i)
    }, [
      ye(C("input", {
        type: "number",
        placeholder: e.placeholder,
        min: e.min,
        max: e.max,
        step: e.step,
        id: y(o),
        class: g(c.$style.input),
        "onUpdate:modelValue": p[0] || (p[0] = (d) => he(r) ? r.value = d : null),
        ref_key: "target",
        ref: a
      }, null, 10, ao), [
        [We, y(r)]
      ])
    ], 10, no));
  }
}, ro = {
  $style: lo
}, uo = /* @__PURE__ */ J(oo, [["__cssModules", ro]]), so = "zoa__rangeslider__input", io = "zoa__rangeslider__inputWrapper", co = {
  input: so,
  inputWrapper: io
}, po = ["aria-labelledby", "aria-describedby"], fo = {
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
    D("inputId");
    const o = D("labelId"), u = D("helpId"), { valueChanged: i } = de(n, l), r = A(null), a = A(null), c = $(() => {
      if (r.value)
        return r.value.target;
    }), p = $(() => r.value && a.value ? [r.value.target, a.value.target] : []);
    t({
      target: c,
      elements: p
    });
    const d = A(null), m = A(null), _ = $(() => Math.max(
      Number(m.value) - Number(l.step),
      Number(l.min)
    )), I = $(() => Math.min(
      Number(d.value) + Number(l.step),
      Number(l.max)
    )), x = $(() => {
      const E = Math.min(d.value, _.value), f = Math.max(m.value, I.value);
      return [E, f];
    });
    return Te(x, () => {
      i(x.value);
    }), (E, f) => (N(), w("div", {
      class: g(E.$style.inputWrapper),
      "aria-labelledby": y(o),
      "aria-describedby": y(u)
    }, [
      j(y(se), {
        "zoa-type": "slider",
        label: e.labelLower,
        "label-position": e.labelsRight ? "right" : "left",
        options: {
          min: e.min,
          max: e.max,
          step: e.step,
          validMax: _.value,
          valueLabelPosition: "above",
          placeholderPosition: 0.25
        },
        modelValue: d.value,
        "onUpdate:modelValue": f[0] || (f[0] = (v) => d.value = v),
        ref: "lowerTrack"
      }, null, 8, ["label", "label-position", "options", "modelValue"]),
      j(y(se), {
        "zoa-type": "slider",
        label: e.labelUpper,
        "label-position": e.labelsRight ? "right" : "left",
        options: {
          min: e.min,
          max: e.max,
          step: e.step,
          validMin: I.value,
          placeholderPosition: 0.75,
          activeTrackRight: !0
        },
        modelValue: m.value,
        "onUpdate:modelValue": f[1] || (f[1] = (v) => m.value = v),
        ref: "upperTrack"
      }, null, 8, ["label", "label-position", "options", "modelValue"])
    ], 10, po));
  }
}, mo = {
  $style: co
}, vo = /* @__PURE__ */ J(fo, [["__cssModules", mo]]), yo = "zoa__slider__input", _o = "zoa__slider__inputWrapper", bo = "zoa__slider__track", ho = "zoa__slider__valueLabel", go = {
  input: yo,
  inputWrapper: _o,
  track: bo,
  "track--active": "zoa__slider__track--active",
  valueLabel: ho,
  "valueLabel--below": "zoa__slider__valueLabel--below",
  "valueLabel--above": "zoa__slider__valueLabel--above"
}, Io = ["aria-labelledby", "aria-describedby"], $o = ["min", "max", "step", "id"], ko = {
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
    const l = e, o = D("inputId"), u = D("labelId"), i = D("helpId"), { value: r } = de(n, l), a = A(null), c = A(null);
    t({
      target: a
    });
    const p = $(() => l.validMin ? Math.max(Number(l.validMin), Number(l.min)) : Number(l.min)), d = $(() => l.validMax ? Math.min(Number(l.validMax), Number(l.max)) : Number(l.max)), m = $e(a), _ = De(c), I = $(() => r.value < p.value ? p.value : r.value > d.value ? d.value : r.value), x = $(() => l.activeTrackRight ? { left: `${f.value.handle}%` } : { right: `${100 - f.value.handle}%` }), E = $(() => (r.value - l.min) / (l.max - l.min)), f = $(() => v());
    function v() {
      try {
        const h = a.value.clientWidth, M = 24;
        c.value && (c.value.innerText = I.value);
        const B = c.value ? c.value.clientWidth : 0, ae = h / 2, te = (E.value * h - ae) / ae * (M / 2), X = te + B / 2, le = te / h;
        return {
          handle: ((E.value - le) * 100).toFixed(2),
          label: ((E.value - X / h) * 100).toFixed(2)
        };
      } catch {
        const h = E.value * 100;
        return { handle: h.toFixed(2), label: h.toFixed(2) };
      }
    }
    function V() {
      if (l.placeholder !== null && l.placeholder !== void 0)
        return l.placeholder;
      let M = (l.max - l.min) / (1 / l.placeholderPosition), B = M % l.step;
      return M - B + l.min;
    }
    function z() {
      if (r.value === l.max)
        return;
      let h = Number(r.value) + Number(l.step);
      h > l.max ? r.value = l.max : r.value = h;
    }
    function U() {
      if (r.value === l.min)
        return;
      let h = Number(r.value) - Number(l.step);
      h < l.min ? r.value = l.min : r.value = h;
    }
    function P(h) {
      h.preventDefault(), h.wheelDelta > 0 ? z() : h.wheelDelta < 0 && U();
    }
    return Z("ArrowDown", (h) => {
      h.preventDefault(), (m.focused.value || _.focused.value) && U();
    }), Z("ArrowLeft", (h) => {
      h.preventDefault(), (m.focused.value || _.focused.value) && U();
    }), Z("ArrowUp", (h) => {
      h.preventDefault(), (m.focused.value || _.focused.value) && z();
    }), Z("ArrowRight", (h) => {
      h.preventDefault(), (m.focused.value || _.focused.value) && z();
    }), Te(r, (h) => {
      Number(h) >= Number(d.value) && (r.value = d.value), Number(h) <= Number(p.value) && (r.value = p.value);
    }), r.value = V(), (h, M) => (N(), w("div", {
      class: g(h.$style.inputWrapper),
      onWheel: P,
      "aria-labelledby": y(u),
      "aria-describedby": y(i)
    }, [
      C("span", {
        class: g(h.$style.track)
      }, null, 2),
      C("span", {
        class: g([h.$style.track, h.$style["track--active"]]),
        style: Ge(x.value)
      }, null, 6),
      C("span", {
        class: g([h.$style.valueLabel, h.$style[`valueLabel--${e.valueLabelPosition}`]]),
        style: Ge({ left: `${f.value.label}%` }),
        ref_key: "valueLabel",
        ref: c,
        tabindex: "0"
      }, F(I.value), 7),
      ye(C("input", {
        type: "range",
        min: e.min,
        max: e.max,
        step: e.step,
        id: y(o),
        class: g(h.$style.input),
        "onUpdate:modelValue": M[0] || (M[0] = (B) => he(r) ? r.value = B : null),
        ref_key: "slider",
        ref: a
      }, null, 10, $o), [
        [We, y(r)]
      ])
    ], 42, Io));
  }
}, So = {
  $style: go
}, xo = /* @__PURE__ */ J(ko, [["__cssModules", So]]), Eo = "zoa__textbox__input", Oo = "zoa__textbox__inputWrapper", To = {
  input: Eo,
  inputWrapper: Oo
}, No = ["aria-labelledby", "aria-describedby"], zo = ["placeholder", "id"], Ao = {
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
    const l = e, o = D("inputId"), u = D("labelId"), i = D("helpId"), { value: r } = de(n, l), a = A(null);
    return t({
      target: a
    }), (c, p) => (N(), w("div", {
      class: g(c.$style.inputWrapper),
      "aria-labelledby": y(u),
      "aria-describedby": y(i)
    }, [
      ye(C("input", {
        type: "text",
        placeholder: e.placeholder,
        id: y(o),
        class: g(c.$style.input),
        "onUpdate:modelValue": p[0] || (p[0] = (d) => he(r) ? r.value = d : null),
        ref_key: "target",
        ref: a
      }, null, 10, zo), [
        [We, y(r)]
      ])
    ], 10, No));
  }
}, wo = {
  $style: To
}, Mo = /* @__PURE__ */ J(Ao, [["__cssModules", wo]]), $t = {
  checkbox: {
    component: Cn,
    multi: !1,
    delay: 0,
    tabLabel: !0
  },
  "date-ambiguous": {
    component: la,
    multi: !1,
    delay: 200
  },
  "date-simple": {
    component: ca,
    multi: !1,
    delay: 200
  },
  dropdown: {
    component: Ia,
    multi: !1,
    delay: 0
  },
  multiselect: {
    component: Qa,
    multi: !1,
    delay: 0
  },
  empty: {
    component: null,
    multi: !0
  },
  number: {
    component: uo,
    multi: !1,
    delay: 200
  },
  "range-slider": {
    component: vo,
    multi: !0,
    delay: 200
  },
  slider: {
    component: xo,
    multi: !1,
    delay: 200,
    wrapperProps: ["valueLabelPosition"]
  },
  "autocomplete-textbox": {
    component: Sn,
    multi: !1,
    delay: 200
  },
  textbox: {
    component: Mo,
    multi: !1,
    delay: 200
  }
}, Ro = "zoa__input__input", Co = "zoa__input__inputWrapper", Po = "zoa__input__rootWrapper", Do = "zoa__input__checkbox", Vo = "zoa__input__slider", Wo = "zoa__input__emptyGrid", Uo = "zoa__input__fieldset", Lo = {
  input: Ro,
  inputWrapper: Co,
  rootWrapper: Po,
  "rootWrapper--above": "zoa__input__rootWrapper--above",
  "rootWrapper--help": "zoa__input__rootWrapper--help",
  "rootWrapper--below": "zoa__input__rootWrapper--below",
  "rootWrapper--left": "zoa__input__rootWrapper--left",
  "rootWrapper--right": "zoa__input__rootWrapper--right",
  "rootWrapper--none": "zoa__input__rootWrapper--none",
  checkbox: Do,
  slider: Vo,
  "rootWrapper-valueLabelPosition--below": "zoa__input__rootWrapper-valueLabelPosition--below",
  "rootWrapper-valueLabelPosition--above": "zoa__input__rootWrapper-valueLabelPosition--above",
  "range-slider": "zoa__input__range-slider",
  emptyGrid: Wo,
  fieldset: Uo
}, Bo = ["id"], Ho = {
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
    const l = e, o = $(() => {
      let h = $t[l.zoaType];
      return h == null && (h = $t.empty), h;
    }), u = $(() => o.value.component), { componentId: i, subId: r } = Et(), a = r("input"), c = r("label"), p = r("help"), d = $(() => {
      let h = [
        "rootWrapper",
        `rootWrapper--${l.labelPosition}`,
        l.zoaType
      ];
      return l.help && h.push("rootWrapper--help"), o.value.wrapperProps && o.value.wrapperProps.forEach((M) => {
        l.options[M] != null && h.push(`rootWrapper-${M}--${l.options[M]}`);
      }), h;
    }), { addPropClasses: m } = Ye(l), { value: _ } = de(n, l), I = A(null), x = $(() => l.label), E = $(() => l.labelPosition), f = $(() => l.help ? p : null);
    Ee("label", x), Ee("labelPosition", E), Ee("componentId", i), Ee("subId", r), Ee("inputId", a), Ee("labelId", c), Ee("helpId", f), Ee("rootContainer", I);
    const v = A(null);
    function V() {
      v.value && v.value.target.focus();
    }
    function z() {
      v.value && v.value.target.blur();
    }
    const U = $(() => {
      if (v.value)
        return v.value.target;
    }), P = $(() => v.value && v.value.elements ? v.value.elements : {});
    return t({
      focus: V,
      blur: z,
      target: U,
      elements: P
    }), (h, M) => (N(), w("div", {
      id: y(i),
      ref_key: "rootContainer",
      ref: I,
      class: g(y(m)(d.value.map((B) => h.$style[B])))
    }, [
      o.value.multi ? (N(), w("fieldset", {
        key: 0,
        class: g(h.$style.fieldset)
      }, [
        j(yt, {
          "input-id": y(a),
          legend: !0,
          label: e.label,
          "label-position": e.labelPosition,
          tabbable: o.value.tabLabel
        }, null, 8, ["input-id", "label", "label-position", "tabbable"]),
        e.help ? (N(), we(ht, {
          key: 0,
          text: e.help,
          position: e.helpPosition
        }, null, 8, ["text", "position"])) : ke("", !0),
        u.value == null ? (N(), w("div", {
          key: 1,
          class: g([e.gridClass || h.$style.emptyGrid, h.$style.inputWrapper])
        }, [
          Ve(h.$slots, "default")
        ], 2)) : (N(), we(y(u), at({ key: 2 }, e.options, {
          modelValue: y(_),
          "onUpdate:modelValue": M[0] || (M[0] = (B) => he(_) ? _.value = B : null),
          ref_key: "inputComponent",
          ref: v
        }), null, 16, ["modelValue"]))
      ], 2)) : (N(), w(Ie, { key: 1 }, [
        j(yt, {
          "input-id": y(a),
          legend: !1,
          label: e.label,
          "label-position": e.labelPosition,
          tabbable: o.value.tabLabel,
          help: e.help
        }, null, 8, ["input-id", "label", "label-position", "tabbable", "help"]),
        e.help ? (N(), we(ht, {
          key: 0,
          text: e.help,
          position: e.helpPosition
        }, null, 8, ["text", "position"])) : ke("", !0),
        j(y(u), at(e.options, {
          modelValue: y(_),
          "onUpdate:modelValue": M[1] || (M[1] = (B) => he(_) ? _.value = B : null),
          ref_key: "inputComponent",
          ref: v
        }), null, 16, ["modelValue"])
      ], 64))
    ], 10, Bo));
  }
}, Go = {
  $style: Lo
}, se = /* @__PURE__ */ J(Ho, [["__cssModules", Go]]);
function Ct(e) {
  return { icon: $(() => {
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
const jo = "zoa__flash__main", Fo = "zoa__flash__container", Yo = "zoa__flash__header", Ko = "zoa__flash__icon", Zo = {
  main: jo,
  container: Fo,
  header: Yo,
  icon: Ko,
  "kind--info": "zoa__flash__kind--info",
  "kind--warning": "zoa__flash__kind--warning",
  "kind--error": "zoa__flash__kind--error",
  "kind--success": "zoa__flash__kind--success"
}, Xo = {
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
    const t = e, { icon: n } = Ct(t), { addPropClasses: l } = Ye(t);
    return (o, u) => (N(), w("div", {
      class: g(
        y(l)([o.$style.main, o.$style.container, o.$style[`kind--${e.kind}`]])
      )
    }, [
      C("div", {
        class: g(o.$style.header)
      }, [
        j(y(Me), {
          icon: ["fa-solid", y(n)],
          class: g(o.$style.icon)
        }, null, 8, ["icon", "class"]),
        C("h2", null, F(e.header), 1)
      ], 2),
      C("div", {
        class: g(o.$style.content)
      }, [
        Ve(o.$slots, "default", {}, () => [
          Oe(F(e.message), 1)
        ])
      ], 2)
    ], 2));
  }
}, qo = {
  $style: Zo
}, Jo = /* @__PURE__ */ J(Xo, [["__cssModules", qo]]), Qo = "zoa__modal__main", er = "zoa__modal__container", tr = "zoa__modal__header", lr = "zoa__modal__icon", nr = "zoa__modal__form", ar = "zoa__modal__close", or = "zoa__modal__content", rr = {
  main: Qo,
  container: er,
  header: tr,
  icon: lr,
  "kind--info": "zoa__modal__kind--info",
  "kind--warning": "zoa__modal__kind--warning",
  "kind--error": "zoa__modal__kind--error",
  "kind--success": "zoa__modal__kind--success",
  form: nr,
  close: ar,
  content: or
}, ur = {
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
    const n = e, { icon: l } = Ct(n), { addPropClasses: o } = Ye(n), u = A(null);
    function i() {
      u.value.show(), t("opened");
    }
    return (r, a) => (N(), w(Ie, null, [
      j(y(je), at(e.buttonArgs, { onClick: i }), null, 16),
      C("dialog", {
        ref_key: "modal",
        ref: u,
        class: g(y(o)([r.$style.main, r.$style[`kind--${e.kind}`]]))
      }, [
        C("div", {
          class: g(r.$style.container)
        }, [
          C("form", {
            method: "dialog",
            class: g(r.$style.form),
            onSubmit: a[0] || (a[0] = (c) => t("closed"))
          }, [
            C("button", {
              class: g(r.$style.close)
            }, [
              j(y(Me), { icon: "fa-solid fa-xmark" })
            ], 2)
          ], 34),
          C("div", {
            class: g(r.$style.header)
          }, [
            j(y(Me), {
              icon: ["fa-solid", y(l)],
              class: g(r.$style.icon)
            }, null, 8, ["icon", "class"]),
            C("h2", null, F(e.header), 1)
          ], 2),
          C("div", {
            class: g(r.$style.content)
          }, [
            Ve(r.$slots, "default", {}, () => [
              Oe(F(e.message), 1)
            ])
          ], 2)
        ], 2)
      ], 2)
    ], 64));
  }
}, sr = {
  $style: rr
}, ir = /* @__PURE__ */ J(ur, [["__cssModules", sr]]), cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ZoaButton: je,
  ZoaFlash: Jo,
  ZoaInput: se,
  ZoaModal: ir,
  ZoaToggleButton: Dl
}, Symbol.toStringTag, { value: "Module" })), dr = new RegExp("[A-Z]+(?![a-z])|[A-Z]", "g");
function pr(e) {
  return e.replace(dr, (t, n) => (n ? "-" : "") + t.toLowerCase());
}
const yr = {
  install(e, t) {
    Object.entries(cr).forEach((n) => {
      const l = pr(n[0]);
      e.component(l, n[1]);
    });
  }
};
export {
  Jo as F,
  ir as M,
  Dl as T,
  yr as Z,
  je as a,
  se as b,
  gt as d,
  Pn as g
};
