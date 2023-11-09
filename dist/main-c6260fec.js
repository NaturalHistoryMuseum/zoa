import { openBlock as x, createElementBlock as E, normalizeClass as b, unref as g, renderSlot as we, createTextVNode as pe, toDisplayString as C, ref as T, computed as w, watch as ge, customRef as _t, getCurrentScope as bt, onScopeDispose as mt, reactive as je, withDirectives as ie, createElementVNode as A, isRef as de, vModelCheckbox as Qe, isProxy as et, toRaw as tt, createCommentVNode as H, vModelText as $e, Fragment as fe, renderList as be, defineComponent as Le, h as lt, vModelSelect as pt, createVNode as q, vShow as Fe, normalizeStyle as ze, createBlock as Ae, withKeys as gt, withCtx as De, mergeProps as vt } from "vue";
import { parse as Ne, icon as ht, config as nt, text as yt, library as $t } from "@fortawesome/fontawesome-svg-core";
import { faCircleXmark as St, faXmark as zt, faCircleInfo as kt, faCircleExclamation as xt, faCircleCheck as wt, faCircleQuestion as It, faCheck as Et, faCaretDown as At } from "@fortawesome/free-solid-svg-icons";
function W(e) {
  function l(t) {
    return t = t || [], e.class && Array.isArray(e.class) ? t = t.concat(e.class) : e.class && t.push(e.class), t;
  }
  return { addPropClasses: l };
}
const Ot = "zoa__button__main", Tt = "zoa__button__checkbox", Nt = {
  main: Ot,
  "kind--normal": "zoa__button__kind--normal",
  checkbox: Tt,
  "kind--primary": "zoa__button__kind--primary",
  "kind--alt": "zoa__button__kind--alt",
  "size--sm": "zoa__button__size--sm",
  "size--md": "zoa__button__size--md"
}, K = (e, l) => {
  const t = e.__vccOpts || e;
  for (const [n, o] of l)
    t[n] = o;
  return t;
}, Rt = {
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
    const l = e, { addPropClasses: t } = W(l);
    return (n, o) => (x(), E("button", {
      class: b(
        g(t)([
          n.$style.main,
          n.$style[`kind--${e.kind}`],
          n.$style[`size--${e.size}`]
        ])
      )
    }, [
      we(n.$slots, "default", {}, () => [
        pe(C(e.label), 1)
      ])
    ], 2));
  }
}, Pt = {
  $style: Nt
}, ke = /* @__PURE__ */ K(Rt, [["__cssModules", Pt]]);
let Ct = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((l, t) => (t &= 63, t < 36 ? l += t.toString(36) : t < 62 ? l += (t - 26).toString(36).toUpperCase() : t > 62 ? l += "-" : l += "_", l), "");
function J() {
  const e = T(Ct(6));
  function l(t) {
    return `${e.value}__${t}`;
  }
  return { componentId: e, subId: l };
}
const { now: We } = Date, Re = (e, l = 1, t) => {
  l = Math.max(1, l);
  const n = (t == null ? void 0 : t.leading) ?? !1, o = (t == null ? void 0 : t.trailing) ?? !0, s = Math.max((t == null ? void 0 : t.maxWait) ?? 1 / 0, l);
  let a, i, r = 0, c = 0;
  const f = () => {
    const O = We(), M = O - r, _ = O - c, N = M >= l || _ >= s;
    return [O, N];
  }, d = (O) => {
    if (c = O, !a)
      return;
    const M = a;
    a = void 0, e.apply(void 0, M);
  }, u = () => {
    $(0);
  }, p = () => {
    i && (u(), d(We()));
  }, k = (O) => {
    if (c = O, n)
      return d(O);
  }, I = (O) => {
    if (o && a)
      return d(O);
    a = void 0;
  }, v = () => {
    i = void 0;
    const [O, M] = f();
    return M ? I(O) : m(O);
  }, m = (O) => {
    const M = O - r, _ = O - c, N = l - M, B = s - _, j = Math.min(N, B);
    return $(j);
  }, $ = (O) => {
    i && clearTimeout(i), !(O <= 0) && (i = setTimeout(v, O));
  }, U = (...O) => {
    const [M, _] = f(), N = !!i;
    if (a = O, r = M, (_ || !i) && $(l), _)
      return N ? d(M) : k(M);
  };
  return U.cancel = u, U.flush = p, U;
};
function ne(e, l) {
  let t;
  try {
    t = parseInt(l.delay) || 0;
  } catch {
    t = 0;
  }
  const n = T(null);
  function o(r) {
    e("change", r);
  }
  const s = Re(o, t);
  function a(r) {
    e("update:modelValue", r), n.value = r, s(r);
  }
  const i = w({
    get() {
      return l.modelValue === void 0 ? n.value : l.modelValue;
    },
    set(r) {
      a(r);
    }
  });
  return { emitChange: s, valueChanged: a, value: i };
}
function Mt(e, l) {
  let t, n, o;
  const s = T(!0), a = () => {
    s.value = !0, o();
  };
  ge(e, a, { flush: "sync" });
  const i = typeof l == "function" ? l : l.get, r = typeof l == "function" ? void 0 : l.set, c = _t((f, d) => (n = f, o = d, {
    get() {
      return s.value && (t = i(), s.value = !1), n(), t;
    },
    set(u) {
      r == null || r(u);
    }
  }));
  return Object.isExtensible(c) && (c.trigger = a), c;
}
function Dt(e) {
  return bt() ? (mt(e), !0) : !1;
}
function te(e) {
  return typeof e == "function" ? e() : g(e);
}
const at = typeof window < "u" && typeof document < "u", Ut = Object.prototype.toString, Bt = (e) => Ut.call(e) === "[object Object]", ce = () => {
}, Vt = /* @__PURE__ */ Lt();
function Lt() {
  var e;
  return at && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function ot(e, l) {
  function t(...n) {
    return new Promise((o, s) => {
      Promise.resolve(e(() => l.apply(this, n), { fn: l, thisArg: this, args: n })).then(o).catch(s);
    });
  }
  return t;
}
function Ht(e, l = {}) {
  let t, n, o = ce;
  const s = (i) => {
    clearTimeout(i), o(), o = ce;
  };
  return (i) => {
    const r = te(e), c = te(l.maxWait);
    return t && s(t), r <= 0 || c !== void 0 && c <= 0 ? (n && (s(n), n = null), Promise.resolve(i())) : new Promise((f, d) => {
      o = l.rejectOnCancel ? d : f, c && !n && (n = setTimeout(() => {
        t && s(t), n = null, f(i());
      }, c)), t = setTimeout(() => {
        n && s(n), n = null, f(i());
      }, r);
    });
  };
}
function Gt(e, l = !0, t = !0, n = !1) {
  let o = 0, s, a = !0, i = ce, r;
  const c = () => {
    s && (clearTimeout(s), s = void 0, i(), i = ce);
  };
  return (d) => {
    const u = te(e), p = Date.now() - o, k = () => r = d();
    return c(), u <= 0 ? (o = Date.now(), k()) : (p > u && (t || !a) ? (o = Date.now(), k()) : l && (r = new Promise((I, v) => {
      i = n ? v : I, s = setTimeout(() => {
        o = Date.now(), a = !0, I(k()), c();
      }, Math.max(0, u - p));
    })), !t && !s && (s = setTimeout(() => a = !0, u)), a = !1, r);
  };
}
function jt(e, l = 200, t = {}) {
  return ot(
    Ht(l, t),
    e
  );
}
function Ft(e, l = 200, t = !1, n = !0, o = !1) {
  return ot(
    Gt(l, t, n, o),
    e
  );
}
function me(e) {
  var l;
  const t = te(e);
  return (l = t == null ? void 0 : t.$el) != null ? l : t;
}
const Ie = at ? window : void 0;
function se(...e) {
  let l, t, n, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([t, n, o] = e, l = Ie) : [l, t, n, o] = e, !l)
    return ce;
  Array.isArray(t) || (t = [t]), Array.isArray(n) || (n = [n]);
  const s = [], a = () => {
    s.forEach((f) => f()), s.length = 0;
  }, i = (f, d, u, p) => (f.addEventListener(d, u, p), () => f.removeEventListener(d, u, p)), r = ge(
    () => [me(l), te(o)],
    ([f, d]) => {
      if (a(), !f)
        return;
      const u = Bt(d) ? { ...d } : d;
      s.push(
        ...t.flatMap((p) => n.map((k) => i(f, p, k, u)))
      );
    },
    { immediate: !0, flush: "post" }
  ), c = () => {
    r(), a();
  };
  return Dt(c), c;
}
let Ke = !1;
function rt(e, l, t = {}) {
  const { window: n = Ie, ignore: o = [], capture: s = !0, detectIframe: a = !1 } = t;
  if (!n)
    return;
  Vt && !Ke && (Ke = !0, Array.from(n.document.body.children).forEach((u) => u.addEventListener("click", ce)), n.document.documentElement.addEventListener("click", ce));
  let i = !0;
  const r = (u) => o.some((p) => {
    if (typeof p == "string")
      return Array.from(n.document.querySelectorAll(p)).some((k) => k === u.target || u.composedPath().includes(k));
    {
      const k = me(p);
      return k && (u.target === k || u.composedPath().includes(k));
    }
  }), f = [
    se(n, "click", (u) => {
      const p = me(e);
      if (!(!p || p === u.target || u.composedPath().includes(p))) {
        if (u.detail === 0 && (i = !r(u)), !i) {
          i = !0;
          return;
        }
        l(u);
      }
    }, { passive: !0, capture: s }),
    se(n, "pointerdown", (u) => {
      const p = me(e);
      p && (i = !u.composedPath().includes(p) && !r(u));
    }, { passive: !0 }),
    a && se(n, "blur", (u) => {
      setTimeout(() => {
        var p;
        const k = me(e);
        ((p = n.document.activeElement) == null ? void 0 : p.tagName) === "IFRAME" && !(k != null && k.contains(n.document.activeElement)) && l(u);
      }, 0);
    })
  ].filter(Boolean);
  return () => f.forEach((u) => u());
}
function Wt(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (l) => l.key === e : Array.isArray(e) ? (l) => e.includes(l.key) : () => !0;
}
function G(...e) {
  let l, t, n = {};
  e.length === 3 ? (l = e[0], t = e[1], n = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (l = !0, t = e[0], n = e[1]) : (l = e[0], t = e[1]) : (l = !0, t = e[0]);
  const {
    target: o = Ie,
    eventName: s = "keydown",
    passive: a = !1,
    dedupe: i = !1
  } = n, r = Wt(l);
  return se(o, s, (f) => {
    f.repeat && te(i) || r(f) && t(f);
  }, a);
}
function Kt(e = {}) {
  var l;
  const {
    window: t = Ie,
    deep: n = !0
  } = e, o = (l = e.document) != null ? l : t == null ? void 0 : t.document, s = () => {
    var i;
    let r = o == null ? void 0 : o.activeElement;
    if (n)
      for (; r != null && r.shadowRoot; )
        r = (i = r == null ? void 0 : r.shadowRoot) == null ? void 0 : i.activeElement;
    return r;
  }, a = Mt(
    () => null,
    () => s()
  );
  return t && (se(t, "blur", (i) => {
    i.relatedTarget === null && a.trigger();
  }, !0), se(t, "focus", a.trigger, !0)), a;
}
function he(e, l = {}) {
  const { initialValue: t = !1, focusVisible: n = !1 } = l, o = T(!1), s = w(() => me(e));
  se(s, "focus", (i) => {
    var r, c;
    (!n || (c = (r = i.target).matches) != null && c.call(r, ":focus-visible")) && (o.value = !0);
  }), se(s, "blur", () => o.value = !1);
  const a = w({
    get: () => o.value,
    set(i) {
      var r, c;
      !i && o.value ? (r = s.value) == null || r.blur() : i && !o.value && ((c = s.value) == null || c.focus());
    }
  });
  return ge(
    s,
    () => {
      a.value = t;
    },
    { immediate: !0, flush: "post" }
  ), { focused: a };
}
function ue(e, l = {}) {
  const t = Kt(l), n = w(() => me(e));
  return { focused: w(() => n.value && t.value ? n.value.contains(t.value) : !1) };
}
const Xe = 1;
function Xt(e, l = {}) {
  const {
    throttle: t = 0,
    idle: n = 200,
    onStop: o = ce,
    onScroll: s = ce,
    offset: a = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions: i = {
      capture: !1,
      passive: !0
    },
    behavior: r = "auto",
    window: c = Ie
  } = l, f = T(0), d = T(0), u = w({
    get() {
      return f.value;
    },
    set(_) {
      k(_, void 0);
    }
  }), p = w({
    get() {
      return d.value;
    },
    set(_) {
      k(void 0, _);
    }
  });
  function k(_, N) {
    var B, j, F;
    if (!c)
      return;
    const X = te(e);
    X && ((F = X instanceof Document ? c.document.body : X) == null || F.scrollTo({
      top: (B = te(N)) != null ? B : p.value,
      left: (j = te(_)) != null ? j : u.value,
      behavior: te(r)
    }));
  }
  const I = T(!1), v = je({
    left: !0,
    right: !1,
    top: !0,
    bottom: !1
  }), m = je({
    left: !1,
    right: !1,
    top: !1,
    bottom: !1
  }), $ = (_) => {
    I.value && (I.value = !1, m.left = !1, m.right = !1, m.top = !1, m.bottom = !1, o(_));
  }, U = jt($, t + n), O = (_) => {
    var N;
    if (!c)
      return;
    const B = _.document ? _.document.documentElement : (N = _.documentElement) != null ? N : _, { display: j, flexDirection: F } = getComputedStyle(B), X = B.scrollLeft;
    m.left = X < f.value, m.right = X > f.value;
    const Q = Math.abs(X) <= 0 + (a.left || 0), ae = Math.abs(X) + B.clientWidth >= B.scrollWidth - (a.right || 0) - Xe;
    j === "flex" && F === "row-reverse" ? (v.left = ae, v.right = Q) : (v.left = Q, v.right = ae), f.value = X;
    let D = B.scrollTop;
    _ === c.document && !D && (D = c.document.body.scrollTop), m.top = D < d.value, m.bottom = D > d.value;
    const y = Math.abs(D) <= 0 + (a.top || 0), S = Math.abs(D) + B.clientHeight >= B.scrollHeight - (a.bottom || 0) - Xe;
    j === "flex" && F === "column-reverse" ? (v.top = S, v.bottom = y) : (v.top = y, v.bottom = S), d.value = D;
  }, M = (_) => {
    var N;
    if (!c)
      return;
    const B = (N = _.target.documentElement) != null ? N : _.target;
    O(B), I.value = !0, U(_), s(_);
  };
  return se(
    e,
    "scroll",
    t ? Ft(M, t, !0, !1) : M,
    i
  ), se(
    e,
    "scrollend",
    $,
    i
  ), {
    x: u,
    y: p,
    isScrolling: I,
    arrivedState: v,
    directions: m,
    measure() {
      const _ = te(e);
      c && _ && O(_);
    }
  };
}
const Zt = "zoa__togglebutton__input", Yt = "zoa__togglebutton__label", qt = "zoa__togglebutton__grid", Jt = "zoa__togglebutton__main", Qt = "zoa__togglebutton__checkbox", el = {
  input: Zt,
  label: Yt,
  "label--right": "zoa__togglebutton__label--right",
  "label--below": "zoa__togglebutton__label--below",
  "label--above": "zoa__togglebutton__label--above",
  "label--none": "zoa__togglebutton__label--none",
  grid: qt,
  "grid--above": "zoa__togglebutton__grid--above",
  "grid--below": "zoa__togglebutton__grid--below",
  "grid--left": "zoa__togglebutton__grid--left",
  "grid--right": "zoa__togglebutton__grid--right",
  main: Jt,
  "kind--normal": "zoa__togglebutton__kind--normal",
  checkbox: Qt,
  "kind--primary": "zoa__togglebutton__kind--primary",
  "kind--alt": "zoa__togglebutton__kind--alt",
  "size--sm": "zoa__togglebutton__size--sm",
  "size--md": "zoa__togglebutton__size--md"
}, tl = ["id", "for"], ll = ["id", "name", "value"], nl = {
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
  setup(e, { emit: l }) {
    const t = e, { componentId: n, subId: o } = J(), { addPropClasses: s } = W(t), { value: a } = ne(l, t), i = T(null), r = T(null), c = ue(i), f = w(() => t.checkValue || t.label);
    function d() {
      let u = et(a.value) ? tt(a.value) : a.value;
      if (Array.isArray(u)) {
        console.log("array");
        let p = !r.value.checked;
        u = u.filter((k) => k !== f.value), p && u.push(f.value), a.value = u, r.value.checked = p;
      } else
        a.value = !a.value;
    }
    return G(" ", () => {
      c.focused.value && d();
    }), G("Enter", () => {
      c.focused.value && d();
    }), (u, p) => (x(), E("label", {
      id: g(n),
      for: g(o)("toggle"),
      tabindex: "0",
      ref_key: "checkboxContainer",
      ref: i,
      class: b(g(s)([]))
    }, [
      ie(A("input", {
        type: "checkbox",
        id: g(o)("toggle"),
        class: b(u.$style.checkbox),
        "onUpdate:modelValue": p[0] || (p[0] = (k) => de(a) ? a.value = k : null),
        name: e.name,
        value: f.value,
        ref_key: "checkboxInput",
        ref: r
      }, null, 10, ll), [
        [Qe, g(a)]
      ]),
      A("span", {
        class: b([u.$style.main, u.$style[`kind--${e.kind}`], u.$style[`size--${e.size}`]])
      }, [
        we(u.$slots, "default", {}, () => [
          pe(C(e.label), 1)
        ])
      ], 2)
    ], 10, tl));
  }
}, al = {
  $style: el
}, ol = /* @__PURE__ */ K(nl, [["__cssModules", al]]), rl = "zoa__textbox__input", sl = "zoa__textbox__label", il = "zoa__textbox__grid", ul = {
  input: rl,
  label: sl,
  "label--right": "zoa__textbox__label--right",
  "label--below": "zoa__textbox__label--below",
  "label--above": "zoa__textbox__label--above",
  "label--none": "zoa__textbox__label--none",
  grid: il,
  "grid--above": "zoa__textbox__grid--above",
  "grid--below": "zoa__textbox__grid--below",
  "grid--left": "zoa__textbox__grid--left",
  "grid--right": "zoa__textbox__grid--right"
}, cl = ["id"], dl = ["for"], fl = ["placeholder", "id"], _l = {
  __name: "Textbox",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: String
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
    const t = e, { componentId: n, subId: o } = J(), { addPropClasses: s } = W(t), { value: a } = ne(l, t);
    return (i, r) => (x(), E("div", {
      class: b(g(s)([i.$style.grid, i.$style[`grid--${e.labelPosition}`]])),
      id: g(n)
    }, [
      e.label ? (x(), E("label", {
        key: 0,
        for: g(o)("textbox"),
        class: b([i.$style.label, i.$style[`label--${e.labelPosition}`]])
      }, C(e.label), 11, dl)) : H("", !0),
      ie(A("input", {
        type: "text",
        placeholder: e.placeholder,
        id: g(o)("textbox"),
        class: b(i.$style.input),
        "onUpdate:modelValue": r[0] || (r[0] = (c) => de(a) ? a.value = c : null)
      }, null, 10, fl), [
        [$e, g(a)]
      ])
    ], 10, cl));
  }
}, bl = {
  $style: ul
}, ml = /* @__PURE__ */ K(_l, [["__cssModules", bl]]), pl = "zoa__autocompletetextbox__input", gl = "zoa__autocompletetextbox__label", vl = "zoa__autocompletetextbox__grid", hl = "zoa__autocompletetextbox__wrapper", yl = "zoa__autocompletetextbox__options", $l = "zoa__autocompletetextbox__option", Sl = "zoa__autocompletetextbox__noOptions", zl = {
  input: pl,
  label: gl,
  "label--right": "zoa__autocompletetextbox__label--right",
  "label--below": "zoa__autocompletetextbox__label--below",
  "label--above": "zoa__autocompletetextbox__label--above",
  "label--none": "zoa__autocompletetextbox__label--none",
  grid: vl,
  "grid--above": "zoa__autocompletetextbox__grid--above",
  "grid--below": "zoa__autocompletetextbox__grid--below",
  "grid--left": "zoa__autocompletetextbox__grid--left",
  "grid--right": "zoa__autocompletetextbox__grid--right",
  wrapper: hl,
  options: yl,
  option: $l,
  noOptions: Sl
}, kl = ["id"], xl = ["for"], wl = ["placeholder", "id"], Il = { key: 0 }, El = ["onClick"], Al = ["value"], Ol = {
  __name: "AutocompleteTextbox",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: String
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
    const t = e, { componentId: n, subId: o } = J(), { addPropClasses: s } = W(t), { value: a } = ne(l, t), i = w(() => {
      let v = [];
      return t.options.forEach((m) => {
        typeof m == "object" ? v.push({ label: m.label, value: m.value }) : v.push({ label: m, value: m });
      }), v;
    }), r = T(null), c = T(null), f = T(null), d = T(!1), u = he(c), p = ue(f);
    function k() {
      try {
        r.value.blur(), c.value.blur(), f.value.blur();
      } catch {
      }
      d.value = !1;
    }
    rt(r, () => {
      d.value = !1;
    }), G("ArrowDown", () => {
      if (i.value.length !== 0) {
        if (u.focused.value)
          f.value.children[0].children[0].focus();
        else if (p.focused.value) {
          const v = f.value.querySelector("li:focus");
          !v || !v.nextElementSibling ? f.value.children[0].children[0].focus() : v.nextElementSibling.focus();
        }
      }
    }), G("ArrowUp", () => {
      if (i.value.length !== 0 && p.focused.value) {
        const v = f.value.querySelector("li:focus");
        !v || !v.previousElementSibling ? c.value.focus() : v.previousElementSibling.focus();
      }
    }), G("Enter", () => {
      if (p.focused.value) {
        const v = f.value.querySelector("li:focus");
        v && I(v.querySelector("input").value);
      }
      k();
    });
    function I(v) {
      a.value = v, k();
    }
    return (v, m) => (x(), E("div", {
      class: b(g(s)([v.$style.grid, v.$style[`grid--${e.labelPosition}`]])),
      id: g(n)
    }, [
      e.label ? (x(), E("label", {
        key: 0,
        for: g(o)("textbox"),
        class: b([v.$style.label, v.$style[`label--${e.labelPosition}`]])
      }, C(e.label), 11, xl)) : H("", !0),
      A("div", {
        class: b(v.$style.wrapper),
        ref_key: "container",
        ref: r
      }, [
        ie(A("input", {
          type: "text",
          placeholder: e.placeholder,
          id: g(o)("textbox"),
          class: b(v.$style.input),
          "onUpdate:modelValue": m[0] || (m[0] = ($) => de(a) ? a.value = $ : null),
          onFocusin: m[1] || (m[1] = ($) => d.value = !0),
          ref_key: "textbox",
          ref: c
        }, null, 42, wl), [
          [$e, g(a)]
        ]),
        d.value ? (x(), E("div", {
          key: 0,
          class: b(v.$style.options),
          ref_key: "dropdown",
          ref: f
        }, [
          i.value.length > 0 ? (x(), E("ul", Il, [
            (x(!0), E(fe, null, be(i.value, ($) => (x(), E("li", {
              class: b(v.$style.option),
              onClick: (U) => I($.value),
              tabindex: "0"
            }, [
              A("span", null, C($.label), 1),
              A("input", {
                type: "hidden",
                value: $.value
              }, null, 8, Al)
            ], 10, El))), 256))
          ])) : (x(), E("div", {
            key: 1,
            class: b(v.$style.noOptions)
          }, "No options found", 2))
        ], 2)) : H("", !0)
      ], 2)
    ], 10, kl));
  }
}, Tl = {
  $style: zl
}, Nl = /* @__PURE__ */ K(Ol, [["__cssModules", Tl]]);
function Ze(e, l) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    l && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function le(e) {
  for (var l = 1; l < arguments.length; l++) {
    var t = arguments[l] != null ? arguments[l] : {};
    l % 2 ? Ze(Object(t), !0).forEach(function(n) {
      Y(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ze(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function Pe(e) {
  "@babel/helpers - typeof";
  return Pe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
    return typeof l;
  } : function(l) {
    return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
  }, Pe(e);
}
function Y(e, l, t) {
  return l in e ? Object.defineProperty(e, l, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[l] = t, e;
}
function Rl(e, l) {
  if (e == null)
    return {};
  var t = {}, n = Object.keys(e), o, s;
  for (s = 0; s < n.length; s++)
    o = n[s], !(l.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
function Pl(e, l) {
  if (e == null)
    return {};
  var t = Rl(e, l), n, o;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (o = 0; o < s.length; o++)
      n = s[o], !(l.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n]);
  }
  return t;
}
function Ue(e) {
  return Cl(e) || Ml(e) || Dl(e) || Ul();
}
function Cl(e) {
  if (Array.isArray(e))
    return Be(e);
}
function Ml(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Dl(e, l) {
  if (e) {
    if (typeof e == "string")
      return Be(e, l);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Be(e, l);
  }
}
function Be(e, l) {
  (l == null || l > e.length) && (l = e.length);
  for (var t = 0, n = new Array(l); t < l; t++)
    n[t] = e[t];
  return n;
}
function Ul() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Bl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, st = { exports: {} };
(function(e) {
  (function(l) {
    var t = function(m, $, U) {
      if (!c($) || d($) || u($) || p($) || r($))
        return $;
      var O, M = 0, _ = 0;
      if (f($))
        for (O = [], _ = $.length; M < _; M++)
          O.push(t(m, $[M], U));
      else {
        O = {};
        for (var N in $)
          Object.prototype.hasOwnProperty.call($, N) && (O[m(N, U)] = t(m, $[N], U));
      }
      return O;
    }, n = function(m, $) {
      $ = $ || {};
      var U = $.separator || "_", O = $.split || /(?=[A-Z])/;
      return m.split(O).join(U);
    }, o = function(m) {
      return k(m) ? m : (m = m.replace(/[\-_\s]+(.)?/g, function($, U) {
        return U ? U.toUpperCase() : "";
      }), m.substr(0, 1).toLowerCase() + m.substr(1));
    }, s = function(m) {
      var $ = o(m);
      return $.substr(0, 1).toUpperCase() + $.substr(1);
    }, a = function(m, $) {
      return n(m, $).toLowerCase();
    }, i = Object.prototype.toString, r = function(m) {
      return typeof m == "function";
    }, c = function(m) {
      return m === Object(m);
    }, f = function(m) {
      return i.call(m) == "[object Array]";
    }, d = function(m) {
      return i.call(m) == "[object Date]";
    }, u = function(m) {
      return i.call(m) == "[object RegExp]";
    }, p = function(m) {
      return i.call(m) == "[object Boolean]";
    }, k = function(m) {
      return m = m - 0, m === m;
    }, I = function(m, $) {
      var U = $ && "process" in $ ? $.process : $;
      return typeof U != "function" ? m : function(O, M) {
        return U(O, m, M);
      };
    }, v = {
      camelize: o,
      decamelize: a,
      pascalize: s,
      depascalize: a,
      camelizeKeys: function(m, $) {
        return t(I(o, $), m);
      },
      decamelizeKeys: function(m, $) {
        return t(I(a, $), m, $);
      },
      pascalizeKeys: function(m, $) {
        return t(I(s, $), m);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = v : l.humps = v;
  })(Bl);
})(st);
var Vl = st.exports, Ll = ["class", "style"];
function Hl(e) {
  return e.split(";").map(function(l) {
    return l.trim();
  }).filter(function(l) {
    return l;
  }).reduce(function(l, t) {
    var n = t.indexOf(":"), o = Vl.camelize(t.slice(0, n)), s = t.slice(n + 1).trim();
    return l[o] = s, l;
  }, {});
}
function Gl(e) {
  return e.split(/\s+/).reduce(function(l, t) {
    return l[t] = !0, l;
  }, {});
}
function He(e) {
  var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var n = (e.children || []).map(function(r) {
    return He(r);
  }), o = Object.keys(e.attributes || {}).reduce(function(r, c) {
    var f = e.attributes[c];
    switch (c) {
      case "class":
        r.class = Gl(f);
        break;
      case "style":
        r.style = Hl(f);
        break;
      default:
        r.attrs[c] = f;
    }
    return r;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  t.class;
  var s = t.style, a = s === void 0 ? {} : s, i = Pl(t, Ll);
  return lt(e.tag, le(le(le({}, l), {}, {
    class: o.class,
    style: le(le({}, o.style), a)
  }, o.attrs), i), n);
}
var it = !1;
try {
  it = !0;
} catch {
}
function jl() {
  if (!it && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function xe(e, l) {
  return Array.isArray(l) && l.length > 0 || !Array.isArray(l) && l ? Y({}, e, l) : {};
}
function Fl(e) {
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
  }, Y(l, "fa-".concat(e.size), e.size !== null), Y(l, "fa-rotate-".concat(e.rotation), e.rotation !== null), Y(l, "fa-pull-".concat(e.pull), e.pull !== null), Y(l, "fa-swap-opacity", e.swapOpacity), Y(l, "fa-bounce", e.bounce), Y(l, "fa-shake", e.shake), Y(l, "fa-beat", e.beat), Y(l, "fa-fade", e.fade), Y(l, "fa-beat-fade", e.beatFade), Y(l, "fa-flash", e.flash), Y(l, "fa-spin-pulse", e.spinPulse), Y(l, "fa-spin-reverse", e.spinReverse), l);
  return Object.keys(t).map(function(n) {
    return t[n] ? n : null;
  }).filter(function(n) {
    return n;
  });
}
function Ye(e) {
  if (e && Pe(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Ne.icon)
    return Ne.icon(e);
  if (e === null)
    return null;
  if (Pe(e) === "object" && e.prefix && e.iconName)
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
var ye = Le({
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
    var n = t.attrs, o = w(function() {
      return Ye(l.icon);
    }), s = w(function() {
      return xe("classes", Fl(l));
    }), a = w(function() {
      return xe("transform", typeof l.transform == "string" ? Ne.transform(l.transform) : l.transform);
    }), i = w(function() {
      return xe("mask", Ye(l.mask));
    }), r = w(function() {
      return ht(o.value, le(le(le(le({}, s.value), a.value), i.value), {}, {
        symbol: l.symbol,
        title: l.title
      }));
    });
    ge(r, function(f) {
      if (!f)
        return jl("Could not find one or more icon(s)", o.value, i.value);
    }, {
      immediate: !0
    });
    var c = w(function() {
      return r.value ? He(r.value.abstract[0], {}, n) : null;
    });
    return function() {
      return c.value;
    };
  }
});
Le({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(l, t) {
    var n = t.slots, o = nt.familyPrefix, s = w(function() {
      return ["".concat(o, "-layers")].concat(Ue(l.fixedWidth ? ["".concat(o, "-fw")] : []));
    });
    return function() {
      return lt("div", {
        class: s.value
      }, n.default ? n.default() : []);
    };
  }
});
Le({
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
    var n = t.attrs, o = nt.familyPrefix, s = w(function() {
      return xe("classes", [].concat(Ue(l.counter ? ["".concat(o, "-layers-counter")] : []), Ue(l.position ? ["".concat(o, "-layers-").concat(l.position)] : [])));
    }), a = w(function() {
      return xe("transform", typeof l.transform == "string" ? Ne.transform(l.transform) : l.transform);
    }), i = w(function() {
      var c = yt(l.value.toString(), le(le({}, a.value), s.value)), f = c.abstract;
      return l.counter && (f[0].attributes.class = f[0].attributes.class.replace("fa-layers-text", "")), f[0];
    }), r = w(function() {
      return He(i.value, {}, n);
    });
    return function() {
      return r.value;
    };
  }
});
$t.add(
  St,
  zt,
  kt,
  xt,
  wt,
  It,
  Et,
  At
);
const Wl = "zoa__dropdown__input", Kl = "zoa__dropdown__label", Xl = "zoa__dropdown__grid", Zl = "zoa__dropdown__wrapper", Yl = "zoa__dropdown__arrow", ql = {
  input: Wl,
  label: Kl,
  "label--right": "zoa__dropdown__label--right",
  "label--below": "zoa__dropdown__label--below",
  "label--above": "zoa__dropdown__label--above",
  "label--none": "zoa__dropdown__label--none",
  grid: Xl,
  "grid--above": "zoa__dropdown__grid--above",
  "grid--below": "zoa__dropdown__grid--below",
  "grid--left": "zoa__dropdown__grid--left",
  "grid--right": "zoa__dropdown__grid--right",
  wrapper: Zl,
  arrow: Yl
}, Jl = ["id"], Ql = ["for"], en = ["id"], tn = { value: null }, ln = ["value"], nn = {
  __name: "Dropdown",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: String
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
    const t = e, { componentId: n, subId: o } = J(), { addPropClasses: s } = W(t), a = w(() => {
      let r = [];
      return t.options.forEach((c) => {
        typeof c == "object" ? r.push({ label: c.label, value: c.value }) : r.push({ label: c, value: c });
      }), r;
    }), { value: i } = ne(l, t);
    return (r, c) => (x(), E("div", {
      class: b(g(s)([r.$style.grid, r.$style[`grid--${e.labelPosition}`]])),
      id: g(n)
    }, [
      e.label ? (x(), E("label", {
        key: 0,
        for: g(o)("dropdown"),
        class: b([r.$style.label, r.$style[`label--${e.labelPosition}`]])
      }, C(e.label), 11, Ql)) : H("", !0),
      A("div", {
        class: b(r.$style.wrapper)
      }, [
        ie(A("select", {
          id: g(o)("dropdown"),
          class: b(r.$style.input),
          "onUpdate:modelValue": c[0] || (c[0] = (f) => de(i) ? i.value = f : null)
        }, [
          A("option", tn, C(e.placeholder), 1),
          (x(!0), E(fe, null, be(a.value, (f) => (x(), E("option", {
            value: f.value
          }, C(f.label), 9, ln))), 256))
        ], 10, en), [
          [pt, g(i)]
        ]),
        q(g(ye), {
          icon: "fa-solid fa-caret-down",
          class: b(r.$style.arrow)
        }, null, 8, ["class"])
      ], 2)
    ], 10, Jl));
  }
}, an = {
  $style: ql
}, on = /* @__PURE__ */ K(nn, [["__cssModules", an]]), rn = "zoa__checkbox__input", sn = "zoa__checkbox__label", un = "zoa__checkbox__grid", cn = "zoa__checkbox__defaultCheckbox", dn = "zoa__checkbox__checkbox", fn = "zoa__checkbox__check", _n = {
  input: rn,
  label: sn,
  "label--right": "zoa__checkbox__label--right",
  "label--below": "zoa__checkbox__label--below",
  "label--above": "zoa__checkbox__label--above",
  "label--none": "zoa__checkbox__label--none",
  grid: un,
  "grid--above": "zoa__checkbox__grid--above",
  "grid--below": "zoa__checkbox__grid--below",
  "grid--left": "zoa__checkbox__grid--left",
  "grid--right": "zoa__checkbox__grid--right",
  "label--left": "zoa__checkbox__label--left",
  defaultCheckbox: cn,
  checkbox: dn,
  check: fn
}, bn = ["id", "for"], mn = ["id", "name", "value"], pn = {
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
    const t = e, { componentId: n, subId: o } = J(), { addPropClasses: s } = W(t), { value: a } = ne(l, t), i = T(null), r = T(null), c = ue(i), f = w(() => t.checkValue || t.label);
    return G(" ", () => {
      if (c.focused.value) {
        let d = et(a.value) ? tt(a.value) : a.value;
        if (Array.isArray(d)) {
          let u = !r.value.checked;
          d = d.filter((p) => p !== f.value), u && d.push(f.value), a.value = d, r.value.checked = u;
        } else
          a.value = !a.value;
      }
    }), (d, u) => (x(), E("label", {
      id: g(n),
      for: g(o)("checkbox"),
      class: b(g(s)([d.$style.grid, d.$style[`grid--${e.labelPosition}`]])),
      tabindex: "0",
      ref_key: "checkboxContainer",
      ref: i
    }, [
      e.label ? (x(), E("span", {
        key: 0,
        class: b([d.$style.label, d.$style[`label--${e.labelPosition}`]])
      }, C(e.label), 3)) : H("", !0),
      ie(A("input", {
        type: "checkbox",
        id: g(o)("checkbox"),
        class: b(d.$style.defaultCheckbox),
        "onUpdate:modelValue": u[0] || (u[0] = (p) => de(a) ? a.value = p : null),
        name: e.name,
        value: f.value,
        ref_key: "checkboxInput",
        ref: r
      }, null, 10, mn), [
        [Qe, g(a)]
      ]),
      A("span", {
        class: b(d.$style.checkbox)
      }, [
        q(g(ye), {
          icon: "fa-solid fa-check",
          class: b(d.$style.check)
        }, null, 8, ["class"])
      ], 2)
    ], 10, bn));
  }
}, gn = {
  $style: _n
}, Oe = /* @__PURE__ */ K(pn, [["__cssModules", gn]]);
function vn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function* hn(e, l, t = 0, n = null) {
  if (e.length === 0)
    return;
  n === null && (n = l.length);
  let s;
  for (; (s = l.indexOf(e, t)) > -1 && !(s + e.length > n); )
    yield s, t = s + 1;
}
function yn(e) {
  return e.split("").reverse().join("");
}
var $n = {
  searchExact: hn,
  reverse: yn
};
const { searchExact: ut, reverse: qe } = $n;
function Sn(e, l, t) {
  e.length > l.length && ([e, l] = [l, e]);
  const n = l.length - e.length;
  if (n > t)
    return !1;
  if (t === 0)
    return e === l;
  let o;
  for (o = 0; o < e.length && e[o] === l[o]; o++)
    ;
  if (o === e.length)
    return n <= t;
  let s;
  for (s = e.length - 1; s >= 0 && e[s] === l[s + n]; s--)
    ;
  e = e.slice(o, s + 1), l = l.slice(o, s + 1 + n);
  const [a, i] = Ce(e, l, t);
  return a + (l.length - i) <= t;
}
function zn(e, l) {
  e.length > l.length && ([e, l] = [l, e]);
  const t = new Array(e.length + 1);
  for (let s = 0; s <= e.length; s++)
    t[s] = s;
  let n, o;
  for (let s = 0; s < l.length; s++) {
    t[0] = s + 1, o = s;
    for (let a = 0; a < e.length; a++)
      n = t[a + 1], t[a + 1] = Math.min(
        o + +(e[a] !== l[s]),
        t[a] + 1,
        t[a + 1] + 1
      ), o = n;
  }
  return t[e.length];
}
function kn(e, l) {
  const t = {};
  for (let n = Math.min(e.length - 1, l); n >= 0; n--)
    t[e[n]] = n;
  return t;
}
function* xn(e, l, t) {
  if (e.length > l.length + t)
    return;
  const n = Math.floor(e.length / (t + 1));
  if (t === 0)
    for (const o of ut(e, l))
      yield {
        start: o,
        end: o + e.length,
        dist: 0
      };
  else
    n >= 10 ? yield* ct(e, l, t) : yield* dt(e, l, t);
}
function Ce(e, l, t) {
  t = +t;
  let n;
  for (n = 0; n < Math.min(e.length, l.length) && e.charCodeAt(n) === l.charCodeAt(n); n++)
    ;
  if (n && (e = e.slice(n), l = l.slice(n)), e) {
    if (!l)
      return e.length <= t ? [e.length, n] : [null, null];
  } else
    return [0, n];
  if (t === 0)
    return [null, null];
  let o = new Array(e.length + 1);
  for (let d = 0; d <= t; d++)
    o[d] = d;
  let s = new Array(e.length + 1), a = null, i = null, r = t, c = 0, f = e.length - 1;
  for (let d = 0; d < l.length; d++) {
    const u = l.charCodeAt(d), p = Math.max(0, c - 1), k = Math.min(
      d + t,
      e.length - 1,
      f
    );
    s[0] = o[0] + 1, c = s[0] <= r ? 0 : null, f = s[0] <= r ? 0 : -1;
    let I;
    for (I = p; I < k; I++) {
      const m = s[I + 1] = Math.min(
        o[I] + +(u !== e.charCodeAt(I)),
        o[I + 1] + 1,
        s[I] + 1
      );
      m <= r && (c === null && (c = I + 1), f = Math.max(
        f,
        I + 1 + (r - m)
      ));
    }
    const v = s[I + 1] = Math.min(
      o[I] + +(u !== e.charCodeAt(I)),
      s[I] + 1
    );
    if (v <= r && (c === null && (c = I + 1), f = I + 1), I === e.length - 1 && (a === null || v <= a) && (a = v, i = d, a < r && (r = a)), [o, s] = [s, o], c === null)
      break;
  }
  return a !== null && a <= t ? [a, i + 1 + n] : [null, null];
}
function* ct(e, l, t) {
  const n = Math.floor(e.length / (t + 1)), o = e.length, s = l.length;
  for (let a = 0; a <= e.length - n; a += n) {
    const i = e.slice(a, a + n), r = a + n, c = qe(e.slice(0, a)), f = e.slice(r), d = Math.max(0, a - t), u = Math.min(s, s - o + r + t);
    for (const p of ut(i, l, d, u)) {
      const [k, I] = Ce(
        f,
        l.slice(
          p + n,
          p - a + o + t
        ),
        t
      );
      if (k === null)
        continue;
      const [v, m] = Ce(
        c,
        qe(l.slice(
          Math.max(0, p - a - (t - k)),
          p
        )),
        t - k
      );
      v !== null && (yield {
        start: p - m,
        end: p + n + I,
        dist: v + k
      });
    }
  }
}
function* dt(e, l, t) {
  const n = e.length, o = l.length;
  if (n > o + t)
    return;
  const s = kn(e, t);
  let a = [], i = [];
  for (let r = 0; r < l.length; r++) {
    const c = l[r];
    a = i, i = [];
    const f = s[c];
    f !== void 0 && (f + 1 === n ? yield {
      start: r,
      end: r + 1,
      dist: f
    } : i.push({
      startIdx: r,
      needleIdx: f + 1,
      dist: f
    }));
    for (const d of a)
      if (e[d.needleIdx] === c)
        d.needleIdx + 1 === n ? yield {
          start: d.startIdx,
          end: r + 1,
          dist: d.dist
        } : i.push({
          startIdx: d.startIdx,
          needleIdx: d.needleIdx + 1,
          dist: d.dist
        });
      else {
        if (d.dist === t)
          continue;
        i.push({
          startIdx: d.startIdx,
          needleIdx: d.needleIdx,
          dist: d.dist + 1
        });
        for (let u = 1; u <= t - d.dist; u++)
          if (d.needleIdx + u === n) {
            yield {
              start: d.startIdx,
              end: r + 1,
              dist: d.dist + u
            };
            break;
          } else if (e[d.needleIdx + u] === c) {
            d.needleIdx + u + 1 === n ? yield {
              start: d.startIdx,
              end: r + 1,
              dist: d.dist + u
            } : i.push({
              startIdx: d.startIdx,
              needleIdx: d.needleIdx + 1 + u,
              dist: d.dist + u
            });
            break;
          }
        r + 1 < o && d.needleIdx + 1 < n && i.push({
          startIdx: d.startIdx,
          needleIdx: d.needleIdx + 1,
          dist: d.dist + 1
        });
      }
  }
  for (const r of i)
    r.dist += e.length - r.needleIdx, r.dist <= t && (yield {
      start: r.startIdx,
      end: l.length,
      dist: r.dist
    });
}
var wn = {
  _expand: Ce,
  editDistance: zn,
  fuzzySearch: xn,
  fuzzySearchNgrams: ct,
  fuzzySearchCandidates: dt,
  isEditDistanceNoGreaterThan: Sn
};
const { editDistance: In, fuzzySearch: En, isEditDistanceNoGreaterThan: An } = wn;
var On = {
  editDistance: In,
  fuzzySearch: En,
  isEditDistanceNoGreaterThan: An
};
const Tn = "zoa__multiselect__input", Nn = "zoa__multiselect__label", Rn = "zoa__multiselect__grid", Pn = "zoa__multiselect__wrapper", Cn = "zoa__multiselect__options", Mn = "zoa__multiselect__optlist", Dn = "zoa__multiselect__listItem", Un = "zoa__multiselect__option", Bn = "zoa__multiselect__selectAll", Vn = "zoa__multiselect__subgroup", Ln = "zoa__multiselect__noOptions", Hn = "zoa__multiselect__textboxWrapper", Gn = "zoa__multiselect__arrow", jn = {
  input: Tn,
  label: Nn,
  "label--right": "zoa__multiselect__label--right",
  "label--below": "zoa__multiselect__label--below",
  "label--above": "zoa__multiselect__label--above",
  "label--none": "zoa__multiselect__label--none",
  grid: Rn,
  "grid--above": "zoa__multiselect__grid--above",
  "grid--below": "zoa__multiselect__grid--below",
  "grid--left": "zoa__multiselect__grid--left",
  "grid--right": "zoa__multiselect__grid--right",
  wrapper: Pn,
  options: Cn,
  optlist: Mn,
  listItem: Dn,
  option: Un,
  selectAll: Bn,
  subgroup: Vn,
  noOptions: Ln,
  textboxWrapper: Hn,
  arrow: Gn
}, Fn = ["id"], Wn = ["for"], Kn = ["placeholder", "id"], Xn = ["title"], Zn = ["onClick"], Yn = { key: 1 }, Ee = 10, qn = {
  __name: "Multiselect",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: Array
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
    const t = e, { componentId: n, subId: o } = J(), { addPropClasses: s } = W(t), { value: a } = ne(l, t);
    Array.isArray(a) || (a.value = []);
    const i = T(null), r = Re((y) => {
      l("search", y);
    }, t.searchDelay), c = Re((y) => {
      i.value = y;
    }, t.searchDelay), f = w({
      get() {
        return i.value;
      },
      set(y) {
        c(y), r(y);
      }
    }), d = w(() => (a.value ? a.value.length !== 1 : !0) ? t.itemNamePlural || t.itemName + "s" : t.itemName), u = w(() => {
      let y = [];
      return t.options.forEach((S) => {
        typeof S == "object" ? y.push({
          label: S.label || S.value,
          value: S.value || S.label,
          group: S.group || null,
          order: S.order || null
        }) : y.push({ label: S, value: S, group: null });
      }), y.sort((S, z) => {
        let P;
        S.group === z.group ? P = 0 : !S.group || !z.group ? P = S.group ? 1 : -1 : P = S.group.localeCompare(z.group);
        let oe = 0;
        (S.order || z.order) && (oe = S.order && z.order ? S.order - z.order : S.order ? 1 : -1);
        let ee = S.label.localeCompare(z.label);
        return P !== 0 ? P : oe !== 0 ? oe : ee;
      }), y;
    }), p = w(() => {
      const y = t.enableSearch && f.value, S = y ? f.value.toLowerCase() : null, z = (L) => L ? [...On.fuzzySearch(S, L.toLowerCase(), 1)].length > 0 : !1;
      let P;
      y ? P = u.value.filter((L) => z(L.group) || z(L.label) || z(L.value)) : P = u.value;
      let oe = [], ee = Object.entries(
        Object.groupBy(P, ({ group: L }) => L)
      ), ve = S ? 2 : 1;
      return ee.forEach((L) => {
        let _e = L[0], Z = L[1];
        _e && _e !== "null" && (oe.push({
          ix: ve,
          kind: "group",
          label: _e,
          value: _e,
          group: _e
        }), ve += 1), oe = oe.concat(
          Z.map((Se, Me) => ({
            ix: ve + Me,
            kind: "option",
            label: Se.label,
            value: Se.value,
            group: Se.group
          }))
        ), ve += Z.length;
      }), oe;
    }), k = T(null), I = T(null), v = T(null), { y: m } = Xt(v), $ = w(() => !v.value || v.value && m.value !== v.value.scrollTop ? 0 : m.value), U = w(() => {
      try {
        return v.value.clientHeight;
      } catch {
        return 500;
      }
    }), O = w(() => p.value.length < Ee * 2 ? 0 : Math.floor($.value / t.itemHeight) - Ee), M = w(() => p.value.length < Ee * 2 ? p.value.length + Ee : Math.ceil(($.value + U.value) / t.itemHeight)), _ = T(!1), N = he(I), B = ue(v);
    function j() {
      _.value = !0, setTimeout(() => {
        I.value.focus();
      }, 50);
    }
    function F() {
      try {
        k.value.blur(), I.value.blur(), v.value.blur();
      } catch {
      }
      _.value = !1;
    }
    function X() {
      _.value ? F() : j();
    }
    rt(k, () => {
      F();
    }), G("ArrowDown", () => {
      if (u.value.length !== 0) {
        if (N.focused.value)
          v.value.children[0].children[0].children[0].focus();
        else if (B.focused.value) {
          const y = [...v.value.querySelectorAll("label")], S = v.value.querySelector("label:focus");
          if (!S)
            y[0].focus();
          else {
            const z = y.findIndex((P) => P === S);
            z === y.length - 1 ? y[0].focus() : y[z + 1].focus();
          }
        }
      }
    }), G("ArrowUp", () => {
      if (u.value.length !== 0 && B.focused.value) {
        const y = [...v.value.querySelectorAll("label")], S = v.value.querySelector("label:focus");
        if (!S)
          I.value.focus();
        else {
          const z = y.findIndex((P) => P === S);
          z === 0 ? I.value.focus() : y[z - 1].focus();
        }
      }
    }), G("Enter", () => {
      F();
    });
    const Q = w({
      get() {
        const y = u.value;
        return a.value.length !== y.length ? !1 : y.filter((z) => !a.value.includes(z.value)).length === 0;
      },
      set(y) {
        y ? a.value = u.value.map((S) => S.value) : a.value = [];
      }
    }), ae = w({
      get() {
        let y = p.value.filter((z) => z.kind === "option").map((z) => z.value);
        return a.value.length < y.length ? !1 : y.filter((z) => !a.value.includes(z)).length === 0;
      },
      set(y) {
        let S = p.value.filter((z) => z.kind === "option").map((z) => z.value);
        if (y) {
          const z = S.filter((P) => !a.value.includes(P));
          a.value = a.value.concat(z);
        } else
          a.value = a.value.filter((z) => !S.includes(z));
      }
    });
    function D(y) {
      const S = p.value.filter((P) => P.kind === "option" && P.group === y).map((P) => P.value), z = S.filter((P) => !a.value.includes(P));
      z.length > 0 ? z.forEach((P) => {
        a.value.push(P);
      }) : a.value = a.value.filter((P) => !S.includes(P));
    }
    return (y, S) => (x(), E("div", {
      class: b(g(s)([y.$style.grid, y.$style[`grid--${e.labelPosition}`]])),
      id: g(n)
    }, [
      e.label ? (x(), E("label", {
        key: 0,
        for: g(o)("textbox"),
        class: b([y.$style.label, y.$style[`label--${e.labelPosition}`]])
      }, C(e.label), 11, Wn)) : H("", !0),
      A("div", {
        class: b(y.$style.wrapper),
        ref_key: "container",
        ref: k
      }, [
        A("div", {
          class: b(y.$style.textboxWrapper)
        }, [
          ie(A("input", {
            type: "text",
            placeholder: e.placeholder,
            id: g(o)("search"),
            class: b(y.$style.input),
            "onUpdate:modelValue": S[0] || (S[0] = (z) => f.value = z),
            ref_key: "textbox",
            ref: I
          }, null, 10, Kn), [
            [$e, f.value],
            [Fe, _.value]
          ]),
          ie(A("div", {
            class: b(y.$style.input),
            tabindex: "0",
            onFocusin: j
          }, C(g(a) ? g(a).length : 0) + " " + C(d.value) + " selected ", 35), [
            [Fe, !_.value]
          ]),
          q(g(ye), {
            icon: "fa-solid fa-caret-down",
            class: b(y.$style.arrow),
            onClick: X
          }, null, 8, ["class"])
        ], 2),
        _.value ? (x(), E("div", {
          key: 0,
          class: b(y.$style.options),
          ref_key: "dropdown",
          ref: v
        }, [
          u.value.length > 0 ? (x(), E("ul", {
            key: 0,
            class: b(y.$style.optlist)
          }, [
            A("li", {
              title: "Select all",
              class: b([y.$style.selectAll, y.$style.listItem, y.$style.option]),
              style: ze({ height: `${e.itemHeight}px` })
            }, [
              q(Oe, {
                label: "Select all",
                "label-position": "right",
                modelValue: Q.value,
                "onUpdate:modelValue": S[1] || (S[1] = (z) => Q.value = z)
              }, null, 8, ["modelValue"])
            ], 6),
            i.value ? (x(), E("li", {
              key: 0,
              title: "Select results",
              class: b([y.$style.selectAll, y.$style.listItem, y.$style.option]),
              style: ze({ height: `${e.itemHeight}px` })
            }, [
              q(Oe, {
                label: "Select results",
                "label-position": "right",
                modelValue: ae.value,
                "onUpdate:modelValue": S[2] || (S[2] = (z) => ae.value = z)
              }, null, 8, ["modelValue"])
            ], 6)) : H("", !0),
            (x(!0), E(fe, null, be(p.value, (z) => (x(), E("li", {
              title: z.label,
              class: b([
                y.$style.listItem,
                z.kind === "group" ? y.$style.subgroup : y.$style.option
              ]),
              style: ze({ height: `${e.itemHeight}px` })
            }, [
              z.kind === "group" ? (x(), E("div", {
                key: 0,
                onClick: (P) => D(z.group)
              }, C(z.label), 9, Zn)) : (x(), E("div", Yn, [
                z.ix >= O.value && z.ix <= M.value ? (x(), Ae(Oe, {
                  key: 0,
                  label: z.label,
                  "label-position": "right",
                  "check-value": z.value,
                  name: g(o)("checkboxes"),
                  modelValue: g(a),
                  "onUpdate:modelValue": S[3] || (S[3] = (P) => de(a) ? a.value = P : null)
                }, null, 8, ["label", "check-value", "name", "modelValue"])) : H("", !0)
              ]))
            ], 14, Xn))), 256))
          ], 2)) : (x(), E("div", {
            key: 1,
            class: b(y.$style.noOptions)
          }, "No options found", 2))
        ], 2)) : H("", !0)
      ], 2)
    ], 10, Fn));
  }
}, Jn = {
  $style: jn
}, Qn = /* @__PURE__ */ K(qn, [["__cssModules", Jn]]), ea = "zoa__number__input", ta = "zoa__number__label", la = "zoa__number__grid", na = {
  input: ea,
  label: ta,
  "label--right": "zoa__number__label--right",
  "label--below": "zoa__number__label--below",
  "label--above": "zoa__number__label--above",
  "label--none": "zoa__number__label--none",
  grid: la,
  "grid--above": "zoa__number__grid--above",
  "grid--below": "zoa__number__grid--below",
  "grid--left": "zoa__number__grid--left",
  "grid--right": "zoa__number__grid--right"
}, aa = ["id"], oa = ["for"], ra = ["placeholder", "min", "max", "step", "id"], sa = {
  __name: "Number",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: Number
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
    const t = e, { componentId: n, subId: o } = J(), { addPropClasses: s } = W(t), { value: a } = ne(l, t);
    return (i, r) => (x(), E("div", {
      class: b(g(s)([i.$style.grid, i.$style[`grid--${e.labelPosition}`]])),
      id: g(n)
    }, [
      e.label ? (x(), E("label", {
        key: 0,
        for: g(o)("number"),
        class: b([i.$style.label, i.$style[`label--${e.labelPosition}`]])
      }, C(e.label), 11, oa)) : H("", !0),
      ie(A("input", {
        type: "number",
        placeholder: e.placeholder,
        min: e.min,
        max: e.max,
        step: e.step,
        id: g(o)("number"),
        class: b(i.$style.input),
        "onUpdate:modelValue": r[0] || (r[0] = (c) => de(a) ? a.value = c : null)
      }, null, 10, ra), [
        [$e, g(a)]
      ])
    ], 10, aa));
  }
}, ia = {
  $style: na
}, Te = /* @__PURE__ */ K(sa, [["__cssModules", ia]]), ua = "zoa__datesimple__input", ca = "zoa__datesimple__label", da = "zoa__datesimple__grid", fa = {
  input: ua,
  label: ca,
  "label--right": "zoa__datesimple__label--right",
  "label--below": "zoa__datesimple__label--below",
  "label--above": "zoa__datesimple__label--above",
  "label--none": "zoa__datesimple__label--none",
  grid: da,
  "grid--above": "zoa__datesimple__grid--above",
  "grid--below": "zoa__datesimple__grid--below",
  "grid--left": "zoa__datesimple__grid--left",
  "grid--right": "zoa__datesimple__grid--right"
}, _a = ["id"], ba = ["for"], ma = ["placeholder", "min", "max", "step", "id"], pa = {
  __name: "DateSimple",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: Object
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
    const t = e, { componentId: n, subId: o } = J(), { addPropClasses: s } = W(t), { value: a } = ne(l, t);
    return (i, r) => (x(), E("div", {
      class: b(g(s)([i.$style.grid, i.$style[`grid--${e.labelPosition}`]])),
      id: g(n)
    }, [
      e.label ? (x(), E("label", {
        key: 0,
        for: g(o)("date"),
        class: b([i.$style.label, i.$style[`label--${e.labelPosition}`]])
      }, C(e.label), 11, ba)) : H("", !0),
      ie(A("input", {
        type: "date",
        placeholder: e.placeholder,
        min: e.min,
        max: e.max,
        step: e.step,
        id: g(o)("date"),
        class: b(i.$style.input),
        "onUpdate:modelValue": r[0] || (r[0] = (c) => de(a) ? a.value = c : null)
      }, null, 10, ma), [
        [$e, g(a)]
      ])
    ], 10, _a));
  }
}, ga = {
  $style: fa
}, va = /* @__PURE__ */ K(pa, [["__cssModules", ga]]);
var ha = {
  __locale: "en",
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  abbreviated_days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  abbreviated_months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  am: "AM",
  pm: "PM"
}, ya = ha;
const Je = /* @__PURE__ */ vn(ya), $a = "zoa__dateambiguous__input", Sa = "zoa__dateambiguous__label", za = "zoa__dateambiguous__grid", ka = "zoa__dateambiguous__inputContainer", xa = "zoa__dateambiguous__datePopup", wa = "zoa__dateambiguous__popupSection", Ia = "zoa__dateambiguous__yearGrid", Ea = "zoa__dateambiguous__monthGrid", Aa = "zoa__dateambiguous__dayGrid", Oa = "zoa__dateambiguous__editing", Ta = "zoa__dateambiguous__suggestion", Na = {
  input: $a,
  label: Sa,
  "label--right": "zoa__dateambiguous__label--right",
  "label--below": "zoa__dateambiguous__label--below",
  "label--above": "zoa__dateambiguous__label--above",
  "label--none": "zoa__dateambiguous__label--none",
  grid: za,
  "grid--above": "zoa__dateambiguous__grid--above",
  "grid--below": "zoa__dateambiguous__grid--below",
  "grid--left": "zoa__dateambiguous__grid--left",
  "grid--right": "zoa__dateambiguous__grid--right",
  inputContainer: ka,
  datePopup: xa,
  popupSection: wa,
  yearGrid: Ia,
  monthGrid: Ea,
  dayGrid: Aa,
  editing: Oa,
  suggestion: Ta
}, Ra = ["id"], Pa = ["for"], Ca = ["placeholder", "id"], Ma = ["onClick", "onKeydown"], Da = {
  __name: "DateAmbiguous",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: Object
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
    const t = e, n = () => import("./dates-4a3107c5.js"), { componentId: o, subId: s } = J(), { addPropClasses: a } = W(t), { valueChanged: i } = ne(l, t.delay), r = T(null), c = T(!1), f = T(null), { focused: d } = ue(f), u = T(null), p = T(null), k = T(null), I = he(u), v = ue(u), m = he(p), $ = ue(p), U = he(k), O = ue(k), M = w(() => {
      let h;
      return I.focused.value ? h = u.value : m.focused.value ? h = p.value : U.focused.value && (h = k.value), h;
    }), _ = w(() => {
      let h;
      return v.focused.value ? h = u.value : $.focused.value ? h = p.value : O.focused.value && (h = k.value), h;
    });
    G("Enter", () => {
      M && M.value.children[0].focus();
    }), G("ArrowLeft", () => {
      if (!_.value)
        return;
      const h = _.value.querySelector("button:focus");
      !h || !h.previousElementSibling ? _.value.children[_.value.children.length - 1].focus() : h.previousElementSibling.focus();
    }), G("ArrowRight", () => {
      if (!_.value)
        return;
      const h = _.value.querySelector("button:focus");
      !h || !h.nextElementSibling ? _.value.children[0].focus() : h.nextElementSibling.focus();
    }), G("Escape", () => {
      const h = f.value.querySelector("*:focus");
      h && h.blur();
    });
    const N = w(() => ({
      year: S.value,
      month: ee.value,
      day: Z.value
    })), B = w(() => Ge(
      N.value.year,
      N.value.month,
      N.value.day
    ));
    function j() {
      r.value.value = B.value, c.value = !1;
    }
    const F = T([]);
    function X(h) {
      c.value = !0, n().then((V) => {
        F.value = V.parseDate(h.target.value);
      });
    }
    const Q = Re(X, 200);
    function ae(h) {
      D.value = h.year, ee.value = h.month, Z.value = h.day, F.value = [];
    }
    const D = T(null), y = w(() => {
      let h = 11;
      return D.value && D.value >= 1e3 ? h = Math.floor(D.value / 10) * 10 : D.value && D.value < 1e3 && (h = D.value * 10), Array(10).fill(h).map((V, R) => V + R);
    }), S = w(() => {
      if (!D.value)
        return null;
      if (D.value >= 1e3)
        return D.value;
      let h = 10 ** (4 - D.value.toString().length);
      return D.value * h;
    }), z = w(() => S.value % 100 === 0 ? S.value % 400 === 0 : S.value % 4 === 0);
    function P(h) {
      return h.toString().padEnd(4, "0");
    }
    function oe(h) {
      D.value = h, Z.value && Z.value > L.value && (Z.value = L.value);
    }
    const ee = T(null), ve = T(Je.abbreviated_months), L = w(() => [4, 6, 9, 11].includes(ee.value) ? 30 : ee.value === 2 ? z.value ? 29 : 28 : 31);
    function _e(h) {
      ee.value = h, Z.value && Z.value > L.value && (Z.value = L.value);
    }
    const Z = T(null), Se = w(() => Array(L.value).fill(1).map((h, V) => V + 1));
    function Me(h) {
      Z.value = h;
    }
    function Ge(h, V, R) {
      const re = Je.abbreviated_months[V - 1];
      return h && V && R ? `${R} ${re} ${h}` : h && V ? `${re} ${h}` : h && R ? `${R} ??? ${h}` : V && R ? `${R} ${re}` : h || (V ? re : R ? `day ${R}` : null);
    }
    return ge(N, () => {
      j(), i(N.value);
    }), (h, V) => (x(), E("div", {
      class: b(g(a)([h.$style.grid, h.$style[`grid--${e.labelPosition}`]])),
      id: g(o),
      ref_key: "container",
      ref: f
    }, [
      e.label ? (x(), E("label", {
        key: 0,
        for: g(s)("date"),
        class: b([h.$style.label, h.$style[`label--${e.labelPosition}`]])
      }, C(e.label), 11, Pa)) : H("", !0),
      A("div", {
        class: b(h.$style.inputContainer)
      }, [
        A("input", {
          type: "text",
          placeholder: e.placeholder,
          id: g(s)("date"),
          class: b([h.$style.input, c.value ? h.$style.editing : ""]),
          ref_key: "displayBox",
          ref: r,
          onInput: V[0] || (V[0] = (...R) => g(Q) && g(Q)(...R))
        }, null, 42, Ca),
        g(d) ? (x(), E("div", {
          key: 0,
          class: b(h.$style.datePopup)
        }, [
          F.value.length > 0 ? (x(), E("div", {
            key: 0,
            class: b(h.$style.popupSection)
          }, [
            (x(!0), E(fe, null, be(F.value, (R) => (x(), E("span", {
              onClick: (re) => ae(R),
              onKeydown: gt((re) => ae(R), ["enter"]),
              class: b(h.$style.suggestion),
              tabindex: "0"
            }, C(Ge(R.year, R.month, R.day)), 43, Ma))), 256))
          ], 2)) : H("", !0),
          A("div", {
            class: b(h.$style.popupSection)
          }, [
            q(Te, {
              label: "year",
              "label-position": "left",
              placeholder: 1900,
              modelValue: D.value,
              "onUpdate:modelValue": V[1] || (V[1] = (R) => D.value = R),
              min: 0,
              max: 9999
            }, null, 8, ["modelValue"]),
            A("div", {
              class: b(h.$style.yearGrid),
              tabindex: "0",
              ref_key: "yearBtns",
              ref: u
            }, [
              (x(!0), E(fe, null, be(y.value, (R) => (x(), Ae(ke, {
                size: "sm",
                onClick: (re) => oe(R),
                tabindex: "-1"
              }, {
                default: De(() => [
                  pe(C(P(R)), 1)
                ]),
                _: 2
              }, 1032, ["onClick"]))), 256))
            ], 2)
          ], 2),
          A("div", {
            class: b(h.$style.popupSection)
          }, [
            q(Te, {
              label: "month",
              "label-position": "left",
              placeholder: 1,
              modelValue: ee.value,
              "onUpdate:modelValue": V[2] || (V[2] = (R) => ee.value = R),
              min: 1,
              max: 12
            }, null, 8, ["modelValue"]),
            A("div", {
              class: b(h.$style.monthGrid),
              tabindex: "0",
              ref_key: "monthBtns",
              ref: p
            }, [
              (x(!0), E(fe, null, be(ve.value, (R, re) => (x(), Ae(ke, {
                size: "sm",
                onClick: (Uo) => _e(re + 1),
                tabindex: "-1"
              }, {
                default: De(() => [
                  pe(C(R), 1)
                ]),
                _: 2
              }, 1032, ["onClick"]))), 256))
            ], 2)
          ], 2),
          A("div", {
            class: b(h.$style.popupSection)
          }, [
            q(Te, {
              label: "day",
              "label-position": "left",
              placeholder: 1,
              modelValue: Z.value,
              "onUpdate:modelValue": V[3] || (V[3] = (R) => Z.value = R),
              min: 1,
              max: L.value
            }, null, 8, ["modelValue", "max"]),
            A("div", {
              class: b(h.$style.dayGrid),
              tabindex: "0",
              ref_key: "dayBtns",
              ref: k
            }, [
              (x(!0), E(fe, null, be(Se.value, (R) => (x(), Ae(ke, {
                size: "sm",
                onClick: (re) => Me(R),
                tabindex: "-1"
              }, {
                default: De(() => [
                  pe(C(R), 1)
                ]),
                _: 2
              }, 1032, ["onClick"]))), 256))
            ], 2)
          ], 2)
        ], 2)) : H("", !0)
      ], 2)
    ], 10, Ra));
  }
}, Ua = {
  $style: Na
}, Ba = /* @__PURE__ */ K(Da, [["__cssModules", Ua]]), Va = "zoa__slider__input", La = "zoa__slider__label", Ha = "zoa__slider__grid", Ga = "zoa__slider__slider", ja = "zoa__slider__track", Fa = "zoa__slider__valueLabel", Wa = {
  input: Va,
  label: La,
  "label--right": "zoa__slider__label--right",
  "label--below": "zoa__slider__label--below",
  "label--above": "zoa__slider__label--above",
  "label--none": "zoa__slider__label--none",
  grid: Ha,
  "grid--above": "zoa__slider__grid--above",
  "grid--below": "zoa__slider__grid--below",
  "grid--left": "zoa__slider__grid--left",
  "grid--right": "zoa__slider__grid--right",
  "wrapper--value-label-below": "zoa__slider__wrapper--value-label-below",
  "wrapper--value-label-above": "zoa__slider__wrapper--value-label-above",
  slider: Ga,
  track: ja,
  "track--active": "zoa__slider__track--active",
  valueLabel: Fa,
  "valueLabel--below": "zoa__slider__valueLabel--below",
  "valueLabel--above": "zoa__slider__valueLabel--above"
}, Ka = ["id"], Xa = ["for"], Za = ["min", "max", "step", "id"], Ya = {
  __name: "Slider",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: Number
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
    const t = e, { componentId: n, subId: o } = J(), { addPropClasses: s } = W(t), { value: a } = ne(l, t), i = T(null), r = T(null), c = w(() => t.validMin ? Math.max(Number(t.validMin), Number(t.min)) : Number(t.min)), f = w(() => t.validMax ? Math.min(Number(t.validMax), Number(t.max)) : Number(t.max)), d = ue(i), u = he(r), p = w(() => a.value < c.value ? c.value : a.value > f.value ? f.value : a.value), k = w(() => t.activeTrackRight ? { left: `${v.value.handle}%` } : { right: `${100 - v.value.handle}%` }), I = w(() => (a.value - t.min) / (t.max - t.min)), v = w(() => m());
    function m() {
      try {
        const _ = i.value.clientWidth, N = 24;
        r.value && (r.value.innerText = p.value);
        const B = r.value ? r.value.clientWidth : 0, j = _ / 2, Q = (I.value * _ - j) / j * (N / 2), ae = Q + B / 2, D = Q / _;
        return {
          handle: ((I.value - D) * 100).toFixed(2),
          label: ((I.value - ae / _) * 100).toFixed(2)
        };
      } catch {
        const _ = I.value * 100;
        return { handle: _.toFixed(2), label: _.toFixed(2) };
      }
    }
    function $() {
      if (t.placeholder !== null && t.placeholder !== void 0)
        return t.placeholder;
      let N = (t.max - t.min) / (1 / t.placeholderPosition), B = N % t.step;
      return N - B + t.min;
    }
    function U() {
      if (a.value === t.max)
        return;
      let _ = Number(a.value) + Number(t.step);
      _ > t.max ? a.value = t.max : a.value = _;
    }
    function O() {
      if (a.value === t.min)
        return;
      let _ = Number(a.value) - Number(t.step);
      _ < t.min ? a.value = t.min : a.value = _;
    }
    function M(_) {
      _.preventDefault(), _.wheelDelta > 0 ? U() : _.wheelDelta < 0 && O();
    }
    return G("ArrowDown", (_) => {
      _.preventDefault(), (d.focused.value || u.focused.value) && O();
    }), G("ArrowLeft", (_) => {
      _.preventDefault(), (d.focused.value || u.focused.value) && O();
    }), G("ArrowUp", (_) => {
      _.preventDefault(), (d.focused.value || u.focused.value) && U();
    }), G("ArrowRight", (_) => {
      _.preventDefault(), (d.focused.value || u.focused.value) && U();
    }), ge(a, (_) => {
      Number(_) >= Number(f.value) && (a.value = f.value), Number(_) <= Number(c.value) && (a.value = c.value);
    }), a.value = $(), (_, N) => (x(), E("div", {
      class: b(
        g(s)([
          _.$style.grid,
          _.$style[`grid--${e.labelPosition}`],
          _.$style[`wrapper--value-label-${e.valueLabelPosition}`]
        ])
      ),
      id: g(n)
    }, [
      e.label ? (x(), E("label", {
        key: 0,
        class: b([_.$style.label, _.$style[`label--${e.labelPosition}`]]),
        for: g(o)("slider")
      }, C(e.label), 11, Xa)) : H("", !0),
      A("div", {
        class: b(_.$style.slider),
        onWheel: M
      }, [
        A("span", {
          class: b(_.$style.track)
        }, null, 2),
        A("span", {
          class: b([_.$style.track, _.$style["track--active"]]),
          style: ze(k.value)
        }, null, 6),
        A("span", {
          class: b([
            _.$style.valueLabel,
            _.$style[`valueLabel--${e.valueLabelPosition}`]
          ]),
          style: ze({ left: `${v.value.label}%` }),
          ref_key: "valueLabel",
          ref: r,
          tabindex: "0"
        }, C(p.value), 7),
        ie(A("input", {
          type: "range",
          min: e.min,
          max: e.max,
          step: e.step,
          id: g(o)("slider"),
          class: b(_.$style.input),
          "onUpdate:modelValue": N[0] || (N[0] = (B) => de(a) ? a.value = B : null),
          ref_key: "slider",
          ref: i
        }, null, 10, Za), [
          [$e, g(a)]
        ])
      ], 34)
    ], 10, Ka));
  }
}, qa = {
  $style: Wa
}, Ve = /* @__PURE__ */ K(Ya, [["__cssModules", qa]]), Ja = "zoa__rangeslider__input", Qa = "zoa__rangeslider__label", eo = "zoa__rangeslider__grid", to = {
  input: Ja,
  label: Qa,
  "label--right": "zoa__rangeslider__label--right",
  "label--below": "zoa__rangeslider__label--below",
  "label--above": "zoa__rangeslider__label--above",
  "label--none": "zoa__rangeslider__label--none",
  grid: eo,
  "grid--above": "zoa__rangeslider__grid--above",
  "grid--below": "zoa__rangeslider__grid--below",
  "grid--left": "zoa__rangeslider__grid--left",
  "grid--right": "zoa__rangeslider__grid--right"
}, lo = ["id"], no = {
  __name: "RangeSlider",
  props: {
    /**
     * @model
     */
    modelValue: {
      type: Array
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
    const t = e, { componentId: n, subId: o } = J(), { addPropClasses: s } = W(t), { valueChanged: a } = ne(l, t), i = T(null), r = T(null), c = w(() => Math.max(
      Number(r.value) - Number(t.step),
      Number(t.min)
    )), f = w(() => Math.min(
      Number(i.value) + Number(t.step),
      Number(t.max)
    )), d = w(() => {
      const u = Math.min(i.value, c.value), p = Math.max(r.value, f.value);
      return [u, p];
    });
    return ge(d, () => {
      a(d.value);
    }), (u, p) => (x(), E("div", {
      class: b(g(s)([u.$style.grid, u.$style[`grid--${e.labelPosition}`]])),
      id: g(n)
    }, [
      e.label ? (x(), E("span", {
        key: 0,
        class: b([u.$style.label, u.$style[`label--${e.labelPosition}`]])
      }, C(e.label), 3)) : H("", !0),
      A("div", null, [
        q(Ve, {
          min: e.min,
          max: e.max,
          "valid-max": c.value,
          step: e.step,
          modelValue: i.value,
          "onUpdate:modelValue": p[0] || (p[0] = (k) => i.value = k),
          label: e.labelLower,
          "label-position": e.labelsRight ? "right" : "left",
          "value-label-position": "above",
          "placeholder-position": 0.25
        }, null, 8, ["min", "max", "valid-max", "step", "modelValue", "label", "label-position"]),
        q(Ve, {
          min: e.min,
          "valid-min": f.value,
          max: e.max,
          step: e.step,
          modelValue: r.value,
          "onUpdate:modelValue": p[1] || (p[1] = (k) => r.value = k),
          label: e.labelUpper,
          "label-position": e.labelsRight ? "right" : "left",
          "placeholder-position": 0.75,
          "active-track-right": !0
        }, null, 8, ["min", "valid-min", "max", "step", "modelValue", "label", "label-position"])
      ])
    ], 10, lo));
  }
}, ao = {
  $style: to
}, oo = /* @__PURE__ */ K(no, [["__cssModules", ao]]), ro = "zoa__empty__input", so = "zoa__empty__label", io = "zoa__empty__grid", uo = "zoa__empty__emptyGrid", co = {
  input: ro,
  label: so,
  "label--right": "zoa__empty__label--right",
  "label--below": "zoa__empty__label--below",
  "label--above": "zoa__empty__label--above",
  "label--none": "zoa__empty__label--none",
  grid: io,
  "grid--above": "zoa__empty__grid--above",
  "grid--below": "zoa__empty__grid--below",
  "grid--left": "zoa__empty__grid--left",
  "grid--right": "zoa__empty__grid--right",
  emptyGrid: uo
}, fo = ["id"], _o = {
  __name: "Empty",
  props: {
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
      default: "Empty"
    },
    /**
     * Position of the input label (or none).
     * @values left, right, above, below, none
     */
    labelPosition: {
      type: String,
      default: "above"
    },
    gridClass: {
      type: [String, null],
      default: null
    }
  },
  setup(e) {
    const l = e, { componentId: t, subId: n } = J(), { addPropClasses: o } = W(l);
    return (s, a) => (x(), E("div", {
      class: b(g(o)([s.$style.grid, s.$style[`grid--${e.labelPosition}`]])),
      id: g(t)
    }, [
      e.label ? (x(), E("label", {
        key: 0,
        class: b([s.$style.label, s.$style[`label--${e.labelPosition}`]])
      }, C(e.label), 3)) : H("", !0),
      A("div", {
        class: b(e.gridClass || s.$style.emptyGrid)
      }, [
        we(s.$slots, "default")
      ], 2)
    ], 10, fo));
  }
}, bo = {
  $style: co
}, mo = /* @__PURE__ */ K(_o, [["__cssModules", bo]]);
function ft(e) {
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
const po = "zoa__flash__main", go = "zoa__flash__container", vo = "zoa__flash__header", ho = "zoa__flash__icon", yo = {
  main: po,
  container: go,
  header: vo,
  icon: ho,
  "kind--info": "zoa__flash__kind--info",
  "kind--warning": "zoa__flash__kind--warning",
  "kind--error": "zoa__flash__kind--error",
  "kind--success": "zoa__flash__kind--success"
}, $o = {
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
    const l = e, { icon: t } = ft(l), { addPropClasses: n } = W(l);
    return (o, s) => (x(), E("div", {
      class: b(
        g(n)([o.$style.main, o.$style.container, o.$style[`kind--${e.kind}`]])
      )
    }, [
      A("div", {
        class: b(o.$style.header)
      }, [
        q(g(ye), {
          icon: ["fa-solid", g(t)],
          class: b(o.$style.icon)
        }, null, 8, ["icon", "class"]),
        A("h2", null, C(e.header), 1)
      ], 2),
      A("div", {
        class: b(o.$style.content)
      }, [
        we(o.$slots, "default", {}, () => [
          pe(C(e.message), 1)
        ])
      ], 2)
    ], 2));
  }
}, So = {
  $style: yo
}, zo = /* @__PURE__ */ K($o, [["__cssModules", So]]), ko = "zoa__modal__main", xo = "zoa__modal__container", wo = "zoa__modal__header", Io = "zoa__modal__icon", Eo = "zoa__modal__form", Ao = "zoa__modal__close", Oo = "zoa__modal__content", To = {
  main: ko,
  container: xo,
  header: wo,
  icon: Io,
  "kind--info": "zoa__modal__kind--info",
  "kind--warning": "zoa__modal__kind--warning",
  "kind--error": "zoa__modal__kind--error",
  "kind--success": "zoa__modal__kind--success",
  form: Eo,
  close: Ao,
  content: Oo
}, No = {
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
  setup(e, { emit: l }) {
    const t = e, { icon: n } = ft(t), { addPropClasses: o } = W(t), s = T(null);
    function a() {
      s.value.show(), l("opened");
    }
    return (i, r) => (x(), E(fe, null, [
      q(g(ke), vt(e.buttonArgs, { onClick: a }), null, 16),
      A("dialog", {
        ref_key: "modal",
        ref: s,
        class: b(g(o)([i.$style.main, i.$style[`kind--${e.kind}`]]))
      }, [
        A("div", {
          class: b(i.$style.container)
        }, [
          A("form", {
            method: "dialog",
            class: b(i.$style.form),
            onSubmit: r[0] || (r[0] = (c) => l("closed"))
          }, [
            A("button", {
              class: b(i.$style.close)
            }, [
              q(g(ye), { icon: "fa-solid fa-xmark" })
            ], 2)
          ], 34),
          A("div", {
            class: b(i.$style.header)
          }, [
            q(g(ye), {
              icon: ["fa-solid", g(n)],
              class: b(i.$style.icon)
            }, null, 8, ["icon", "class"]),
            A("h2", null, C(e.header), 1)
          ], 2),
          A("div", {
            class: b(i.$style.content)
          }, [
            we(i.$slots, "default", {}, () => [
              pe(C(e.message), 1)
            ])
          ], 2)
        ], 2)
      ], 2)
    ], 64));
  }
}, Ro = {
  $style: To
}, Po = /* @__PURE__ */ K(No, [["__cssModules", Ro]]), Co = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ZoaAutocompleteTextbox: Nl,
  ZoaButton: ke,
  ZoaCheckbox: Oe,
  ZoaDateAmbiguous: Ba,
  ZoaDateSimple: va,
  ZoaDropdown: on,
  ZoaEmpty: mo,
  ZoaFlash: zo,
  ZoaModal: Po,
  ZoaMultiselect: Qn,
  ZoaNumber: Te,
  ZoaRangeSlider: oo,
  ZoaSlider: Ve,
  ZoaTextbox: ml,
  ZoaToggleButton: ol
}, Symbol.toStringTag, { value: "Module" })), Mo = new RegExp("[A-Z]+(?![a-z])|[A-Z]", "g");
function Do(e) {
  return e.replace(Mo, (l, t) => (t ? "-" : "") + l.toLowerCase());
}
const Ho = {
  install(e, l) {
    Object.entries(Co).forEach((t) => {
      const n = Do(t[0]);
      e.component(n, t[1]);
    });
  }
};
export {
  Nl as A,
  on as D,
  mo as E,
  zo as F,
  Qn as M,
  oo as R,
  ol as T,
  Ho as Z,
  ke as a,
  ml as b,
  Oe as c,
  Je as d,
  Te as e,
  va as f,
  vn as g,
  Ba as h,
  Ve as i,
  Po as j
};
