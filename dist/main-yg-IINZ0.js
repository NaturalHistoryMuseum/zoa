import { openBlock as A, createElementBlock as L, normalizeClass as z, unref as r, renderSlot as Ee, createTextVNode as Ve, toDisplayString as J, ref as T, computed as x, createElementVNode as D, Fragment as ze, renderList as Ce, withDirectives as de, isRef as ve, vModelRadio as Mt, getCurrentScope as Bt, onScopeDispose as qt, onMounted as Ct, nextTick as jt, getCurrentInstance as Vt, toValue as re, watch as Oe, reactive as bt, watchEffect as Nt, vModelCheckbox as Wt, isProxy as Ht, toRaw as Gt, createVNode as K, vShow as Ke, createCommentVNode as Se, inject as O, withKeys as Yt, withCtx as Ge, createBlock as Ae, vModelText as Le, vModelSelect as Kt, normalizeStyle as Fe, provide as Me, mergeProps as it } from "vue";
import { library as Jt } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as Ne } from "@fortawesome/vue-fontawesome";
import { faCaretDown as Xt, faCheck as Qt, faCircle as el, faCircleCheck as tl, faCircleExclamation as ll, faCircleInfo as nl, faCircleQuestion as al, faCircleXmark as ol, faXmark as ul } from "@fortawesome/free-solid-svg-icons";
function Ze(e) {
  function u(o) {
    return o = o || [], e.class && Array.isArray(e.class) ? o = o.concat(e.class) : e.class && o.push(e.class), o;
  }
  return { addPropClasses: u };
}
const sl = "zoa__zoabutton__main", rl = "zoa__zoabutton__checkbox", il = {
  main: sl,
  "kind--normal": "zoa__zoabutton__kind--normal",
  checkbox: rl,
  "kind--primary": "zoa__zoabutton__kind--primary",
  "kind--alt": "zoa__zoabutton__kind--alt",
  "size--sm": "zoa__zoabutton__size--sm",
  "size--md": "zoa__zoabutton__size--md"
}, ae = (e, u) => {
  const o = e.__vccOpts || e;
  for (const [l, m] of u)
    o[l] = m;
  return o;
}, dl = {
  __name: "ZoaButton",
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
    const u = e, { addPropClasses: o } = Ze(u);
    return (l, m) => (A(), L("button", {
      class: z(
        r(o)([
          l.$style.main,
          l.$style[`kind--${e.kind}`],
          l.$style[`size--${e.size}`]
        ])
      )
    }, [
      Ee(l.$slots, "default", {}, () => [
        Ve(J(e.label), 1)
      ])
    ], 2));
  }
}, cl = {
  $style: il
}, Ye = /* @__PURE__ */ ae(dl, [["__cssModules", cl]]), Re = (e, u = 1, o) => {
  u = Math.max(1, u);
  const l = Math.max(1 / 0, u);
  let m, b, h = 0, p = 0;
  const c = () => {
    const g = Date.now(), C = g - h, $ = g - p, w = C >= u || $ >= l;
    return [g, w];
  }, t = (g) => {
    if (p = g, !m)
      return;
    const C = m;
    m = void 0, e.apply(void 0, C);
  }, n = () => {
    _(0);
  }, a = () => {
    b && (n(), t(Date.now()));
  }, s = (g) => {
    p = g;
  }, d = (g) => {
    if (m)
      return t(g);
    m = void 0;
  }, v = () => {
    b = void 0;
    const [g, C] = c();
    return C ? d(g) : f(g);
  }, f = (g) => {
    const C = g - h, $ = g - p, w = u - C, q = l - $, k = Math.min(w, q);
    return _(k);
  }, _ = (g) => {
    b && clearTimeout(b), !(g <= 0) && (b = setTimeout(v, g));
  }, y = (...g) => {
    const [C, $] = c(), w = !!b;
    if (m = g, h = C, ($ || !b) && _(u), $)
      return w ? t(C) : s(C);
  };
  return y.cancel = n, y.flush = a, y;
};
function ce(e, u) {
  let o;
  try {
    o = parseInt(u.delay) || 0;
  } catch {
    o = 0;
  }
  const l = T(null);
  function m(a) {
    e("change", a);
  }
  function b(a) {
    e("update:modelValue", a), l.value = a;
  }
  const h = Re(m, o), p = Re(b, o);
  function c(a) {
    p(a), h(a);
  }
  const t = x({
    get() {
      return u.modelValue === void 0 ? l.value : u.modelValue;
    },
    set(a) {
      c(a);
    }
  });
  function n(a, ...s) {
    e(a, ...s), e("zoaEvent", a, ...s);
  }
  return { emitChange: h, valueChanged: c, value: t, zoaEvent: n };
}
const pl = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let fl = (e = 21) => {
  let u = "", o = crypto.getRandomValues(new Uint8Array(e |= 0));
  for (; e--; )
    u += pl[o[e] & 63];
  return u;
};
function ct() {
  const e = T(fl(6));
  function u(o) {
    return `${e.value}__${o}`;
  }
  return { componentId: e, subId: u };
}
const ml = "zoa__zoatabs__input", vl = "zoa__zoatabs__inputWrapper", bl = "zoa__zoatabs__tab", yl = "zoa__zoatabs__tabContainer", hl = {
  input: ml,
  inputWrapper: vl,
  tab: bl,
  "state--active": "zoa__zoatabs__state--active",
  "orient--left": "zoa__zoatabs__orient--left",
  "orient--right": "zoa__zoatabs__orient--right",
  "orient--above": "zoa__zoatabs__orient--above",
  "orient--below": "zoa__zoatabs__orient--below",
  "kind--normal": "zoa__zoatabs__kind--normal",
  "kind--primary": "zoa__zoatabs__kind--primary",
  "kind--alt": "zoa__zoatabs__kind--alt",
  "size--sm": "zoa__zoatabs__size--sm",
  "size--md": "zoa__zoatabs__size--md",
  tabContainer: yl
}, _l = ["id"], gl = ["value"], zl = {
  __name: "ZoaTabs",
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
      type: Array,
      default: () => []
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
  setup(e, { emit: u }) {
    const o = e, { componentId: l } = ct(), { addPropClasses: m } = Ze(o), b = u, { value: h } = ce(b, o), p = x(() => {
      let c = [];
      return o.options.forEach((t) => {
        typeof t == "object" ? c.push({
          label: t.label || t.value,
          value: t.value || t.label,
          order: t.order == null ? null : t.order
        }) : c.push({ label: t, value: t });
      }), c.sort((t, n) => {
        let a = 0;
        (t.order != null || n.order != null) && (a = t.order != null && n.order != null ? t.order - n.order : t.order != null ? -1 : 1);
        let s = t.label.localeCompare(n.label);
        return a !== 0 ? a : s;
      }), c;
    });
    return h.value == null && (o.initialValue && p.value.some((c) => c.value === o.initialValue) ? h.value = o.initialValue : h.value = p.value[0].value), (c, t) => (A(), L("div", {
      id: r(l),
      class: z(r(m)([]))
    }, [
      D("ul", {
        class: z([c.$style.tabContainer, c.$style[`orient--${e.activePosition}`]])
      }, [
        (A(!0), L(ze, null, Ce(p.value, (n) => (A(), L("li", {
          key: n.value
        }, [
          D("label", {
            class: z([
              c.$style.tab,
              c.$style[`orient--${e.activePosition}`],
              c.$style[`kind--${e.kind}`],
              c.$style[`size--${e.size}`],
              c.$style[`state--${r(h) === n.value ? "active" : "inactive"}`]
            ]),
            tabindex: "0"
          }, [
            de(D("input", {
              "onUpdate:modelValue": t[0] || (t[0] = (a) => ve(h) ? h.value = a : null),
              type: "radio",
              value: n.value
            }, null, 8, gl), [
              [Mt, r(h)]
            ]),
            D("span", null, J(n.label), 1)
          ], 2)
        ]))), 128))
      ], 2)
    ], 10, _l));
  }
}, $l = {
  $style: hl
}, kl = /* @__PURE__ */ ae(zl, [["__cssModules", $l]]);
function pt(e) {
  return Bt() ? (qt(e), !0) : !1;
}
const Et = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Sl = (e) => e != null, Il = Object.prototype.toString, wl = (e) => Il.call(e) === "[object Object]", Ie = () => {
}, xl = /* @__PURE__ */ Ml();
function Ml() {
  var e, u;
  return Et && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((u = window == null ? void 0 : window.navigator) == null ? void 0 : u.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function At(e, u) {
  function o(...l) {
    return new Promise((m, b) => {
      Promise.resolve(e(() => u.apply(this, l), { fn: u, thisArg: this, args: l })).then(m).catch(b);
    });
  }
  return o;
}
function Cl(e, u = {}) {
  let o, l, m = Ie;
  const b = (p) => {
    clearTimeout(p), m(), m = Ie;
  };
  return (p) => {
    const c = re(e), t = re(u.maxWait);
    return o && b(o), c <= 0 || t !== void 0 && t <= 0 ? (l && (b(l), l = null), Promise.resolve(p())) : new Promise((n, a) => {
      m = u.rejectOnCancel ? a : n, t && !l && (l = setTimeout(() => {
        o && b(o), l = null, n(p());
      }, t)), o = setTimeout(() => {
        l && b(l), l = null, n(p());
      }, c);
    });
  };
}
function Vl(...e) {
  let u = 0, o, l = !0, m = Ie, b, h, p, c, t;
  !ve(e[0]) && typeof e[0] == "object" ? { delay: h, trailing: p = !0, leading: c = !0, rejectOnCancel: t = !1 } = e[0] : [h, p = !0, c = !0, t = !1] = e;
  const n = () => {
    o && (clearTimeout(o), o = void 0, m(), m = Ie);
  };
  return (s) => {
    const d = re(h), v = Date.now() - u, f = () => b = s();
    return n(), d <= 0 ? (u = Date.now(), f()) : (v > d && (c || !l) ? (u = Date.now(), f()) : p && (b = new Promise((_, y) => {
      m = t ? y : _, o = setTimeout(() => {
        u = Date.now(), l = !0, _(f()), n();
      }, Math.max(0, d - v));
    })), !c && !o && (o = setTimeout(() => l = !0, d)), l = !1, b);
  };
}
function Nl(e) {
  return Vt();
}
function dt(e) {
  return Array.isArray(e) ? e : [e];
}
function Wl(e, u = 200, o = {}) {
  return At(
    Cl(u, o),
    e
  );
}
function El(e, u = 200, o = !1, l = !0, m = !1) {
  return At(
    Vl(u, o, l, m),
    e
  );
}
function Al(e, u = !0, o) {
  Nl() ? Ct(e, o) : u ? e() : jt(e);
}
const We = Et ? window : void 0;
function $e(e) {
  var u;
  const o = re(e);
  return (u = o == null ? void 0 : o.$el) != null ? u : o;
}
function me(...e) {
  let u, o, l, m;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([o, l, m] = e, u = We) : [u, o, l, m] = e, !u)
    return Ie;
  o = dt(o), l = dt(l);
  const b = [], h = () => {
    b.forEach((n) => n()), b.length = 0;
  }, p = (n, a, s, d) => (n.addEventListener(a, s, d), () => n.removeEventListener(a, s, d)), c = Oe(
    () => [$e(u), re(m)],
    ([n, a]) => {
      if (h(), !n)
        return;
      const s = wl(a) ? { ...a } : a;
      b.push(
        ...o.flatMap((d) => l.map((v) => p(n, d, v, s)))
      );
    },
    { immediate: !0, flush: "post" }
  ), t = () => {
    c(), h();
  };
  return pt(t), t;
}
let yt = !1;
function Qe(e, u, o = {}) {
  const { window: l = We, ignore: m = [], capture: b = !0, detectIframe: h = !1 } = o;
  if (!l)
    return Ie;
  xl && !yt && (yt = !0, Array.from(l.document.body.children).forEach((f) => f.addEventListener("click", Ie)), l.document.documentElement.addEventListener("click", Ie));
  let p = !0;
  const c = (f) => re(m).some((_) => {
    if (typeof _ == "string")
      return Array.from(l.document.querySelectorAll(_)).some((y) => y === f.target || f.composedPath().includes(y));
    {
      const y = $e(_);
      return y && (f.target === y || f.composedPath().includes(y));
    }
  });
  function t(f) {
    const _ = re(f);
    return _ && _.$.subTree.shapeFlag === 16;
  }
  function n(f, _) {
    const y = re(f), g = y.$.subTree && y.$.subTree.children;
    return g == null || !Array.isArray(g) ? !1 : g.some((C) => C.el === _.target || _.composedPath().includes(C.el));
  }
  const a = (f) => {
    const _ = $e(e);
    if (f.target != null && !(!(_ instanceof Element) && t(e) && n(e, f)) && !(!_ || _ === f.target || f.composedPath().includes(_))) {
      if (f.detail === 0 && (p = !c(f)), !p) {
        p = !0;
        return;
      }
      u(f);
    }
  };
  let s = !1;
  const d = [
    me(l, "click", (f) => {
      s || (s = !0, setTimeout(() => {
        s = !1;
      }, 0), a(f));
    }, { passive: !0, capture: b }),
    me(l, "pointerdown", (f) => {
      const _ = $e(e);
      p = !c(f) && !!(_ && !f.composedPath().includes(_));
    }, { passive: !0 }),
    h && me(l, "blur", (f) => {
      setTimeout(() => {
        var _;
        const y = $e(e);
        ((_ = l.document.activeElement) == null ? void 0 : _.tagName) === "IFRAME" && !(y != null && y.contains(l.document.activeElement)) && u(f);
      }, 0);
    })
  ].filter(Boolean);
  return () => d.forEach((f) => f());
}
function Tl() {
  const e = T(!1), u = Vt();
  return u && Ct(() => {
    e.value = !0;
  }, u), e;
}
function Pl(e) {
  const u = Tl();
  return x(() => (u.value, !!e()));
}
function Ol(e, u, o = {}) {
  const { window: l = We, ...m } = o;
  let b;
  const h = Pl(() => l && "MutationObserver" in l), p = () => {
    b && (b.disconnect(), b = void 0);
  }, c = x(() => {
    const s = re(e), d = dt(s).map($e).filter(Sl);
    return new Set(d);
  }), t = Oe(
    () => c.value,
    (s) => {
      p(), h.value && s.size && (b = new MutationObserver(u), s.forEach((d) => b.observe(d, m)));
    },
    { immediate: !0, flush: "post" }
  ), n = () => b == null ? void 0 : b.takeRecords(), a = () => {
    t(), p();
  };
  return pt(a), {
    isSupported: h,
    stop: a,
    takeRecords: n
  };
}
function Tt(e, u, o = {}) {
  const {
    window: l = We,
    document: m = l == null ? void 0 : l.document,
    flush: b = "sync"
  } = o;
  if (!l || !m)
    return Ie;
  let h;
  const p = (n) => {
    h == null || h(), h = n;
  }, c = Nt(() => {
    const n = $e(e);
    if (n) {
      const { stop: a } = Ol(
        m,
        (s) => {
          s.map((v) => [...v.removedNodes]).flat().some((v) => v === n || v.contains(n)) && u(s);
        },
        {
          window: l,
          childList: !0,
          subtree: !0
        }
      );
      p(a);
    }
  }, { flush: b }), t = () => {
    c(), p();
  };
  return pt(t), t;
}
function Ll(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (u) => u.key === e : Array.isArray(e) ? (u) => e.includes(u.key) : () => !0;
}
function ee(...e) {
  let u, o, l = {};
  e.length === 3 ? (u = e[0], o = e[1], l = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (u = !0, o = e[0], l = e[1]) : (u = e[0], o = e[1]) : (u = !0, o = e[0]);
  const {
    target: m = We,
    eventName: b = "keydown",
    passive: h = !1,
    dedupe: p = !1
  } = l, c = Ll(u);
  return me(m, b, (n) => {
    n.repeat && re(p) || c(n) && o(n);
  }, h);
}
function Dl(e = {}) {
  var u;
  const {
    window: o = We,
    deep: l = !0,
    triggerOnRemoval: m = !1
  } = e, b = (u = e.document) != null ? u : o == null ? void 0 : o.document, h = () => {
    var t;
    let n = b == null ? void 0 : b.activeElement;
    if (l)
      for (; n != null && n.shadowRoot; )
        n = (t = n == null ? void 0 : n.shadowRoot) == null ? void 0 : t.activeElement;
    return n;
  }, p = T(), c = () => {
    p.value = h();
  };
  return o && (me(o, "blur", (t) => {
    t.relatedTarget === null && c();
  }, !0), me(o, "focus", c, !0)), m && Tt(p, c, { document: b }), c(), p;
}
function Ul(e, u = {}) {
  const {
    delayEnter: o = 0,
    delayLeave: l = 0,
    triggerOnRemoval: m = !1,
    window: b = We
  } = u, h = T(!1);
  let p;
  const c = (t) => {
    const n = t ? o : l;
    p && (clearTimeout(p), p = void 0), n ? p = setTimeout(() => h.value = t, n) : h.value = t;
  };
  return b && (me(e, "mouseenter", () => c(!0), { passive: !0 }), me(e, "mouseleave", () => c(!1), { passive: !0 }), m && Tt(
    x(() => $e(e)),
    () => c(!1)
  )), h;
}
function Pe(e, u = {}) {
  const { initialValue: o = !1, focusVisible: l = !1, preventScroll: m = !1 } = u, b = T(!1), h = x(() => $e(e));
  me(h, "focus", (c) => {
    var t, n;
    (!l || (n = (t = c.target).matches) != null && n.call(t, ":focus-visible")) && (b.value = !0);
  }), me(h, "blur", () => b.value = !1);
  const p = x({
    get: () => b.value,
    set(c) {
      var t, n;
      !c && b.value ? (t = h.value) == null || t.blur() : c && !b.value && ((n = h.value) == null || n.focus({ preventScroll: m }));
    }
  });
  return Oe(
    h,
    () => {
      p.value = o;
    },
    { immediate: !0, flush: "post" }
  ), { focused: p };
}
const Fl = "focusin", Rl = "focusout", Zl = ":focus-within";
function ke(e, u = {}) {
  const { window: o = We } = u, l = x(() => $e(e)), m = T(!1), b = x(() => m.value), h = Dl(u);
  return !o || !h.value ? { focused: b } : (me(l, Fl, () => m.value = !0), me(l, Rl, () => {
    var p, c, t;
    return m.value = (t = (c = (p = l.value) == null ? void 0 : p.matches) == null ? void 0 : c.call(p, Zl)) != null ? t : !1;
  }), { focused: b });
}
const ht = 1;
function Pt(e, u = {}) {
  const {
    throttle: o = 0,
    idle: l = 200,
    onStop: m = Ie,
    onScroll: b = Ie,
    offset: h = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions: p = {
      capture: !1,
      passive: !0
    },
    behavior: c = "auto",
    window: t = We,
    onError: n = (k) => {
      console.error(k);
    }
  } = u, a = T(0), s = T(0), d = x({
    get() {
      return a.value;
    },
    set(k) {
      f(k, void 0);
    }
  }), v = x({
    get() {
      return s.value;
    },
    set(k) {
      f(void 0, k);
    }
  });
  function f(k, R) {
    var S, U, P, G;
    if (!t)
      return;
    const Y = re(e);
    if (!Y)
      return;
    (P = Y instanceof Document ? t.document.body : Y) == null || P.scrollTo({
      top: (S = re(R)) != null ? S : v.value,
      left: (U = re(k)) != null ? U : d.value,
      behavior: re(c)
    });
    const ne = ((G = Y == null ? void 0 : Y.document) == null ? void 0 : G.documentElement) || (Y == null ? void 0 : Y.documentElement) || Y;
    d != null && (a.value = ne.scrollLeft), v != null && (s.value = ne.scrollTop);
  }
  const _ = T(!1), y = bt({
    left: !0,
    right: !1,
    top: !0,
    bottom: !1
  }), g = bt({
    left: !1,
    right: !1,
    top: !1,
    bottom: !1
  }), C = (k) => {
    _.value && (_.value = !1, g.left = !1, g.right = !1, g.top = !1, g.bottom = !1, m(k));
  }, $ = Wl(C, o + l), w = (k) => {
    var R;
    if (!t)
      return;
    const S = ((R = k == null ? void 0 : k.document) == null ? void 0 : R.documentElement) || (k == null ? void 0 : k.documentElement) || $e(k), { display: U, flexDirection: P, direction: G } = getComputedStyle(S), Y = G === "rtl" ? -1 : 1, ne = S.scrollLeft;
    g.left = ne < a.value, g.right = ne > a.value;
    const X = ne * Y <= (h.left || 0), be = ne * Y + S.clientWidth >= S.scrollWidth - (h.right || 0) - ht;
    U === "flex" && P === "row-reverse" ? (y.left = be, y.right = X) : (y.left = X, y.right = be), a.value = ne;
    let W = S.scrollTop;
    k === t.document && !W && (W = t.document.body.scrollTop), g.top = W < s.value, g.bottom = W > s.value;
    const j = W <= (h.top || 0), F = W + S.clientHeight >= S.scrollHeight - (h.bottom || 0) - ht;
    U === "flex" && P === "column-reverse" ? (y.top = F, y.bottom = j) : (y.top = j, y.bottom = F), s.value = W;
  }, q = (k) => {
    var R;
    if (!t)
      return;
    const S = (R = k.target.documentElement) != null ? R : k.target;
    w(S), _.value = !0, $(k), b(k);
  };
  return me(
    e,
    "scroll",
    o ? El(q, o, !0, !1) : q,
    p
  ), Al(() => {
    try {
      const k = re(e);
      if (!k)
        return;
      w(k);
    } catch (k) {
      n(k);
    }
  }), me(
    e,
    "scrollend",
    C,
    p
  ), {
    x: d,
    y: v,
    isScrolling: _,
    arrivedState: y,
    directions: g,
    measure() {
      const k = re(e);
      t && k && w(k);
    }
  };
}
const Bl = "zoa__zoatogglebutton__input", ql = "zoa__zoatogglebutton__inputWrapper", jl = "zoa__zoatogglebutton__container", Hl = "zoa__zoatogglebutton__main", Gl = "zoa__zoatogglebutton__checkbox", Yl = {
  input: Bl,
  inputWrapper: ql,
  container: jl,
  main: Hl,
  "kind--normal": "zoa__zoatogglebutton__kind--normal",
  checkbox: Gl,
  "kind--primary": "zoa__zoatogglebutton__kind--primary",
  "kind--alt": "zoa__zoatogglebutton__kind--alt",
  "size--sm": "zoa__zoatogglebutton__size--sm",
  "size--md": "zoa__zoatogglebutton__size--md"
}, Kl = ["id", "for"], Jl = ["id", "name", "value"], Xl = {
  __name: "ZoaToggleButton",
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
  setup(e, { emit: u }) {
    const o = e, { componentId: l, subId: m } = ct(), { addPropClasses: b } = Ze(o), h = u, { value: p } = ce(h, o), c = T(null), t = T(null), n = ke(c), a = x(() => o.checkValue || o.label);
    function s() {
      let d = Ht(p.value) ? Gt(p.value) : p.value;
      if (Array.isArray(d)) {
        let v = !t.value.checked;
        d = d.filter((f) => f !== a.value), v && d.push(a.value), p.value = d, t.value.checked = v;
      } else
        p.value = !p.value;
    }
    return ee(" ", () => {
      n.focused.value && s();
    }), ee("Enter", () => {
      n.focused.value && s();
    }), (d, v) => (A(), L("label", {
      id: r(l),
      ref_key: "checkboxContainer",
      ref: c,
      class: z(r(b)([d.$style.container])),
      for: r(m)("toggle"),
      tabindex: "0"
    }, [
      de(D("input", {
        id: r(m)("toggle"),
        ref_key: "checkboxInput",
        ref: t,
        "onUpdate:modelValue": v[0] || (v[0] = (f) => ve(p) ? p.value = f : null),
        class: z(d.$style.checkbox),
        name: e.name,
        type: "checkbox",
        value: a.value
      }, null, 10, Jl), [
        [Wt, r(p)]
      ]),
      D("span", {
        class: z([d.$style.main, d.$style[`kind--${e.kind}`], d.$style[`size--${e.size}`]])
      }, [
        Ee(d.$slots, "default", {}, () => [
          Ve(J(e.label), 1)
        ])
      ], 2)
    ], 10, Kl));
  }
}, Ql = {
  $style: Yl
}, en = /* @__PURE__ */ ae(Xl, [["__cssModules", Ql]]);
Jt.add(
  Xt,
  Qt,
  el,
  tl,
  ll,
  nl,
  al,
  ol,
  ul
);
const tn = "zoa__zoainputhelp__main", ln = "zoa__zoainputhelp__icon", nn = "zoa__zoainputhelp__popup", an = {
  main: tn,
  "main--above": "zoa__zoainputhelp__main--above",
  "main--below": "zoa__zoainputhelp__main--below",
  icon: ln,
  popup: nn,
  "popup--right": "zoa__zoainputhelp__popup--right"
}, on = ["id"], un = {
  __name: "ZoaInputHelp",
  props: {
    text: {
      type: String,
      default: null
    },
    position: {
      type: String,
      default: "right"
    },
    helpId: {
      type: String,
      default: null
    },
    labelPosition: {
      type: String,
      default: "above"
    }
  },
  setup(e) {
    const u = T(!1), o = T(null), l = Ul(o, { delayEnter: 500 });
    return Oe(l, () => {
      u.value = l.value;
    }), ee("Escape", () => u.value = !1), (m, b) => (A(), L("div", {
      ref_key: "helpContainer",
      ref: o,
      class: z([m.$style.main, m.$style[`main--${e.labelPosition}`]])
    }, [
      K(r(Ne), {
        class: z(m.$style.icon),
        icon: ["fa-solid", "fa-circle-question"]
      }, null, 8, ["class"]),
      de(D("div", {
        id: e.helpId,
        class: z([m.$style.popup, m.$style[`popup--${e.position}`]]),
        role: "tooltip"
      }, [
        Ee(m.$slots, "default", {}, () => [
          Ve(J(e.text), 1)
        ])
      ], 10, on), [
        [Ke, u.value]
      ])
    ], 2));
  }
}, sn = {
  $style: an
}, _t = /* @__PURE__ */ ae(un, [["__cssModules", sn]]), rn = "zoa__zoainputlabel__main", dn = {
  main: rn,
  "main--right": "zoa__zoainputlabel__main--right",
  "main--left": "zoa__zoainputlabel__main--left",
  "main--above": "zoa__zoainputlabel__main--above",
  "main--below": "zoa__zoainputlabel__main--below",
  "main--none": "zoa__zoainputlabel__main--none"
}, cn = ["id", "for", "tabindex"], pn = ["id"], fn = {
  __name: "ZoaInputLabel",
  props: {
    label: {
      type: String,
      default: null
    },
    labelPosition: {
      type: String,
      default: "above"
    },
    inputId: {
      type: String,
      default: null
    },
    labelId: {
      type: String,
      default: null
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
    return (u, o) => e.label && !e.legend ? (A(), L("label", {
      key: 0,
      id: e.labelId,
      class: z([u.$style.main, u.$style[`main--${e.labelPosition}`]]),
      for: e.inputId,
      tabindex: e.tabbable ? 0 : -1
    }, J(e.label), 11, cn)) : e.label ? (A(), L("legend", {
      key: 1,
      id: e.labelId,
      class: z([u.$style.main, u.$style[`main--${e.labelPosition}`]])
    }, J(e.label), 11, pn)) : Se("", !0);
  }
}, mn = {
  $style: dn
}, gt = /* @__PURE__ */ ae(fn, [["__cssModules", mn]]), vn = "zoa__zoacheckbox__input", bn = "zoa__zoacheckbox__inputWrapper", yn = "zoa__zoacheckbox__defaultCheckbox", hn = "zoa__zoacheckbox__checkbox", _n = "zoa__zoacheckbox__check", gn = "zoa__zoacheckbox__disabled", zn = {
  input: vn,
  inputWrapper: bn,
  defaultCheckbox: yn,
  checkbox: hn,
  check: _n,
  disabled: gn
}, $n = ["aria-describedby", "aria-labelledby"], kn = ["id", "disabled", "name", "value"], Sn = {
  __name: "ZoaCheckbox",
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
  setup(e, { expose: u, emit: o }) {
    const l = e, m = O("inputId"), b = O("labelId"), h = O("helpId"), p = O("disabled"), c = o, { value: t, valueChanged: n } = ce(c, l), a = O("rootContainer"), s = T(null), d = ke(a);
    u({
      target: s
    });
    const v = O("label"), f = x(() => l.checkValue || v.value), _ = x({
      get() {
        return l.name ? t.value || [] : t.value || !1;
      },
      set(g) {
        n(g);
      }
    });
    function y() {
      if (!p.value)
        if (l.name) {
          let g = !_.value.includes(f.value), C = _.value.filter(($) => $ !== f.value);
          g && C.push(f.value), _.value = C;
        } else
          _.value = !_.value;
    }
    return ee(" ", () => {
      d.focused.value && y();
    }), (g, C) => (A(), L("div", {
      "aria-describedby": r(h),
      "aria-labelledby": r(b),
      class: z([g.$style.inputWrapper, r(p) ? g.$style.disabled : ""])
    }, [
      de(D("input", {
        id: r(m),
        ref_key: "checkboxInput",
        ref: s,
        "onUpdate:modelValue": C[0] || (C[0] = ($) => _.value = $),
        class: z(g.$style.defaultCheckbox),
        disabled: r(p),
        name: e.name ? e.name : null,
        type: "checkbox",
        value: f.value
      }, null, 10, kn), [
        [Wt, _.value]
      ]),
      D("span", {
        class: z(g.$style.checkbox),
        onClick: y
      }, [
        K(r(Ne), {
          class: z(g.$style.check),
          icon: "fa-solid fa-check"
        }, null, 8, ["class"])
      ], 2)
    ], 10, $n));
  }
}, In = {
  $style: zn
}, wn = /* @__PURE__ */ ae(Sn, [["__cssModules", In]]);
function xn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var at, zt;
function Mn() {
  return zt || (zt = 1, at = {
    __locale: "en",
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    abbreviated_days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    abbreviated_months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    am: "AM",
    pm: "PM"
  }), at;
}
var ot, $t;
function Cn() {
  return $t || ($t = 1, ot = Mn()), ot;
}
var Vn = Cn();
const kt = /* @__PURE__ */ xn(Vn), Nn = "zoa__zoadateambiguous__input", Wn = "zoa__zoadateambiguous__inputWrapper", En = "zoa__zoadateambiguous__disabled", An = "zoa__zoadateambiguous__datePopup", Tn = "zoa__zoadateambiguous__popupSection", Pn = "zoa__zoadateambiguous__yearGrid", On = "zoa__zoadateambiguous__monthGrid", Ln = "zoa__zoadateambiguous__dayGrid", Dn = "zoa__zoadateambiguous__editing", Un = "zoa__zoadateambiguous__suggestion", Fn = "zoa__zoadateambiguous__dateRange", Rn = "zoa__zoadateambiguous__yearParts", Zn = {
  input: Nn,
  inputWrapper: Wn,
  disabled: En,
  datePopup: An,
  popupSection: Tn,
  yearGrid: Pn,
  monthGrid: On,
  dayGrid: Ln,
  editing: Dn,
  suggestion: Un,
  dateRange: Fn,
  yearParts: Rn
}, Bn = ["aria-describedby", "aria-labelledby"], qn = ["id", "disabled", "placeholder"], jn = ["onClick", "onKeydown"], Hn = {
  __name: "ZoaDateAmbiguous",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: Object,
      default: () => ({
        year: null,
        month: null,
        day: null,
        earliest: null,
        latest: null
      })
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
  setup(e, { expose: u, emit: o }) {
    const l = () => import("./dates-Bz0VhvC8.js"), m = e, b = O("inputId"), h = O("labelId"), p = O("helpId"), c = O("disabled"), t = o, { valueChanged: n } = ce(t, m.delay), a = x(() => {
      let i;
      try {
        i = new Date(
          m.min === "today" ? Date.now() : Date.parse(m.min || "0000-01-01")
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
    }), s = x(() => {
      let i;
      try {
        i = new Date(
          m.max === "today" ? Date.now() : Date.parse(m.max || "9999-12-31")
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
    }), d = T(null), v = O("rootContainer"), f = T(null), _ = T(null), y = T(null), g = T(null), C = T(null), $ = T(null), w = T(null), q = T(!1), { focused: k } = ke(v);
    u({
      target: d
    });
    const R = Pe(f), S = ke(f), U = Pe(_), P = ke(_), G = Pe(y), Y = ke(y), ne = x(() => {
      let i;
      return R.focused.value ? i = f.value : U.focused.value ? i = _.value : G.focused.value && (i = y.value), i;
    }), X = x(() => {
      let i;
      return S.focused.value ? i = f.value : P.focused.value ? i = _.value : Y.focused.value && (i = y.value), i;
    });
    ee("Enter", () => {
      ne.value && ne.value.children[0].focus();
    }), ee("ArrowLeft", () => {
      if (!X.value)
        return;
      const i = X.value.querySelector("button:focus");
      !i || !i.previousElementSibling ? X.value.children[X.value.children.length - 1].focus() : i.previousElementSibling.focus();
    }), ee("ArrowRight", () => {
      if (!X.value)
        return;
      const i = X.value.querySelector("button:focus");
      !i || !i.nextElementSibling ? X.value.children[0].focus() : i.nextElementSibling.focus();
    }), ee("Escape", () => {
      const i = v.value.querySelector("*:focus");
      i && i.blur();
    });
    function be(i, N, I) {
      i.value && (i.value.target.onkeyup = (Z) => {
        /^[0-9]$/.test(Z.key) && N ? N.value.focus() : Z.key === "Backspace" && I && I.value.focus();
      });
    }
    Nt(() => {
      be(g, C, null), be(C, $, g), be($, w, C), be(w, null, $);
    });
    const W = x(() => ({
      year: ue.value,
      month: ge.value,
      day: _e.value,
      earliest: `${F.value.lower.year.toString().padStart(4, "0")}-${F.value.lower.month.toString().padStart(2, "0")}-${F.value.lower.day.toString().padStart(2, "0")}`,
      latest: `${F.value.upper.year.toString().padStart(4, "0")}-${F.value.upper.month.toString().padStart(2, "0")}-${F.value.upper.day.toString().padStart(2, "0")}`
    })), j = x(() => nt(
      W.value.year,
      W.value.month,
      W.value.day
    )), F = x(() => {
      let i, N;
      if (!Te.value)
        i = a.value.year, N = s.value.year;
      else {
        const we = 10 ** (4 - (Math.max(
          ...pe.map((Rt, Zt) => isNaN(parseInt(H.value[Rt])) ? -1 : Zt)
        ) + 1)), he = qe(H.value, 4), He = Math.floor(a.value.year / we) * we, vt = Math.floor(s.value.year / we) * we;
        he < He || he > vt ? (i = a.value.year, N = s.value.year) : he === He ? (i = a.value.year, N = he + we - 1) : he === vt ? (i = he, N = s.value.year) : (i = he, N = he + we - 1);
      }
      const I = i === a.value.year, Z = N === s.value.year, oe = I ? Math.max(a.value.month, xe.value || 1) : xe.value || 1, se = Z ? Math.min(s.value.month, xe.value || 12) : xe.value || 12, ye = oe === a.value.month, le = se === s.value.month;
      let Q = Ue.value || 1, ie = Ue.value || je(se);
      return Q = I && ye ? Math.max(Q, a.value.day) : Q, ie = Z && le ? Math.min(ie, s.value.day) : ie, i === N && oe === se && (Z && le && Q > ie && (Q = 1), I && ye && ie < Q && (ie = je(se))), {
        lower: {
          year: i,
          month: oe,
          day: Q,
          isMinYear: I,
          isMinMonth: ye
        },
        upper: {
          year: N,
          month: se,
          day: ie,
          isMaxYear: Z,
          isMaxMonth: le
        }
      };
    });
    function M(i, N, I) {
      const Z = isNaN(parseInt(i)), oe = isNaN(parseInt(N)), se = isNaN(parseInt(I)), ye = oe || N <= 12 && N >= 1, le = se || I <= je(N);
      if (Z || i > F.value.lower.year && i < F.value.upper.year)
        return {
          year: !0,
          month: ye,
          day: le
        };
      if (i < F.value.lower.year || i > F.value.upper.year)
        return {
          year: !1,
          month: ye,
          day: le
        };
      let Q = ye, ie = le;
      return i === F.value.lower.year && (Q = Q && (oe || N >= F.value.lower.month), N === F.value.lower.month && (ie = ie && (se || I >= F.value.lower.day))), i === F.value.upper.year && (Q = Q && (oe || N <= F.value.upper.month), N === F.value.upper.month && (ie = ie && (se || I <= F.value.upper.day))), {
        year: !0,
        month: Q,
        day: ie
      };
    }
    function V() {
      d.value.value = j.value, q.value = !1;
    }
    const E = T([]);
    function B(i) {
      q.value = !0, l().then((N) => {
        E.value = N.parseDate(i.target.value);
      });
    }
    const te = Re(B, 200);
    function De(i) {
      H.value = tt(i.year), ge.value = i.month, _e.value = i.day, E.value = [];
    }
    const ue = x(() => {
      if (!Te.value)
        return null;
      const i = qe(H.value, 4);
      return M(i, ge.value, _e.value).year ? i : null;
    }), H = T({
      millenium: null,
      century: null,
      decade: null,
      year: null
    }), pe = ["millenium", "century", "decade", "year"], Te = x(() => Object.values(H.value).some((i) => !isNaN(parseInt(i)))), Be = x(() => {
      const i = tt(F.value.lower.year), N = {
        millenium: null,
        century: null,
        decade: null,
        year: null
      };
      if (a.value.year === s.value.year && isNaN(parseInt(H.value.year)))
        return [i];
      if (F.value.lower.year === F.value.upper.year)
        return [N];
      const I = tt(F.value.upper.year);
      let Z, oe = { ...N };
      if (Te.value)
        Z = Math.max(
          ...pe.map((le, Q) => (oe[le] = H.value[le], isNaN(parseInt(H.value[le])) ? -1 : Q))
        ) + 1;
      else
        for (let le = 0; le < pe.length; le++) {
          let Q = pe[le];
          if (i[Q] === I[Q])
            oe[Q] = i[Q];
          else if (Z == null) {
            Z = le;
            break;
          }
        }
      function se(le) {
        let Q = pe[le];
        const ie = qe(i, le + 1), mt = qe(I, le + 1);
        return Array(10).fill(0).map((we, he) => {
          let He = { ...oe };
          return He[Q] = we + he, He;
        }).filter((we) => {
          const he = qe(we, le + 1);
          return he >= ie && he <= mt;
        });
      }
      let ye = se(Z);
      return ye.length === 1 && Z < 3 && (oe = { ...ye[0] }, ye = se(Z + 1)), Te.value && ye.push(N), ye;
    }), et = x(() => ue.value % 100 === 0 ? ue.value % 400 === 0 : ue.value % 4 === 0);
    function Lt(i) {
      return Object.values(i).every((N) => N == null) ? "clear" : pe.map((N) => i[N] || 0).join("");
    }
    function qe(i, N) {
      return pe.slice(0, N).reduce((I, Z, oe) => {
        let se = i[Z] || 0;
        return I + se * 10 ** (3 - oe);
      }, 0);
    }
    function tt(i) {
      return {
        millenium: Math.floor(i / 1e3),
        century: Math.floor(i % 1e3 / 100),
        decade: Math.floor(i % 100 / 10),
        year: Math.floor(i % 10)
      };
    }
    function Dt(i) {
      if (H.value = i, Math.max(
        ...pe.map(
          (I, Z) => isNaN(parseInt(H.value[I])) ? -1 : Z
        )
      ) === 3) {
        let I = M(ue.value, ge.value, _e.value);
        (!I.month || !I.day) && (ge.value = null, _e.value = null);
      }
    }
    const xe = T(null), ge = x({
      get() {
        return M(ue.value, xe.value, _e.value).month ? xe.value : null;
      },
      set(i) {
        xe.value = isNaN(parseInt(i)) ? null : i, _e.value && _e.value > lt.value && (_e.value = lt.value);
      }
    }), Ut = x(() => {
      let i = kt.abbreviated_months.map((I, Z) => [I, Z + 1]);
      const N = ue.value ? ue.value : a.value.year === s.value.year ? a.value.year : null;
      if (N === a.value.year && (i = i.slice(a.value.month - 1, i.length)), N === s.value.year) {
        const I = 12 - i.length;
        i = i.slice(0, s.value.month - I);
      }
      return xe.value && i.push(["clear", null]), i;
    }), lt = x(() => je(ge.value));
    function je(i) {
      return [4, 6, 9, 11].includes(i) ? 30 : i === 2 ? et.value ? 29 : 28 : 31;
    }
    const Ue = T(null), _e = x({
      get() {
        const i = M(ue.value, xe.value, Ue.value);
        return i.month && i.day ? Ue.value : null;
      },
      set(i) {
        Ue.value = isNaN(parseInt(i)) ? null : i;
      }
    }), Ft = x(() => {
      const i = ue.value ? ue.value : a.value.year === s.value.year ? a.value.year : null, N = ge.value ? ge.value : a.value.year === s.value.year && a.value.month === s.value.month ? a.value.month : null, I = je(N);
      let Z = Array(I).fill(1).map((oe, se) => se + 1);
      if (i === a.value.year && !isNaN(parseInt(N)) && N <= a.value.month && (Z = Z.slice(a.value.day - 1)), i === s.value.year && !isNaN(parseInt(N)) && N >= s.value.month) {
        const oe = I - Z.length;
        Z = Z.slice(0, s.value.day - oe);
      }
      return Ue.value && Z.push(null), Z;
    });
    function nt(i, N, I) {
      const Z = kt.abbreviated_months[N - 1];
      return i && N && I ? `${I} ${Z} ${i}` : i && N ? `${Z} ${i}` : i && I ? `${I} ??? ${i}` : N && I ? `${I} ${Z}` : i || (N ? Z : I ? `day ${I}` : null);
    }
    return Oe(W, () => {
      V(), n(W.value);
    }), (i, N) => (A(), L("div", {
      "aria-describedby": r(p),
      "aria-labelledby": r(h),
      class: z([i.$style.inputWrapper, r(c) ? i.$style.disabled : ""])
    }, [
      D("input", {
        id: r(b),
        ref_key: "displayBox",
        ref: d,
        class: z([i.$style.input, q.value ? i.$style.editing : ""]),
        disabled: r(c),
        placeholder: e.placeholder,
        type: "text",
        onInput: N[0] || (N[0] = (...I) => r(te) && r(te)(...I))
      }, null, 42, qn),
      r(k) && !r(c) ? (A(), L("div", {
        key: 0,
        class: z(i.$style.datePopup)
      }, [
        E.value.length > 0 ? (A(), L("div", {
          key: 0,
          class: z(i.$style.popupSection)
        }, [
          (A(!0), L(ze, null, Ce(E.value, (I) => (A(), L("span", {
            key: nt(I.year, I.month, I.day),
            class: z(i.$style.suggestion),
            tabindex: "0",
            onClick: (Z) => De(I),
            onKeydown: Yt((Z) => De(I), ["enter"])
          }, J(nt(I.year, I.month, I.day)), 43, jn))), 128))
        ], 2)) : Se("", !0),
        D("div", {
          class: z(i.$style.popupSection)
        }, [
          K(r(fe), {
            "grid-class": i.$style.yearParts,
            label: "year"
          }, {
            default: Ge(() => [
              K(r(fe), {
                ref_key: "yrM",
                ref: g,
                modelValue: H.value.millenium,
                "onUpdate:modelValue": N[1] || (N[1] = (I) => H.value.millenium = I),
                config: { placeholder: 0, min: 0, max: 9 },
                label: "millenium",
                "label-position": "none",
                "zoa-type": "number"
              }, null, 8, ["modelValue"]),
              K(r(fe), {
                ref_key: "yrC",
                ref: C,
                modelValue: H.value.century,
                "onUpdate:modelValue": N[2] || (N[2] = (I) => H.value.century = I),
                config: { placeholder: 0, min: 0, max: 9 },
                label: "century",
                "label-position": "none",
                "zoa-type": "number"
              }, null, 8, ["modelValue"]),
              K(r(fe), {
                ref_key: "yrD",
                ref: $,
                modelValue: H.value.decade,
                "onUpdate:modelValue": N[3] || (N[3] = (I) => H.value.decade = I),
                config: { placeholder: 0, min: 0, max: 9 },
                label: "decade",
                "label-position": "none",
                "zoa-type": "number"
              }, null, 8, ["modelValue"]),
              K(r(fe), {
                ref_key: "yrY",
                ref: w,
                modelValue: H.value.year,
                "onUpdate:modelValue": N[4] || (N[4] = (I) => H.value.year = I),
                config: { placeholder: 0, min: 0, max: 9 },
                label: "year",
                "label-position": "none",
                "zoa-type": "number"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["grid-class"]),
          D("div", {
            ref_key: "yearBtns",
            ref: f,
            class: z(i.$style.yearGrid),
            tabindex: "0"
          }, [
            (A(!0), L(ze, null, Ce(Be.value, (I) => (A(), Ae(r(Ye), {
              key: `y${I}`,
              size: "sm",
              tabindex: "-1",
              onClick: (Z) => Dt(I)
            }, {
              default: Ge(() => [
                Ve(J(Lt(I)), 1)
              ]),
              _: 2
            }, 1032, ["onClick"]))), 128))
          ], 2)
        ], 2),
        D("div", {
          class: z(i.$style.popupSection)
        }, [
          K(r(fe), {
            modelValue: ge.value,
            "onUpdate:modelValue": N[5] || (N[5] = (I) => ge.value = I),
            config: { placeholder: 1, min: 1, max: 12 },
            label: "month",
            "zoa-type": "number"
          }, null, 8, ["modelValue"]),
          D("div", {
            ref_key: "monthBtns",
            ref: _,
            class: z(i.$style.monthGrid),
            tabindex: "0"
          }, [
            (A(!0), L(ze, null, Ce(Ut.value, (I) => (A(), Ae(r(Ye), {
              key: `m${I}`,
              size: "sm",
              tabindex: "-1",
              onClick: (Z) => ge.value = I[1]
            }, {
              default: Ge(() => [
                Ve(J(I[0]), 1)
              ]),
              _: 2
            }, 1032, ["onClick"]))), 128))
          ], 2)
        ], 2),
        D("div", {
          class: z(i.$style.popupSection)
        }, [
          K(r(fe), {
            modelValue: _e.value,
            "onUpdate:modelValue": N[6] || (N[6] = (I) => _e.value = I),
            config: { placeholder: 1, min: 1, max: lt.value },
            label: "day",
            "zoa-type": "number"
          }, null, 8, ["modelValue", "config"]),
          D("div", {
            ref_key: "dayBtns",
            ref: y,
            class: z(i.$style.dayGrid),
            tabindex: "0"
          }, [
            (A(!0), L(ze, null, Ce(Ft.value, (I) => (A(), Ae(r(Ye), {
              key: `d${I}`,
              size: "sm",
              tabindex: "-1",
              onClick: (Z) => _e.value = I
            }, {
              default: Ge(() => [
                Ve(J(I || "clear"), 1)
              ]),
              _: 2
            }, 1032, ["onClick"]))), 128))
          ], 2)
        ], 2),
        D("div", {
          class: z(i.$style.popupSection)
        }, [
          D("small", {
            class: z(i.$style.dateRange)
          }, J(W.value.earliest) + " to " + J(W.value.latest), 3)
        ], 2)
      ], 2)) : Se("", !0)
    ], 10, Bn));
  }
}, Gn = {
  $style: Zn
}, Yn = /* @__PURE__ */ ae(Hn, [["__cssModules", Gn]]), Kn = "zoa__zoadatesimple__input", Jn = "zoa__zoadatesimple__inputWrapper", Xn = "zoa__zoadatesimple__disabled", Qn = {
  input: Kn,
  inputWrapper: Jn,
  disabled: Xn
}, ea = ["aria-describedby", "aria-labelledby"], ta = ["id", "disabled", "max", "min", "placeholder", "step"], la = {
  __name: "ZoaDateSimple",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: String,
      default: null
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
  setup(e, { expose: u, emit: o }) {
    const l = e, m = O("inputId"), b = O("labelId"), h = O("helpId"), p = O("disabled"), c = o, { value: t } = ce(c, l), n = T(null);
    return u({
      target: n
    }), (a, s) => (A(), L("div", {
      "aria-describedby": r(h),
      "aria-labelledby": r(b),
      class: z([a.$style.inputWrapper, r(p) ? a.$style.disabled : ""])
    }, [
      de(D("input", {
        id: r(m),
        ref_key: "target",
        ref: n,
        "onUpdate:modelValue": s[0] || (s[0] = (d) => ve(t) ? t.value = d : null),
        class: z(a.$style.input),
        disabled: r(p),
        max: e.max,
        min: e.min,
        placeholder: e.placeholder,
        step: e.step,
        type: "date"
      }, null, 10, ta), [
        [Le, r(t)]
      ])
    ], 10, ea));
  }
}, na = {
  $style: Qn
}, aa = /* @__PURE__ */ ae(la, [["__cssModules", na]]), oa = "zoa__zoadropdown__input", ua = "zoa__zoadropdown__inputWrapper", sa = "zoa__zoadropdown__arrow", ra = "zoa__zoadropdown__disabled", ia = {
  input: oa,
  inputWrapper: ua,
  arrow: sa,
  disabled: ra
}, da = ["aria-describedby", "aria-labelledby"], ca = ["id", "disabled"], pa = { value: null }, fa = ["value"], ma = {
  __name: "ZoaDropdown",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: String,
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
      type: Array,
      required: !0
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
  setup(e, { expose: u, emit: o }) {
    const l = e, m = O("inputId"), b = O("labelId"), h = O("helpId"), p = O("disabled"), c = x(() => {
      let s = [];
      return l.options.forEach((d) => {
        typeof d == "object" ? s.push({
          label: d.label || d.value,
          value: d.value || d.label,
          order: d.order == null ? null : d.order
        }) : s.push({ label: d, value: d });
      }), s.sort((d, v) => {
        let f = 0;
        (d.order != null || v.order != null) && (f = d.order != null && v.order != null ? d.order - v.order : d.order != null ? -1 : 1);
        let _ = d.label.localeCompare(v.label);
        return f !== 0 ? f : _;
      }), s;
    }), t = o, { value: n } = ce(t, l), a = T(null);
    return u({
      target: a
    }), (s, d) => (A(), L("div", {
      "aria-describedby": r(h),
      "aria-labelledby": r(b),
      class: z([s.$style.inputWrapper, r(p) ? s.$style.disabled : ""])
    }, [
      de(D("select", {
        id: r(m),
        ref_key: "target",
        ref: a,
        "onUpdate:modelValue": d[0] || (d[0] = (v) => ve(n) ? n.value = v : null),
        class: z(s.$style.input),
        disabled: r(p)
      }, [
        D("option", pa, J(e.placeholder), 1),
        (A(!0), L(ze, null, Ce(c.value, (v) => (A(), L("option", {
          key: v.value,
          value: v.value
        }, J(v.label), 9, fa))), 128))
      ], 10, ca), [
        [Kt, r(n)]
      ]),
      K(r(Ne), {
        class: z(s.$style.arrow),
        icon: "fa-solid fa-caret-down"
      }, null, 8, ["class"])
    ], 10, da));
  }
}, va = {
  $style: ia
}, ba = /* @__PURE__ */ ae(ma, [["__cssModules", va]]);
var ut, St;
function ya() {
  if (St) return ut;
  St = 1;
  function* e(o, l, m = 0, b = null) {
    if (o.length === 0) return;
    b === null && (b = l.length);
    let p;
    for (; (p = l.indexOf(o, m)) > -1 && !(p + o.length > b); )
      yield p, m = p + 1;
  }
  function u(o) {
    return o.split("").reverse().join("");
  }
  return ut = {
    searchExact: e,
    reverse: u
  }, ut;
}
var st, It;
function ha() {
  if (It) return st;
  It = 1;
  const { searchExact: e, reverse: u } = ya();
  function o(t, n, a) {
    t.length > n.length && ([t, n] = [n, t]);
    const s = n.length - t.length;
    if (s > a)
      return !1;
    if (a === 0)
      return t === n;
    let d;
    for (d = 0; d < t.length && t[d] === n[d]; d++)
      ;
    if (d === t.length)
      return s <= a;
    let v;
    for (v = t.length - 1; v >= 0 && t[v] === n[v + s]; v--)
      ;
    t = t.slice(d, v + 1), n = n.slice(d, v + 1 + s);
    const [f, _] = h(t, n, a);
    return f + (n.length - _) <= a;
  }
  function l(t, n) {
    t.length > n.length && ([t, n] = [n, t]);
    const a = new Array(t.length + 1);
    for (let v = 0; v <= t.length; v++)
      a[v] = v;
    let s, d;
    for (let v = 0; v < n.length; v++) {
      a[0] = v + 1, d = v;
      for (let f = 0; f < t.length; f++)
        s = a[f + 1], a[f + 1] = Math.min(
          d + +(t[f] !== n[v]),
          a[f] + 1,
          a[f + 1] + 1
        ), d = s;
    }
    return a[t.length];
  }
  function m(t, n) {
    const a = {};
    for (let s = Math.min(t.length - 1, n); s >= 0; s--)
      a[t[s]] = s;
    return a;
  }
  function* b(t, n, a) {
    if (t.length > n.length + a) return;
    const s = Math.floor(t.length / (a + 1));
    if (a === 0)
      for (const d of e(t, n))
        yield {
          start: d,
          end: d + t.length,
          dist: 0
        };
    else s >= 10 ? yield* p(t, n, a) : yield* c(t, n, a);
  }
  function h(t, n, a) {
    a = +a;
    let s;
    for (s = 0; s < Math.min(t.length, n.length) && t.charCodeAt(s) === n.charCodeAt(s); s++)
      ;
    if (s && (t = t.slice(s), n = n.slice(s)), t) {
      if (!n)
        return t.length <= a ? [t.length, s] : [null, null];
    } else return [0, s];
    if (a === 0) return [null, null];
    let d = new Array(t.length + 1);
    for (let $ = 0; $ <= a; $++)
      d[$] = $;
    let v = new Array(t.length + 1), f = null, _ = null, y = a, g = 0, C = t.length - 1;
    for (let $ = 0; $ < n.length; $++) {
      const w = n.charCodeAt($), q = Math.max(0, g - 1), k = Math.min(
        $ + a,
        t.length - 1,
        C
      );
      v[0] = d[0] + 1, g = v[0] <= y ? 0 : null, C = v[0] <= y ? 0 : -1;
      let R;
      for (R = q; R < k; R++) {
        const U = v[R + 1] = Math.min(
          d[R] + +(w !== t.charCodeAt(R)),
          d[R + 1] + 1,
          v[R] + 1
        );
        U <= y && (g === null && (g = R + 1), C = Math.max(
          C,
          R + 1 + (y - U)
        ));
      }
      const S = v[R + 1] = Math.min(
        d[R] + +(w !== t.charCodeAt(R)),
        v[R] + 1
      );
      if (S <= y && (g === null && (g = R + 1), C = R + 1), R === t.length - 1 && (f === null || S <= f) && (f = S, _ = $, f < y && (y = f)), [d, v] = [v, d], g === null) break;
    }
    return f !== null && f <= a ? [f, _ + 1 + s] : [null, null];
  }
  function* p(t, n, a) {
    const s = Math.floor(t.length / (a + 1)), d = t.length, v = n.length;
    for (let f = 0; f <= t.length - s; f += s) {
      const _ = t.slice(f, f + s), y = f + s, g = u(t.slice(0, f)), C = t.slice(y), $ = Math.max(0, f - a), w = Math.min(v, v - d + y + a);
      for (const q of e(_, n, $, w)) {
        const [k, R] = h(
          C,
          n.slice(
            q + s,
            q - f + d + a
          ),
          a
        );
        if (k === null) continue;
        const [S, U] = h(
          g,
          u(n.slice(
            Math.max(0, q - f - (a - k)),
            q
          )),
          a - k
        );
        S !== null && (yield {
          start: q - U,
          end: q + s + R,
          dist: S + k
        });
      }
    }
  }
  function* c(t, n, a) {
    const s = t.length, d = n.length;
    if (s > d + a) return;
    const v = m(t, a);
    let f = [], _ = [];
    for (let y = 0; y < n.length; y++) {
      const g = n[y];
      f = _, _ = [];
      const C = v[g];
      C !== void 0 && (C + 1 === s ? yield {
        start: y,
        end: y + 1,
        dist: C
      } : _.push({
        startIdx: y,
        needleIdx: C + 1,
        dist: C
      }));
      for (const $ of f)
        if (t[$.needleIdx] === g)
          $.needleIdx + 1 === s ? yield {
            start: $.startIdx,
            end: y + 1,
            dist: $.dist
          } : _.push({
            startIdx: $.startIdx,
            needleIdx: $.needleIdx + 1,
            dist: $.dist
          });
        else {
          if ($.dist === a) continue;
          _.push({
            startIdx: $.startIdx,
            needleIdx: $.needleIdx,
            dist: $.dist + 1
          });
          for (let w = 1; w <= a - $.dist; w++)
            if ($.needleIdx + w === s) {
              yield {
                start: $.startIdx,
                end: y + 1,
                dist: $.dist + w
              };
              break;
            } else if (t[$.needleIdx + w] === g) {
              $.needleIdx + w + 1 === s ? yield {
                start: $.startIdx,
                end: y + 1,
                dist: $.dist + w
              } : _.push({
                startIdx: $.startIdx,
                needleIdx: $.needleIdx + 1 + w,
                dist: $.dist + w
              });
              break;
            }
          y + 1 < d && $.needleIdx + 1 < s && _.push({
            startIdx: $.startIdx,
            needleIdx: $.needleIdx + 1,
            dist: $.dist + 1
          });
        }
    }
    for (const y of _)
      y.dist += t.length - y.needleIdx, y.dist <= a && (yield {
        start: y.startIdx,
        end: n.length,
        dist: y.dist
      });
  }
  return st = {
    _expand: h,
    editDistance: l,
    fuzzySearch: b,
    fuzzySearchNgrams: p,
    fuzzySearchCandidates: c,
    isEditDistanceNoGreaterThan: o
  }, st;
}
var rt, wt;
function _a() {
  if (wt) return rt;
  wt = 1;
  const { editDistance: e, fuzzySearch: u, isEditDistanceNoGreaterThan: o } = ha();
  return rt = {
    editDistance: e,
    fuzzySearch: u,
    isEditDistanceNoGreaterThan: o
  }, rt;
}
var ft = _a();
const ga = "zoa__zoadropdownsearch__input", za = "zoa__zoadropdownsearch__inputWrapper", $a = "zoa__zoadropdownsearch__disabled", ka = "zoa__zoadropdownsearch__options", Sa = "zoa__zoadropdownsearch__optlist", Ia = "zoa__zoadropdownsearch__listItem", wa = "zoa__zoadropdownsearch__option", xa = "zoa__zoadropdownsearch__noOptions", Ma = "zoa__zoadropdownsearch__textboxWrapper", Ca = "zoa__zoadropdownsearch__arrow", Va = {
  input: ga,
  inputWrapper: za,
  disabled: $a,
  options: ka,
  optlist: Sa,
  listItem: Ia,
  option: wa,
  noOptions: xa,
  textboxWrapper: Ma,
  arrow: Ca
}, Na = ["aria-describedby", "aria-labelledby"], Wa = ["id", "disabled", "placeholder"], Ea = ["title"], Je = 10, Aa = {
  __name: "ZoaDropdownSearch",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: String,
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
      type: Array,
      required: !0
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
     * @ignore Custom events must be emitted through the zoaEvent function.
     */
    "zoaEvent",
    /**
     * Emitted when the search value changes; debounced if the searchDelay prop is > 0.
     * @arg {string} searchTerm the search term
     */
    "search"
  ],
  setup(e, { expose: u, emit: o }) {
    const l = e, m = O("inputId"), b = O("subId"), h = O("labelId"), p = O("helpId"), c = O("disabled"), t = o, { value: n, zoaEvent: a } = ce(t, l), s = T(null), d = T(null), v = Re((W) => {
      d.value = W, a("search", W);
    }, l.searchDelay), f = x({
      get() {
        return s.value;
      },
      set(W) {
        s.value = W, v(W);
      }
    }), _ = x(() => {
      let W = [];
      return l.options.forEach((j) => {
        typeof j == "object" ? W.push({
          label: j.label || j.value,
          value: j.value || j.label,
          order: j.order == null ? null : j.order
        }) : W.push({ label: j, value: j });
      }), W;
    }), y = x(() => {
      const W = l.enableSearch && d.value, j = W ? d.value.toLowerCase() : null, F = (V) => V ? [...ft.fuzzySearch(j, V.toLowerCase(), 1)].length > 0 : !1;
      let M;
      return W ? M = _.value.filter((V) => F(V.label) || F(V.value)) : M = _.value, M.sort((V, E) => {
        let B = 0;
        (V.order != null || E.order != null) && (B = V.order != null && E.order != null ? V.order - E.order : V.order != null ? -1 : 1);
        let te = V.label.localeCompare(E.label);
        return B !== 0 ? B : te;
      }), M.map((V, E) => (V.ix = E, V));
    }), g = x(() => {
      let W = _.value.find(
        (j) => j.value === n.value
      );
      return W == null ? l.placeholder || "--" : W.label;
    }), C = T(null), $ = T(null), w = T(null);
    u({
      target: $
    });
    const { y: q } = Pt(w), k = x(() => !w.value || w.value && q.value !== w.value.scrollTop ? 0 : q.value), R = x(() => {
      try {
        return w.value.clientHeight;
      } catch {
        return 500;
      }
    }), S = x(() => y.value.length < Je * 2 ? 0 : Math.floor(k.value / l.itemHeight) - Je), U = x(() => y.value.length < Je * 2 ? y.value.length + Je : Math.ceil((k.value + R.value) / l.itemHeight)), P = T(!1), G = Pe($), Y = ke(w);
    function ne() {
      P.value = !0, setTimeout(() => {
        $.value.focus();
      }, 50);
    }
    function X() {
      try {
        f.value = null, C.value.blur(), $.value.blur(), w.value.blur();
      } catch {
      }
      P.value = !1;
    }
    function be() {
      P.value ? X() : ne();
    }
    return Qe(C, () => {
      X();
    }), ee("ArrowDown", () => {
      if (_.value.length === 0)
        return;
      const W = [...w.value.querySelectorAll("label")];
      if (G.focused.value)
        W[0].focus();
      else if (Y.focused.value) {
        const j = w.value.querySelector("label:focus");
        if (!j)
          W[0].focus();
        else {
          const F = W.findIndex((M) => M === j);
          F === W.length - 1 ? W[0].focus() : W[F + 1].focus();
        }
      }
    }), ee("ArrowUp", () => {
      if (_.value.length !== 0 && Y.focused.value) {
        const W = [...w.value.querySelectorAll("label")], j = w.value.querySelector("label:focus");
        if (!j)
          $.value.focus();
        else {
          const F = W.findIndex((M) => M === j);
          F === 0 ? $.value.focus() : W[F - 1].focus();
        }
      }
    }), ee("Enter", () => {
      if (Y.focused.value) {
        const W = w.value.querySelector("label:focus");
        W && (n.value = W.control.value);
      }
      G.focused.value || X();
    }), (W, j) => (A(), L("div", {
      ref_key: "container",
      ref: C,
      "aria-describedby": r(p),
      "aria-labelledby": r(h),
      class: z([W.$style.inputWrapper, r(c) ? W.$style.disabled : ""])
    }, [
      D("div", {
        class: z(W.$style.textboxWrapper)
      }, [
        de(D("input", {
          id: r(m),
          ref_key: "textbox",
          ref: $,
          "onUpdate:modelValue": j[0] || (j[0] = (F) => f.value = F),
          class: z(W.$style.input),
          disabled: r(c),
          placeholder: e.placeholder,
          type: "text"
        }, null, 10, Wa), [
          [Ke, P.value && !r(c)],
          [Le, f.value]
        ]),
        de(D("div", {
          class: z(W.$style.input),
          tabindex: "0",
          onFocusin: ne
        }, J(g.value), 35), [
          [Ke, !P.value || r(c)]
        ]),
        K(r(Ne), {
          class: z(W.$style.arrow),
          icon: "fa-solid fa-caret-down",
          onClick: be
        }, null, 8, ["class"])
      ], 2),
      P.value && !r(c) ? (A(), L("div", {
        key: 0,
        ref_key: "dropdown",
        ref: w,
        class: z(W.$style.options)
      }, [
        y.value.length > 0 ? (A(), L("ul", {
          key: 0,
          class: z(W.$style.optlist)
        }, [
          (A(!0), L(ze, null, Ce(y.value, (F) => (A(), L("li", {
            key: F.value,
            class: z([W.$style.listItem, W.$style.option]),
            style: Fe({ height: `${e.itemHeight}px` }),
            title: F.label
          }, [
            D("div", null, [
              F.ix >= S.value && F.ix <= U.value ? (A(), Ae(r(fe), {
                key: 0,
                modelValue: r(n),
                "onUpdate:modelValue": j[1] || (j[1] = (M) => ve(n) ? n.value = M : null),
                config: { checkValue: F.value, name: r(b)("radio") },
                label: F.label,
                "label-position": "right",
                "zoa-type": "radio",
                onChange: X
              }, null, 8, ["modelValue", "config", "label"])) : Se("", !0)
            ])
          ], 14, Ea))), 128))
        ], 2)) : (A(), L("div", {
          key: 1,
          class: z(W.$style.noOptions)
        }, "No options found", 2))
      ], 2)) : Se("", !0)
    ], 10, Na));
  }
}, Ta = {
  $style: Va
}, Pa = /* @__PURE__ */ ae(Aa, [["__cssModules", Ta]]), Oa = "zoa__zoamultiselect__input", La = "zoa__zoamultiselect__inputWrapper", Da = "zoa__zoamultiselect__disabled", Ua = "zoa__zoamultiselect__options", Fa = "zoa__zoamultiselect__optlist", Ra = "zoa__zoamultiselect__listItem", Za = "zoa__zoamultiselect__option", Ba = "zoa__zoamultiselect__selectAll", qa = "zoa__zoamultiselect__subgroup", ja = "zoa__zoamultiselect__noOptions", Ha = "zoa__zoamultiselect__textboxWrapper", Ga = "zoa__zoamultiselect__arrow", Ya = {
  input: Oa,
  inputWrapper: La,
  disabled: Da,
  options: Ua,
  optlist: Fa,
  listItem: Ra,
  option: Za,
  selectAll: Ba,
  subgroup: qa,
  noOptions: ja,
  textboxWrapper: Ha,
  arrow: Ga
}, Ka = ["aria-describedby", "aria-labelledby"], Ja = ["id", "disabled", "placeholder"], Xa = ["title"], Qa = ["onClick"], eo = { key: 1 }, Xe = 10, to = {
  __name: "ZoaMultiselect",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: Array,
      default: () => []
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
      type: Array,
      required: !0
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
     * @ignore Custom events must be emitted through the zoaEvent function.
     */
    "zoaEvent",
    /**
     * Emitted when the search value changes; debounced if the searchDelay prop is > 0.
     * @arg {string} searchTerm the search term
     */
    "search"
  ],
  setup(e, { expose: u, emit: o }) {
    const l = e, m = O("inputId"), b = O("subId"), h = O("labelId"), p = O("helpId"), c = O("disabled"), t = o, { value: n, zoaEvent: a } = ce(t, l);
    Array.isArray(n.value) || (n.value = []);
    const s = T(null), d = T(null), v = Re((M) => {
      d.value = M, a("search", M);
    }, l.searchDelay), f = x({
      get() {
        return s.value;
      },
      set(M) {
        s.value = M, v(M);
      }
    }), _ = x(() => (n.value ? n.value.length !== 1 : !0) ? l.itemNamePlural || l.itemName + "s" : l.itemName), y = x(() => {
      let M = [];
      return l.options.forEach((V) => {
        typeof V == "object" ? M.push({
          label: V.label || V.value,
          value: V.value || V.label,
          group: V.group || null,
          order: V.order == null ? null : V.order
        }) : M.push({ label: V, value: V, group: null });
      }), M.sort((V, E) => {
        let B;
        V.group === E.group ? B = 0 : !V.group || !E.group ? B = V.group ? 1 : -1 : B = V.group.localeCompare(E.group);
        let te = 0;
        (V.order != null || E.order != null) && (te = V.order != null && E.order != null ? V.order - E.order : V.order != null ? -1 : 1);
        let De = V.label.localeCompare(E.label);
        return B !== 0 ? B : te !== 0 ? te : De;
      }), M;
    }), g = x(() => {
      const M = l.enableSearch && d.value, V = M ? d.value.toLowerCase() : null, E = (H) => H ? [...ft.fuzzySearch(V, H.toLowerCase(), 1)].length > 0 : !1;
      let B;
      M ? B = y.value.filter((H) => E(H.group) || E(H.label) || E(H.value)) : B = y.value;
      let te = [], De = Object.entries(
        Object.groupBy(B, ({ group: H }) => H)
      ), ue = V ? 2 : 1;
      return De.forEach((H) => {
        let pe = H[0], Te = H[1];
        pe && pe !== "null" && (te.push({
          ix: ue,
          kind: "group",
          label: pe,
          value: pe,
          group: pe
        }), ue += 1), te = te.concat(
          Te.map((Be, et) => ({
            ix: ue + et,
            kind: "option",
            label: Be.label,
            value: Be.value,
            group: Be.group
          }))
        ), ue += Te.length;
      }), te;
    }), C = T(null), $ = T(null), w = T(null);
    u({
      target: $
    });
    const { y: q } = Pt(w), k = x(() => !w.value || w.value && q.value !== w.value.scrollTop ? 0 : q.value), R = x(() => {
      try {
        return w.value.clientHeight;
      } catch {
        return 500;
      }
    }), S = x(() => g.value.length < Xe * 2 ? 0 : Math.floor(k.value / l.itemHeight) - Xe), U = x(() => g.value.length < Xe * 2 ? g.value.length + Xe : Math.ceil((k.value + R.value) / l.itemHeight)), P = T(!1), G = Pe($), Y = ke(w);
    function ne() {
      P.value = !0, setTimeout(() => {
        $.value.focus();
      }, 50);
    }
    function X() {
      try {
        C.value.blur(), $.value.blur(), w.value.blur();
      } catch {
      }
      P.value = !1;
    }
    function be() {
      P.value ? X() : ne();
    }
    Qe(C, () => {
      X();
    }), ee("ArrowDown", () => {
      if (y.value.length === 0)
        return;
      const M = [...w.value.querySelectorAll("label")];
      if (G.focused.value)
        M[0].focus();
      else if (Y.focused.value) {
        const V = w.value.querySelector("label:focus");
        if (!V)
          M[0].focus();
        else {
          const E = M.findIndex((B) => B === V);
          E === M.length - 1 ? M[0].focus() : M[E + 1].focus();
        }
      }
    }), ee("ArrowUp", () => {
      if (y.value.length !== 0 && Y.focused.value) {
        const M = [...w.value.querySelectorAll("label")], V = w.value.querySelector("label:focus");
        if (!V)
          $.value.focus();
        else {
          const E = M.findIndex((B) => B === V);
          E === 0 ? $.value.focus() : M[E - 1].focus();
        }
      }
    }), ee("Enter", () => {
      G.focused.value || X();
    });
    const W = x({
      get() {
        const M = y.value;
        return n.value == null || n.value.length !== M.length ? !1 : M.filter((E) => !n.value.includes(E.value)).length === 0;
      },
      set(M) {
        M ? n.value = y.value.map((V) => V.value) : n.value = [];
      }
    }), j = x({
      get() {
        let M = g.value.filter((E) => E.kind === "option").map((E) => E.value);
        return n.value == null || n.value.length < M.length ? !1 : M.filter((E) => !n.value.includes(E)).length === 0;
      },
      set(M) {
        let V = g.value.filter((te) => te.kind === "option").map((te) => te.value);
        const E = n.value ? n.value : [], B = V.filter((te) => !E.includes(te));
        M ? n.value = E.concat(B) : n.value = E.filter((te) => !V.includes(te));
      }
    });
    function F(M) {
      const V = g.value.filter((B) => B.kind === "option" && B.group === M).map((B) => B.value);
      n.value = n.value ? n.value : [];
      const E = V.filter((B) => !n.value.includes(B));
      E.length > 0 ? E.forEach((B) => {
        n.value.push(B);
      }) : n.value = n.value.filter((B) => !V.includes(B));
    }
    return (M, V) => (A(), L("div", {
      ref_key: "container",
      ref: C,
      "aria-describedby": r(p),
      "aria-labelledby": r(h),
      class: z([M.$style.inputWrapper, r(c) ? M.$style.disabled : ""])
    }, [
      D("div", {
        class: z(M.$style.textboxWrapper)
      }, [
        de(D("input", {
          id: r(m),
          ref_key: "textbox",
          ref: $,
          "onUpdate:modelValue": V[0] || (V[0] = (E) => f.value = E),
          class: z(M.$style.input),
          disabled: r(c),
          placeholder: e.placeholder,
          type: "text"
        }, null, 10, Ja), [
          [Ke, P.value && !r(c)],
          [Le, f.value]
        ]),
        de(D("div", {
          class: z(M.$style.input),
          tabindex: "0",
          onFocusin: ne
        }, J(r(n) ? r(n).length : 0) + " " + J(_.value) + " selected ", 35), [
          [Ke, !P.value || r(c)]
        ]),
        K(r(Ne), {
          class: z(M.$style.arrow),
          icon: "fa-solid fa-caret-down",
          onClick: be
        }, null, 8, ["class"])
      ], 2),
      P.value && !r(c) ? (A(), L("div", {
        key: 0,
        ref_key: "dropdown",
        ref: w,
        class: z(M.$style.options)
      }, [
        g.value.length > 0 ? (A(), L("ul", {
          key: 0,
          class: z(M.$style.optlist)
        }, [
          D("li", {
            class: z([M.$style.selectAll, M.$style.listItem, M.$style.option]),
            style: Fe({ height: `${e.itemHeight}px` }),
            title: "Select all"
          }, [
            K(r(fe), {
              modelValue: W.value,
              "onUpdate:modelValue": V[1] || (V[1] = (E) => W.value = E),
              label: "Select all",
              "label-position": "right",
              "zoa-type": "checkbox"
            }, null, 8, ["modelValue"])
          ], 6),
          f.value ? (A(), L("li", {
            key: 0,
            class: z([M.$style.selectAll, M.$style.listItem, M.$style.option]),
            style: Fe({ height: `${e.itemHeight}px` }),
            title: "Select results"
          }, [
            K(r(fe), {
              modelValue: j.value,
              "onUpdate:modelValue": V[2] || (V[2] = (E) => j.value = E),
              label: "Select results",
              "label-position": "right",
              "zoa-type": "checkbox"
            }, null, 8, ["modelValue"])
          ], 6)) : Se("", !0),
          (A(!0), L(ze, null, Ce(g.value, (E) => (A(), L("li", {
            key: E.value,
            class: z([
              M.$style.listItem,
              E.kind === "group" ? M.$style.subgroup : M.$style.option
            ]),
            style: Fe({ height: `${e.itemHeight}px` }),
            title: E.label
          }, [
            E.kind === "group" ? (A(), L("div", {
              key: 0,
              onClick: (B) => F(E.group)
            }, J(E.label), 9, Qa)) : (A(), L("div", eo, [
              E.ix >= S.value && E.ix <= U.value ? (A(), Ae(r(fe), {
                key: 0,
                modelValue: r(n),
                "onUpdate:modelValue": V[3] || (V[3] = (B) => ve(n) ? n.value = B : null),
                config: { checkValue: E.value, name: r(b)("checkboxes") },
                label: E.label,
                "label-position": "right",
                "zoa-type": "checkbox"
              }, null, 8, ["modelValue", "config", "label"])) : Se("", !0)
            ]))
          ], 14, Xa))), 128))
        ], 2)) : (A(), L("div", {
          key: 1,
          class: z(M.$style.noOptions)
        }, "No options found", 2))
      ], 2)) : Se("", !0)
    ], 10, Ka));
  }
}, lo = {
  $style: Ya
}, no = /* @__PURE__ */ ae(to, [["__cssModules", lo]]), ao = "zoa__zoanumber__input", oo = "zoa__zoanumber__inputWrapper", uo = "zoa__zoanumber__disabled", so = {
  input: ao,
  inputWrapper: oo,
  disabled: uo
}, ro = ["aria-describedby", "aria-labelledby"], io = ["id", "disabled", "max", "min", "placeholder", "step"], co = {
  __name: "ZoaNumber",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: Number,
      default: null
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
  setup(e, { expose: u, emit: o }) {
    const l = e, m = O("inputId"), b = O("labelId"), h = O("helpId"), p = O("disabled"), c = o, { value: t } = ce(c, l), n = T(null);
    return u({
      target: n
    }), (a, s) => (A(), L("div", {
      "aria-describedby": r(h),
      "aria-labelledby": r(b),
      class: z([a.$style.inputWrapper, r(p) ? a.$style.disabled : ""])
    }, [
      de(D("input", {
        id: r(m),
        ref_key: "target",
        ref: n,
        "onUpdate:modelValue": s[0] || (s[0] = (d) => ve(t) ? t.value = d : null),
        class: z(a.$style.input),
        disabled: r(p),
        max: e.max,
        min: e.min,
        placeholder: e.placeholder,
        step: e.step,
        type: "number"
      }, null, 10, io), [
        [Le, r(t)]
      ])
    ], 10, ro));
  }
}, po = {
  $style: so
}, fo = /* @__PURE__ */ ae(co, [["__cssModules", po]]), mo = "zoa__zoaradio__input", vo = "zoa__zoaradio__inputWrapper", bo = "zoa__zoaradio__defaultRadio", yo = "zoa__zoaradio__radio", ho = "zoa__zoaradio__check", _o = "zoa__zoaradio__disabled", go = {
  input: mo,
  inputWrapper: vo,
  defaultRadio: bo,
  radio: yo,
  check: ho,
  disabled: _o
}, zo = ["aria-describedby", "aria-labelledby"], $o = ["id", "disabled", "name", "value"], ko = {
  __name: "ZoaRadio",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: String,
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
     * An optional name for a radio button group; if this is set, the radio button
     * will return the value of the radio button that's currently selected in the
     * group.
     */
    name: {
      type: [String, null],
      default: null
    },
    /**
     * An optional alternative value for the radio button to return. If not
     * specified, the label value will be used. If neither are specified, the
     * input ID will be used.
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
  setup(e, { expose: u, emit: o }) {
    const l = e, m = O("inputId"), b = O("labelId"), h = O("helpId"), p = O("disabled"), c = o, { value: t } = ce(c, l), n = O("rootContainer"), a = T(null), s = ke(n);
    u({
      target: a
    });
    const d = O("label"), v = x(() => l.checkValue || d.value || m.value);
    function f() {
      if (p.value)
        return;
      t.value === v.value || (t.value = v.value);
    }
    return ee(" ", () => {
      s.focused.value && f();
    }), (_, y) => (A(), L("div", {
      "aria-describedby": r(h),
      "aria-labelledby": r(b),
      class: z([_.$style.inputWrapper, r(p) ? _.$style.disabled : ""])
    }, [
      de(D("input", {
        id: r(m),
        ref_key: "radioInput",
        ref: a,
        "onUpdate:modelValue": y[0] || (y[0] = (g) => ve(t) ? t.value = g : null),
        class: z(_.$style.defaultRadio),
        disabled: r(p),
        name: e.name ? e.name : null,
        type: "radio",
        value: v.value
      }, null, 10, $o), [
        [Mt, r(t)]
      ]),
      D("span", {
        class: z(_.$style.radio),
        onClick: f
      }, [
        K(r(Ne), {
          class: z(_.$style.check),
          icon: "fa-solid fa-circle"
        }, null, 8, ["class"])
      ], 2)
    ], 10, zo));
  }
}, So = {
  $style: go
}, Io = /* @__PURE__ */ ae(ko, [["__cssModules", So]]), wo = "zoa__zoarangeslider__input", xo = "zoa__zoarangeslider__inputWrapper", Mo = {
  input: wo,
  inputWrapper: xo
}, Co = ["aria-describedby", "aria-labelledby"], Vo = {
  __name: "ZoaRangeSlider",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: Array,
      default: () => []
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
  setup(e, { expose: u, emit: o }) {
    const l = e, m = O("labelId"), b = O("helpId"), h = O("disabled"), p = o, { valueChanged: c } = ce(p, l), t = T(null), n = T(null), a = x(() => t.value ? t.value.target : null), s = x(() => t.value && n.value ? [t.value.target, n.value.target] : []);
    u({
      target: a,
      elements: s
    });
    const d = T(null), v = T(null), f = x(() => Math.max(
      Number(v.value) - Number(l.step),
      Number(l.min)
    )), _ = x(() => Math.min(
      Number(d.value) + Number(l.step),
      Number(l.max)
    )), y = x(() => {
      const g = Math.min(d.value, f.value), C = Math.max(v.value, _.value);
      return [g, C];
    });
    return Oe(y, () => {
      c(y.value);
    }), (g, C) => (A(), L("div", {
      "aria-describedby": r(b),
      "aria-labelledby": r(m),
      class: z(g.$style.inputWrapper)
    }, [
      K(r(fe), {
        ref: "lowerTrack",
        modelValue: d.value,
        "onUpdate:modelValue": C[0] || (C[0] = ($) => d.value = $),
        config: {
          min: e.min,
          max: e.max,
          step: e.step,
          validMax: f.value,
          valueLabelPosition: "above",
          placeholderPosition: 0.25
        },
        disabled: r(h),
        label: e.labelLower,
        "label-position": e.labelsRight ? "right" : "left",
        "zoa-type": "slider"
      }, null, 8, ["modelValue", "config", "disabled", "label", "label-position"]),
      K(r(fe), {
        ref: "upperTrack",
        modelValue: v.value,
        "onUpdate:modelValue": C[1] || (C[1] = ($) => v.value = $),
        config: {
          min: e.min,
          max: e.max,
          step: e.step,
          validMin: _.value,
          placeholderPosition: 0.75,
          activeTrackRight: !0
        },
        disabled: r(h),
        label: e.labelUpper,
        "label-position": e.labelsRight ? "right" : "left",
        "zoa-type": "slider"
      }, null, 8, ["modelValue", "config", "disabled", "label", "label-position"])
    ], 10, Co));
  }
}, No = {
  $style: Mo
}, Wo = /* @__PURE__ */ ae(Vo, [["__cssModules", No]]), Eo = "zoa__zoaslider__input", Ao = "zoa__zoaslider__inputWrapper", To = "zoa__zoaslider__track", Po = "zoa__zoaslider__valueLabel", Oo = "zoa__zoaslider__disabled", Lo = {
  input: Eo,
  inputWrapper: Ao,
  track: To,
  "track--active": "zoa__zoaslider__track--active",
  valueLabel: Po,
  "valueLabel--below": "zoa__zoaslider__valueLabel--below",
  "valueLabel--above": "zoa__zoaslider__valueLabel--above",
  disabled: Oo
}, Do = ["aria-describedby", "aria-labelledby"], Uo = ["id", "disabled", "max", "min", "step"], Fo = {
  __name: "ZoaSlider",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: Number,
      default: null
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
  setup(e, { expose: u, emit: o }) {
    const l = e, m = O("inputId"), b = O("labelId"), h = O("helpId"), p = O("disabled"), c = o, { value: t } = ce(c, l), n = T(null), a = T(null);
    u({
      target: n
    });
    const s = x(() => l.validMin ? Math.max(Number(l.validMin), Number(l.min)) : Number(l.min)), d = x(() => l.validMax ? Math.min(Number(l.validMax), Number(l.max)) : Number(l.max)), v = ke(n), f = Pe(a), _ = x(() => t.value < s.value ? s.value : t.value > d.value ? d.value : t.value), y = x(() => l.activeTrackRight ? { left: `${C.value.handle}%` } : { right: `${100 - C.value.handle}%` }), g = x(() => (t.value - l.min) / (l.max - l.min)), C = x(() => $());
    function $() {
      try {
        const S = n.value.clientWidth, U = 24;
        a.value && (a.value.innerText = _.value);
        const P = a.value ? a.value.clientWidth : 0, G = S / 2, X = (g.value * S - G) / G * (U / 2), be = X + P / 2, W = X / S;
        return {
          handle: ((g.value - W) * 100).toFixed(2),
          label: ((g.value - be / S) * 100).toFixed(2)
        };
      } catch {
        const S = g.value * 100;
        return { handle: S.toFixed(2), label: S.toFixed(2) };
      }
    }
    function w() {
      if (l.placeholder !== null && l.placeholder !== void 0)
        return l.placeholder;
      let U = (l.max - l.min) / (1 / l.placeholderPosition), P = U % l.step;
      return U - P + l.min;
    }
    function q() {
      if (t.value === l.max)
        return;
      let S = Number(t.value) + Number(l.step);
      S > l.max ? t.value = l.max : t.value = S;
    }
    function k() {
      if (t.value === l.min)
        return;
      let S = Number(t.value) - Number(l.step);
      S < l.min ? t.value = l.min : t.value = S;
    }
    function R(S) {
      S.preventDefault(), S.wheelDelta > 0 ? q() : S.wheelDelta < 0 && k();
    }
    return ee("ArrowDown", (S) => {
      S.preventDefault(), (v.focused.value || f.focused.value) && k();
    }), ee("ArrowLeft", (S) => {
      S.preventDefault(), (v.focused.value || f.focused.value) && k();
    }), ee("ArrowUp", (S) => {
      S.preventDefault(), (v.focused.value || f.focused.value) && q();
    }), ee("ArrowRight", (S) => {
      S.preventDefault(), (v.focused.value || f.focused.value) && q();
    }), Oe(t, (S) => {
      Number(S) >= Number(d.value) && (t.value = d.value), Number(S) <= Number(s.value) && (t.value = s.value);
    }), t.value = w(), (S, U) => (A(), L("div", {
      "aria-describedby": r(h),
      "aria-labelledby": r(b),
      class: z([S.$style.inputWrapper, , r(p) ? S.$style.disabled : ""]),
      onWheel: R
    }, [
      D("span", {
        class: z(S.$style.track)
      }, null, 2),
      D("span", {
        class: z([S.$style.track, S.$style["track--active"]]),
        style: Fe(y.value)
      }, null, 6),
      D("span", {
        ref_key: "valueLabel",
        ref: a,
        class: z([S.$style.valueLabel, S.$style[`valueLabel--${e.valueLabelPosition}`]]),
        style: Fe({ left: `${C.value.label}%` }),
        tabindex: "0"
      }, J(_.value), 7),
      de(D("input", {
        id: r(m),
        ref_key: "slider",
        ref: n,
        "onUpdate:modelValue": U[0] || (U[0] = (P) => ve(t) ? t.value = P : null),
        class: z(S.$style.input),
        disabled: r(p),
        max: e.max,
        min: e.min,
        step: e.step,
        type: "range"
      }, null, 10, Uo), [
        [Le, r(t)]
      ])
    ], 42, Do));
  }
}, Ro = {
  $style: Lo
}, Zo = /* @__PURE__ */ ae(Fo, [["__cssModules", Ro]]), Bo = "zoa__zoaautocompletetextbox__input", qo = "zoa__zoaautocompletetextbox__inputWrapper", jo = "zoa__zoaautocompletetextbox__disabled", Ho = "zoa__zoaautocompletetextbox__options", Go = "zoa__zoaautocompletetextbox__option", Yo = "zoa__zoaautocompletetextbox__noOptions", Ko = {
  input: Bo,
  inputWrapper: qo,
  disabled: jo,
  options: Ho,
  option: Go,
  noOptions: Yo
}, Jo = ["aria-describedby", "aria-labelledby"], Xo = ["id", "disabled", "placeholder"], Qo = { key: 0 }, eu = ["onClick"], tu = ["value"], lu = {
  __name: "ZoaAutocompleteTextbox",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: String,
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
     * Text to display in the blank input.
     */
    placeholder: {
      type: [String, void 0],
      default: null
    },
    /**
     * The options available to select. Each item can be a string, or an object
     * with `value`, and `order` keys (value required; order is optional).
     */
    options: {
      type: Array,
      required: !0
    },
    /**
     * Debounce delay for the `search` event, in ms.
     */
    searchDelay: {
      type: Number,
      default: 400
    },
    /**
     * Enables internal list filtering based on the current value. Disable if
     * implementing an external filter using emits.
     */
    enableSearch: {
      type: Boolean,
      default: !1
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
     * @ignore Custom events must be emitted through the zoaEvent function.
     */
    "zoaEvent",
    /**
     * Emitted when the search value changes; debounced if the searchDelay prop is > 0.
     * @arg {string} searchTerm the search term
     */
    "search",
    /**
     * Emitted when a value is selected from the dropdown.
     * @arg {string} selected the selected value
     */
    "selected"
  ],
  setup(e, { expose: u, emit: o }) {
    const l = e, m = O("inputId"), b = O("labelId"), h = O("helpId"), p = O("disabled"), c = o, { value: t, valueChanged: n, zoaEvent: a } = ce(c, l), s = T(null), d = Re((k) => {
      s.value = k, a("search", k);
    }, l.searchDelay);
    t.setter = function(k) {
      n(k), d(k);
    };
    const v = x(() => {
      const k = l.enableSearch && s.value, R = k ? s.value.toLowerCase() : null, S = (P) => P ? [...ft.fuzzySearch(R, P.toLowerCase(), 1)].length > 0 : !1;
      let U = [];
      return l.options.forEach((P) => {
        typeof P == "object" ? U.push({
          value: P.value,
          order: P.order == null ? null : P.order
        }) : U.push({ value: P });
      }), k && (U = U.filter((P) => S(P.value))), U.sort((P, G) => {
        let Y = 0;
        (P.order != null || G.order != null) && (Y = P.order != null && G.order != null ? P.order - G.order : P.order != null ? -1 : 1);
        let ne = P.value.localeCompare(G.value);
        return Y !== 0 ? Y : ne;
      }), U;
    }), f = T(null), _ = T(null), y = T(null);
    u({
      target: _
    });
    const g = T(!1), C = Pe(_), $ = ke(y);
    function w() {
      try {
        f.value.blur(), _.value.blur(), y.value.blur();
      } catch {
      }
      g.value = !1;
    }
    Qe(f, () => {
      g.value = !1;
    }), ee("ArrowDown", () => {
      if (v.value.length !== 0) {
        if (C.focused.value)
          y.value.children[0].children[0].focus();
        else if ($.focused.value) {
          const k = y.value.querySelector("li:focus");
          !k || !k.nextElementSibling ? y.value.children[0].children[0].focus() : k.nextElementSibling.focus();
        }
      }
    }), ee("ArrowUp", () => {
      if (v.value.length !== 0 && $.focused.value) {
        const k = y.value.querySelector("li:focus");
        !k || !k.previousElementSibling ? _.value.focus() : k.previousElementSibling.focus();
      }
    }), ee("Enter", () => {
      if ($.focused.value) {
        const k = y.value.querySelector("li:focus");
        k && q(k.querySelector("input").value);
      }
      w();
    });
    function q(k) {
      t.value = k, a("selected", k), w();
    }
    return (k, R) => (A(), L("div", {
      ref_key: "container",
      ref: f,
      "aria-describedby": r(h),
      "aria-labelledby": r(b),
      class: z([k.$style.inputWrapper, r(p) ? k.$style.disabled : ""])
    }, [
      de(D("input", {
        id: r(m),
        ref_key: "textbox",
        ref: _,
        "onUpdate:modelValue": R[0] || (R[0] = (S) => ve(t) ? t.value = S : null),
        class: z(k.$style.input),
        disabled: r(p),
        placeholder: e.placeholder,
        type: "text",
        onFocusin: R[1] || (R[1] = (S) => g.value = !0)
      }, null, 42, Xo), [
        [Le, r(t)]
      ]),
      g.value && !r(p) ? (A(), L("div", {
        key: 0,
        ref_key: "dropdown",
        ref: y,
        class: z(k.$style.options)
      }, [
        v.value.length > 0 ? (A(), L("ul", Qo, [
          (A(!0), L(ze, null, Ce(v.value, (S) => (A(), L("li", {
            key: S.value,
            class: z(k.$style.option),
            tabindex: "0",
            onClick: (U) => q(S.value)
          }, [
            D("span", null, J(S.value), 1),
            D("input", {
              type: "hidden",
              value: S.value
            }, null, 8, tu)
          ], 10, eu))), 128))
        ])) : (A(), L("div", {
          key: 1,
          class: z(k.$style.noOptions)
        }, "No options found", 2))
      ], 2)) : Se("", !0)
    ], 10, Jo));
  }
}, nu = {
  $style: Ko
}, au = /* @__PURE__ */ ae(lu, [["__cssModules", nu]]), ou = "zoa__zoatextbox__input", uu = "zoa__zoatextbox__inputWrapper", su = "zoa__zoatextbox__disabled", ru = {
  input: ou,
  inputWrapper: uu,
  disabled: su
}, iu = ["aria-describedby", "aria-labelledby"], du = ["id", "disabled", "placeholder"], cu = {
  __name: "ZoaTextbox",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: String,
      default: null
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
  setup(e, { expose: u, emit: o }) {
    const l = e, m = O("inputId"), b = O("labelId"), h = O("helpId"), p = O("disabled"), c = o, { value: t } = ce(c, l), n = T(null);
    return u({
      target: n
    }), (a, s) => (A(), L("div", {
      "aria-describedby": r(h),
      "aria-labelledby": r(b),
      class: z([a.$style.inputWrapper, r(p) ? a.$style.disabled : ""])
    }, [
      de(D("input", {
        id: r(m),
        ref_key: "target",
        ref: n,
        "onUpdate:modelValue": s[0] || (s[0] = (d) => ve(t) ? t.value = d : null),
        class: z(a.$style.input),
        disabled: r(p),
        placeholder: e.placeholder,
        type: "text"
      }, null, 10, du), [
        [Le, r(t)]
      ])
    ], 10, iu));
  }
}, pu = {
  $style: ru
}, fu = /* @__PURE__ */ ae(cu, [["__cssModules", pu]]), xt = {
  checkbox: {
    component: wn,
    multi: !1,
    delay: 0,
    tabLabel: !0
  },
  "date-ambiguous": {
    component: Yn,
    multi: !1,
    delay: 200
  },
  "date-simple": {
    component: aa,
    multi: !1,
    delay: 200
  },
  dropdown: {
    component: ba,
    multi: !1,
    delay: 0
  },
  multiselect: {
    component: no,
    multi: !1,
    delay: 0
  },
  "dropdown-search": {
    component: Pa,
    multi: !1,
    delay: 0
  },
  empty: {
    component: null,
    multi: !0
  },
  number: {
    component: fo,
    multi: !1,
    delay: 200
  },
  radio: {
    component: Io,
    multi: !1,
    delay: 0,
    tabLabel: !0
  },
  "range-slider": {
    component: Wo,
    multi: !0,
    delay: 200
  },
  slider: {
    component: Zo,
    multi: !1,
    delay: 200,
    wrapperProps: ["valueLabelPosition"]
  },
  "autocomplete-textbox": {
    component: au,
    multi: !1,
    delay: 200
  },
  textbox: {
    component: fu,
    multi: !1,
    delay: 200
  }
}, mu = "zoa__zoainput__input", vu = "zoa__zoainput__inputWrapper", bu = "zoa__zoainput__rootWrapper", yu = "zoa__zoainput__checkbox", hu = "zoa__zoainput__radio", _u = "zoa__zoainput__slider", gu = "zoa__zoainput__emptyGrid", zu = "zoa__zoainput__fieldset", $u = {
  input: mu,
  inputWrapper: vu,
  rootWrapper: bu,
  "rootWrapper--above": "zoa__zoainput__rootWrapper--above",
  "rootWrapper--help": "zoa__zoainput__rootWrapper--help",
  "rootWrapper--below": "zoa__zoainput__rootWrapper--below",
  "rootWrapper--left": "zoa__zoainput__rootWrapper--left",
  "rootWrapper--right": "zoa__zoainput__rootWrapper--right",
  "rootWrapper--none": "zoa__zoainput__rootWrapper--none",
  checkbox: yu,
  radio: hu,
  slider: _u,
  "rootWrapper-valueLabelPosition--below": "zoa__zoainput__rootWrapper-valueLabelPosition--below",
  "rootWrapper-valueLabelPosition--above": "zoa__zoainput__rootWrapper-valueLabelPosition--above",
  "range-slider": "zoa__zoainput__range-slider",
  emptyGrid: gu,
  fieldset: zu
}, ku = ["id"], Su = {
  __name: "ZoaInput",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: null,
      // any type
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
    config: {
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
    "update:modelValue",
    /**
     * Search event (emitted by some child inputs).
     */
    "search",
    /**
     * Item selection event (emitted by some child inputs).
     */
    "selected"
  ],
  setup(e, { expose: u, emit: o }) {
    const l = e, m = x(() => {
      let U = xt[l.zoaType];
      return U == null && (U = xt.empty), U;
    }), b = x(() => m.value.component), { componentId: h, subId: p } = ct(), c = p("input"), t = p("label"), n = p("help"), a = x(() => {
      let U = [
        "rootWrapper",
        `rootWrapper--${l.labelPosition}`,
        l.zoaType
      ];
      return l.help && U.push("rootWrapper--help"), m.value.wrapperProps && m.value.wrapperProps.forEach((P) => {
        l.config[P] != null && U.push(`rootWrapper-${P}--${l.config[P]}`);
      }), U;
    }), { addPropClasses: s } = Ze(l), d = o, { value: v } = ce(d, l);
    function f(U, ...P) {
      d(U, ...P);
    }
    const _ = T(null), y = x(() => l.label), g = x(() => l.labelPosition), C = x(() => l.help ? n : null), $ = x(() => l.disabled);
    Me("label", y), Me("labelPosition", g), Me("componentId", h), Me("subId", p), Me("inputId", c), Me("labelId", t), Me("helpId", C), Me("rootContainer", _), Me("disabled", $);
    const w = T(null);
    function q() {
      w.value && w.value.target.focus();
    }
    function k() {
      w.value && w.value.target.blur();
    }
    const R = x(() => w.value ? w.value.target : null), S = x(() => w.value && w.value.elements ? w.value.elements : {});
    return u({
      focus: q,
      blur: k,
      target: R,
      elements: S
    }), (U, P) => (A(), L("div", {
      id: r(h),
      ref_key: "rootContainer",
      ref: _,
      class: z(r(s)(a.value.map((G) => U.$style[G])))
    }, [
      m.value.multi ? (A(), L("fieldset", {
        key: 0,
        class: z(U.$style.fieldset)
      }, [
        K(gt, {
          "input-id": r(c),
          label: e.label,
          "label-id": r(t),
          "label-position": e.labelPosition,
          legend: !0,
          tabbable: m.value.tabLabel
        }, null, 8, ["input-id", "label", "label-id", "label-position", "tabbable"]),
        e.help ? (A(), Ae(_t, {
          key: 0,
          "help-id": r(n),
          "label-position": e.labelPosition,
          position: e.helpPosition,
          text: e.help
        }, null, 8, ["help-id", "label-position", "position", "text"])) : Se("", !0),
        b.value == null ? (A(), L("div", {
          key: 1,
          class: z([e.gridClass || U.$style.emptyGrid, U.$style.inputWrapper])
        }, [
          Ee(U.$slots, "default")
        ], 2)) : (A(), Ae(r(b), it({ key: 2 }, e.config, {
          ref_key: "inputComponent",
          ref: w,
          modelValue: r(v),
          "onUpdate:modelValue": P[0] || (P[0] = (G) => ve(v) ? v.value = G : null),
          onZoaEvent: f
        }), null, 16, ["modelValue"]))
      ], 2)) : (A(), L(ze, { key: 1 }, [
        K(gt, {
          help: e.help,
          "input-id": r(c),
          label: e.label,
          "label-id": r(t),
          "label-position": e.labelPosition,
          legend: !1,
          tabbable: m.value.tabLabel
        }, null, 8, ["help", "input-id", "label", "label-id", "label-position", "tabbable"]),
        e.help ? (A(), Ae(_t, {
          key: 0,
          "help-id": r(n),
          "label-position": e.labelPosition,
          position: e.helpPosition,
          text: e.help
        }, null, 8, ["help-id", "label-position", "position", "text"])) : Se("", !0),
        K(r(b), it(e.config, {
          ref_key: "inputComponent",
          ref: w,
          modelValue: r(v),
          "onUpdate:modelValue": P[1] || (P[1] = (G) => ve(v) ? v.value = G : null),
          onZoaEvent: f
        }), null, 16, ["modelValue"])
      ], 64))
    ], 10, ku));
  }
}, Iu = {
  $style: $u
}, fe = /* @__PURE__ */ ae(Su, [["__cssModules", Iu]]);
function Ot(e) {
  return { icon: x(() => {
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
const wu = "zoa__zoaflash__main", xu = "zoa__zoaflash__container", Mu = "zoa__zoaflash__header", Cu = "zoa__zoaflash__icon", Vu = "zoa__zoaflash__headerText", Nu = "zoa__zoaflash__content", Wu = {
  main: wu,
  container: xu,
  header: Mu,
  icon: Cu,
  headerText: Vu,
  content: Nu,
  "kind--info": "zoa__zoaflash__kind--info",
  "kind--warning": "zoa__zoaflash__kind--warning",
  "kind--error": "zoa__zoaflash__kind--error",
  "kind--success": "zoa__zoaflash__kind--success"
}, Eu = {
  __name: "ZoaFlash",
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
    const u = e, { icon: o } = Ot(u), { addPropClasses: l } = Ze(u);
    return (m, b) => (A(), L("div", {
      class: z(
        r(l)([m.$style.main, m.$style.container, m.$style[`kind--${e.kind}`]])
      )
    }, [
      D("div", {
        class: z(m.$style.header)
      }, [
        K(r(Ne), {
          class: z(m.$style.icon),
          icon: ["fa-solid", r(o)]
        }, null, 8, ["class", "icon"]),
        D("h2", {
          class: z(m.$style.headerText)
        }, J(e.header), 3)
      ], 2),
      D("div", {
        class: z(m.$style.content)
      }, [
        Ee(m.$slots, "default", {}, () => [
          Ve(J(e.message), 1)
        ])
      ], 2)
    ], 2));
  }
}, Au = {
  $style: Wu
}, Tu = /* @__PURE__ */ ae(Eu, [["__cssModules", Au]]), Pu = "zoa__zoamodal__main", Ou = "zoa__zoamodal__container", Lu = "zoa__zoamodal__header", Du = "zoa__zoamodal__icon", Uu = "zoa__zoamodal__headerText", Fu = "zoa__zoamodal__content", Ru = "zoa__zoamodal__form", Zu = "zoa__zoamodal__close", Bu = {
  main: Pu,
  container: Ou,
  header: Lu,
  icon: Du,
  headerText: Uu,
  content: Fu,
  "kind--info": "zoa__zoamodal__kind--info",
  "kind--warning": "zoa__zoamodal__kind--warning",
  "kind--error": "zoa__zoamodal__kind--error",
  "kind--success": "zoa__zoamodal__kind--success",
  form: Ru,
  close: Zu
}, qu = {
  __name: "ZoaModal",
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
  setup(e, { emit: u }) {
    const o = e, l = u, { icon: m } = Ot(o), { addPropClasses: b } = Ze(o), h = T(null);
    function p() {
      h.value.show(), l("opened");
    }
    return Qe(h, () => {
      h.value.close(), l("closed");
    }), (c, t) => (A(), L(ze, null, [
      K(r(Ye), it(e.buttonArgs, { onClick: p }), {
        default: Ge(() => [
          Ee(c.$slots, "button")
        ]),
        _: 3
      }, 16),
      D("dialog", {
        ref_key: "modal",
        ref: h,
        class: z(r(b)([c.$style.main, c.$style[`kind--${e.kind}`]]))
      }, [
        D("div", {
          class: z(c.$style.container)
        }, [
          D("div", {
            class: z(c.$style.header)
          }, [
            K(r(Ne), {
              class: z(c.$style.icon),
              icon: ["fa-solid", r(m)]
            }, null, 8, ["class", "icon"]),
            D("h2", {
              class: z(c.$style.headerText)
            }, [
              Ee(c.$slots, "header", {}, () => [
                Ve(J(e.header), 1)
              ])
            ], 2),
            D("form", {
              class: z(c.$style.form),
              method: "dialog",
              onSubmit: t[0] || (t[0] = (n) => l("closed"))
            }, [
              D("button", {
                class: z(c.$style.close),
                "aria-label": "Close modal"
              }, [
                K(r(Ne), { icon: "fa-solid fa-xmark" })
              ], 2)
            ], 34)
          ], 2),
          D("div", {
            class: z(c.$style.content)
          }, [
            Ee(c.$slots, "default", {}, () => [
              Ve(J(e.message), 1)
            ])
          ], 2)
        ], 2)
      ], 2)
    ], 64));
  }
}, ju = {
  $style: Bu
}, Hu = /* @__PURE__ */ ae(qu, [["__cssModules", ju]]), Gu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ZoaButton: Ye,
  ZoaFlash: Tu,
  ZoaInput: fe,
  ZoaModal: Hu,
  ZoaTabs: kl,
  ZoaToggleButton: en
}, Symbol.toStringTag, { value: "Module" })), Yu = new RegExp("[A-Z]+(?![a-z])|[A-Z]", "g");
function Ku(e) {
  return e.replace(Yu, (u, o) => (o ? "-" : "") + u.toLowerCase());
}
const ts = {
  install(e, u) {
    Object.entries(Gu).forEach((o) => {
      const l = Ku(o[0]);
      e.component(l, o[1]);
    });
  }
};
export {
  ts as Z,
  Ye as a,
  kl as b,
  en as c,
  kt as d,
  fe as e,
  Tu as f,
  xn as g,
  Hu as h
};
