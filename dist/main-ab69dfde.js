import { openBlock as O, createElementBlock as k, normalizeClass as m, renderSlot as De, createTextVNode as me, toDisplayString as C, ref as x, computed as z, unref as S, createCommentVNode as j, withDirectives as re, createElementVNode as A, isRef as ce, vModelText as ge, watch as be, customRef as it, getCurrentScope as st, onScopeDispose as ut, reactive as Le, Fragment as se, renderList as fe, defineComponent as Ue, h as Ze, vModelSelect as ct, createVNode as X, vModelCheckbox as dt, isProxy as ft, toRaw as _t, vShow as He, normalizeStyle as $e, createBlock as Oe, withKeys as bt, withCtx as Re, mergeProps as pt } from "vue";
import { parse as ke, icon as mt, config as qe, text as vt, library as ht } from "@fortawesome/fontawesome-svg-core";
import { faCircleXmark as gt, faXmark as yt, faCircleInfo as $t, faCircleExclamation as St, faCircleCheck as It, faCircleQuestion as zt, faCheck as Ot, faCaretDown as wt } from "@fortawesome/free-solid-svg-icons";
const Et = "zoa__7U7z2__main", kt = {
  main: Et,
  "kind--normal": "zoa__wSMFS__kind--normal",
  "kind--primary": "zoa__MVt5D__kind--primary",
  "size--sm": "zoa__Fg-Hw__size--sm",
  "size--md": "zoa__We5yW__size--md"
}, Y = (e, l) => {
  const t = e.__vccOpts || e;
  for (const [a, o] of l)
    t[a] = o;
  return t;
}, Tt = {
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
    return (l, t) => (O(), k("button", {
      class: m([l.$style.main, l.$style[`kind--${e.kind}`], l.$style[`size--${e.size}`]])
    }, [
      De(l.$slots, "default", {}, () => [
        me(C(e.label), 1)
      ])
    ], 2));
  }
}, Nt = {
  $style: kt
}, Se = /* @__PURE__ */ Y(Tt, [["__cssModules", Nt]]);
let At = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((l, t) => (t &= 63, t < 36 ? l += t.toString(36) : t < 62 ? l += (t - 26).toString(36).toUpperCase() : t > 62 ? l += "-" : l += "_", l), "");
function ae() {
  const e = x(At(6));
  function l(t) {
    return `${e.value}__${t}`;
  }
  return { componentId: e, subId: l };
}
const { now: Ge } = Date, Te = (e, l = 1, t) => {
  l = Math.max(1, l);
  const a = (t == null ? void 0 : t.leading) ?? !1, o = (t == null ? void 0 : t.trailing) ?? !0, n = Math.max((t == null ? void 0 : t.maxWait) ?? 1 / 0, l);
  let r, s, i = 0, c = 0;
  const d = () => {
    const N = Ge(), b = N - i, w = N - c, M = b >= l || w >= n;
    return [N, M];
  }, u = (N) => {
    if (c = N, !r)
      return;
    const b = r;
    r = void 0, e.apply(void 0, b);
  }, f = () => {
    I(0);
  }, y = () => {
    s && (f(), u(Ge()));
  }, E = (N) => {
    if (c = N, a)
      return u(N);
  }, _ = (N) => {
    if (o && r)
      return u(N);
    r = void 0;
  }, T = () => {
    s = void 0;
    const [N, b] = d();
    return b ? _(N) : p(N);
  }, p = (N) => {
    const b = N - i, w = N - c, M = l - b, U = n - w, G = Math.min(M, U);
    return I(G);
  }, I = (N) => {
    s && clearTimeout(s), !(N <= 0) && (s = setTimeout(T, N));
  }, D = (...N) => {
    const [b, w] = d(), M = !!s;
    if (r = N, i = b, (w || !s) && I(l), w)
      return M ? u(b) : E(b);
  };
  return D.cancel = f, D.flush = y, D;
};
function oe(e, l) {
  let t;
  try {
    t = parseInt(l.delay) || 0;
  } catch {
    t = 0;
  }
  const a = x(null);
  function o(i) {
    e("change", i);
  }
  const n = Te(o, t);
  function r(i) {
    e("update:modelValue", i), a.value = i, n(i);
  }
  const s = z({
    get() {
      return l.modelValue === void 0 ? a.value : l.modelValue;
    },
    set(i) {
      r(i);
    }
  });
  return { emitChange: n, valueChanged: r, value: s };
}
const xt = "zoa__qbf-G__input", Rt = "zoa__SIpST__label", Pt = "zoa__wOUkj__grid", Mt = {
  input: xt,
  label: Rt,
  "label--right": "zoa__2sgZ2__label--right",
  "label--below": "zoa__FvTDX__label--below",
  "label--above": "zoa__CxNSj__label--above",
  grid: Pt,
  "grid--above": "zoa__tVRUr__grid--above",
  "grid--below": "zoa__pLLs-__grid--below",
  "grid--left": "zoa__0xief__grid--left",
  "grid--right": "zoa__GFcsT__grid--right"
}, Ct = ["id"], Dt = ["for"], Ut = ["placeholder", "id"], Vt = {
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
  setup(e, { emit: l }) {
    const t = e, { componentId: a, subId: o } = ae(), { value: n } = oe(l, t);
    return (r, s) => (O(), k("div", {
      class: m([r.$style.grid, r.$style[`grid--${e.labelPosition}`]]),
      id: S(a)
    }, [
      e.label && e.labelPosition !== "none" ? (O(), k("label", {
        key: 0,
        for: S(o)("textbox"),
        class: m([r.$style.label, r.$style[`label--${e.labelPosition}`]])
      }, C(e.label), 11, Dt)) : j("", !0),
      re(A("input", {
        type: "text",
        placeholder: e.placeholder,
        id: S(o)("textbox"),
        class: m(r.$style.input),
        "onUpdate:modelValue": s[0] || (s[0] = (i) => ce(n) ? n.value = i : null)
      }, null, 10, Ut), [
        [ge, S(n)]
      ])
    ], 10, Ct));
  }
}, Bt = {
  $style: Mt
}, Lt = /* @__PURE__ */ Y(Vt, [["__cssModules", Bt]]);
function Ht(e, l) {
  let t, a, o;
  const n = x(!0), r = () => {
    n.value = !0, o();
  };
  be(e, r, { flush: "sync" });
  const s = typeof l == "function" ? l : l.get, i = typeof l == "function" ? void 0 : l.set, c = it((d, u) => (a = d, o = u, {
    get() {
      return n.value && (t = s(), n.value = !1), a(), t;
    },
    set(f) {
      i == null || i(f);
    }
  }));
  return Object.isExtensible(c) && (c.trigger = r), c;
}
function Gt(e) {
  return st() ? (ut(e), !0) : !1;
}
function q(e) {
  return typeof e == "function" ? e() : S(e);
}
const Je = typeof window < "u" && typeof document < "u", jt = Object.prototype.toString, Ft = (e) => jt.call(e) === "[object Object]", ie = () => {
}, Wt = /* @__PURE__ */ Kt();
function Kt() {
  var e;
  return Je && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function Qe(e, l) {
  function t(...a) {
    return new Promise((o, n) => {
      Promise.resolve(e(() => l.apply(this, a), { fn: l, thisArg: this, args: a })).then(o).catch(n);
    });
  }
  return t;
}
function Xt(e, l = {}) {
  let t, a, o = ie;
  const n = (s) => {
    clearTimeout(s), o(), o = ie;
  };
  return (s) => {
    const i = q(e), c = q(l.maxWait);
    return t && n(t), i <= 0 || c !== void 0 && c <= 0 ? (a && (n(a), a = null), Promise.resolve(s())) : new Promise((d, u) => {
      o = l.rejectOnCancel ? u : d, c && !a && (a = setTimeout(() => {
        t && n(t), a = null, d(s());
      }, c)), t = setTimeout(() => {
        a && n(a), a = null, d(s());
      }, i);
    });
  };
}
function Yt(e, l = !0, t = !0, a = !1) {
  let o = 0, n, r = !0, s = ie, i;
  const c = () => {
    n && (clearTimeout(n), n = void 0, s(), s = ie);
  };
  return (u) => {
    const f = q(e), y = Date.now() - o, E = () => i = u();
    return c(), f <= 0 ? (o = Date.now(), E()) : (y > f && (t || !r) ? (o = Date.now(), E()) : l && (i = new Promise((_, T) => {
      s = a ? T : _, n = setTimeout(() => {
        o = Date.now(), r = !0, _(E()), c();
      }, Math.max(0, f - y));
    })), !t && !n && (n = setTimeout(() => r = !0, f)), r = !1, i);
  };
}
function Zt(e, l = 200, t = {}) {
  return Qe(
    Xt(l, t),
    e
  );
}
function qt(e, l = 200, t = !1, a = !0, o = !1) {
  return Qe(
    Yt(l, t, a, o),
    e
  );
}
function _e(e) {
  var l;
  const t = q(e);
  return (l = t == null ? void 0 : t.$el) != null ? l : t;
}
const ze = Je ? window : void 0;
function ne(...e) {
  let l, t, a, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([t, a, o] = e, l = ze) : [l, t, a, o] = e, !l)
    return ie;
  Array.isArray(t) || (t = [t]), Array.isArray(a) || (a = [a]);
  const n = [], r = () => {
    n.forEach((d) => d()), n.length = 0;
  }, s = (d, u, f, y) => (d.addEventListener(u, f, y), () => d.removeEventListener(u, f, y)), i = be(
    () => [_e(l), q(o)],
    ([d, u]) => {
      if (r(), !d)
        return;
      const f = Ft(u) ? { ...u } : u;
      n.push(
        ...t.flatMap((y) => a.map((E) => s(d, y, E, f)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    i(), r();
  };
  return Gt(c), c;
}
let je = !1;
function et(e, l, t = {}) {
  const { window: a = ze, ignore: o = [], capture: n = !0, detectIframe: r = !1 } = t;
  if (!a)
    return;
  Wt && !je && (je = !0, Array.from(a.document.body.children).forEach((f) => f.addEventListener("click", ie)), a.document.documentElement.addEventListener("click", ie));
  let s = !0;
  const i = (f) => o.some((y) => {
    if (typeof y == "string")
      return Array.from(a.document.querySelectorAll(y)).some((E) => E === f.target || f.composedPath().includes(E));
    {
      const E = _e(y);
      return E && (f.target === E || f.composedPath().includes(E));
    }
  }), d = [
    ne(a, "click", (f) => {
      const y = _e(e);
      if (!(!y || y === f.target || f.composedPath().includes(y))) {
        if (f.detail === 0 && (s = !i(f)), !s) {
          s = !0;
          return;
        }
        l(f);
      }
    }, { passive: !0, capture: n }),
    ne(a, "pointerdown", (f) => {
      const y = _e(e);
      y && (s = !f.composedPath().includes(y) && !i(f));
    }, { passive: !0 }),
    r && ne(a, "blur", (f) => {
      setTimeout(() => {
        var y;
        const E = _e(e);
        ((y = a.document.activeElement) == null ? void 0 : y.tagName) === "IFRAME" && !(E != null && E.contains(a.document.activeElement)) && l(f);
      }, 0);
    })
  ].filter(Boolean);
  return () => d.forEach((f) => f());
}
function Jt(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (l) => l.key === e : Array.isArray(e) ? (l) => e.includes(l.key) : () => !0;
}
function F(...e) {
  let l, t, a = {};
  e.length === 3 ? (l = e[0], t = e[1], a = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (l = !0, t = e[0], a = e[1]) : (l = e[0], t = e[1]) : (l = !0, t = e[0]);
  const {
    target: o = ze,
    eventName: n = "keydown",
    passive: r = !1,
    dedupe: s = !1
  } = a, i = Jt(l);
  return ne(o, n, (d) => {
    d.repeat && q(s) || i(d) && t(d);
  }, r);
}
function Qt(e = {}) {
  var l;
  const {
    window: t = ze,
    deep: a = !0
  } = e, o = (l = e.document) != null ? l : t == null ? void 0 : t.document, n = () => {
    var s;
    let i = o == null ? void 0 : o.activeElement;
    if (a)
      for (; i != null && i.shadowRoot; )
        i = (s = i == null ? void 0 : i.shadowRoot) == null ? void 0 : s.activeElement;
    return i;
  }, r = Ht(
    () => null,
    () => n()
  );
  return t && (ne(t, "blur", (s) => {
    s.relatedTarget === null && r.trigger();
  }, !0), ne(t, "focus", r.trigger, !0)), r;
}
function ve(e, l = {}) {
  const { initialValue: t = !1, focusVisible: a = !1 } = l, o = x(!1), n = z(() => _e(e));
  ne(n, "focus", (s) => {
    var i, c;
    (!a || (c = (i = s.target).matches) != null && c.call(i, ":focus-visible")) && (o.value = !0);
  }), ne(n, "blur", () => o.value = !1);
  const r = z({
    get: () => o.value,
    set(s) {
      var i, c;
      !s && o.value ? (i = n.value) == null || i.blur() : s && !o.value && ((c = n.value) == null || c.focus());
    }
  });
  return be(
    n,
    () => {
      r.value = t;
    },
    { immediate: !0, flush: "post" }
  ), { focused: r };
}
function ue(e, l = {}) {
  const t = Qt(l), a = z(() => _e(e));
  return { focused: z(() => a.value && t.value ? a.value.contains(t.value) : !1) };
}
const Fe = 1;
function el(e, l = {}) {
  const {
    throttle: t = 0,
    idle: a = 200,
    onStop: o = ie,
    onScroll: n = ie,
    offset: r = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions: s = {
      capture: !1,
      passive: !0
    },
    behavior: i = "auto",
    window: c = ze
  } = l, d = x(0), u = x(0), f = z({
    get() {
      return d.value;
    },
    set(w) {
      E(w, void 0);
    }
  }), y = z({
    get() {
      return u.value;
    },
    set(w) {
      E(void 0, w);
    }
  });
  function E(w, M) {
    var U, G, Q;
    if (!c)
      return;
    const L = q(e);
    L && ((Q = L instanceof Document ? c.document.body : L) == null || Q.scrollTo({
      top: (U = q(M)) != null ? U : y.value,
      left: (G = q(w)) != null ? G : f.value,
      behavior: q(i)
    }));
  }
  const _ = x(!1), T = Le({
    left: !0,
    right: !1,
    top: !0,
    bottom: !1
  }), p = Le({
    left: !1,
    right: !1,
    top: !1,
    bottom: !1
  }), I = (w) => {
    _.value && (_.value = !1, p.left = !1, p.right = !1, p.top = !1, p.bottom = !1, o(w));
  }, D = Zt(I, t + a), N = (w) => {
    var M;
    if (!c)
      return;
    const U = w.document ? w.document.documentElement : (M = w.documentElement) != null ? M : w, { display: G, flexDirection: Q } = getComputedStyle(U), L = U.scrollLeft;
    p.left = L < d.value, p.right = L > d.value;
    const ee = Math.abs(L) <= 0 + (r.left || 0), V = Math.abs(L) + U.clientWidth >= U.scrollWidth - (r.right || 0) - Fe;
    G === "flex" && Q === "row-reverse" ? (T.left = V, T.right = ee) : (T.left = ee, T.right = V), d.value = L;
    let v = U.scrollTop;
    w === c.document && !v && (v = c.document.body.scrollTop), p.top = v < u.value, p.bottom = v > u.value;
    const $ = Math.abs(v) <= 0 + (r.top || 0), g = Math.abs(v) + U.clientHeight >= U.scrollHeight - (r.bottom || 0) - Fe;
    G === "flex" && Q === "column-reverse" ? (T.top = g, T.bottom = $) : (T.top = $, T.bottom = g), u.value = v;
  }, b = (w) => {
    var M;
    if (!c)
      return;
    const U = (M = w.target.documentElement) != null ? M : w.target;
    N(U), _.value = !0, D(w), n(w);
  };
  return ne(
    e,
    "scroll",
    t ? qt(b, t, !0, !1) : b,
    s
  ), ne(
    e,
    "scrollend",
    I,
    s
  ), {
    x: f,
    y,
    isScrolling: _,
    arrivedState: T,
    directions: p,
    measure() {
      const w = q(e);
      c && w && N(w);
    }
  };
}
const tl = "zoa__u1jpB__input", ll = "zoa__K4jZT__label", nl = "zoa__wc4xP__grid", al = "zoa__0mMOV__wrapper", ol = "zoa__FvT7h__options", rl = "zoa__hqIBJ__option", il = "zoa__V565X__noOptions", sl = {
  input: tl,
  label: ll,
  "label--right": "zoa__CsI39__label--right",
  "label--below": "zoa__OyBO0__label--below",
  "label--above": "zoa__rnMm-__label--above",
  grid: nl,
  "grid--above": "zoa__lZr2b__grid--above",
  "grid--below": "zoa__s1ZFN__grid--below",
  "grid--left": "zoa__Imuk0__grid--left",
  "grid--right": "zoa__2DZpe__grid--right",
  wrapper: al,
  options: ol,
  option: rl,
  noOptions: il
}, ul = ["id"], cl = ["for"], dl = ["placeholder", "id"], fl = { key: 0 }, _l = ["onClick"], bl = ["value"], pl = {
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
  setup(e, { emit: l }) {
    const t = e, { componentId: a, subId: o } = ae(), { value: n } = oe(l, t), r = z(() => {
      let _ = [];
      return t.options.forEach((T) => {
        typeof T == "object" ? _.push({ label: T.label, value: T.value }) : _.push({ label: T, value: T });
      }), _;
    }), s = x(null), i = x(null), c = x(null), d = x(!1), u = ve(i), f = ue(c);
    function y() {
      try {
        s.value.blur(), i.value.blur(), c.value.blur();
      } catch {
      }
      d.value = !1;
    }
    et(s, () => {
      d.value = !1;
    }), F("ArrowDown", () => {
      if (r.value.length !== 0) {
        if (u.focused.value)
          c.value.children[0].children[0].focus();
        else if (f.focused.value) {
          const _ = c.value.querySelector("li:focus");
          !_ || !_.nextElementSibling ? c.value.children[0].children[0].focus() : _.nextElementSibling.focus();
        }
      }
    }), F("ArrowUp", () => {
      if (r.value.length !== 0 && f.focused.value) {
        const _ = c.value.querySelector("li:focus");
        !_ || !_.previousElementSibling ? i.value.focus() : _.previousElementSibling.focus();
      }
    }), F("Enter", () => {
      if (f.focused.value) {
        const _ = c.value.querySelector("li:focus");
        _ && E(_.querySelector("input").value);
      }
      y();
    });
    function E(_) {
      n.value = _, y();
    }
    return (_, T) => (O(), k("div", {
      class: m([_.$style.grid, _.$style[`grid--${e.labelPosition}`]]),
      id: S(a)
    }, [
      e.label && e.labelPosition !== "none" ? (O(), k("label", {
        key: 0,
        for: S(o)("textbox"),
        class: m([_.$style.label, _.$style[`label--${e.labelPosition}`]])
      }, C(e.label), 11, cl)) : j("", !0),
      A("div", {
        class: m(_.$style.wrapper),
        ref_key: "container",
        ref: s
      }, [
        re(A("input", {
          type: "text",
          placeholder: e.placeholder,
          id: S(o)("textbox"),
          class: m(_.$style.input),
          "onUpdate:modelValue": T[0] || (T[0] = (p) => ce(n) ? n.value = p : null),
          onFocusin: T[1] || (T[1] = (p) => d.value = !0),
          ref_key: "textbox",
          ref: i
        }, null, 42, dl), [
          [ge, S(n)]
        ]),
        d.value ? (O(), k("div", {
          key: 0,
          class: m(_.$style.options),
          ref_key: "dropdown",
          ref: c
        }, [
          r.value.length > 0 ? (O(), k("ul", fl, [
            (O(!0), k(se, null, fe(r.value, (p) => (O(), k("li", {
              class: m(_.$style.option),
              onClick: (I) => E(p.value),
              tabindex: "0"
            }, [
              A("span", null, C(p.label), 1),
              A("input", {
                type: "hidden",
                value: p.value
              }, null, 8, bl)
            ], 10, _l))), 256))
          ])) : (O(), k("div", {
            key: 1,
            class: m(_.$style.noOptions)
          }, "No options found", 2))
        ], 2)) : j("", !0)
      ], 2)
    ], 10, ul));
  }
}, ml = {
  $style: sl
}, vl = /* @__PURE__ */ Y(pl, [["__cssModules", ml]]);
function We(e, l) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    l && (a = a.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, a);
  }
  return t;
}
function J(e) {
  for (var l = 1; l < arguments.length; l++) {
    var t = arguments[l] != null ? arguments[l] : {};
    l % 2 ? We(Object(t), !0).forEach(function(a) {
      K(e, a, t[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : We(Object(t)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
    });
  }
  return e;
}
function Ne(e) {
  "@babel/helpers - typeof";
  return Ne = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
    return typeof l;
  } : function(l) {
    return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
  }, Ne(e);
}
function K(e, l, t) {
  return l in e ? Object.defineProperty(e, l, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[l] = t, e;
}
function hl(e, l) {
  if (e == null)
    return {};
  var t = {}, a = Object.keys(e), o, n;
  for (n = 0; n < a.length; n++)
    o = a[n], !(l.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
function gl(e, l) {
  if (e == null)
    return {};
  var t = hl(e, l), a, o;
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (o = 0; o < n.length; o++)
      a = n[o], !(l.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (t[a] = e[a]);
  }
  return t;
}
function Pe(e) {
  return yl(e) || $l(e) || Sl(e) || Il();
}
function yl(e) {
  if (Array.isArray(e))
    return Me(e);
}
function $l(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Sl(e, l) {
  if (e) {
    if (typeof e == "string")
      return Me(e, l);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Me(e, l);
  }
}
function Me(e, l) {
  (l == null || l > e.length) && (l = e.length);
  for (var t = 0, a = new Array(l); t < l; t++)
    a[t] = e[t];
  return a;
}
function Il() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var zl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, tt = { exports: {} };
(function(e) {
  (function(l) {
    var t = function(p, I, D) {
      if (!c(I) || u(I) || f(I) || y(I) || i(I))
        return I;
      var N, b = 0, w = 0;
      if (d(I))
        for (N = [], w = I.length; b < w; b++)
          N.push(t(p, I[b], D));
      else {
        N = {};
        for (var M in I)
          Object.prototype.hasOwnProperty.call(I, M) && (N[p(M, D)] = t(p, I[M], D));
      }
      return N;
    }, a = function(p, I) {
      I = I || {};
      var D = I.separator || "_", N = I.split || /(?=[A-Z])/;
      return p.split(N).join(D);
    }, o = function(p) {
      return E(p) ? p : (p = p.replace(/[\-_\s]+(.)?/g, function(I, D) {
        return D ? D.toUpperCase() : "";
      }), p.substr(0, 1).toLowerCase() + p.substr(1));
    }, n = function(p) {
      var I = o(p);
      return I.substr(0, 1).toUpperCase() + I.substr(1);
    }, r = function(p, I) {
      return a(p, I).toLowerCase();
    }, s = Object.prototype.toString, i = function(p) {
      return typeof p == "function";
    }, c = function(p) {
      return p === Object(p);
    }, d = function(p) {
      return s.call(p) == "[object Array]";
    }, u = function(p) {
      return s.call(p) == "[object Date]";
    }, f = function(p) {
      return s.call(p) == "[object RegExp]";
    }, y = function(p) {
      return s.call(p) == "[object Boolean]";
    }, E = function(p) {
      return p = p - 0, p === p;
    }, _ = function(p, I) {
      var D = I && "process" in I ? I.process : I;
      return typeof D != "function" ? p : function(N, b) {
        return D(N, p, b);
      };
    }, T = {
      camelize: o,
      decamelize: r,
      pascalize: n,
      depascalize: r,
      camelizeKeys: function(p, I) {
        return t(_(o, I), p);
      },
      decamelizeKeys: function(p, I) {
        return t(_(r, I), p, I);
      },
      pascalizeKeys: function(p, I) {
        return t(_(n, I), p);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = T : l.humps = T;
  })(zl);
})(tt);
var Ol = tt.exports, wl = ["class", "style"];
function El(e) {
  return e.split(";").map(function(l) {
    return l.trim();
  }).filter(function(l) {
    return l;
  }).reduce(function(l, t) {
    var a = t.indexOf(":"), o = Ol.camelize(t.slice(0, a)), n = t.slice(a + 1).trim();
    return l[o] = n, l;
  }, {});
}
function kl(e) {
  return e.split(/\s+/).reduce(function(l, t) {
    return l[t] = !0, l;
  }, {});
}
function Ve(e) {
  var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var a = (e.children || []).map(function(i) {
    return Ve(i);
  }), o = Object.keys(e.attributes || {}).reduce(function(i, c) {
    var d = e.attributes[c];
    switch (c) {
      case "class":
        i.class = kl(d);
        break;
      case "style":
        i.style = El(d);
        break;
      default:
        i.attrs[c] = d;
    }
    return i;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  t.class;
  var n = t.style, r = n === void 0 ? {} : n, s = gl(t, wl);
  return Ze(e.tag, J(J(J({}, l), {}, {
    class: o.class,
    style: J(J({}, o.style), r)
  }, o.attrs), s), a);
}
var lt = !1;
try {
  lt = !0;
} catch {
}
function Tl() {
  if (!lt && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Ie(e, l) {
  return Array.isArray(l) && l.length > 0 || !Array.isArray(l) && l ? K({}, e, l) : {};
}
function Nl(e) {
  var l, t = (l = {
    "fa-spin": e.spin,
    "fa-pulse": e.pulse,
    "fa-fw": e.fixedWidth,
    "fa-border": e.border,
    "fa-li": e.listItem,
    "fa-inverse": e.inverse,
    "fa-flip": e.flip === !0,
    "fa-flip-horizontal": e.flip === "horizontal" || e.flip === "both",
    "fa-flip-vertical": e.flip === "vertical" || e.flip === "both"
  }, K(l, "fa-".concat(e.size), e.size !== null), K(l, "fa-rotate-".concat(e.rotation), e.rotation !== null), K(l, "fa-pull-".concat(e.pull), e.pull !== null), K(l, "fa-swap-opacity", e.swapOpacity), K(l, "fa-bounce", e.bounce), K(l, "fa-shake", e.shake), K(l, "fa-beat", e.beat), K(l, "fa-fade", e.fade), K(l, "fa-beat-fade", e.beatFade), K(l, "fa-flash", e.flash), K(l, "fa-spin-pulse", e.spinPulse), K(l, "fa-spin-reverse", e.spinReverse), l);
  return Object.keys(t).map(function(a) {
    return t[a] ? a : null;
  }).filter(function(a) {
    return a;
  });
}
function Ke(e) {
  if (e && Ne(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (ke.icon)
    return ke.icon(e);
  if (e === null)
    return null;
  if (Ne(e) === "object" && e.prefix && e.iconName)
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
var he = Ue({
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
      validator: function(l) {
        return [!0, !1, "horizontal", "vertical", "both"].indexOf(l) > -1;
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
      validator: function(l) {
        return ["right", "left"].indexOf(l) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: !1
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function(l) {
        return [90, 180, 270].indexOf(Number.parseInt(l, 10)) > -1;
      }
    },
    swapOpacity: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null,
      validator: function(l) {
        return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(l) > -1;
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
  setup: function(l, t) {
    var a = t.attrs, o = z(function() {
      return Ke(l.icon);
    }), n = z(function() {
      return Ie("classes", Nl(l));
    }), r = z(function() {
      return Ie("transform", typeof l.transform == "string" ? ke.transform(l.transform) : l.transform);
    }), s = z(function() {
      return Ie("mask", Ke(l.mask));
    }), i = z(function() {
      return mt(o.value, J(J(J(J({}, n.value), r.value), s.value), {}, {
        symbol: l.symbol,
        title: l.title
      }));
    });
    be(i, function(d) {
      if (!d)
        return Tl("Could not find one or more icon(s)", o.value, s.value);
    }, {
      immediate: !0
    });
    var c = z(function() {
      return i.value ? Ve(i.value.abstract[0], {}, a) : null;
    });
    return function() {
      return c.value;
    };
  }
});
Ue({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(l, t) {
    var a = t.slots, o = qe.familyPrefix, n = z(function() {
      return ["".concat(o, "-layers")].concat(Pe(l.fixedWidth ? ["".concat(o, "-fw")] : []));
    });
    return function() {
      return Ze("div", {
        class: n.value
      }, a.default ? a.default() : []);
    };
  }
});
Ue({
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
      validator: function(l) {
        return ["bottom-left", "bottom-right", "top-left", "top-right"].indexOf(l) > -1;
      }
    }
  },
  setup: function(l, t) {
    var a = t.attrs, o = qe.familyPrefix, n = z(function() {
      return Ie("classes", [].concat(Pe(l.counter ? ["".concat(o, "-layers-counter")] : []), Pe(l.position ? ["".concat(o, "-layers-").concat(l.position)] : [])));
    }), r = z(function() {
      return Ie("transform", typeof l.transform == "string" ? ke.transform(l.transform) : l.transform);
    }), s = z(function() {
      var c = vt(l.value.toString(), J(J({}, r.value), n.value)), d = c.abstract;
      return l.counter && (d[0].attributes.class = d[0].attributes.class.replace("fa-layers-text", "")), d[0];
    }), i = z(function() {
      return Ve(s.value, {}, a);
    });
    return function() {
      return i.value;
    };
  }
});
ht.add(
  gt,
  yt,
  $t,
  St,
  It,
  zt,
  Ot,
  wt
);
const Al = "zoa__c-K88__input", xl = "zoa__XFR4x__label", Rl = "zoa__csc-y__grid", Pl = "zoa__oUR-j__wrapper", Ml = "zoa__f0lOR__arrow", Cl = {
  input: Al,
  label: xl,
  "label--right": "zoa__3XTm6__label--right",
  "label--below": "zoa__vTCRg__label--below",
  "label--above": "zoa__7KR2L__label--above",
  grid: Rl,
  "grid--above": "zoa__PN-na__grid--above",
  "grid--below": "zoa__-GDMi__grid--below",
  "grid--left": "zoa__v81WH__grid--left",
  "grid--right": "zoa__Clcgi__grid--right",
  wrapper: Pl,
  arrow: Ml
}, Dl = ["id"], Ul = ["for"], Vl = ["id"], Bl = { value: null }, Ll = ["value"], Hl = {
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
  setup(e, { emit: l }) {
    const t = e, { componentId: a, subId: o } = ae(), n = z(() => {
      let s = [];
      return t.options.forEach((i) => {
        typeof i == "object" ? s.push({ label: i.label, value: i.value }) : s.push({ label: i, value: i });
      }), s;
    }), { value: r } = oe(l, t);
    return (s, i) => (O(), k("div", {
      class: m([s.$style.grid, s.$style[`grid--${e.labelPosition}`]]),
      id: S(a)
    }, [
      e.label && e.labelPosition !== "none" ? (O(), k("label", {
        key: 0,
        for: S(o)("dropdown"),
        class: m([s.$style.label, s.$style[`label--${e.labelPosition}`]])
      }, C(e.label), 11, Ul)) : j("", !0),
      A("div", {
        class: m(s.$style.wrapper)
      }, [
        re(A("select", {
          id: S(o)("dropdown"),
          class: m(s.$style.input),
          "onUpdate:modelValue": i[0] || (i[0] = (c) => ce(r) ? r.value = c : null)
        }, [
          A("option", Bl, C(e.placeholder), 1),
          (O(!0), k(se, null, fe(n.value, (c) => (O(), k("option", {
            value: c.value
          }, C(c.label), 9, Ll))), 256))
        ], 10, Vl), [
          [ct, S(r)]
        ]),
        X(S(he), {
          icon: "fa-solid fa-caret-down",
          class: m(s.$style.arrow)
        }, null, 8, ["class"])
      ], 2)
    ], 10, Dl));
  }
}, Gl = {
  $style: Cl
}, jl = /* @__PURE__ */ Y(Hl, [["__cssModules", Gl]]), Fl = "zoa__EjsEt__input", Wl = "zoa__A3qeJ__label", Kl = "zoa__J-EVV__grid", Xl = "zoa__3vUBH__defaultCheckbox", Yl = "zoa__uHbf1__checkbox", Zl = "zoa__6OoQN__check", ql = {
  input: Fl,
  label: Wl,
  "label--right": "zoa__pku0V__label--right",
  "label--below": "zoa__U-wXq__label--below",
  "label--above": "zoa__bglwu__label--above",
  grid: Kl,
  "grid--above": "zoa__xWwl6__grid--above",
  "grid--below": "zoa__MxvdG__grid--below",
  "grid--left": "zoa__ePg1o__grid--left",
  "grid--right": "zoa__dovWb__grid--right",
  "label--left": "zoa__-MSYg__label--left",
  defaultCheckbox: Xl,
  checkbox: Yl,
  check: Zl
}, Jl = ["id", "for"], Ql = ["id", "name", "value"], en = {
  __name: "Checkbox",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: [Boolean, Array],
      default: !1
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
  setup(e, { emit: l }) {
    const t = e, { componentId: a, subId: o } = ae(), { value: n } = oe(l, t), r = x(null), s = x(null), i = ue(r), c = z(() => t.checkValue || t.label);
    return F(" ", () => {
      if (i.focused.value) {
        let d = ft(n.value) ? _t(n.value) : n.value;
        if (Array.isArray(d)) {
          let u = !s.value.checked;
          d = d.filter((f) => f !== c.value), u && d.push(c.value), n.value = d, s.value.checked = u;
        } else
          n.value = !n.value;
      }
    }), (d, u) => (O(), k("label", {
      id: S(a),
      for: S(o)("checkbox"),
      class: m([d.$style.grid, d.$style[`grid--${e.labelPosition}`]]),
      tabindex: "0",
      ref_key: "checkboxContainer",
      ref: r
    }, [
      e.label && e.labelPosition !== "none" ? (O(), k("span", {
        key: 0,
        class: m([d.$style.label, d.$style[`label--${e.labelPosition}`]])
      }, C(e.label), 3)) : j("", !0),
      re(A("input", {
        type: "checkbox",
        id: S(o)("checkbox"),
        class: m(d.$style.defaultCheckbox),
        "onUpdate:modelValue": u[0] || (u[0] = (f) => ce(n) ? n.value = f : null),
        name: e.name,
        value: c.value,
        ref_key: "checkboxInput",
        ref: s
      }, null, 10, Ql), [
        [dt, S(n)]
      ]),
      A("span", {
        class: m(d.$style.checkbox)
      }, [
        X(S(he), {
          icon: "fa-solid fa-check",
          class: m(d.$style.check)
        }, null, 8, ["class"])
      ], 2)
    ], 10, Jl));
  }
}, tn = {
  $style: ql
}, we = /* @__PURE__ */ Y(en, [["__cssModules", tn]]);
function ln(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function* nn(e, l, t = 0, a = null) {
  if (e.length === 0)
    return;
  a === null && (a = l.length);
  let n;
  for (; (n = l.indexOf(e, t)) > -1 && !(n + e.length > a); )
    yield n, t = n + 1;
}
function an(e) {
  return e.split("").reverse().join("");
}
var on = {
  searchExact: nn,
  reverse: an
};
const { searchExact: nt, reverse: Xe } = on;
function rn(e, l, t) {
  e.length > l.length && ([e, l] = [l, e]);
  const a = l.length - e.length;
  if (a > t)
    return !1;
  if (t === 0)
    return e === l;
  let o;
  for (o = 0; o < e.length && e[o] === l[o]; o++)
    ;
  if (o === e.length)
    return a <= t;
  let n;
  for (n = e.length - 1; n >= 0 && e[n] === l[n + a]; n--)
    ;
  e = e.slice(o, n + 1), l = l.slice(o, n + 1 + a);
  const [r, s] = Ae(e, l, t);
  return r + (l.length - s) <= t;
}
function sn(e, l) {
  e.length > l.length && ([e, l] = [l, e]);
  const t = new Array(e.length + 1);
  for (let n = 0; n <= e.length; n++)
    t[n] = n;
  let a, o;
  for (let n = 0; n < l.length; n++) {
    t[0] = n + 1, o = n;
    for (let r = 0; r < e.length; r++)
      a = t[r + 1], t[r + 1] = Math.min(
        o + +(e[r] !== l[n]),
        t[r] + 1,
        t[r + 1] + 1
      ), o = a;
  }
  return t[e.length];
}
function un(e, l) {
  const t = {};
  for (let a = Math.min(e.length - 1, l); a >= 0; a--)
    t[e[a]] = a;
  return t;
}
function* cn(e, l, t) {
  if (e.length > l.length + t)
    return;
  const a = Math.floor(e.length / (t + 1));
  if (t === 0)
    for (const o of nt(e, l))
      yield {
        start: o,
        end: o + e.length,
        dist: 0
      };
  else
    a >= 10 ? yield* at(e, l, t) : yield* ot(e, l, t);
}
function Ae(e, l, t) {
  t = +t;
  let a;
  for (a = 0; a < Math.min(e.length, l.length) && e.charCodeAt(a) === l.charCodeAt(a); a++)
    ;
  if (a && (e = e.slice(a), l = l.slice(a)), e) {
    if (!l)
      return e.length <= t ? [e.length, a] : [null, null];
  } else
    return [0, a];
  if (t === 0)
    return [null, null];
  let o = new Array(e.length + 1);
  for (let u = 0; u <= t; u++)
    o[u] = u;
  let n = new Array(e.length + 1), r = null, s = null, i = t, c = 0, d = e.length - 1;
  for (let u = 0; u < l.length; u++) {
    const f = l.charCodeAt(u), y = Math.max(0, c - 1), E = Math.min(
      u + t,
      e.length - 1,
      d
    );
    n[0] = o[0] + 1, c = n[0] <= i ? 0 : null, d = n[0] <= i ? 0 : -1;
    let _;
    for (_ = y; _ < E; _++) {
      const p = n[_ + 1] = Math.min(
        o[_] + +(f !== e.charCodeAt(_)),
        o[_ + 1] + 1,
        n[_] + 1
      );
      p <= i && (c === null && (c = _ + 1), d = Math.max(
        d,
        _ + 1 + (i - p)
      ));
    }
    const T = n[_ + 1] = Math.min(
      o[_] + +(f !== e.charCodeAt(_)),
      n[_] + 1
    );
    if (T <= i && (c === null && (c = _ + 1), d = _ + 1), _ === e.length - 1 && (r === null || T <= r) && (r = T, s = u, r < i && (i = r)), [o, n] = [n, o], c === null)
      break;
  }
  return r !== null && r <= t ? [r, s + 1 + a] : [null, null];
}
function* at(e, l, t) {
  const a = Math.floor(e.length / (t + 1)), o = e.length, n = l.length;
  for (let r = 0; r <= e.length - a; r += a) {
    const s = e.slice(r, r + a), i = r + a, c = Xe(e.slice(0, r)), d = e.slice(i), u = Math.max(0, r - t), f = Math.min(n, n - o + i + t);
    for (const y of nt(s, l, u, f)) {
      const [E, _] = Ae(
        d,
        l.slice(
          y + a,
          y - r + o + t
        ),
        t
      );
      if (E === null)
        continue;
      const [T, p] = Ae(
        c,
        Xe(l.slice(
          Math.max(0, y - r - (t - E)),
          y
        )),
        t - E
      );
      T !== null && (yield {
        start: y - p,
        end: y + a + _,
        dist: T + E
      });
    }
  }
}
function* ot(e, l, t) {
  const a = e.length, o = l.length;
  if (a > o + t)
    return;
  const n = un(e, t);
  let r = [], s = [];
  for (let i = 0; i < l.length; i++) {
    const c = l[i];
    r = s, s = [];
    const d = n[c];
    d !== void 0 && (d + 1 === a ? yield {
      start: i,
      end: i + 1,
      dist: d
    } : s.push({
      startIdx: i,
      needleIdx: d + 1,
      dist: d
    }));
    for (const u of r)
      if (e[u.needleIdx] === c)
        u.needleIdx + 1 === a ? yield {
          start: u.startIdx,
          end: i + 1,
          dist: u.dist
        } : s.push({
          startIdx: u.startIdx,
          needleIdx: u.needleIdx + 1,
          dist: u.dist
        });
      else {
        if (u.dist === t)
          continue;
        s.push({
          startIdx: u.startIdx,
          needleIdx: u.needleIdx,
          dist: u.dist + 1
        });
        for (let f = 1; f <= t - u.dist; f++)
          if (u.needleIdx + f === a) {
            yield {
              start: u.startIdx,
              end: i + 1,
              dist: u.dist + f
            };
            break;
          } else if (e[u.needleIdx + f] === c) {
            u.needleIdx + f + 1 === a ? yield {
              start: u.startIdx,
              end: i + 1,
              dist: u.dist + f
            } : s.push({
              startIdx: u.startIdx,
              needleIdx: u.needleIdx + 1 + f,
              dist: u.dist + f
            });
            break;
          }
        i + 1 < o && u.needleIdx + 1 < a && s.push({
          startIdx: u.startIdx,
          needleIdx: u.needleIdx + 1,
          dist: u.dist + 1
        });
      }
  }
  for (const i of s)
    i.dist += e.length - i.needleIdx, i.dist <= t && (yield {
      start: i.startIdx,
      end: l.length,
      dist: i.dist
    });
}
var dn = {
  _expand: Ae,
  editDistance: sn,
  fuzzySearch: cn,
  fuzzySearchNgrams: at,
  fuzzySearchCandidates: ot,
  isEditDistanceNoGreaterThan: rn
};
const { editDistance: fn, fuzzySearch: _n, isEditDistanceNoGreaterThan: bn } = dn;
var pn = {
  editDistance: fn,
  fuzzySearch: _n,
  isEditDistanceNoGreaterThan: bn
};
const mn = "zoa__-kaXq__input", vn = "zoa__eVS7Y__label", hn = "zoa__pMc0u__grid", gn = "zoa__5cpkc__wrapper", yn = "zoa__AFCWm__options", $n = "zoa__8vnuc__optlist", Sn = "zoa__bOurY__listItem", In = "zoa__Apoj0__option", zn = "zoa__MRbwy__selectAll", On = "zoa__m7bV0__subgroup", wn = "zoa__8rcID__noOptions", En = "zoa__NWh1O__textboxWrapper", kn = "zoa__P2F01__arrow", Tn = {
  input: mn,
  label: vn,
  "label--right": "zoa__F-K-n__label--right",
  "label--below": "zoa__v3pp3__label--below",
  "label--above": "zoa__2fKCe__label--above",
  grid: hn,
  "grid--above": "zoa__bnarX__grid--above",
  "grid--below": "zoa__8mlVJ__grid--below",
  "grid--left": "zoa__CQte7__grid--left",
  "grid--right": "zoa__4KDvP__grid--right",
  wrapper: gn,
  options: yn,
  optlist: $n,
  listItem: Sn,
  option: In,
  selectAll: zn,
  subgroup: On,
  noOptions: wn,
  textboxWrapper: En,
  arrow: kn
}, Nn = ["id"], An = ["for"], xn = ["placeholder", "id"], Rn = ["title"], Pn = ["onClick"], Mn = { key: 1 }, Cn = 10, Dn = {
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
      default: "Multiselect"
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
  setup(e, { emit: l }) {
    const t = e, { componentId: a, subId: o } = ae(), { value: n } = oe(l, t);
    Array.isArray(n) || (n.value = []);
    const r = x(null), s = Te((v) => {
      l("search", v);
    }, t.searchDelay), i = Te((v) => {
      r.value = v;
    }, t.searchDelay), c = z({
      get() {
        return r.value;
      },
      set(v) {
        i(v), s(v);
      }
    }), d = z(() => (n.value ? n.value.length !== 1 : !0) ? t.itemNamePlural || t.itemName + "s" : t.itemName), u = z(() => {
      let v = [];
      return t.options.forEach(($) => {
        typeof $ == "object" ? v.push({
          label: $.label || $.value,
          value: $.value || $.label,
          group: $.group || null,
          order: $.order || null
        }) : v.push({ label: $, value: $, group: null });
      }), v.sort(($, g) => {
        let P;
        $.group === g.group ? P = 0 : !$.group || !g.group ? P = $.group ? 1 : -1 : P = $.group.localeCompare(g.group);
        let te = 0;
        ($.order || g.order) && (te = $.order && g.order ? $.order - g.order : $.order ? 1 : -1);
        let Z = $.label.localeCompare(g.label);
        return P !== 0 ? P : te !== 0 ? te : Z;
      }), v;
    }), f = z(() => {
      const v = t.enableSearch && c.value, $ = v ? c.value.toLowerCase() : null, g = (H) => H ? [...pn.fuzzySearch($, H.toLowerCase(), 1)].length > 0 : !1;
      let P;
      v ? P = u.value.filter((H) => g(H.group) || g(H.label) || g(H.value)) : P = u.value;
      let te = [], Z = Object.entries(
        Object.groupBy(P, ({ group: H }) => H)
      ), pe = $ ? 2 : 1;
      return Z.forEach((H) => {
        let de = H[0], W = H[1];
        de && de !== "null" && (te.push({
          ix: pe,
          kind: "group",
          label: de,
          value: de,
          group: de
        }), pe += 1), te = te.concat(
          W.map((ye, xe) => ({
            ix: pe + xe,
            kind: "option",
            label: ye.label,
            value: ye.value,
            group: ye.group
          }))
        ), pe += W.length;
      }), te;
    }), y = x(null), E = x(null), _ = x(null), { y: T } = el(_), p = z(() => !_.value || _.value && T.value !== _.value.scrollTop ? 0 : T.value), I = z(() => {
      try {
        return _.value.clientHeight;
      } catch {
        return 500;
      }
    }), D = z(() => Math.floor(p.value / t.itemHeight) - Cn), N = z(() => Math.ceil((p.value + I.value) / t.itemHeight)), b = x(!1), w = ve(E), M = ue(_);
    function U() {
      b.value = !0, setTimeout(() => {
        E.value.focus();
      }, 50);
    }
    function G() {
      try {
        y.value.blur(), E.value.blur(), _.value.blur();
      } catch {
      }
      b.value = !1;
    }
    function Q() {
      b.value ? G() : U();
    }
    et(y, () => {
      G();
    }), F("ArrowDown", () => {
      if (u.value.length !== 0) {
        if (w.focused.value)
          _.value.children[0].children[0].children[0].focus();
        else if (M.focused.value) {
          const v = [..._.value.querySelectorAll("label")], $ = _.value.querySelector("label:focus");
          if (!$)
            v[0].focus();
          else {
            const g = v.findIndex((P) => P === $);
            g === v.length - 1 ? v[0].focus() : v[g + 1].focus();
          }
        }
      }
    }), F("ArrowUp", () => {
      if (u.value.length !== 0 && M.focused.value) {
        const v = [..._.value.querySelectorAll("label")], $ = _.value.querySelector("label:focus");
        if (!$)
          E.value.focus();
        else {
          const g = v.findIndex((P) => P === $);
          g === 0 ? E.value.focus() : v[g - 1].focus();
        }
      }
    }), F("Enter", () => {
      G();
    });
    const L = z({
      get() {
        const v = u.value;
        return n.value.length !== v.length ? !1 : v.filter((g) => !n.value.includes(g.value)).length === 0;
      },
      set(v) {
        v ? n.value = u.value.map(($) => $.value) : n.value = [];
      }
    }), ee = z({
      get() {
        let v = f.value.filter((g) => g.kind === "option").map((g) => g.value);
        return n.value.length < v.length ? !1 : v.filter((g) => !n.value.includes(g)).length === 0;
      },
      set(v) {
        let $ = f.value.filter((g) => g.kind === "option").map((g) => g.value);
        if (v) {
          const g = $.filter((P) => !n.value.includes(P));
          n.value = n.value.concat(g);
        } else
          n.value = n.value.filter((g) => !$.includes(g));
      }
    });
    function V(v) {
      const $ = f.value.filter((P) => P.kind === "option" && P.group === v).map((P) => P.value), g = $.filter((P) => !n.value.includes(P));
      g.length > 0 ? g.forEach((P) => {
        n.value.push(P);
      }) : n.value = n.value.filter((P) => !$.includes(P));
    }
    return (v, $) => (O(), k("div", {
      class: m([v.$style.grid, v.$style[`grid--${e.labelPosition}`]]),
      id: S(a)
    }, [
      e.label && e.labelPosition !== "none" ? (O(), k("label", {
        key: 0,
        for: S(o)("textbox"),
        class: m([v.$style.label, v.$style[`label--${e.labelPosition}`]])
      }, C(e.label), 11, An)) : j("", !0),
      A("div", {
        class: m(v.$style.wrapper),
        ref_key: "container",
        ref: y
      }, [
        A("div", {
          class: m(v.$style.textboxWrapper)
        }, [
          re(A("input", {
            type: "text",
            placeholder: e.placeholder,
            id: S(o)("search"),
            class: m(v.$style.input),
            "onUpdate:modelValue": $[0] || ($[0] = (g) => c.value = g),
            ref_key: "textbox",
            ref: E
          }, null, 10, xn), [
            [ge, c.value],
            [He, b.value]
          ]),
          re(A("div", {
            class: m(v.$style.input),
            tabindex: "0",
            onFocusin: U
          }, C(S(n) ? S(n).length : 0) + " " + C(d.value) + " selected ", 35), [
            [He, !b.value]
          ]),
          X(S(he), {
            icon: "fa-solid fa-caret-down",
            class: m(v.$style.arrow),
            onClick: Q
          }, null, 8, ["class"])
        ], 2),
        b.value ? (O(), k("div", {
          key: 0,
          class: m(v.$style.options),
          ref_key: "dropdown",
          ref: _
        }, [
          u.value.length > 0 ? (O(), k("ul", {
            key: 0,
            class: m(v.$style.optlist)
          }, [
            A("li", {
              title: "Select all",
              class: m([v.$style.selectAll, v.$style.listItem, v.$style.option]),
              style: $e({ height: `${e.itemHeight}px` })
            }, [
              X(we, {
                label: "Select all",
                "label-position": "right",
                modelValue: L.value,
                "onUpdate:modelValue": $[1] || ($[1] = (g) => L.value = g)
              }, null, 8, ["modelValue"])
            ], 6),
            r.value ? (O(), k("li", {
              key: 0,
              title: "Select results",
              class: m([v.$style.selectAll, v.$style.listItem, v.$style.option]),
              style: $e({ height: `${e.itemHeight}px` })
            }, [
              X(we, {
                label: "Select results",
                "label-position": "right",
                modelValue: ee.value,
                "onUpdate:modelValue": $[2] || ($[2] = (g) => ee.value = g)
              }, null, 8, ["modelValue"])
            ], 6)) : j("", !0),
            (O(!0), k(se, null, fe(f.value, (g) => (O(), k("li", {
              title: g.label,
              class: m([
                v.$style.listItem,
                g.kind === "group" ? v.$style.subgroup : v.$style.option
              ]),
              style: $e({ height: `${e.itemHeight}px` })
            }, [
              g.kind === "group" ? (O(), k("div", {
                key: 0,
                onClick: (P) => V(g.group)
              }, C(g.label), 9, Pn)) : (O(), k("div", Mn, [
                g.ix >= D.value && g.ix <= N.value ? (O(), Oe(we, {
                  key: 0,
                  label: g.label,
                  "label-position": "right",
                  "check-value": g.value,
                  name: S(o)("checkboxes"),
                  modelValue: S(n),
                  "onUpdate:modelValue": $[3] || ($[3] = (P) => ce(n) ? n.value = P : null)
                }, null, 8, ["label", "check-value", "name", "modelValue"])) : j("", !0)
              ]))
            ], 14, Rn))), 256))
          ], 2)) : (O(), k("div", {
            key: 1,
            class: m(v.$style.noOptions)
          }, "No options found", 2))
        ], 2)) : j("", !0)
      ], 2)
    ], 10, Nn));
  }
}, Un = {
  $style: Tn
}, Vn = /* @__PURE__ */ Y(Dn, [["__cssModules", Un]]), Bn = "zoa__79mQo__input", Ln = "zoa__WTN5H__label", Hn = "zoa__DqiKb__grid", Gn = {
  input: Bn,
  label: Ln,
  "label--right": "zoa__iMSda__label--right",
  "label--below": "zoa__r6OsR__label--below",
  "label--above": "zoa__iXvOz__label--above",
  grid: Hn,
  "grid--above": "zoa__9WSIP__grid--above",
  "grid--below": "zoa__iK09A__grid--below",
  "grid--left": "zoa__KhHio__grid--left",
  "grid--right": "zoa__M6mbm__grid--right"
}, jn = ["id"], Fn = ["for"], Wn = ["placeholder", "min", "max", "step", "id"], Kn = {
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
  setup(e, { emit: l }) {
    const t = e, { componentId: a, subId: o } = ae(), { value: n } = oe(l, t);
    return (r, s) => (O(), k("div", {
      class: m([r.$style.grid, r.$style[`grid--${e.labelPosition}`]]),
      id: S(a)
    }, [
      e.label && e.labelPosition !== "none" ? (O(), k("label", {
        key: 0,
        for: S(o)("number"),
        class: m([r.$style.label, r.$style[`label--${e.labelPosition}`]])
      }, C(e.label), 11, Fn)) : j("", !0),
      re(A("input", {
        type: "number",
        placeholder: e.placeholder,
        min: e.min,
        max: e.max,
        step: e.step,
        id: S(o)("number"),
        class: m(r.$style.input),
        "onUpdate:modelValue": s[0] || (s[0] = (i) => ce(n) ? n.value = i : null)
      }, null, 10, Wn), [
        [ge, S(n)]
      ])
    ], 10, jn));
  }
}, Xn = {
  $style: Gn
}, Ee = /* @__PURE__ */ Y(Kn, [["__cssModules", Xn]]), Yn = "zoa__BWNey__input", Zn = "zoa__EwgZe__label", qn = "zoa__Xjves__grid", Jn = {
  input: Yn,
  label: Zn,
  "label--right": "zoa__GxE5U__label--right",
  "label--below": "zoa__K1mOk__label--below",
  "label--above": "zoa__33h7g__label--above",
  grid: qn,
  "grid--above": "zoa__caz05__grid--above",
  "grid--below": "zoa__pnjLn__grid--below",
  "grid--left": "zoa__utweT__grid--left",
  "grid--right": "zoa__E6CuQ__grid--right"
}, Qn = ["id"], ea = ["for"], ta = ["placeholder", "min", "max", "step", "id"], la = {
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
  setup(e, { emit: l }) {
    const t = e, { componentId: a, subId: o } = ae(), { value: n } = oe(l, t);
    return (r, s) => (O(), k("div", {
      class: m([r.$style.grid, r.$style[`grid--${e.labelPosition}`]]),
      id: S(a)
    }, [
      e.label && e.labelPosition !== "none" ? (O(), k("label", {
        key: 0,
        for: S(o)("date"),
        class: m([r.$style.label, r.$style[`label--${e.labelPosition}`]])
      }, C(e.label), 11, ea)) : j("", !0),
      re(A("input", {
        type: "date",
        placeholder: e.placeholder,
        min: e.min,
        max: e.max,
        step: e.step,
        id: S(o)("date"),
        class: m(r.$style.input),
        "onUpdate:modelValue": s[0] || (s[0] = (i) => ce(n) ? n.value = i : null)
      }, null, 10, ta), [
        [ge, S(n)]
      ])
    ], 10, Qn));
  }
}, na = {
  $style: Jn
}, aa = /* @__PURE__ */ Y(la, [["__cssModules", na]]);
var oa = {
  __locale: "en",
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  abbreviated_days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  abbreviated_months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  am: "AM",
  pm: "PM"
}, ra = oa;
const Ye = /* @__PURE__ */ ln(ra), ia = "zoa__T01c0__input", sa = "zoa__Zrad1__label", ua = "zoa__-K9Da__grid", ca = "zoa__zCutL__inputContainer", da = "zoa__DBAOk__datePopup", fa = "zoa__e8GS9__popupSection", _a = "zoa__tN5Fw__yearGrid", ba = "zoa__Z8UyZ__monthGrid", pa = "zoa__6Tknh__dayGrid", ma = "zoa__oPUQ-__editing", va = "zoa__GtJv-__suggestion", ha = {
  input: ia,
  label: sa,
  "label--right": "zoa__SxVfB__label--right",
  "label--below": "zoa__YLIdi__label--below",
  "label--above": "zoa__E7ufb__label--above",
  grid: ua,
  "grid--above": "zoa__KeVwr__grid--above",
  "grid--below": "zoa__KyL5-__grid--below",
  "grid--left": "zoa__Ytl98__grid--left",
  "grid--right": "zoa__KxP7T__grid--right",
  inputContainer: ca,
  datePopup: da,
  popupSection: fa,
  yearGrid: _a,
  monthGrid: ba,
  dayGrid: pa,
  editing: ma,
  suggestion: va
}, ga = ["id"], ya = ["for"], $a = ["placeholder", "id"], Sa = ["onClick", "onKeydown"], Ia = {
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
  setup(e, { emit: l }) {
    const t = e, a = () => import("./dates-033068e6.js"), { componentId: o, subId: n } = ae(), { valueChanged: r } = oe(l, t.delay), s = x(null), i = x(!1), c = x(null), { focused: d } = ue(c), u = x(null), f = x(null), y = x(null), E = ve(u), _ = ue(u), T = ve(f), p = ue(f), I = ve(y), D = ue(y), N = z(() => {
      let h;
      return E.focused.value ? h = u.value : T.focused.value ? h = f.value : I.focused.value && (h = y.value), h;
    }), b = z(() => {
      let h;
      return _.focused.value ? h = u.value : p.focused.value ? h = f.value : D.focused.value && (h = y.value), h;
    });
    F("Enter", () => {
      N && N.value.children[0].focus();
    }), F("ArrowLeft", () => {
      if (!b.value)
        return;
      const h = b.value.querySelector("button:focus");
      !h || !h.previousElementSibling ? b.value.children[b.value.children.length - 1].focus() : h.previousElementSibling.focus();
    }), F("ArrowRight", () => {
      if (!b.value)
        return;
      const h = b.value.querySelector("button:focus");
      !h || !h.nextElementSibling ? b.value.children[0].focus() : h.nextElementSibling.focus();
    }), F("Escape", () => {
      const h = c.value.querySelector("*:focus");
      h && h.blur();
    });
    const w = z(() => ({
      year: $.value,
      month: Z.value,
      day: W.value
    })), M = z(() => Be(
      w.value.year,
      w.value.month,
      w.value.day
    ));
    function U() {
      s.value.value = M.value, i.value = !1;
    }
    const G = x([]);
    function Q(h) {
      i.value = !0, a().then((B) => {
        G.value = B.parseDate(h.target.value);
      });
    }
    const L = Te(Q, 200);
    function ee(h) {
      V.value = h.year, Z.value = h.month, W.value = h.day, G.value = [];
    }
    const V = x(null), v = z(() => {
      let h = 11;
      return V.value && V.value >= 1e3 ? h = Math.floor(V.value / 10) * 10 : V.value && V.value < 1e3 && (h = V.value * 10), Array(10).fill(h).map((B, R) => B + R);
    }), $ = z(() => {
      if (!V.value)
        return null;
      if (V.value >= 1e3)
        return V.value;
      let h = 10 ** (4 - V.value.toString().length);
      return V.value * h;
    }), g = z(() => $.value % 100 === 0 ? $.value % 400 === 0 : $.value % 4 === 0);
    function P(h) {
      return h.toString().padEnd(4, "0");
    }
    function te(h) {
      V.value = h, W.value && W.value > H.value && (W.value = H.value);
    }
    const Z = x(null), pe = x(Ye.abbreviated_months), H = z(() => [4, 6, 9, 11].includes(Z.value) ? 30 : Z.value === 2 ? g.value ? 29 : 28 : 31);
    function de(h) {
      Z.value = h, W.value && W.value > H.value && (W.value = H.value);
    }
    const W = x(null), ye = z(() => Array(H.value).fill(1).map((h, B) => B + 1));
    function xe(h) {
      W.value = h;
    }
    function Be(h, B, R) {
      const le = Ye.abbreviated_months[B - 1];
      return h && B && R ? `${R} ${le} ${h}` : h && B ? `${le} ${h}` : h && R ? `${R} ??? ${h}` : B && R ? `${R} ${le}` : h || (B ? le : R ? `day ${R}` : null);
    }
    return be(w, () => {
      U(), r(w.value);
    }), (h, B) => (O(), k("div", {
      class: m([h.$style.grid, h.$style[`grid--${e.labelPosition}`]]),
      id: S(o),
      ref_key: "container",
      ref: c
    }, [
      e.label && e.labelPosition !== "none" ? (O(), k("label", {
        key: 0,
        for: S(n)("date"),
        class: m([h.$style.label, h.$style[`label--${e.labelPosition}`]])
      }, C(e.label), 11, ya)) : j("", !0),
      A("div", {
        class: m(h.$style.inputContainer)
      }, [
        A("input", {
          type: "text",
          placeholder: e.placeholder,
          id: S(n)("date"),
          class: m([h.$style.input, i.value ? h.$style.editing : ""]),
          ref_key: "displayBox",
          ref: s,
          onInput: B[0] || (B[0] = (...R) => S(L) && S(L)(...R))
        }, null, 42, $a),
        S(d) ? (O(), k("div", {
          key: 0,
          class: m(h.$style.datePopup)
        }, [
          G.value.length > 0 ? (O(), k("div", {
            key: 0,
            class: m(h.$style.popupSection)
          }, [
            (O(!0), k(se, null, fe(G.value, (R) => (O(), k("span", {
              onClick: (le) => ee(R),
              onKeydown: bt((le) => ee(R), ["enter"]),
              class: m(h.$style.suggestion),
              tabindex: "0"
            }, C(Be(R.year, R.month, R.day)), 43, Sa))), 256))
          ], 2)) : j("", !0),
          A("div", {
            class: m(h.$style.popupSection)
          }, [
            X(Ee, {
              label: "year",
              "label-position": "left",
              placeholder: 1900,
              modelValue: V.value,
              "onUpdate:modelValue": B[1] || (B[1] = (R) => V.value = R),
              min: 0,
              max: 9999
            }, null, 8, ["modelValue"]),
            A("div", {
              class: m(h.$style.yearGrid),
              tabindex: "0",
              ref_key: "yearBtns",
              ref: u
            }, [
              (O(!0), k(se, null, fe(v.value, (R) => (O(), Oe(Se, {
                size: "sm",
                onClick: (le) => te(R),
                tabindex: "-1"
              }, {
                default: Re(() => [
                  me(C(P(R)), 1)
                ]),
                _: 2
              }, 1032, ["onClick"]))), 256))
            ], 2)
          ], 2),
          A("div", {
            class: m(h.$style.popupSection)
          }, [
            X(Ee, {
              label: "month",
              "label-position": "left",
              placeholder: 1,
              modelValue: Z.value,
              "onUpdate:modelValue": B[2] || (B[2] = (R) => Z.value = R),
              min: 1,
              max: 12
            }, null, 8, ["modelValue"]),
            A("div", {
              class: m(h.$style.monthGrid),
              tabindex: "0",
              ref_key: "monthBtns",
              ref: f
            }, [
              (O(!0), k(se, null, fe(pe.value, (R, le) => (O(), Oe(Se, {
                size: "sm",
                onClick: (po) => de(le + 1),
                tabindex: "-1"
              }, {
                default: Re(() => [
                  me(C(R), 1)
                ]),
                _: 2
              }, 1032, ["onClick"]))), 256))
            ], 2)
          ], 2),
          A("div", {
            class: m(h.$style.popupSection)
          }, [
            X(Ee, {
              label: "day",
              "label-position": "left",
              placeholder: 1,
              modelValue: W.value,
              "onUpdate:modelValue": B[3] || (B[3] = (R) => W.value = R),
              min: 1,
              max: H.value
            }, null, 8, ["modelValue", "max"]),
            A("div", {
              class: m(h.$style.dayGrid),
              tabindex: "0",
              ref_key: "dayBtns",
              ref: y
            }, [
              (O(!0), k(se, null, fe(ye.value, (R) => (O(), Oe(Se, {
                size: "sm",
                onClick: (le) => xe(R),
                tabindex: "-1"
              }, {
                default: Re(() => [
                  me(C(R), 1)
                ]),
                _: 2
              }, 1032, ["onClick"]))), 256))
            ], 2)
          ], 2)
        ], 2)) : j("", !0)
      ], 2)
    ], 10, ga));
  }
}, za = {
  $style: ha
}, Oa = /* @__PURE__ */ Y(Ia, [["__cssModules", za]]), wa = "zoa__wKiUj__input", Ea = "zoa__wdDOR__label", ka = "zoa__NU5xO__grid", Ta = "zoa__faDBS__slider", Na = "zoa__pxPuS__track", Aa = "zoa__YIkY8__valueLabel", xa = {
  input: wa,
  label: Ea,
  "label--right": "zoa__-ofKG__label--right",
  "label--below": "zoa__0HdYJ__label--below",
  "label--above": "zoa__PM4XH__label--above",
  grid: ka,
  "grid--above": "zoa__mmKWI__grid--above",
  "grid--below": "zoa__6m720__grid--below",
  "grid--left": "zoa__y6mEj__grid--left",
  "grid--right": "zoa__-c8cX__grid--right",
  "wrapper--value-label-below": "zoa__3DNmv__wrapper--value-label-below",
  "wrapper--value-label-above": "zoa__7bdFW__wrapper--value-label-above",
  slider: Ta,
  track: Na,
  "track--active": "zoa__q61Yj__track--active",
  valueLabel: Aa,
  "valueLabel--below": "zoa__LNFdb__valueLabel--below",
  "valueLabel--above": "zoa__xDqQu__valueLabel--above"
}, Ra = ["id"], Pa = ["for"], Ma = ["min", "max", "step", "id"], Ca = {
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
  setup(e, { emit: l }) {
    const t = e, { componentId: a, subId: o } = ae(), { value: n } = oe(l, t), r = x(null), s = x(null), i = z(() => t.validMin ? Math.max(Number(t.validMin), Number(t.min)) : Number(t.min)), c = z(() => t.validMax ? Math.min(Number(t.validMax), Number(t.max)) : Number(t.max)), d = ue(r), u = ve(s), f = z(() => n.value < i.value ? i.value : n.value > c.value ? c.value : n.value), y = z(() => t.activeTrackRight ? { left: `${_.value.handle}%` } : { right: `${100 - _.value.handle}%` }), E = z(() => (n.value - t.min) / (t.max - t.min)), _ = z(() => T());
    function T() {
      try {
        const b = r.value.clientWidth, w = 24;
        s.value && (s.value.innerText = f.value);
        const M = s.value ? s.value.clientWidth : 0, U = b / 2, L = (E.value * b - U) / U * (w / 2), ee = L + M / 2, V = L / b;
        return {
          handle: ((E.value - V) * 100).toFixed(2),
          label: ((E.value - ee / b) * 100).toFixed(2)
        };
      } catch {
        const b = E.value * 100;
        return { handle: b.toFixed(2), label: b.toFixed(2) };
      }
    }
    function p() {
      if (t.placeholder !== null && t.placeholder !== void 0)
        return t.placeholder;
      let w = (t.max - t.min) / (1 / t.placeholderPosition), M = w % t.step;
      return w - M + t.min;
    }
    function I() {
      if (n.value === t.max)
        return;
      let b = Number(n.value) + Number(t.step);
      b > t.max ? n.value = t.max : n.value = b;
    }
    function D() {
      if (n.value === t.min)
        return;
      let b = Number(n.value) - Number(t.step);
      b < t.min ? n.value = t.min : n.value = b;
    }
    function N(b) {
      b.preventDefault(), b.wheelDelta > 0 ? I() : b.wheelDelta < 0 && D();
    }
    return F("ArrowDown", (b) => {
      b.preventDefault(), (d.focused.value || u.focused.value) && D();
    }), F("ArrowLeft", (b) => {
      b.preventDefault(), (d.focused.value || u.focused.value) && D();
    }), F("ArrowUp", (b) => {
      b.preventDefault(), (d.focused.value || u.focused.value) && I();
    }), F("ArrowRight", (b) => {
      b.preventDefault(), (d.focused.value || u.focused.value) && I();
    }), be(n, (b) => {
      Number(b) >= Number(c.value) && (n.value = c.value), Number(b) <= Number(i.value) && (n.value = i.value);
    }), n.value = p(), (b, w) => (O(), k("div", {
      class: m([
        b.$style.grid,
        b.$style[`grid--${e.labelPosition}`],
        b.$style[`wrapper--value-label-${e.valueLabelPosition}`]
      ]),
      id: S(a)
    }, [
      e.label && e.labelPosition !== "none" ? (O(), k("label", {
        key: 0,
        class: m([b.$style.label, b.$style[`label--${e.labelPosition}`]]),
        for: S(o)("slider")
      }, C(e.label), 11, Pa)) : j("", !0),
      A("div", {
        class: m(b.$style.slider),
        onWheel: N
      }, [
        A("span", {
          class: m(b.$style.track)
        }, null, 2),
        A("span", {
          class: m([b.$style.track, b.$style["track--active"]]),
          style: $e(y.value)
        }, null, 6),
        A("span", {
          class: m([
            b.$style.valueLabel,
            b.$style[`valueLabel--${e.valueLabelPosition}`]
          ]),
          style: $e({ left: `${_.value.label}%` }),
          ref_key: "valueLabel",
          ref: s,
          tabindex: "0"
        }, C(f.value), 7),
        re(A("input", {
          type: "range",
          min: e.min,
          max: e.max,
          step: e.step,
          id: S(o)("slider"),
          class: m(b.$style.input),
          "onUpdate:modelValue": w[0] || (w[0] = (M) => ce(n) ? n.value = M : null),
          ref_key: "slider",
          ref: r
        }, null, 10, Ma), [
          [ge, S(n)]
        ])
      ], 34)
    ], 10, Ra));
  }
}, Da = {
  $style: xa
}, Ce = /* @__PURE__ */ Y(Ca, [["__cssModules", Da]]), Ua = "zoa__O86-F__input", Va = "zoa__0YsN9__label", Ba = "zoa__SiTNx__grid", La = {
  input: Ua,
  label: Va,
  "label--right": "zoa__pjeV2__label--right",
  "label--below": "zoa__12bIu__label--below",
  "label--above": "zoa__sjy2f__label--above",
  grid: Ba,
  "grid--above": "zoa__8N5XC__grid--above",
  "grid--below": "zoa__X9vRI__grid--below",
  "grid--left": "zoa__unXPL__grid--left",
  "grid--right": "zoa__WXVvK__grid--right"
}, Ha = ["id"], Ga = {
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
  setup(e, { emit: l }) {
    const t = e, { componentId: a, subId: o } = ae(), { valueChanged: n } = oe(l, t), r = x(null), s = x(null), i = z(() => Math.max(
      Number(s.value) - Number(t.step),
      Number(t.min)
    )), c = z(() => Math.min(
      Number(r.value) + Number(t.step),
      Number(t.max)
    )), d = z(() => {
      const u = Math.min(r.value, i.value), f = Math.max(s.value, c.value);
      return [u, f];
    });
    return be(d, () => {
      n(d.value);
    }), (u, f) => (O(), k("div", {
      class: m([u.$style.grid, u.$style[`grid--${e.labelPosition}`]]),
      id: S(a)
    }, [
      e.label && e.labelPosition !== "none" ? (O(), k("span", {
        key: 0,
        class: m([u.$style.label, u.$style[`label--${e.labelPosition}`]])
      }, C(e.label), 3)) : j("", !0),
      A("div", null, [
        X(Ce, {
          min: e.min,
          max: e.max,
          "valid-max": i.value,
          step: e.step,
          modelValue: r.value,
          "onUpdate:modelValue": f[0] || (f[0] = (y) => r.value = y),
          label: e.labelLower,
          "label-position": e.labelsRight ? "right" : "left",
          "value-label-position": "above",
          "placeholder-position": 0.25
        }, null, 8, ["min", "max", "valid-max", "step", "modelValue", "label", "label-position"]),
        X(Ce, {
          min: e.min,
          "valid-min": c.value,
          max: e.max,
          step: e.step,
          modelValue: s.value,
          "onUpdate:modelValue": f[1] || (f[1] = (y) => s.value = y),
          label: e.labelUpper,
          "label-position": e.labelsRight ? "right" : "left",
          "placeholder-position": 0.75,
          "active-track-right": !0
        }, null, 8, ["min", "valid-min", "max", "step", "modelValue", "label", "label-position"])
      ])
    ], 10, Ha));
  }
}, ja = {
  $style: La
}, Fa = /* @__PURE__ */ Y(Ga, [["__cssModules", ja]]);
function rt(e) {
  return { icon: z(() => {
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
const Wa = "zoa__VAeTu__main", Ka = "zoa__fVs2o__container", Xa = "zoa__THVXY__header", Ya = "zoa__paVgB__icon", Za = {
  main: Wa,
  container: Ka,
  header: Xa,
  icon: Ya,
  "kind--info": "zoa__ITcbz__kind--info",
  "kind--warning": "zoa__ePWkZ__kind--warning",
  "kind--error": "zoa__uCNxg__kind--error",
  "kind--success": "zoa__QTxj6__kind--success"
}, qa = {
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
    const l = e, { icon: t } = rt(l);
    return (a, o) => (O(), k("div", {
      class: m([a.$style.main, a.$style.container, a.$style[`kind--${e.kind}`]])
    }, [
      A("div", {
        class: m(a.$style.header)
      }, [
        X(S(he), {
          icon: ["fa-solid", S(t)],
          class: m(a.$style.icon)
        }, null, 8, ["icon", "class"]),
        A("h2", null, C(e.header), 1)
      ], 2),
      A("div", {
        class: m(a.$style.content)
      }, [
        De(a.$slots, "default", {}, () => [
          me(C(e.message), 1)
        ])
      ], 2)
    ], 2));
  }
}, Ja = {
  $style: Za
}, Qa = /* @__PURE__ */ Y(qa, [["__cssModules", Ja]]), eo = "zoa__-6BJv__main", to = "zoa__JzwYn__container", lo = "zoa__Fn9SR__header", no = "zoa__G4zlh__icon", ao = "zoa__KdMNq__form", oo = "zoa__PyVzA__close", ro = "zoa__YKx2f__content", io = {
  main: eo,
  container: to,
  header: lo,
  icon: no,
  "kind--info": "zoa__dJXHY__kind--info",
  "kind--warning": "zoa__GLN89__kind--warning",
  "kind--error": "zoa__3HPxn__kind--error",
  "kind--success": "zoa__O1vse__kind--success",
  form: ao,
  close: oo,
  content: ro
}, so = {
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
  setup(e, { emit: l }) {
    const t = e, { icon: a } = rt(t), o = x(null);
    function n() {
      o.value.show(), l("opened");
    }
    return (r, s) => (O(), k(se, null, [
      X(S(Se), pt(e.buttonArgs, { onClick: n }), null, 16),
      A("dialog", {
        ref_key: "modal",
        ref: o,
        class: m([r.$style.main, r.$style[`kind--${e.kind}`]])
      }, [
        A("div", {
          class: m(r.$style.container)
        }, [
          A("form", {
            method: "dialog",
            class: m(r.$style.form),
            onSubmit: s[0] || (s[0] = (i) => l("closed"))
          }, [
            A("button", {
              class: m(r.$style.close)
            }, [
              X(S(he), { icon: "fa-solid fa-xmark" })
            ], 2)
          ], 34),
          A("div", {
            class: m(r.$style.header)
          }, [
            X(S(he), {
              icon: ["fa-solid", S(a)],
              class: m(r.$style.icon)
            }, null, 8, ["icon", "class"]),
            A("h2", null, C(e.header), 1)
          ], 2),
          A("div", {
            class: m(r.$style.content)
          }, [
            De(r.$slots, "default", {}, () => [
              me(C(e.message), 1)
            ])
          ], 2)
        ], 2)
      ], 2)
    ], 64));
  }
}, uo = {
  $style: io
}, co = /* @__PURE__ */ Y(so, [["__cssModules", uo]]), fo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ZoaAutocompleteTextbox: vl,
  ZoaButton: Se,
  ZoaCheckbox: we,
  ZoaDateAmbiguous: Oa,
  ZoaDateSimple: aa,
  ZoaDropdown: jl,
  ZoaFlash: Qa,
  ZoaModal: co,
  ZoaMultiselect: Vn,
  ZoaNumber: Ee,
  ZoaRangeSlider: Fa,
  ZoaSlider: Ce,
  ZoaTextbox: Lt
}, Symbol.toStringTag, { value: "Module" })), _o = new RegExp("[A-Z]+(?![a-z])|[A-Z]", "g");
function bo(e) {
  return e.replace(_o, (l, t) => (t ? "-" : "") + l.toLowerCase());
}
const go = {
  install(e, l) {
    Object.entries(fo).forEach((t) => {
      const a = bo(t[0]);
      e.component(a, t[1]);
    });
  }
};
export {
  vl as A,
  jl as D,
  Qa as F,
  Vn as M,
  Fa as R,
  Lt as T,
  go as Z,
  Se as a,
  we as b,
  Ee as c,
  Ye as d,
  aa as e,
  Oa as f,
  ln as g,
  Ce as h,
  co as i
};
