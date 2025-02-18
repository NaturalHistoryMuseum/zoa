import { openBlock as A, createElementBlock as L, normalizeClass as $, unref as u, renderSlot as Ee, createTextVNode as Ve, toDisplayString as J, ref as E, computed as w, getCurrentScope as qt, onScopeDispose as jt, onMounted as Mt, nextTick as Ht, isRef as ve, getCurrentInstance as Ct, toValue as re, watch as Oe, reactive as bt, watchEffect as Vt, withDirectives as de, createElementVNode as D, vModelCheckbox as Nt, isProxy as Zt, toRaw as Gt, Fragment as ke, renderList as Ce, vModelRadio as Wt, inject as P, createCommentVNode as ze, createVNode as K, vShow as Ke, vModelText as Le, withKeys as Yt, withCtx as Ge, createBlock as Ae, vModelSelect as Kt, normalizeStyle as Fe, provide as Me, mergeProps as rt } from "vue";
import { library as Jt } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as Ne } from "@fortawesome/vue-fontawesome";
import { faCaretDown as Xt, faCheck as Qt, faCircle as el, faCircleCheck as tl, faCircleExclamation as ll, faCircleInfo as nl, faCircleQuestion as al, faCircleXmark as ol, faXmark as sl } from "@fortawesome/free-solid-svg-icons";
function Be(e) {
  function r(o) {
    return o = o || [], e.class && Array.isArray(e.class) ? o = o.concat(e.class) : e.class && o.push(e.class), o;
  }
  return { addPropClasses: r };
}
const ul = "zoa__button__main", rl = "zoa__button__checkbox", il = {
  main: ul,
  "kind--normal": "zoa__button__kind--normal",
  checkbox: rl,
  "kind--primary": "zoa__button__kind--primary",
  "kind--alt": "zoa__button__kind--alt",
  "size--sm": "zoa__button__size--sm",
  "size--md": "zoa__button__size--md"
}, ae = (e, r) => {
  const o = e.__vccOpts || e;
  for (const [l, m] of r)
    o[l] = m;
  return o;
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
    const r = e, { addPropClasses: o } = Be(r);
    return (l, m) => (A(), L("button", {
      class: $(
        u(o)([
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
}, Ye = /* @__PURE__ */ ae(dl, [["__cssModules", cl]]), pl = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let fl = (e = 21) => {
  let r = "", o = crypto.getRandomValues(new Uint8Array(e |= 0));
  for (; e--; )
    r += pl[o[e] & 63];
  return r;
};
function dt() {
  const e = E(fl(6));
  function r(o) {
    return `${e.value}__${o}`;
  }
  return { componentId: e, subId: r };
}
const Re = (e, r = 1, o) => {
  r = Math.max(1, r);
  const l = Math.max(1 / 0, r);
  let m, v, h = 0, c = 0;
  const p = () => {
    const _ = Date.now(), M = _ - h, k = _ - c, I = M >= r || k >= l;
    return [_, I];
  }, t = (_) => {
    if (c = _, !m)
      return;
    const M = m;
    m = void 0, e.apply(void 0, M);
  }, n = () => {
    g(0);
  }, a = () => {
    v && (n(), t(Date.now()));
  }, s = (_) => {
    c = _;
  }, d = (_) => {
    if (m)
      return t(_);
    m = void 0;
  }, y = () => {
    v = void 0;
    const [_, M] = p();
    return M ? d(_) : f(_);
  }, f = (_) => {
    const M = _ - h, k = _ - c, I = r - M, j = l - k, S = Math.min(I, j);
    return g(S);
  }, g = (_) => {
    v && clearTimeout(v), !(_ <= 0) && (v = setTimeout(y, _));
  }, b = (..._) => {
    const [M, k] = p(), I = !!v;
    if (m = _, h = M, (k || !v) && g(r), k)
      return I ? t(M) : s(M);
  };
  return b.cancel = n, b.flush = a, b;
};
function ce(e, r) {
  let o;
  try {
    o = parseInt(r.delay) || 0;
  } catch {
    o = 0;
  }
  const l = E(null);
  function m(a) {
    e("change", a);
  }
  function v(a) {
    e("update:modelValue", a), l.value = a;
  }
  const h = Re(m, o), c = Re(v, o);
  function p(a) {
    c(a), h(a);
  }
  const t = w({
    get() {
      return r.modelValue === void 0 ? l.value : r.modelValue;
    },
    set(a) {
      p(a);
    }
  });
  function n(a, ...s) {
    e(a, ...s), e("zoaEvent", a, ...s);
  }
  return { emitChange: h, valueChanged: p, value: t, zoaEvent: n };
}
function ct(e) {
  return qt() ? (jt(e), !0) : !1;
}
const Et = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ml = (e) => e != null, vl = Object.prototype.toString, bl = (e) => vl.call(e) === "[object Object]", Ie = () => {
}, yl = /* @__PURE__ */ hl();
function hl() {
  var e, r;
  return Et && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((r = window == null ? void 0 : window.navigator) == null ? void 0 : r.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function At(e, r) {
  function o(...l) {
    return new Promise((m, v) => {
      Promise.resolve(e(() => r.apply(this, l), { fn: r, thisArg: this, args: l })).then(m).catch(v);
    });
  }
  return o;
}
function _l(e, r = {}) {
  let o, l, m = Ie;
  const v = (c) => {
    clearTimeout(c), m(), m = Ie;
  };
  return (c) => {
    const p = re(e), t = re(r.maxWait);
    return o && v(o), p <= 0 || t !== void 0 && t <= 0 ? (l && (v(l), l = null), Promise.resolve(c())) : new Promise((n, a) => {
      m = r.rejectOnCancel ? a : n, t && !l && (l = setTimeout(() => {
        o && v(o), l = null, n(c());
      }, t)), o = setTimeout(() => {
        l && v(l), l = null, n(c());
      }, p);
    });
  };
}
function gl(...e) {
  let r = 0, o, l = !0, m = Ie, v, h, c, p, t;
  !ve(e[0]) && typeof e[0] == "object" ? { delay: h, trailing: c = !0, leading: p = !0, rejectOnCancel: t = !1 } = e[0] : [h, c = !0, p = !0, t = !1] = e;
  const n = () => {
    o && (clearTimeout(o), o = void 0, m(), m = Ie);
  };
  return (s) => {
    const d = re(h), y = Date.now() - r, f = () => v = s();
    return n(), d <= 0 ? (r = Date.now(), f()) : (y > d && (p || !l) ? (r = Date.now(), f()) : c && (v = new Promise((g, b) => {
      m = t ? b : g, o = setTimeout(() => {
        r = Date.now(), l = !0, g(f()), n();
      }, Math.max(0, d - y));
    })), !p && !o && (o = setTimeout(() => l = !0, d)), l = !1, v);
  };
}
function $l(e) {
  return Ct();
}
function it(e) {
  return Array.isArray(e) ? e : [e];
}
function kl(e, r = 200, o = {}) {
  return At(
    _l(r, o),
    e
  );
}
function Sl(e, r = 200, o = !1, l = !0, m = !1) {
  return At(
    gl(r, o, l, m),
    e
  );
}
function zl(e, r = !0, o) {
  $l() ? Mt(e, o) : r ? e() : Ht(e);
}
const We = Et ? window : void 0;
function Se(e) {
  var r;
  const o = re(e);
  return (r = o == null ? void 0 : o.$el) != null ? r : o;
}
function me(...e) {
  let r, o, l, m;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([o, l, m] = e, r = We) : [r, o, l, m] = e, !r)
    return Ie;
  o = it(o), l = it(l);
  const v = [], h = () => {
    v.forEach((n) => n()), v.length = 0;
  }, c = (n, a, s, d) => (n.addEventListener(a, s, d), () => n.removeEventListener(a, s, d)), p = Oe(
    () => [Se(r), re(m)],
    ([n, a]) => {
      if (h(), !n)
        return;
      const s = bl(a) ? { ...a } : a;
      v.push(
        ...o.flatMap((d) => l.map((y) => c(n, d, y, s)))
      );
    },
    { immediate: !0, flush: "post" }
  ), t = () => {
    p(), h();
  };
  return ct(t), t;
}
let yt = !1;
function Qe(e, r, o = {}) {
  const { window: l = We, ignore: m = [], capture: v = !0, detectIframe: h = !1 } = o;
  if (!l)
    return Ie;
  yl && !yt && (yt = !0, Array.from(l.document.body.children).forEach((f) => f.addEventListener("click", Ie)), l.document.documentElement.addEventListener("click", Ie));
  let c = !0;
  const p = (f) => re(m).some((g) => {
    if (typeof g == "string")
      return Array.from(l.document.querySelectorAll(g)).some((b) => b === f.target || f.composedPath().includes(b));
    {
      const b = Se(g);
      return b && (f.target === b || f.composedPath().includes(b));
    }
  });
  function t(f) {
    const g = re(f);
    return g && g.$.subTree.shapeFlag === 16;
  }
  function n(f, g) {
    const b = re(f), _ = b.$.subTree && b.$.subTree.children;
    return _ == null || !Array.isArray(_) ? !1 : _.some((M) => M.el === g.target || g.composedPath().includes(M.el));
  }
  const a = (f) => {
    const g = Se(e);
    if (f.target != null && !(!(g instanceof Element) && t(e) && n(e, f)) && !(!g || g === f.target || f.composedPath().includes(g))) {
      if (f.detail === 0 && (c = !p(f)), !c) {
        c = !0;
        return;
      }
      r(f);
    }
  };
  let s = !1;
  const d = [
    me(l, "click", (f) => {
      s || (s = !0, setTimeout(() => {
        s = !1;
      }, 0), a(f));
    }, { passive: !0, capture: v }),
    me(l, "pointerdown", (f) => {
      const g = Se(e);
      c = !p(f) && !!(g && !f.composedPath().includes(g));
    }, { passive: !0 }),
    h && me(l, "blur", (f) => {
      setTimeout(() => {
        var g;
        const b = Se(e);
        ((g = l.document.activeElement) == null ? void 0 : g.tagName) === "IFRAME" && !(b != null && b.contains(l.document.activeElement)) && r(f);
      }, 0);
    })
  ].filter(Boolean);
  return () => d.forEach((f) => f());
}
function Il() {
  const e = E(!1), r = Ct();
  return r && Mt(() => {
    e.value = !0;
  }, r), e;
}
function wl(e) {
  const r = Il();
  return w(() => (r.value, !!e()));
}
function xl(e, r, o = {}) {
  const { window: l = We, ...m } = o;
  let v;
  const h = wl(() => l && "MutationObserver" in l), c = () => {
    v && (v.disconnect(), v = void 0);
  }, p = w(() => {
    const s = re(e), d = it(s).map(Se).filter(ml);
    return new Set(d);
  }), t = Oe(
    () => p.value,
    (s) => {
      c(), h.value && s.size && (v = new MutationObserver(r), s.forEach((d) => v.observe(d, m)));
    },
    { immediate: !0, flush: "post" }
  ), n = () => v == null ? void 0 : v.takeRecords(), a = () => {
    t(), c();
  };
  return ct(a), {
    isSupported: h,
    stop: a,
    takeRecords: n
  };
}
function Tt(e, r, o = {}) {
  const {
    window: l = We,
    document: m = l == null ? void 0 : l.document,
    flush: v = "sync"
  } = o;
  if (!l || !m)
    return Ie;
  let h;
  const c = (n) => {
    h == null || h(), h = n;
  }, p = Vt(() => {
    const n = Se(e);
    if (n) {
      const { stop: a } = xl(
        m,
        (s) => {
          s.map((y) => [...y.removedNodes]).flat().some((y) => y === n || y.contains(n)) && r(s);
        },
        {
          window: l,
          childList: !0,
          subtree: !0
        }
      );
      c(a);
    }
  }, { flush: v }), t = () => {
    p(), c();
  };
  return ct(t), t;
}
function Ml(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (r) => r.key === e : Array.isArray(e) ? (r) => e.includes(r.key) : () => !0;
}
function ee(...e) {
  let r, o, l = {};
  e.length === 3 ? (r = e[0], o = e[1], l = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (r = !0, o = e[0], l = e[1]) : (r = e[0], o = e[1]) : (r = !0, o = e[0]);
  const {
    target: m = We,
    eventName: v = "keydown",
    passive: h = !1,
    dedupe: c = !1
  } = l, p = Ml(r);
  return me(m, v, (n) => {
    n.repeat && re(c) || p(n) && o(n);
  }, h);
}
function Cl(e = {}) {
  var r;
  const {
    window: o = We,
    deep: l = !0,
    triggerOnRemoval: m = !1
  } = e, v = (r = e.document) != null ? r : o == null ? void 0 : o.document, h = () => {
    var t;
    let n = v == null ? void 0 : v.activeElement;
    if (l)
      for (; n != null && n.shadowRoot; )
        n = (t = n == null ? void 0 : n.shadowRoot) == null ? void 0 : t.activeElement;
    return n;
  }, c = E(), p = () => {
    c.value = h();
  };
  return o && (me(o, "blur", (t) => {
    t.relatedTarget === null && p();
  }, !0), me(o, "focus", p, !0)), m && Tt(c, p, { document: v }), p(), c;
}
function Vl(e, r = {}) {
  const {
    delayEnter: o = 0,
    delayLeave: l = 0,
    triggerOnRemoval: m = !1,
    window: v = We
  } = r, h = E(!1);
  let c;
  const p = (t) => {
    const n = t ? o : l;
    c && (clearTimeout(c), c = void 0), n ? c = setTimeout(() => h.value = t, n) : h.value = t;
  };
  return v && (me(e, "mouseenter", () => p(!0), { passive: !0 }), me(e, "mouseleave", () => p(!1), { passive: !0 }), m && Tt(
    w(() => Se(e)),
    () => p(!1)
  )), h;
}
function Pe(e, r = {}) {
  const { initialValue: o = !1, focusVisible: l = !1, preventScroll: m = !1 } = r, v = E(!1), h = w(() => Se(e));
  me(h, "focus", (p) => {
    var t, n;
    (!l || (n = (t = p.target).matches) != null && n.call(t, ":focus-visible")) && (v.value = !0);
  }), me(h, "blur", () => v.value = !1);
  const c = w({
    get: () => v.value,
    set(p) {
      var t, n;
      !p && v.value ? (t = h.value) == null || t.blur() : p && !v.value && ((n = h.value) == null || n.focus({ preventScroll: m }));
    }
  });
  return Oe(
    h,
    () => {
      c.value = o;
    },
    { immediate: !0, flush: "post" }
  ), { focused: c };
}
const Nl = "focusin", Wl = "focusout", El = ":focus-within";
function ge(e, r = {}) {
  const { window: o = We } = r, l = w(() => Se(e)), m = E(!1), v = w(() => m.value), h = Cl(r);
  return !o || !h.value ? { focused: v } : (me(l, Nl, () => m.value = !0), me(l, Wl, () => {
    var c, p, t;
    return m.value = (t = (p = (c = l.value) == null ? void 0 : c.matches) == null ? void 0 : p.call(c, El)) != null ? t : !1;
  }), { focused: v });
}
const ht = 1;
function Pt(e, r = {}) {
  const {
    throttle: o = 0,
    idle: l = 200,
    onStop: m = Ie,
    onScroll: v = Ie,
    offset: h = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions: c = {
      capture: !1,
      passive: !0
    },
    behavior: p = "auto",
    window: t = We,
    onError: n = (S) => {
      console.error(S);
    }
  } = r, a = E(0), s = E(0), d = w({
    get() {
      return a.value;
    },
    set(S) {
      f(S, void 0);
    }
  }), y = w({
    get() {
      return s.value;
    },
    set(S) {
      f(void 0, S);
    }
  });
  function f(S, R) {
    var z, U, O, G;
    if (!t)
      return;
    const Y = re(e);
    if (!Y)
      return;
    (O = Y instanceof Document ? t.document.body : Y) == null || O.scrollTo({
      top: (z = re(R)) != null ? z : y.value,
      left: (U = re(S)) != null ? U : d.value,
      behavior: re(p)
    });
    const ne = ((G = Y == null ? void 0 : Y.document) == null ? void 0 : G.documentElement) || (Y == null ? void 0 : Y.documentElement) || Y;
    d != null && (a.value = ne.scrollLeft), y != null && (s.value = ne.scrollTop);
  }
  const g = E(!1), b = bt({
    left: !0,
    right: !1,
    top: !0,
    bottom: !1
  }), _ = bt({
    left: !1,
    right: !1,
    top: !1,
    bottom: !1
  }), M = (S) => {
    g.value && (g.value = !1, _.left = !1, _.right = !1, _.top = !1, _.bottom = !1, m(S));
  }, k = kl(M, o + l), I = (S) => {
    var R;
    if (!t)
      return;
    const z = ((R = S == null ? void 0 : S.document) == null ? void 0 : R.documentElement) || (S == null ? void 0 : S.documentElement) || Se(S), { display: U, flexDirection: O, direction: G } = getComputedStyle(z), Y = G === "rtl" ? -1 : 1, ne = z.scrollLeft;
    _.left = ne < a.value, _.right = ne > a.value;
    const X = ne * Y <= (h.left || 0), be = ne * Y + z.clientWidth >= z.scrollWidth - (h.right || 0) - ht;
    U === "flex" && O === "row-reverse" ? (b.left = be, b.right = X) : (b.left = X, b.right = be), a.value = ne;
    let W = z.scrollTop;
    S === t.document && !W && (W = t.document.body.scrollTop), _.top = W < s.value, _.bottom = W > s.value;
    const H = W <= (h.top || 0), F = W + z.clientHeight >= z.scrollHeight - (h.bottom || 0) - ht;
    U === "flex" && O === "column-reverse" ? (b.top = F, b.bottom = H) : (b.top = H, b.bottom = F), s.value = W;
  }, j = (S) => {
    var R;
    if (!t)
      return;
    const z = (R = S.target.documentElement) != null ? R : S.target;
    I(z), g.value = !0, k(S), v(S);
  };
  return me(
    e,
    "scroll",
    o ? Sl(j, o, !0, !1) : j,
    c
  ), zl(() => {
    try {
      const S = re(e);
      if (!S)
        return;
      I(S);
    } catch (S) {
      n(S);
    }
  }), me(
    e,
    "scrollend",
    M,
    c
  ), {
    x: d,
    y,
    isScrolling: g,
    arrivedState: b,
    directions: _,
    measure() {
      const S = re(e);
      t && S && I(S);
    }
  };
}
const Al = "zoa__togglebutton__input", Tl = "zoa__togglebutton__inputWrapper", Pl = "zoa__togglebutton__container", Ol = "zoa__togglebutton__main", Ll = "zoa__togglebutton__checkbox", Dl = {
  input: Al,
  inputWrapper: Tl,
  container: Pl,
  main: Ol,
  "kind--normal": "zoa__togglebutton__kind--normal",
  checkbox: Ll,
  "kind--primary": "zoa__togglebutton__kind--primary",
  "kind--alt": "zoa__togglebutton__kind--alt",
  "size--sm": "zoa__togglebutton__size--sm",
  "size--md": "zoa__togglebutton__size--md"
}, Ul = ["id", "for"], Fl = ["id", "name", "value"], Rl = {
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
  setup(e, { emit: r }) {
    const o = e, { componentId: l, subId: m } = dt(), { addPropClasses: v } = Be(o), h = r, { value: c } = ce(h, o), p = E(null), t = E(null), n = ge(p), a = w(() => o.checkValue || o.label);
    function s() {
      let d = Zt(c.value) ? Gt(c.value) : c.value;
      if (Array.isArray(d)) {
        let y = !t.value.checked;
        d = d.filter((f) => f !== a.value), y && d.push(a.value), c.value = d, t.value.checked = y;
      } else
        c.value = !c.value;
    }
    return ee(" ", () => {
      n.focused.value && s();
    }), ee("Enter", () => {
      n.focused.value && s();
    }), (d, y) => (A(), L("label", {
      id: u(l),
      for: u(m)("toggle"),
      tabindex: "0",
      ref_key: "checkboxContainer",
      ref: p,
      class: $(u(v)([d.$style.container]))
    }, [
      de(D("input", {
        type: "checkbox",
        id: u(m)("toggle"),
        class: $(d.$style.checkbox),
        "onUpdate:modelValue": y[0] || (y[0] = (f) => ve(c) ? c.value = f : null),
        name: e.name,
        value: a.value,
        ref_key: "checkboxInput",
        ref: t
      }, null, 10, Fl), [
        [Nt, u(c)]
      ]),
      D("span", {
        class: $([d.$style.main, d.$style[`kind--${e.kind}`], d.$style[`size--${e.size}`]])
      }, [
        Ee(d.$slots, "default", {}, () => [
          Ve(J(e.label), 1)
        ])
      ], 2)
    ], 10, Ul));
  }
}, Bl = {
  $style: Dl
}, ql = /* @__PURE__ */ ae(Rl, [["__cssModules", Bl]]), jl = "zoa__tabs__input", Hl = "zoa__tabs__inputWrapper", Zl = "zoa__tabs__tab", Gl = "zoa__tabs__tabContainer", Yl = {
  input: jl,
  inputWrapper: Hl,
  tab: Zl,
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
}, Kl = ["value"], Jl = {
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
  setup(e, { emit: r }) {
    const o = e;
    dt();
    const { addPropClasses: l } = Be(o), m = r, { value: v } = ce(m, o), h = E(null);
    E(null), ge(h);
    const c = w(() => {
      let p = [];
      return o.options.forEach((t) => {
        typeof t == "object" ? p.push({
          label: t.label || t.value,
          value: t.value || t.label,
          order: t.order == null ? null : t.order
        }) : p.push({ label: t, value: t });
      }), p.sort((t, n) => {
        let a = 0;
        (t.order != null || n.order != null) && (a = t.order != null && n.order != null ? t.order - n.order : t.order != null ? -1 : 1);
        let s = t.label.localeCompare(n.label);
        return a !== 0 ? a : s;
      }), p;
    });
    return v.value == null && (o.initialValue && c.value.some((p) => p.value === o.initialValue) ? v.value = o.initialValue : v.value = c.value[0].value), (p, t) => (A(), L("div", {
      class: $(u(l)([]))
    }, [
      D("ul", {
        class: $([p.$style.tabContainer, p.$style[`orient--${e.activePosition}`]])
      }, [
        (A(!0), L(ke, null, Ce(c.value, (n) => (A(), L("li", null, [
          D("label", {
            tabindex: "0",
            class: $([
              p.$style.tab,
              p.$style[`orient--${e.activePosition}`],
              p.$style[`kind--${e.kind}`],
              p.$style[`size--${e.size}`],
              p.$style[`state--${u(v) === n.value ? "active" : "inactive"}`]
            ])
          }, [
            de(D("input", {
              type: "radio",
              value: n.value,
              "onUpdate:modelValue": t[0] || (t[0] = (a) => ve(v) ? v.value = a : null)
            }, null, 8, Kl), [
              [Wt, u(v)]
            ]),
            D("span", null, J(n.label), 1)
          ], 2)
        ]))), 256))
      ], 2)
    ], 2));
  }
}, Xl = {
  $style: Yl
}, Ql = /* @__PURE__ */ ae(Jl, [["__cssModules", Xl]]), en = "zoa__label__main", tn = {
  main: en,
  "main--right": "zoa__label__main--right",
  "main--left": "zoa__label__main--left",
  "main--above": "zoa__label__main--above",
  "main--below": "zoa__label__main--below",
  "main--none": "zoa__label__main--none"
}, ln = ["id", "for", "tabindex"], nn = ["id"], an = {
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
    const r = P("labelId");
    return (o, l) => e.label && !e.legend ? (A(), L("label", {
      key: 0,
      id: u(r),
      for: e.inputId,
      class: $([o.$style.main, o.$style[`main--${e.labelPosition}`]]),
      tabindex: e.tabbable ? 0 : -1
    }, J(e.label), 11, ln)) : e.label ? (A(), L("legend", {
      key: 1,
      id: u(r),
      class: $([o.$style.main, o.$style[`main--${e.labelPosition}`]])
    }, J(e.label), 11, nn)) : ze("", !0);
  }
}, on = {
  $style: tn
}, _t = /* @__PURE__ */ ae(an, [["__cssModules", on]]);
Jt.add(
  Xt,
  Qt,
  el,
  tl,
  ll,
  nl,
  al,
  ol,
  sl
);
const sn = "zoa__help__main", un = "zoa__help__icon", rn = "zoa__help__popup", dn = {
  main: sn,
  "main--above": "zoa__help__main--above",
  "main--below": "zoa__help__main--below",
  icon: un,
  popup: rn,
  "popup--right": "zoa__help__popup--right"
}, cn = ["id"], pn = {
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
    const r = P("labelPosition"), o = P("helpId"), l = E(!1), m = E(null), v = Vl(m, { delayEnter: 500 });
    return Oe(v, () => {
      l.value = v.value;
    }), ee("Escape", () => l.value = !1), (h, c) => (A(), L("div", {
      class: $([h.$style.main, h.$style[`main--${u(r)}`]]),
      ref_key: "helpContainer",
      ref: m
    }, [
      K(u(Ne), {
        icon: ["fa-solid", "fa-circle-question"],
        class: $(h.$style.icon)
      }, null, 8, ["class"]),
      de(D("div", {
        class: $([h.$style.popup, h.$style[`popup--${e.position}`]]),
        id: u(o),
        role: "tooltip"
      }, [
        Ee(h.$slots, "default", {}, () => [
          Ve(J(e.text), 1)
        ])
      ], 10, cn), [
        [Ke, l.value]
      ])
    ], 2));
  }
}, fn = {
  $style: dn
}, gt = /* @__PURE__ */ ae(pn, [["__cssModules", fn]]);
function mn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var nt, $t;
function vn() {
  if ($t) return nt;
  $t = 1;
  function* e(o, l, m = 0, v = null) {
    if (o.length === 0) return;
    v === null && (v = l.length);
    let c;
    for (; (c = l.indexOf(o, m)) > -1 && !(c + o.length > v); )
      yield c, m = c + 1;
  }
  function r(o) {
    return o.split("").reverse().join("");
  }
  return nt = {
    searchExact: e,
    reverse: r
  }, nt;
}
var at, kt;
function bn() {
  if (kt) return at;
  kt = 1;
  const { searchExact: e, reverse: r } = vn();
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
    let y;
    for (y = t.length - 1; y >= 0 && t[y] === n[y + s]; y--)
      ;
    t = t.slice(d, y + 1), n = n.slice(d, y + 1 + s);
    const [f, g] = h(t, n, a);
    return f + (n.length - g) <= a;
  }
  function l(t, n) {
    t.length > n.length && ([t, n] = [n, t]);
    const a = new Array(t.length + 1);
    for (let y = 0; y <= t.length; y++)
      a[y] = y;
    let s, d;
    for (let y = 0; y < n.length; y++) {
      a[0] = y + 1, d = y;
      for (let f = 0; f < t.length; f++)
        s = a[f + 1], a[f + 1] = Math.min(
          d + +(t[f] !== n[y]),
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
  function* v(t, n, a) {
    if (t.length > n.length + a) return;
    const s = Math.floor(t.length / (a + 1));
    if (a === 0)
      for (const d of e(t, n))
        yield {
          start: d,
          end: d + t.length,
          dist: 0
        };
    else s >= 10 ? yield* c(t, n, a) : yield* p(t, n, a);
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
    for (let k = 0; k <= a; k++)
      d[k] = k;
    let y = new Array(t.length + 1), f = null, g = null, b = a, _ = 0, M = t.length - 1;
    for (let k = 0; k < n.length; k++) {
      const I = n.charCodeAt(k), j = Math.max(0, _ - 1), S = Math.min(
        k + a,
        t.length - 1,
        M
      );
      y[0] = d[0] + 1, _ = y[0] <= b ? 0 : null, M = y[0] <= b ? 0 : -1;
      let R;
      for (R = j; R < S; R++) {
        const U = y[R + 1] = Math.min(
          d[R] + +(I !== t.charCodeAt(R)),
          d[R + 1] + 1,
          y[R] + 1
        );
        U <= b && (_ === null && (_ = R + 1), M = Math.max(
          M,
          R + 1 + (b - U)
        ));
      }
      const z = y[R + 1] = Math.min(
        d[R] + +(I !== t.charCodeAt(R)),
        y[R] + 1
      );
      if (z <= b && (_ === null && (_ = R + 1), M = R + 1), R === t.length - 1 && (f === null || z <= f) && (f = z, g = k, f < b && (b = f)), [d, y] = [y, d], _ === null) break;
    }
    return f !== null && f <= a ? [f, g + 1 + s] : [null, null];
  }
  function* c(t, n, a) {
    const s = Math.floor(t.length / (a + 1)), d = t.length, y = n.length;
    for (let f = 0; f <= t.length - s; f += s) {
      const g = t.slice(f, f + s), b = f + s, _ = r(t.slice(0, f)), M = t.slice(b), k = Math.max(0, f - a), I = Math.min(y, y - d + b + a);
      for (const j of e(g, n, k, I)) {
        const [S, R] = h(
          M,
          n.slice(
            j + s,
            j - f + d + a
          ),
          a
        );
        if (S === null) continue;
        const [z, U] = h(
          _,
          r(n.slice(
            Math.max(0, j - f - (a - S)),
            j
          )),
          a - S
        );
        z !== null && (yield {
          start: j - U,
          end: j + s + R,
          dist: z + S
        });
      }
    }
  }
  function* p(t, n, a) {
    const s = t.length, d = n.length;
    if (s > d + a) return;
    const y = m(t, a);
    let f = [], g = [];
    for (let b = 0; b < n.length; b++) {
      const _ = n[b];
      f = g, g = [];
      const M = y[_];
      M !== void 0 && (M + 1 === s ? yield {
        start: b,
        end: b + 1,
        dist: M
      } : g.push({
        startIdx: b,
        needleIdx: M + 1,
        dist: M
      }));
      for (const k of f)
        if (t[k.needleIdx] === _)
          k.needleIdx + 1 === s ? yield {
            start: k.startIdx,
            end: b + 1,
            dist: k.dist
          } : g.push({
            startIdx: k.startIdx,
            needleIdx: k.needleIdx + 1,
            dist: k.dist
          });
        else {
          if (k.dist === a) continue;
          g.push({
            startIdx: k.startIdx,
            needleIdx: k.needleIdx,
            dist: k.dist + 1
          });
          for (let I = 1; I <= a - k.dist; I++)
            if (k.needleIdx + I === s) {
              yield {
                start: k.startIdx,
                end: b + 1,
                dist: k.dist + I
              };
              break;
            } else if (t[k.needleIdx + I] === _) {
              k.needleIdx + I + 1 === s ? yield {
                start: k.startIdx,
                end: b + 1,
                dist: k.dist + I
              } : g.push({
                startIdx: k.startIdx,
                needleIdx: k.needleIdx + 1 + I,
                dist: k.dist + I
              });
              break;
            }
          b + 1 < d && k.needleIdx + 1 < s && g.push({
            startIdx: k.startIdx,
            needleIdx: k.needleIdx + 1,
            dist: k.dist + 1
          });
        }
    }
    for (const b of g)
      b.dist += t.length - b.needleIdx, b.dist <= a && (yield {
        start: b.startIdx,
        end: n.length,
        dist: b.dist
      });
  }
  return at = {
    _expand: h,
    editDistance: l,
    fuzzySearch: v,
    fuzzySearchNgrams: c,
    fuzzySearchCandidates: p,
    isEditDistanceNoGreaterThan: o
  }, at;
}
var ot, St;
function yn() {
  if (St) return ot;
  St = 1;
  const { editDistance: e, fuzzySearch: r, isEditDistanceNoGreaterThan: o } = bn();
  return ot = {
    editDistance: e,
    fuzzySearch: r,
    isEditDistanceNoGreaterThan: o
  }, ot;
}
var pt = yn();
const hn = "zoa__autocompletetextbox__input", _n = "zoa__autocompletetextbox__inputWrapper", gn = "zoa__autocompletetextbox__disabled", $n = "zoa__autocompletetextbox__options", kn = "zoa__autocompletetextbox__option", Sn = "zoa__autocompletetextbox__noOptions", zn = {
  input: hn,
  inputWrapper: _n,
  disabled: gn,
  options: $n,
  option: kn,
  noOptions: Sn
}, In = ["aria-labelledby", "aria-describedby"], wn = ["placeholder", "id", "disabled"], xn = { key: 0 }, Mn = ["onClick"], Cn = ["value"], Vn = {
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
  setup(e, { expose: r, emit: o }) {
    const l = e, m = P("inputId"), v = P("labelId"), h = P("helpId"), c = P("disabled"), p = o, { value: t, valueChanged: n, zoaEvent: a } = ce(p, l), s = E(null), d = Re((S) => {
      s.value = S, a("search", S);
    }, l.searchDelay);
    t.setter = function(S) {
      n(S), d(S);
    };
    const y = w(() => {
      const S = l.enableSearch && s.value, R = S ? s.value.toLowerCase() : null, z = (O) => O ? [...pt.fuzzySearch(R, O.toLowerCase(), 1)].length > 0 : !1;
      let U = [];
      return l.options.forEach((O) => {
        typeof O == "object" ? U.push({
          value: O.value,
          order: O.order == null ? null : O.order
        }) : U.push({ value: O });
      }), S && (U = U.filter((O) => z(O.value))), U.sort((O, G) => {
        let Y = 0;
        (O.order != null || G.order != null) && (Y = O.order != null && G.order != null ? O.order - G.order : O.order != null ? -1 : 1);
        let ne = O.value.localeCompare(G.value);
        return Y !== 0 ? Y : ne;
      }), U;
    }), f = E(null), g = E(null), b = E(null);
    r({
      target: g
    });
    const _ = E(!1), M = Pe(g), k = ge(b);
    function I() {
      try {
        f.value.blur(), g.value.blur(), b.value.blur();
      } catch {
      }
      _.value = !1;
    }
    Qe(f, () => {
      _.value = !1;
    }), ee("ArrowDown", () => {
      if (y.value.length !== 0) {
        if (M.focused.value)
          b.value.children[0].children[0].focus();
        else if (k.focused.value) {
          const S = b.value.querySelector("li:focus");
          !S || !S.nextElementSibling ? b.value.children[0].children[0].focus() : S.nextElementSibling.focus();
        }
      }
    }), ee("ArrowUp", () => {
      if (y.value.length !== 0 && k.focused.value) {
        const S = b.value.querySelector("li:focus");
        !S || !S.previousElementSibling ? g.value.focus() : S.previousElementSibling.focus();
      }
    }), ee("Enter", () => {
      if (k.focused.value) {
        const S = b.value.querySelector("li:focus");
        S && j(S.querySelector("input").value);
      }
      I();
    });
    function j(S) {
      t.value = S, a("selected", S), I();
    }
    return (S, R) => (A(), L("div", {
      class: $([S.$style.inputWrapper, u(c) ? S.$style.disabled : ""]),
      ref_key: "container",
      ref: f,
      "aria-labelledby": u(v),
      "aria-describedby": u(h)
    }, [
      de(D("input", {
        type: "text",
        placeholder: e.placeholder,
        id: u(m),
        class: $(S.$style.input),
        "onUpdate:modelValue": R[0] || (R[0] = (z) => ve(t) ? t.value = z : null),
        onFocusin: R[1] || (R[1] = (z) => _.value = !0),
        ref_key: "textbox",
        ref: g,
        disabled: u(c)
      }, null, 42, wn), [
        [Le, u(t)]
      ]),
      _.value && !u(c) ? (A(), L("div", {
        key: 0,
        class: $(S.$style.options),
        ref_key: "dropdown",
        ref: b
      }, [
        y.value.length > 0 ? (A(), L("ul", xn, [
          (A(!0), L(ke, null, Ce(y.value, (z) => (A(), L("li", {
            class: $(S.$style.option),
            onClick: (U) => j(z.value),
            tabindex: "0"
          }, [
            D("span", null, J(z.value), 1),
            D("input", {
              type: "hidden",
              value: z.value
            }, null, 8, Cn)
          ], 10, Mn))), 256))
        ])) : (A(), L("div", {
          key: 1,
          class: $(S.$style.noOptions)
        }, "No options found", 2))
      ], 2)) : ze("", !0)
    ], 10, In));
  }
}, Nn = {
  $style: zn
}, Wn = /* @__PURE__ */ ae(Vn, [["__cssModules", Nn]]), En = "zoa__checkbox__input", An = "zoa__checkbox__inputWrapper", Tn = "zoa__checkbox__defaultCheckbox", Pn = "zoa__checkbox__checkbox", On = "zoa__checkbox__check", Ln = "zoa__checkbox__disabled", Dn = {
  input: En,
  inputWrapper: An,
  defaultCheckbox: Tn,
  checkbox: Pn,
  check: On,
  disabled: Ln
}, Un = ["aria-labelledby", "aria-describedby"], Fn = ["id", "name", "value", "disabled"], Rn = {
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
  setup(e, { expose: r, emit: o }) {
    const l = e, m = P("inputId"), v = P("labelId"), h = P("helpId"), c = P("disabled"), p = o, { value: t, valueChanged: n } = ce(p, l), a = P("rootContainer"), s = E(null), d = ge(a);
    r({
      target: s
    });
    const y = P("label"), f = w(() => l.checkValue || y.value), g = w({
      get() {
        return l.name ? t.value || [] : t.value || !1;
      },
      set(_) {
        n(_);
      }
    });
    function b() {
      if (!c.value)
        if (l.name) {
          let _ = !g.value.includes(f.value), M = g.value.filter((k) => k !== f.value);
          _ && M.push(f.value), g.value = M;
        } else
          g.value = !g.value;
    }
    return ee(" ", () => {
      d.focused.value && b();
    }), (_, M) => (A(), L("div", {
      class: $([_.$style.inputWrapper, u(c) ? _.$style.disabled : ""]),
      "aria-labelledby": u(v),
      "aria-describedby": u(h)
    }, [
      de(D("input", {
        type: "checkbox",
        id: u(m),
        class: $(_.$style.defaultCheckbox),
        "onUpdate:modelValue": M[0] || (M[0] = (k) => g.value = k),
        name: e.name ? e.name : null,
        value: f.value,
        ref_key: "checkboxInput",
        ref: s,
        disabled: u(c)
      }, null, 10, Fn), [
        [Nt, g.value]
      ]),
      D("span", {
        class: $(_.$style.checkbox),
        onClick: b
      }, [
        K(u(Ne), {
          icon: "fa-solid fa-check",
          class: $(_.$style.check)
        }, null, 8, ["class"])
      ], 2)
    ], 10, Un));
  }
}, Bn = {
  $style: Dn
}, qn = /* @__PURE__ */ ae(Rn, [["__cssModules", Bn]]);
var st, zt;
function jn() {
  return zt || (zt = 1, st = {
    __locale: "en",
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    abbreviated_days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    abbreviated_months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    am: "AM",
    pm: "PM"
  }), st;
}
var ut, It;
function Hn() {
  return It || (It = 1, ut = jn()), ut;
}
var Zn = Hn();
const wt = /* @__PURE__ */ mn(Zn), Gn = "zoa__dateambiguous__input", Yn = "zoa__dateambiguous__inputWrapper", Kn = "zoa__dateambiguous__disabled", Jn = "zoa__dateambiguous__datePopup", Xn = "zoa__dateambiguous__popupSection", Qn = "zoa__dateambiguous__yearGrid", ea = "zoa__dateambiguous__monthGrid", ta = "zoa__dateambiguous__dayGrid", la = "zoa__dateambiguous__editing", na = "zoa__dateambiguous__suggestion", aa = "zoa__dateambiguous__dateRange", oa = "zoa__dateambiguous__yearParts", sa = {
  input: Gn,
  inputWrapper: Yn,
  disabled: Kn,
  datePopup: Jn,
  popupSection: Xn,
  yearGrid: Qn,
  monthGrid: ea,
  dayGrid: ta,
  editing: la,
  suggestion: na,
  dateRange: aa,
  yearParts: oa
}, ua = ["aria-labelledby", "aria-describedby"], ra = ["placeholder", "id", "disabled"], ia = ["onClick", "onKeydown"], da = {
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
  setup(e, { expose: r, emit: o }) {
    const l = () => import("./dates-lEwMLwKL.js"), m = e, v = P("inputId"), h = P("labelId"), c = P("helpId"), p = P("disabled"), t = o, { valueChanged: n } = ce(t, m.delay), a = w(() => {
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
    }), s = w(() => {
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
    }), d = E(null), y = P("rootContainer"), f = E(null), g = E(null), b = E(null), _ = E(null), M = E(null), k = E(null), I = E(null), j = E(!1), { focused: S } = ge(y);
    r({
      target: d
    });
    const R = Pe(f), z = ge(f), U = Pe(g), O = ge(g), G = Pe(b), Y = ge(b), ne = w(() => {
      let i;
      return R.focused.value ? i = f.value : U.focused.value ? i = g.value : G.focused.value && (i = b.value), i;
    }), X = w(() => {
      let i;
      return z.focused.value ? i = f.value : O.focused.value ? i = g.value : Y.focused.value && (i = b.value), i;
    });
    ee("Enter", () => {
      ne && ne.value.children[0].focus();
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
      const i = y.value.querySelector("*:focus");
      i && i.blur();
    });
    function be(i, N, C) {
      i.value && (i.value.target.onkeyup = (B) => {
        /^[0-9]$/.test(B.key) && N ? N.value.focus() : B.key === "Backspace" && C && C.value.focus();
      });
    }
    Vt(() => {
      be(_, M, null), be(M, k, _), be(k, I, M), be(I, null, k);
    });
    const W = w(() => ({
      year: se.value,
      month: $e.value,
      day: _e.value,
      earliest: `${F.value.lower.year.toString().padStart(4, "0")}-${F.value.lower.month.toString().padStart(2, "0")}-${F.value.lower.day.toString().padStart(2, "0")}`,
      latest: `${F.value.upper.year.toString().padStart(4, "0")}-${F.value.upper.month.toString().padStart(2, "0")}-${F.value.upper.day.toString().padStart(2, "0")}`
    })), H = w(() => ft(
      W.value.year,
      W.value.month,
      W.value.day
    )), F = w(() => {
      let i, N;
      if (!Te.value)
        i = a.value.year, N = s.value.year;
      else {
        const we = 10 ** (4 - (Math.max(
          ...pe.map((Rt, Bt) => isNaN(parseInt(Z.value[Rt])) ? -1 : Bt)
        ) + 1)), he = je(Z.value, 4), Ze = Math.floor(a.value.year / we) * we, vt = Math.floor(s.value.year / we) * we;
        he < Ze || he > vt ? (i = a.value.year, N = s.value.year) : he === Ze ? (i = a.value.year, N = he + we - 1) : he === vt ? (i = he, N = s.value.year) : (i = he, N = he + we - 1);
      }
      const C = i === a.value.year, B = N === s.value.year, oe = C ? Math.max(a.value.month, xe.value || 1) : xe.value || 1, ue = B ? Math.min(s.value.month, xe.value || 12) : xe.value || 12, ye = oe === a.value.month, le = ue === s.value.month;
      let Q = Ue.value || 1, ie = Ue.value || He(ue);
      return Q = C && ye ? Math.max(Q, a.value.day) : Q, ie = B && le ? Math.min(ie, s.value.day) : ie, i === N && oe === ue && (B && le && Q > ie && (Q = 1), C && ye && ie < Q && (ie = He(ue))), {
        lower: {
          year: i,
          month: oe,
          day: Q,
          isMinYear: C,
          isMinMonth: ye
        },
        upper: {
          year: N,
          month: ue,
          day: ie,
          isMaxYear: B,
          isMaxMonth: le
        }
      };
    });
    function x(i, N, C) {
      const B = isNaN(parseInt(i)), oe = isNaN(parseInt(N)), ue = isNaN(parseInt(C)), ye = oe || N <= 12 && N >= 1, le = ue || C <= He(N);
      if (B || i > F.value.lower.year && i < F.value.upper.year)
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
      return i === F.value.lower.year && (Q = Q && (oe || N >= F.value.lower.month), N === F.value.lower.month && (ie = ie && (ue || C >= F.value.lower.day))), i === F.value.upper.year && (Q = Q && (oe || N <= F.value.upper.month), N === F.value.upper.month && (ie = ie && (ue || C <= F.value.upper.day))), {
        year: !0,
        month: Q,
        day: ie
      };
    }
    function V() {
      d.value.value = H.value, j.value = !1;
    }
    const T = E([]);
    function q(i) {
      j.value = !0, l().then((N) => {
        T.value = N.parseDate(i.target.value);
      });
    }
    const te = Re(q, 200);
    function De(i) {
      Z.value = tt(i.year), $e.value = i.month, _e.value = i.day, T.value = [];
    }
    const se = w(() => {
      if (!Te.value)
        return null;
      const i = je(Z.value, 4);
      return x(i, $e.value, _e.value).year ? i : null;
    }), Z = E({
      millenium: null,
      century: null,
      decade: null,
      year: null
    }), pe = ["millenium", "century", "decade", "year"], Te = w(() => Object.values(Z.value).some((i) => !isNaN(parseInt(i)))), qe = w(() => {
      const i = tt(F.value.lower.year), N = {
        millenium: null,
        century: null,
        decade: null,
        year: null
      };
      if (a.value.year === s.value.year && isNaN(parseInt(Z.value.year)))
        return [i];
      if (F.value.lower.year === F.value.upper.year)
        return [N];
      const C = tt(F.value.upper.year);
      let B, oe = { ...N };
      if (Te.value)
        B = Math.max(
          ...pe.map((le, Q) => (oe[le] = Z.value[le], isNaN(parseInt(Z.value[le])) ? -1 : Q))
        ) + 1;
      else
        for (let le = 0; le < pe.length; le++) {
          let Q = pe[le];
          if (i[Q] === C[Q])
            oe[Q] = i[Q];
          else if (B == null) {
            B = le;
            break;
          }
        }
      function ue(le) {
        let Q = pe[le];
        const ie = je(i, le + 1), mt = je(C, le + 1);
        return Array(10).fill(0).map((we, he) => {
          let Ze = { ...oe };
          return Ze[Q] = we + he, Ze;
        }).filter((we) => {
          const he = je(we, le + 1);
          return he >= ie && he <= mt;
        });
      }
      let ye = ue(B);
      return ye.length === 1 && B < 3 && (oe = { ...ye[0] }, ye = ue(B + 1)), Te.value && ye.push(N), ye;
    }), et = w(() => se.value % 100 === 0 ? se.value % 400 === 0 : se.value % 4 === 0);
    function Lt(i) {
      return Object.values(i).every((N) => N == null) ? "clear" : pe.map((N) => i[N] || 0).join("");
    }
    function je(i, N) {
      return pe.slice(0, N).reduce((C, B, oe) => {
        let ue = i[B] || 0;
        return C + ue * 10 ** (3 - oe);
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
      if (Z.value = i, Math.max(
        ...pe.map(
          (C, B) => isNaN(parseInt(Z.value[C])) ? -1 : B
        )
      ) === 3) {
        let C = x(se.value, $e.value, _e.value);
        (!C.month || !C.day) && ($e.value = null, _e.value = null);
      }
    }
    const xe = E(null), $e = w({
      get() {
        return x(se.value, xe.value, _e.value).month ? xe.value : null;
      },
      set(i) {
        xe.value = isNaN(parseInt(i)) ? null : i, _e.value && _e.value > lt.value && (_e.value = lt.value);
      }
    }), Ut = w(() => {
      let i = wt.abbreviated_months.map((C, B) => [C, B + 1]);
      const N = se.value ? se.value : a.value.year === s.value.year ? a.value.year : null;
      if (N === a.value.year && (i = i.slice(a.value.month - 1, i.length)), N === s.value.year) {
        const C = 12 - i.length;
        i = i.slice(0, s.value.month - C);
      }
      return xe.value && i.push(["clear", null]), i;
    }), lt = w(() => He($e.value));
    function He(i) {
      return [4, 6, 9, 11].includes(i) ? 30 : i === 2 ? et.value ? 29 : 28 : 31;
    }
    const Ue = E(null), _e = w({
      get() {
        const i = x(se.value, xe.value, Ue.value);
        return i.month && i.day ? Ue.value : null;
      },
      set(i) {
        Ue.value = isNaN(parseInt(i)) ? null : i;
      }
    }), Ft = w(() => {
      const i = se.value ? se.value : a.value.year === s.value.year ? a.value.year : null, N = $e.value ? $e.value : a.value.year === s.value.year && a.value.month === s.value.month ? a.value.month : null, C = He(N);
      let B = Array(C).fill(1).map((oe, ue) => ue + 1);
      if (i === a.value.year && !isNaN(parseInt(N)) && N <= a.value.month && (B = B.slice(a.value.day - 1)), i === s.value.year && !isNaN(parseInt(N)) && N >= s.value.month) {
        const oe = C - B.length;
        B = B.slice(0, s.value.day - oe);
      }
      return Ue.value && B.push(null), B;
    });
    function ft(i, N, C) {
      const B = wt.abbreviated_months[N - 1];
      return i && N && C ? `${C} ${B} ${i}` : i && N ? `${B} ${i}` : i && C ? `${C} ??? ${i}` : N && C ? `${C} ${B}` : i || (N ? B : C ? `day ${C}` : null);
    }
    return Oe(W, () => {
      V(), n(W.value);
    }), (i, N) => (A(), L("div", {
      class: $([i.$style.inputWrapper, u(p) ? i.$style.disabled : ""]),
      "aria-labelledby": u(h),
      "aria-describedby": u(c)
    }, [
      D("input", {
        type: "text",
        placeholder: e.placeholder,
        id: u(v),
        class: $([i.$style.input, j.value ? i.$style.editing : ""]),
        ref_key: "displayBox",
        ref: d,
        onInput: N[0] || (N[0] = (...C) => u(te) && u(te)(...C)),
        disabled: u(p)
      }, null, 42, ra),
      u(S) && !u(p) ? (A(), L("div", {
        key: 0,
        class: $(i.$style.datePopup)
      }, [
        T.value.length > 0 ? (A(), L("div", {
          key: 0,
          class: $(i.$style.popupSection)
        }, [
          (A(!0), L(ke, null, Ce(T.value, (C) => (A(), L("span", {
            onClick: (B) => De(C),
            onKeydown: Yt((B) => De(C), ["enter"]),
            class: $(i.$style.suggestion),
            tabindex: "0"
          }, J(ft(C.year, C.month, C.day)), 43, ia))), 256))
        ], 2)) : ze("", !0),
        D("div", {
          class: $(i.$style.popupSection)
        }, [
          K(u(fe), {
            label: "year",
            "grid-class": i.$style.yearParts
          }, {
            default: Ge(() => [
              K(u(fe), {
                "zoa-type": "number",
                label: "millenium",
                "label-position": "none",
                options: { placeholder: 0, min: 0, max: 9 },
                modelValue: Z.value.millenium,
                "onUpdate:modelValue": N[1] || (N[1] = (C) => Z.value.millenium = C),
                ref_key: "yrM",
                ref: _
              }, null, 8, ["modelValue"]),
              K(u(fe), {
                "zoa-type": "number",
                label: "century",
                "label-position": "none",
                options: { placeholder: 0, min: 0, max: 9 },
                modelValue: Z.value.century,
                "onUpdate:modelValue": N[2] || (N[2] = (C) => Z.value.century = C),
                ref_key: "yrC",
                ref: M
              }, null, 8, ["modelValue"]),
              K(u(fe), {
                "zoa-type": "number",
                label: "decade",
                "label-position": "none",
                options: { placeholder: 0, min: 0, max: 9 },
                modelValue: Z.value.decade,
                "onUpdate:modelValue": N[3] || (N[3] = (C) => Z.value.decade = C),
                ref_key: "yrD",
                ref: k
              }, null, 8, ["modelValue"]),
              K(u(fe), {
                "zoa-type": "number",
                label: "year",
                "label-position": "none",
                options: { placeholder: 0, min: 0, max: 9 },
                modelValue: Z.value.year,
                "onUpdate:modelValue": N[4] || (N[4] = (C) => Z.value.year = C),
                ref_key: "yrY",
                ref: I
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["grid-class"]),
          D("div", {
            class: $(i.$style.yearGrid),
            tabindex: "0",
            ref_key: "yearBtns",
            ref: f
          }, [
            (A(!0), L(ke, null, Ce(qe.value, (C) => (A(), Ae(u(Ye), {
              size: "sm",
              onClick: (B) => Dt(C),
              tabindex: "-1"
            }, {
              default: Ge(() => [
                Ve(J(Lt(C)), 1)
              ]),
              _: 2
            }, 1032, ["onClick"]))), 256))
          ], 2)
        ], 2),
        D("div", {
          class: $(i.$style.popupSection)
        }, [
          K(u(fe), {
            "zoa-type": "number",
            label: "month",
            options: { placeholder: 1, min: 1, max: 12 },
            modelValue: $e.value,
            "onUpdate:modelValue": N[5] || (N[5] = (C) => $e.value = C)
          }, null, 8, ["modelValue"]),
          D("div", {
            class: $(i.$style.monthGrid),
            tabindex: "0",
            ref_key: "monthBtns",
            ref: g
          }, [
            (A(!0), L(ke, null, Ce(Ut.value, (C) => (A(), Ae(u(Ye), {
              size: "sm",
              onClick: (B) => $e.value = C[1],
              tabindex: "-1"
            }, {
              default: Ge(() => [
                Ve(J(C[0]), 1)
              ]),
              _: 2
            }, 1032, ["onClick"]))), 256))
          ], 2)
        ], 2),
        D("div", {
          class: $(i.$style.popupSection)
        }, [
          K(u(fe), {
            "zoa-type": "number",
            label: "day",
            options: { placeholder: 1, min: 1, max: lt.value },
            modelValue: _e.value,
            "onUpdate:modelValue": N[6] || (N[6] = (C) => _e.value = C)
          }, null, 8, ["options", "modelValue"]),
          D("div", {
            class: $(i.$style.dayGrid),
            tabindex: "0",
            ref_key: "dayBtns",
            ref: b
          }, [
            (A(!0), L(ke, null, Ce(Ft.value, (C) => (A(), Ae(u(Ye), {
              size: "sm",
              onClick: (B) => _e.value = C,
              tabindex: "-1"
            }, {
              default: Ge(() => [
                Ve(J(C || "clear"), 1)
              ]),
              _: 2
            }, 1032, ["onClick"]))), 256))
          ], 2)
        ], 2),
        D("div", {
          class: $(i.$style.popupSection)
        }, [
          D("small", {
            class: $(i.$style.dateRange)
          }, J(W.value.earliest) + " to " + J(W.value.latest), 3)
        ], 2)
      ], 2)) : ze("", !0)
    ], 10, ua));
  }
}, ca = {
  $style: sa
}, pa = /* @__PURE__ */ ae(da, [["__cssModules", ca]]), fa = "zoa__datesimple__input", ma = "zoa__datesimple__inputWrapper", va = "zoa__datesimple__disabled", ba = {
  input: fa,
  inputWrapper: ma,
  disabled: va
}, ya = ["aria-labelledby", "aria-describedby"], ha = ["placeholder", "min", "max", "step", "id", "disabled"], _a = {
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
  setup(e, { expose: r, emit: o }) {
    const l = e, m = P("inputId"), v = P("labelId"), h = P("helpId"), c = P("disabled"), p = o, { value: t } = ce(p, l), n = E(null);
    return r({
      target: n
    }), (a, s) => (A(), L("div", {
      class: $([a.$style.inputWrapper, u(c) ? a.$style.disabled : ""]),
      "aria-labelledby": u(v),
      "aria-describedby": u(h)
    }, [
      de(D("input", {
        type: "date",
        placeholder: e.placeholder,
        min: e.min,
        max: e.max,
        step: e.step,
        id: u(m),
        class: $(a.$style.input),
        "onUpdate:modelValue": s[0] || (s[0] = (d) => ve(t) ? t.value = d : null),
        ref_key: "target",
        ref: n,
        disabled: u(c)
      }, null, 10, ha), [
        [Le, u(t)]
      ])
    ], 10, ya));
  }
}, ga = {
  $style: ba
}, $a = /* @__PURE__ */ ae(_a, [["__cssModules", ga]]), ka = "zoa__dropdown__input", Sa = "zoa__dropdown__inputWrapper", za = "zoa__dropdown__arrow", Ia = "zoa__dropdown__disabled", wa = {
  input: ka,
  inputWrapper: Sa,
  arrow: za,
  disabled: Ia
}, xa = ["aria-labelledby", "aria-describedby"], Ma = ["id", "disabled"], Ca = { value: null }, Va = ["value"], Na = {
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
  setup(e, { expose: r, emit: o }) {
    const l = e, m = P("inputId"), v = P("labelId"), h = P("helpId"), c = P("disabled"), p = w(() => {
      let s = [];
      return l.options.forEach((d) => {
        typeof d == "object" ? s.push({
          label: d.label || d.value,
          value: d.value || d.label,
          order: d.order == null ? null : d.order
        }) : s.push({ label: d, value: d });
      }), s.sort((d, y) => {
        let f = 0;
        (d.order != null || y.order != null) && (f = d.order != null && y.order != null ? d.order - y.order : d.order != null ? -1 : 1);
        let g = d.label.localeCompare(y.label);
        return f !== 0 ? f : g;
      }), s;
    }), t = o, { value: n } = ce(t, l), a = E(null);
    return r({
      target: a
    }), (s, d) => (A(), L("div", {
      class: $([s.$style.inputWrapper, u(c) ? s.$style.disabled : ""]),
      "aria-labelledby": u(v),
      "aria-describedby": u(h)
    }, [
      de(D("select", {
        id: u(m),
        class: $(s.$style.input),
        "onUpdate:modelValue": d[0] || (d[0] = (y) => ve(n) ? n.value = y : null),
        ref_key: "target",
        ref: a,
        disabled: u(c)
      }, [
        D("option", Ca, J(e.placeholder), 1),
        (A(!0), L(ke, null, Ce(p.value, (y) => (A(), L("option", {
          value: y.value
        }, J(y.label), 9, Va))), 256))
      ], 10, Ma), [
        [Kt, u(n)]
      ]),
      K(u(Ne), {
        icon: "fa-solid fa-caret-down",
        class: $(s.$style.arrow)
      }, null, 8, ["class"])
    ], 10, xa));
  }
}, Wa = {
  $style: wa
}, Ea = /* @__PURE__ */ ae(Na, [["__cssModules", Wa]]), Aa = "zoa__multiselect__input", Ta = "zoa__multiselect__inputWrapper", Pa = "zoa__multiselect__disabled", Oa = "zoa__multiselect__options", La = "zoa__multiselect__optlist", Da = "zoa__multiselect__listItem", Ua = "zoa__multiselect__option", Fa = "zoa__multiselect__selectAll", Ra = "zoa__multiselect__subgroup", Ba = "zoa__multiselect__noOptions", qa = "zoa__multiselect__textboxWrapper", ja = "zoa__multiselect__arrow", Ha = {
  input: Aa,
  inputWrapper: Ta,
  disabled: Pa,
  options: Oa,
  optlist: La,
  listItem: Da,
  option: Ua,
  selectAll: Fa,
  subgroup: Ra,
  noOptions: Ba,
  textboxWrapper: qa,
  arrow: ja
}, Za = ["aria-labelledby", "aria-describedby"], Ga = ["placeholder", "id", "disabled"], Ya = ["title"], Ka = ["onClick"], Ja = { key: 1 }, Je = 10, Xa = {
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
  setup(e, { expose: r, emit: o }) {
    const l = e, m = P("inputId"), v = P("subId"), h = P("labelId"), c = P("helpId"), p = P("disabled"), t = o, { value: n, zoaEvent: a } = ce(t, l);
    Array.isArray(n) || (n.value = []);
    const s = E(null), d = E(null), y = Re((x) => {
      d.value = x, a("search", x);
    }, l.searchDelay), f = w({
      get() {
        return s.value;
      },
      set(x) {
        s.value = x, y(x);
      }
    }), g = w(() => (n.value ? n.value.length !== 1 : !0) ? l.itemNamePlural || l.itemName + "s" : l.itemName), b = w(() => {
      let x = [];
      return l.options.forEach((V) => {
        typeof V == "object" ? x.push({
          label: V.label || V.value,
          value: V.value || V.label,
          group: V.group || null,
          order: V.order == null ? null : V.order
        }) : x.push({ label: V, value: V, group: null });
      }), x.sort((V, T) => {
        let q;
        V.group === T.group ? q = 0 : !V.group || !T.group ? q = V.group ? 1 : -1 : q = V.group.localeCompare(T.group);
        let te = 0;
        (V.order != null || T.order != null) && (te = V.order != null && T.order != null ? V.order - T.order : V.order != null ? -1 : 1);
        let De = V.label.localeCompare(T.label);
        return q !== 0 ? q : te !== 0 ? te : De;
      }), x;
    }), _ = w(() => {
      const x = l.enableSearch && d.value, V = x ? d.value.toLowerCase() : null, T = (Z) => Z ? [...pt.fuzzySearch(V, Z.toLowerCase(), 1)].length > 0 : !1;
      let q;
      x ? q = b.value.filter((Z) => T(Z.group) || T(Z.label) || T(Z.value)) : q = b.value;
      let te = [], De = Object.entries(
        Object.groupBy(q, ({ group: Z }) => Z)
      ), se = V ? 2 : 1;
      return De.forEach((Z) => {
        let pe = Z[0], Te = Z[1];
        pe && pe !== "null" && (te.push({
          ix: se,
          kind: "group",
          label: pe,
          value: pe,
          group: pe
        }), se += 1), te = te.concat(
          Te.map((qe, et) => ({
            ix: se + et,
            kind: "option",
            label: qe.label,
            value: qe.value,
            group: qe.group
          }))
        ), se += Te.length;
      }), te;
    }), M = E(null), k = E(null), I = E(null);
    r({
      target: k
    });
    const { y: j } = Pt(I), S = w(() => !I.value || I.value && j.value !== I.value.scrollTop ? 0 : j.value), R = w(() => {
      try {
        return I.value.clientHeight;
      } catch {
        return 500;
      }
    }), z = w(() => _.value.length < Je * 2 ? 0 : Math.floor(S.value / l.itemHeight) - Je), U = w(() => _.value.length < Je * 2 ? _.value.length + Je : Math.ceil((S.value + R.value) / l.itemHeight)), O = E(!1), G = Pe(k), Y = ge(I);
    function ne() {
      O.value = !0, setTimeout(() => {
        k.value.focus();
      }, 50);
    }
    function X() {
      try {
        M.value.blur(), k.value.blur(), I.value.blur();
      } catch {
      }
      O.value = !1;
    }
    function be() {
      O.value ? X() : ne();
    }
    Qe(M, () => {
      X();
    }), ee("ArrowDown", () => {
      if (b.value.length === 0)
        return;
      const x = [...I.value.querySelectorAll("label")];
      if (G.focused.value)
        x[0].focus();
      else if (Y.focused.value) {
        const V = I.value.querySelector("label:focus");
        if (!V)
          x[0].focus();
        else {
          const T = x.findIndex((q) => q === V);
          T === x.length - 1 ? x[0].focus() : x[T + 1].focus();
        }
      }
    }), ee("ArrowUp", () => {
      if (b.value.length !== 0 && Y.focused.value) {
        const x = [...I.value.querySelectorAll("label")], V = I.value.querySelector("label:focus");
        if (!V)
          k.value.focus();
        else {
          const T = x.findIndex((q) => q === V);
          T === 0 ? k.value.focus() : x[T - 1].focus();
        }
      }
    }), ee("Enter", () => {
      G.focused.value || X();
    });
    const W = w({
      get() {
        const x = b.value;
        return n.value == null || n.value.length !== x.length ? !1 : x.filter((T) => !n.value.includes(T.value)).length === 0;
      },
      set(x) {
        x ? n.value = b.value.map((V) => V.value) : n.value = [];
      }
    }), H = w({
      get() {
        let x = _.value.filter((T) => T.kind === "option").map((T) => T.value);
        return n.value == null || n.value.length < x.length ? !1 : x.filter((T) => !n.value.includes(T)).length === 0;
      },
      set(x) {
        let V = _.value.filter((te) => te.kind === "option").map((te) => te.value);
        const T = n.value ? n.value : [], q = V.filter((te) => !T.includes(te));
        x ? n.value = T.concat(q) : n.value = T.filter((te) => !V.includes(te));
      }
    });
    function F(x) {
      const V = _.value.filter((q) => q.kind === "option" && q.group === x).map((q) => q.value);
      n.value = n.value ? n.value : [];
      const T = V.filter((q) => !n.value.includes(q));
      T.length > 0 ? T.forEach((q) => {
        n.value.push(q);
      }) : n.value = n.value.filter((q) => !V.includes(q));
    }
    return (x, V) => (A(), L("div", {
      class: $([x.$style.inputWrapper, u(p) ? x.$style.disabled : ""]),
      ref_key: "container",
      ref: M,
      "aria-labelledby": u(h),
      "aria-describedby": u(c)
    }, [
      D("div", {
        class: $(x.$style.textboxWrapper)
      }, [
        de(D("input", {
          type: "text",
          placeholder: e.placeholder,
          id: u(m),
          class: $(x.$style.input),
          "onUpdate:modelValue": V[0] || (V[0] = (T) => f.value = T),
          ref_key: "textbox",
          ref: k,
          disabled: u(p)
        }, null, 10, Ga), [
          [Le, f.value],
          [Ke, O.value && !u(p)]
        ]),
        de(D("div", {
          class: $(x.$style.input),
          tabindex: "0",
          onFocusin: ne
        }, J(u(n) ? u(n).length : 0) + " " + J(g.value) + " selected ", 35), [
          [Ke, !O.value || u(p)]
        ]),
        K(u(Ne), {
          icon: "fa-solid fa-caret-down",
          class: $(x.$style.arrow),
          onClick: be
        }, null, 8, ["class"])
      ], 2),
      O.value && !u(p) ? (A(), L("div", {
        key: 0,
        class: $(x.$style.options),
        ref_key: "dropdown",
        ref: I
      }, [
        _.value.length > 0 ? (A(), L("ul", {
          key: 0,
          class: $(x.$style.optlist)
        }, [
          D("li", {
            title: "Select all",
            class: $([x.$style.selectAll, x.$style.listItem, x.$style.option]),
            style: Fe({ height: `${e.itemHeight}px` })
          }, [
            K(u(fe), {
              "zoa-type": "checkbox",
              label: "Select all",
              "label-position": "right",
              modelValue: W.value,
              "onUpdate:modelValue": V[1] || (V[1] = (T) => W.value = T)
            }, null, 8, ["modelValue"])
          ], 6),
          f.value ? (A(), L("li", {
            key: 0,
            title: "Select results",
            class: $([x.$style.selectAll, x.$style.listItem, x.$style.option]),
            style: Fe({ height: `${e.itemHeight}px` })
          }, [
            K(u(fe), {
              "zoa-type": "checkbox",
              label: "Select results",
              "label-position": "right",
              modelValue: H.value,
              "onUpdate:modelValue": V[2] || (V[2] = (T) => H.value = T)
            }, null, 8, ["modelValue"])
          ], 6)) : ze("", !0),
          (A(!0), L(ke, null, Ce(_.value, (T) => (A(), L("li", {
            title: T.label,
            class: $([
              x.$style.listItem,
              T.kind === "group" ? x.$style.subgroup : x.$style.option
            ]),
            style: Fe({ height: `${e.itemHeight}px` })
          }, [
            T.kind === "group" ? (A(), L("div", {
              key: 0,
              onClick: (q) => F(T.group)
            }, J(T.label), 9, Ka)) : (A(), L("div", Ja, [
              T.ix >= z.value && T.ix <= U.value ? (A(), Ae(u(fe), {
                key: 0,
                "zoa-type": "checkbox",
                label: T.label,
                "label-position": "right",
                options: { checkValue: T.value, name: u(v)("checkboxes") },
                modelValue: u(n),
                "onUpdate:modelValue": V[3] || (V[3] = (q) => ve(n) ? n.value = q : null)
              }, null, 8, ["label", "options", "modelValue"])) : ze("", !0)
            ]))
          ], 14, Ya))), 256))
        ], 2)) : (A(), L("div", {
          key: 1,
          class: $(x.$style.noOptions)
        }, "No options found", 2))
      ], 2)) : ze("", !0)
    ], 10, Za));
  }
}, Qa = {
  $style: Ha
}, eo = /* @__PURE__ */ ae(Xa, [["__cssModules", Qa]]), to = "zoa__dropdownsearch__input", lo = "zoa__dropdownsearch__inputWrapper", no = "zoa__dropdownsearch__disabled", ao = "zoa__dropdownsearch__options", oo = "zoa__dropdownsearch__optlist", so = "zoa__dropdownsearch__listItem", uo = "zoa__dropdownsearch__option", ro = "zoa__dropdownsearch__noOptions", io = "zoa__dropdownsearch__textboxWrapper", co = "zoa__dropdownsearch__arrow", po = {
  input: to,
  inputWrapper: lo,
  disabled: no,
  options: ao,
  optlist: oo,
  listItem: so,
  option: uo,
  noOptions: ro,
  textboxWrapper: io,
  arrow: co
}, fo = ["aria-labelledby", "aria-describedby"], mo = ["placeholder", "id", "disabled"], vo = ["title"], Xe = 10, bo = {
  __name: "DropdownSearch",
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
  setup(e, { expose: r, emit: o }) {
    const l = e, m = P("inputId"), v = P("subId"), h = P("labelId"), c = P("helpId"), p = P("disabled"), t = o, { value: n, zoaEvent: a } = ce(t, l), s = E(null), d = E(null), y = Re((W) => {
      d.value = W, a("search", W);
    }, l.searchDelay), f = w({
      get() {
        return s.value;
      },
      set(W) {
        s.value = W, y(W);
      }
    }), g = w(() => {
      let W = [];
      return l.options.forEach((H) => {
        typeof H == "object" ? W.push({
          label: H.label || H.value,
          value: H.value || H.label,
          order: H.order == null ? null : H.order
        }) : W.push({ label: H, value: H });
      }), W;
    }), b = w(() => {
      const W = l.enableSearch && d.value, H = W ? d.value.toLowerCase() : null, F = (V) => V ? [...pt.fuzzySearch(H, V.toLowerCase(), 1)].length > 0 : !1;
      let x;
      return W ? x = g.value.filter((V) => F(V.label) || F(V.value)) : x = g.value, x.sort((V, T) => {
        let q = 0;
        (V.order != null || T.order != null) && (q = V.order != null && T.order != null ? V.order - T.order : V.order != null ? -1 : 1);
        let te = V.label.localeCompare(T.label);
        return q !== 0 ? q : te;
      }), x.map((V, T) => (V.ix = T, V));
    }), _ = w(() => {
      let W = g.value.find(
        (H) => H.value === n.value
      );
      return W == null ? l.placeholder || "--" : W.label;
    }), M = E(null), k = E(null), I = E(null);
    r({
      target: k
    });
    const { y: j } = Pt(I), S = w(() => !I.value || I.value && j.value !== I.value.scrollTop ? 0 : j.value), R = w(() => {
      try {
        return I.value.clientHeight;
      } catch {
        return 500;
      }
    }), z = w(() => b.value.length < Xe * 2 ? 0 : Math.floor(S.value / l.itemHeight) - Xe), U = w(() => b.value.length < Xe * 2 ? b.value.length + Xe : Math.ceil((S.value + R.value) / l.itemHeight)), O = E(!1), G = Pe(k), Y = ge(I);
    function ne() {
      O.value = !0, setTimeout(() => {
        k.value.focus();
      }, 50);
    }
    function X() {
      try {
        f.value = null, M.value.blur(), k.value.blur(), I.value.blur();
      } catch {
      }
      O.value = !1;
    }
    function be() {
      O.value ? X() : ne();
    }
    return Qe(M, () => {
      X();
    }), ee("ArrowDown", () => {
      if (g.value.length === 0)
        return;
      const W = [...I.value.querySelectorAll("label")];
      if (G.focused.value)
        W[0].focus();
      else if (Y.focused.value) {
        const H = I.value.querySelector("label:focus");
        if (!H)
          W[0].focus();
        else {
          const F = W.findIndex((x) => x === H);
          F === W.length - 1 ? W[0].focus() : W[F + 1].focus();
        }
      }
    }), ee("ArrowUp", () => {
      if (g.value.length !== 0 && Y.focused.value) {
        const W = [...I.value.querySelectorAll("label")], H = I.value.querySelector("label:focus");
        if (!H)
          k.value.focus();
        else {
          const F = W.findIndex((x) => x === H);
          F === 0 ? k.value.focus() : W[F - 1].focus();
        }
      }
    }), ee("Enter", () => {
      if (Y.focused.value) {
        const W = I.value.querySelector("label:focus");
        W && (n.value = W.control.value);
      }
      G.focused.value || X();
    }), (W, H) => (A(), L("div", {
      class: $([W.$style.inputWrapper, u(p) ? W.$style.disabled : ""]),
      ref_key: "container",
      ref: M,
      "aria-labelledby": u(h),
      "aria-describedby": u(c)
    }, [
      D("div", {
        class: $(W.$style.textboxWrapper)
      }, [
        de(D("input", {
          type: "text",
          placeholder: e.placeholder,
          id: u(m),
          class: $(W.$style.input),
          "onUpdate:modelValue": H[0] || (H[0] = (F) => f.value = F),
          ref_key: "textbox",
          ref: k,
          disabled: u(p)
        }, null, 10, mo), [
          [Le, f.value],
          [Ke, O.value && !u(p)]
        ]),
        de(D("div", {
          class: $(W.$style.input),
          tabindex: "0",
          onFocusin: ne
        }, J(_.value), 35), [
          [Ke, !O.value || u(p)]
        ]),
        K(u(Ne), {
          icon: "fa-solid fa-caret-down",
          class: $(W.$style.arrow),
          onClick: be
        }, null, 8, ["class"])
      ], 2),
      O.value && !u(p) ? (A(), L("div", {
        key: 0,
        class: $(W.$style.options),
        ref_key: "dropdown",
        ref: I
      }, [
        b.value.length > 0 ? (A(), L("ul", {
          key: 0,
          class: $(W.$style.optlist)
        }, [
          (A(!0), L(ke, null, Ce(b.value, (F) => (A(), L("li", {
            title: F.label,
            class: $([W.$style.listItem, W.$style.option]),
            style: Fe({ height: `${e.itemHeight}px` }),
            key: u(v)(`opt__${F.value}`)
          }, [
            D("div", null, [
              F.ix >= z.value && F.ix <= U.value ? (A(), Ae(u(fe), {
                key: 0,
                "zoa-type": "radio",
                label: F.label,
                "label-position": "right",
                options: { checkValue: F.value, name: u(v)("radio") },
                modelValue: u(n),
                "onUpdate:modelValue": H[1] || (H[1] = (x) => ve(n) ? n.value = x : null),
                onChange: X
              }, null, 8, ["label", "options", "modelValue"])) : ze("", !0)
            ])
          ], 14, vo))), 128))
        ], 2)) : (A(), L("div", {
          key: 1,
          class: $(W.$style.noOptions)
        }, "No options found", 2))
      ], 2)) : ze("", !0)
    ], 10, fo));
  }
}, yo = {
  $style: po
}, ho = /* @__PURE__ */ ae(bo, [["__cssModules", yo]]), _o = "zoa__number__input", go = "zoa__number__inputWrapper", $o = "zoa__number__disabled", ko = {
  input: _o,
  inputWrapper: go,
  disabled: $o
}, So = ["aria-labelledby", "aria-describedby"], zo = ["placeholder", "min", "max", "step", "id", "disabled"], Io = {
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
  setup(e, { expose: r, emit: o }) {
    const l = e, m = P("inputId"), v = P("labelId"), h = P("helpId"), c = P("disabled"), p = o, { value: t } = ce(p, l), n = E(null);
    return r({
      target: n
    }), (a, s) => (A(), L("div", {
      class: $([a.$style.inputWrapper, u(c) ? a.$style.disabled : ""]),
      "aria-labelledby": u(v),
      "aria-describedby": u(h)
    }, [
      de(D("input", {
        type: "number",
        placeholder: e.placeholder,
        min: e.min,
        max: e.max,
        step: e.step,
        id: u(m),
        class: $(a.$style.input),
        "onUpdate:modelValue": s[0] || (s[0] = (d) => ve(t) ? t.value = d : null),
        ref_key: "target",
        ref: n,
        disabled: u(c)
      }, null, 10, zo), [
        [Le, u(t)]
      ])
    ], 10, So));
  }
}, wo = {
  $style: ko
}, xo = /* @__PURE__ */ ae(Io, [["__cssModules", wo]]), Mo = "zoa__radio__input", Co = "zoa__radio__inputWrapper", Vo = "zoa__radio__defaultRadio", No = "zoa__radio__radio", Wo = "zoa__radio__check", Eo = "zoa__radio__disabled", Ao = {
  input: Mo,
  inputWrapper: Co,
  defaultRadio: Vo,
  radio: No,
  check: Wo,
  disabled: Eo
}, To = ["aria-labelledby", "aria-describedby"], Po = ["id", "name", "value", "disabled"], Oo = {
  __name: "Radio",
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
  setup(e, { expose: r, emit: o }) {
    const l = e, m = P("inputId"), v = P("labelId"), h = P("helpId"), c = P("disabled"), p = o, { value: t, valueChanged: n } = ce(p, l), a = P("rootContainer"), s = E(null), d = ge(a);
    r({
      target: s
    });
    const y = P("label"), f = w(() => l.checkValue || y.value || m.value);
    function g() {
      if (c.value)
        return;
      t.value === f.value || (t.value = f.value);
    }
    return ee(" ", () => {
      d.focused.value && g();
    }), (b, _) => (A(), L("div", {
      class: $([b.$style.inputWrapper, u(c) ? b.$style.disabled : ""]),
      "aria-labelledby": u(v),
      "aria-describedby": u(h)
    }, [
      de(D("input", {
        type: "radio",
        id: u(m),
        class: $(b.$style.defaultRadio),
        "onUpdate:modelValue": _[0] || (_[0] = (M) => ve(t) ? t.value = M : null),
        name: e.name ? e.name : null,
        value: f.value,
        ref_key: "radioInput",
        ref: s,
        disabled: u(c)
      }, null, 10, Po), [
        [Wt, u(t)]
      ]),
      D("span", {
        class: $(b.$style.radio),
        onClick: g
      }, [
        K(u(Ne), {
          icon: "fa-solid fa-circle",
          class: $(b.$style.check)
        }, null, 8, ["class"])
      ], 2)
    ], 10, To));
  }
}, Lo = {
  $style: Ao
}, Do = /* @__PURE__ */ ae(Oo, [["__cssModules", Lo]]), Uo = "zoa__rangeslider__input", Fo = "zoa__rangeslider__inputWrapper", Ro = {
  input: Uo,
  inputWrapper: Fo
}, Bo = ["aria-labelledby", "aria-describedby"], qo = {
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
  setup(e, { expose: r, emit: o }) {
    const l = e;
    P("inputId");
    const m = P("labelId"), v = P("helpId"), h = P("disabled"), c = o, { valueChanged: p } = ce(c, l), t = E(null), n = E(null), a = w(() => {
      if (t.value)
        return t.value.target;
    }), s = w(() => t.value && n.value ? [t.value.target, n.value.target] : []);
    r({
      target: a,
      elements: s
    });
    const d = E(null), y = E(null), f = w(() => Math.max(
      Number(y.value) - Number(l.step),
      Number(l.min)
    )), g = w(() => Math.min(
      Number(d.value) + Number(l.step),
      Number(l.max)
    )), b = w(() => {
      const _ = Math.min(d.value, f.value), M = Math.max(y.value, g.value);
      return [_, M];
    });
    return Oe(b, () => {
      p(b.value);
    }), (_, M) => (A(), L("div", {
      class: $(_.$style.inputWrapper),
      "aria-labelledby": u(m),
      "aria-describedby": u(v)
    }, [
      K(u(fe), {
        "zoa-type": "slider",
        label: e.labelLower,
        "label-position": e.labelsRight ? "right" : "left",
        options: {
          min: e.min,
          max: e.max,
          step: e.step,
          validMax: f.value,
          valueLabelPosition: "above",
          placeholderPosition: 0.25
        },
        modelValue: d.value,
        "onUpdate:modelValue": M[0] || (M[0] = (k) => d.value = k),
        ref: "lowerTrack",
        disabled: u(h)
      }, null, 8, ["label", "label-position", "options", "modelValue", "disabled"]),
      K(u(fe), {
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
        "onUpdate:modelValue": M[1] || (M[1] = (k) => y.value = k),
        ref: "upperTrack",
        disabled: u(h)
      }, null, 8, ["label", "label-position", "options", "modelValue", "disabled"])
    ], 10, Bo));
  }
}, jo = {
  $style: Ro
}, Ho = /* @__PURE__ */ ae(qo, [["__cssModules", jo]]), Zo = "zoa__slider__input", Go = "zoa__slider__inputWrapper", Yo = "zoa__slider__track", Ko = "zoa__slider__valueLabel", Jo = "zoa__slider__disabled", Xo = {
  input: Zo,
  inputWrapper: Go,
  track: Yo,
  "track--active": "zoa__slider__track--active",
  valueLabel: Ko,
  "valueLabel--below": "zoa__slider__valueLabel--below",
  "valueLabel--above": "zoa__slider__valueLabel--above",
  disabled: Jo
}, Qo = ["aria-labelledby", "aria-describedby"], es = ["min", "max", "step", "id", "disabled"], ts = {
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
  setup(e, { expose: r, emit: o }) {
    const l = e, m = P("inputId"), v = P("labelId"), h = P("helpId"), c = P("disabled"), p = o, { value: t } = ce(p, l), n = E(null), a = E(null);
    r({
      target: n
    });
    const s = w(() => l.validMin ? Math.max(Number(l.validMin), Number(l.min)) : Number(l.min)), d = w(() => l.validMax ? Math.min(Number(l.validMax), Number(l.max)) : Number(l.max)), y = ge(n), f = Pe(a), g = w(() => t.value < s.value ? s.value : t.value > d.value ? d.value : t.value), b = w(() => l.activeTrackRight ? { left: `${M.value.handle}%` } : { right: `${100 - M.value.handle}%` }), _ = w(() => (t.value - l.min) / (l.max - l.min)), M = w(() => k());
    function k() {
      try {
        const z = n.value.clientWidth, U = 24;
        a.value && (a.value.innerText = g.value);
        const O = a.value ? a.value.clientWidth : 0, G = z / 2, X = (_.value * z - G) / G * (U / 2), be = X + O / 2, W = X / z;
        return {
          handle: ((_.value - W) * 100).toFixed(2),
          label: ((_.value - be / z) * 100).toFixed(2)
        };
      } catch {
        const z = _.value * 100;
        return { handle: z.toFixed(2), label: z.toFixed(2) };
      }
    }
    function I() {
      if (l.placeholder !== null && l.placeholder !== void 0)
        return l.placeholder;
      let U = (l.max - l.min) / (1 / l.placeholderPosition), O = U % l.step;
      return U - O + l.min;
    }
    function j() {
      if (t.value === l.max)
        return;
      let z = Number(t.value) + Number(l.step);
      z > l.max ? t.value = l.max : t.value = z;
    }
    function S() {
      if (t.value === l.min)
        return;
      let z = Number(t.value) - Number(l.step);
      z < l.min ? t.value = l.min : t.value = z;
    }
    function R(z) {
      z.preventDefault(), z.wheelDelta > 0 ? j() : z.wheelDelta < 0 && S();
    }
    return ee("ArrowDown", (z) => {
      z.preventDefault(), (y.focused.value || f.focused.value) && S();
    }), ee("ArrowLeft", (z) => {
      z.preventDefault(), (y.focused.value || f.focused.value) && S();
    }), ee("ArrowUp", (z) => {
      z.preventDefault(), (y.focused.value || f.focused.value) && j();
    }), ee("ArrowRight", (z) => {
      z.preventDefault(), (y.focused.value || f.focused.value) && j();
    }), Oe(t, (z) => {
      Number(z) >= Number(d.value) && (t.value = d.value), Number(z) <= Number(s.value) && (t.value = s.value);
    }), t.value = I(), (z, U) => (A(), L("div", {
      class: $([z.$style.inputWrapper, , u(c) ? z.$style.disabled : ""]),
      onWheel: R,
      "aria-labelledby": u(v),
      "aria-describedby": u(h)
    }, [
      D("span", {
        class: $(z.$style.track)
      }, null, 2),
      D("span", {
        class: $([z.$style.track, z.$style["track--active"]]),
        style: Fe(b.value)
      }, null, 6),
      D("span", {
        class: $([z.$style.valueLabel, z.$style[`valueLabel--${e.valueLabelPosition}`]]),
        style: Fe({ left: `${M.value.label}%` }),
        ref_key: "valueLabel",
        ref: a,
        tabindex: "0"
      }, J(g.value), 7),
      de(D("input", {
        type: "range",
        min: e.min,
        max: e.max,
        step: e.step,
        id: u(m),
        class: $(z.$style.input),
        "onUpdate:modelValue": U[0] || (U[0] = (O) => ve(t) ? t.value = O : null),
        ref_key: "slider",
        ref: n,
        disabled: u(c)
      }, null, 10, es), [
        [Le, u(t)]
      ])
    ], 42, Qo));
  }
}, ls = {
  $style: Xo
}, ns = /* @__PURE__ */ ae(ts, [["__cssModules", ls]]), as = "zoa__textbox__input", os = "zoa__textbox__inputWrapper", ss = "zoa__textbox__disabled", us = {
  input: as,
  inputWrapper: os,
  disabled: ss
}, rs = ["aria-labelledby", "aria-describedby"], is = ["placeholder", "id", "disabled"], ds = {
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
  setup(e, { expose: r, emit: o }) {
    const l = e, m = P("inputId"), v = P("labelId"), h = P("helpId"), c = P("disabled"), p = o, { value: t } = ce(p, l), n = E(null);
    return r({
      target: n
    }), (a, s) => (A(), L("div", {
      class: $([a.$style.inputWrapper, u(c) ? a.$style.disabled : ""]),
      "aria-labelledby": u(v),
      "aria-describedby": u(h)
    }, [
      de(D("input", {
        type: "text",
        placeholder: e.placeholder,
        id: u(m),
        class: $(a.$style.input),
        "onUpdate:modelValue": s[0] || (s[0] = (d) => ve(t) ? t.value = d : null),
        ref_key: "target",
        ref: n,
        disabled: u(c)
      }, null, 10, is), [
        [Le, u(t)]
      ])
    ], 10, rs));
  }
}, cs = {
  $style: us
}, ps = /* @__PURE__ */ ae(ds, [["__cssModules", cs]]), xt = {
  checkbox: {
    component: qn,
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
    component: $a,
    multi: !1,
    delay: 200
  },
  dropdown: {
    component: Ea,
    multi: !1,
    delay: 0
  },
  multiselect: {
    component: eo,
    multi: !1,
    delay: 0
  },
  "dropdown-search": {
    component: ho,
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
  radio: {
    component: Do,
    multi: !1,
    delay: 0,
    tabLabel: !0
  },
  "range-slider": {
    component: Ho,
    multi: !0,
    delay: 200
  },
  slider: {
    component: ns,
    multi: !1,
    delay: 200,
    wrapperProps: ["valueLabelPosition"]
  },
  "autocomplete-textbox": {
    component: Wn,
    multi: !1,
    delay: 200
  },
  textbox: {
    component: ps,
    multi: !1,
    delay: 200
  }
}, fs = "zoa__input__input", ms = "zoa__input__inputWrapper", vs = "zoa__input__rootWrapper", bs = "zoa__input__checkbox", ys = "zoa__input__radio", hs = "zoa__input__slider", _s = "zoa__input__emptyGrid", gs = "zoa__input__fieldset", $s = {
  input: fs,
  inputWrapper: ms,
  rootWrapper: vs,
  "rootWrapper--above": "zoa__input__rootWrapper--above",
  "rootWrapper--help": "zoa__input__rootWrapper--help",
  "rootWrapper--below": "zoa__input__rootWrapper--below",
  "rootWrapper--left": "zoa__input__rootWrapper--left",
  "rootWrapper--right": "zoa__input__rootWrapper--right",
  "rootWrapper--none": "zoa__input__rootWrapper--none",
  checkbox: bs,
  radio: ys,
  slider: hs,
  "rootWrapper-valueLabelPosition--below": "zoa__input__rootWrapper-valueLabelPosition--below",
  "rootWrapper-valueLabelPosition--above": "zoa__input__rootWrapper-valueLabelPosition--above",
  "range-slider": "zoa__input__range-slider",
  emptyGrid: _s,
  fieldset: gs
}, ks = ["id"], Ss = {
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
  setup(e, { expose: r, emit: o }) {
    const l = e, m = w(() => {
      let U = xt[l.zoaType];
      return U == null && (U = xt.empty), U;
    }), v = w(() => m.value.component), { componentId: h, subId: c } = dt(), p = c("input"), t = c("label"), n = c("help"), a = w(() => {
      let U = [
        "rootWrapper",
        `rootWrapper--${l.labelPosition}`,
        l.zoaType
      ];
      return l.help && U.push("rootWrapper--help"), m.value.wrapperProps && m.value.wrapperProps.forEach((O) => {
        l.options[O] != null && U.push(`rootWrapper-${O}--${l.options[O]}`);
      }), U;
    }), { addPropClasses: s } = Be(l), d = o, { value: y } = ce(d, l);
    function f(U, ...O) {
      d(U, ...O);
    }
    const g = E(null), b = w(() => l.label), _ = w(() => l.labelPosition), M = w(() => l.help ? n : null), k = w(() => l.disabled);
    Me("label", b), Me("labelPosition", _), Me("componentId", h), Me("subId", c), Me("inputId", p), Me("labelId", t), Me("helpId", M), Me("rootContainer", g), Me("disabled", k);
    const I = E(null);
    function j() {
      I.value && I.value.target.focus();
    }
    function S() {
      I.value && I.value.target.blur();
    }
    const R = w(() => {
      if (I.value)
        return I.value.target;
    }), z = w(() => I.value && I.value.elements ? I.value.elements : {});
    return r({
      focus: j,
      blur: S,
      target: R,
      elements: z
    }), (U, O) => (A(), L("div", {
      id: u(h),
      ref_key: "rootContainer",
      ref: g,
      class: $(u(s)(a.value.map((G) => U.$style[G])))
    }, [
      m.value.multi ? (A(), L("fieldset", {
        key: 0,
        class: $(U.$style.fieldset)
      }, [
        K(_t, {
          "input-id": u(p),
          legend: !0,
          label: e.label,
          "label-position": e.labelPosition,
          tabbable: m.value.tabLabel
        }, null, 8, ["input-id", "label", "label-position", "tabbable"]),
        e.help ? (A(), Ae(gt, {
          key: 0,
          text: e.help,
          position: e.helpPosition
        }, null, 8, ["text", "position"])) : ze("", !0),
        v.value == null ? (A(), L("div", {
          key: 1,
          class: $([e.gridClass || U.$style.emptyGrid, U.$style.inputWrapper])
        }, [
          Ee(U.$slots, "default")
        ], 2)) : (A(), Ae(u(v), rt({ key: 2 }, e.options, {
          modelValue: u(y),
          "onUpdate:modelValue": O[0] || (O[0] = (G) => ve(y) ? y.value = G : null),
          ref_key: "inputComponent",
          ref: I,
          onZoaEvent: f
        }), null, 16, ["modelValue"]))
      ], 2)) : (A(), L(ke, { key: 1 }, [
        K(_t, {
          "input-id": u(p),
          legend: !1,
          label: e.label,
          "label-position": e.labelPosition,
          tabbable: m.value.tabLabel,
          help: e.help
        }, null, 8, ["input-id", "label", "label-position", "tabbable", "help"]),
        e.help ? (A(), Ae(gt, {
          key: 0,
          text: e.help,
          position: e.helpPosition
        }, null, 8, ["text", "position"])) : ze("", !0),
        K(u(v), rt(e.options, {
          modelValue: u(y),
          "onUpdate:modelValue": O[1] || (O[1] = (G) => ve(y) ? y.value = G : null),
          onZoaEvent: f,
          ref_key: "inputComponent",
          ref: I
        }), null, 16, ["modelValue"])
      ], 64))
    ], 10, ks));
  }
}, zs = {
  $style: $s
}, fe = /* @__PURE__ */ ae(Ss, [["__cssModules", zs]]);
function Ot(e) {
  return { icon: w(() => {
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
const Is = "zoa__flash__main", ws = "zoa__flash__container", xs = "zoa__flash__header", Ms = "zoa__flash__icon", Cs = "zoa__flash__headerText", Vs = "zoa__flash__content", Ns = {
  main: Is,
  container: ws,
  header: xs,
  icon: Ms,
  headerText: Cs,
  content: Vs,
  "kind--info": "zoa__flash__kind--info",
  "kind--warning": "zoa__flash__kind--warning",
  "kind--error": "zoa__flash__kind--error",
  "kind--success": "zoa__flash__kind--success"
}, Ws = {
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
    const r = e, { icon: o } = Ot(r), { addPropClasses: l } = Be(r);
    return (m, v) => (A(), L("div", {
      class: $(
        u(l)([m.$style.main, m.$style.container, m.$style[`kind--${e.kind}`]])
      )
    }, [
      D("div", {
        class: $(m.$style.header)
      }, [
        K(u(Ne), {
          icon: ["fa-solid", u(o)],
          class: $(m.$style.icon)
        }, null, 8, ["icon", "class"]),
        D("h2", {
          class: $(m.$style.headerText)
        }, J(e.header), 3)
      ], 2),
      D("div", {
        class: $(m.$style.content)
      }, [
        Ee(m.$slots, "default", {}, () => [
          Ve(J(e.message), 1)
        ])
      ], 2)
    ], 2));
  }
}, Es = {
  $style: Ns
}, As = /* @__PURE__ */ ae(Ws, [["__cssModules", Es]]), Ts = "zoa__modal__main", Ps = "zoa__modal__container", Os = "zoa__modal__header", Ls = "zoa__modal__icon", Ds = "zoa__modal__headerText", Us = "zoa__modal__content", Fs = "zoa__modal__form", Rs = "zoa__modal__close", Bs = {
  main: Ts,
  container: Ps,
  header: Os,
  icon: Ls,
  headerText: Ds,
  content: Us,
  "kind--info": "zoa__modal__kind--info",
  "kind--warning": "zoa__modal__kind--warning",
  "kind--error": "zoa__modal__kind--error",
  "kind--success": "zoa__modal__kind--success",
  form: Fs,
  close: Rs
}, qs = {
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
  setup(e, { emit: r }) {
    const o = e, l = r, { icon: m } = Ot(o), { addPropClasses: v } = Be(o), h = E(null);
    function c() {
      h.value.show(), l("opened");
    }
    return Qe(h, () => {
      h.value.close(), l("closed");
    }), (p, t) => (A(), L(ke, null, [
      K(u(Ye), rt(e.buttonArgs, { onClick: c }), {
        default: Ge(() => [
          Ee(p.$slots, "button")
        ]),
        _: 3
      }, 16),
      D("dialog", {
        ref_key: "modal",
        ref: h,
        class: $(u(v)([p.$style.main, p.$style[`kind--${e.kind}`]]))
      }, [
        D("div", {
          class: $(p.$style.container)
        }, [
          D("div", {
            class: $(p.$style.header)
          }, [
            K(u(Ne), {
              icon: ["fa-solid", u(m)],
              class: $(p.$style.icon)
            }, null, 8, ["icon", "class"]),
            D("h2", {
              class: $(p.$style.headerText)
            }, [
              Ee(p.$slots, "header", {}, () => [
                Ve(J(e.header), 1)
              ])
            ], 2),
            D("form", {
              method: "dialog",
              class: $(p.$style.form),
              onSubmit: t[0] || (t[0] = (n) => l("closed"))
            }, [
              D("button", {
                class: $(p.$style.close)
              }, [
                K(u(Ne), { icon: "fa-solid fa-xmark" })
              ], 2)
            ], 34)
          ], 2),
          D("div", {
            class: $(p.$style.content)
          }, [
            Ee(p.$slots, "default", {}, () => [
              Ve(J(e.message), 1)
            ])
          ], 2)
        ], 2)
      ], 2)
    ], 64));
  }
}, js = {
  $style: Bs
}, Hs = /* @__PURE__ */ ae(qs, [["__cssModules", js]]), Zs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ZoaButton: Ye,
  ZoaFlash: As,
  ZoaInput: fe,
  ZoaModal: Hs,
  ZoaTabs: Ql,
  ZoaToggleButton: ql
}, Symbol.toStringTag, { value: "Module" })), Gs = new RegExp("[A-Z]+(?![a-z])|[A-Z]", "g");
function Ys(e) {
  return e.replace(Gs, (r, o) => (o ? "-" : "") + r.toLowerCase());
}
const eu = {
  install(e, r) {
    Object.entries(Zs).forEach((o) => {
      const l = Ys(o[0]);
      e.component(l, o[1]);
    });
  }
};
export {
  As as F,
  Hs as M,
  ql as T,
  eu as Z,
  Ye as a,
  Ql as b,
  fe as c,
  wt as d,
  mn as g
};
