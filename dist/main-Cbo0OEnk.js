import { openBlock as N, createElementBlock as P, normalizeClass as I, unref as d, renderSlot as Ve, createTextVNode as we, toDisplayString as q, ref as V, computed as M, getCurrentScope as Ut, onScopeDispose as Ft, onMounted as It, nextTick as Rt, isRef as ve, getCurrentInstance as wt, toValue as ae, watch as Ae, reactive as ft, watchEffect as xt, withDirectives as be, createElementVNode as L, vModelCheckbox as Mt, isProxy as Bt, toRaw as jt, Fragment as ke, renderList as Ne, vModelRadio as qt, inject as A, createCommentVNode as xe, createVNode as H, vShow as at, vModelText as Ue, withKeys as Gt, withCtx as qe, createBlock as Ee, vModelSelect as Ht, normalizeStyle as Ge, provide as Ie, mergeProps as ot } from "vue";
import { library as Zt } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as Te } from "@fortawesome/vue-fontawesome";
import { faCircleXmark as Yt, faXmark as Kt, faCircleInfo as Jt, faCircleExclamation as Xt, faCircleCheck as Qt, faCircleQuestion as el, faCheck as tl, faCaretDown as ll } from "@fortawesome/free-solid-svg-icons";
function Fe(e) {
  function u(a) {
    return a = a || [], e.class && Array.isArray(e.class) ? a = a.concat(e.class) : e.class && a.push(e.class), a;
  }
  return { addPropClasses: u };
}
const nl = "zoa__button__main", al = "zoa__button__checkbox", ol = {
  main: nl,
  "kind--normal": "zoa__button__kind--normal",
  checkbox: al,
  "kind--primary": "zoa__button__kind--primary",
  "kind--alt": "zoa__button__kind--alt",
  "size--sm": "zoa__button__size--sm",
  "size--md": "zoa__button__size--md"
}, Q = (e, u) => {
  const a = e.__vccOpts || e;
  for (const [l, m] of u)
    a[l] = m;
  return a;
}, sl = {
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
    const u = e, { addPropClasses: a } = Fe(u);
    return (l, m) => (N(), P("button", {
      class: I(
        d(a)([
          l.$style.main,
          l.$style[`kind--${e.kind}`],
          l.$style[`size--${e.size}`]
        ])
      )
    }, [
      Ve(l.$slots, "default", {}, () => [
        we(q(e.label), 1)
      ])
    ], 2));
  }
}, ul = {
  $style: ol
}, He = /* @__PURE__ */ Q(sl, [["__cssModules", ul]]), rl = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let il = (e = 21) => {
  let u = "", a = crypto.getRandomValues(new Uint8Array(e |= 0));
  for (; e--; )
    u += rl[a[e] & 63];
  return u;
};
function ut() {
  const e = V(il(6));
  function u(a) {
    return `${e.value}__${a}`;
  }
  return { componentId: e, subId: u };
}
const Ye = (e, u = 1, a) => {
  u = Math.max(1, u);
  const l = Math.max(1 / 0, u);
  let m, v, h = 0, f = 0;
  const c = () => {
    const S = Date.now(), _ = S - h, p = S - f, T = _ >= u || p >= l;
    return [S, T];
  }, t = (S) => {
    if (f = S, !m)
      return;
    const _ = m;
    m = void 0, e.apply(void 0, _);
  }, n = () => {
    g(0);
  }, o = () => {
    v && (n(), t(Date.now()));
  }, r = (S) => {
    f = S;
  }, i = (S) => {
    if (m)
      return t(S);
    m = void 0;
  }, y = () => {
    v = void 0;
    const [S, _] = c();
    return _ ? i(S) : b(S);
  }, b = (S) => {
    const _ = S - h, p = S - f, T = u - _, R = l - p, W = Math.min(T, R);
    return g(W);
  }, g = (S) => {
    v && clearTimeout(v), !(S <= 0) && (v = setTimeout(y, S));
  }, $ = (...S) => {
    const [_, p] = c(), T = !!v;
    if (m = S, h = _, (p || !v) && g(u), p)
      return T ? t(_) : r(_);
  };
  return $.cancel = n, $.flush = o, $;
};
function pe(e, u) {
  let a;
  try {
    a = parseInt(u.delay) || 0;
  } catch {
    a = 0;
  }
  const l = V(null);
  function m(c) {
    e("change", c);
  }
  const v = Ye(m, a);
  function h(c) {
    e("update:modelValue", c), l.value = c, v(c);
  }
  const f = M({
    get() {
      return u.modelValue === void 0 ? l.value : u.modelValue;
    },
    set(c) {
      h(c);
    }
  });
  return { emitChange: v, valueChanged: h, value: f };
}
function rt(e) {
  return Ut() ? (Ft(e), !0) : !1;
}
const Ct = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const dl = (e) => e != null, cl = Object.prototype.toString, pl = (e) => cl.call(e) === "[object Object]", ge = () => {
}, fl = /* @__PURE__ */ ml();
function ml() {
  var e, u;
  return Ct && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((u = window == null ? void 0 : window.navigator) == null ? void 0 : u.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Nt(e, u) {
  function a(...l) {
    return new Promise((m, v) => {
      Promise.resolve(e(() => u.apply(this, l), { fn: u, thisArg: this, args: l })).then(m).catch(v);
    });
  }
  return a;
}
function vl(e, u = {}) {
  let a, l, m = ge;
  const v = (f) => {
    clearTimeout(f), m(), m = ge;
  };
  return (f) => {
    const c = ae(e), t = ae(u.maxWait);
    return a && v(a), c <= 0 || t !== void 0 && t <= 0 ? (l && (v(l), l = null), Promise.resolve(f())) : new Promise((n, o) => {
      m = u.rejectOnCancel ? o : n, t && !l && (l = setTimeout(() => {
        a && v(a), l = null, n(f());
      }, t)), a = setTimeout(() => {
        l && v(l), l = null, n(f());
      }, c);
    });
  };
}
function bl(...e) {
  let u = 0, a, l = !0, m = ge, v, h, f, c, t;
  !ve(e[0]) && typeof e[0] == "object" ? { delay: h, trailing: f = !0, leading: c = !0, rejectOnCancel: t = !1 } = e[0] : [h, f = !0, c = !0, t = !1] = e;
  const n = () => {
    a && (clearTimeout(a), a = void 0, m(), m = ge);
  };
  return (r) => {
    const i = ae(h), y = Date.now() - u, b = () => v = r();
    return n(), i <= 0 ? (u = Date.now(), b()) : (y > i && (c || !l) ? (u = Date.now(), b()) : f && (v = new Promise((g, $) => {
      m = t ? $ : g, a = setTimeout(() => {
        u = Date.now(), l = !0, g(b()), n();
      }, Math.max(0, i - y));
    })), !c && !a && (a = setTimeout(() => l = !0, i)), l = !1, v);
  };
}
function yl(e) {
  return wt();
}
function st(e) {
  return Array.isArray(e) ? e : [e];
}
function hl(e, u = 200, a = {}) {
  return Nt(
    vl(u, a),
    e
  );
}
function _l(e, u = 200, a = !1, l = !0, m = !1) {
  return Nt(
    bl(u, a, l, m),
    e
  );
}
function gl(e, u = !0, a) {
  yl() ? It(e, a) : u ? e() : Rt(e);
}
const Me = Ct ? window : void 0;
function _e(e) {
  var u;
  const a = ae(e);
  return (u = a == null ? void 0 : a.$el) != null ? u : a;
}
function ue(...e) {
  let u, a, l, m;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([a, l, m] = e, u = Me) : [u, a, l, m] = e, !u)
    return ge;
  a = st(a), l = st(l);
  const v = [], h = () => {
    v.forEach((n) => n()), v.length = 0;
  }, f = (n, o, r, i) => (n.addEventListener(o, r, i), () => n.removeEventListener(o, r, i)), c = Ae(
    () => [_e(u), ae(m)],
    ([n, o]) => {
      if (h(), !n)
        return;
      const r = pl(o) ? { ...o } : o;
      v.push(
        ...a.flatMap((i) => l.map((y) => f(n, i, y, r)))
      );
    },
    { immediate: !0, flush: "post" }
  ), t = () => {
    c(), h();
  };
  return rt(t), t;
}
let mt = !1;
function it(e, u, a = {}) {
  const { window: l = Me, ignore: m = [], capture: v = !0, detectIframe: h = !1 } = a;
  if (!l)
    return ge;
  fl && !mt && (mt = !0, Array.from(l.document.body.children).forEach((b) => b.addEventListener("click", ge)), l.document.documentElement.addEventListener("click", ge));
  let f = !0;
  const c = (b) => ae(m).some((g) => {
    if (typeof g == "string")
      return Array.from(l.document.querySelectorAll(g)).some(($) => $ === b.target || b.composedPath().includes($));
    {
      const $ = _e(g);
      return $ && (b.target === $ || b.composedPath().includes($));
    }
  });
  function t(b) {
    const g = ae(b);
    return g && g.$.subTree.shapeFlag === 16;
  }
  function n(b, g) {
    const $ = ae(b), S = $.$.subTree && $.$.subTree.children;
    return S == null || !Array.isArray(S) ? !1 : S.some((_) => _.el === g.target || g.composedPath().includes(_.el));
  }
  const o = (b) => {
    const g = _e(e);
    if (b.target != null && !(!(g instanceof Element) && t(e) && n(e, b)) && !(!g || g === b.target || b.composedPath().includes(g))) {
      if (b.detail === 0 && (f = !c(b)), !f) {
        f = !0;
        return;
      }
      u(b);
    }
  };
  let r = !1;
  const i = [
    ue(l, "click", (b) => {
      r || (r = !0, setTimeout(() => {
        r = !1;
      }, 0), o(b));
    }, { passive: !0, capture: v }),
    ue(l, "pointerdown", (b) => {
      const g = _e(e);
      f = !c(b) && !!(g && !b.composedPath().includes(g));
    }, { passive: !0 }),
    h && ue(l, "blur", (b) => {
      setTimeout(() => {
        var g;
        const $ = _e(e);
        ((g = l.document.activeElement) == null ? void 0 : g.tagName) === "IFRAME" && !($ != null && $.contains(l.document.activeElement)) && u(b);
      }, 0);
    })
  ].filter(Boolean);
  return () => i.forEach((b) => b());
}
function $l() {
  const e = V(!1), u = wt();
  return u && It(() => {
    e.value = !0;
  }, u), e;
}
function kl(e) {
  const u = $l();
  return M(() => (u.value, !!e()));
}
function Sl(e, u, a = {}) {
  const { window: l = Me, ...m } = a;
  let v;
  const h = kl(() => l && "MutationObserver" in l), f = () => {
    v && (v.disconnect(), v = void 0);
  }, c = M(() => {
    const r = ae(e), i = st(r).map(_e).filter(dl);
    return new Set(i);
  }), t = Ae(
    () => c.value,
    (r) => {
      f(), h.value && r.size && (v = new MutationObserver(u), r.forEach((i) => v.observe(i, m)));
    },
    { immediate: !0, flush: "post" }
  ), n = () => v == null ? void 0 : v.takeRecords(), o = () => {
    t(), f();
  };
  return rt(o), {
    isSupported: h,
    stop: o,
    takeRecords: n
  };
}
function Vt(e, u, a = {}) {
  const {
    window: l = Me,
    document: m = l == null ? void 0 : l.document,
    flush: v = "sync"
  } = a;
  if (!l || !m)
    return ge;
  let h;
  const f = (n) => {
    h == null || h(), h = n;
  }, c = xt(() => {
    const n = _e(e);
    if (n) {
      const { stop: o } = Sl(
        m,
        (r) => {
          r.map((y) => [...y.removedNodes]).flat().some((y) => y === n || y.contains(n)) && u(r);
        },
        {
          window: l,
          childList: !0,
          subtree: !0
        }
      );
      f(o);
    }
  }, { flush: v }), t = () => {
    c(), f();
  };
  return rt(t), t;
}
function zl(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (u) => u.key === e : Array.isArray(e) ? (u) => e.includes(u.key) : () => !0;
}
function X(...e) {
  let u, a, l = {};
  e.length === 3 ? (u = e[0], a = e[1], l = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (u = !0, a = e[0], l = e[1]) : (u = e[0], a = e[1]) : (u = !0, a = e[0]);
  const {
    target: m = Me,
    eventName: v = "keydown",
    passive: h = !1,
    dedupe: f = !1
  } = l, c = zl(u);
  return ue(m, v, (n) => {
    n.repeat && ae(f) || c(n) && a(n);
  }, h);
}
function Il(e = {}) {
  var u;
  const {
    window: a = Me,
    deep: l = !0,
    triggerOnRemoval: m = !1
  } = e, v = (u = e.document) != null ? u : a == null ? void 0 : a.document, h = () => {
    var t;
    let n = v == null ? void 0 : v.activeElement;
    if (l)
      for (; n != null && n.shadowRoot; )
        n = (t = n == null ? void 0 : n.shadowRoot) == null ? void 0 : t.activeElement;
    return n;
  }, f = V(), c = () => {
    f.value = h();
  };
  return a && (ue(a, "blur", (t) => {
    t.relatedTarget === null && c();
  }, !0), ue(a, "focus", c, !0)), m && Vt(f, c, { document: v }), c(), f;
}
function wl(e, u = {}) {
  const {
    delayEnter: a = 0,
    delayLeave: l = 0,
    triggerOnRemoval: m = !1,
    window: v = Me
  } = u, h = V(!1);
  let f;
  const c = (t) => {
    const n = t ? a : l;
    f && (clearTimeout(f), f = void 0), n ? f = setTimeout(() => h.value = t, n) : h.value = t;
  };
  return v && (ue(e, "mouseenter", () => c(!0), { passive: !0 }), ue(e, "mouseleave", () => c(!1), { passive: !0 }), m && Vt(
    M(() => _e(e)),
    () => c(!1)
  )), h;
}
function De(e, u = {}) {
  const { initialValue: a = !1, focusVisible: l = !1, preventScroll: m = !1 } = u, v = V(!1), h = M(() => _e(e));
  ue(h, "focus", (c) => {
    var t, n;
    (!l || (n = (t = c.target).matches) != null && n.call(t, ":focus-visible")) && (v.value = !0);
  }), ue(h, "blur", () => v.value = !1);
  const f = M({
    get: () => v.value,
    set(c) {
      var t, n;
      !c && v.value ? (t = h.value) == null || t.blur() : c && !v.value && ((n = h.value) == null || n.focus({ preventScroll: m }));
    }
  });
  return Ae(
    h,
    () => {
      f.value = a;
    },
    { immediate: !0, flush: "post" }
  ), { focused: f };
}
const xl = "focusin", Ml = "focusout", Cl = ":focus-within";
function Se(e, u = {}) {
  const { window: a = Me } = u, l = M(() => _e(e)), m = V(!1), v = M(() => m.value), h = Il(u);
  return !a || !h.value ? { focused: v } : (ue(l, xl, () => m.value = !0), ue(l, Ml, () => {
    var f, c, t;
    return m.value = (t = (c = (f = l.value) == null ? void 0 : f.matches) == null ? void 0 : c.call(f, Cl)) != null ? t : !1;
  }), { focused: v });
}
const vt = 1;
function Nl(e, u = {}) {
  const {
    throttle: a = 0,
    idle: l = 200,
    onStop: m = ge,
    onScroll: v = ge,
    offset: h = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions: f = {
      capture: !1,
      passive: !0
    },
    behavior: c = "auto",
    window: t = Me,
    onError: n = (W) => {
      console.error(W);
    }
  } = u, o = V(0), r = V(0), i = M({
    get() {
      return o.value;
    },
    set(W) {
      b(W, void 0);
    }
  }), y = M({
    get() {
      return r.value;
    },
    set(W) {
      b(void 0, W);
    }
  });
  function b(W, U) {
    var z, D, Z, re;
    if (!t)
      return;
    const ee = ae(e);
    if (!ee)
      return;
    (Z = ee instanceof Document ? t.document.body : ee) == null || Z.scrollTo({
      top: (z = ae(U)) != null ? z : y.value,
      left: (D = ae(W)) != null ? D : i.value,
      behavior: ae(c)
    });
    const le = ((re = ee == null ? void 0 : ee.document) == null ? void 0 : re.documentElement) || (ee == null ? void 0 : ee.documentElement) || ee;
    i != null && (o.value = le.scrollLeft), y != null && (r.value = le.scrollTop);
  }
  const g = V(!1), $ = ft({
    left: !0,
    right: !1,
    top: !0,
    bottom: !1
  }), S = ft({
    left: !1,
    right: !1,
    top: !1,
    bottom: !1
  }), _ = (W) => {
    g.value && (g.value = !1, S.left = !1, S.right = !1, S.top = !1, S.bottom = !1, m(W));
  }, p = hl(_, a + l), T = (W) => {
    var U;
    if (!t)
      return;
    const z = ((U = W == null ? void 0 : W.document) == null ? void 0 : U.documentElement) || (W == null ? void 0 : W.documentElement) || _e(W), { display: D, flexDirection: Z, direction: re } = getComputedStyle(z), ee = re === "rtl" ? -1 : 1, le = z.scrollLeft;
    S.left = le < o.value, S.right = le > o.value;
    const oe = le * ee <= (h.left || 0), fe = le * ee + z.clientWidth >= z.scrollWidth - (h.right || 0) - vt;
    D === "flex" && Z === "row-reverse" ? ($.left = fe, $.right = oe) : ($.left = oe, $.right = fe), o.value = le;
    let K = z.scrollTop;
    W === t.document && !K && (K = t.document.body.scrollTop), S.top = K < r.value, S.bottom = K > r.value;
    const Pe = K <= (h.top || 0), k = K + z.clientHeight >= z.scrollHeight - (h.bottom || 0) - vt;
    D === "flex" && Z === "column-reverse" ? ($.top = k, $.bottom = Pe) : ($.top = Pe, $.bottom = k), r.value = K;
  }, R = (W) => {
    var U;
    if (!t)
      return;
    const z = (U = W.target.documentElement) != null ? U : W.target;
    T(z), g.value = !0, p(W), v(W);
  };
  return ue(
    e,
    "scroll",
    a ? _l(R, a, !0, !1) : R,
    f
  ), gl(() => {
    try {
      const W = ae(e);
      if (!W)
        return;
      T(W);
    } catch (W) {
      n(W);
    }
  }), ue(
    e,
    "scrollend",
    _,
    f
  ), {
    x: i,
    y,
    isScrolling: g,
    arrivedState: $,
    directions: S,
    measure() {
      const W = ae(e);
      t && W && T(W);
    }
  };
}
const Vl = "zoa__togglebutton__input", Wl = "zoa__togglebutton__inputWrapper", El = "zoa__togglebutton__container", Tl = "zoa__togglebutton__main", Al = "zoa__togglebutton__checkbox", Pl = {
  input: Vl,
  inputWrapper: Wl,
  container: El,
  main: Tl,
  "kind--normal": "zoa__togglebutton__kind--normal",
  checkbox: Al,
  "kind--primary": "zoa__togglebutton__kind--primary",
  "kind--alt": "zoa__togglebutton__kind--alt",
  "size--sm": "zoa__togglebutton__size--sm",
  "size--md": "zoa__togglebutton__size--md"
}, Ll = ["id", "for"], Ol = ["id", "name", "value"], Dl = {
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
  setup(e, { emit: u }) {
    const a = e, { componentId: l, subId: m } = ut(), { addPropClasses: v } = Fe(a), h = u, { value: f } = pe(h, a), c = V(null), t = V(null), n = Se(c), o = M(() => a.checkValue || a.label);
    function r() {
      let i = Bt(f.value) ? jt(f.value) : f.value;
      if (Array.isArray(i)) {
        let y = !t.value.checked;
        i = i.filter((b) => b !== o.value), y && i.push(o.value), f.value = i, t.value.checked = y;
      } else
        f.value = !f.value;
    }
    return X(" ", () => {
      n.focused.value && r();
    }), X("Enter", () => {
      n.focused.value && r();
    }), (i, y) => (N(), P("label", {
      id: d(l),
      for: d(m)("toggle"),
      tabindex: "0",
      ref_key: "checkboxContainer",
      ref: c,
      class: I(d(v)([i.$style.container]))
    }, [
      be(L("input", {
        type: "checkbox",
        id: d(m)("toggle"),
        class: I(i.$style.checkbox),
        "onUpdate:modelValue": y[0] || (y[0] = (b) => ve(f) ? f.value = b : null),
        name: e.name,
        value: o.value,
        ref_key: "checkboxInput",
        ref: t
      }, null, 10, Ol), [
        [Mt, d(f)]
      ]),
      L("span", {
        class: I([i.$style.main, i.$style[`kind--${e.kind}`], i.$style[`size--${e.size}`]])
      }, [
        Ve(i.$slots, "default", {}, () => [
          we(q(e.label), 1)
        ])
      ], 2)
    ], 10, Ll));
  }
}, Ul = {
  $style: Pl
}, Fl = /* @__PURE__ */ Q(Dl, [["__cssModules", Ul]]), Rl = "zoa__tabs__input", Bl = "zoa__tabs__inputWrapper", jl = "zoa__tabs__tab", ql = "zoa__tabs__tabContainer", Gl = {
  input: Rl,
  inputWrapper: Bl,
  tab: jl,
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
  tabContainer: ql
}, Hl = ["value"], Zl = {
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
  setup(e, { emit: u }) {
    const a = e;
    ut();
    const { addPropClasses: l } = Fe(a), m = u, { value: v } = pe(m, a), h = V(null);
    V(null), Se(h);
    const f = M(() => {
      let c = [];
      return a.options.forEach((t) => {
        typeof t == "object" ? c.push({
          label: t.label || t.value,
          value: t.value || t.label,
          order: t.order == null ? null : t.order
        }) : c.push({ label: t, value: t });
      }), c.sort((t, n) => {
        let o = 0;
        (t.order != null || n.order != null) && (o = t.order != null && n.order != null ? t.order - n.order : t.order != null ? -1 : 1);
        let r = t.label.localeCompare(n.label);
        return o !== 0 ? o : r;
      }), c;
    });
    return v.value == null && (a.initialValue && f.value.some((c) => c.value === a.initialValue) ? v.value = a.initialValue : v.value = f.value[0].value), (c, t) => (N(), P("div", {
      class: I(d(l)([]))
    }, [
      L("ul", {
        class: I([c.$style.tabContainer, c.$style[`orient--${e.activePosition}`]])
      }, [
        (N(!0), P(ke, null, Ne(f.value, (n) => (N(), P("li", null, [
          L("label", {
            tabindex: "0",
            class: I([
              c.$style.tab,
              c.$style[`orient--${e.activePosition}`],
              c.$style[`kind--${e.kind}`],
              c.$style[`size--${e.size}`],
              c.$style[`state--${d(v) === n.value ? "active" : "inactive"}`]
            ])
          }, [
            be(L("input", {
              type: "radio",
              value: n.value,
              "onUpdate:modelValue": t[0] || (t[0] = (o) => ve(v) ? v.value = o : null)
            }, null, 8, Hl), [
              [qt, d(v)]
            ]),
            L("span", null, q(n.label), 1)
          ], 2)
        ]))), 256))
      ], 2)
    ], 2));
  }
}, Yl = {
  $style: Gl
}, Kl = /* @__PURE__ */ Q(Zl, [["__cssModules", Yl]]), Jl = "zoa__label__main", Xl = {
  main: Jl,
  "main--right": "zoa__label__main--right",
  "main--left": "zoa__label__main--left",
  "main--above": "zoa__label__main--above",
  "main--below": "zoa__label__main--below",
  "main--none": "zoa__label__main--none"
}, Ql = ["id", "for", "tabindex"], en = ["id"], tn = {
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
    const u = A("labelId");
    return (a, l) => e.label && !e.legend ? (N(), P("label", {
      key: 0,
      id: d(u),
      for: e.inputId,
      class: I([a.$style.main, a.$style[`main--${e.labelPosition}`]]),
      tabindex: e.tabbable ? 0 : -1
    }, q(e.label), 11, Ql)) : e.label ? (N(), P("legend", {
      key: 1,
      id: d(u),
      class: I([a.$style.main, a.$style[`main--${e.labelPosition}`]])
    }, q(e.label), 11, en)) : xe("", !0);
  }
}, ln = {
  $style: Xl
}, bt = /* @__PURE__ */ Q(tn, [["__cssModules", ln]]);
Zt.add(
  Yt,
  Kt,
  Jt,
  Xt,
  Qt,
  el,
  tl,
  ll
);
const nn = "zoa__help__main", an = "zoa__help__icon", on = "zoa__help__popup", sn = {
  main: nn,
  "main--above": "zoa__help__main--above",
  "main--below": "zoa__help__main--below",
  icon: an,
  popup: on,
  "popup--right": "zoa__help__popup--right"
}, un = ["id"], rn = {
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
    const u = A("labelPosition"), a = A("helpId"), l = V(!1), m = V(null), v = wl(m, { delayEnter: 500 });
    return Ae(v, () => {
      l.value = v.value;
    }), X("Escape", () => l.value = !1), (h, f) => (N(), P("div", {
      class: I([h.$style.main, h.$style[`main--${d(u)}`]]),
      ref_key: "helpContainer",
      ref: m
    }, [
      H(d(Te), {
        icon: ["fa-solid", "fa-circle-question"],
        class: I(h.$style.icon)
      }, null, 8, ["class"]),
      be(L("div", {
        class: I([h.$style.popup, h.$style[`popup--${e.position}`]]),
        id: d(a),
        role: "tooltip"
      }, [
        Ve(h.$slots, "default", {}, () => [
          we(q(e.text), 1)
        ])
      ], 10, un), [
        [at, l.value]
      ])
    ], 2));
  }
}, dn = {
  $style: sn
}, yt = /* @__PURE__ */ Q(rn, [["__cssModules", dn]]), cn = "zoa__autocompletetextbox__input", pn = "zoa__autocompletetextbox__inputWrapper", fn = "zoa__autocompletetextbox__disabled", mn = "zoa__autocompletetextbox__options", vn = "zoa__autocompletetextbox__option", bn = "zoa__autocompletetextbox__noOptions", yn = {
  input: cn,
  inputWrapper: pn,
  disabled: fn,
  options: mn,
  option: vn,
  noOptions: bn
}, hn = ["aria-labelledby", "aria-describedby"], _n = ["placeholder", "id", "disabled"], gn = { key: 0 }, $n = ["onClick"], kn = ["value"], Sn = {
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
  setup(e, { expose: u, emit: a }) {
    const l = e, m = A("inputId"), v = A("labelId"), h = A("helpId"), f = A("disabled"), c = a, { value: t } = pe(c, l), n = M(() => {
      let _ = [];
      return l.options.forEach((p) => {
        typeof p == "object" ? _.push({
          label: p.label || p.value,
          value: p.value || p.label,
          order: p.order == null ? null : p.order
        }) : _.push({ label: p, value: p });
      }), _.sort((p, T) => {
        let R = 0;
        (p.order != null || T.order != null) && (R = p.order != null && T.order != null ? p.order - T.order : p.order != null ? -1 : 1);
        let W = p.label.localeCompare(T.label);
        return R !== 0 ? R : W;
      }), _;
    }), o = V(null), r = V(null), i = V(null);
    u({
      target: r
    });
    const y = V(!1), b = De(r), g = Se(i);
    function $() {
      try {
        o.value.blur(), r.value.blur(), i.value.blur();
      } catch {
      }
      y.value = !1;
    }
    it(o, () => {
      y.value = !1;
    }), X("ArrowDown", () => {
      if (n.value.length !== 0) {
        if (b.focused.value)
          i.value.children[0].children[0].focus();
        else if (g.focused.value) {
          const _ = i.value.querySelector("li:focus");
          !_ || !_.nextElementSibling ? i.value.children[0].children[0].focus() : _.nextElementSibling.focus();
        }
      }
    }), X("ArrowUp", () => {
      if (n.value.length !== 0 && g.focused.value) {
        const _ = i.value.querySelector("li:focus");
        !_ || !_.previousElementSibling ? r.value.focus() : _.previousElementSibling.focus();
      }
    }), X("Enter", () => {
      if (g.focused.value) {
        const _ = i.value.querySelector("li:focus");
        _ && S(_.querySelector("input").value);
      }
      $();
    });
    function S(_) {
      t.value = _, $();
    }
    return (_, p) => (N(), P("div", {
      class: I([_.$style.inputWrapper, d(f) ? _.$style.disabled : ""]),
      ref_key: "container",
      ref: o,
      "aria-labelledby": d(v),
      "aria-describedby": d(h)
    }, [
      be(L("input", {
        type: "text",
        placeholder: e.placeholder,
        id: d(m),
        class: I(_.$style.input),
        "onUpdate:modelValue": p[0] || (p[0] = (T) => ve(t) ? t.value = T : null),
        onFocusin: p[1] || (p[1] = (T) => y.value = !0),
        ref_key: "textbox",
        ref: r,
        disabled: d(f)
      }, null, 42, _n), [
        [Ue, d(t)]
      ]),
      y.value && !d(f) ? (N(), P("div", {
        key: 0,
        class: I(_.$style.options),
        ref_key: "dropdown",
        ref: i
      }, [
        n.value.length > 0 ? (N(), P("ul", gn, [
          (N(!0), P(ke, null, Ne(n.value, (T) => (N(), P("li", {
            class: I(_.$style.option),
            onClick: (R) => S(T.value),
            tabindex: "0"
          }, [
            L("span", null, q(T.label), 1),
            L("input", {
              type: "hidden",
              value: T.value
            }, null, 8, kn)
          ], 10, $n))), 256))
        ])) : (N(), P("div", {
          key: 1,
          class: I(_.$style.noOptions)
        }, "No options found", 2))
      ], 2)) : xe("", !0)
    ], 10, hn));
  }
}, zn = {
  $style: yn
}, In = /* @__PURE__ */ Q(Sn, [["__cssModules", zn]]), wn = "zoa__checkbox__input", xn = "zoa__checkbox__inputWrapper", Mn = "zoa__checkbox__defaultCheckbox", Cn = "zoa__checkbox__checkbox", Nn = "zoa__checkbox__check", Vn = "zoa__checkbox__disabled", Wn = {
  input: wn,
  inputWrapper: xn,
  defaultCheckbox: Mn,
  checkbox: Cn,
  check: Nn,
  disabled: Vn
}, En = ["aria-labelledby", "aria-describedby"], Tn = ["id", "name", "value", "disabled"], An = {
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
  setup(e, { expose: u, emit: a }) {
    const l = e, m = A("inputId"), v = A("labelId"), h = A("helpId"), f = A("disabled"), c = a, { value: t, valueChanged: n } = pe(c, l), o = A("rootContainer"), r = V(null), i = Se(o);
    u({
      target: r
    });
    const y = A("label"), b = M(() => l.checkValue || y.value), g = M({
      get() {
        return l.name ? t.value || [] : t.value || !1;
      },
      set(S) {
        n(S);
      }
    });
    function $() {
      if (!f.value)
        if (l.name) {
          let S = !g.value.includes(b.value), _ = g.value.filter((p) => p !== b.value);
          S && _.push(b.value), g.value = _;
        } else
          g.value = !g.value;
    }
    return X(" ", () => {
      i.focused.value && $();
    }), (S, _) => (N(), P("div", {
      class: I([S.$style.inputWrapper, d(f) ? S.$style.disabled : ""]),
      "aria-labelledby": d(v),
      "aria-describedby": d(h)
    }, [
      be(L("input", {
        type: "checkbox",
        id: d(m),
        class: I(S.$style.defaultCheckbox),
        "onUpdate:modelValue": _[0] || (_[0] = (p) => g.value = p),
        name: e.name ? e.name : null,
        value: b.value,
        ref_key: "checkboxInput",
        ref: r,
        disabled: d(f)
      }, null, 10, Tn), [
        [Mt, g.value]
      ]),
      L("span", {
        class: I(S.$style.checkbox),
        onClick: $
      }, [
        H(d(Te), {
          icon: "fa-solid fa-check",
          class: I(S.$style.check)
        }, null, 8, ["class"])
      ], 2)
    ], 10, En));
  }
}, Pn = {
  $style: Wn
}, Ln = /* @__PURE__ */ Q(An, [["__cssModules", Pn]]);
function On(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Qe, ht;
function Dn() {
  return ht || (ht = 1, Qe = {
    __locale: "en",
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    abbreviated_days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    abbreviated_months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    am: "AM",
    pm: "PM"
  }), Qe;
}
var et, _t;
function Un() {
  return _t || (_t = 1, et = Dn()), et;
}
var Fn = Un();
const gt = /* @__PURE__ */ On(Fn), Rn = "zoa__dateambiguous__input", Bn = "zoa__dateambiguous__inputWrapper", jn = "zoa__dateambiguous__disabled", qn = "zoa__dateambiguous__datePopup", Gn = "zoa__dateambiguous__popupSection", Hn = "zoa__dateambiguous__yearGrid", Zn = "zoa__dateambiguous__monthGrid", Yn = "zoa__dateambiguous__dayGrid", Kn = "zoa__dateambiguous__editing", Jn = "zoa__dateambiguous__suggestion", Xn = "zoa__dateambiguous__dateRange", Qn = "zoa__dateambiguous__yearParts", ea = {
  input: Rn,
  inputWrapper: Bn,
  disabled: jn,
  datePopup: qn,
  popupSection: Gn,
  yearGrid: Hn,
  monthGrid: Zn,
  dayGrid: Yn,
  editing: Kn,
  suggestion: Jn,
  dateRange: Xn,
  yearParts: Qn
}, ta = ["aria-labelledby", "aria-describedby"], la = ["placeholder", "id", "disabled"], na = ["onClick", "onKeydown"], aa = {
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
  setup(e, { expose: u, emit: a }) {
    const l = () => import("./dates-BpW1GjqU.js"), m = e, v = A("inputId"), h = A("labelId"), f = A("helpId"), c = A("disabled"), t = a, { valueChanged: n } = pe(t, m.delay), o = M(() => {
      let s;
      try {
        s = new Date(
          m.min === "today" ? Date.now() : Date.parse(m.min || "0000-01-01")
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
    }), r = M(() => {
      let s;
      try {
        s = new Date(
          m.max === "today" ? Date.now() : Date.parse(m.max || "9999-12-31")
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
    }), i = V(null), y = A("rootContainer"), b = V(null), g = V(null), $ = V(null), S = V(null), _ = V(null), p = V(null), T = V(null), R = V(!1), { focused: W } = Se(y);
    u({
      target: i
    });
    const U = De(b), z = Se(b), D = De(g), Z = Se(g), re = De($), ee = Se($), le = M(() => {
      let s;
      return U.focused.value ? s = b.value : D.focused.value ? s = g.value : re.focused.value && (s = $.value), s;
    }), oe = M(() => {
      let s;
      return z.focused.value ? s = b.value : Z.focused.value ? s = g.value : ee.focused.value && (s = $.value), s;
    });
    X("Enter", () => {
      le && le.value.children[0].focus();
    }), X("ArrowLeft", () => {
      if (!oe.value)
        return;
      const s = oe.value.querySelector("button:focus");
      !s || !s.previousElementSibling ? oe.value.children[oe.value.children.length - 1].focus() : s.previousElementSibling.focus();
    }), X("ArrowRight", () => {
      if (!oe.value)
        return;
      const s = oe.value.querySelector("button:focus");
      !s || !s.nextElementSibling ? oe.value.children[0].focus() : s.nextElementSibling.focus();
    }), X("Escape", () => {
      const s = y.value.querySelector("*:focus");
      s && s.blur();
    });
    function fe(s, x, w) {
      s.value && (s.value.target.onkeyup = (O) => {
        /^[0-9]$/.test(O.key) && x ? x.value.focus() : O.key === "Backspace" && w && w.value.focus();
      });
    }
    xt(() => {
      fe(S, _, null), fe(_, p, S), fe(p, T, _), fe(T, null, p);
    });
    const K = M(() => ({
      year: j.value,
      month: he.value,
      day: me.value,
      earliest: `${k.value.lower.year.toString().padStart(4, "0")}-${k.value.lower.month.toString().padStart(2, "0")}-${k.value.lower.day.toString().padStart(2, "0")}`,
      latest: `${k.value.upper.year.toString().padStart(4, "0")}-${k.value.upper.month.toString().padStart(2, "0")}-${k.value.upper.day.toString().padStart(2, "0")}`
    })), Pe = M(() => dt(
      K.value.year,
      K.value.month,
      K.value.day
    )), k = M(() => {
      let s, x;
      if (!Ce.value)
        s = o.value.year, x = r.value.year;
      else {
        const $e = 10 ** (4 - (Math.max(
          ...ye.map((Ot, Dt) => isNaN(parseInt(B.value[Ot])) ? -1 : Dt)
        ) + 1)), de = Re(B.value, 4), je = Math.floor(o.value.year / $e) * $e, pt = Math.floor(r.value.year / $e) * $e;
        de < je || de > pt ? (s = o.value.year, x = r.value.year) : de === je ? (s = o.value.year, x = de + $e - 1) : de === pt ? (s = de, x = r.value.year) : (s = de, x = de + $e - 1);
      }
      const w = s === o.value.year, O = x === r.value.year, te = w ? Math.max(o.value.month, ze.value || 1) : ze.value || 1, ne = O ? Math.min(r.value.month, ze.value || 12) : ze.value || 12, ie = te === o.value.month, Y = ne === r.value.month;
      let G = Oe.value || 1, se = Oe.value || Be(ne);
      return G = w && ie ? Math.max(G, o.value.day) : G, se = O && Y ? Math.min(se, r.value.day) : se, s === x && te === ne && (O && Y && G > se && (G = 1), w && ie && se < G && (se = Be(ne))), {
        lower: {
          year: s,
          month: te,
          day: G,
          isMinYear: w,
          isMinMonth: ie
        },
        upper: {
          year: x,
          month: ne,
          day: se,
          isMaxYear: O,
          isMaxMonth: Y
        }
      };
    });
    function C(s, x, w) {
      const O = isNaN(parseInt(s)), te = isNaN(parseInt(x)), ne = isNaN(parseInt(w)), ie = te || x <= 12 && x >= 1, Y = ne || w <= Be(x);
      if (O || s > k.value.lower.year && s < k.value.upper.year)
        return {
          year: !0,
          month: ie,
          day: Y
        };
      if (s < k.value.lower.year || s > k.value.upper.year)
        return {
          year: !1,
          month: ie,
          day: Y
        };
      let G = ie, se = Y;
      return s === k.value.lower.year && (G = G && (te || x >= k.value.lower.month), x === k.value.lower.month && (se = se && (ne || w >= k.value.lower.day))), s === k.value.upper.year && (G = G && (te || x <= k.value.upper.month), x === k.value.upper.month && (se = se && (ne || w <= k.value.upper.day))), {
        year: !0,
        month: G,
        day: se
      };
    }
    function E() {
      i.value.value = Pe.value, R.value = !1;
    }
    const F = V([]);
    function J(s) {
      R.value = !0, l().then((x) => {
        F.value = x.parseDate(s.target.value);
      });
    }
    const Le = Ye(J, 200);
    function We(s) {
      B.value = Je(s.year), he.value = s.month, me.value = s.day, F.value = [];
    }
    const j = M(() => {
      if (!Ce.value)
        return null;
      const s = Re(B.value, 4);
      return C(s, he.value, me.value).year ? s : null;
    }), B = V({
      millenium: null,
      century: null,
      decade: null,
      year: null
    }), ye = ["millenium", "century", "decade", "year"], Ce = M(() => Object.values(B.value).some((s) => !isNaN(parseInt(s)))), Ke = M(() => {
      const s = Je(k.value.lower.year), x = {
        millenium: null,
        century: null,
        decade: null,
        year: null
      };
      if (o.value.year === r.value.year && isNaN(parseInt(B.value.year)))
        return [s];
      if (k.value.lower.year === k.value.upper.year)
        return [x];
      const w = Je(k.value.upper.year);
      let O, te = { ...x };
      if (Ce.value)
        O = Math.max(
          ...ye.map((Y, G) => (te[Y] = B.value[Y], isNaN(parseInt(B.value[Y])) ? -1 : G))
        ) + 1;
      else
        for (let Y = 0; Y < ye.length; Y++) {
          let G = ye[Y];
          if (s[G] === w[G])
            te[G] = s[G];
          else if (O == null) {
            O = Y;
            break;
          }
        }
      function ne(Y) {
        let G = ye[Y];
        const se = Re(s, Y + 1), ct = Re(w, Y + 1);
        return Array(10).fill(0).map(($e, de) => {
          let je = { ...te };
          return je[G] = $e + de, je;
        }).filter(($e) => {
          const de = Re($e, Y + 1);
          return de >= se && de <= ct;
        });
      }
      let ie = ne(O);
      return ie.length === 1 && O < 3 && (te = { ...ie[0] }, ie = ne(O + 1)), Ce.value && ie.push(x), ie;
    }), Et = M(() => j.value % 100 === 0 ? j.value % 400 === 0 : j.value % 4 === 0);
    function Tt(s) {
      return Object.values(s).every((x) => x == null) ? "clear" : ye.map((x) => s[x] || 0).join("");
    }
    function Re(s, x) {
      return ye.slice(0, x).reduce((w, O, te) => {
        let ne = s[O] || 0;
        return w + ne * 10 ** (3 - te);
      }, 0);
    }
    function Je(s) {
      return {
        millenium: Math.floor(s / 1e3),
        century: Math.floor(s % 1e3 / 100),
        decade: Math.floor(s % 100 / 10),
        year: Math.floor(s % 10)
      };
    }
    function At(s) {
      if (B.value = s, Math.max(
        ...ye.map(
          (w, O) => isNaN(parseInt(B.value[w])) ? -1 : O
        )
      ) === 3) {
        let w = C(j.value, he.value, me.value);
        (!w.month || !w.day) && (he.value = null, me.value = null);
      }
    }
    const ze = V(null), he = M({
      get() {
        return C(j.value, ze.value, me.value).month ? ze.value : null;
      },
      set(s) {
        ze.value = isNaN(parseInt(s)) ? null : s, me.value && me.value > Xe.value && (me.value = Xe.value);
      }
    }), Pt = M(() => {
      let s = gt.abbreviated_months.map((w, O) => [w, O + 1]);
      const x = j.value ? j.value : o.value.year === r.value.year ? o.value.year : null;
      if (x === o.value.year && (s = s.slice(o.value.month - 1, s.length)), x === r.value.year) {
        const w = 12 - s.length;
        s = s.slice(0, r.value.month - w);
      }
      return ze.value && s.push(["clear", null]), s;
    }), Xe = M(() => Be(he.value));
    function Be(s) {
      return [4, 6, 9, 11].includes(s) ? 30 : s === 2 ? Et.value ? 29 : 28 : 31;
    }
    const Oe = V(null), me = M({
      get() {
        const s = C(j.value, ze.value, Oe.value);
        return s.month && s.day ? Oe.value : null;
      },
      set(s) {
        Oe.value = isNaN(parseInt(s)) ? null : s;
      }
    }), Lt = M(() => {
      const s = j.value ? j.value : o.value.year === r.value.year ? o.value.year : null, x = he.value ? he.value : o.value.year === r.value.year && o.value.month === r.value.month ? o.value.month : null, w = Be(x);
      let O = Array(w).fill(1).map((te, ne) => ne + 1);
      if (s === o.value.year && !isNaN(parseInt(x)) && x <= o.value.month && (O = O.slice(o.value.day - 1)), s === r.value.year && !isNaN(parseInt(x)) && x >= r.value.month) {
        const te = w - O.length;
        O = O.slice(0, r.value.day - te);
      }
      return Oe.value && O.push(null), O;
    });
    function dt(s, x, w) {
      const O = gt.abbreviated_months[x - 1];
      return s && x && w ? `${w} ${O} ${s}` : s && x ? `${O} ${s}` : s && w ? `${w} ??? ${s}` : x && w ? `${w} ${O}` : s || (x ? O : w ? `day ${w}` : null);
    }
    return Ae(K, () => {
      E(), n(K.value);
    }), (s, x) => (N(), P("div", {
      class: I([s.$style.inputWrapper, d(c) ? s.$style.disabled : ""]),
      "aria-labelledby": d(h),
      "aria-describedby": d(f)
    }, [
      L("input", {
        type: "text",
        placeholder: e.placeholder,
        id: d(v),
        class: I([s.$style.input, R.value ? s.$style.editing : ""]),
        ref_key: "displayBox",
        ref: i,
        onInput: x[0] || (x[0] = (...w) => d(Le) && d(Le)(...w)),
        disabled: d(c)
      }, null, 42, la),
      d(W) && !d(c) ? (N(), P("div", {
        key: 0,
        class: I(s.$style.datePopup)
      }, [
        F.value.length > 0 ? (N(), P("div", {
          key: 0,
          class: I(s.$style.popupSection)
        }, [
          (N(!0), P(ke, null, Ne(F.value, (w) => (N(), P("span", {
            onClick: (O) => We(w),
            onKeydown: Gt((O) => We(w), ["enter"]),
            class: I(s.$style.suggestion),
            tabindex: "0"
          }, q(dt(w.year, w.month, w.day)), 43, na))), 256))
        ], 2)) : xe("", !0),
        L("div", {
          class: I(s.$style.popupSection)
        }, [
          H(d(ce), {
            label: "year",
            "grid-class": s.$style.yearParts
          }, {
            default: qe(() => [
              H(d(ce), {
                "zoa-type": "number",
                label: "millenium",
                "label-position": "none",
                options: { placeholder: 0, min: 0, max: 9 },
                modelValue: B.value.millenium,
                "onUpdate:modelValue": x[1] || (x[1] = (w) => B.value.millenium = w),
                ref_key: "yrM",
                ref: S
              }, null, 8, ["modelValue"]),
              H(d(ce), {
                "zoa-type": "number",
                label: "century",
                "label-position": "none",
                options: { placeholder: 0, min: 0, max: 9 },
                modelValue: B.value.century,
                "onUpdate:modelValue": x[2] || (x[2] = (w) => B.value.century = w),
                ref_key: "yrC",
                ref: _
              }, null, 8, ["modelValue"]),
              H(d(ce), {
                "zoa-type": "number",
                label: "decade",
                "label-position": "none",
                options: { placeholder: 0, min: 0, max: 9 },
                modelValue: B.value.decade,
                "onUpdate:modelValue": x[3] || (x[3] = (w) => B.value.decade = w),
                ref_key: "yrD",
                ref: p
              }, null, 8, ["modelValue"]),
              H(d(ce), {
                "zoa-type": "number",
                label: "year",
                "label-position": "none",
                options: { placeholder: 0, min: 0, max: 9 },
                modelValue: B.value.year,
                "onUpdate:modelValue": x[4] || (x[4] = (w) => B.value.year = w),
                ref_key: "yrY",
                ref: T
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["grid-class"]),
          L("div", {
            class: I(s.$style.yearGrid),
            tabindex: "0",
            ref_key: "yearBtns",
            ref: b
          }, [
            (N(!0), P(ke, null, Ne(Ke.value, (w) => (N(), Ee(d(He), {
              size: "sm",
              onClick: (O) => At(w),
              tabindex: "-1"
            }, {
              default: qe(() => [
                we(q(Tt(w)), 1)
              ]),
              _: 2
            }, 1032, ["onClick"]))), 256))
          ], 2)
        ], 2),
        L("div", {
          class: I(s.$style.popupSection)
        }, [
          H(d(ce), {
            "zoa-type": "number",
            label: "month",
            options: { placeholder: 1, min: 1, max: 12 },
            modelValue: he.value,
            "onUpdate:modelValue": x[5] || (x[5] = (w) => he.value = w)
          }, null, 8, ["modelValue"]),
          L("div", {
            class: I(s.$style.monthGrid),
            tabindex: "0",
            ref_key: "monthBtns",
            ref: g
          }, [
            (N(!0), P(ke, null, Ne(Pt.value, (w) => (N(), Ee(d(He), {
              size: "sm",
              onClick: (O) => he.value = w[1],
              tabindex: "-1"
            }, {
              default: qe(() => [
                we(q(w[0]), 1)
              ]),
              _: 2
            }, 1032, ["onClick"]))), 256))
          ], 2)
        ], 2),
        L("div", {
          class: I(s.$style.popupSection)
        }, [
          H(d(ce), {
            "zoa-type": "number",
            label: "day",
            options: { placeholder: 1, min: 1, max: Xe.value },
            modelValue: me.value,
            "onUpdate:modelValue": x[6] || (x[6] = (w) => me.value = w)
          }, null, 8, ["options", "modelValue"]),
          L("div", {
            class: I(s.$style.dayGrid),
            tabindex: "0",
            ref_key: "dayBtns",
            ref: $
          }, [
            (N(!0), P(ke, null, Ne(Lt.value, (w) => (N(), Ee(d(He), {
              size: "sm",
              onClick: (O) => me.value = w,
              tabindex: "-1"
            }, {
              default: qe(() => [
                we(q(w || "clear"), 1)
              ]),
              _: 2
            }, 1032, ["onClick"]))), 256))
          ], 2)
        ], 2),
        L("div", {
          class: I(s.$style.popupSection)
        }, [
          L("small", {
            class: I(s.$style.dateRange)
          }, q(K.value.earliest) + " to " + q(K.value.latest), 3)
        ], 2)
      ], 2)) : xe("", !0)
    ], 10, ta));
  }
}, oa = {
  $style: ea
}, sa = /* @__PURE__ */ Q(aa, [["__cssModules", oa]]), ua = "zoa__datesimple__input", ra = "zoa__datesimple__inputWrapper", ia = "zoa__datesimple__disabled", da = {
  input: ua,
  inputWrapper: ra,
  disabled: ia
}, ca = ["aria-labelledby", "aria-describedby"], pa = ["placeholder", "min", "max", "step", "id", "disabled"], fa = {
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
  setup(e, { expose: u, emit: a }) {
    const l = e, m = A("inputId"), v = A("labelId"), h = A("helpId"), f = A("disabled"), c = a, { value: t } = pe(c, l), n = V(null);
    return u({
      target: n
    }), (o, r) => (N(), P("div", {
      class: I([o.$style.inputWrapper, d(f) ? o.$style.disabled : ""]),
      "aria-labelledby": d(v),
      "aria-describedby": d(h)
    }, [
      be(L("input", {
        type: "date",
        placeholder: e.placeholder,
        min: e.min,
        max: e.max,
        step: e.step,
        id: d(m),
        class: I(o.$style.input),
        "onUpdate:modelValue": r[0] || (r[0] = (i) => ve(t) ? t.value = i : null),
        ref_key: "target",
        ref: n,
        disabled: d(f)
      }, null, 10, pa), [
        [Ue, d(t)]
      ])
    ], 10, ca));
  }
}, ma = {
  $style: da
}, va = /* @__PURE__ */ Q(fa, [["__cssModules", ma]]), ba = "zoa__dropdown__input", ya = "zoa__dropdown__inputWrapper", ha = "zoa__dropdown__arrow", _a = "zoa__dropdown__disabled", ga = {
  input: ba,
  inputWrapper: ya,
  arrow: ha,
  disabled: _a
}, $a = ["aria-labelledby", "aria-describedby"], ka = ["id", "disabled"], Sa = { value: null }, za = ["value"], Ia = {
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
  setup(e, { expose: u, emit: a }) {
    const l = e, m = A("inputId"), v = A("labelId"), h = A("helpId"), f = A("disabled"), c = M(() => {
      let r = [];
      return l.options.forEach((i) => {
        typeof i == "object" ? r.push({
          label: i.label || i.value,
          value: i.value || i.label,
          order: i.order == null ? null : i.order
        }) : r.push({ label: i, value: i });
      }), r.sort((i, y) => {
        let b = 0;
        (i.order != null || y.order != null) && (b = i.order != null && y.order != null ? i.order - y.order : i.order != null ? -1 : 1);
        let g = i.label.localeCompare(y.label);
        return b !== 0 ? b : g;
      }), r;
    }), t = a, { value: n } = pe(t, l), o = V(null);
    return u({
      target: o
    }), (r, i) => (N(), P("div", {
      class: I([r.$style.inputWrapper, d(f) ? r.$style.disabled : ""]),
      "aria-labelledby": d(v),
      "aria-describedby": d(h)
    }, [
      be(L("select", {
        id: d(m),
        class: I(r.$style.input),
        "onUpdate:modelValue": i[0] || (i[0] = (y) => ve(n) ? n.value = y : null),
        ref_key: "target",
        ref: o,
        disabled: d(f)
      }, [
        L("option", Sa, q(e.placeholder), 1),
        (N(!0), P(ke, null, Ne(c.value, (y) => (N(), P("option", {
          value: y.value
        }, q(y.label), 9, za))), 256))
      ], 10, ka), [
        [Ht, d(n)]
      ]),
      H(d(Te), {
        icon: "fa-solid fa-caret-down",
        class: I(r.$style.arrow)
      }, null, 8, ["class"])
    ], 10, $a));
  }
}, wa = {
  $style: ga
}, xa = /* @__PURE__ */ Q(Ia, [["__cssModules", wa]]);
var tt, $t;
function Ma() {
  if ($t) return tt;
  $t = 1;
  function* e(a, l, m = 0, v = null) {
    if (a.length === 0) return;
    v === null && (v = l.length);
    let f;
    for (; (f = l.indexOf(a, m)) > -1 && !(f + a.length > v); )
      yield f, m = f + 1;
  }
  function u(a) {
    return a.split("").reverse().join("");
  }
  return tt = {
    searchExact: e,
    reverse: u
  }, tt;
}
var lt, kt;
function Ca() {
  if (kt) return lt;
  kt = 1;
  const { searchExact: e, reverse: u } = Ma();
  function a(t, n, o) {
    t.length > n.length && ([t, n] = [n, t]);
    const r = n.length - t.length;
    if (r > o)
      return !1;
    if (o === 0)
      return t === n;
    let i;
    for (i = 0; i < t.length && t[i] === n[i]; i++)
      ;
    if (i === t.length)
      return r <= o;
    let y;
    for (y = t.length - 1; y >= 0 && t[y] === n[y + r]; y--)
      ;
    t = t.slice(i, y + 1), n = n.slice(i, y + 1 + r);
    const [b, g] = h(t, n, o);
    return b + (n.length - g) <= o;
  }
  function l(t, n) {
    t.length > n.length && ([t, n] = [n, t]);
    const o = new Array(t.length + 1);
    for (let y = 0; y <= t.length; y++)
      o[y] = y;
    let r, i;
    for (let y = 0; y < n.length; y++) {
      o[0] = y + 1, i = y;
      for (let b = 0; b < t.length; b++)
        r = o[b + 1], o[b + 1] = Math.min(
          i + +(t[b] !== n[y]),
          o[b] + 1,
          o[b + 1] + 1
        ), i = r;
    }
    return o[t.length];
  }
  function m(t, n) {
    const o = {};
    for (let r = Math.min(t.length - 1, n); r >= 0; r--)
      o[t[r]] = r;
    return o;
  }
  function* v(t, n, o) {
    if (t.length > n.length + o) return;
    const r = Math.floor(t.length / (o + 1));
    if (o === 0)
      for (const i of e(t, n))
        yield {
          start: i,
          end: i + t.length,
          dist: 0
        };
    else r >= 10 ? yield* f(t, n, o) : yield* c(t, n, o);
  }
  function h(t, n, o) {
    o = +o;
    let r;
    for (r = 0; r < Math.min(t.length, n.length) && t.charCodeAt(r) === n.charCodeAt(r); r++)
      ;
    if (r && (t = t.slice(r), n = n.slice(r)), t) {
      if (!n)
        return t.length <= o ? [t.length, r] : [null, null];
    } else return [0, r];
    if (o === 0) return [null, null];
    let i = new Array(t.length + 1);
    for (let p = 0; p <= o; p++)
      i[p] = p;
    let y = new Array(t.length + 1), b = null, g = null, $ = o, S = 0, _ = t.length - 1;
    for (let p = 0; p < n.length; p++) {
      const T = n.charCodeAt(p), R = Math.max(0, S - 1), W = Math.min(
        p + o,
        t.length - 1,
        _
      );
      y[0] = i[0] + 1, S = y[0] <= $ ? 0 : null, _ = y[0] <= $ ? 0 : -1;
      let U;
      for (U = R; U < W; U++) {
        const D = y[U + 1] = Math.min(
          i[U] + +(T !== t.charCodeAt(U)),
          i[U + 1] + 1,
          y[U] + 1
        );
        D <= $ && (S === null && (S = U + 1), _ = Math.max(
          _,
          U + 1 + ($ - D)
        ));
      }
      const z = y[U + 1] = Math.min(
        i[U] + +(T !== t.charCodeAt(U)),
        y[U] + 1
      );
      if (z <= $ && (S === null && (S = U + 1), _ = U + 1), U === t.length - 1 && (b === null || z <= b) && (b = z, g = p, b < $ && ($ = b)), [i, y] = [y, i], S === null) break;
    }
    return b !== null && b <= o ? [b, g + 1 + r] : [null, null];
  }
  function* f(t, n, o) {
    const r = Math.floor(t.length / (o + 1)), i = t.length, y = n.length;
    for (let b = 0; b <= t.length - r; b += r) {
      const g = t.slice(b, b + r), $ = b + r, S = u(t.slice(0, b)), _ = t.slice($), p = Math.max(0, b - o), T = Math.min(y, y - i + $ + o);
      for (const R of e(g, n, p, T)) {
        const [W, U] = h(
          _,
          n.slice(
            R + r,
            R - b + i + o
          ),
          o
        );
        if (W === null) continue;
        const [z, D] = h(
          S,
          u(n.slice(
            Math.max(0, R - b - (o - W)),
            R
          )),
          o - W
        );
        z !== null && (yield {
          start: R - D,
          end: R + r + U,
          dist: z + W
        });
      }
    }
  }
  function* c(t, n, o) {
    const r = t.length, i = n.length;
    if (r > i + o) return;
    const y = m(t, o);
    let b = [], g = [];
    for (let $ = 0; $ < n.length; $++) {
      const S = n[$];
      b = g, g = [];
      const _ = y[S];
      _ !== void 0 && (_ + 1 === r ? yield {
        start: $,
        end: $ + 1,
        dist: _
      } : g.push({
        startIdx: $,
        needleIdx: _ + 1,
        dist: _
      }));
      for (const p of b)
        if (t[p.needleIdx] === S)
          p.needleIdx + 1 === r ? yield {
            start: p.startIdx,
            end: $ + 1,
            dist: p.dist
          } : g.push({
            startIdx: p.startIdx,
            needleIdx: p.needleIdx + 1,
            dist: p.dist
          });
        else {
          if (p.dist === o) continue;
          g.push({
            startIdx: p.startIdx,
            needleIdx: p.needleIdx,
            dist: p.dist + 1
          });
          for (let T = 1; T <= o - p.dist; T++)
            if (p.needleIdx + T === r) {
              yield {
                start: p.startIdx,
                end: $ + 1,
                dist: p.dist + T
              };
              break;
            } else if (t[p.needleIdx + T] === S) {
              p.needleIdx + T + 1 === r ? yield {
                start: p.startIdx,
                end: $ + 1,
                dist: p.dist + T
              } : g.push({
                startIdx: p.startIdx,
                needleIdx: p.needleIdx + 1 + T,
                dist: p.dist + T
              });
              break;
            }
          $ + 1 < i && p.needleIdx + 1 < r && g.push({
            startIdx: p.startIdx,
            needleIdx: p.needleIdx + 1,
            dist: p.dist + 1
          });
        }
    }
    for (const $ of g)
      $.dist += t.length - $.needleIdx, $.dist <= o && (yield {
        start: $.startIdx,
        end: n.length,
        dist: $.dist
      });
  }
  return lt = {
    _expand: h,
    editDistance: l,
    fuzzySearch: v,
    fuzzySearchNgrams: f,
    fuzzySearchCandidates: c,
    isEditDistanceNoGreaterThan: a
  }, lt;
}
var nt, St;
function Na() {
  if (St) return nt;
  St = 1;
  const { editDistance: e, fuzzySearch: u, isEditDistanceNoGreaterThan: a } = Ca();
  return nt = {
    editDistance: e,
    fuzzySearch: u,
    isEditDistanceNoGreaterThan: a
  }, nt;
}
var Va = Na();
const Wa = "zoa__multiselect__input", Ea = "zoa__multiselect__inputWrapper", Ta = "zoa__multiselect__disabled", Aa = "zoa__multiselect__options", Pa = "zoa__multiselect__optlist", La = "zoa__multiselect__listItem", Oa = "zoa__multiselect__option", Da = "zoa__multiselect__selectAll", Ua = "zoa__multiselect__subgroup", Fa = "zoa__multiselect__noOptions", Ra = "zoa__multiselect__textboxWrapper", Ba = "zoa__multiselect__arrow", ja = {
  input: Wa,
  inputWrapper: Ea,
  disabled: Ta,
  options: Aa,
  optlist: Pa,
  listItem: La,
  option: Oa,
  selectAll: Da,
  subgroup: Ua,
  noOptions: Fa,
  textboxWrapper: Ra,
  arrow: Ba
}, qa = ["aria-labelledby", "aria-describedby"], Ga = ["placeholder", "id", "disabled"], Ha = ["title"], Za = ["onClick"], Ya = { key: 1 }, Ze = 10, Ka = {
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
  setup(e, { expose: u, emit: a }) {
    const l = e, m = A("inputId"), v = A("subId"), h = A("labelId"), f = A("helpId"), c = A("disabled"), t = a, { value: n } = pe(t, l);
    Array.isArray(n) || (n.value = []);
    const o = V(null), r = Ye((k) => {
      t("search", k);
    }, l.searchDelay), i = Ye((k) => {
      o.value = k;
    }, l.searchDelay), y = M({
      get() {
        return o.value;
      },
      set(k) {
        i(k), r(k);
      }
    }), b = M(() => (n.value ? n.value.length !== 1 : !0) ? l.itemNamePlural || l.itemName + "s" : l.itemName), g = M(() => {
      let k = [];
      return l.options.forEach((C) => {
        typeof C == "object" ? k.push({
          label: C.label || C.value,
          value: C.value || C.label,
          group: C.group || null,
          order: C.order == null ? null : C.order
        }) : k.push({ label: C, value: C, group: null });
      }), k.sort((C, E) => {
        let F;
        C.group === E.group ? F = 0 : !C.group || !E.group ? F = C.group ? 1 : -1 : F = C.group.localeCompare(E.group);
        let J = 0;
        (C.order != null || E.order != null) && (J = C.order != null && E.order != null ? C.order - E.order : C.order != null ? -1 : 1);
        let Le = C.label.localeCompare(E.label);
        return F !== 0 ? F : J !== 0 ? J : Le;
      }), k;
    }), $ = M(() => {
      const k = l.enableSearch && y.value, C = k ? y.value.toLowerCase() : null, E = (j) => j ? [...Va.fuzzySearch(C, j.toLowerCase(), 1)].length > 0 : !1;
      let F;
      k ? F = g.value.filter((j) => E(j.group) || E(j.label) || E(j.value)) : F = g.value;
      let J = [], Le = Object.entries(
        Object.groupBy(F, ({ group: j }) => j)
      ), We = C ? 2 : 1;
      return Le.forEach((j) => {
        let B = j[0], ye = j[1];
        B && B !== "null" && (J.push({
          ix: We,
          kind: "group",
          label: B,
          value: B,
          group: B
        }), We += 1), J = J.concat(
          ye.map((Ce, Ke) => ({
            ix: We + Ke,
            kind: "option",
            label: Ce.label,
            value: Ce.value,
            group: Ce.group
          }))
        ), We += ye.length;
      }), J;
    }), S = V(null), _ = V(null), p = V(null);
    u({
      target: _
    });
    const { y: T } = Nl(p), R = M(() => !p.value || p.value && T.value !== p.value.scrollTop ? 0 : T.value), W = M(() => {
      try {
        return p.value.clientHeight;
      } catch {
        return 500;
      }
    }), U = M(() => $.value.length < Ze * 2 ? 0 : Math.floor(R.value / l.itemHeight) - Ze), z = M(() => $.value.length < Ze * 2 ? $.value.length + Ze : Math.ceil((R.value + W.value) / l.itemHeight)), D = V(!1), Z = De(_), re = Se(p);
    function ee() {
      D.value = !0, setTimeout(() => {
        _.value.focus();
      }, 50);
    }
    function le() {
      try {
        S.value.blur(), _.value.blur(), p.value.blur();
      } catch {
      }
      D.value = !1;
    }
    function oe() {
      D.value ? le() : ee();
    }
    it(S, () => {
      le();
    }), X("ArrowDown", () => {
      if (g.value.length !== 0) {
        if (Z.focused.value)
          p.value.children[0].children[0].children[0].focus();
        else if (re.focused.value) {
          const k = [...p.value.querySelectorAll("label")], C = p.value.querySelector("label:focus");
          if (!C)
            k[0].focus();
          else {
            const E = k.findIndex((F) => F === C);
            E === k.length - 1 ? k[0].focus() : k[E + 1].focus();
          }
        }
      }
    }), X("ArrowUp", () => {
      if (g.value.length !== 0 && re.focused.value) {
        const k = [...p.value.querySelectorAll("label")], C = p.value.querySelector("label:focus");
        if (!C)
          _.value.focus();
        else {
          const E = k.findIndex((F) => F === C);
          E === 0 ? _.value.focus() : k[E - 1].focus();
        }
      }
    }), X("Enter", () => {
      le();
    });
    const fe = M({
      get() {
        const k = g.value;
        return n.value == null || n.value.length !== k.length ? !1 : k.filter((E) => !n.value.includes(E.value)).length === 0;
      },
      set(k) {
        k ? n.value = g.value.map((C) => C.value) : n.value = [];
      }
    }), K = M({
      get() {
        let k = $.value.filter((E) => E.kind === "option").map((E) => E.value);
        return n.value == null || n.value.length < k.length ? !1 : k.filter((E) => !n.value.includes(E)).length === 0;
      },
      set(k) {
        let C = $.value.filter((J) => J.kind === "option").map((J) => J.value);
        const E = n.value ? n.value : [], F = C.filter((J) => !E.includes(J));
        k ? n.value = E.concat(F) : n.value = E.filter((J) => !C.includes(J));
      }
    });
    function Pe(k) {
      const C = $.value.filter((F) => F.kind === "option" && F.group === k).map((F) => F.value);
      n.value = n.value ? n.value : [];
      const E = C.filter((F) => !n.value.includes(F));
      E.length > 0 ? E.forEach((F) => {
        n.value.push(F);
      }) : n.value = n.value.filter((F) => !C.includes(F));
    }
    return (k, C) => (N(), P("div", {
      class: I([k.$style.inputWrapper, d(c) ? k.$style.disabled : ""]),
      ref_key: "container",
      ref: S,
      "aria-labelledby": d(h),
      "aria-describedby": d(f)
    }, [
      L("div", {
        class: I(k.$style.textboxWrapper)
      }, [
        be(L("input", {
          type: "text",
          placeholder: e.placeholder,
          id: d(m),
          class: I(k.$style.input),
          "onUpdate:modelValue": C[0] || (C[0] = (E) => y.value = E),
          ref_key: "textbox",
          ref: _,
          disabled: d(c)
        }, null, 10, Ga), [
          [Ue, y.value],
          [at, D.value && !d(c)]
        ]),
        be(L("div", {
          class: I(k.$style.input),
          tabindex: "0",
          onFocusin: ee
        }, q(d(n) ? d(n).length : 0) + " " + q(b.value) + " selected ", 35), [
          [at, !D.value || d(c)]
        ]),
        H(d(Te), {
          icon: "fa-solid fa-caret-down",
          class: I(k.$style.arrow),
          onClick: oe
        }, null, 8, ["class"])
      ], 2),
      D.value && !d(c) ? (N(), P("div", {
        key: 0,
        class: I(k.$style.options),
        ref_key: "dropdown",
        ref: p
      }, [
        g.value.length > 0 ? (N(), P("ul", {
          key: 0,
          class: I(k.$style.optlist)
        }, [
          L("li", {
            title: "Select all",
            class: I([k.$style.selectAll, k.$style.listItem, k.$style.option]),
            style: Ge({ height: `${e.itemHeight}px` })
          }, [
            H(d(ce), {
              "zoa-type": "checkbox",
              label: "Select all",
              "label-position": "right",
              modelValue: fe.value,
              "onUpdate:modelValue": C[1] || (C[1] = (E) => fe.value = E)
            }, null, 8, ["modelValue"])
          ], 6),
          o.value ? (N(), P("li", {
            key: 0,
            title: "Select results",
            class: I([k.$style.selectAll, k.$style.listItem, k.$style.option]),
            style: Ge({ height: `${e.itemHeight}px` })
          }, [
            H(d(ce), {
              "zoa-type": "checkbox",
              label: "Select results",
              "label-position": "right",
              modelValue: K.value,
              "onUpdate:modelValue": C[2] || (C[2] = (E) => K.value = E)
            }, null, 8, ["modelValue"])
          ], 6)) : xe("", !0),
          (N(!0), P(ke, null, Ne($.value, (E) => (N(), P("li", {
            title: E.label,
            class: I([
              k.$style.listItem,
              E.kind === "group" ? k.$style.subgroup : k.$style.option
            ]),
            style: Ge({ height: `${e.itemHeight}px` })
          }, [
            E.kind === "group" ? (N(), P("div", {
              key: 0,
              onClick: (F) => Pe(E.group)
            }, q(E.label), 9, Za)) : (N(), P("div", Ya, [
              E.ix >= U.value && E.ix <= z.value ? (N(), Ee(d(ce), {
                key: 0,
                "zoa-type": "checkbox",
                label: E.label,
                "label-position": "right",
                options: { checkValue: E.value, name: d(v)("checkboxes") },
                modelValue: d(n),
                "onUpdate:modelValue": C[3] || (C[3] = (F) => ve(n) ? n.value = F : null)
              }, null, 8, ["label", "options", "modelValue"])) : xe("", !0)
            ]))
          ], 14, Ha))), 256))
        ], 2)) : (N(), P("div", {
          key: 1,
          class: I(k.$style.noOptions)
        }, "No options found", 2))
      ], 2)) : xe("", !0)
    ], 10, qa));
  }
}, Ja = {
  $style: ja
}, Xa = /* @__PURE__ */ Q(Ka, [["__cssModules", Ja]]), Qa = "zoa__number__input", eo = "zoa__number__inputWrapper", to = "zoa__number__disabled", lo = {
  input: Qa,
  inputWrapper: eo,
  disabled: to
}, no = ["aria-labelledby", "aria-describedby"], ao = ["placeholder", "min", "max", "step", "id", "disabled"], oo = {
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
  setup(e, { expose: u, emit: a }) {
    const l = e, m = A("inputId"), v = A("labelId"), h = A("helpId"), f = A("disabled"), c = a, { value: t } = pe(c, l), n = V(null);
    return u({
      target: n
    }), (o, r) => (N(), P("div", {
      class: I([o.$style.inputWrapper, d(f) ? o.$style.disabled : ""]),
      "aria-labelledby": d(v),
      "aria-describedby": d(h)
    }, [
      be(L("input", {
        type: "number",
        placeholder: e.placeholder,
        min: e.min,
        max: e.max,
        step: e.step,
        id: d(m),
        class: I(o.$style.input),
        "onUpdate:modelValue": r[0] || (r[0] = (i) => ve(t) ? t.value = i : null),
        ref_key: "target",
        ref: n,
        disabled: d(f)
      }, null, 10, ao), [
        [Ue, d(t)]
      ])
    ], 10, no));
  }
}, so = {
  $style: lo
}, uo = /* @__PURE__ */ Q(oo, [["__cssModules", so]]), ro = "zoa__rangeslider__input", io = "zoa__rangeslider__inputWrapper", co = {
  input: ro,
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
  setup(e, { expose: u, emit: a }) {
    const l = e;
    A("inputId");
    const m = A("labelId"), v = A("helpId"), h = A("disabled"), f = a, { valueChanged: c } = pe(f, l), t = V(null), n = V(null), o = M(() => {
      if (t.value)
        return t.value.target;
    }), r = M(() => t.value && n.value ? [t.value.target, n.value.target] : []);
    u({
      target: o,
      elements: r
    });
    const i = V(null), y = V(null), b = M(() => Math.max(
      Number(y.value) - Number(l.step),
      Number(l.min)
    )), g = M(() => Math.min(
      Number(i.value) + Number(l.step),
      Number(l.max)
    )), $ = M(() => {
      const S = Math.min(i.value, b.value), _ = Math.max(y.value, g.value);
      return [S, _];
    });
    return Ae($, () => {
      c($.value);
    }), (S, _) => (N(), P("div", {
      class: I(S.$style.inputWrapper),
      "aria-labelledby": d(m),
      "aria-describedby": d(v)
    }, [
      H(d(ce), {
        "zoa-type": "slider",
        label: e.labelLower,
        "label-position": e.labelsRight ? "right" : "left",
        options: {
          min: e.min,
          max: e.max,
          step: e.step,
          validMax: b.value,
          valueLabelPosition: "above",
          placeholderPosition: 0.25
        },
        modelValue: i.value,
        "onUpdate:modelValue": _[0] || (_[0] = (p) => i.value = p),
        ref: "lowerTrack",
        disabled: d(h)
      }, null, 8, ["label", "label-position", "options", "modelValue", "disabled"]),
      H(d(ce), {
        "zoa-type": "slider",
        label: e.labelUpper,
        "label-position": e.labelsRight ? "right" : "left",
        options: {
          min: e.min,
          max: e.max,
          step: e.step,
          validMin: g.value,
          placeholderPosition: 0.75,
          activeTrackRight: !0
        },
        modelValue: y.value,
        "onUpdate:modelValue": _[1] || (_[1] = (p) => y.value = p),
        ref: "upperTrack",
        disabled: d(h)
      }, null, 8, ["label", "label-position", "options", "modelValue", "disabled"])
    ], 10, po));
  }
}, mo = {
  $style: co
}, vo = /* @__PURE__ */ Q(fo, [["__cssModules", mo]]), bo = "zoa__slider__input", yo = "zoa__slider__inputWrapper", ho = "zoa__slider__track", _o = "zoa__slider__valueLabel", go = "zoa__slider__disabled", $o = {
  input: bo,
  inputWrapper: yo,
  track: ho,
  "track--active": "zoa__slider__track--active",
  valueLabel: _o,
  "valueLabel--below": "zoa__slider__valueLabel--below",
  "valueLabel--above": "zoa__slider__valueLabel--above",
  disabled: go
}, ko = ["aria-labelledby", "aria-describedby"], So = ["min", "max", "step", "id", "disabled"], zo = {
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
  setup(e, { expose: u, emit: a }) {
    const l = e, m = A("inputId"), v = A("labelId"), h = A("helpId"), f = A("disabled"), c = a, { value: t } = pe(c, l), n = V(null), o = V(null);
    u({
      target: n
    });
    const r = M(() => l.validMin ? Math.max(Number(l.validMin), Number(l.min)) : Number(l.min)), i = M(() => l.validMax ? Math.min(Number(l.validMax), Number(l.max)) : Number(l.max)), y = Se(n), b = De(o), g = M(() => t.value < r.value ? r.value : t.value > i.value ? i.value : t.value), $ = M(() => l.activeTrackRight ? { left: `${_.value.handle}%` } : { right: `${100 - _.value.handle}%` }), S = M(() => (t.value - l.min) / (l.max - l.min)), _ = M(() => p());
    function p() {
      try {
        const z = n.value.clientWidth, D = 24;
        o.value && (o.value.innerText = g.value);
        const Z = o.value ? o.value.clientWidth : 0, re = z / 2, oe = (S.value * z - re) / re * (D / 2), fe = oe + Z / 2, K = oe / z;
        return {
          handle: ((S.value - K) * 100).toFixed(2),
          label: ((S.value - fe / z) * 100).toFixed(2)
        };
      } catch {
        const z = S.value * 100;
        return { handle: z.toFixed(2), label: z.toFixed(2) };
      }
    }
    function T() {
      if (l.placeholder !== null && l.placeholder !== void 0)
        return l.placeholder;
      let D = (l.max - l.min) / (1 / l.placeholderPosition), Z = D % l.step;
      return D - Z + l.min;
    }
    function R() {
      if (t.value === l.max)
        return;
      let z = Number(t.value) + Number(l.step);
      z > l.max ? t.value = l.max : t.value = z;
    }
    function W() {
      if (t.value === l.min)
        return;
      let z = Number(t.value) - Number(l.step);
      z < l.min ? t.value = l.min : t.value = z;
    }
    function U(z) {
      z.preventDefault(), z.wheelDelta > 0 ? R() : z.wheelDelta < 0 && W();
    }
    return X("ArrowDown", (z) => {
      z.preventDefault(), (y.focused.value || b.focused.value) && W();
    }), X("ArrowLeft", (z) => {
      z.preventDefault(), (y.focused.value || b.focused.value) && W();
    }), X("ArrowUp", (z) => {
      z.preventDefault(), (y.focused.value || b.focused.value) && R();
    }), X("ArrowRight", (z) => {
      z.preventDefault(), (y.focused.value || b.focused.value) && R();
    }), Ae(t, (z) => {
      Number(z) >= Number(i.value) && (t.value = i.value), Number(z) <= Number(r.value) && (t.value = r.value);
    }), t.value = T(), (z, D) => (N(), P("div", {
      class: I([z.$style.inputWrapper, , d(f) ? z.$style.disabled : ""]),
      onWheel: U,
      "aria-labelledby": d(v),
      "aria-describedby": d(h)
    }, [
      L("span", {
        class: I(z.$style.track)
      }, null, 2),
      L("span", {
        class: I([z.$style.track, z.$style["track--active"]]),
        style: Ge($.value)
      }, null, 6),
      L("span", {
        class: I([z.$style.valueLabel, z.$style[`valueLabel--${e.valueLabelPosition}`]]),
        style: Ge({ left: `${_.value.label}%` }),
        ref_key: "valueLabel",
        ref: o,
        tabindex: "0"
      }, q(g.value), 7),
      be(L("input", {
        type: "range",
        min: e.min,
        max: e.max,
        step: e.step,
        id: d(m),
        class: I(z.$style.input),
        "onUpdate:modelValue": D[0] || (D[0] = (Z) => ve(t) ? t.value = Z : null),
        ref_key: "slider",
        ref: n,
        disabled: d(f)
      }, null, 10, So), [
        [Ue, d(t)]
      ])
    ], 42, ko));
  }
}, Io = {
  $style: $o
}, wo = /* @__PURE__ */ Q(zo, [["__cssModules", Io]]), xo = "zoa__textbox__input", Mo = "zoa__textbox__inputWrapper", Co = "zoa__textbox__disabled", No = {
  input: xo,
  inputWrapper: Mo,
  disabled: Co
}, Vo = ["aria-labelledby", "aria-describedby"], Wo = ["placeholder", "id", "disabled"], Eo = {
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
  setup(e, { expose: u, emit: a }) {
    const l = e, m = A("inputId"), v = A("labelId"), h = A("helpId"), f = A("disabled"), c = a, { value: t } = pe(c, l), n = V(null);
    return u({
      target: n
    }), (o, r) => (N(), P("div", {
      class: I([o.$style.inputWrapper, d(f) ? o.$style.disabled : ""]),
      "aria-labelledby": d(v),
      "aria-describedby": d(h)
    }, [
      be(L("input", {
        type: "text",
        placeholder: e.placeholder,
        id: d(m),
        class: I(o.$style.input),
        "onUpdate:modelValue": r[0] || (r[0] = (i) => ve(t) ? t.value = i : null),
        ref_key: "target",
        ref: n,
        disabled: d(f)
      }, null, 10, Wo), [
        [Ue, d(t)]
      ])
    ], 10, Vo));
  }
}, To = {
  $style: No
}, Ao = /* @__PURE__ */ Q(Eo, [["__cssModules", To]]), zt = {
  checkbox: {
    component: Ln,
    multi: !1,
    delay: 0,
    tabLabel: !0
  },
  "date-ambiguous": {
    component: sa,
    multi: !1,
    delay: 200
  },
  "date-simple": {
    component: va,
    multi: !1,
    delay: 200
  },
  dropdown: {
    component: xa,
    multi: !1,
    delay: 0
  },
  multiselect: {
    component: Xa,
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
    component: wo,
    multi: !1,
    delay: 200,
    wrapperProps: ["valueLabelPosition"]
  },
  "autocomplete-textbox": {
    component: In,
    multi: !1,
    delay: 200
  },
  textbox: {
    component: Ao,
    multi: !1,
    delay: 200
  }
}, Po = "zoa__input__input", Lo = "zoa__input__inputWrapper", Oo = "zoa__input__rootWrapper", Do = "zoa__input__checkbox", Uo = "zoa__input__slider", Fo = "zoa__input__emptyGrid", Ro = "zoa__input__fieldset", Bo = {
  input: Po,
  inputWrapper: Lo,
  rootWrapper: Oo,
  "rootWrapper--above": "zoa__input__rootWrapper--above",
  "rootWrapper--help": "zoa__input__rootWrapper--help",
  "rootWrapper--below": "zoa__input__rootWrapper--below",
  "rootWrapper--left": "zoa__input__rootWrapper--left",
  "rootWrapper--right": "zoa__input__rootWrapper--right",
  "rootWrapper--none": "zoa__input__rootWrapper--none",
  checkbox: Do,
  slider: Uo,
  "rootWrapper-valueLabelPosition--below": "zoa__input__rootWrapper-valueLabelPosition--below",
  "rootWrapper-valueLabelPosition--above": "zoa__input__rootWrapper-valueLabelPosition--above",
  "range-slider": "zoa__input__range-slider",
  emptyGrid: Fo,
  fieldset: Ro
}, jo = ["id"], qo = {
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
  setup(e, { expose: u, emit: a }) {
    const l = e, m = M(() => {
      let z = zt[l.zoaType];
      return z == null && (z = zt.empty), z;
    }), v = M(() => m.value.component), { componentId: h, subId: f } = ut(), c = f("input"), t = f("label"), n = f("help"), o = M(() => {
      let z = [
        "rootWrapper",
        `rootWrapper--${l.labelPosition}`,
        l.zoaType
      ];
      return l.help && z.push("rootWrapper--help"), m.value.wrapperProps && m.value.wrapperProps.forEach((D) => {
        l.options[D] != null && z.push(`rootWrapper-${D}--${l.options[D]}`);
      }), z;
    }), { addPropClasses: r } = Fe(l), i = a, { value: y } = pe(i, l), b = V(null), g = M(() => l.label), $ = M(() => l.labelPosition), S = M(() => l.help ? n : null), _ = M(() => l.disabled);
    Ie("label", g), Ie("labelPosition", $), Ie("componentId", h), Ie("subId", f), Ie("inputId", c), Ie("labelId", t), Ie("helpId", S), Ie("rootContainer", b), Ie("disabled", _);
    const p = V(null);
    function T() {
      p.value && p.value.target.focus();
    }
    function R() {
      p.value && p.value.target.blur();
    }
    const W = M(() => {
      if (p.value)
        return p.value.target;
    }), U = M(() => p.value && p.value.elements ? p.value.elements : {});
    return u({
      focus: T,
      blur: R,
      target: W,
      elements: U
    }), (z, D) => (N(), P("div", {
      id: d(h),
      ref_key: "rootContainer",
      ref: b,
      class: I(d(r)(o.value.map((Z) => z.$style[Z])))
    }, [
      m.value.multi ? (N(), P("fieldset", {
        key: 0,
        class: I(z.$style.fieldset)
      }, [
        H(bt, {
          "input-id": d(c),
          legend: !0,
          label: e.label,
          "label-position": e.labelPosition,
          tabbable: m.value.tabLabel
        }, null, 8, ["input-id", "label", "label-position", "tabbable"]),
        e.help ? (N(), Ee(yt, {
          key: 0,
          text: e.help,
          position: e.helpPosition
        }, null, 8, ["text", "position"])) : xe("", !0),
        v.value == null ? (N(), P("div", {
          key: 1,
          class: I([e.gridClass || z.$style.emptyGrid, z.$style.inputWrapper])
        }, [
          Ve(z.$slots, "default")
        ], 2)) : (N(), Ee(d(v), ot({ key: 2 }, e.options, {
          modelValue: d(y),
          "onUpdate:modelValue": D[0] || (D[0] = (Z) => ve(y) ? y.value = Z : null),
          ref_key: "inputComponent",
          ref: p
        }), null, 16, ["modelValue"]))
      ], 2)) : (N(), P(ke, { key: 1 }, [
        H(bt, {
          "input-id": d(c),
          legend: !1,
          label: e.label,
          "label-position": e.labelPosition,
          tabbable: m.value.tabLabel,
          help: e.help
        }, null, 8, ["input-id", "label", "label-position", "tabbable", "help"]),
        e.help ? (N(), Ee(yt, {
          key: 0,
          text: e.help,
          position: e.helpPosition
        }, null, 8, ["text", "position"])) : xe("", !0),
        H(d(v), ot(e.options, {
          modelValue: d(y),
          "onUpdate:modelValue": D[1] || (D[1] = (Z) => ve(y) ? y.value = Z : null),
          ref_key: "inputComponent",
          ref: p
        }), null, 16, ["modelValue"])
      ], 64))
    ], 10, jo));
  }
}, Go = {
  $style: Bo
}, ce = /* @__PURE__ */ Q(qo, [["__cssModules", Go]]);
function Wt(e) {
  return { icon: M(() => {
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
const Ho = "zoa__flash__main", Zo = "zoa__flash__container", Yo = "zoa__flash__header", Ko = "zoa__flash__icon", Jo = "zoa__flash__headerText", Xo = "zoa__flash__content", Qo = {
  main: Ho,
  container: Zo,
  header: Yo,
  icon: Ko,
  headerText: Jo,
  content: Xo,
  "kind--info": "zoa__flash__kind--info",
  "kind--warning": "zoa__flash__kind--warning",
  "kind--error": "zoa__flash__kind--error",
  "kind--success": "zoa__flash__kind--success"
}, es = {
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
    const u = e, { icon: a } = Wt(u), { addPropClasses: l } = Fe(u);
    return (m, v) => (N(), P("div", {
      class: I(
        d(l)([m.$style.main, m.$style.container, m.$style[`kind--${e.kind}`]])
      )
    }, [
      L("div", {
        class: I(m.$style.header)
      }, [
        H(d(Te), {
          icon: ["fa-solid", d(a)],
          class: I(m.$style.icon)
        }, null, 8, ["icon", "class"]),
        L("h2", {
          class: I(m.$style.headerText)
        }, q(e.header), 3)
      ], 2),
      L("div", {
        class: I(m.$style.content)
      }, [
        Ve(m.$slots, "default", {}, () => [
          we(q(e.message), 1)
        ])
      ], 2)
    ], 2));
  }
}, ts = {
  $style: Qo
}, ls = /* @__PURE__ */ Q(es, [["__cssModules", ts]]), ns = "zoa__modal__main", as = "zoa__modal__container", os = "zoa__modal__header", ss = "zoa__modal__icon", us = "zoa__modal__headerText", rs = "zoa__modal__content", is = "zoa__modal__form", ds = "zoa__modal__close", cs = {
  main: ns,
  container: as,
  header: os,
  icon: ss,
  headerText: us,
  content: rs,
  "kind--info": "zoa__modal__kind--info",
  "kind--warning": "zoa__modal__kind--warning",
  "kind--error": "zoa__modal__kind--error",
  "kind--success": "zoa__modal__kind--success",
  form: is,
  close: ds
}, ps = {
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
  setup(e, { emit: u }) {
    const a = e, l = u, { icon: m } = Wt(a), { addPropClasses: v } = Fe(a), h = V(null);
    function f() {
      h.value.show(), l("opened");
    }
    return it(h, () => {
      h.value.close(), l("closed");
    }), (c, t) => (N(), P(ke, null, [
      H(d(He), ot(e.buttonArgs, { onClick: f }), {
        default: qe(() => [
          Ve(c.$slots, "button")
        ]),
        _: 3
      }, 16),
      L("dialog", {
        ref_key: "modal",
        ref: h,
        class: I(d(v)([c.$style.main, c.$style[`kind--${e.kind}`]]))
      }, [
        L("div", {
          class: I(c.$style.container)
        }, [
          L("div", {
            class: I(c.$style.header)
          }, [
            H(d(Te), {
              icon: ["fa-solid", d(m)],
              class: I(c.$style.icon)
            }, null, 8, ["icon", "class"]),
            L("h2", {
              class: I(c.$style.headerText)
            }, [
              Ve(c.$slots, "header", {}, () => [
                we(q(e.header), 1)
              ])
            ], 2),
            L("form", {
              method: "dialog",
              class: I(c.$style.form),
              onSubmit: t[0] || (t[0] = (n) => l("closed"))
            }, [
              L("button", {
                class: I(c.$style.close)
              }, [
                H(d(Te), { icon: "fa-solid fa-xmark" })
              ], 2)
            ], 34)
          ], 2),
          L("div", {
            class: I(c.$style.content)
          }, [
            Ve(c.$slots, "default", {}, () => [
              we(q(e.message), 1)
            ])
          ], 2)
        ], 2)
      ], 2)
    ], 64));
  }
}, fs = {
  $style: cs
}, ms = /* @__PURE__ */ Q(ps, [["__cssModules", fs]]), vs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ZoaButton: He,
  ZoaFlash: ls,
  ZoaInput: ce,
  ZoaModal: ms,
  ZoaTabs: Kl,
  ZoaToggleButton: Fl
}, Symbol.toStringTag, { value: "Module" })), bs = new RegExp("[A-Z]+(?![a-z])|[A-Z]", "g");
function ys(e) {
  return e.replace(bs, (u, a) => (a ? "-" : "") + u.toLowerCase());
}
const ks = {
  install(e, u) {
    Object.entries(vs).forEach((a) => {
      const l = ys(a[0]);
      e.component(l, a[1]);
    });
  }
};
export {
  ls as F,
  ms as M,
  Fl as T,
  ks as Z,
  He as a,
  Kl as b,
  ce as c,
  gt as d,
  On as g
};
