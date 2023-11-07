import { openBlock as O, createElementBlock as E, normalizeClass as p, unref as g, renderSlot as Ce, createTextVNode as me, toDisplayString as D, ref as N, computed as I, watch as ve, customRef as _t, getCurrentScope as bt, onScopeDispose as pt, reactive as je, withDirectives as ie, createElementVNode as T, isRef as de, vModelCheckbox as Qe, isProxy as et, toRaw as tt, createCommentVNode as j, vModelText as $e, Fragment as fe, renderList as be, defineComponent as Le, h as lt, vModelSelect as mt, createVNode as Y, vShow as Fe, normalizeStyle as ze, createBlock as Ee, withKeys as vt, withCtx as De, mergeProps as gt } from "vue";
import { parse as Ne, icon as ht, config as nt, text as yt, library as $t } from "@fortawesome/fontawesome-svg-core";
import { faCircleXmark as St, faXmark as zt, faCircleInfo as kt, faCircleExclamation as It, faCircleCheck as wt, faCircleQuestion as Ot, faCheck as Et, faCaretDown as Tt } from "@fortawesome/free-solid-svg-icons";
function q(e) {
  function l(t) {
    return t = t || [], e.class && Array.isArray(e.class) ? t = t.concat(e.class) : e.class && t.push(e.class), t;
  }
  return { addPropClasses: l };
}
const At = "zoa__7U7z2__main", Nt = "zoa__FjtIS__checkbox", xt = {
  main: At,
  "kind--normal": "zoa__wSMFS__kind--normal",
  checkbox: Nt,
  "kind--primary": "zoa__MVt5D__kind--primary",
  "kind--alt": "zoa__AO4jQ__kind--alt",
  "size--sm": "zoa__Fg-Hw__size--sm",
  "size--md": "zoa__We5yW__size--md"
}, Z = (e, l) => {
  const t = e.__vccOpts || e;
  for (const [n, o] of l)
    t[n] = o;
  return t;
}, Pt = {
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
    const l = e, { addPropClasses: t } = q(l);
    return (n, o) => (O(), E("button", {
      class: p(
        g(t)([
          n.$style.main,
          n.$style[`kind--${e.kind}`],
          n.$style[`size--${e.size}`]
        ])
      )
    }, [
      Ce(n.$slots, "default", {}, () => [
        me(D(e.label), 1)
      ])
    ], 2));
  }
}, Rt = {
  $style: xt
}, ke = /* @__PURE__ */ Z(Pt, [["__cssModules", Rt]]);
let Ct = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((l, t) => (t &= 63, t < 36 ? l += t.toString(36) : t < 62 ? l += (t - 26).toString(36).toUpperCase() : t > 62 ? l += "-" : l += "_", l), "");
function le() {
  const e = N(Ct(6));
  function l(t) {
    return `${e.value}__${t}`;
  }
  return { componentId: e, subId: l };
}
const { now: We } = Date, xe = (e, l = 1, t) => {
  l = Math.max(1, l);
  const n = (t == null ? void 0 : t.leading) ?? !1, o = (t == null ? void 0 : t.trailing) ?? !0, s = Math.max((t == null ? void 0 : t.maxWait) ?? 1 / 0, l);
  let a, i, r = 0, c = 0;
  const f = () => {
    const A = We(), C = A - r, _ = A - c, x = C >= l || _ >= s;
    return [A, x];
  }, d = (A) => {
    if (c = A, !a)
      return;
    const C = a;
    a = void 0, e.apply(void 0, C);
  }, u = () => {
    $(0);
  }, m = () => {
    i && (u(), d(We()));
  }, k = (A) => {
    if (c = A, n)
      return d(A);
  }, w = (A) => {
    if (o && a)
      return d(A);
    a = void 0;
  }, v = () => {
    i = void 0;
    const [A, C] = f();
    return C ? w(A) : b(A);
  }, b = (A) => {
    const C = A - r, _ = A - c, x = l - C, U = s - _, G = Math.min(x, U);
    return $(G);
  }, $ = (A) => {
    i && clearTimeout(i), !(A <= 0) && (i = setTimeout(v, A));
  }, V = (...A) => {
    const [C, _] = f(), x = !!i;
    if (a = A, r = C, (_ || !i) && $(l), _)
      return x ? d(C) : k(C);
  };
  return V.cancel = u, V.flush = m, V;
};
function ne(e, l) {
  let t;
  try {
    t = parseInt(l.delay) || 0;
  } catch {
    t = 0;
  }
  const n = N(null);
  function o(r) {
    e("change", r);
  }
  const s = xe(o, t);
  function a(r) {
    e("update:modelValue", r), n.value = r, s(r);
  }
  const i = I({
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
  const s = N(!0), a = () => {
    s.value = !0, o();
  };
  ve(e, a, { flush: "sync" });
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
  return bt() ? (pt(e), !0) : !1;
}
function ee(e) {
  return typeof e == "function" ? e() : g(e);
}
const at = typeof window < "u" && typeof document < "u", Vt = Object.prototype.toString, Ut = (e) => Vt.call(e) === "[object Object]", ce = () => {
}, Bt = /* @__PURE__ */ Lt();
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
    const r = ee(e), c = ee(l.maxWait);
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
    const u = ee(e), m = Date.now() - o, k = () => r = d();
    return c(), u <= 0 ? (o = Date.now(), k()) : (m > u && (t || !a) ? (o = Date.now(), k()) : l && (r = new Promise((w, v) => {
      i = n ? v : w, s = setTimeout(() => {
        o = Date.now(), a = !0, w(k()), c();
      }, Math.max(0, u - m));
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
function pe(e) {
  var l;
  const t = ee(e);
  return (l = t == null ? void 0 : t.$el) != null ? l : t;
}
const we = at ? window : void 0;
function se(...e) {
  let l, t, n, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([t, n, o] = e, l = we) : [l, t, n, o] = e, !l)
    return ce;
  Array.isArray(t) || (t = [t]), Array.isArray(n) || (n = [n]);
  const s = [], a = () => {
    s.forEach((f) => f()), s.length = 0;
  }, i = (f, d, u, m) => (f.addEventListener(d, u, m), () => f.removeEventListener(d, u, m)), r = ve(
    () => [pe(l), ee(o)],
    ([f, d]) => {
      if (a(), !f)
        return;
      const u = Ut(d) ? { ...d } : d;
      s.push(
        ...t.flatMap((m) => n.map((k) => i(f, m, k, u)))
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
  const { window: n = we, ignore: o = [], capture: s = !0, detectIframe: a = !1 } = t;
  if (!n)
    return;
  Bt && !Ke && (Ke = !0, Array.from(n.document.body.children).forEach((u) => u.addEventListener("click", ce)), n.document.documentElement.addEventListener("click", ce));
  let i = !0;
  const r = (u) => o.some((m) => {
    if (typeof m == "string")
      return Array.from(n.document.querySelectorAll(m)).some((k) => k === u.target || u.composedPath().includes(k));
    {
      const k = pe(m);
      return k && (u.target === k || u.composedPath().includes(k));
    }
  }), f = [
    se(n, "click", (u) => {
      const m = pe(e);
      if (!(!m || m === u.target || u.composedPath().includes(m))) {
        if (u.detail === 0 && (i = !r(u)), !i) {
          i = !0;
          return;
        }
        l(u);
      }
    }, { passive: !0, capture: s }),
    se(n, "pointerdown", (u) => {
      const m = pe(e);
      m && (i = !u.composedPath().includes(m) && !r(u));
    }, { passive: !0 }),
    a && se(n, "blur", (u) => {
      setTimeout(() => {
        var m;
        const k = pe(e);
        ((m = n.document.activeElement) == null ? void 0 : m.tagName) === "IFRAME" && !(k != null && k.contains(n.document.activeElement)) && l(u);
      }, 0);
    })
  ].filter(Boolean);
  return () => f.forEach((u) => u());
}
function Wt(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (l) => l.key === e : Array.isArray(e) ? (l) => e.includes(l.key) : () => !0;
}
function H(...e) {
  let l, t, n = {};
  e.length === 3 ? (l = e[0], t = e[1], n = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (l = !0, t = e[0], n = e[1]) : (l = e[0], t = e[1]) : (l = !0, t = e[0]);
  const {
    target: o = we,
    eventName: s = "keydown",
    passive: a = !1,
    dedupe: i = !1
  } = n, r = Wt(l);
  return se(o, s, (f) => {
    f.repeat && ee(i) || r(f) && t(f);
  }, a);
}
function Kt(e = {}) {
  var l;
  const {
    window: t = we,
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
  const { initialValue: t = !1, focusVisible: n = !1 } = l, o = N(!1), s = I(() => pe(e));
  se(s, "focus", (i) => {
    var r, c;
    (!n || (c = (r = i.target).matches) != null && c.call(r, ":focus-visible")) && (o.value = !0);
  }), se(s, "blur", () => o.value = !1);
  const a = I({
    get: () => o.value,
    set(i) {
      var r, c;
      !i && o.value ? (r = s.value) == null || r.blur() : i && !o.value && ((c = s.value) == null || c.focus());
    }
  });
  return ve(
    s,
    () => {
      a.value = t;
    },
    { immediate: !0, flush: "post" }
  ), { focused: a };
}
function ue(e, l = {}) {
  const t = Kt(l), n = I(() => pe(e));
  return { focused: I(() => n.value && t.value ? n.value.contains(t.value) : !1) };
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
    window: c = we
  } = l, f = N(0), d = N(0), u = I({
    get() {
      return f.value;
    },
    set(_) {
      k(_, void 0);
    }
  }), m = I({
    get() {
      return d.value;
    },
    set(_) {
      k(void 0, _);
    }
  });
  function k(_, x) {
    var U, G, F;
    if (!c)
      return;
    const W = ee(e);
    W && ((F = W instanceof Document ? c.document.body : W) == null || F.scrollTo({
      top: (U = ee(x)) != null ? U : m.value,
      left: (G = ee(_)) != null ? G : u.value,
      behavior: ee(r)
    }));
  }
  const w = N(!1), v = je({
    left: !0,
    right: !1,
    top: !0,
    bottom: !1
  }), b = je({
    left: !1,
    right: !1,
    top: !1,
    bottom: !1
  }), $ = (_) => {
    w.value && (w.value = !1, b.left = !1, b.right = !1, b.top = !1, b.bottom = !1, o(_));
  }, V = jt($, t + n), A = (_) => {
    var x;
    if (!c)
      return;
    const U = _.document ? _.document.documentElement : (x = _.documentElement) != null ? x : _, { display: G, flexDirection: F } = getComputedStyle(U), W = U.scrollLeft;
    b.left = W < f.value, b.right = W > f.value;
    const J = Math.abs(W) <= 0 + (a.left || 0), ae = Math.abs(W) + U.clientWidth >= U.scrollWidth - (a.right || 0) - Xe;
    G === "flex" && F === "row-reverse" ? (v.left = ae, v.right = J) : (v.left = J, v.right = ae), f.value = W;
    let M = U.scrollTop;
    _ === c.document && !M && (M = c.document.body.scrollTop), b.top = M < d.value, b.bottom = M > d.value;
    const y = Math.abs(M) <= 0 + (a.top || 0), S = Math.abs(M) + U.clientHeight >= U.scrollHeight - (a.bottom || 0) - Xe;
    G === "flex" && F === "column-reverse" ? (v.top = S, v.bottom = y) : (v.top = y, v.bottom = S), d.value = M;
  }, C = (_) => {
    var x;
    if (!c)
      return;
    const U = (x = _.target.documentElement) != null ? x : _.target;
    A(U), w.value = !0, V(_), s(_);
  };
  return se(
    e,
    "scroll",
    t ? Ft(C, t, !0, !1) : C,
    i
  ), se(
    e,
    "scrollend",
    $,
    i
  ), {
    x: u,
    y: m,
    isScrolling: w,
    arrivedState: v,
    directions: b,
    measure() {
      const _ = ee(e);
      c && _ && A(_);
    }
  };
}
const Yt = "zoa__rzXsx__input", qt = "zoa__SLRtx__label", Zt = "zoa__HrSbA__grid", Jt = "zoa__I44XL__main", Qt = "zoa__4YshL__checkbox", el = {
  input: Yt,
  label: qt,
  "label--right": "zoa__Y3we-__label--right",
  "label--below": "zoa__IywVn__label--below",
  "label--above": "zoa__rpYiT__label--above",
  grid: Zt,
  "grid--above": "zoa__swS14__grid--above",
  "grid--below": "zoa__VmRrs__grid--below",
  "grid--left": "zoa__U-PqJ__grid--left",
  "grid--right": "zoa__6dVEA__grid--right",
  main: Jt,
  "kind--normal": "zoa__r1KqB__kind--normal",
  checkbox: Qt,
  "kind--primary": "zoa__XYwHs__kind--primary",
  "kind--alt": "zoa__qVzCa__kind--alt",
  "size--sm": "zoa__0xFel__size--sm",
  "size--md": "zoa__sHCoF__size--md"
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
    const t = e, { componentId: n, subId: o } = le(), { addPropClasses: s } = q(t), { value: a } = ne(l, t), i = N(null), r = N(null), c = ue(i), f = I(() => t.checkValue || t.label);
    function d() {
      let u = et(a.value) ? tt(a.value) : a.value;
      if (Array.isArray(u)) {
        console.log("array");
        let m = !r.value.checked;
        u = u.filter((k) => k !== f.value), m && u.push(f.value), a.value = u, r.value.checked = m;
      } else
        a.value = !a.value;
    }
    return H(" ", () => {
      c.focused.value && d();
    }), H("Enter", () => {
      c.focused.value && d();
    }), (u, m) => (O(), E("label", {
      id: g(n),
      for: g(o)("toggle"),
      tabindex: "0",
      ref_key: "checkboxContainer",
      ref: i,
      class: p(g(s)([]))
    }, [
      ie(T("input", {
        type: "checkbox",
        id: g(o)("toggle"),
        class: p(u.$style.checkbox),
        "onUpdate:modelValue": m[0] || (m[0] = (k) => de(a) ? a.value = k : null),
        name: e.name,
        value: f.value,
        ref_key: "checkboxInput",
        ref: r
      }, null, 10, ll), [
        [Qe, g(a)]
      ]),
      T("span", {
        class: p([u.$style.main, u.$style[`kind--${e.kind}`], u.$style[`size--${e.size}`]])
      }, [
        Ce(u.$slots, "default", {}, () => [
          me(D(e.label), 1)
        ])
      ], 2)
    ], 10, tl));
  }
}, al = {
  $style: el
}, ol = /* @__PURE__ */ Z(nl, [["__cssModules", al]]), rl = "zoa__qbf-G__input", sl = "zoa__SIpST__label", il = "zoa__wOUkj__grid", ul = {
  input: rl,
  label: sl,
  "label--right": "zoa__2sgZ2__label--right",
  "label--below": "zoa__FvTDX__label--below",
  "label--above": "zoa__CxNSj__label--above",
  grid: il,
  "grid--above": "zoa__tVRUr__grid--above",
  "grid--below": "zoa__pLLs-__grid--below",
  "grid--left": "zoa__0xief__grid--left",
  "grid--right": "zoa__GFcsT__grid--right"
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
    const t = e, { componentId: n, subId: o } = le(), { addPropClasses: s } = q(t), { value: a } = ne(l, t);
    return (i, r) => (O(), E("div", {
      class: p(g(s)([i.$style.grid, i.$style[`grid--${e.labelPosition}`]])),
      id: g(n)
    }, [
      e.label && e.labelPosition !== "none" ? (O(), E("label", {
        key: 0,
        for: g(o)("textbox"),
        class: p([i.$style.label, i.$style[`label--${e.labelPosition}`]])
      }, D(e.label), 11, dl)) : j("", !0),
      ie(T("input", {
        type: "text",
        placeholder: e.placeholder,
        id: g(o)("textbox"),
        class: p(i.$style.input),
        "onUpdate:modelValue": r[0] || (r[0] = (c) => de(a) ? a.value = c : null)
      }, null, 10, fl), [
        [$e, g(a)]
      ])
    ], 10, cl));
  }
}, bl = {
  $style: ul
}, pl = /* @__PURE__ */ Z(_l, [["__cssModules", bl]]), ml = "zoa__u1jpB__input", vl = "zoa__K4jZT__label", gl = "zoa__wc4xP__grid", hl = "zoa__0mMOV__wrapper", yl = "zoa__FvT7h__options", $l = "zoa__hqIBJ__option", Sl = "zoa__V565X__noOptions", zl = {
  input: ml,
  label: vl,
  "label--right": "zoa__CsI39__label--right",
  "label--below": "zoa__OyBO0__label--below",
  "label--above": "zoa__rnMm-__label--above",
  grid: gl,
  "grid--above": "zoa__lZr2b__grid--above",
  "grid--below": "zoa__s1ZFN__grid--below",
  "grid--left": "zoa__Imuk0__grid--left",
  "grid--right": "zoa__2DZpe__grid--right",
  wrapper: hl,
  options: yl,
  option: $l,
  noOptions: Sl
}, kl = ["id"], Il = ["for"], wl = ["placeholder", "id"], Ol = { key: 0 }, El = ["onClick"], Tl = ["value"], Al = {
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
    const t = e, { componentId: n, subId: o } = le(), { addPropClasses: s } = q(t), { value: a } = ne(l, t), i = I(() => {
      let v = [];
      return t.options.forEach((b) => {
        typeof b == "object" ? v.push({ label: b.label, value: b.value }) : v.push({ label: b, value: b });
      }), v;
    }), r = N(null), c = N(null), f = N(null), d = N(!1), u = he(c), m = ue(f);
    function k() {
      try {
        r.value.blur(), c.value.blur(), f.value.blur();
      } catch {
      }
      d.value = !1;
    }
    rt(r, () => {
      d.value = !1;
    }), H("ArrowDown", () => {
      if (i.value.length !== 0) {
        if (u.focused.value)
          f.value.children[0].children[0].focus();
        else if (m.focused.value) {
          const v = f.value.querySelector("li:focus");
          !v || !v.nextElementSibling ? f.value.children[0].children[0].focus() : v.nextElementSibling.focus();
        }
      }
    }), H("ArrowUp", () => {
      if (i.value.length !== 0 && m.focused.value) {
        const v = f.value.querySelector("li:focus");
        !v || !v.previousElementSibling ? c.value.focus() : v.previousElementSibling.focus();
      }
    }), H("Enter", () => {
      if (m.focused.value) {
        const v = f.value.querySelector("li:focus");
        v && w(v.querySelector("input").value);
      }
      k();
    });
    function w(v) {
      a.value = v, k();
    }
    return (v, b) => (O(), E("div", {
      class: p(g(s)([v.$style.grid, v.$style[`grid--${e.labelPosition}`]])),
      id: g(n)
    }, [
      e.label && e.labelPosition !== "none" ? (O(), E("label", {
        key: 0,
        for: g(o)("textbox"),
        class: p([v.$style.label, v.$style[`label--${e.labelPosition}`]])
      }, D(e.label), 11, Il)) : j("", !0),
      T("div", {
        class: p(v.$style.wrapper),
        ref_key: "container",
        ref: r
      }, [
        ie(T("input", {
          type: "text",
          placeholder: e.placeholder,
          id: g(o)("textbox"),
          class: p(v.$style.input),
          "onUpdate:modelValue": b[0] || (b[0] = ($) => de(a) ? a.value = $ : null),
          onFocusin: b[1] || (b[1] = ($) => d.value = !0),
          ref_key: "textbox",
          ref: c
        }, null, 42, wl), [
          [$e, g(a)]
        ]),
        d.value ? (O(), E("div", {
          key: 0,
          class: p(v.$style.options),
          ref_key: "dropdown",
          ref: f
        }, [
          i.value.length > 0 ? (O(), E("ul", Ol, [
            (O(!0), E(fe, null, be(i.value, ($) => (O(), E("li", {
              class: p(v.$style.option),
              onClick: (V) => w($.value),
              tabindex: "0"
            }, [
              T("span", null, D($.label), 1),
              T("input", {
                type: "hidden",
                value: $.value
              }, null, 8, Tl)
            ], 10, El))), 256))
          ])) : (O(), E("div", {
            key: 1,
            class: p(v.$style.noOptions)
          }, "No options found", 2))
        ], 2)) : j("", !0)
      ], 2)
    ], 10, kl));
  }
}, Nl = {
  $style: zl
}, xl = /* @__PURE__ */ Z(Al, [["__cssModules", Nl]]);
function Ye(e, l) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    l && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function te(e) {
  for (var l = 1; l < arguments.length; l++) {
    var t = arguments[l] != null ? arguments[l] : {};
    l % 2 ? Ye(Object(t), !0).forEach(function(n) {
      X(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ye(Object(t)).forEach(function(n) {
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
function X(e, l, t) {
  return l in e ? Object.defineProperty(e, l, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[l] = t, e;
}
function Pl(e, l) {
  if (e == null)
    return {};
  var t = {}, n = Object.keys(e), o, s;
  for (s = 0; s < n.length; s++)
    o = n[s], !(l.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
function Rl(e, l) {
  if (e == null)
    return {};
  var t = Pl(e, l), n, o;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (o = 0; o < s.length; o++)
      n = s[o], !(l.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n]);
  }
  return t;
}
function Ve(e) {
  return Cl(e) || Ml(e) || Dl(e) || Vl();
}
function Cl(e) {
  if (Array.isArray(e))
    return Ue(e);
}
function Ml(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Dl(e, l) {
  if (e) {
    if (typeof e == "string")
      return Ue(e, l);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Ue(e, l);
  }
}
function Ue(e, l) {
  (l == null || l > e.length) && (l = e.length);
  for (var t = 0, n = new Array(l); t < l; t++)
    n[t] = e[t];
  return n;
}
function Vl() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ul = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, st = { exports: {} };
(function(e) {
  (function(l) {
    var t = function(b, $, V) {
      if (!c($) || d($) || u($) || m($) || r($))
        return $;
      var A, C = 0, _ = 0;
      if (f($))
        for (A = [], _ = $.length; C < _; C++)
          A.push(t(b, $[C], V));
      else {
        A = {};
        for (var x in $)
          Object.prototype.hasOwnProperty.call($, x) && (A[b(x, V)] = t(b, $[x], V));
      }
      return A;
    }, n = function(b, $) {
      $ = $ || {};
      var V = $.separator || "_", A = $.split || /(?=[A-Z])/;
      return b.split(A).join(V);
    }, o = function(b) {
      return k(b) ? b : (b = b.replace(/[\-_\s]+(.)?/g, function($, V) {
        return V ? V.toUpperCase() : "";
      }), b.substr(0, 1).toLowerCase() + b.substr(1));
    }, s = function(b) {
      var $ = o(b);
      return $.substr(0, 1).toUpperCase() + $.substr(1);
    }, a = function(b, $) {
      return n(b, $).toLowerCase();
    }, i = Object.prototype.toString, r = function(b) {
      return typeof b == "function";
    }, c = function(b) {
      return b === Object(b);
    }, f = function(b) {
      return i.call(b) == "[object Array]";
    }, d = function(b) {
      return i.call(b) == "[object Date]";
    }, u = function(b) {
      return i.call(b) == "[object RegExp]";
    }, m = function(b) {
      return i.call(b) == "[object Boolean]";
    }, k = function(b) {
      return b = b - 0, b === b;
    }, w = function(b, $) {
      var V = $ && "process" in $ ? $.process : $;
      return typeof V != "function" ? b : function(A, C) {
        return V(A, b, C);
      };
    }, v = {
      camelize: o,
      decamelize: a,
      pascalize: s,
      depascalize: a,
      camelizeKeys: function(b, $) {
        return t(w(o, $), b);
      },
      decamelizeKeys: function(b, $) {
        return t(w(a, $), b, $);
      },
      pascalizeKeys: function(b, $) {
        return t(w(s, $), b);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = v : l.humps = v;
  })(Ul);
})(st);
var Bl = st.exports, Ll = ["class", "style"];
function Hl(e) {
  return e.split(";").map(function(l) {
    return l.trim();
  }).filter(function(l) {
    return l;
  }).reduce(function(l, t) {
    var n = t.indexOf(":"), o = Bl.camelize(t.slice(0, n)), s = t.slice(n + 1).trim();
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
  var s = t.style, a = s === void 0 ? {} : s, i = Rl(t, Ll);
  return lt(e.tag, te(te(te({}, l), {}, {
    class: o.class,
    style: te(te({}, o.style), a)
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
function Ie(e, l) {
  return Array.isArray(l) && l.length > 0 || !Array.isArray(l) && l ? X({}, e, l) : {};
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
  }, X(l, "fa-".concat(e.size), e.size !== null), X(l, "fa-rotate-".concat(e.rotation), e.rotation !== null), X(l, "fa-pull-".concat(e.pull), e.pull !== null), X(l, "fa-swap-opacity", e.swapOpacity), X(l, "fa-bounce", e.bounce), X(l, "fa-shake", e.shake), X(l, "fa-beat", e.beat), X(l, "fa-fade", e.fade), X(l, "fa-beat-fade", e.beatFade), X(l, "fa-flash", e.flash), X(l, "fa-spin-pulse", e.spinPulse), X(l, "fa-spin-reverse", e.spinReverse), l);
  return Object.keys(t).map(function(n) {
    return t[n] ? n : null;
  }).filter(function(n) {
    return n;
  });
}
function qe(e) {
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
    var n = t.attrs, o = I(function() {
      return qe(l.icon);
    }), s = I(function() {
      return Ie("classes", Fl(l));
    }), a = I(function() {
      return Ie("transform", typeof l.transform == "string" ? Ne.transform(l.transform) : l.transform);
    }), i = I(function() {
      return Ie("mask", qe(l.mask));
    }), r = I(function() {
      return ht(o.value, te(te(te(te({}, s.value), a.value), i.value), {}, {
        symbol: l.symbol,
        title: l.title
      }));
    });
    ve(r, function(f) {
      if (!f)
        return jl("Could not find one or more icon(s)", o.value, i.value);
    }, {
      immediate: !0
    });
    var c = I(function() {
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
    var n = t.slots, o = nt.familyPrefix, s = I(function() {
      return ["".concat(o, "-layers")].concat(Ve(l.fixedWidth ? ["".concat(o, "-fw")] : []));
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
    var n = t.attrs, o = nt.familyPrefix, s = I(function() {
      return Ie("classes", [].concat(Ve(l.counter ? ["".concat(o, "-layers-counter")] : []), Ve(l.position ? ["".concat(o, "-layers-").concat(l.position)] : [])));
    }), a = I(function() {
      return Ie("transform", typeof l.transform == "string" ? Ne.transform(l.transform) : l.transform);
    }), i = I(function() {
      var c = yt(l.value.toString(), te(te({}, a.value), s.value)), f = c.abstract;
      return l.counter && (f[0].attributes.class = f[0].attributes.class.replace("fa-layers-text", "")), f[0];
    }), r = I(function() {
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
  It,
  wt,
  Ot,
  Et,
  Tt
);
const Wl = "zoa__c-K88__input", Kl = "zoa__XFR4x__label", Xl = "zoa__csc-y__grid", Yl = "zoa__oUR-j__wrapper", ql = "zoa__f0lOR__arrow", Zl = {
  input: Wl,
  label: Kl,
  "label--right": "zoa__3XTm6__label--right",
  "label--below": "zoa__vTCRg__label--below",
  "label--above": "zoa__7KR2L__label--above",
  grid: Xl,
  "grid--above": "zoa__PN-na__grid--above",
  "grid--below": "zoa__-GDMi__grid--below",
  "grid--left": "zoa__v81WH__grid--left",
  "grid--right": "zoa__Clcgi__grid--right",
  wrapper: Yl,
  arrow: ql
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
    const t = e, { componentId: n, subId: o } = le(), { addPropClasses: s } = q(t), a = I(() => {
      let r = [];
      return t.options.forEach((c) => {
        typeof c == "object" ? r.push({ label: c.label, value: c.value }) : r.push({ label: c, value: c });
      }), r;
    }), { value: i } = ne(l, t);
    return (r, c) => (O(), E("div", {
      class: p(g(s)([r.$style.grid, r.$style[`grid--${e.labelPosition}`]])),
      id: g(n)
    }, [
      e.label && e.labelPosition !== "none" ? (O(), E("label", {
        key: 0,
        for: g(o)("dropdown"),
        class: p([r.$style.label, r.$style[`label--${e.labelPosition}`]])
      }, D(e.label), 11, Ql)) : j("", !0),
      T("div", {
        class: p(r.$style.wrapper)
      }, [
        ie(T("select", {
          id: g(o)("dropdown"),
          class: p(r.$style.input),
          "onUpdate:modelValue": c[0] || (c[0] = (f) => de(i) ? i.value = f : null)
        }, [
          T("option", tn, D(e.placeholder), 1),
          (O(!0), E(fe, null, be(a.value, (f) => (O(), E("option", {
            value: f.value
          }, D(f.label), 9, ln))), 256))
        ], 10, en), [
          [mt, g(i)]
        ]),
        Y(g(ye), {
          icon: "fa-solid fa-caret-down",
          class: p(r.$style.arrow)
        }, null, 8, ["class"])
      ], 2)
    ], 10, Jl));
  }
}, an = {
  $style: Zl
}, on = /* @__PURE__ */ Z(nn, [["__cssModules", an]]), rn = "zoa__EjsEt__input", sn = "zoa__A3qeJ__label", un = "zoa__J-EVV__grid", cn = "zoa__3vUBH__defaultCheckbox", dn = "zoa__uHbf1__checkbox", fn = "zoa__6OoQN__check", _n = {
  input: rn,
  label: sn,
  "label--right": "zoa__pku0V__label--right",
  "label--below": "zoa__U-wXq__label--below",
  "label--above": "zoa__bglwu__label--above",
  grid: un,
  "grid--above": "zoa__xWwl6__grid--above",
  "grid--below": "zoa__MxvdG__grid--below",
  "grid--left": "zoa__ePg1o__grid--left",
  "grid--right": "zoa__dovWb__grid--right",
  "label--left": "zoa__-MSYg__label--left",
  defaultCheckbox: cn,
  checkbox: dn,
  check: fn
}, bn = ["id", "for"], pn = ["id", "name", "value"], mn = {
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
    const t = e, { componentId: n, subId: o } = le(), { addPropClasses: s } = q(t), { value: a } = ne(l, t), i = N(null), r = N(null), c = ue(i), f = I(() => t.checkValue || t.label);
    return H(" ", () => {
      if (c.focused.value) {
        let d = et(a.value) ? tt(a.value) : a.value;
        if (Array.isArray(d)) {
          let u = !r.value.checked;
          d = d.filter((m) => m !== f.value), u && d.push(f.value), a.value = d, r.value.checked = u;
        } else
          a.value = !a.value;
      }
    }), (d, u) => (O(), E("label", {
      id: g(n),
      for: g(o)("checkbox"),
      class: p(g(s)([d.$style.grid, d.$style[`grid--${e.labelPosition}`]])),
      tabindex: "0",
      ref_key: "checkboxContainer",
      ref: i
    }, [
      e.label && e.labelPosition !== "none" ? (O(), E("span", {
        key: 0,
        class: p([d.$style.label, d.$style[`label--${e.labelPosition}`]])
      }, D(e.label), 3)) : j("", !0),
      ie(T("input", {
        type: "checkbox",
        id: g(o)("checkbox"),
        class: p(d.$style.defaultCheckbox),
        "onUpdate:modelValue": u[0] || (u[0] = (m) => de(a) ? a.value = m : null),
        name: e.name,
        value: f.value,
        ref_key: "checkboxInput",
        ref: r
      }, null, 10, pn), [
        [Qe, g(a)]
      ]),
      T("span", {
        class: p(d.$style.checkbox)
      }, [
        Y(g(ye), {
          icon: "fa-solid fa-check",
          class: p(d.$style.check)
        }, null, 8, ["class"])
      ], 2)
    ], 10, bn));
  }
}, vn = {
  $style: _n
}, Te = /* @__PURE__ */ Z(mn, [["__cssModules", vn]]);
function gn(e) {
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
const { searchExact: ut, reverse: Ze } = $n;
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
  const [a, i] = Re(e, l, t);
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
function* In(e, l, t) {
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
function Re(e, l, t) {
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
    const u = l.charCodeAt(d), m = Math.max(0, c - 1), k = Math.min(
      d + t,
      e.length - 1,
      f
    );
    s[0] = o[0] + 1, c = s[0] <= r ? 0 : null, f = s[0] <= r ? 0 : -1;
    let w;
    for (w = m; w < k; w++) {
      const b = s[w + 1] = Math.min(
        o[w] + +(u !== e.charCodeAt(w)),
        o[w + 1] + 1,
        s[w] + 1
      );
      b <= r && (c === null && (c = w + 1), f = Math.max(
        f,
        w + 1 + (r - b)
      ));
    }
    const v = s[w + 1] = Math.min(
      o[w] + +(u !== e.charCodeAt(w)),
      s[w] + 1
    );
    if (v <= r && (c === null && (c = w + 1), f = w + 1), w === e.length - 1 && (a === null || v <= a) && (a = v, i = d, a < r && (r = a)), [o, s] = [s, o], c === null)
      break;
  }
  return a !== null && a <= t ? [a, i + 1 + n] : [null, null];
}
function* ct(e, l, t) {
  const n = Math.floor(e.length / (t + 1)), o = e.length, s = l.length;
  for (let a = 0; a <= e.length - n; a += n) {
    const i = e.slice(a, a + n), r = a + n, c = Ze(e.slice(0, a)), f = e.slice(r), d = Math.max(0, a - t), u = Math.min(s, s - o + r + t);
    for (const m of ut(i, l, d, u)) {
      const [k, w] = Re(
        f,
        l.slice(
          m + n,
          m - a + o + t
        ),
        t
      );
      if (k === null)
        continue;
      const [v, b] = Re(
        c,
        Ze(l.slice(
          Math.max(0, m - a - (t - k)),
          m
        )),
        t - k
      );
      v !== null && (yield {
        start: m - b,
        end: m + n + w,
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
  _expand: Re,
  editDistance: zn,
  fuzzySearch: In,
  fuzzySearchNgrams: ct,
  fuzzySearchCandidates: dt,
  isEditDistanceNoGreaterThan: Sn
};
const { editDistance: On, fuzzySearch: En, isEditDistanceNoGreaterThan: Tn } = wn;
var An = {
  editDistance: On,
  fuzzySearch: En,
  isEditDistanceNoGreaterThan: Tn
};
const Nn = "zoa__-kaXq__input", xn = "zoa__eVS7Y__label", Pn = "zoa__pMc0u__grid", Rn = "zoa__5cpkc__wrapper", Cn = "zoa__AFCWm__options", Mn = "zoa__8vnuc__optlist", Dn = "zoa__bOurY__listItem", Vn = "zoa__Apoj0__option", Un = "zoa__MRbwy__selectAll", Bn = "zoa__m7bV0__subgroup", Ln = "zoa__8rcID__noOptions", Hn = "zoa__NWh1O__textboxWrapper", Gn = "zoa__P2F01__arrow", jn = {
  input: Nn,
  label: xn,
  "label--right": "zoa__F-K-n__label--right",
  "label--below": "zoa__v3pp3__label--below",
  "label--above": "zoa__2fKCe__label--above",
  grid: Pn,
  "grid--above": "zoa__bnarX__grid--above",
  "grid--below": "zoa__8mlVJ__grid--below",
  "grid--left": "zoa__CQte7__grid--left",
  "grid--right": "zoa__4KDvP__grid--right",
  wrapper: Rn,
  options: Cn,
  optlist: Mn,
  listItem: Dn,
  option: Vn,
  selectAll: Un,
  subgroup: Bn,
  noOptions: Ln,
  textboxWrapper: Hn,
  arrow: Gn
}, Fn = ["id"], Wn = ["for"], Kn = ["placeholder", "id"], Xn = ["title"], Yn = ["onClick"], qn = { key: 1 }, Oe = 10, Zn = {
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
    const t = e, { componentId: n, subId: o } = le(), { addPropClasses: s } = q(t), { value: a } = ne(l, t);
    Array.isArray(a) || (a.value = []);
    const i = N(null), r = xe((y) => {
      l("search", y);
    }, t.searchDelay), c = xe((y) => {
      i.value = y;
    }, t.searchDelay), f = I({
      get() {
        return i.value;
      },
      set(y) {
        c(y), r(y);
      }
    }), d = I(() => (a.value ? a.value.length !== 1 : !0) ? t.itemNamePlural || t.itemName + "s" : t.itemName), u = I(() => {
      let y = [];
      return t.options.forEach((S) => {
        typeof S == "object" ? y.push({
          label: S.label || S.value,
          value: S.value || S.label,
          group: S.group || null,
          order: S.order || null
        }) : y.push({ label: S, value: S, group: null });
      }), y.sort((S, z) => {
        let R;
        S.group === z.group ? R = 0 : !S.group || !z.group ? R = S.group ? 1 : -1 : R = S.group.localeCompare(z.group);
        let oe = 0;
        (S.order || z.order) && (oe = S.order && z.order ? S.order - z.order : S.order ? 1 : -1);
        let Q = S.label.localeCompare(z.label);
        return R !== 0 ? R : oe !== 0 ? oe : Q;
      }), y;
    }), m = I(() => {
      const y = t.enableSearch && f.value, S = y ? f.value.toLowerCase() : null, z = (L) => L ? [...An.fuzzySearch(S, L.toLowerCase(), 1)].length > 0 : !1;
      let R;
      y ? R = u.value.filter((L) => z(L.group) || z(L.label) || z(L.value)) : R = u.value;
      let oe = [], Q = Object.entries(
        Object.groupBy(R, ({ group: L }) => L)
      ), ge = S ? 2 : 1;
      return Q.forEach((L) => {
        let _e = L[0], K = L[1];
        _e && _e !== "null" && (oe.push({
          ix: ge,
          kind: "group",
          label: _e,
          value: _e,
          group: _e
        }), ge += 1), oe = oe.concat(
          K.map((Se, Me) => ({
            ix: ge + Me,
            kind: "option",
            label: Se.label,
            value: Se.value,
            group: Se.group
          }))
        ), ge += K.length;
      }), oe;
    }), k = N(null), w = N(null), v = N(null), { y: b } = Xt(v), $ = I(() => !v.value || v.value && b.value !== v.value.scrollTop ? 0 : b.value), V = I(() => {
      try {
        return v.value.clientHeight;
      } catch {
        return 500;
      }
    }), A = I(() => m.value.length < Oe * 2 ? 0 : Math.floor($.value / t.itemHeight) - Oe), C = I(() => m.value.length < Oe * 2 ? m.value.length + Oe : Math.ceil(($.value + V.value) / t.itemHeight)), _ = N(!1), x = he(w), U = ue(v);
    function G() {
      _.value = !0, setTimeout(() => {
        w.value.focus();
      }, 50);
    }
    function F() {
      try {
        k.value.blur(), w.value.blur(), v.value.blur();
      } catch {
      }
      _.value = !1;
    }
    function W() {
      _.value ? F() : G();
    }
    rt(k, () => {
      F();
    }), H("ArrowDown", () => {
      if (u.value.length !== 0) {
        if (x.focused.value)
          v.value.children[0].children[0].children[0].focus();
        else if (U.focused.value) {
          const y = [...v.value.querySelectorAll("label")], S = v.value.querySelector("label:focus");
          if (!S)
            y[0].focus();
          else {
            const z = y.findIndex((R) => R === S);
            z === y.length - 1 ? y[0].focus() : y[z + 1].focus();
          }
        }
      }
    }), H("ArrowUp", () => {
      if (u.value.length !== 0 && U.focused.value) {
        const y = [...v.value.querySelectorAll("label")], S = v.value.querySelector("label:focus");
        if (!S)
          w.value.focus();
        else {
          const z = y.findIndex((R) => R === S);
          z === 0 ? w.value.focus() : y[z - 1].focus();
        }
      }
    }), H("Enter", () => {
      F();
    });
    const J = I({
      get() {
        const y = u.value;
        return a.value.length !== y.length ? !1 : y.filter((z) => !a.value.includes(z.value)).length === 0;
      },
      set(y) {
        y ? a.value = u.value.map((S) => S.value) : a.value = [];
      }
    }), ae = I({
      get() {
        let y = m.value.filter((z) => z.kind === "option").map((z) => z.value);
        return a.value.length < y.length ? !1 : y.filter((z) => !a.value.includes(z)).length === 0;
      },
      set(y) {
        let S = m.value.filter((z) => z.kind === "option").map((z) => z.value);
        if (y) {
          const z = S.filter((R) => !a.value.includes(R));
          a.value = a.value.concat(z);
        } else
          a.value = a.value.filter((z) => !S.includes(z));
      }
    });
    function M(y) {
      const S = m.value.filter((R) => R.kind === "option" && R.group === y).map((R) => R.value), z = S.filter((R) => !a.value.includes(R));
      z.length > 0 ? z.forEach((R) => {
        a.value.push(R);
      }) : a.value = a.value.filter((R) => !S.includes(R));
    }
    return (y, S) => (O(), E("div", {
      class: p(g(s)([y.$style.grid, y.$style[`grid--${e.labelPosition}`]])),
      id: g(n)
    }, [
      e.label && e.labelPosition !== "none" ? (O(), E("label", {
        key: 0,
        for: g(o)("textbox"),
        class: p([y.$style.label, y.$style[`label--${e.labelPosition}`]])
      }, D(e.label), 11, Wn)) : j("", !0),
      T("div", {
        class: p(y.$style.wrapper),
        ref_key: "container",
        ref: k
      }, [
        T("div", {
          class: p(y.$style.textboxWrapper)
        }, [
          ie(T("input", {
            type: "text",
            placeholder: e.placeholder,
            id: g(o)("search"),
            class: p(y.$style.input),
            "onUpdate:modelValue": S[0] || (S[0] = (z) => f.value = z),
            ref_key: "textbox",
            ref: w
          }, null, 10, Kn), [
            [$e, f.value],
            [Fe, _.value]
          ]),
          ie(T("div", {
            class: p(y.$style.input),
            tabindex: "0",
            onFocusin: G
          }, D(g(a) ? g(a).length : 0) + " " + D(d.value) + " selected ", 35), [
            [Fe, !_.value]
          ]),
          Y(g(ye), {
            icon: "fa-solid fa-caret-down",
            class: p(y.$style.arrow),
            onClick: W
          }, null, 8, ["class"])
        ], 2),
        _.value ? (O(), E("div", {
          key: 0,
          class: p(y.$style.options),
          ref_key: "dropdown",
          ref: v
        }, [
          u.value.length > 0 ? (O(), E("ul", {
            key: 0,
            class: p(y.$style.optlist)
          }, [
            T("li", {
              title: "Select all",
              class: p([y.$style.selectAll, y.$style.listItem, y.$style.option]),
              style: ze({ height: `${e.itemHeight}px` })
            }, [
              Y(Te, {
                label: "Select all",
                "label-position": "right",
                modelValue: J.value,
                "onUpdate:modelValue": S[1] || (S[1] = (z) => J.value = z)
              }, null, 8, ["modelValue"])
            ], 6),
            i.value ? (O(), E("li", {
              key: 0,
              title: "Select results",
              class: p([y.$style.selectAll, y.$style.listItem, y.$style.option]),
              style: ze({ height: `${e.itemHeight}px` })
            }, [
              Y(Te, {
                label: "Select results",
                "label-position": "right",
                modelValue: ae.value,
                "onUpdate:modelValue": S[2] || (S[2] = (z) => ae.value = z)
              }, null, 8, ["modelValue"])
            ], 6)) : j("", !0),
            (O(!0), E(fe, null, be(m.value, (z) => (O(), E("li", {
              title: z.label,
              class: p([
                y.$style.listItem,
                z.kind === "group" ? y.$style.subgroup : y.$style.option
              ]),
              style: ze({ height: `${e.itemHeight}px` })
            }, [
              z.kind === "group" ? (O(), E("div", {
                key: 0,
                onClick: (R) => M(z.group)
              }, D(z.label), 9, Yn)) : (O(), E("div", qn, [
                z.ix >= A.value && z.ix <= C.value ? (O(), Ee(Te, {
                  key: 0,
                  label: z.label,
                  "label-position": "right",
                  "check-value": z.value,
                  name: g(o)("checkboxes"),
                  modelValue: g(a),
                  "onUpdate:modelValue": S[3] || (S[3] = (R) => de(a) ? a.value = R : null)
                }, null, 8, ["label", "check-value", "name", "modelValue"])) : j("", !0)
              ]))
            ], 14, Xn))), 256))
          ], 2)) : (O(), E("div", {
            key: 1,
            class: p(y.$style.noOptions)
          }, "No options found", 2))
        ], 2)) : j("", !0)
      ], 2)
    ], 10, Fn));
  }
}, Jn = {
  $style: jn
}, Qn = /* @__PURE__ */ Z(Zn, [["__cssModules", Jn]]), ea = "zoa__79mQo__input", ta = "zoa__WTN5H__label", la = "zoa__DqiKb__grid", na = {
  input: ea,
  label: ta,
  "label--right": "zoa__iMSda__label--right",
  "label--below": "zoa__r6OsR__label--below",
  "label--above": "zoa__iXvOz__label--above",
  grid: la,
  "grid--above": "zoa__9WSIP__grid--above",
  "grid--below": "zoa__iK09A__grid--below",
  "grid--left": "zoa__KhHio__grid--left",
  "grid--right": "zoa__M6mbm__grid--right"
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
    const t = e, { componentId: n, subId: o } = le(), { addPropClasses: s } = q(t), { value: a } = ne(l, t);
    return (i, r) => (O(), E("div", {
      class: p(g(s)([i.$style.grid, i.$style[`grid--${e.labelPosition}`]])),
      id: g(n)
    }, [
      e.label && e.labelPosition !== "none" ? (O(), E("label", {
        key: 0,
        for: g(o)("number"),
        class: p([i.$style.label, i.$style[`label--${e.labelPosition}`]])
      }, D(e.label), 11, oa)) : j("", !0),
      ie(T("input", {
        type: "number",
        placeholder: e.placeholder,
        min: e.min,
        max: e.max,
        step: e.step,
        id: g(o)("number"),
        class: p(i.$style.input),
        "onUpdate:modelValue": r[0] || (r[0] = (c) => de(a) ? a.value = c : null)
      }, null, 10, ra), [
        [$e, g(a)]
      ])
    ], 10, aa));
  }
}, ia = {
  $style: na
}, Ae = /* @__PURE__ */ Z(sa, [["__cssModules", ia]]), ua = "zoa__BWNey__input", ca = "zoa__EwgZe__label", da = "zoa__Xjves__grid", fa = {
  input: ua,
  label: ca,
  "label--right": "zoa__GxE5U__label--right",
  "label--below": "zoa__K1mOk__label--below",
  "label--above": "zoa__33h7g__label--above",
  grid: da,
  "grid--above": "zoa__caz05__grid--above",
  "grid--below": "zoa__pnjLn__grid--below",
  "grid--left": "zoa__utweT__grid--left",
  "grid--right": "zoa__E6CuQ__grid--right"
}, _a = ["id"], ba = ["for"], pa = ["placeholder", "min", "max", "step", "id"], ma = {
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
    const t = e, { componentId: n, subId: o } = le(), { addPropClasses: s } = q(t), { value: a } = ne(l, t);
    return (i, r) => (O(), E("div", {
      class: p(g(s)([i.$style.grid, i.$style[`grid--${e.labelPosition}`]])),
      id: g(n)
    }, [
      e.label && e.labelPosition !== "none" ? (O(), E("label", {
        key: 0,
        for: g(o)("date"),
        class: p([i.$style.label, i.$style[`label--${e.labelPosition}`]])
      }, D(e.label), 11, ba)) : j("", !0),
      ie(T("input", {
        type: "date",
        placeholder: e.placeholder,
        min: e.min,
        max: e.max,
        step: e.step,
        id: g(o)("date"),
        class: p(i.$style.input),
        "onUpdate:modelValue": r[0] || (r[0] = (c) => de(a) ? a.value = c : null)
      }, null, 10, pa), [
        [$e, g(a)]
      ])
    ], 10, _a));
  }
}, va = {
  $style: fa
}, ga = /* @__PURE__ */ Z(ma, [["__cssModules", va]]);
var ha = {
  __locale: "en",
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  abbreviated_days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  abbreviated_months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  am: "AM",
  pm: "PM"
}, ya = ha;
const Je = /* @__PURE__ */ gn(ya), $a = "zoa__T01c0__input", Sa = "zoa__Zrad1__label", za = "zoa__-K9Da__grid", ka = "zoa__zCutL__inputContainer", Ia = "zoa__DBAOk__datePopup", wa = "zoa__e8GS9__popupSection", Oa = "zoa__tN5Fw__yearGrid", Ea = "zoa__Z8UyZ__monthGrid", Ta = "zoa__6Tknh__dayGrid", Aa = "zoa__oPUQ-__editing", Na = "zoa__GtJv-__suggestion", xa = {
  input: $a,
  label: Sa,
  "label--right": "zoa__SxVfB__label--right",
  "label--below": "zoa__YLIdi__label--below",
  "label--above": "zoa__E7ufb__label--above",
  grid: za,
  "grid--above": "zoa__KeVwr__grid--above",
  "grid--below": "zoa__KyL5-__grid--below",
  "grid--left": "zoa__Ytl98__grid--left",
  "grid--right": "zoa__KxP7T__grid--right",
  inputContainer: ka,
  datePopup: Ia,
  popupSection: wa,
  yearGrid: Oa,
  monthGrid: Ea,
  dayGrid: Ta,
  editing: Aa,
  suggestion: Na
}, Pa = ["id"], Ra = ["for"], Ca = ["placeholder", "id"], Ma = ["onClick", "onKeydown"], Da = {
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
    const t = e, n = () => import("./dates-6176f674.js"), { componentId: o, subId: s } = le(), { addPropClasses: a } = q(t), { valueChanged: i } = ne(l, t.delay), r = N(null), c = N(!1), f = N(null), { focused: d } = ue(f), u = N(null), m = N(null), k = N(null), w = he(u), v = ue(u), b = he(m), $ = ue(m), V = he(k), A = ue(k), C = I(() => {
      let h;
      return w.focused.value ? h = u.value : b.focused.value ? h = m.value : V.focused.value && (h = k.value), h;
    }), _ = I(() => {
      let h;
      return v.focused.value ? h = u.value : $.focused.value ? h = m.value : A.focused.value && (h = k.value), h;
    });
    H("Enter", () => {
      C && C.value.children[0].focus();
    }), H("ArrowLeft", () => {
      if (!_.value)
        return;
      const h = _.value.querySelector("button:focus");
      !h || !h.previousElementSibling ? _.value.children[_.value.children.length - 1].focus() : h.previousElementSibling.focus();
    }), H("ArrowRight", () => {
      if (!_.value)
        return;
      const h = _.value.querySelector("button:focus");
      !h || !h.nextElementSibling ? _.value.children[0].focus() : h.nextElementSibling.focus();
    }), H("Escape", () => {
      const h = f.value.querySelector("*:focus");
      h && h.blur();
    });
    const x = I(() => ({
      year: S.value,
      month: Q.value,
      day: K.value
    })), U = I(() => Ge(
      x.value.year,
      x.value.month,
      x.value.day
    ));
    function G() {
      r.value.value = U.value, c.value = !1;
    }
    const F = N([]);
    function W(h) {
      c.value = !0, n().then((B) => {
        F.value = B.parseDate(h.target.value);
      });
    }
    const J = xe(W, 200);
    function ae(h) {
      M.value = h.year, Q.value = h.month, K.value = h.day, F.value = [];
    }
    const M = N(null), y = I(() => {
      let h = 11;
      return M.value && M.value >= 1e3 ? h = Math.floor(M.value / 10) * 10 : M.value && M.value < 1e3 && (h = M.value * 10), Array(10).fill(h).map((B, P) => B + P);
    }), S = I(() => {
      if (!M.value)
        return null;
      if (M.value >= 1e3)
        return M.value;
      let h = 10 ** (4 - M.value.toString().length);
      return M.value * h;
    }), z = I(() => S.value % 100 === 0 ? S.value % 400 === 0 : S.value % 4 === 0);
    function R(h) {
      return h.toString().padEnd(4, "0");
    }
    function oe(h) {
      M.value = h, K.value && K.value > L.value && (K.value = L.value);
    }
    const Q = N(null), ge = N(Je.abbreviated_months), L = I(() => [4, 6, 9, 11].includes(Q.value) ? 30 : Q.value === 2 ? z.value ? 29 : 28 : 31);
    function _e(h) {
      Q.value = h, K.value && K.value > L.value && (K.value = L.value);
    }
    const K = N(null), Se = I(() => Array(L.value).fill(1).map((h, B) => B + 1));
    function Me(h) {
      K.value = h;
    }
    function Ge(h, B, P) {
      const re = Je.abbreviated_months[B - 1];
      return h && B && P ? `${P} ${re} ${h}` : h && B ? `${re} ${h}` : h && P ? `${P} ??? ${h}` : B && P ? `${P} ${re}` : h || (B ? re : P ? `day ${P}` : null);
    }
    return ve(x, () => {
      G(), i(x.value);
    }), (h, B) => (O(), E("div", {
      class: p(g(a)([h.$style.grid, h.$style[`grid--${e.labelPosition}`]])),
      id: g(o),
      ref_key: "container",
      ref: f
    }, [
      e.label && e.labelPosition !== "none" ? (O(), E("label", {
        key: 0,
        for: g(s)("date"),
        class: p([h.$style.label, h.$style[`label--${e.labelPosition}`]])
      }, D(e.label), 11, Ra)) : j("", !0),
      T("div", {
        class: p(h.$style.inputContainer)
      }, [
        T("input", {
          type: "text",
          placeholder: e.placeholder,
          id: g(s)("date"),
          class: p([h.$style.input, c.value ? h.$style.editing : ""]),
          ref_key: "displayBox",
          ref: r,
          onInput: B[0] || (B[0] = (...P) => g(J) && g(J)(...P))
        }, null, 42, Ca),
        g(d) ? (O(), E("div", {
          key: 0,
          class: p(h.$style.datePopup)
        }, [
          F.value.length > 0 ? (O(), E("div", {
            key: 0,
            class: p(h.$style.popupSection)
          }, [
            (O(!0), E(fe, null, be(F.value, (P) => (O(), E("span", {
              onClick: (re) => ae(P),
              onKeydown: vt((re) => ae(P), ["enter"]),
              class: p(h.$style.suggestion),
              tabindex: "0"
            }, D(Ge(P.year, P.month, P.day)), 43, Ma))), 256))
          ], 2)) : j("", !0),
          T("div", {
            class: p(h.$style.popupSection)
          }, [
            Y(Ae, {
              label: "year",
              "label-position": "left",
              placeholder: 1900,
              modelValue: M.value,
              "onUpdate:modelValue": B[1] || (B[1] = (P) => M.value = P),
              min: 0,
              max: 9999
            }, null, 8, ["modelValue"]),
            T("div", {
              class: p(h.$style.yearGrid),
              tabindex: "0",
              ref_key: "yearBtns",
              ref: u
            }, [
              (O(!0), E(fe, null, be(y.value, (P) => (O(), Ee(ke, {
                size: "sm",
                onClick: (re) => oe(P),
                tabindex: "-1"
              }, {
                default: De(() => [
                  me(D(R(P)), 1)
                ]),
                _: 2
              }, 1032, ["onClick"]))), 256))
            ], 2)
          ], 2),
          T("div", {
            class: p(h.$style.popupSection)
          }, [
            Y(Ae, {
              label: "month",
              "label-position": "left",
              placeholder: 1,
              modelValue: Q.value,
              "onUpdate:modelValue": B[2] || (B[2] = (P) => Q.value = P),
              min: 1,
              max: 12
            }, null, 8, ["modelValue"]),
            T("div", {
              class: p(h.$style.monthGrid),
              tabindex: "0",
              ref_key: "monthBtns",
              ref: m
            }, [
              (O(!0), E(fe, null, be(ge.value, (P, re) => (O(), Ee(ke, {
                size: "sm",
                onClick: (To) => _e(re + 1),
                tabindex: "-1"
              }, {
                default: De(() => [
                  me(D(P), 1)
                ]),
                _: 2
              }, 1032, ["onClick"]))), 256))
            ], 2)
          ], 2),
          T("div", {
            class: p(h.$style.popupSection)
          }, [
            Y(Ae, {
              label: "day",
              "label-position": "left",
              placeholder: 1,
              modelValue: K.value,
              "onUpdate:modelValue": B[3] || (B[3] = (P) => K.value = P),
              min: 1,
              max: L.value
            }, null, 8, ["modelValue", "max"]),
            T("div", {
              class: p(h.$style.dayGrid),
              tabindex: "0",
              ref_key: "dayBtns",
              ref: k
            }, [
              (O(!0), E(fe, null, be(Se.value, (P) => (O(), Ee(ke, {
                size: "sm",
                onClick: (re) => Me(P),
                tabindex: "-1"
              }, {
                default: De(() => [
                  me(D(P), 1)
                ]),
                _: 2
              }, 1032, ["onClick"]))), 256))
            ], 2)
          ], 2)
        ], 2)) : j("", !0)
      ], 2)
    ], 10, Pa));
  }
}, Va = {
  $style: xa
}, Ua = /* @__PURE__ */ Z(Da, [["__cssModules", Va]]), Ba = "zoa__wKiUj__input", La = "zoa__wdDOR__label", Ha = "zoa__NU5xO__grid", Ga = "zoa__faDBS__slider", ja = "zoa__pxPuS__track", Fa = "zoa__YIkY8__valueLabel", Wa = {
  input: Ba,
  label: La,
  "label--right": "zoa__-ofKG__label--right",
  "label--below": "zoa__0HdYJ__label--below",
  "label--above": "zoa__PM4XH__label--above",
  grid: Ha,
  "grid--above": "zoa__mmKWI__grid--above",
  "grid--below": "zoa__6m720__grid--below",
  "grid--left": "zoa__y6mEj__grid--left",
  "grid--right": "zoa__-c8cX__grid--right",
  "wrapper--value-label-below": "zoa__3DNmv__wrapper--value-label-below",
  "wrapper--value-label-above": "zoa__7bdFW__wrapper--value-label-above",
  slider: Ga,
  track: ja,
  "track--active": "zoa__q61Yj__track--active",
  valueLabel: Fa,
  "valueLabel--below": "zoa__LNFdb__valueLabel--below",
  "valueLabel--above": "zoa__xDqQu__valueLabel--above"
}, Ka = ["id"], Xa = ["for"], Ya = ["min", "max", "step", "id"], qa = {
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
    const t = e, { componentId: n, subId: o } = le(), { addPropClasses: s } = q(t), { value: a } = ne(l, t), i = N(null), r = N(null), c = I(() => t.validMin ? Math.max(Number(t.validMin), Number(t.min)) : Number(t.min)), f = I(() => t.validMax ? Math.min(Number(t.validMax), Number(t.max)) : Number(t.max)), d = ue(i), u = he(r), m = I(() => a.value < c.value ? c.value : a.value > f.value ? f.value : a.value), k = I(() => t.activeTrackRight ? { left: `${v.value.handle}%` } : { right: `${100 - v.value.handle}%` }), w = I(() => (a.value - t.min) / (t.max - t.min)), v = I(() => b());
    function b() {
      try {
        const _ = i.value.clientWidth, x = 24;
        r.value && (r.value.innerText = m.value);
        const U = r.value ? r.value.clientWidth : 0, G = _ / 2, J = (w.value * _ - G) / G * (x / 2), ae = J + U / 2, M = J / _;
        return {
          handle: ((w.value - M) * 100).toFixed(2),
          label: ((w.value - ae / _) * 100).toFixed(2)
        };
      } catch {
        const _ = w.value * 100;
        return { handle: _.toFixed(2), label: _.toFixed(2) };
      }
    }
    function $() {
      if (t.placeholder !== null && t.placeholder !== void 0)
        return t.placeholder;
      let x = (t.max - t.min) / (1 / t.placeholderPosition), U = x % t.step;
      return x - U + t.min;
    }
    function V() {
      if (a.value === t.max)
        return;
      let _ = Number(a.value) + Number(t.step);
      _ > t.max ? a.value = t.max : a.value = _;
    }
    function A() {
      if (a.value === t.min)
        return;
      let _ = Number(a.value) - Number(t.step);
      _ < t.min ? a.value = t.min : a.value = _;
    }
    function C(_) {
      _.preventDefault(), _.wheelDelta > 0 ? V() : _.wheelDelta < 0 && A();
    }
    return H("ArrowDown", (_) => {
      _.preventDefault(), (d.focused.value || u.focused.value) && A();
    }), H("ArrowLeft", (_) => {
      _.preventDefault(), (d.focused.value || u.focused.value) && A();
    }), H("ArrowUp", (_) => {
      _.preventDefault(), (d.focused.value || u.focused.value) && V();
    }), H("ArrowRight", (_) => {
      _.preventDefault(), (d.focused.value || u.focused.value) && V();
    }), ve(a, (_) => {
      Number(_) >= Number(f.value) && (a.value = f.value), Number(_) <= Number(c.value) && (a.value = c.value);
    }), a.value = $(), (_, x) => (O(), E("div", {
      class: p(
        g(s)([
          _.$style.grid,
          _.$style[`grid--${e.labelPosition}`],
          _.$style[`wrapper--value-label-${e.valueLabelPosition}`]
        ])
      ),
      id: g(n)
    }, [
      e.label && e.labelPosition !== "none" ? (O(), E("label", {
        key: 0,
        class: p([_.$style.label, _.$style[`label--${e.labelPosition}`]]),
        for: g(o)("slider")
      }, D(e.label), 11, Xa)) : j("", !0),
      T("div", {
        class: p(_.$style.slider),
        onWheel: C
      }, [
        T("span", {
          class: p(_.$style.track)
        }, null, 2),
        T("span", {
          class: p([_.$style.track, _.$style["track--active"]]),
          style: ze(k.value)
        }, null, 6),
        T("span", {
          class: p([
            _.$style.valueLabel,
            _.$style[`valueLabel--${e.valueLabelPosition}`]
          ]),
          style: ze({ left: `${v.value.label}%` }),
          ref_key: "valueLabel",
          ref: r,
          tabindex: "0"
        }, D(m.value), 7),
        ie(T("input", {
          type: "range",
          min: e.min,
          max: e.max,
          step: e.step,
          id: g(o)("slider"),
          class: p(_.$style.input),
          "onUpdate:modelValue": x[0] || (x[0] = (U) => de(a) ? a.value = U : null),
          ref_key: "slider",
          ref: i
        }, null, 10, Ya), [
          [$e, g(a)]
        ])
      ], 34)
    ], 10, Ka));
  }
}, Za = {
  $style: Wa
}, Be = /* @__PURE__ */ Z(qa, [["__cssModules", Za]]), Ja = "zoa__O86-F__input", Qa = "zoa__0YsN9__label", eo = "zoa__SiTNx__grid", to = {
  input: Ja,
  label: Qa,
  "label--right": "zoa__pjeV2__label--right",
  "label--below": "zoa__12bIu__label--below",
  "label--above": "zoa__sjy2f__label--above",
  grid: eo,
  "grid--above": "zoa__8N5XC__grid--above",
  "grid--below": "zoa__X9vRI__grid--below",
  "grid--left": "zoa__unXPL__grid--left",
  "grid--right": "zoa__WXVvK__grid--right"
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
    const t = e, { componentId: n, subId: o } = le(), { addPropClasses: s } = q(t), { valueChanged: a } = ne(l, t), i = N(null), r = N(null), c = I(() => Math.max(
      Number(r.value) - Number(t.step),
      Number(t.min)
    )), f = I(() => Math.min(
      Number(i.value) + Number(t.step),
      Number(t.max)
    )), d = I(() => {
      const u = Math.min(i.value, c.value), m = Math.max(r.value, f.value);
      return [u, m];
    });
    return ve(d, () => {
      a(d.value);
    }), (u, m) => (O(), E("div", {
      class: p(g(s)([u.$style.grid, u.$style[`grid--${e.labelPosition}`]])),
      id: g(n)
    }, [
      e.label && e.labelPosition !== "none" ? (O(), E("span", {
        key: 0,
        class: p([u.$style.label, u.$style[`label--${e.labelPosition}`]])
      }, D(e.label), 3)) : j("", !0),
      T("div", null, [
        Y(Be, {
          min: e.min,
          max: e.max,
          "valid-max": c.value,
          step: e.step,
          modelValue: i.value,
          "onUpdate:modelValue": m[0] || (m[0] = (k) => i.value = k),
          label: e.labelLower,
          "label-position": e.labelsRight ? "right" : "left",
          "value-label-position": "above",
          "placeholder-position": 0.25
        }, null, 8, ["min", "max", "valid-max", "step", "modelValue", "label", "label-position"]),
        Y(Be, {
          min: e.min,
          "valid-min": f.value,
          max: e.max,
          step: e.step,
          modelValue: r.value,
          "onUpdate:modelValue": m[1] || (m[1] = (k) => r.value = k),
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
}, oo = /* @__PURE__ */ Z(no, [["__cssModules", ao]]);
function ft(e) {
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
const ro = "zoa__VAeTu__main", so = "zoa__fVs2o__container", io = "zoa__THVXY__header", uo = "zoa__paVgB__icon", co = {
  main: ro,
  container: so,
  header: io,
  icon: uo,
  "kind--info": "zoa__ITcbz__kind--info",
  "kind--warning": "zoa__ePWkZ__kind--warning",
  "kind--error": "zoa__uCNxg__kind--error",
  "kind--success": "zoa__QTxj6__kind--success"
}, fo = {
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
    const l = e, { icon: t } = ft(l), { addPropClasses: n } = q(l);
    return (o, s) => (O(), E("div", {
      class: p(
        g(n)([o.$style.main, o.$style.container, o.$style[`kind--${e.kind}`]])
      )
    }, [
      T("div", {
        class: p(o.$style.header)
      }, [
        Y(g(ye), {
          icon: ["fa-solid", g(t)],
          class: p(o.$style.icon)
        }, null, 8, ["icon", "class"]),
        T("h2", null, D(e.header), 1)
      ], 2),
      T("div", {
        class: p(o.$style.content)
      }, [
        Ce(o.$slots, "default", {}, () => [
          me(D(e.message), 1)
        ])
      ], 2)
    ], 2));
  }
}, _o = {
  $style: co
}, bo = /* @__PURE__ */ Z(fo, [["__cssModules", _o]]), po = "zoa__-6BJv__main", mo = "zoa__JzwYn__container", vo = "zoa__Fn9SR__header", go = "zoa__G4zlh__icon", ho = "zoa__KdMNq__form", yo = "zoa__PyVzA__close", $o = "zoa__YKx2f__content", So = {
  main: po,
  container: mo,
  header: vo,
  icon: go,
  "kind--info": "zoa__dJXHY__kind--info",
  "kind--warning": "zoa__GLN89__kind--warning",
  "kind--error": "zoa__3HPxn__kind--error",
  "kind--success": "zoa__O1vse__kind--success",
  form: ho,
  close: yo,
  content: $o
}, zo = {
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
    const t = e, { icon: n } = ft(t), { addPropClasses: o } = q(t), s = N(null);
    function a() {
      s.value.show(), l("opened");
    }
    return (i, r) => (O(), E(fe, null, [
      Y(g(ke), gt(e.buttonArgs, { onClick: a }), null, 16),
      T("dialog", {
        ref_key: "modal",
        ref: s,
        class: p(g(o)([i.$style.main, i.$style[`kind--${e.kind}`]]))
      }, [
        T("div", {
          class: p(i.$style.container)
        }, [
          T("form", {
            method: "dialog",
            class: p(i.$style.form),
            onSubmit: r[0] || (r[0] = (c) => l("closed"))
          }, [
            T("button", {
              class: p(i.$style.close)
            }, [
              Y(g(ye), { icon: "fa-solid fa-xmark" })
            ], 2)
          ], 34),
          T("div", {
            class: p(i.$style.header)
          }, [
            Y(g(ye), {
              icon: ["fa-solid", g(n)],
              class: p(i.$style.icon)
            }, null, 8, ["icon", "class"]),
            T("h2", null, D(e.header), 1)
          ], 2),
          T("div", {
            class: p(i.$style.content)
          }, [
            Ce(i.$slots, "default", {}, () => [
              me(D(e.message), 1)
            ])
          ], 2)
        ], 2)
      ], 2)
    ], 64));
  }
}, ko = {
  $style: So
}, Io = /* @__PURE__ */ Z(zo, [["__cssModules", ko]]), wo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ZoaAutocompleteTextbox: xl,
  ZoaButton: ke,
  ZoaCheckbox: Te,
  ZoaDateAmbiguous: Ua,
  ZoaDateSimple: ga,
  ZoaDropdown: on,
  ZoaFlash: bo,
  ZoaModal: Io,
  ZoaMultiselect: Qn,
  ZoaNumber: Ae,
  ZoaRangeSlider: oo,
  ZoaSlider: Be,
  ZoaTextbox: pl,
  ZoaToggleButton: ol
}, Symbol.toStringTag, { value: "Module" })), Oo = new RegExp("[A-Z]+(?![a-z])|[A-Z]", "g");
function Eo(e) {
  return e.replace(Oo, (l, t) => (t ? "-" : "") + l.toLowerCase());
}
const Po = {
  install(e, l) {
    Object.entries(wo).forEach((t) => {
      const n = Eo(t[0]);
      e.component(n, t[1]);
    });
  }
};
export {
  xl as A,
  on as D,
  bo as F,
  Qn as M,
  oo as R,
  ol as T,
  Po as Z,
  ke as a,
  pl as b,
  Te as c,
  Je as d,
  Ae as e,
  ga as f,
  gn as g,
  Ua as h,
  Be as i,
  Io as j
};
