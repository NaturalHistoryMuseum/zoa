import { openBlock as N, createElementBlock as P, normalizeClass as S, unref as u, renderSlot as Ee, createTextVNode as Ce, toDisplayString as Y, ref as W, computed as w, getCurrentScope as jt, onScopeDispose as qt, onMounted as xt, nextTick as Ht, isRef as me, getCurrentInstance as Mt, toValue as re, watch as Le, reactive as vt, watchEffect as Ct, withDirectives as de, createElementVNode as O, vModelCheckbox as Vt, isProxy as Zt, toRaw as Gt, Fragment as $e, renderList as Me, vModelRadio as Nt, inject as E, createCommentVNode as Se, createVNode as G, vShow as Ye, vModelText as De, withKeys as Yt, withCtx as Ze, createBlock as Ae, vModelSelect as Kt, normalizeStyle as Re, provide as xe, mergeProps as ut } from "vue";
import { library as Jt } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon as Ve } from "@fortawesome/vue-fontawesome";
import { faCaretDown as Xt, faCheck as Qt, faCircle as el, faCircleCheck as tl, faCircleExclamation as ll, faCircleInfo as nl, faCircleQuestion as al, faCircleXmark as ol, faXmark as sl } from "@fortawesome/free-solid-svg-icons";
function Be(e) {
  function r(a) {
    return a = a || [], e.class && Array.isArray(e.class) ? a = a.concat(e.class) : e.class && a.push(e.class), a;
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
}, ne = (e, r) => {
  const a = e.__vccOpts || e;
  for (const [l, v] of r)
    a[l] = v;
  return a;
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
    const r = e, { addPropClasses: a } = Be(r);
    return (l, v) => (N(), P("button", {
      class: S(
        u(a)([
          l.$style.main,
          l.$style[`kind--${e.kind}`],
          l.$style[`size--${e.size}`]
        ])
      )
    }, [
      Ee(l.$slots, "default", {}, () => [
        Ce(Y(e.label), 1)
      ])
    ], 2));
  }
}, cl = {
  $style: il
}, Ge = /* @__PURE__ */ ne(dl, [["__cssModules", cl]]), pl = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let fl = (e = 21) => {
  let r = "", a = crypto.getRandomValues(new Uint8Array(e |= 0));
  for (; e--; )
    r += pl[a[e] & 63];
  return r;
};
function it() {
  const e = W(fl(6));
  function r(a) {
    return `${e.value}__${a}`;
  }
  return { componentId: e, subId: r };
}
const Oe = (e, r = 1, a) => {
  r = Math.max(1, r);
  const l = Math.max(1 / 0, r);
  let v, b, _ = 0, c = 0;
  const p = () => {
    const z = Date.now(), h = z - _, m = z - c, L = h >= r || m >= l;
    return [z, L];
  }, t = (z) => {
    if (c = z, !v)
      return;
    const h = v;
    v = void 0, e.apply(void 0, h);
  }, n = () => {
    k(0);
  }, o = () => {
    b && (n(), t(Date.now()));
  }, s = (z) => {
    c = z;
  }, d = (z) => {
    if (v)
      return t(z);
    v = void 0;
  }, y = () => {
    b = void 0;
    const [z, h] = p();
    return h ? d(z) : f(z);
  }, f = (z) => {
    const h = z - _, m = z - c, L = r - h, j = l - m, M = Math.min(L, j);
    return k(M);
  }, k = (z) => {
    b && clearTimeout(b), !(z <= 0) && (b = setTimeout(y, z));
  }, g = (...z) => {
    const [h, m] = p(), L = !!b;
    if (v = z, _ = h, (m || !b) && k(r), m)
      return L ? t(h) : s(h);
  };
  return g.cancel = n, g.flush = o, g;
};
function ce(e, r) {
  let a;
  try {
    a = parseInt(r.delay) || 0;
  } catch {
    a = 0;
  }
  const l = W(null);
  function v(n) {
    e("change", n);
  }
  function b(n) {
    e("update:modelValue", n), l.value = n;
  }
  const _ = Oe(v, a), c = Oe(b, a);
  function p(n) {
    c(n), _(n);
  }
  const t = w({
    get() {
      return r.modelValue === void 0 ? l.value : r.modelValue;
    },
    set(n) {
      p(n);
    }
  });
  return { emitChange: _, valueChanged: p, value: t };
}
function dt(e) {
  return jt() ? (qt(e), !0) : !1;
}
const Wt = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ml = (e) => e != null, vl = Object.prototype.toString, bl = (e) => vl.call(e) === "[object Object]", ze = () => {
}, yl = /* @__PURE__ */ hl();
function hl() {
  var e, r;
  return Wt && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((r = window == null ? void 0 : window.navigator) == null ? void 0 : r.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Et(e, r) {
  function a(...l) {
    return new Promise((v, b) => {
      Promise.resolve(e(() => r.apply(this, l), { fn: r, thisArg: this, args: l })).then(v).catch(b);
    });
  }
  return a;
}
function _l(e, r = {}) {
  let a, l, v = ze;
  const b = (c) => {
    clearTimeout(c), v(), v = ze;
  };
  return (c) => {
    const p = re(e), t = re(r.maxWait);
    return a && b(a), p <= 0 || t !== void 0 && t <= 0 ? (l && (b(l), l = null), Promise.resolve(c())) : new Promise((n, o) => {
      v = r.rejectOnCancel ? o : n, t && !l && (l = setTimeout(() => {
        a && b(a), l = null, n(c());
      }, t)), a = setTimeout(() => {
        l && b(l), l = null, n(c());
      }, p);
    });
  };
}
function gl(...e) {
  let r = 0, a, l = !0, v = ze, b, _, c, p, t;
  !me(e[0]) && typeof e[0] == "object" ? { delay: _, trailing: c = !0, leading: p = !0, rejectOnCancel: t = !1 } = e[0] : [_, c = !0, p = !0, t = !1] = e;
  const n = () => {
    a && (clearTimeout(a), a = void 0, v(), v = ze);
  };
  return (s) => {
    const d = re(_), y = Date.now() - r, f = () => b = s();
    return n(), d <= 0 ? (r = Date.now(), f()) : (y > d && (p || !l) ? (r = Date.now(), f()) : c && (b = new Promise((k, g) => {
      v = t ? g : k, a = setTimeout(() => {
        r = Date.now(), l = !0, k(f()), n();
      }, Math.max(0, d - y));
    })), !p && !a && (a = setTimeout(() => l = !0, d)), l = !1, b);
  };
}
function $l(e) {
  return Mt();
}
function rt(e) {
  return Array.isArray(e) ? e : [e];
}
function kl(e, r = 200, a = {}) {
  return Et(
    _l(r, a),
    e
  );
}
function Sl(e, r = 200, a = !1, l = !0, v = !1) {
  return Et(
    gl(r, a, l, v),
    e
  );
}
function zl(e, r = !0, a) {
  $l() ? xt(e, a) : r ? e() : Ht(e);
}
const Ne = Wt ? window : void 0;
function ke(e) {
  var r;
  const a = re(e);
  return (r = a == null ? void 0 : a.$el) != null ? r : a;
}
function fe(...e) {
  let r, a, l, v;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([a, l, v] = e, r = Ne) : [r, a, l, v] = e, !r)
    return ze;
  a = rt(a), l = rt(l);
  const b = [], _ = () => {
    b.forEach((n) => n()), b.length = 0;
  }, c = (n, o, s, d) => (n.addEventListener(o, s, d), () => n.removeEventListener(o, s, d)), p = Le(
    () => [ke(r), re(v)],
    ([n, o]) => {
      if (_(), !n)
        return;
      const s = bl(o) ? { ...o } : o;
      b.push(
        ...a.flatMap((d) => l.map((y) => c(n, d, y, s)))
      );
    },
    { immediate: !0, flush: "post" }
  ), t = () => {
    p(), _();
  };
  return dt(t), t;
}
let bt = !1;
function Xe(e, r, a = {}) {
  const { window: l = Ne, ignore: v = [], capture: b = !0, detectIframe: _ = !1 } = a;
  if (!l)
    return ze;
  yl && !bt && (bt = !0, Array.from(l.document.body.children).forEach((f) => f.addEventListener("click", ze)), l.document.documentElement.addEventListener("click", ze));
  let c = !0;
  const p = (f) => re(v).some((k) => {
    if (typeof k == "string")
      return Array.from(l.document.querySelectorAll(k)).some((g) => g === f.target || f.composedPath().includes(g));
    {
      const g = ke(k);
      return g && (f.target === g || f.composedPath().includes(g));
    }
  });
  function t(f) {
    const k = re(f);
    return k && k.$.subTree.shapeFlag === 16;
  }
  function n(f, k) {
    const g = re(f), z = g.$.subTree && g.$.subTree.children;
    return z == null || !Array.isArray(z) ? !1 : z.some((h) => h.el === k.target || k.composedPath().includes(h.el));
  }
  const o = (f) => {
    const k = ke(e);
    if (f.target != null && !(!(k instanceof Element) && t(e) && n(e, f)) && !(!k || k === f.target || f.composedPath().includes(k))) {
      if (f.detail === 0 && (c = !p(f)), !c) {
        c = !0;
        return;
      }
      r(f);
    }
  };
  let s = !1;
  const d = [
    fe(l, "click", (f) => {
      s || (s = !0, setTimeout(() => {
        s = !1;
      }, 0), o(f));
    }, { passive: !0, capture: b }),
    fe(l, "pointerdown", (f) => {
      const k = ke(e);
      c = !p(f) && !!(k && !f.composedPath().includes(k));
    }, { passive: !0 }),
    _ && fe(l, "blur", (f) => {
      setTimeout(() => {
        var k;
        const g = ke(e);
        ((k = l.document.activeElement) == null ? void 0 : k.tagName) === "IFRAME" && !(g != null && g.contains(l.document.activeElement)) && r(f);
      }, 0);
    })
  ].filter(Boolean);
  return () => d.forEach((f) => f());
}
function Il() {
  const e = W(!1), r = Mt();
  return r && xt(() => {
    e.value = !0;
  }, r), e;
}
function wl(e) {
  const r = Il();
  return w(() => (r.value, !!e()));
}
function xl(e, r, a = {}) {
  const { window: l = Ne, ...v } = a;
  let b;
  const _ = wl(() => l && "MutationObserver" in l), c = () => {
    b && (b.disconnect(), b = void 0);
  }, p = w(() => {
    const s = re(e), d = rt(s).map(ke).filter(ml);
    return new Set(d);
  }), t = Le(
    () => p.value,
    (s) => {
      c(), _.value && s.size && (b = new MutationObserver(r), s.forEach((d) => b.observe(d, v)));
    },
    { immediate: !0, flush: "post" }
  ), n = () => b == null ? void 0 : b.takeRecords(), o = () => {
    t(), c();
  };
  return dt(o), {
    isSupported: _,
    stop: o,
    takeRecords: n
  };
}
function At(e, r, a = {}) {
  const {
    window: l = Ne,
    document: v = l == null ? void 0 : l.document,
    flush: b = "sync"
  } = a;
  if (!l || !v)
    return ze;
  let _;
  const c = (n) => {
    _ == null || _(), _ = n;
  }, p = Ct(() => {
    const n = ke(e);
    if (n) {
      const { stop: o } = xl(
        v,
        (s) => {
          s.map((y) => [...y.removedNodes]).flat().some((y) => y === n || y.contains(n)) && r(s);
        },
        {
          window: l,
          childList: !0,
          subtree: !0
        }
      );
      c(o);
    }
  }, { flush: b }), t = () => {
    p(), c();
  };
  return dt(t), t;
}
function Ml(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (r) => r.key === e : Array.isArray(e) ? (r) => e.includes(r.key) : () => !0;
}
function X(...e) {
  let r, a, l = {};
  e.length === 3 ? (r = e[0], a = e[1], l = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (r = !0, a = e[0], l = e[1]) : (r = e[0], a = e[1]) : (r = !0, a = e[0]);
  const {
    target: v = Ne,
    eventName: b = "keydown",
    passive: _ = !1,
    dedupe: c = !1
  } = l, p = Ml(r);
  return fe(v, b, (n) => {
    n.repeat && re(c) || p(n) && a(n);
  }, _);
}
function Cl(e = {}) {
  var r;
  const {
    window: a = Ne,
    deep: l = !0,
    triggerOnRemoval: v = !1
  } = e, b = (r = e.document) != null ? r : a == null ? void 0 : a.document, _ = () => {
    var t;
    let n = b == null ? void 0 : b.activeElement;
    if (l)
      for (; n != null && n.shadowRoot; )
        n = (t = n == null ? void 0 : n.shadowRoot) == null ? void 0 : t.activeElement;
    return n;
  }, c = W(), p = () => {
    c.value = _();
  };
  return a && (fe(a, "blur", (t) => {
    t.relatedTarget === null && p();
  }, !0), fe(a, "focus", p, !0)), v && At(c, p, { document: b }), p(), c;
}
function Vl(e, r = {}) {
  const {
    delayEnter: a = 0,
    delayLeave: l = 0,
    triggerOnRemoval: v = !1,
    window: b = Ne
  } = r, _ = W(!1);
  let c;
  const p = (t) => {
    const n = t ? a : l;
    c && (clearTimeout(c), c = void 0), n ? c = setTimeout(() => _.value = t, n) : _.value = t;
  };
  return b && (fe(e, "mouseenter", () => p(!0), { passive: !0 }), fe(e, "mouseleave", () => p(!1), { passive: !0 }), v && At(
    w(() => ke(e)),
    () => p(!1)
  )), _;
}
function Pe(e, r = {}) {
  const { initialValue: a = !1, focusVisible: l = !1, preventScroll: v = !1 } = r, b = W(!1), _ = w(() => ke(e));
  fe(_, "focus", (p) => {
    var t, n;
    (!l || (n = (t = p.target).matches) != null && n.call(t, ":focus-visible")) && (b.value = !0);
  }), fe(_, "blur", () => b.value = !1);
  const c = w({
    get: () => b.value,
    set(p) {
      var t, n;
      !p && b.value ? (t = _.value) == null || t.blur() : p && !b.value && ((n = _.value) == null || n.focus({ preventScroll: v }));
    }
  });
  return Le(
    _,
    () => {
      c.value = a;
    },
    { immediate: !0, flush: "post" }
  ), { focused: c };
}
const Nl = "focusin", Wl = "focusout", El = ":focus-within";
function he(e, r = {}) {
  const { window: a = Ne } = r, l = w(() => ke(e)), v = W(!1), b = w(() => v.value), _ = Cl(r);
  return !a || !_.value ? { focused: b } : (fe(l, Nl, () => v.value = !0), fe(l, Wl, () => {
    var c, p, t;
    return v.value = (t = (p = (c = l.value) == null ? void 0 : c.matches) == null ? void 0 : p.call(c, El)) != null ? t : !1;
  }), { focused: b });
}
const yt = 1;
function Tt(e, r = {}) {
  const {
    throttle: a = 0,
    idle: l = 200,
    onStop: v = ze,
    onScroll: b = ze,
    offset: _ = {
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
    window: t = Ne,
    onError: n = (M) => {
      console.error(M);
    }
  } = r, o = W(0), s = W(0), d = w({
    get() {
      return o.value;
    },
    set(M) {
      f(M, void 0);
    }
  }), y = w({
    get() {
      return s.value;
    },
    set(M) {
      f(void 0, M);
    }
  });
  function f(M, F) {
    var I, D, q, ae;
    if (!t)
      return;
    const te = re(e);
    if (!te)
      return;
    (q = te instanceof Document ? t.document.body : te) == null || q.scrollTo({
      top: (I = re(F)) != null ? I : y.value,
      left: (D = re(M)) != null ? D : d.value,
      behavior: re(p)
    });
    const Q = ((ae = te == null ? void 0 : te.document) == null ? void 0 : ae.documentElement) || (te == null ? void 0 : te.documentElement) || te;
    d != null && (o.value = Q.scrollLeft), y != null && (s.value = Q.scrollTop);
  }
  const k = W(!1), g = vt({
    left: !0,
    right: !1,
    top: !0,
    bottom: !1
  }), z = vt({
    left: !1,
    right: !1,
    top: !1,
    bottom: !1
  }), h = (M) => {
    k.value && (k.value = !1, z.left = !1, z.right = !1, z.top = !1, z.bottom = !1, v(M));
  }, m = kl(h, a + l), L = (M) => {
    var F;
    if (!t)
      return;
    const I = ((F = M == null ? void 0 : M.document) == null ? void 0 : F.documentElement) || (M == null ? void 0 : M.documentElement) || ke(M), { display: D, flexDirection: q, direction: ae } = getComputedStyle(I), te = ae === "rtl" ? -1 : 1, Q = I.scrollLeft;
    z.left = Q < o.value, z.right = Q > o.value;
    const oe = Q * te <= (_.left || 0), T = Q * te + I.clientWidth >= I.scrollWidth - (_.right || 0) - yt;
    D === "flex" && q === "row-reverse" ? (g.left = T, g.right = oe) : (g.left = oe, g.right = T), o.value = Q;
    let U = I.scrollTop;
    M === t.document && !U && (U = t.document.body.scrollTop), z.top = U < s.value, z.bottom = U > s.value;
    const H = U <= (_.top || 0), $ = U + I.clientHeight >= I.scrollHeight - (_.bottom || 0) - yt;
    D === "flex" && q === "column-reverse" ? (g.top = $, g.bottom = H) : (g.top = H, g.bottom = $), s.value = U;
  }, j = (M) => {
    var F;
    if (!t)
      return;
    const I = (F = M.target.documentElement) != null ? F : M.target;
    L(I), k.value = !0, m(M), b(M);
  };
  return fe(
    e,
    "scroll",
    a ? Sl(j, a, !0, !1) : j,
    c
  ), zl(() => {
    try {
      const M = re(e);
      if (!M)
        return;
      L(M);
    } catch (M) {
      n(M);
    }
  }), fe(
    e,
    "scrollend",
    h,
    c
  ), {
    x: d,
    y,
    isScrolling: k,
    arrivedState: g,
    directions: z,
    measure() {
      const M = re(e);
      t && M && L(M);
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
    const a = e, { componentId: l, subId: v } = it(), { addPropClasses: b } = Be(a), _ = r, { value: c } = ce(_, a), p = W(null), t = W(null), n = he(p), o = w(() => a.checkValue || a.label);
    function s() {
      let d = Zt(c.value) ? Gt(c.value) : c.value;
      if (Array.isArray(d)) {
        let y = !t.value.checked;
        d = d.filter((f) => f !== o.value), y && d.push(o.value), c.value = d, t.value.checked = y;
      } else
        c.value = !c.value;
    }
    return X(" ", () => {
      n.focused.value && s();
    }), X("Enter", () => {
      n.focused.value && s();
    }), (d, y) => (N(), P("label", {
      id: u(l),
      for: u(v)("toggle"),
      tabindex: "0",
      ref_key: "checkboxContainer",
      ref: p,
      class: S(u(b)([d.$style.container]))
    }, [
      de(O("input", {
        type: "checkbox",
        id: u(v)("toggle"),
        class: S(d.$style.checkbox),
        "onUpdate:modelValue": y[0] || (y[0] = (f) => me(c) ? c.value = f : null),
        name: e.name,
        value: o.value,
        ref_key: "checkboxInput",
        ref: t
      }, null, 10, Fl), [
        [Vt, u(c)]
      ]),
      O("span", {
        class: S([d.$style.main, d.$style[`kind--${e.kind}`], d.$style[`size--${e.size}`]])
      }, [
        Ee(d.$slots, "default", {}, () => [
          Ce(Y(e.label), 1)
        ])
      ], 2)
    ], 10, Ul));
  }
}, Bl = {
  $style: Dl
}, jl = /* @__PURE__ */ ne(Rl, [["__cssModules", Bl]]), ql = "zoa__tabs__input", Hl = "zoa__tabs__inputWrapper", Zl = "zoa__tabs__tab", Gl = "zoa__tabs__tabContainer", Yl = {
  input: ql,
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
    const a = e;
    it();
    const { addPropClasses: l } = Be(a), v = r, { value: b } = ce(v, a), _ = W(null);
    W(null), he(_);
    const c = w(() => {
      let p = [];
      return a.options.forEach((t) => {
        typeof t == "object" ? p.push({
          label: t.label || t.value,
          value: t.value || t.label,
          order: t.order == null ? null : t.order
        }) : p.push({ label: t, value: t });
      }), p.sort((t, n) => {
        let o = 0;
        (t.order != null || n.order != null) && (o = t.order != null && n.order != null ? t.order - n.order : t.order != null ? -1 : 1);
        let s = t.label.localeCompare(n.label);
        return o !== 0 ? o : s;
      }), p;
    });
    return b.value == null && (a.initialValue && c.value.some((p) => p.value === a.initialValue) ? b.value = a.initialValue : b.value = c.value[0].value), (p, t) => (N(), P("div", {
      class: S(u(l)([]))
    }, [
      O("ul", {
        class: S([p.$style.tabContainer, p.$style[`orient--${e.activePosition}`]])
      }, [
        (N(!0), P($e, null, Me(c.value, (n) => (N(), P("li", null, [
          O("label", {
            tabindex: "0",
            class: S([
              p.$style.tab,
              p.$style[`orient--${e.activePosition}`],
              p.$style[`kind--${e.kind}`],
              p.$style[`size--${e.size}`],
              p.$style[`state--${u(b) === n.value ? "active" : "inactive"}`]
            ])
          }, [
            de(O("input", {
              type: "radio",
              value: n.value,
              "onUpdate:modelValue": t[0] || (t[0] = (o) => me(b) ? b.value = o : null)
            }, null, 8, Kl), [
              [Nt, u(b)]
            ]),
            O("span", null, Y(n.label), 1)
          ], 2)
        ]))), 256))
      ], 2)
    ], 2));
  }
}, Xl = {
  $style: Yl
}, Ql = /* @__PURE__ */ ne(Jl, [["__cssModules", Xl]]), en = "zoa__label__main", tn = {
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
    const r = E("labelId");
    return (a, l) => e.label && !e.legend ? (N(), P("label", {
      key: 0,
      id: u(r),
      for: e.inputId,
      class: S([a.$style.main, a.$style[`main--${e.labelPosition}`]]),
      tabindex: e.tabbable ? 0 : -1
    }, Y(e.label), 11, ln)) : e.label ? (N(), P("legend", {
      key: 1,
      id: u(r),
      class: S([a.$style.main, a.$style[`main--${e.labelPosition}`]])
    }, Y(e.label), 11, nn)) : Se("", !0);
  }
}, on = {
  $style: tn
}, ht = /* @__PURE__ */ ne(an, [["__cssModules", on]]);
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
    const r = E("labelPosition"), a = E("helpId"), l = W(!1), v = W(null), b = Vl(v, { delayEnter: 500 });
    return Le(b, () => {
      l.value = b.value;
    }), X("Escape", () => l.value = !1), (_, c) => (N(), P("div", {
      class: S([_.$style.main, _.$style[`main--${u(r)}`]]),
      ref_key: "helpContainer",
      ref: v
    }, [
      G(u(Ve), {
        icon: ["fa-solid", "fa-circle-question"],
        class: S(_.$style.icon)
      }, null, 8, ["class"]),
      de(O("div", {
        class: S([_.$style.popup, _.$style[`popup--${e.position}`]]),
        id: u(a),
        role: "tooltip"
      }, [
        Ee(_.$slots, "default", {}, () => [
          Ce(Y(e.text), 1)
        ])
      ], 10, cn), [
        [Ye, l.value]
      ])
    ], 2));
  }
}, fn = {
  $style: dn
}, _t = /* @__PURE__ */ ne(pn, [["__cssModules", fn]]);
function mn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var lt, gt;
function vn() {
  if (gt) return lt;
  gt = 1;
  function* e(a, l, v = 0, b = null) {
    if (a.length === 0) return;
    b === null && (b = l.length);
    let c;
    for (; (c = l.indexOf(a, v)) > -1 && !(c + a.length > b); )
      yield c, v = c + 1;
  }
  function r(a) {
    return a.split("").reverse().join("");
  }
  return lt = {
    searchExact: e,
    reverse: r
  }, lt;
}
var nt, $t;
function bn() {
  if ($t) return nt;
  $t = 1;
  const { searchExact: e, reverse: r } = vn();
  function a(t, n, o) {
    t.length > n.length && ([t, n] = [n, t]);
    const s = n.length - t.length;
    if (s > o)
      return !1;
    if (o === 0)
      return t === n;
    let d;
    for (d = 0; d < t.length && t[d] === n[d]; d++)
      ;
    if (d === t.length)
      return s <= o;
    let y;
    for (y = t.length - 1; y >= 0 && t[y] === n[y + s]; y--)
      ;
    t = t.slice(d, y + 1), n = n.slice(d, y + 1 + s);
    const [f, k] = _(t, n, o);
    return f + (n.length - k) <= o;
  }
  function l(t, n) {
    t.length > n.length && ([t, n] = [n, t]);
    const o = new Array(t.length + 1);
    for (let y = 0; y <= t.length; y++)
      o[y] = y;
    let s, d;
    for (let y = 0; y < n.length; y++) {
      o[0] = y + 1, d = y;
      for (let f = 0; f < t.length; f++)
        s = o[f + 1], o[f + 1] = Math.min(
          d + +(t[f] !== n[y]),
          o[f] + 1,
          o[f + 1] + 1
        ), d = s;
    }
    return o[t.length];
  }
  function v(t, n) {
    const o = {};
    for (let s = Math.min(t.length - 1, n); s >= 0; s--)
      o[t[s]] = s;
    return o;
  }
  function* b(t, n, o) {
    if (t.length > n.length + o) return;
    const s = Math.floor(t.length / (o + 1));
    if (o === 0)
      for (const d of e(t, n))
        yield {
          start: d,
          end: d + t.length,
          dist: 0
        };
    else s >= 10 ? yield* c(t, n, o) : yield* p(t, n, o);
  }
  function _(t, n, o) {
    o = +o;
    let s;
    for (s = 0; s < Math.min(t.length, n.length) && t.charCodeAt(s) === n.charCodeAt(s); s++)
      ;
    if (s && (t = t.slice(s), n = n.slice(s)), t) {
      if (!n)
        return t.length <= o ? [t.length, s] : [null, null];
    } else return [0, s];
    if (o === 0) return [null, null];
    let d = new Array(t.length + 1);
    for (let m = 0; m <= o; m++)
      d[m] = m;
    let y = new Array(t.length + 1), f = null, k = null, g = o, z = 0, h = t.length - 1;
    for (let m = 0; m < n.length; m++) {
      const L = n.charCodeAt(m), j = Math.max(0, z - 1), M = Math.min(
        m + o,
        t.length - 1,
        h
      );
      y[0] = d[0] + 1, z = y[0] <= g ? 0 : null, h = y[0] <= g ? 0 : -1;
      let F;
      for (F = j; F < M; F++) {
        const D = y[F + 1] = Math.min(
          d[F] + +(L !== t.charCodeAt(F)),
          d[F + 1] + 1,
          y[F] + 1
        );
        D <= g && (z === null && (z = F + 1), h = Math.max(
          h,
          F + 1 + (g - D)
        ));
      }
      const I = y[F + 1] = Math.min(
        d[F] + +(L !== t.charCodeAt(F)),
        y[F] + 1
      );
      if (I <= g && (z === null && (z = F + 1), h = F + 1), F === t.length - 1 && (f === null || I <= f) && (f = I, k = m, f < g && (g = f)), [d, y] = [y, d], z === null) break;
    }
    return f !== null && f <= o ? [f, k + 1 + s] : [null, null];
  }
  function* c(t, n, o) {
    const s = Math.floor(t.length / (o + 1)), d = t.length, y = n.length;
    for (let f = 0; f <= t.length - s; f += s) {
      const k = t.slice(f, f + s), g = f + s, z = r(t.slice(0, f)), h = t.slice(g), m = Math.max(0, f - o), L = Math.min(y, y - d + g + o);
      for (const j of e(k, n, m, L)) {
        const [M, F] = _(
          h,
          n.slice(
            j + s,
            j - f + d + o
          ),
          o
        );
        if (M === null) continue;
        const [I, D] = _(
          z,
          r(n.slice(
            Math.max(0, j - f - (o - M)),
            j
          )),
          o - M
        );
        I !== null && (yield {
          start: j - D,
          end: j + s + F,
          dist: I + M
        });
      }
    }
  }
  function* p(t, n, o) {
    const s = t.length, d = n.length;
    if (s > d + o) return;
    const y = v(t, o);
    let f = [], k = [];
    for (let g = 0; g < n.length; g++) {
      const z = n[g];
      f = k, k = [];
      const h = y[z];
      h !== void 0 && (h + 1 === s ? yield {
        start: g,
        end: g + 1,
        dist: h
      } : k.push({
        startIdx: g,
        needleIdx: h + 1,
        dist: h
      }));
      for (const m of f)
        if (t[m.needleIdx] === z)
          m.needleIdx + 1 === s ? yield {
            start: m.startIdx,
            end: g + 1,
            dist: m.dist
          } : k.push({
            startIdx: m.startIdx,
            needleIdx: m.needleIdx + 1,
            dist: m.dist
          });
        else {
          if (m.dist === o) continue;
          k.push({
            startIdx: m.startIdx,
            needleIdx: m.needleIdx,
            dist: m.dist + 1
          });
          for (let L = 1; L <= o - m.dist; L++)
            if (m.needleIdx + L === s) {
              yield {
                start: m.startIdx,
                end: g + 1,
                dist: m.dist + L
              };
              break;
            } else if (t[m.needleIdx + L] === z) {
              m.needleIdx + L + 1 === s ? yield {
                start: m.startIdx,
                end: g + 1,
                dist: m.dist + L
              } : k.push({
                startIdx: m.startIdx,
                needleIdx: m.needleIdx + 1 + L,
                dist: m.dist + L
              });
              break;
            }
          g + 1 < d && m.needleIdx + 1 < s && k.push({
            startIdx: m.startIdx,
            needleIdx: m.needleIdx + 1,
            dist: m.dist + 1
          });
        }
    }
    for (const g of k)
      g.dist += t.length - g.needleIdx, g.dist <= o && (yield {
        start: g.startIdx,
        end: n.length,
        dist: g.dist
      });
  }
  return nt = {
    _expand: _,
    editDistance: l,
    fuzzySearch: b,
    fuzzySearchNgrams: c,
    fuzzySearchCandidates: p,
    isEditDistanceNoGreaterThan: a
  }, nt;
}
var at, kt;
function yn() {
  if (kt) return at;
  kt = 1;
  const { editDistance: e, fuzzySearch: r, isEditDistanceNoGreaterThan: a } = bn();
  return at = {
    editDistance: e,
    fuzzySearch: r,
    isEditDistanceNoGreaterThan: a
  }, at;
}
var ct = yn();
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
     * with `value`, and `order` keys (value required; order is optional).
     */
    options: {
      type: Array
    },
    /**
     * Enables internal list filtering based on the current value. Disable if implementing an external filter using emits.
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
    "update:modelValue"
  ],
  setup(e, { expose: r, emit: a }) {
    const l = e, v = E("inputId"), b = E("labelId"), _ = E("helpId"), c = E("disabled"), p = a, { value: t } = ce(p, l), n = w(() => {
      const h = l.enableSearch && t.value, m = h ? t.value.toLowerCase() : null, L = (M) => M ? [...ct.fuzzySearch(m, M.toLowerCase(), 1)].length > 0 : !1;
      let j = [];
      return l.options.forEach((M) => {
        typeof M == "object" ? j.push({
          value: M.value,
          order: M.order == null ? null : M.order
        }) : j.push({ value: M });
      }), h && (j = j.filter((M) => L(M.value))), j.sort((M, F) => {
        let I = 0;
        (M.order != null || F.order != null) && (I = M.order != null && F.order != null ? M.order - F.order : M.order != null ? -1 : 1);
        let D = M.value.localeCompare(F.value);
        return I !== 0 ? I : D;
      }), j;
    }), o = W(null), s = W(null), d = W(null);
    r({
      target: s
    });
    const y = W(!1), f = Pe(s), k = he(d);
    function g() {
      try {
        o.value.blur(), s.value.blur(), d.value.blur();
      } catch {
      }
      y.value = !1;
    }
    Xe(o, () => {
      y.value = !1;
    }), X("ArrowDown", () => {
      if (n.value.length !== 0) {
        if (f.focused.value)
          d.value.children[0].children[0].focus();
        else if (k.focused.value) {
          const h = d.value.querySelector("li:focus");
          !h || !h.nextElementSibling ? d.value.children[0].children[0].focus() : h.nextElementSibling.focus();
        }
      }
    }), X("ArrowUp", () => {
      if (n.value.length !== 0 && k.focused.value) {
        const h = d.value.querySelector("li:focus");
        !h || !h.previousElementSibling ? s.value.focus() : h.previousElementSibling.focus();
      }
    }), X("Enter", () => {
      if (k.focused.value) {
        const h = d.value.querySelector("li:focus");
        h && z(h.querySelector("input").value);
      }
      g();
    });
    function z(h) {
      t.value = h, g();
    }
    return (h, m) => (N(), P("div", {
      class: S([h.$style.inputWrapper, u(c) ? h.$style.disabled : ""]),
      ref_key: "container",
      ref: o,
      "aria-labelledby": u(b),
      "aria-describedby": u(_)
    }, [
      de(O("input", {
        type: "text",
        placeholder: e.placeholder,
        id: u(v),
        class: S(h.$style.input),
        "onUpdate:modelValue": m[0] || (m[0] = (L) => me(t) ? t.value = L : null),
        onFocusin: m[1] || (m[1] = (L) => y.value = !0),
        ref_key: "textbox",
        ref: s,
        disabled: u(c)
      }, null, 42, wn), [
        [De, u(t)]
      ]),
      y.value && !u(c) ? (N(), P("div", {
        key: 0,
        class: S(h.$style.options),
        ref_key: "dropdown",
        ref: d
      }, [
        n.value.length > 0 ? (N(), P("ul", xn, [
          (N(!0), P($e, null, Me(n.value, (L) => (N(), P("li", {
            class: S(h.$style.option),
            onClick: (j) => z(L.value),
            tabindex: "0"
          }, [
            O("span", null, Y(L.value), 1),
            O("input", {
              type: "hidden",
              value: L.value
            }, null, 8, Cn)
          ], 10, Mn))), 256))
        ])) : (N(), P("div", {
          key: 1,
          class: S(h.$style.noOptions)
        }, "No options found", 2))
      ], 2)) : Se("", !0)
    ], 10, In));
  }
}, Nn = {
  $style: zn
}, Wn = /* @__PURE__ */ ne(Vn, [["__cssModules", Nn]]), En = "zoa__checkbox__input", An = "zoa__checkbox__inputWrapper", Tn = "zoa__checkbox__defaultCheckbox", Pn = "zoa__checkbox__checkbox", On = "zoa__checkbox__check", Ln = "zoa__checkbox__disabled", Dn = {
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
  setup(e, { expose: r, emit: a }) {
    const l = e, v = E("inputId"), b = E("labelId"), _ = E("helpId"), c = E("disabled"), p = a, { value: t, valueChanged: n } = ce(p, l), o = E("rootContainer"), s = W(null), d = he(o);
    r({
      target: s
    });
    const y = E("label"), f = w(() => l.checkValue || y.value), k = w({
      get() {
        return l.name ? t.value || [] : t.value || !1;
      },
      set(z) {
        n(z);
      }
    });
    function g() {
      if (!c.value)
        if (l.name) {
          let z = !k.value.includes(f.value), h = k.value.filter((m) => m !== f.value);
          z && h.push(f.value), k.value = h;
        } else
          k.value = !k.value;
    }
    return X(" ", () => {
      d.focused.value && g();
    }), (z, h) => (N(), P("div", {
      class: S([z.$style.inputWrapper, u(c) ? z.$style.disabled : ""]),
      "aria-labelledby": u(b),
      "aria-describedby": u(_)
    }, [
      de(O("input", {
        type: "checkbox",
        id: u(v),
        class: S(z.$style.defaultCheckbox),
        "onUpdate:modelValue": h[0] || (h[0] = (m) => k.value = m),
        name: e.name ? e.name : null,
        value: f.value,
        ref_key: "checkboxInput",
        ref: s,
        disabled: u(c)
      }, null, 10, Fn), [
        [Vt, k.value]
      ]),
      O("span", {
        class: S(z.$style.checkbox),
        onClick: g
      }, [
        G(u(Ve), {
          icon: "fa-solid fa-check",
          class: S(z.$style.check)
        }, null, 8, ["class"])
      ], 2)
    ], 10, Un));
  }
}, Bn = {
  $style: Dn
}, jn = /* @__PURE__ */ ne(Rn, [["__cssModules", Bn]]);
var ot, St;
function qn() {
  return St || (St = 1, ot = {
    __locale: "en",
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    abbreviated_days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    abbreviated_months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    am: "AM",
    pm: "PM"
  }), ot;
}
var st, zt;
function Hn() {
  return zt || (zt = 1, st = qn()), st;
}
var Zn = Hn();
const It = /* @__PURE__ */ mn(Zn), Gn = "zoa__dateambiguous__input", Yn = "zoa__dateambiguous__inputWrapper", Kn = "zoa__dateambiguous__disabled", Jn = "zoa__dateambiguous__datePopup", Xn = "zoa__dateambiguous__popupSection", Qn = "zoa__dateambiguous__yearGrid", ea = "zoa__dateambiguous__monthGrid", ta = "zoa__dateambiguous__dayGrid", la = "zoa__dateambiguous__editing", na = "zoa__dateambiguous__suggestion", aa = "zoa__dateambiguous__dateRange", oa = "zoa__dateambiguous__yearParts", sa = {
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
  setup(e, { expose: r, emit: a }) {
    const l = () => import("./dates-CDLE0m0X.js"), v = e, b = E("inputId"), _ = E("labelId"), c = E("helpId"), p = E("disabled"), t = a, { valueChanged: n } = ce(t, v.delay), o = w(() => {
      let i;
      try {
        i = new Date(
          v.min === "today" ? Date.now() : Date.parse(v.min || "0000-01-01")
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
          v.max === "today" ? Date.now() : Date.parse(v.max || "9999-12-31")
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
    }), d = W(null), y = E("rootContainer"), f = W(null), k = W(null), g = W(null), z = W(null), h = W(null), m = W(null), L = W(null), j = W(!1), { focused: M } = he(y);
    r({
      target: d
    });
    const F = Pe(f), I = he(f), D = Pe(k), q = he(k), ae = Pe(g), te = he(g), Q = w(() => {
      let i;
      return F.focused.value ? i = f.value : D.focused.value ? i = k.value : ae.focused.value && (i = g.value), i;
    }), oe = w(() => {
      let i;
      return I.focused.value ? i = f.value : q.focused.value ? i = k.value : te.focused.value && (i = g.value), i;
    });
    X("Enter", () => {
      Q && Q.value.children[0].focus();
    }), X("ArrowLeft", () => {
      if (!oe.value)
        return;
      const i = oe.value.querySelector("button:focus");
      !i || !i.previousElementSibling ? oe.value.children[oe.value.children.length - 1].focus() : i.previousElementSibling.focus();
    }), X("ArrowRight", () => {
      if (!oe.value)
        return;
      const i = oe.value.querySelector("button:focus");
      !i || !i.nextElementSibling ? oe.value.children[0].focus() : i.nextElementSibling.focus();
    }), X("Escape", () => {
      const i = y.value.querySelector("*:focus");
      i && i.blur();
    });
    function T(i, V, C) {
      i.value && (i.value.target.onkeyup = (R) => {
        /^[0-9]$/.test(R.key) && V ? V.value.focus() : R.key === "Backspace" && C && C.value.focus();
      });
    }
    Ct(() => {
      T(z, h, null), T(h, m, z), T(m, L, h), T(L, null, m);
    });
    const U = w(() => ({
      year: K.value,
      month: ge.value,
      day: ye.value,
      earliest: `${$.value.lower.year.toString().padStart(4, "0")}-${$.value.lower.month.toString().padStart(2, "0")}-${$.value.lower.day.toString().padStart(2, "0")}`,
      latest: `${$.value.upper.year.toString().padStart(4, "0")}-${$.value.upper.month.toString().padStart(2, "0")}-${$.value.upper.day.toString().padStart(2, "0")}`
    })), H = w(() => pt(
      U.value.year,
      U.value.month,
      U.value.day
    )), $ = w(() => {
      let i, V;
      if (!We.value)
        i = o.value.year, V = s.value.year;
      else {
        const Ie = 10 ** (4 - (Math.max(
          ..._e.map((Rt, Bt) => isNaN(parseInt(Z.value[Rt])) ? -1 : Bt)
        ) + 1)), be = je(Z.value, 4), He = Math.floor(o.value.year / Ie) * Ie, mt = Math.floor(s.value.year / Ie) * Ie;
        be < He || be > mt ? (i = o.value.year, V = s.value.year) : be === He ? (i = o.value.year, V = be + Ie - 1) : be === mt ? (i = be, V = s.value.year) : (i = be, V = be + Ie - 1);
      }
      const C = i === o.value.year, R = V === s.value.year, se = C ? Math.max(o.value.month, we.value || 1) : we.value || 1, ue = R ? Math.min(s.value.month, we.value || 12) : we.value || 12, ve = se === o.value.month, ee = ue === s.value.month;
      let J = Fe.value || 1, ie = Fe.value || qe(ue);
      return J = C && ve ? Math.max(J, o.value.day) : J, ie = R && ee ? Math.min(ie, s.value.day) : ie, i === V && se === ue && (R && ee && J > ie && (J = 1), C && ve && ie < J && (ie = qe(ue))), {
        lower: {
          year: i,
          month: se,
          day: J,
          isMinYear: C,
          isMinMonth: ve
        },
        upper: {
          year: V,
          month: ue,
          day: ie,
          isMaxYear: R,
          isMaxMonth: ee
        }
      };
    });
    function x(i, V, C) {
      const R = isNaN(parseInt(i)), se = isNaN(parseInt(V)), ue = isNaN(parseInt(C)), ve = se || V <= 12 && V >= 1, ee = ue || C <= qe(V);
      if (R || i > $.value.lower.year && i < $.value.upper.year)
        return {
          year: !0,
          month: ve,
          day: ee
        };
      if (i < $.value.lower.year || i > $.value.upper.year)
        return {
          year: !1,
          month: ve,
          day: ee
        };
      let J = ve, ie = ee;
      return i === $.value.lower.year && (J = J && (se || V >= $.value.lower.month), V === $.value.lower.month && (ie = ie && (ue || C >= $.value.lower.day))), i === $.value.upper.year && (J = J && (se || V <= $.value.upper.month), V === $.value.upper.month && (ie = ie && (ue || C <= $.value.upper.day))), {
        year: !0,
        month: J,
        day: ie
      };
    }
    function A() {
      d.value.value = H.value, j.value = !1;
    }
    const B = W([]);
    function le(i) {
      j.value = !0, l().then((V) => {
        B.value = V.parseDate(i.target.value);
      });
    }
    const Ue = Oe(le, 200);
    function Te(i) {
      Z.value = et(i.year), ge.value = i.month, ye.value = i.day, B.value = [];
    }
    const K = w(() => {
      if (!We.value)
        return null;
      const i = je(Z.value, 4);
      return x(i, ge.value, ye.value).year ? i : null;
    }), Z = W({
      millenium: null,
      century: null,
      decade: null,
      year: null
    }), _e = ["millenium", "century", "decade", "year"], We = w(() => Object.values(Z.value).some((i) => !isNaN(parseInt(i)))), Qe = w(() => {
      const i = et($.value.lower.year), V = {
        millenium: null,
        century: null,
        decade: null,
        year: null
      };
      if (o.value.year === s.value.year && isNaN(parseInt(Z.value.year)))
        return [i];
      if ($.value.lower.year === $.value.upper.year)
        return [V];
      const C = et($.value.upper.year);
      let R, se = { ...V };
      if (We.value)
        R = Math.max(
          ..._e.map((ee, J) => (se[ee] = Z.value[ee], isNaN(parseInt(Z.value[ee])) ? -1 : J))
        ) + 1;
      else
        for (let ee = 0; ee < _e.length; ee++) {
          let J = _e[ee];
          if (i[J] === C[J])
            se[J] = i[J];
          else if (R == null) {
            R = ee;
            break;
          }
        }
      function ue(ee) {
        let J = _e[ee];
        const ie = je(i, ee + 1), ft = je(C, ee + 1);
        return Array(10).fill(0).map((Ie, be) => {
          let He = { ...se };
          return He[J] = Ie + be, He;
        }).filter((Ie) => {
          const be = je(Ie, ee + 1);
          return be >= ie && be <= ft;
        });
      }
      let ve = ue(R);
      return ve.length === 1 && R < 3 && (se = { ...ve[0] }, ve = ue(R + 1)), We.value && ve.push(V), ve;
    }), Ot = w(() => K.value % 100 === 0 ? K.value % 400 === 0 : K.value % 4 === 0);
    function Lt(i) {
      return Object.values(i).every((V) => V == null) ? "clear" : _e.map((V) => i[V] || 0).join("");
    }
    function je(i, V) {
      return _e.slice(0, V).reduce((C, R, se) => {
        let ue = i[R] || 0;
        return C + ue * 10 ** (3 - se);
      }, 0);
    }
    function et(i) {
      return {
        millenium: Math.floor(i / 1e3),
        century: Math.floor(i % 1e3 / 100),
        decade: Math.floor(i % 100 / 10),
        year: Math.floor(i % 10)
      };
    }
    function Dt(i) {
      if (Z.value = i, Math.max(
        ..._e.map(
          (C, R) => isNaN(parseInt(Z.value[C])) ? -1 : R
        )
      ) === 3) {
        let C = x(K.value, ge.value, ye.value);
        (!C.month || !C.day) && (ge.value = null, ye.value = null);
      }
    }
    const we = W(null), ge = w({
      get() {
        return x(K.value, we.value, ye.value).month ? we.value : null;
      },
      set(i) {
        we.value = isNaN(parseInt(i)) ? null : i, ye.value && ye.value > tt.value && (ye.value = tt.value);
      }
    }), Ut = w(() => {
      let i = It.abbreviated_months.map((C, R) => [C, R + 1]);
      const V = K.value ? K.value : o.value.year === s.value.year ? o.value.year : null;
      if (V === o.value.year && (i = i.slice(o.value.month - 1, i.length)), V === s.value.year) {
        const C = 12 - i.length;
        i = i.slice(0, s.value.month - C);
      }
      return we.value && i.push(["clear", null]), i;
    }), tt = w(() => qe(ge.value));
    function qe(i) {
      return [4, 6, 9, 11].includes(i) ? 30 : i === 2 ? Ot.value ? 29 : 28 : 31;
    }
    const Fe = W(null), ye = w({
      get() {
        const i = x(K.value, we.value, Fe.value);
        return i.month && i.day ? Fe.value : null;
      },
      set(i) {
        Fe.value = isNaN(parseInt(i)) ? null : i;
      }
    }), Ft = w(() => {
      const i = K.value ? K.value : o.value.year === s.value.year ? o.value.year : null, V = ge.value ? ge.value : o.value.year === s.value.year && o.value.month === s.value.month ? o.value.month : null, C = qe(V);
      let R = Array(C).fill(1).map((se, ue) => ue + 1);
      if (i === o.value.year && !isNaN(parseInt(V)) && V <= o.value.month && (R = R.slice(o.value.day - 1)), i === s.value.year && !isNaN(parseInt(V)) && V >= s.value.month) {
        const se = C - R.length;
        R = R.slice(0, s.value.day - se);
      }
      return Fe.value && R.push(null), R;
    });
    function pt(i, V, C) {
      const R = It.abbreviated_months[V - 1];
      return i && V && C ? `${C} ${R} ${i}` : i && V ? `${R} ${i}` : i && C ? `${C} ??? ${i}` : V && C ? `${C} ${R}` : i || (V ? R : C ? `day ${C}` : null);
    }
    return Le(U, () => {
      A(), n(U.value);
    }), (i, V) => (N(), P("div", {
      class: S([i.$style.inputWrapper, u(p) ? i.$style.disabled : ""]),
      "aria-labelledby": u(_),
      "aria-describedby": u(c)
    }, [
      O("input", {
        type: "text",
        placeholder: e.placeholder,
        id: u(b),
        class: S([i.$style.input, j.value ? i.$style.editing : ""]),
        ref_key: "displayBox",
        ref: d,
        onInput: V[0] || (V[0] = (...C) => u(Ue) && u(Ue)(...C)),
        disabled: u(p)
      }, null, 42, ra),
      u(M) && !u(p) ? (N(), P("div", {
        key: 0,
        class: S(i.$style.datePopup)
      }, [
        B.value.length > 0 ? (N(), P("div", {
          key: 0,
          class: S(i.$style.popupSection)
        }, [
          (N(!0), P($e, null, Me(B.value, (C) => (N(), P("span", {
            onClick: (R) => Te(C),
            onKeydown: Yt((R) => Te(C), ["enter"]),
            class: S(i.$style.suggestion),
            tabindex: "0"
          }, Y(pt(C.year, C.month, C.day)), 43, ia))), 256))
        ], 2)) : Se("", !0),
        O("div", {
          class: S(i.$style.popupSection)
        }, [
          G(u(pe), {
            label: "year",
            "grid-class": i.$style.yearParts
          }, {
            default: Ze(() => [
              G(u(pe), {
                "zoa-type": "number",
                label: "millenium",
                "label-position": "none",
                options: { placeholder: 0, min: 0, max: 9 },
                modelValue: Z.value.millenium,
                "onUpdate:modelValue": V[1] || (V[1] = (C) => Z.value.millenium = C),
                ref_key: "yrM",
                ref: z
              }, null, 8, ["modelValue"]),
              G(u(pe), {
                "zoa-type": "number",
                label: "century",
                "label-position": "none",
                options: { placeholder: 0, min: 0, max: 9 },
                modelValue: Z.value.century,
                "onUpdate:modelValue": V[2] || (V[2] = (C) => Z.value.century = C),
                ref_key: "yrC",
                ref: h
              }, null, 8, ["modelValue"]),
              G(u(pe), {
                "zoa-type": "number",
                label: "decade",
                "label-position": "none",
                options: { placeholder: 0, min: 0, max: 9 },
                modelValue: Z.value.decade,
                "onUpdate:modelValue": V[3] || (V[3] = (C) => Z.value.decade = C),
                ref_key: "yrD",
                ref: m
              }, null, 8, ["modelValue"]),
              G(u(pe), {
                "zoa-type": "number",
                label: "year",
                "label-position": "none",
                options: { placeholder: 0, min: 0, max: 9 },
                modelValue: Z.value.year,
                "onUpdate:modelValue": V[4] || (V[4] = (C) => Z.value.year = C),
                ref_key: "yrY",
                ref: L
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["grid-class"]),
          O("div", {
            class: S(i.$style.yearGrid),
            tabindex: "0",
            ref_key: "yearBtns",
            ref: f
          }, [
            (N(!0), P($e, null, Me(Qe.value, (C) => (N(), Ae(u(Ge), {
              size: "sm",
              onClick: (R) => Dt(C),
              tabindex: "-1"
            }, {
              default: Ze(() => [
                Ce(Y(Lt(C)), 1)
              ]),
              _: 2
            }, 1032, ["onClick"]))), 256))
          ], 2)
        ], 2),
        O("div", {
          class: S(i.$style.popupSection)
        }, [
          G(u(pe), {
            "zoa-type": "number",
            label: "month",
            options: { placeholder: 1, min: 1, max: 12 },
            modelValue: ge.value,
            "onUpdate:modelValue": V[5] || (V[5] = (C) => ge.value = C)
          }, null, 8, ["modelValue"]),
          O("div", {
            class: S(i.$style.monthGrid),
            tabindex: "0",
            ref_key: "monthBtns",
            ref: k
          }, [
            (N(!0), P($e, null, Me(Ut.value, (C) => (N(), Ae(u(Ge), {
              size: "sm",
              onClick: (R) => ge.value = C[1],
              tabindex: "-1"
            }, {
              default: Ze(() => [
                Ce(Y(C[0]), 1)
              ]),
              _: 2
            }, 1032, ["onClick"]))), 256))
          ], 2)
        ], 2),
        O("div", {
          class: S(i.$style.popupSection)
        }, [
          G(u(pe), {
            "zoa-type": "number",
            label: "day",
            options: { placeholder: 1, min: 1, max: tt.value },
            modelValue: ye.value,
            "onUpdate:modelValue": V[6] || (V[6] = (C) => ye.value = C)
          }, null, 8, ["options", "modelValue"]),
          O("div", {
            class: S(i.$style.dayGrid),
            tabindex: "0",
            ref_key: "dayBtns",
            ref: g
          }, [
            (N(!0), P($e, null, Me(Ft.value, (C) => (N(), Ae(u(Ge), {
              size: "sm",
              onClick: (R) => ye.value = C,
              tabindex: "-1"
            }, {
              default: Ze(() => [
                Ce(Y(C || "clear"), 1)
              ]),
              _: 2
            }, 1032, ["onClick"]))), 256))
          ], 2)
        ], 2),
        O("div", {
          class: S(i.$style.popupSection)
        }, [
          O("small", {
            class: S(i.$style.dateRange)
          }, Y(U.value.earliest) + " to " + Y(U.value.latest), 3)
        ], 2)
      ], 2)) : Se("", !0)
    ], 10, ua));
  }
}, ca = {
  $style: sa
}, pa = /* @__PURE__ */ ne(da, [["__cssModules", ca]]), fa = "zoa__datesimple__input", ma = "zoa__datesimple__inputWrapper", va = "zoa__datesimple__disabled", ba = {
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
  setup(e, { expose: r, emit: a }) {
    const l = e, v = E("inputId"), b = E("labelId"), _ = E("helpId"), c = E("disabled"), p = a, { value: t } = ce(p, l), n = W(null);
    return r({
      target: n
    }), (o, s) => (N(), P("div", {
      class: S([o.$style.inputWrapper, u(c) ? o.$style.disabled : ""]),
      "aria-labelledby": u(b),
      "aria-describedby": u(_)
    }, [
      de(O("input", {
        type: "date",
        placeholder: e.placeholder,
        min: e.min,
        max: e.max,
        step: e.step,
        id: u(v),
        class: S(o.$style.input),
        "onUpdate:modelValue": s[0] || (s[0] = (d) => me(t) ? t.value = d : null),
        ref_key: "target",
        ref: n,
        disabled: u(c)
      }, null, 10, ha), [
        [De, u(t)]
      ])
    ], 10, ya));
  }
}, ga = {
  $style: ba
}, $a = /* @__PURE__ */ ne(_a, [["__cssModules", ga]]), ka = "zoa__dropdown__input", Sa = "zoa__dropdown__inputWrapper", za = "zoa__dropdown__arrow", Ia = "zoa__dropdown__disabled", wa = {
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
  setup(e, { expose: r, emit: a }) {
    const l = e, v = E("inputId"), b = E("labelId"), _ = E("helpId"), c = E("disabled"), p = w(() => {
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
        let k = d.label.localeCompare(y.label);
        return f !== 0 ? f : k;
      }), s;
    }), t = a, { value: n } = ce(t, l), o = W(null);
    return r({
      target: o
    }), (s, d) => (N(), P("div", {
      class: S([s.$style.inputWrapper, u(c) ? s.$style.disabled : ""]),
      "aria-labelledby": u(b),
      "aria-describedby": u(_)
    }, [
      de(O("select", {
        id: u(v),
        class: S(s.$style.input),
        "onUpdate:modelValue": d[0] || (d[0] = (y) => me(n) ? n.value = y : null),
        ref_key: "target",
        ref: o,
        disabled: u(c)
      }, [
        O("option", Ca, Y(e.placeholder), 1),
        (N(!0), P($e, null, Me(p.value, (y) => (N(), P("option", {
          value: y.value
        }, Y(y.label), 9, Va))), 256))
      ], 10, Ma), [
        [Kt, u(n)]
      ]),
      G(u(Ve), {
        icon: "fa-solid fa-caret-down",
        class: S(s.$style.arrow)
      }, null, 8, ["class"])
    ], 10, xa));
  }
}, Wa = {
  $style: wa
}, Ea = /* @__PURE__ */ ne(Na, [["__cssModules", Wa]]), Aa = "zoa__multiselect__input", Ta = "zoa__multiselect__inputWrapper", Pa = "zoa__multiselect__disabled", Oa = "zoa__multiselect__options", La = "zoa__multiselect__optlist", Da = "zoa__multiselect__listItem", Ua = "zoa__multiselect__option", Fa = "zoa__multiselect__selectAll", Ra = "zoa__multiselect__subgroup", Ba = "zoa__multiselect__noOptions", ja = "zoa__multiselect__textboxWrapper", qa = "zoa__multiselect__arrow", Ha = {
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
  textboxWrapper: ja,
  arrow: qa
}, Za = ["aria-labelledby", "aria-describedby"], Ga = ["placeholder", "id", "disabled"], Ya = ["title"], Ka = ["onClick"], Ja = { key: 1 }, Ke = 10, Xa = {
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
  setup(e, { expose: r, emit: a }) {
    const l = e, v = E("inputId"), b = E("subId"), _ = E("labelId"), c = E("helpId"), p = E("disabled"), t = a, { value: n } = ce(t, l);
    Array.isArray(n) || (n.value = []);
    const o = W(null), s = Oe(($) => {
      t("search", $);
    }, l.searchDelay), d = Oe(($) => {
      o.value = $;
    }, l.searchDelay), y = w({
      get() {
        return o.value;
      },
      set($) {
        d($), s($);
      }
    }), f = w(() => (n.value ? n.value.length !== 1 : !0) ? l.itemNamePlural || l.itemName + "s" : l.itemName), k = w(() => {
      let $ = [];
      return l.options.forEach((x) => {
        typeof x == "object" ? $.push({
          label: x.label || x.value,
          value: x.value || x.label,
          group: x.group || null,
          order: x.order == null ? null : x.order
        }) : $.push({ label: x, value: x, group: null });
      }), $.sort((x, A) => {
        let B;
        x.group === A.group ? B = 0 : !x.group || !A.group ? B = x.group ? 1 : -1 : B = x.group.localeCompare(A.group);
        let le = 0;
        (x.order != null || A.order != null) && (le = x.order != null && A.order != null ? x.order - A.order : x.order != null ? -1 : 1);
        let Ue = x.label.localeCompare(A.label);
        return B !== 0 ? B : le !== 0 ? le : Ue;
      }), $;
    }), g = w(() => {
      const $ = l.enableSearch && y.value, x = $ ? y.value.toLowerCase() : null, A = (K) => K ? [...ct.fuzzySearch(x, K.toLowerCase(), 1)].length > 0 : !1;
      let B;
      $ ? B = k.value.filter((K) => A(K.group) || A(K.label) || A(K.value)) : B = k.value;
      let le = [], Ue = Object.entries(
        Object.groupBy(B, ({ group: K }) => K)
      ), Te = x ? 2 : 1;
      return Ue.forEach((K) => {
        let Z = K[0], _e = K[1];
        Z && Z !== "null" && (le.push({
          ix: Te,
          kind: "group",
          label: Z,
          value: Z,
          group: Z
        }), Te += 1), le = le.concat(
          _e.map((We, Qe) => ({
            ix: Te + Qe,
            kind: "option",
            label: We.label,
            value: We.value,
            group: We.group
          }))
        ), Te += _e.length;
      }), le;
    }), z = W(null), h = W(null), m = W(null);
    r({
      target: h
    });
    const { y: L } = Tt(m), j = w(() => !m.value || m.value && L.value !== m.value.scrollTop ? 0 : L.value), M = w(() => {
      try {
        return m.value.clientHeight;
      } catch {
        return 500;
      }
    }), F = w(() => g.value.length < Ke * 2 ? 0 : Math.floor(j.value / l.itemHeight) - Ke), I = w(() => g.value.length < Ke * 2 ? g.value.length + Ke : Math.ceil((j.value + M.value) / l.itemHeight)), D = W(!1), q = Pe(h), ae = he(m);
    function te() {
      D.value = !0, setTimeout(() => {
        h.value.focus();
      }, 50);
    }
    function Q() {
      try {
        z.value.blur(), h.value.blur(), m.value.blur();
      } catch {
      }
      D.value = !1;
    }
    function oe() {
      D.value ? Q() : te();
    }
    Xe(z, () => {
      Q();
    }), X("ArrowDown", () => {
      if (k.value.length === 0)
        return;
      const $ = [...m.value.querySelectorAll("label")];
      if (q.focused.value)
        $[0].focus();
      else if (ae.focused.value) {
        const x = m.value.querySelector("label:focus");
        if (!x)
          $[0].focus();
        else {
          const A = $.findIndex((B) => B === x);
          A === $.length - 1 ? $[0].focus() : $[A + 1].focus();
        }
      }
    }), X("ArrowUp", () => {
      if (k.value.length !== 0 && ae.focused.value) {
        const $ = [...m.value.querySelectorAll("label")], x = m.value.querySelector("label:focus");
        if (!x)
          h.value.focus();
        else {
          const A = $.findIndex((B) => B === x);
          A === 0 ? h.value.focus() : $[A - 1].focus();
        }
      }
    }), X("Enter", () => {
      q.focused.value || Q();
    });
    const T = w({
      get() {
        const $ = k.value;
        return n.value == null || n.value.length !== $.length ? !1 : $.filter((A) => !n.value.includes(A.value)).length === 0;
      },
      set($) {
        $ ? n.value = k.value.map((x) => x.value) : n.value = [];
      }
    }), U = w({
      get() {
        let $ = g.value.filter((A) => A.kind === "option").map((A) => A.value);
        return n.value == null || n.value.length < $.length ? !1 : $.filter((A) => !n.value.includes(A)).length === 0;
      },
      set($) {
        let x = g.value.filter((le) => le.kind === "option").map((le) => le.value);
        const A = n.value ? n.value : [], B = x.filter((le) => !A.includes(le));
        $ ? n.value = A.concat(B) : n.value = A.filter((le) => !x.includes(le));
      }
    });
    function H($) {
      const x = g.value.filter((B) => B.kind === "option" && B.group === $).map((B) => B.value);
      n.value = n.value ? n.value : [];
      const A = x.filter((B) => !n.value.includes(B));
      A.length > 0 ? A.forEach((B) => {
        n.value.push(B);
      }) : n.value = n.value.filter((B) => !x.includes(B));
    }
    return ($, x) => (N(), P("div", {
      class: S([$.$style.inputWrapper, u(p) ? $.$style.disabled : ""]),
      ref_key: "container",
      ref: z,
      "aria-labelledby": u(_),
      "aria-describedby": u(c)
    }, [
      O("div", {
        class: S($.$style.textboxWrapper)
      }, [
        de(O("input", {
          type: "text",
          placeholder: e.placeholder,
          id: u(v),
          class: S($.$style.input),
          "onUpdate:modelValue": x[0] || (x[0] = (A) => y.value = A),
          ref_key: "textbox",
          ref: h,
          disabled: u(p)
        }, null, 10, Ga), [
          [De, y.value],
          [Ye, D.value && !u(p)]
        ]),
        de(O("div", {
          class: S($.$style.input),
          tabindex: "0",
          onFocusin: te
        }, Y(u(n) ? u(n).length : 0) + " " + Y(f.value) + " selected ", 35), [
          [Ye, !D.value || u(p)]
        ]),
        G(u(Ve), {
          icon: "fa-solid fa-caret-down",
          class: S($.$style.arrow),
          onClick: oe
        }, null, 8, ["class"])
      ], 2),
      D.value && !u(p) ? (N(), P("div", {
        key: 0,
        class: S($.$style.options),
        ref_key: "dropdown",
        ref: m
      }, [
        g.value.length > 0 ? (N(), P("ul", {
          key: 0,
          class: S($.$style.optlist)
        }, [
          O("li", {
            title: "Select all",
            class: S([$.$style.selectAll, $.$style.listItem, $.$style.option]),
            style: Re({ height: `${e.itemHeight}px` })
          }, [
            G(u(pe), {
              "zoa-type": "checkbox",
              label: "Select all",
              "label-position": "right",
              modelValue: T.value,
              "onUpdate:modelValue": x[1] || (x[1] = (A) => T.value = A)
            }, null, 8, ["modelValue"])
          ], 6),
          o.value ? (N(), P("li", {
            key: 0,
            title: "Select results",
            class: S([$.$style.selectAll, $.$style.listItem, $.$style.option]),
            style: Re({ height: `${e.itemHeight}px` })
          }, [
            G(u(pe), {
              "zoa-type": "checkbox",
              label: "Select results",
              "label-position": "right",
              modelValue: U.value,
              "onUpdate:modelValue": x[2] || (x[2] = (A) => U.value = A)
            }, null, 8, ["modelValue"])
          ], 6)) : Se("", !0),
          (N(!0), P($e, null, Me(g.value, (A) => (N(), P("li", {
            title: A.label,
            class: S([
              $.$style.listItem,
              A.kind === "group" ? $.$style.subgroup : $.$style.option
            ]),
            style: Re({ height: `${e.itemHeight}px` })
          }, [
            A.kind === "group" ? (N(), P("div", {
              key: 0,
              onClick: (B) => H(A.group)
            }, Y(A.label), 9, Ka)) : (N(), P("div", Ja, [
              A.ix >= F.value && A.ix <= I.value ? (N(), Ae(u(pe), {
                key: 0,
                "zoa-type": "checkbox",
                label: A.label,
                "label-position": "right",
                options: { checkValue: A.value, name: u(b)("checkboxes") },
                modelValue: u(n),
                "onUpdate:modelValue": x[3] || (x[3] = (B) => me(n) ? n.value = B : null)
              }, null, 8, ["label", "options", "modelValue"])) : Se("", !0)
            ]))
          ], 14, Ya))), 256))
        ], 2)) : (N(), P("div", {
          key: 1,
          class: S($.$style.noOptions)
        }, "No options found", 2))
      ], 2)) : Se("", !0)
    ], 10, Za));
  }
}, Qa = {
  $style: Ha
}, eo = /* @__PURE__ */ ne(Xa, [["__cssModules", Qa]]), to = "zoa__dropdownsearch__input", lo = "zoa__dropdownsearch__inputWrapper", no = "zoa__dropdownsearch__disabled", ao = "zoa__dropdownsearch__options", oo = "zoa__dropdownsearch__optlist", so = "zoa__dropdownsearch__listItem", uo = "zoa__dropdownsearch__option", ro = "zoa__dropdownsearch__noOptions", io = "zoa__dropdownsearch__textboxWrapper", co = "zoa__dropdownsearch__arrow", po = {
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
}, fo = ["aria-labelledby", "aria-describedby"], mo = ["placeholder", "id", "disabled"], vo = ["title"], Je = 10, bo = {
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
      type: Array
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
  setup(e, { expose: r, emit: a }) {
    const l = e, v = E("inputId"), b = E("subId"), _ = E("labelId"), c = E("helpId"), p = E("disabled"), t = a, { value: n } = ce(t, l), o = W(null), s = Oe((T) => {
      t("search", T);
    }, l.searchDelay), d = Oe((T) => {
      o.value = T;
    }, l.searchDelay), y = w({
      get() {
        return o.value;
      },
      set(T) {
        d(T), s(T);
      }
    }), f = w(() => {
      let T = [];
      return l.options.forEach((U) => {
        typeof U == "object" ? T.push({
          label: U.label || U.value,
          value: U.value || U.label,
          order: U.order == null ? null : U.order
        }) : T.push({ label: U, value: U });
      }), T;
    }), k = w(() => {
      const T = l.enableSearch && y.value, U = T ? y.value.toLowerCase() : null, H = (x) => x ? [...ct.fuzzySearch(U, x.toLowerCase(), 1)].length > 0 : !1;
      let $;
      return T ? $ = f.value.filter((x) => H(x.label) || H(x.value)) : $ = f.value, $.sort((x, A) => {
        let B = 0;
        (x.order != null || A.order != null) && (B = x.order != null && A.order != null ? x.order - A.order : x.order != null ? -1 : 1);
        let le = x.label.localeCompare(A.label);
        return B !== 0 ? B : le;
      }), $.map((x, A) => (x.ix = A, x));
    }), g = w(() => {
      let T = f.value.find(
        (U) => U.value === n.value
      );
      return T == null ? l.placeholder || "--" : T.label;
    }), z = W(null), h = W(null), m = W(null);
    r({
      target: h
    });
    const { y: L } = Tt(m), j = w(() => !m.value || m.value && L.value !== m.value.scrollTop ? 0 : L.value), M = w(() => {
      try {
        return m.value.clientHeight;
      } catch {
        return 500;
      }
    }), F = w(() => k.value.length < Je * 2 ? 0 : Math.floor(j.value / l.itemHeight) - Je), I = w(() => k.value.length < Je * 2 ? k.value.length + Je : Math.ceil((j.value + M.value) / l.itemHeight)), D = W(!1), q = Pe(h), ae = he(m);
    function te() {
      D.value = !0, setTimeout(() => {
        h.value.focus();
      }, 50);
    }
    function Q() {
      try {
        y.value = null, z.value.blur(), h.value.blur(), m.value.blur();
      } catch {
      }
      D.value = !1;
    }
    function oe() {
      D.value ? Q() : te();
    }
    return Xe(z, () => {
      Q();
    }), X("ArrowDown", () => {
      if (f.value.length === 0)
        return;
      const T = [...m.value.querySelectorAll("label")];
      if (q.focused.value)
        T[0].focus();
      else if (ae.focused.value) {
        const U = m.value.querySelector("label:focus");
        if (!U)
          T[0].focus();
        else {
          const H = T.findIndex(($) => $ === U);
          H === T.length - 1 ? T[0].focus() : T[H + 1].focus();
        }
      }
    }), X("ArrowUp", () => {
      if (f.value.length !== 0 && ae.focused.value) {
        const T = [...m.value.querySelectorAll("label")], U = m.value.querySelector("label:focus");
        if (!U)
          h.value.focus();
        else {
          const H = T.findIndex(($) => $ === U);
          H === 0 ? h.value.focus() : T[H - 1].focus();
        }
      }
    }), X("Enter", () => {
      if (ae.focused.value) {
        const T = m.value.querySelector("label:focus");
        T && (n.value = T.control.value);
      }
      q.focused.value || Q();
    }), (T, U) => (N(), P("div", {
      class: S([T.$style.inputWrapper, u(p) ? T.$style.disabled : ""]),
      ref_key: "container",
      ref: z,
      "aria-labelledby": u(_),
      "aria-describedby": u(c)
    }, [
      O("div", {
        class: S(T.$style.textboxWrapper)
      }, [
        de(O("input", {
          type: "text",
          placeholder: e.placeholder,
          id: u(v),
          class: S(T.$style.input),
          "onUpdate:modelValue": U[0] || (U[0] = (H) => y.value = H),
          ref_key: "textbox",
          ref: h,
          disabled: u(p)
        }, null, 10, mo), [
          [De, y.value],
          [Ye, D.value && !u(p)]
        ]),
        de(O("div", {
          class: S(T.$style.input),
          tabindex: "0",
          onFocusin: te
        }, Y(g.value), 35), [
          [Ye, !D.value || u(p)]
        ]),
        G(u(Ve), {
          icon: "fa-solid fa-caret-down",
          class: S(T.$style.arrow),
          onClick: oe
        }, null, 8, ["class"])
      ], 2),
      D.value && !u(p) ? (N(), P("div", {
        key: 0,
        class: S(T.$style.options),
        ref_key: "dropdown",
        ref: m
      }, [
        k.value.length > 0 ? (N(), P("ul", {
          key: 0,
          class: S(T.$style.optlist)
        }, [
          (N(!0), P($e, null, Me(k.value, (H) => (N(), P("li", {
            title: H.label,
            class: S([T.$style.listItem, T.$style.option]),
            style: Re({ height: `${e.itemHeight}px` }),
            key: u(b)(`opt__${H.value}`)
          }, [
            O("div", null, [
              H.ix >= F.value && H.ix <= I.value ? (N(), Ae(u(pe), {
                key: 0,
                "zoa-type": "radio",
                label: H.label,
                "label-position": "right",
                options: { checkValue: H.value, name: u(b)("radio") },
                modelValue: u(n),
                "onUpdate:modelValue": U[1] || (U[1] = ($) => me(n) ? n.value = $ : null),
                onChange: Q
              }, null, 8, ["label", "options", "modelValue"])) : Se("", !0)
            ])
          ], 14, vo))), 128))
        ], 2)) : (N(), P("div", {
          key: 1,
          class: S(T.$style.noOptions)
        }, "No options found", 2))
      ], 2)) : Se("", !0)
    ], 10, fo));
  }
}, yo = {
  $style: po
}, ho = /* @__PURE__ */ ne(bo, [["__cssModules", yo]]), _o = "zoa__number__input", go = "zoa__number__inputWrapper", $o = "zoa__number__disabled", ko = {
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
  setup(e, { expose: r, emit: a }) {
    const l = e, v = E("inputId"), b = E("labelId"), _ = E("helpId"), c = E("disabled"), p = a, { value: t } = ce(p, l), n = W(null);
    return r({
      target: n
    }), (o, s) => (N(), P("div", {
      class: S([o.$style.inputWrapper, u(c) ? o.$style.disabled : ""]),
      "aria-labelledby": u(b),
      "aria-describedby": u(_)
    }, [
      de(O("input", {
        type: "number",
        placeholder: e.placeholder,
        min: e.min,
        max: e.max,
        step: e.step,
        id: u(v),
        class: S(o.$style.input),
        "onUpdate:modelValue": s[0] || (s[0] = (d) => me(t) ? t.value = d : null),
        ref_key: "target",
        ref: n,
        disabled: u(c)
      }, null, 10, zo), [
        [De, u(t)]
      ])
    ], 10, So));
  }
}, wo = {
  $style: ko
}, xo = /* @__PURE__ */ ne(Io, [["__cssModules", wo]]), Mo = "zoa__radio__input", Co = "zoa__radio__inputWrapper", Vo = "zoa__radio__defaultRadio", No = "zoa__radio__radio", Wo = "zoa__radio__check", Eo = "zoa__radio__disabled", Ao = {
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
  setup(e, { expose: r, emit: a }) {
    const l = e, v = E("inputId"), b = E("labelId"), _ = E("helpId"), c = E("disabled"), p = a, { value: t, valueChanged: n } = ce(p, l), o = E("rootContainer"), s = W(null), d = he(o);
    r({
      target: s
    });
    const y = E("label"), f = w(() => l.checkValue || y.value || v.value);
    function k() {
      if (c.value)
        return;
      t.value === f.value || (t.value = f.value);
    }
    return X(" ", () => {
      d.focused.value && k();
    }), (g, z) => (N(), P("div", {
      class: S([g.$style.inputWrapper, u(c) ? g.$style.disabled : ""]),
      "aria-labelledby": u(b),
      "aria-describedby": u(_)
    }, [
      de(O("input", {
        type: "radio",
        id: u(v),
        class: S(g.$style.defaultRadio),
        "onUpdate:modelValue": z[0] || (z[0] = (h) => me(t) ? t.value = h : null),
        name: e.name ? e.name : null,
        value: f.value,
        ref_key: "radioInput",
        ref: s,
        disabled: u(c)
      }, null, 10, Po), [
        [Nt, u(t)]
      ]),
      O("span", {
        class: S(g.$style.radio),
        onClick: k
      }, [
        G(u(Ve), {
          icon: "fa-solid fa-circle",
          class: S(g.$style.check)
        }, null, 8, ["class"])
      ], 2)
    ], 10, To));
  }
}, Lo = {
  $style: Ao
}, Do = /* @__PURE__ */ ne(Oo, [["__cssModules", Lo]]), Uo = "zoa__rangeslider__input", Fo = "zoa__rangeslider__inputWrapper", Ro = {
  input: Uo,
  inputWrapper: Fo
}, Bo = ["aria-labelledby", "aria-describedby"], jo = {
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
  setup(e, { expose: r, emit: a }) {
    const l = e;
    E("inputId");
    const v = E("labelId"), b = E("helpId"), _ = E("disabled"), c = a, { valueChanged: p } = ce(c, l), t = W(null), n = W(null), o = w(() => {
      if (t.value)
        return t.value.target;
    }), s = w(() => t.value && n.value ? [t.value.target, n.value.target] : []);
    r({
      target: o,
      elements: s
    });
    const d = W(null), y = W(null), f = w(() => Math.max(
      Number(y.value) - Number(l.step),
      Number(l.min)
    )), k = w(() => Math.min(
      Number(d.value) + Number(l.step),
      Number(l.max)
    )), g = w(() => {
      const z = Math.min(d.value, f.value), h = Math.max(y.value, k.value);
      return [z, h];
    });
    return Le(g, () => {
      p(g.value);
    }), (z, h) => (N(), P("div", {
      class: S(z.$style.inputWrapper),
      "aria-labelledby": u(v),
      "aria-describedby": u(b)
    }, [
      G(u(pe), {
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
        "onUpdate:modelValue": h[0] || (h[0] = (m) => d.value = m),
        ref: "lowerTrack",
        disabled: u(_)
      }, null, 8, ["label", "label-position", "options", "modelValue", "disabled"]),
      G(u(pe), {
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
        modelValue: y.value,
        "onUpdate:modelValue": h[1] || (h[1] = (m) => y.value = m),
        ref: "upperTrack",
        disabled: u(_)
      }, null, 8, ["label", "label-position", "options", "modelValue", "disabled"])
    ], 10, Bo));
  }
}, qo = {
  $style: Ro
}, Ho = /* @__PURE__ */ ne(jo, [["__cssModules", qo]]), Zo = "zoa__slider__input", Go = "zoa__slider__inputWrapper", Yo = "zoa__slider__track", Ko = "zoa__slider__valueLabel", Jo = "zoa__slider__disabled", Xo = {
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
  setup(e, { expose: r, emit: a }) {
    const l = e, v = E("inputId"), b = E("labelId"), _ = E("helpId"), c = E("disabled"), p = a, { value: t } = ce(p, l), n = W(null), o = W(null);
    r({
      target: n
    });
    const s = w(() => l.validMin ? Math.max(Number(l.validMin), Number(l.min)) : Number(l.min)), d = w(() => l.validMax ? Math.min(Number(l.validMax), Number(l.max)) : Number(l.max)), y = he(n), f = Pe(o), k = w(() => t.value < s.value ? s.value : t.value > d.value ? d.value : t.value), g = w(() => l.activeTrackRight ? { left: `${h.value.handle}%` } : { right: `${100 - h.value.handle}%` }), z = w(() => (t.value - l.min) / (l.max - l.min)), h = w(() => m());
    function m() {
      try {
        const I = n.value.clientWidth, D = 24;
        o.value && (o.value.innerText = k.value);
        const q = o.value ? o.value.clientWidth : 0, ae = I / 2, oe = (z.value * I - ae) / ae * (D / 2), T = oe + q / 2, U = oe / I;
        return {
          handle: ((z.value - U) * 100).toFixed(2),
          label: ((z.value - T / I) * 100).toFixed(2)
        };
      } catch {
        const I = z.value * 100;
        return { handle: I.toFixed(2), label: I.toFixed(2) };
      }
    }
    function L() {
      if (l.placeholder !== null && l.placeholder !== void 0)
        return l.placeholder;
      let D = (l.max - l.min) / (1 / l.placeholderPosition), q = D % l.step;
      return D - q + l.min;
    }
    function j() {
      if (t.value === l.max)
        return;
      let I = Number(t.value) + Number(l.step);
      I > l.max ? t.value = l.max : t.value = I;
    }
    function M() {
      if (t.value === l.min)
        return;
      let I = Number(t.value) - Number(l.step);
      I < l.min ? t.value = l.min : t.value = I;
    }
    function F(I) {
      I.preventDefault(), I.wheelDelta > 0 ? j() : I.wheelDelta < 0 && M();
    }
    return X("ArrowDown", (I) => {
      I.preventDefault(), (y.focused.value || f.focused.value) && M();
    }), X("ArrowLeft", (I) => {
      I.preventDefault(), (y.focused.value || f.focused.value) && M();
    }), X("ArrowUp", (I) => {
      I.preventDefault(), (y.focused.value || f.focused.value) && j();
    }), X("ArrowRight", (I) => {
      I.preventDefault(), (y.focused.value || f.focused.value) && j();
    }), Le(t, (I) => {
      Number(I) >= Number(d.value) && (t.value = d.value), Number(I) <= Number(s.value) && (t.value = s.value);
    }), t.value = L(), (I, D) => (N(), P("div", {
      class: S([I.$style.inputWrapper, , u(c) ? I.$style.disabled : ""]),
      onWheel: F,
      "aria-labelledby": u(b),
      "aria-describedby": u(_)
    }, [
      O("span", {
        class: S(I.$style.track)
      }, null, 2),
      O("span", {
        class: S([I.$style.track, I.$style["track--active"]]),
        style: Re(g.value)
      }, null, 6),
      O("span", {
        class: S([I.$style.valueLabel, I.$style[`valueLabel--${e.valueLabelPosition}`]]),
        style: Re({ left: `${h.value.label}%` }),
        ref_key: "valueLabel",
        ref: o,
        tabindex: "0"
      }, Y(k.value), 7),
      de(O("input", {
        type: "range",
        min: e.min,
        max: e.max,
        step: e.step,
        id: u(v),
        class: S(I.$style.input),
        "onUpdate:modelValue": D[0] || (D[0] = (q) => me(t) ? t.value = q : null),
        ref_key: "slider",
        ref: n,
        disabled: u(c)
      }, null, 10, es), [
        [De, u(t)]
      ])
    ], 42, Qo));
  }
}, ls = {
  $style: Xo
}, ns = /* @__PURE__ */ ne(ts, [["__cssModules", ls]]), as = "zoa__textbox__input", os = "zoa__textbox__inputWrapper", ss = "zoa__textbox__disabled", us = {
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
  setup(e, { expose: r, emit: a }) {
    const l = e, v = E("inputId"), b = E("labelId"), _ = E("helpId"), c = E("disabled"), p = a, { value: t } = ce(p, l), n = W(null);
    return r({
      target: n
    }), (o, s) => (N(), P("div", {
      class: S([o.$style.inputWrapper, u(c) ? o.$style.disabled : ""]),
      "aria-labelledby": u(b),
      "aria-describedby": u(_)
    }, [
      de(O("input", {
        type: "text",
        placeholder: e.placeholder,
        id: u(v),
        class: S(o.$style.input),
        "onUpdate:modelValue": s[0] || (s[0] = (d) => me(t) ? t.value = d : null),
        ref_key: "target",
        ref: n,
        disabled: u(c)
      }, null, 10, is), [
        [De, u(t)]
      ])
    ], 10, rs));
  }
}, cs = {
  $style: us
}, ps = /* @__PURE__ */ ne(ds, [["__cssModules", cs]]), wt = {
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
    "update:modelValue"
  ],
  setup(e, { expose: r, emit: a }) {
    const l = e, v = w(() => {
      let I = wt[l.zoaType];
      return I == null && (I = wt.empty), I;
    }), b = w(() => v.value.component), { componentId: _, subId: c } = it(), p = c("input"), t = c("label"), n = c("help"), o = w(() => {
      let I = [
        "rootWrapper",
        `rootWrapper--${l.labelPosition}`,
        l.zoaType
      ];
      return l.help && I.push("rootWrapper--help"), v.value.wrapperProps && v.value.wrapperProps.forEach((D) => {
        l.options[D] != null && I.push(`rootWrapper-${D}--${l.options[D]}`);
      }), I;
    }), { addPropClasses: s } = Be(l), d = a, { value: y } = ce(d, l), f = W(null), k = w(() => l.label), g = w(() => l.labelPosition), z = w(() => l.help ? n : null), h = w(() => l.disabled);
    xe("label", k), xe("labelPosition", g), xe("componentId", _), xe("subId", c), xe("inputId", p), xe("labelId", t), xe("helpId", z), xe("rootContainer", f), xe("disabled", h);
    const m = W(null);
    function L() {
      m.value && m.value.target.focus();
    }
    function j() {
      m.value && m.value.target.blur();
    }
    const M = w(() => {
      if (m.value)
        return m.value.target;
    }), F = w(() => m.value && m.value.elements ? m.value.elements : {});
    return r({
      focus: L,
      blur: j,
      target: M,
      elements: F
    }), (I, D) => (N(), P("div", {
      id: u(_),
      ref_key: "rootContainer",
      ref: f,
      class: S(u(s)(o.value.map((q) => I.$style[q])))
    }, [
      v.value.multi ? (N(), P("fieldset", {
        key: 0,
        class: S(I.$style.fieldset)
      }, [
        G(ht, {
          "input-id": u(p),
          legend: !0,
          label: e.label,
          "label-position": e.labelPosition,
          tabbable: v.value.tabLabel
        }, null, 8, ["input-id", "label", "label-position", "tabbable"]),
        e.help ? (N(), Ae(_t, {
          key: 0,
          text: e.help,
          position: e.helpPosition
        }, null, 8, ["text", "position"])) : Se("", !0),
        b.value == null ? (N(), P("div", {
          key: 1,
          class: S([e.gridClass || I.$style.emptyGrid, I.$style.inputWrapper])
        }, [
          Ee(I.$slots, "default")
        ], 2)) : (N(), Ae(u(b), ut({ key: 2 }, e.options, {
          modelValue: u(y),
          "onUpdate:modelValue": D[0] || (D[0] = (q) => me(y) ? y.value = q : null),
          ref_key: "inputComponent",
          ref: m
        }), null, 16, ["modelValue"]))
      ], 2)) : (N(), P($e, { key: 1 }, [
        G(ht, {
          "input-id": u(p),
          legend: !1,
          label: e.label,
          "label-position": e.labelPosition,
          tabbable: v.value.tabLabel,
          help: e.help
        }, null, 8, ["input-id", "label", "label-position", "tabbable", "help"]),
        e.help ? (N(), Ae(_t, {
          key: 0,
          text: e.help,
          position: e.helpPosition
        }, null, 8, ["text", "position"])) : Se("", !0),
        G(u(b), ut(e.options, {
          modelValue: u(y),
          "onUpdate:modelValue": D[1] || (D[1] = (q) => me(y) ? y.value = q : null),
          ref_key: "inputComponent",
          ref: m
        }), null, 16, ["modelValue"])
      ], 64))
    ], 10, ks));
  }
}, zs = {
  $style: $s
}, pe = /* @__PURE__ */ ne(Ss, [["__cssModules", zs]]);
function Pt(e) {
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
    const r = e, { icon: a } = Pt(r), { addPropClasses: l } = Be(r);
    return (v, b) => (N(), P("div", {
      class: S(
        u(l)([v.$style.main, v.$style.container, v.$style[`kind--${e.kind}`]])
      )
    }, [
      O("div", {
        class: S(v.$style.header)
      }, [
        G(u(Ve), {
          icon: ["fa-solid", u(a)],
          class: S(v.$style.icon)
        }, null, 8, ["icon", "class"]),
        O("h2", {
          class: S(v.$style.headerText)
        }, Y(e.header), 3)
      ], 2),
      O("div", {
        class: S(v.$style.content)
      }, [
        Ee(v.$slots, "default", {}, () => [
          Ce(Y(e.message), 1)
        ])
      ], 2)
    ], 2));
  }
}, Es = {
  $style: Ns
}, As = /* @__PURE__ */ ne(Ws, [["__cssModules", Es]]), Ts = "zoa__modal__main", Ps = "zoa__modal__container", Os = "zoa__modal__header", Ls = "zoa__modal__icon", Ds = "zoa__modal__headerText", Us = "zoa__modal__content", Fs = "zoa__modal__form", Rs = "zoa__modal__close", Bs = {
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
}, js = {
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
    const a = e, l = r, { icon: v } = Pt(a), { addPropClasses: b } = Be(a), _ = W(null);
    function c() {
      _.value.show(), l("opened");
    }
    return Xe(_, () => {
      _.value.close(), l("closed");
    }), (p, t) => (N(), P($e, null, [
      G(u(Ge), ut(e.buttonArgs, { onClick: c }), {
        default: Ze(() => [
          Ee(p.$slots, "button")
        ]),
        _: 3
      }, 16),
      O("dialog", {
        ref_key: "modal",
        ref: _,
        class: S(u(b)([p.$style.main, p.$style[`kind--${e.kind}`]]))
      }, [
        O("div", {
          class: S(p.$style.container)
        }, [
          O("div", {
            class: S(p.$style.header)
          }, [
            G(u(Ve), {
              icon: ["fa-solid", u(v)],
              class: S(p.$style.icon)
            }, null, 8, ["icon", "class"]),
            O("h2", {
              class: S(p.$style.headerText)
            }, [
              Ee(p.$slots, "header", {}, () => [
                Ce(Y(e.header), 1)
              ])
            ], 2),
            O("form", {
              method: "dialog",
              class: S(p.$style.form),
              onSubmit: t[0] || (t[0] = (n) => l("closed"))
            }, [
              O("button", {
                class: S(p.$style.close)
              }, [
                G(u(Ve), { icon: "fa-solid fa-xmark" })
              ], 2)
            ], 34)
          ], 2),
          O("div", {
            class: S(p.$style.content)
          }, [
            Ee(p.$slots, "default", {}, () => [
              Ce(Y(e.message), 1)
            ])
          ], 2)
        ], 2)
      ], 2)
    ], 64));
  }
}, qs = {
  $style: Bs
}, Hs = /* @__PURE__ */ ne(js, [["__cssModules", qs]]), Zs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ZoaButton: Ge,
  ZoaFlash: As,
  ZoaInput: pe,
  ZoaModal: Hs,
  ZoaTabs: Ql,
  ZoaToggleButton: jl
}, Symbol.toStringTag, { value: "Module" })), Gs = new RegExp("[A-Z]+(?![a-z])|[A-Z]", "g");
function Ys(e) {
  return e.replace(Gs, (r, a) => (a ? "-" : "") + r.toLowerCase());
}
const eu = {
  install(e, r) {
    Object.entries(Zs).forEach((a) => {
      const l = Ys(a[0]);
      e.component(l, a[1]);
    });
  }
};
export {
  As as F,
  Hs as M,
  jl as T,
  eu as Z,
  Ge as a,
  Ql as b,
  pe as c,
  It as d,
  mn as g
};
