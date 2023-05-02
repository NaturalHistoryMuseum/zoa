function hn(e, t) {
  const n = /* @__PURE__ */ Object.create(null), s = e.split(",");
  for (let o = 0; o < s.length; o++)
    n[s[o]] = !0;
  return t ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
function bn(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = $(s) ? Oo(s) : bn(s);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else {
    if ($(e))
      return e;
    if (B(e))
      return e;
  }
}
const yo = /;(?![^(]*\))/g, xo = /:([^]+)/, Ao = /\/\*.*?\*\//gs;
function Oo(e) {
  const t = {};
  return e.replace(Ao, "").split(yo).forEach((n) => {
    if (n) {
      const s = n.split(xo);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function st(e) {
  let t = "";
  if ($(e))
    t = e;
  else if (I(e))
    for (let n = 0; n < e.length; n++) {
      const s = st(e[n]);
      s && (t += s + " ");
    }
  else if (B(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const No = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Do = /* @__PURE__ */ hn(No);
function Ts(e) {
  return !!e || e === "";
}
const ys = (e) => $(e) ? e : e == null ? "" : I(e) || B(e) && (e.toString === Ns || !R(e.toString)) ? JSON.stringify(e, xs, 2) : String(e), xs = (e, t) => t && t.__v_isRef ? xs(e, t.value) : et(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, o]) => (n[`${s} =>`] = o, n), {})
} : As(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : B(t) && !I(t) && !Ds(t) ? String(t) : t, G = {}, Qe = [], me = () => {
}, So = () => !1, Io = /^on[^a-z]/, Lt = (e) => Io.test(e), vn = (e) => e.startsWith("onUpdate:"), J = Object.assign, En = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ko = Object.prototype.hasOwnProperty, L = (e, t) => ko.call(e, t), I = Array.isArray, et = (e) => Pt(e) === "[object Map]", As = (e) => Pt(e) === "[object Set]", R = (e) => typeof e == "function", $ = (e) => typeof e == "string", Tn = (e) => typeof e == "symbol", B = (e) => e !== null && typeof e == "object", Os = (e) => B(e) && R(e.then) && R(e.catch), Ns = Object.prototype.toString, Pt = (e) => Ns.call(e), Ro = (e) => Pt(e).slice(8, -1), Ds = (e) => Pt(e) === "[object Object]", yn = (e) => $(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ot = /* @__PURE__ */ hn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), wt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Co = /-(\w)/g, Ie = wt((e) => e.replace(Co, (t, n) => n ? n.toUpperCase() : "")), zo = /\B([A-Z])/g, _e = wt((e) => e.replace(zo, "-$1").toLowerCase()), Ss = wt((e) => e.charAt(0).toUpperCase() + e.slice(1)), Kt = wt((e) => e ? `on${Ss(e)}` : ""), It = (e, t) => !Object.is(e, t), Yt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, kt = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Lo = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Kn = (e) => {
  const t = $(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Yn;
const Po = () => Yn || (Yn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let fe;
class wo {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = fe, !t && fe && (this.index = (fe.scopes || (fe.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = fe;
      try {
        return fe = this, t();
      } finally {
        fe = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    fe = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    fe = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Mo(e, t = fe) {
  t && t.active && t.effects.push(e);
}
function Uo() {
  return fe;
}
const xn = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Is = (e) => (e.w & Me) > 0, ks = (e) => (e.n & Me) > 0, jo = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Me;
}, Ho = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let s = 0; s < t.length; s++) {
      const o = t[s];
      Is(o) && !ks(o) ? o.delete(e) : t[n++] = o, o.w &= ~Me, o.n &= ~Me;
    }
    t.length = n;
  }
}, tn = /* @__PURE__ */ new WeakMap();
let at = 0, Me = 1;
const nn = 30;
let pe;
const Ye = Symbol(""), sn = Symbol("");
class An {
  constructor(t, n = null, s) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Mo(this, s);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = pe, n = Pe;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = pe, pe = this, Pe = !0, Me = 1 << ++at, at <= nn ? jo(this) : Xn(this), this.fn();
    } finally {
      at <= nn && Ho(this), Me = 1 << --at, pe = this.parent, Pe = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    pe === this ? this.deferStop = !0 : this.active && (Xn(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Xn(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Pe = !0;
const Rs = [];
function it() {
  Rs.push(Pe), Pe = !1;
}
function rt() {
  const e = Rs.pop();
  Pe = e === void 0 ? !0 : e;
}
function oe(e, t, n) {
  if (Pe && pe) {
    let s = tn.get(e);
    s || tn.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || s.set(n, o = xn()), Cs(o);
  }
}
function Cs(e, t) {
  let n = !1;
  at <= nn ? ks(e) || (e.n |= Me, n = !Is(e)) : n = !e.has(pe), n && (e.add(pe), pe.deps.push(e));
}
function ke(e, t, n, s, o, i) {
  const r = tn.get(e);
  if (!r)
    return;
  let c = [];
  if (t === "clear")
    c = [...r.values()];
  else if (n === "length" && I(e)) {
    const u = Number(s);
    r.forEach((_, g) => {
      (g === "length" || g >= u) && c.push(_);
    });
  } else
    switch (n !== void 0 && c.push(r.get(n)), t) {
      case "add":
        I(e) ? yn(n) && c.push(r.get("length")) : (c.push(r.get(Ye)), et(e) && c.push(r.get(sn)));
        break;
      case "delete":
        I(e) || (c.push(r.get(Ye)), et(e) && c.push(r.get(sn)));
        break;
      case "set":
        et(e) && c.push(r.get(Ye));
        break;
    }
  if (c.length === 1)
    c[0] && on(c[0]);
  else {
    const u = [];
    for (const _ of c)
      _ && u.push(..._);
    on(xn(u));
  }
}
function on(e, t) {
  const n = I(e) ? e : [...e];
  for (const s of n)
    s.computed && Zn(s);
  for (const s of n)
    s.computed || Zn(s);
}
function Zn(e, t) {
  (e !== pe || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const Go = /* @__PURE__ */ hn("__proto__,__v_isRef,__isVue"), zs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Tn)
), Fo = /* @__PURE__ */ On(), Wo = /* @__PURE__ */ On(!1, !0), Vo = /* @__PURE__ */ On(!0), $n = /* @__PURE__ */ Bo();
function Bo() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = P(this);
      for (let i = 0, r = this.length; i < r; i++)
        oe(s, "get", i + "");
      const o = s[t](...n);
      return o === -1 || o === !1 ? s[t](...n.map(P)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      it();
      const s = P(this)[t].apply(this, n);
      return rt(), s;
    };
  }), e;
}
function Ko(e) {
  const t = P(this);
  return oe(t, "has", e), t.hasOwnProperty(e);
}
function On(e = !1, t = !1) {
  return function(s, o, i) {
    if (o === "__v_isReactive")
      return !e;
    if (o === "__v_isReadonly")
      return e;
    if (o === "__v_isShallow")
      return t;
    if (o === "__v_raw" && i === (e ? t ? ci : Us : t ? Ms : ws).get(s))
      return s;
    const r = I(s);
    if (!e) {
      if (r && L($n, o))
        return Reflect.get($n, o, i);
      if (o === "hasOwnProperty")
        return Ko;
    }
    const c = Reflect.get(s, o, i);
    return (Tn(o) ? zs.has(o) : Go(o)) || (e || oe(s, "get", o), t) ? c : ne(c) ? r && yn(o) ? c : c.value : B(c) ? e ? js(c) : Sn(c) : c;
  };
}
const Yo = /* @__PURE__ */ Ls(), Xo = /* @__PURE__ */ Ls(!0);
function Ls(e = !1) {
  return function(n, s, o, i) {
    let r = n[s];
    if (_t(r) && ne(r) && !ne(o))
      return !1;
    if (!e && (!rn(o) && !_t(o) && (r = P(r), o = P(o)), !I(n) && ne(r) && !ne(o)))
      return r.value = o, !0;
    const c = I(n) && yn(s) ? Number(s) < n.length : L(n, s), u = Reflect.set(n, s, o, i);
    return n === P(i) && (c ? It(o, r) && ke(n, "set", s, o) : ke(n, "add", s, o)), u;
  };
}
function Zo(e, t) {
  const n = L(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && ke(e, "delete", t, void 0), s;
}
function $o(e, t) {
  const n = Reflect.has(e, t);
  return (!Tn(t) || !zs.has(t)) && oe(e, "has", t), n;
}
function Jo(e) {
  return oe(e, "iterate", I(e) ? "length" : Ye), Reflect.ownKeys(e);
}
const Ps = {
  get: Fo,
  set: Yo,
  deleteProperty: Zo,
  has: $o,
  ownKeys: Jo
}, qo = {
  get: Vo,
  set(e, t) {
    return !0;
  },
  deleteProperty(e, t) {
    return !0;
  }
}, Qo = /* @__PURE__ */ J({}, Ps, {
  get: Wo,
  set: Xo
}), Nn = (e) => e, Mt = (e) => Reflect.getPrototypeOf(e);
function vt(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const o = P(e), i = P(t);
  n || (t !== i && oe(o, "get", t), oe(o, "get", i));
  const { has: r } = Mt(o), c = s ? Nn : n ? Rn : kn;
  if (r.call(o, t))
    return c(e.get(t));
  if (r.call(o, i))
    return c(e.get(i));
  e !== o && e.get(t);
}
function Et(e, t = !1) {
  const n = this.__v_raw, s = P(n), o = P(e);
  return t || (e !== o && oe(s, "has", e), oe(s, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o);
}
function Tt(e, t = !1) {
  return e = e.__v_raw, !t && oe(P(e), "iterate", Ye), Reflect.get(e, "size", e);
}
function Jn(e) {
  e = P(e);
  const t = P(this);
  return Mt(t).has.call(t, e) || (t.add(e), ke(t, "add", e, e)), this;
}
function qn(e, t) {
  t = P(t);
  const n = P(this), { has: s, get: o } = Mt(n);
  let i = s.call(n, e);
  i || (e = P(e), i = s.call(n, e));
  const r = o.call(n, e);
  return n.set(e, t), i ? It(t, r) && ke(n, "set", e, t) : ke(n, "add", e, t), this;
}
function Qn(e) {
  const t = P(this), { has: n, get: s } = Mt(t);
  let o = n.call(t, e);
  o || (e = P(e), o = n.call(t, e)), s && s.call(t, e);
  const i = t.delete(e);
  return o && ke(t, "delete", e, void 0), i;
}
function es() {
  const e = P(this), t = e.size !== 0, n = e.clear();
  return t && ke(e, "clear", void 0, void 0), n;
}
function yt(e, t) {
  return function(s, o) {
    const i = this, r = i.__v_raw, c = P(r), u = t ? Nn : e ? Rn : kn;
    return !e && oe(c, "iterate", Ye), r.forEach((_, g) => s.call(o, u(_), u(g), i));
  };
}
function xt(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = P(o), r = et(i), c = e === "entries" || e === Symbol.iterator && r, u = e === "keys" && r, _ = o[e](...s), g = n ? Nn : t ? Rn : kn;
    return !t && oe(i, "iterate", u ? sn : Ye), {
      // iterator protocol
      next() {
        const { value: E, done: y } = _.next();
        return y ? { value: E, done: y } : {
          value: c ? [g(E[0]), g(E[1])] : g(E),
          done: y
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function ze(e) {
  return function(...t) {
    return e === "delete" ? !1 : this;
  };
}
function ei() {
  const e = {
    get(i) {
      return vt(this, i);
    },
    get size() {
      return Tt(this);
    },
    has: Et,
    add: Jn,
    set: qn,
    delete: Qn,
    clear: es,
    forEach: yt(!1, !1)
  }, t = {
    get(i) {
      return vt(this, i, !1, !0);
    },
    get size() {
      return Tt(this);
    },
    has: Et,
    add: Jn,
    set: qn,
    delete: Qn,
    clear: es,
    forEach: yt(!1, !0)
  }, n = {
    get(i) {
      return vt(this, i, !0);
    },
    get size() {
      return Tt(this, !0);
    },
    has(i) {
      return Et.call(this, i, !0);
    },
    add: ze(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: ze(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: ze(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: ze(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: yt(!0, !1)
  }, s = {
    get(i) {
      return vt(this, i, !0, !0);
    },
    get size() {
      return Tt(this, !0);
    },
    has(i) {
      return Et.call(this, i, !0);
    },
    add: ze(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: ze(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: ze(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: ze(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: yt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
    e[i] = xt(i, !1, !1), n[i] = xt(i, !0, !1), t[i] = xt(i, !1, !0), s[i] = xt(i, !0, !0);
  }), [
    e,
    n,
    t,
    s
  ];
}
const [ti, ni, si, oi] = /* @__PURE__ */ ei();
function Dn(e, t) {
  const n = t ? e ? oi : si : e ? ni : ti;
  return (s, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(L(n, o) && o in s ? n : s, o, i);
}
const ii = {
  get: /* @__PURE__ */ Dn(!1, !1)
}, ri = {
  get: /* @__PURE__ */ Dn(!1, !0)
}, li = {
  get: /* @__PURE__ */ Dn(!0, !1)
}, ws = /* @__PURE__ */ new WeakMap(), Ms = /* @__PURE__ */ new WeakMap(), Us = /* @__PURE__ */ new WeakMap(), ci = /* @__PURE__ */ new WeakMap();
function ai(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function ui(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ai(Ro(e));
}
function Sn(e) {
  return _t(e) ? e : In(e, !1, Ps, ii, ws);
}
function fi(e) {
  return In(e, !1, Qo, ri, Ms);
}
function js(e) {
  return In(e, !0, qo, li, Us);
}
function In(e, t, n, s, o) {
  if (!B(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const r = ui(e);
  if (r === 0)
    return e;
  const c = new Proxy(e, r === 2 ? s : n);
  return o.set(e, c), c;
}
function tt(e) {
  return _t(e) ? tt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function _t(e) {
  return !!(e && e.__v_isReadonly);
}
function rn(e) {
  return !!(e && e.__v_isShallow);
}
function Hs(e) {
  return tt(e) || _t(e);
}
function P(e) {
  const t = e && e.__v_raw;
  return t ? P(t) : e;
}
function Gs(e) {
  return kt(e, "__v_skip", !0), e;
}
const kn = (e) => B(e) ? Sn(e) : e, Rn = (e) => B(e) ? js(e) : e;
function _i(e) {
  Pe && pe && (e = P(e), Cs(e.dep || (e.dep = xn())));
}
function pi(e, t) {
  e = P(e);
  const n = e.dep;
  n && on(n);
}
function ne(e) {
  return !!(e && e.__v_isRef === !0);
}
function di(e) {
  return ne(e) ? e.value : e;
}
const gi = {
  get: (e, t, n) => di(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return ne(o) && !ne(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Fs(e) {
  return tt(e) ? e : new Proxy(e, gi);
}
var Ws;
class mi {
  constructor(t, n, s, o) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Ws] = !1, this._dirty = !0, this.effect = new An(t, () => {
      this._dirty || (this._dirty = !0, pi(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = s;
  }
  get value() {
    const t = P(this);
    return _i(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Ws = "__v_isReadonly";
function hi(e, t, n = !1) {
  let s, o;
  const i = R(e);
  return i ? (s = e, o = me) : (s = e.get, o = e.set), new mi(s, o, i || !o, n);
}
function we(e, t, n, s) {
  let o;
  try {
    o = s ? e(...s) : e();
  } catch (i) {
    Ut(i, t, n);
  }
  return o;
}
function ae(e, t, n, s) {
  if (R(e)) {
    const i = we(e, t, n, s);
    return i && Os(i) && i.catch((r) => {
      Ut(r, t, n);
    }), i;
  }
  const o = [];
  for (let i = 0; i < e.length; i++)
    o.push(ae(e[i], t, n, s));
  return o;
}
function Ut(e, t, n, s = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const r = t.proxy, c = n;
    for (; i; ) {
      const _ = i.ec;
      if (_) {
        for (let g = 0; g < _.length; g++)
          if (_[g](e, r, c) === !1)
            return;
      }
      i = i.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      we(u, null, 10, [e, r, c]);
      return;
    }
  }
  bi(e, n, o, s);
}
function bi(e, t, n, s = !0) {
  console.error(e);
}
let pt = !1, ln = !1;
const Q = [];
let Ae = 0;
const nt = [];
let Se = null, Ve = 0;
const Vs = /* @__PURE__ */ Promise.resolve();
let Cn = null;
function Bs(e) {
  const t = Cn || Vs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function vi(e) {
  let t = Ae + 1, n = Q.length;
  for (; t < n; ) {
    const s = t + n >>> 1;
    dt(Q[s]) < e ? t = s + 1 : n = s;
  }
  return t;
}
function zn(e) {
  (!Q.length || !Q.includes(e, pt && e.allowRecurse ? Ae + 1 : Ae)) && (e.id == null ? Q.push(e) : Q.splice(vi(e.id), 0, e), Ks());
}
function Ks() {
  !pt && !ln && (ln = !0, Cn = Vs.then(Xs));
}
function Ei(e) {
  const t = Q.indexOf(e);
  t > Ae && Q.splice(t, 1);
}
function Ti(e) {
  I(e) ? nt.push(...e) : (!Se || !Se.includes(e, e.allowRecurse ? Ve + 1 : Ve)) && nt.push(e), Ks();
}
function ts(e, t = pt ? Ae + 1 : 0) {
  for (; t < Q.length; t++) {
    const n = Q[t];
    n && n.pre && (Q.splice(t, 1), t--, n());
  }
}
function Ys(e) {
  if (nt.length) {
    const t = [...new Set(nt)];
    if (nt.length = 0, Se) {
      Se.push(...t);
      return;
    }
    for (Se = t, Se.sort((n, s) => dt(n) - dt(s)), Ve = 0; Ve < Se.length; Ve++)
      Se[Ve]();
    Se = null, Ve = 0;
  }
}
const dt = (e) => e.id == null ? 1 / 0 : e.id, yi = (e, t) => {
  const n = dt(e) - dt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Xs(e) {
  ln = !1, pt = !0, Q.sort(yi);
  const t = me;
  try {
    for (Ae = 0; Ae < Q.length; Ae++) {
      const n = Q[Ae];
      n && n.active !== !1 && we(
        n,
        null,
        14
        /* ErrorCodes.SCHEDULER */
      );
    }
  } finally {
    Ae = 0, Q.length = 0, Ys(), pt = !1, Cn = null, (Q.length || nt.length) && Xs();
  }
}
function xi(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || G;
  let o = n;
  const i = t.startsWith("update:"), r = i && t.slice(7);
  if (r && r in s) {
    const g = `${r === "modelValue" ? "model" : r}Modifiers`, { number: E, trim: y } = s[g] || G;
    y && (o = n.map((S) => $(S) ? S.trim() : S)), E && (o = n.map(Lo));
  }
  let c, u = s[c = Kt(t)] || // also try camelCase event handler (#2249)
  s[c = Kt(Ie(t))];
  !u && i && (u = s[c = Kt(_e(t))]), u && ae(u, e, 6, o);
  const _ = s[c + "Once"];
  if (_) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, ae(_, e, 6, o);
  }
}
function Zs(e, t, n = !1) {
  const s = t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let r = {}, c = !1;
  if (!R(e)) {
    const u = (_) => {
      const g = Zs(_, t, !0);
      g && (c = !0, J(r, g));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !i && !c ? (B(e) && s.set(e, null), null) : (I(i) ? i.forEach((u) => r[u] = null) : J(r, i), B(e) && s.set(e, r), r);
}
function jt(e, t) {
  return !e || !Lt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), L(e, t[0].toLowerCase() + t.slice(1)) || L(e, _e(t)) || L(e, t));
}
let de = null, $s = null;
function Rt(e) {
  const t = de;
  return de = e, $s = e && e.type.__scopeId || null, t;
}
function Ai(e, t = de, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && us(-1);
    const i = Rt(t);
    let r;
    try {
      r = e(...o);
    } finally {
      Rt(i), s._d && us(1);
    }
    return r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Xt(e) {
  const { type: t, vnode: n, proxy: s, withProxy: o, props: i, propsOptions: [r], slots: c, attrs: u, emit: _, render: g, renderCache: E, data: y, setupState: S, ctx: w, inheritAttrs: N } = e;
  let K, U;
  const le = Rt(e);
  try {
    if (n.shapeFlag & 4) {
      const F = o || s;
      K = xe(g.call(F, F, E, i, S, y, w)), U = u;
    } else {
      const F = t;
      K = xe(F.length > 1 ? F(i, { attrs: u, slots: c, emit: _ }) : F(
        i,
        null
        /* we know it doesn't need it */
      )), U = t.props ? u : Oi(u);
    }
  } catch (F) {
    ft.length = 0, Ut(
      F,
      e,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ), K = Oe(he);
  }
  let k = K;
  if (U && N !== !1) {
    const F = Object.keys(U), { shapeFlag: q } = k;
    F.length && q & 7 && (r && F.some(vn) && (U = Ni(U, r)), k = Ue(k, U));
  }
  return n.dirs && (k = Ue(k), k.dirs = k.dirs ? k.dirs.concat(n.dirs) : n.dirs), n.transition && (k.transition = n.transition), K = k, Rt(le), K;
}
const Oi = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Lt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ni = (e, t) => {
  const n = {};
  for (const s in e)
    (!vn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Di(e, t, n) {
  const { props: s, children: o, component: i } = e, { props: r, children: c, patchFlag: u } = t, _ = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return s ? ns(s, r, _) : !!r;
    if (u & 8) {
      const g = t.dynamicProps;
      for (let E = 0; E < g.length; E++) {
        const y = g[E];
        if (r[y] !== s[y] && !jt(_, y))
          return !0;
      }
    }
  } else
    return (o || c) && (!c || !c.$stable) ? !0 : s === r ? !1 : s ? r ? ns(s, r, _) : !0 : !!r;
  return !1;
}
function ns(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const i = s[o];
    if (t[i] !== e[i] && !jt(n, i))
      return !0;
  }
  return !1;
}
function Si({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Ii = (e) => e.__isSuspense;
function ki(e, t) {
  t && t.pendingBranch ? I(e) ? t.effects.push(...e) : t.effects.push(e) : Ti(e);
}
function Ri(e, t) {
  if (X) {
    let n = X.provides;
    const s = X.parent && X.parent.provides;
    s === n && (n = X.provides = Object.create(s)), n[e] = t;
  }
}
function Nt(e, t, n = !1) {
  const s = X || de;
  if (s) {
    const o = s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && R(t) ? t.call(s.proxy) : t;
  }
}
const At = {};
function Zt(e, t, n) {
  return Js(e, t, n);
}
function Js(e, t, { immediate: n, deep: s, flush: o, onTrack: i, onTrigger: r } = G) {
  const c = Uo() === (X == null ? void 0 : X.scope) ? X : null;
  let u, _ = !1, g = !1;
  if (ne(e) ? (u = () => e.value, _ = rn(e)) : tt(e) ? (u = () => e, s = !0) : I(e) ? (g = !0, _ = e.some((k) => tt(k) || rn(k)), u = () => e.map((k) => {
    if (ne(k))
      return k.value;
    if (tt(k))
      return qe(k);
    if (R(k))
      return we(
        k,
        c,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
  })) : R(e) ? t ? u = () => we(
    e,
    c,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : u = () => {
    if (!(c && c.isUnmounted))
      return E && E(), ae(e, c, 3, [y]);
  } : u = me, t && s) {
    const k = u;
    u = () => qe(k());
  }
  let E, y = (k) => {
    E = U.onStop = () => {
      we(
        k,
        c,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, S;
  if (mt)
    if (y = me, t ? n && ae(t, c, 3, [
      u(),
      g ? [] : void 0,
      y
    ]) : u(), o === "sync") {
      const k = kr();
      S = k.__watcherHandles || (k.__watcherHandles = []);
    } else
      return me;
  let w = g ? new Array(e.length).fill(At) : At;
  const N = () => {
    if (U.active)
      if (t) {
        const k = U.run();
        (s || _ || (g ? k.some((F, q) => It(F, w[q])) : It(k, w))) && (E && E(), ae(t, c, 3, [
          k,
          // pass undefined as the old value when it's changed for the first time
          w === At ? void 0 : g && w[0] === At ? [] : w,
          y
        ]), w = k);
      } else
        U.run();
  };
  N.allowRecurse = !!t;
  let K;
  o === "sync" ? K = N : o === "post" ? K = () => se(N, c && c.suspense) : (N.pre = !0, c && (N.id = c.uid), K = () => zn(N));
  const U = new An(u, K);
  t ? n ? N() : w = U.run() : o === "post" ? se(U.run.bind(U), c && c.suspense) : U.run();
  const le = () => {
    U.stop(), c && c.scope && En(c.scope.effects, U);
  };
  return S && S.push(le), le;
}
function Ci(e, t, n) {
  const s = this.proxy, o = $(e) ? e.includes(".") ? qs(s, e) : () => s[e] : e.bind(s, s);
  let i;
  R(t) ? i = t : (i = t.handler, n = t);
  const r = X;
  ot(this);
  const c = Js(o, i.bind(s), n);
  return r ? ot(r) : Xe(), c;
}
function qs(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
function qe(e, t) {
  if (!B(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), ne(e))
    qe(e.value, t);
  else if (I(e))
    for (let n = 0; n < e.length; n++)
      qe(e[n], t);
  else if (As(e) || et(e))
    e.forEach((n) => {
      qe(n, t);
    });
  else if (Ds(e))
    for (const n in e)
      qe(e[n], t);
  return e;
}
function zi() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return no(() => {
    e.isMounted = !0;
  }), so(() => {
    e.isUnmounting = !0;
  }), e;
}
const ce = [Function, Array], Li = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: ce,
    onEnter: ce,
    onAfterEnter: ce,
    onEnterCancelled: ce,
    // leave
    onBeforeLeave: ce,
    onLeave: ce,
    onAfterLeave: ce,
    onLeaveCancelled: ce,
    // appear
    onBeforeAppear: ce,
    onAppear: ce,
    onAfterAppear: ce,
    onAppearCancelled: ce
  },
  setup(e, { slots: t }) {
    const n = yr(), s = zi();
    let o;
    return () => {
      const i = t.default && eo(t.default(), !0);
      if (!i || !i.length)
        return;
      let r = i[0];
      if (i.length > 1) {
        for (const N of i)
          if (N.type !== he) {
            r = N;
            break;
          }
      }
      const c = P(e), { mode: u } = c;
      if (s.isLeaving)
        return $t(r);
      const _ = ss(r);
      if (!_)
        return $t(r);
      const g = cn(_, c, s, n);
      an(_, g);
      const E = n.subTree, y = E && ss(E);
      let S = !1;
      const { getTransitionKey: w } = _.type;
      if (w) {
        const N = w();
        o === void 0 ? o = N : N !== o && (o = N, S = !0);
      }
      if (y && y.type !== he && (!Be(_, y) || S)) {
        const N = cn(y, c, s, n);
        if (an(y, N), u === "out-in")
          return s.isLeaving = !0, N.afterLeave = () => {
            s.isLeaving = !1, n.update.active !== !1 && n.update();
          }, $t(r);
        u === "in-out" && _.type !== he && (N.delayLeave = (K, U, le) => {
          const k = Qs(s, y);
          k[String(y.key)] = y, K._leaveCb = () => {
            U(), K._leaveCb = void 0, delete g.delayedLeave;
          }, g.delayedLeave = le;
        });
      }
      return r;
    };
  }
}, Pi = Li;
function Qs(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function cn(e, t, n, s) {
  const { appear: o, mode: i, persisted: r = !1, onBeforeEnter: c, onEnter: u, onAfterEnter: _, onEnterCancelled: g, onBeforeLeave: E, onLeave: y, onAfterLeave: S, onLeaveCancelled: w, onBeforeAppear: N, onAppear: K, onAfterAppear: U, onAppearCancelled: le } = t, k = String(e.key), F = Qs(n, e), q = (C, Z) => {
    C && ae(C, s, 9, Z);
  }, Ze = (C, Z) => {
    const W = Z[1];
    q(C, Z), I(C) ? C.every((ie) => ie.length <= 1) && W() : C.length <= 1 && W();
  }, Ce = {
    mode: i,
    persisted: r,
    beforeEnter(C) {
      let Z = c;
      if (!n.isMounted)
        if (o)
          Z = N || c;
        else
          return;
      C._leaveCb && C._leaveCb(
        !0
        /* cancelled */
      );
      const W = F[k];
      W && Be(e, W) && W.el._leaveCb && W.el._leaveCb(), q(Z, [C]);
    },
    enter(C) {
      let Z = u, W = _, ie = g;
      if (!n.isMounted)
        if (o)
          Z = K || u, W = U || _, ie = le || g;
        else
          return;
      let be = !1;
      const Ne = C._enterCb = (lt) => {
        be || (be = !0, lt ? q(ie, [C]) : q(W, [C]), Ce.delayedLeave && Ce.delayedLeave(), C._enterCb = void 0);
      };
      Z ? Ze(Z, [C, Ne]) : Ne();
    },
    leave(C, Z) {
      const W = String(e.key);
      if (C._enterCb && C._enterCb(
        !0
        /* cancelled */
      ), n.isUnmounting)
        return Z();
      q(E, [C]);
      let ie = !1;
      const be = C._leaveCb = (Ne) => {
        ie || (ie = !0, Z(), Ne ? q(w, [C]) : q(S, [C]), C._leaveCb = void 0, F[W] === e && delete F[W]);
      };
      F[W] = e, y ? Ze(y, [C, be]) : be();
    },
    clone(C) {
      return cn(C, t, n, s);
    }
  };
  return Ce;
}
function $t(e) {
  if (Ht(e))
    return e = Ue(e), e.children = null, e;
}
function ss(e) {
  return Ht(e) ? e.children ? e.children[0] : void 0 : e;
}
function an(e, t) {
  e.shapeFlag & 6 && e.component ? an(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function eo(e, t = !1, n) {
  let s = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    const c = n == null ? r.key : String(n) + String(r.key != null ? r.key : i);
    r.type === ye ? (r.patchFlag & 128 && o++, s = s.concat(eo(r.children, t, c))) : (t || r.type !== he) && s.push(c != null ? Ue(r, { key: c }) : r);
  }
  if (o > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
function wi(e) {
  return R(e) ? { setup: e, name: e.name } : e;
}
const Dt = (e) => !!e.type.__asyncLoader, Ht = (e) => e.type.__isKeepAlive;
function Mi(e, t) {
  to(e, "a", t);
}
function Ui(e, t) {
  to(e, "da", t);
}
function to(e, t, n = X) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Gt(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Ht(o.parent.vnode) && ji(s, t, n, o), o = o.parent;
  }
}
function ji(e, t, n, s) {
  const o = Gt(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  oo(() => {
    En(s[t], o);
  }, n);
}
function Gt(e, t, n = X, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...r) => {
      if (n.isUnmounted)
        return;
      it(), ot(n);
      const c = ae(t, n, e, r);
      return Xe(), rt(), c;
    });
    return s ? o.unshift(i) : o.push(i), i;
  }
}
const Re = (e) => (t, n = X) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!mt || e === "sp") && Gt(e, (...s) => t(...s), n)
), Hi = Re(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
), no = Re(
  "m"
  /* LifecycleHooks.MOUNTED */
), Gi = Re(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
), Fi = Re(
  "u"
  /* LifecycleHooks.UPDATED */
), so = Re(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
), oo = Re(
  "um"
  /* LifecycleHooks.UNMOUNTED */
), Wi = Re(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
), Vi = Re(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
), Bi = Re(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function Ki(e, t = X) {
  Gt("ec", e, t);
}
function Ge(e, t, n, s) {
  const o = e.dirs, i = t && t.dirs;
  for (let r = 0; r < o.length; r++) {
    const c = o[r];
    i && (c.oldValue = i[r].value);
    let u = c.dir[s];
    u && (it(), ae(u, n, 8, [
      e.el,
      c,
      e,
      t
    ]), rt());
  }
}
const Yi = Symbol(), un = (e) => e ? mo(e) ? Un(e) || e.proxy : un(e.parent) : null, ut = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ J(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => un(e.parent),
    $root: (e) => un(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Ln(e),
    $forceUpdate: (e) => e.f || (e.f = () => zn(e.update)),
    $nextTick: (e) => e.n || (e.n = Bs.bind(e.proxy)),
    $watch: (e) => Ci.bind(e)
  })
), Jt = (e, t) => e !== G && !e.__isScriptSetup && L(e, t), Xi = {
  get({ _: e }, t) {
    const { ctx: n, setupState: s, data: o, props: i, accessCache: r, type: c, appContext: u } = e;
    let _;
    if (t[0] !== "$") {
      const S = r[t];
      if (S !== void 0)
        switch (S) {
          case 1:
            return s[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (Jt(s, t))
          return r[t] = 1, s[t];
        if (o !== G && L(o, t))
          return r[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (_ = e.propsOptions[0]) && L(_, t)
        )
          return r[t] = 3, i[t];
        if (n !== G && L(n, t))
          return r[t] = 4, n[t];
        fn && (r[t] = 0);
      }
    }
    const g = ut[t];
    let E, y;
    if (g)
      return t === "$attrs" && oe(e, "get", t), g(e);
    if (
      // css module (injected by vue-loader)
      (E = c.__cssModules) && (E = E[t])
    )
      return E;
    if (n !== G && L(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      y = u.config.globalProperties, L(y, t)
    )
      return y[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: i } = e;
    return Jt(o, t) ? (o[t] = n, !0) : s !== G && L(s, t) ? (s[t] = n, !0) : L(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: i } }, r) {
    let c;
    return !!n[r] || e !== G && L(e, r) || Jt(t, r) || (c = i[0]) && L(c, r) || L(s, r) || L(ut, r) || L(o.config.globalProperties, r);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : L(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
let fn = !0;
function Zi(e) {
  const t = Ln(e), n = e.proxy, s = e.ctx;
  fn = !1, t.beforeCreate && os(
    t.beforeCreate,
    e,
    "bc"
    /* LifecycleHooks.BEFORE_CREATE */
  );
  const {
    // state
    data: o,
    computed: i,
    methods: r,
    watch: c,
    provide: u,
    inject: _,
    // lifecycle
    created: g,
    beforeMount: E,
    mounted: y,
    beforeUpdate: S,
    updated: w,
    activated: N,
    deactivated: K,
    beforeDestroy: U,
    beforeUnmount: le,
    destroyed: k,
    unmounted: F,
    render: q,
    renderTracked: Ze,
    renderTriggered: Ce,
    errorCaptured: C,
    serverPrefetch: Z,
    // public API
    expose: W,
    inheritAttrs: ie,
    // assets
    components: be,
    directives: Ne,
    filters: lt
  } = t;
  if (_ && $i(_, s, null, e.appContext.config.unwrapInjectedRef), r)
    for (const V in r) {
      const j = r[V];
      R(j) && (s[V] = j.bind(n));
    }
  if (o) {
    const V = o.call(n, n);
    B(V) && (e.data = Sn(V));
  }
  if (fn = !0, i)
    for (const V in i) {
      const j = i[V], je = R(j) ? j.bind(n, n) : R(j.get) ? j.get.bind(n, n) : me, ht = !R(j) && R(j.set) ? j.set.bind(n) : me, He = Sr({
        get: je,
        set: ht
      });
      Object.defineProperty(s, V, {
        enumerable: !0,
        configurable: !0,
        get: () => He.value,
        set: (ve) => He.value = ve
      });
    }
  if (c)
    for (const V in c)
      io(c[V], s, n, V);
  if (u) {
    const V = R(u) ? u.call(n) : u;
    Reflect.ownKeys(V).forEach((j) => {
      Ri(j, V[j]);
    });
  }
  g && os(
    g,
    e,
    "c"
    /* LifecycleHooks.CREATED */
  );
  function ee(V, j) {
    I(j) ? j.forEach((je) => V(je.bind(n))) : j && V(j.bind(n));
  }
  if (ee(Hi, E), ee(no, y), ee(Gi, S), ee(Fi, w), ee(Mi, N), ee(Ui, K), ee(Ki, C), ee(Bi, Ze), ee(Vi, Ce), ee(so, le), ee(oo, F), ee(Wi, Z), I(W))
    if (W.length) {
      const V = e.exposed || (e.exposed = {});
      W.forEach((j) => {
        Object.defineProperty(V, j, {
          get: () => n[j],
          set: (je) => n[j] = je
        });
      });
    } else
      e.exposed || (e.exposed = {});
  q && e.render === me && (e.render = q), ie != null && (e.inheritAttrs = ie), be && (e.components = be), Ne && (e.directives = Ne);
}
function $i(e, t, n = me, s = !1) {
  I(e) && (e = _n(e));
  for (const o in e) {
    const i = e[o];
    let r;
    B(i) ? "default" in i ? r = Nt(
      i.from || o,
      i.default,
      !0
      /* treat default function as factory */
    ) : r = Nt(i.from || o) : r = Nt(i), ne(r) && s ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (c) => r.value = c
    }) : t[o] = r;
  }
}
function os(e, t, n) {
  ae(I(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function io(e, t, n, s) {
  const o = s.includes(".") ? qs(n, s) : () => n[s];
  if ($(e)) {
    const i = t[e];
    R(i) && Zt(o, i);
  } else if (R(e))
    Zt(o, e.bind(n));
  else if (B(e))
    if (I(e))
      e.forEach((i) => io(i, t, n, s));
    else {
      const i = R(e.handler) ? e.handler.bind(n) : t[e.handler];
      R(i) && Zt(o, i, e);
    }
}
function Ln(e) {
  const t = e.type, { mixins: n, extends: s } = t, { mixins: o, optionsCache: i, config: { optionMergeStrategies: r } } = e.appContext, c = i.get(t);
  let u;
  return c ? u = c : !o.length && !n && !s ? u = t : (u = {}, o.length && o.forEach((_) => Ct(u, _, r, !0)), Ct(u, t, r)), B(t) && i.set(t, u), u;
}
function Ct(e, t, n, s = !1) {
  const { mixins: o, extends: i } = t;
  i && Ct(e, i, n, !0), o && o.forEach((r) => Ct(e, r, n, !0));
  for (const r in t)
    if (!(s && r === "expose")) {
      const c = Ji[r] || n && n[r];
      e[r] = c ? c(e[r], t[r]) : t[r];
    }
  return e;
}
const Ji = {
  data: is,
  props: We,
  emits: We,
  // objects
  methods: We,
  computed: We,
  // lifecycle
  beforeCreate: te,
  created: te,
  beforeMount: te,
  mounted: te,
  beforeUpdate: te,
  updated: te,
  beforeDestroy: te,
  beforeUnmount: te,
  destroyed: te,
  unmounted: te,
  activated: te,
  deactivated: te,
  errorCaptured: te,
  serverPrefetch: te,
  // assets
  components: We,
  directives: We,
  // watch
  watch: Qi,
  // provide / inject
  provide: is,
  inject: qi
};
function is(e, t) {
  return t ? e ? function() {
    return J(R(e) ? e.call(this, this) : e, R(t) ? t.call(this, this) : t);
  } : t : e;
}
function qi(e, t) {
  return We(_n(e), _n(t));
}
function _n(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function te(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function We(e, t) {
  return e ? J(J(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function Qi(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = J(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = te(e[s], t[s]);
  return n;
}
function er(e, t, n, s = !1) {
  const o = {}, i = {};
  kt(i, Wt, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), ro(e, t, o, i);
  for (const r in e.propsOptions[0])
    r in o || (o[r] = void 0);
  n ? e.props = s ? o : fi(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function tr(e, t, n, s) {
  const { props: o, attrs: i, vnode: { patchFlag: r } } = e, c = P(o), [u] = e.propsOptions;
  let _ = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const g = e.vnode.dynamicProps;
      for (let E = 0; E < g.length; E++) {
        let y = g[E];
        if (jt(e.emitsOptions, y))
          continue;
        const S = t[y];
        if (u)
          if (L(i, y))
            S !== i[y] && (i[y] = S, _ = !0);
          else {
            const w = Ie(y);
            o[w] = pn(
              u,
              c,
              w,
              S,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          S !== i[y] && (i[y] = S, _ = !0);
      }
    }
  } else {
    ro(e, t, o, i) && (_ = !0);
    let g;
    for (const E in c)
      (!t || // for camelCase
      !L(t, E) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((g = _e(E)) === E || !L(t, g))) && (u ? n && // for camelCase
      (n[E] !== void 0 || // for kebab-case
      n[g] !== void 0) && (o[E] = pn(
        u,
        c,
        E,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete o[E]);
    if (i !== c)
      for (const E in i)
        (!t || !L(t, E)) && (delete i[E], _ = !0);
  }
  _ && ke(e, "set", "$attrs");
}
function ro(e, t, n, s) {
  const [o, i] = e.propsOptions;
  let r = !1, c;
  if (t)
    for (let u in t) {
      if (Ot(u))
        continue;
      const _ = t[u];
      let g;
      o && L(o, g = Ie(u)) ? !i || !i.includes(g) ? n[g] = _ : (c || (c = {}))[g] = _ : jt(e.emitsOptions, u) || (!(u in s) || _ !== s[u]) && (s[u] = _, r = !0);
    }
  if (i) {
    const u = P(n), _ = c || G;
    for (let g = 0; g < i.length; g++) {
      const E = i[g];
      n[E] = pn(o, u, E, _[E], e, !L(_, E));
    }
  }
  return r;
}
function pn(e, t, n, s, o, i) {
  const r = e[n];
  if (r != null) {
    const c = L(r, "default");
    if (c && s === void 0) {
      const u = r.default;
      if (r.type !== Function && R(u)) {
        const { propsDefaults: _ } = o;
        n in _ ? s = _[n] : (ot(o), s = _[n] = u.call(null, t), Xe());
      } else
        s = u;
    }
    r[
      0
      /* BooleanFlags.shouldCast */
    ] && (i && !c ? s = !1 : r[
      1
      /* BooleanFlags.shouldCastTrue */
    ] && (s === "" || s === _e(n)) && (s = !0));
  }
  return s;
}
function lo(e, t, n = !1) {
  const s = t.propsCache, o = s.get(e);
  if (o)
    return o;
  const i = e.props, r = {}, c = [];
  let u = !1;
  if (!R(e)) {
    const g = (E) => {
      u = !0;
      const [y, S] = lo(E, t, !0);
      J(r, y), S && c.push(...S);
    };
    !n && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g);
  }
  if (!i && !u)
    return B(e) && s.set(e, Qe), Qe;
  if (I(i))
    for (let g = 0; g < i.length; g++) {
      const E = Ie(i[g]);
      rs(E) && (r[E] = G);
    }
  else if (i)
    for (const g in i) {
      const E = Ie(g);
      if (rs(E)) {
        const y = i[g], S = r[E] = I(y) || R(y) ? { type: y } : Object.assign({}, y);
        if (S) {
          const w = as(Boolean, S.type), N = as(String, S.type);
          S[
            0
            /* BooleanFlags.shouldCast */
          ] = w > -1, S[
            1
            /* BooleanFlags.shouldCastTrue */
          ] = N < 0 || w < N, (w > -1 || L(S, "default")) && c.push(E);
        }
      }
    }
  const _ = [r, c];
  return B(e) && s.set(e, _), _;
}
function rs(e) {
  return e[0] !== "$";
}
function ls(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function cs(e, t) {
  return ls(e) === ls(t);
}
function as(e, t) {
  return I(t) ? t.findIndex((n) => cs(n, e)) : R(t) && cs(t, e) ? 0 : -1;
}
const co = (e) => e[0] === "_" || e === "$stable", Pn = (e) => I(e) ? e.map(xe) : [xe(e)], nr = (e, t, n) => {
  if (t._n)
    return t;
  const s = Ai((...o) => Pn(t(...o)), n);
  return s._c = !1, s;
}, ao = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (co(o))
      continue;
    const i = e[o];
    if (R(i))
      t[o] = nr(o, i, s);
    else if (i != null) {
      const r = Pn(i);
      t[o] = () => r;
    }
  }
}, uo = (e, t) => {
  const n = Pn(t);
  e.slots.default = () => n;
}, sr = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = P(t), kt(t, "_", n)) : ao(t, e.slots = {});
  } else
    e.slots = {}, t && uo(e, t);
  kt(e.slots, Wt, 1);
}, or = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let i = !0, r = G;
  if (s.shapeFlag & 32) {
    const c = t._;
    c ? n && c === 1 ? i = !1 : (J(o, t), !n && c === 1 && delete o._) : (i = !t.$stable, ao(t, o)), r = t;
  } else
    t && (uo(e, t), r = { default: 1 });
  if (i)
    for (const c in o)
      !co(c) && !(c in r) && delete o[c];
};
function fo() {
  return {
    app: null,
    config: {
      isNativeTag: So,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let ir = 0;
function rr(e, t) {
  return function(s, o = null) {
    R(s) || (s = Object.assign({}, s)), o != null && !B(o) && (o = null);
    const i = fo(), r = /* @__PURE__ */ new Set();
    let c = !1;
    const u = i.app = {
      _uid: ir++,
      _component: s,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: Rr,
      get config() {
        return i.config;
      },
      set config(_) {
      },
      use(_, ...g) {
        return r.has(_) || (_ && R(_.install) ? (r.add(_), _.install(u, ...g)) : R(_) && (r.add(_), _(u, ...g))), u;
      },
      mixin(_) {
        return i.mixins.includes(_) || i.mixins.push(_), u;
      },
      component(_, g) {
        return g ? (i.components[_] = g, u) : i.components[_];
      },
      directive(_, g) {
        return g ? (i.directives[_] = g, u) : i.directives[_];
      },
      mount(_, g, E) {
        if (!c) {
          const y = Oe(s, o);
          return y.appContext = i, g && t ? t(y, _) : e(y, _, E), c = !0, u._container = _, _.__vue_app__ = u, Un(y.component) || y.component.proxy;
        }
      },
      unmount() {
        c && (e(null, u._container), delete u._container.__vue_app__);
      },
      provide(_, g) {
        return i.provides[_] = g, u;
      }
    };
    return u;
  };
}
function dn(e, t, n, s, o = !1) {
  if (I(e)) {
    e.forEach((y, S) => dn(y, t && (I(t) ? t[S] : t), n, s, o));
    return;
  }
  if (Dt(s) && !o)
    return;
  const i = s.shapeFlag & 4 ? Un(s.component) || s.component.proxy : s.el, r = o ? null : i, { i: c, r: u } = e, _ = t && t.r, g = c.refs === G ? c.refs = {} : c.refs, E = c.setupState;
  if (_ != null && _ !== u && ($(_) ? (g[_] = null, L(E, _) && (E[_] = null)) : ne(_) && (_.value = null)), R(u))
    we(u, c, 12, [r, g]);
  else {
    const y = $(u), S = ne(u);
    if (y || S) {
      const w = () => {
        if (e.f) {
          const N = y ? L(E, u) ? E[u] : g[u] : u.value;
          o ? I(N) && En(N, i) : I(N) ? N.includes(i) || N.push(i) : y ? (g[u] = [i], L(E, u) && (E[u] = g[u])) : (u.value = [i], e.k && (g[e.k] = u.value));
        } else
          y ? (g[u] = r, L(E, u) && (E[u] = r)) : S && (u.value = r, e.k && (g[e.k] = r));
      };
      r ? (w.id = -1, se(w, n)) : w();
    }
  }
}
const se = ki;
function lr(e) {
  return cr(e);
}
function cr(e, t) {
  const n = Po();
  n.__VUE__ = !0;
  const { insert: s, remove: o, patchProp: i, createElement: r, createText: c, createComment: u, setText: _, setElementText: g, parentNode: E, nextSibling: y, setScopeId: S = me, insertStaticContent: w } = e, N = (l, a, f, d = null, p = null, b = null, T = !1, h = null, v = !!a.dynamicChildren) => {
    if (l === a)
      return;
    l && !Be(l, a) && (d = bt(l), ve(l, p, b, !0), l = null), a.patchFlag === -2 && (v = !1, a.dynamicChildren = null);
    const { type: m, ref: A, shapeFlag: x } = a;
    switch (m) {
      case Ft:
        K(l, a, f, d);
        break;
      case he:
        U(l, a, f, d);
        break;
      case qt:
        l == null && le(a, f, d, T);
        break;
      case ye:
        be(l, a, f, d, p, b, T, h, v);
        break;
      default:
        x & 1 ? q(l, a, f, d, p, b, T, h, v) : x & 6 ? Ne(l, a, f, d, p, b, T, h, v) : (x & 64 || x & 128) && m.process(l, a, f, d, p, b, T, h, v, $e);
    }
    A != null && p && dn(A, l && l.ref, b, a || l, !a);
  }, K = (l, a, f, d) => {
    if (l == null)
      s(a.el = c(a.children), f, d);
    else {
      const p = a.el = l.el;
      a.children !== l.children && _(p, a.children);
    }
  }, U = (l, a, f, d) => {
    l == null ? s(a.el = u(a.children || ""), f, d) : a.el = l.el;
  }, le = (l, a, f, d) => {
    [l.el, l.anchor] = w(l.children, a, f, d, l.el, l.anchor);
  }, k = ({ el: l, anchor: a }, f, d) => {
    let p;
    for (; l && l !== a; )
      p = y(l), s(l, f, d), l = p;
    s(a, f, d);
  }, F = ({ el: l, anchor: a }) => {
    let f;
    for (; l && l !== a; )
      f = y(l), o(l), l = f;
    o(a);
  }, q = (l, a, f, d, p, b, T, h, v) => {
    T = T || a.type === "svg", l == null ? Ze(a, f, d, p, b, T, h, v) : Z(l, a, p, b, T, h, v);
  }, Ze = (l, a, f, d, p, b, T, h) => {
    let v, m;
    const { type: A, props: x, shapeFlag: O, transition: D, dirs: z } = l;
    if (v = l.el = r(l.type, b, x && x.is, x), O & 8 ? g(v, l.children) : O & 16 && C(l.children, v, null, d, p, b && A !== "foreignObject", T, h), z && Ge(l, null, d, "created"), Ce(v, l, l.scopeId, T, d), x) {
      for (const M in x)
        M !== "value" && !Ot(M) && i(v, M, null, x[M], b, l.children, d, p, De);
      "value" in x && i(v, "value", null, x.value), (m = x.onVnodeBeforeMount) && Te(m, d, l);
    }
    z && Ge(l, null, d, "beforeMount");
    const H = (!p || p && !p.pendingBranch) && D && !D.persisted;
    H && D.beforeEnter(v), s(v, a, f), ((m = x && x.onVnodeMounted) || H || z) && se(() => {
      m && Te(m, d, l), H && D.enter(v), z && Ge(l, null, d, "mounted");
    }, p);
  }, Ce = (l, a, f, d, p) => {
    if (f && S(l, f), d)
      for (let b = 0; b < d.length; b++)
        S(l, d[b]);
    if (p) {
      let b = p.subTree;
      if (a === b) {
        const T = p.vnode;
        Ce(l, T, T.scopeId, T.slotScopeIds, p.parent);
      }
    }
  }, C = (l, a, f, d, p, b, T, h, v = 0) => {
    for (let m = v; m < l.length; m++) {
      const A = l[m] = h ? Le(l[m]) : xe(l[m]);
      N(null, A, a, f, d, p, b, T, h);
    }
  }, Z = (l, a, f, d, p, b, T) => {
    const h = a.el = l.el;
    let { patchFlag: v, dynamicChildren: m, dirs: A } = a;
    v |= l.patchFlag & 16;
    const x = l.props || G, O = a.props || G;
    let D;
    f && Fe(f, !1), (D = O.onVnodeBeforeUpdate) && Te(D, f, a, l), A && Ge(a, l, f, "beforeUpdate"), f && Fe(f, !0);
    const z = p && a.type !== "foreignObject";
    if (m ? W(l.dynamicChildren, m, h, f, d, z, b) : T || j(l, a, h, null, f, d, z, b, !1), v > 0) {
      if (v & 16)
        ie(h, a, x, O, f, d, p);
      else if (v & 2 && x.class !== O.class && i(h, "class", null, O.class, p), v & 4 && i(h, "style", x.style, O.style, p), v & 8) {
        const H = a.dynamicProps;
        for (let M = 0; M < H.length; M++) {
          const Y = H[M], ue = x[Y], Je = O[Y];
          (Je !== ue || Y === "value") && i(h, Y, ue, Je, p, l.children, f, d, De);
        }
      }
      v & 1 && l.children !== a.children && g(h, a.children);
    } else
      !T && m == null && ie(h, a, x, O, f, d, p);
    ((D = O.onVnodeUpdated) || A) && se(() => {
      D && Te(D, f, a, l), A && Ge(a, l, f, "updated");
    }, d);
  }, W = (l, a, f, d, p, b, T) => {
    for (let h = 0; h < a.length; h++) {
      const v = l[h], m = a[h], A = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        v.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (v.type === ye || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Be(v, m) || // - In the case of a component, it could contain anything.
        v.shapeFlag & 70) ? E(v.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          f
        )
      );
      N(v, m, A, null, d, p, b, T, !0);
    }
  }, ie = (l, a, f, d, p, b, T) => {
    if (f !== d) {
      if (f !== G)
        for (const h in f)
          !Ot(h) && !(h in d) && i(l, h, f[h], null, T, a.children, p, b, De);
      for (const h in d) {
        if (Ot(h))
          continue;
        const v = d[h], m = f[h];
        v !== m && h !== "value" && i(l, h, m, v, T, a.children, p, b, De);
      }
      "value" in d && i(l, "value", f.value, d.value);
    }
  }, be = (l, a, f, d, p, b, T, h, v) => {
    const m = a.el = l ? l.el : c(""), A = a.anchor = l ? l.anchor : c("");
    let { patchFlag: x, dynamicChildren: O, slotScopeIds: D } = a;
    D && (h = h ? h.concat(D) : D), l == null ? (s(m, f, d), s(A, f, d), C(a.children, f, A, p, b, T, h, v)) : x > 0 && x & 64 && O && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (W(l.dynamicChildren, O, f, p, b, T, h), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (a.key != null || p && a === p.subTree) && _o(
      l,
      a,
      !0
      /* shallow */
    )) : j(l, a, f, A, p, b, T, h, v);
  }, Ne = (l, a, f, d, p, b, T, h, v) => {
    a.slotScopeIds = h, l == null ? a.shapeFlag & 512 ? p.ctx.activate(a, f, d, T, v) : lt(a, f, d, p, b, T, v) : Hn(l, a, v);
  }, lt = (l, a, f, d, p, b, T) => {
    const h = l.component = Tr(l, d, p);
    if (Ht(l) && (h.ctx.renderer = $e), xr(h), h.asyncDep) {
      if (p && p.registerDep(h, ee), !l.el) {
        const v = h.subTree = Oe(he);
        U(null, v, a, f);
      }
      return;
    }
    ee(h, l, a, f, p, b, T);
  }, Hn = (l, a, f) => {
    const d = a.component = l.component;
    if (Di(l, a, f))
      if (d.asyncDep && !d.asyncResolved) {
        V(d, a, f);
        return;
      } else
        d.next = a, Ei(d.update), d.update();
    else
      a.el = l.el, d.vnode = a;
  }, ee = (l, a, f, d, p, b, T) => {
    const h = () => {
      if (l.isMounted) {
        let { next: A, bu: x, u: O, parent: D, vnode: z } = l, H = A, M;
        Fe(l, !1), A ? (A.el = z.el, V(l, A, T)) : A = z, x && Yt(x), (M = A.props && A.props.onVnodeBeforeUpdate) && Te(M, D, A, z), Fe(l, !0);
        const Y = Xt(l), ue = l.subTree;
        l.subTree = Y, N(
          ue,
          Y,
          // parent may have changed if it's in a teleport
          E(ue.el),
          // anchor may have changed if it's in a fragment
          bt(ue),
          l,
          p,
          b
        ), A.el = Y.el, H === null && Si(l, Y.el), O && se(O, p), (M = A.props && A.props.onVnodeUpdated) && se(() => Te(M, D, A, z), p);
      } else {
        let A;
        const { el: x, props: O } = a, { bm: D, m: z, parent: H } = l, M = Dt(a);
        if (Fe(l, !1), D && Yt(D), !M && (A = O && O.onVnodeBeforeMount) && Te(A, H, a), Fe(l, !0), x && Bt) {
          const Y = () => {
            l.subTree = Xt(l), Bt(x, l.subTree, l, p, null);
          };
          M ? a.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !l.isUnmounted && Y()
          ) : Y();
        } else {
          const Y = l.subTree = Xt(l);
          N(null, Y, f, d, l, p, b), a.el = Y.el;
        }
        if (z && se(z, p), !M && (A = O && O.onVnodeMounted)) {
          const Y = a;
          se(() => Te(A, H, Y), p);
        }
        (a.shapeFlag & 256 || H && Dt(H.vnode) && H.vnode.shapeFlag & 256) && l.a && se(l.a, p), l.isMounted = !0, a = f = d = null;
      }
    }, v = l.effect = new An(
      h,
      () => zn(m),
      l.scope
      // track it in component's effect scope
    ), m = l.update = () => v.run();
    m.id = l.uid, Fe(l, !0), m();
  }, V = (l, a, f) => {
    a.component = l;
    const d = l.vnode.props;
    l.vnode = a, l.next = null, tr(l, a.props, d, f), or(l, a.children, f), it(), ts(), rt();
  }, j = (l, a, f, d, p, b, T, h, v = !1) => {
    const m = l && l.children, A = l ? l.shapeFlag : 0, x = a.children, { patchFlag: O, shapeFlag: D } = a;
    if (O > 0) {
      if (O & 128) {
        ht(m, x, f, d, p, b, T, h, v);
        return;
      } else if (O & 256) {
        je(m, x, f, d, p, b, T, h, v);
        return;
      }
    }
    D & 8 ? (A & 16 && De(m, p, b), x !== m && g(f, x)) : A & 16 ? D & 16 ? ht(m, x, f, d, p, b, T, h, v) : De(m, p, b, !0) : (A & 8 && g(f, ""), D & 16 && C(x, f, d, p, b, T, h, v));
  }, je = (l, a, f, d, p, b, T, h, v) => {
    l = l || Qe, a = a || Qe;
    const m = l.length, A = a.length, x = Math.min(m, A);
    let O;
    for (O = 0; O < x; O++) {
      const D = a[O] = v ? Le(a[O]) : xe(a[O]);
      N(l[O], D, f, null, p, b, T, h, v);
    }
    m > A ? De(l, p, b, !0, !1, x) : C(a, f, d, p, b, T, h, v, x);
  }, ht = (l, a, f, d, p, b, T, h, v) => {
    let m = 0;
    const A = a.length;
    let x = l.length - 1, O = A - 1;
    for (; m <= x && m <= O; ) {
      const D = l[m], z = a[m] = v ? Le(a[m]) : xe(a[m]);
      if (Be(D, z))
        N(D, z, f, null, p, b, T, h, v);
      else
        break;
      m++;
    }
    for (; m <= x && m <= O; ) {
      const D = l[x], z = a[O] = v ? Le(a[O]) : xe(a[O]);
      if (Be(D, z))
        N(D, z, f, null, p, b, T, h, v);
      else
        break;
      x--, O--;
    }
    if (m > x) {
      if (m <= O) {
        const D = O + 1, z = D < A ? a[D].el : d;
        for (; m <= O; )
          N(null, a[m] = v ? Le(a[m]) : xe(a[m]), f, z, p, b, T, h, v), m++;
      }
    } else if (m > O)
      for (; m <= x; )
        ve(l[m], p, b, !0), m++;
    else {
      const D = m, z = m, H = /* @__PURE__ */ new Map();
      for (m = z; m <= O; m++) {
        const re = a[m] = v ? Le(a[m]) : xe(a[m]);
        re.key != null && H.set(re.key, m);
      }
      let M, Y = 0;
      const ue = O - z + 1;
      let Je = !1, Wn = 0;
      const ct = new Array(ue);
      for (m = 0; m < ue; m++)
        ct[m] = 0;
      for (m = D; m <= x; m++) {
        const re = l[m];
        if (Y >= ue) {
          ve(re, p, b, !0);
          continue;
        }
        let Ee;
        if (re.key != null)
          Ee = H.get(re.key);
        else
          for (M = z; M <= O; M++)
            if (ct[M - z] === 0 && Be(re, a[M])) {
              Ee = M;
              break;
            }
        Ee === void 0 ? ve(re, p, b, !0) : (ct[Ee - z] = m + 1, Ee >= Wn ? Wn = Ee : Je = !0, N(re, a[Ee], f, null, p, b, T, h, v), Y++);
      }
      const Vn = Je ? ar(ct) : Qe;
      for (M = Vn.length - 1, m = ue - 1; m >= 0; m--) {
        const re = z + m, Ee = a[re], Bn = re + 1 < A ? a[re + 1].el : d;
        ct[m] === 0 ? N(null, Ee, f, Bn, p, b, T, h, v) : Je && (M < 0 || m !== Vn[M] ? He(
          Ee,
          f,
          Bn,
          2
          /* MoveType.REORDER */
        ) : M--);
      }
    }
  }, He = (l, a, f, d, p = null) => {
    const { el: b, type: T, transition: h, children: v, shapeFlag: m } = l;
    if (m & 6) {
      He(l.component.subTree, a, f, d);
      return;
    }
    if (m & 128) {
      l.suspense.move(a, f, d);
      return;
    }
    if (m & 64) {
      T.move(l, a, f, $e);
      return;
    }
    if (T === ye) {
      s(b, a, f);
      for (let x = 0; x < v.length; x++)
        He(v[x], a, f, d);
      s(l.anchor, a, f);
      return;
    }
    if (T === qt) {
      k(l, a, f);
      return;
    }
    if (d !== 2 && m & 1 && h)
      if (d === 0)
        h.beforeEnter(b), s(b, a, f), se(() => h.enter(b), p);
      else {
        const { leave: x, delayLeave: O, afterLeave: D } = h, z = () => s(b, a, f), H = () => {
          x(b, () => {
            z(), D && D();
          });
        };
        O ? O(b, z, H) : H();
      }
    else
      s(b, a, f);
  }, ve = (l, a, f, d = !1, p = !1) => {
    const { type: b, props: T, ref: h, children: v, dynamicChildren: m, shapeFlag: A, patchFlag: x, dirs: O } = l;
    if (h != null && dn(h, null, f, l, !0), A & 256) {
      a.ctx.deactivate(l);
      return;
    }
    const D = A & 1 && O, z = !Dt(l);
    let H;
    if (z && (H = T && T.onVnodeBeforeUnmount) && Te(H, a, l), A & 6)
      To(l.component, f, d);
    else {
      if (A & 128) {
        l.suspense.unmount(f, d);
        return;
      }
      D && Ge(l, null, a, "beforeUnmount"), A & 64 ? l.type.remove(l, a, f, p, $e, d) : m && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== ye || x > 0 && x & 64) ? De(m, a, f, !1, !0) : (b === ye && x & 384 || !p && A & 16) && De(v, a, f), d && Gn(l);
    }
    (z && (H = T && T.onVnodeUnmounted) || D) && se(() => {
      H && Te(H, a, l), D && Ge(l, null, a, "unmounted");
    }, f);
  }, Gn = (l) => {
    const { type: a, el: f, anchor: d, transition: p } = l;
    if (a === ye) {
      Eo(f, d);
      return;
    }
    if (a === qt) {
      F(l);
      return;
    }
    const b = () => {
      o(f), p && !p.persisted && p.afterLeave && p.afterLeave();
    };
    if (l.shapeFlag & 1 && p && !p.persisted) {
      const { leave: T, delayLeave: h } = p, v = () => T(f, b);
      h ? h(l.el, b, v) : v();
    } else
      b();
  }, Eo = (l, a) => {
    let f;
    for (; l !== a; )
      f = y(l), o(l), l = f;
    o(a);
  }, To = (l, a, f) => {
    const { bum: d, scope: p, update: b, subTree: T, um: h } = l;
    d && Yt(d), p.stop(), b && (b.active = !1, ve(T, l, a, f)), h && se(h, a), se(() => {
      l.isUnmounted = !0;
    }, a), a && a.pendingBranch && !a.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === a.pendingId && (a.deps--, a.deps === 0 && a.resolve());
  }, De = (l, a, f, d = !1, p = !1, b = 0) => {
    for (let T = b; T < l.length; T++)
      ve(l[T], a, f, d, p);
  }, bt = (l) => l.shapeFlag & 6 ? bt(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : y(l.anchor || l.el), Fn = (l, a, f) => {
    l == null ? a._vnode && ve(a._vnode, null, null, !0) : N(a._vnode || null, l, a, null, null, null, f), ts(), Ys(), a._vnode = l;
  }, $e = {
    p: N,
    um: ve,
    m: He,
    r: Gn,
    mt: lt,
    mc: C,
    pc: j,
    pbc: W,
    n: bt,
    o: e
  };
  let Vt, Bt;
  return t && ([Vt, Bt] = t($e)), {
    render: Fn,
    hydrate: Vt,
    createApp: rr(Fn, Vt)
  };
}
function Fe({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function _o(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (I(s) && I(o))
    for (let i = 0; i < s.length; i++) {
      const r = s[i];
      let c = o[i];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = o[i] = Le(o[i]), c.el = r.el), n || _o(r, c)), c.type === Ft && (c.el = r.el);
    }
}
function ar(e) {
  const t = e.slice(), n = [0];
  let s, o, i, r, c;
  const u = e.length;
  for (s = 0; s < u; s++) {
    const _ = e[s];
    if (_ !== 0) {
      if (o = n[n.length - 1], e[o] < _) {
        t[s] = o, n.push(s);
        continue;
      }
      for (i = 0, r = n.length - 1; i < r; )
        c = i + r >> 1, e[n[c]] < _ ? i = c + 1 : r = c;
      _ < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, r = n[i - 1]; i-- > 0; )
    n[i] = r, r = t[r];
  return n;
}
const ur = (e) => e.__isTeleport, ye = Symbol(void 0), Ft = Symbol(void 0), he = Symbol(void 0), qt = Symbol(void 0), ft = [];
let ge = null;
function zt(e = !1) {
  ft.push(ge = e ? null : []);
}
function fr() {
  ft.pop(), ge = ft[ft.length - 1] || null;
}
let gt = 1;
function us(e) {
  gt += e;
}
function po(e) {
  return e.dynamicChildren = gt > 0 ? ge || Qe : null, fr(), gt > 0 && ge && ge.push(e), e;
}
function gn(e, t, n, s, o, i) {
  return po(wn(
    e,
    t,
    n,
    s,
    o,
    i,
    !0
    /* isBlock */
  ));
}
function _r(e, t, n, s, o) {
  return po(Oe(
    e,
    t,
    n,
    s,
    o,
    !0
    /* isBlock: prevent a block from tracking itself */
  ));
}
function pr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Be(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Wt = "__vInternal", go = ({ key: e }) => e ?? null, St = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? $(e) || ne(e) || R(e) ? { i: de, r: e, k: t, f: !!n } : e : null;
function wn(e, t = null, n = null, s = 0, o = null, i = e === ye ? 0 : 1, r = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && go(t),
    ref: t && St(t),
    scopeId: $s,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: de
  };
  return c ? (Mn(u, n), i & 128 && e.normalize(u)) : n && (u.shapeFlag |= $(n) ? 8 : 16), gt > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  ge && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && ge.push(u), u;
}
const Oe = dr;
function dr(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === Yi) && (e = he), pr(e)) {
    const c = Ue(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Mn(c, n), gt > 0 && !i && ge && (c.shapeFlag & 6 ? ge[ge.indexOf(e)] = c : ge.push(c)), c.patchFlag |= -2, c;
  }
  if (Dr(e) && (e = e.__vccOpts), t) {
    t = gr(t);
    let { class: c, style: u } = t;
    c && !$(c) && (t.class = st(c)), B(u) && (Hs(u) && !I(u) && (u = J({}, u)), t.style = bn(u));
  }
  const r = $(e) ? 1 : Ii(e) ? 128 : ur(e) ? 64 : B(e) ? 4 : R(e) ? 2 : 0;
  return wn(e, t, n, s, o, r, i, !0);
}
function gr(e) {
  return e ? Hs(e) || Wt in e ? J({}, e) : e : null;
}
function Ue(e, t, n = !1) {
  const { props: s, ref: o, patchFlag: i, children: r } = e, c = t ? br(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && go(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? I(o) ? o.concat(St(t)) : [o, St(t)] : St(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: r,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ye ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ue(e.ssContent),
    ssFallback: e.ssFallback && Ue(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function mr(e = " ", t = 0) {
  return Oe(Ft, null, e, t);
}
function hr(e = "", t = !1) {
  return t ? (zt(), _r(he, null, e)) : Oe(he, null, e);
}
function xe(e) {
  return e == null || typeof e == "boolean" ? Oe(he) : I(e) ? Oe(
    ye,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Le(e) : Oe(Ft, null, String(e));
}
function Le(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ue(e);
}
function Mn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (I(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Mn(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(Wt in t) ? t._ctx = de : o === 3 && de && (de.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    R(t) ? (t = { default: t, _ctx: de }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [mr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function br(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = st([t.class, s.class]));
      else if (o === "style")
        t.style = bn([t.style, s.style]);
      else if (Lt(o)) {
        const i = t[o], r = s[o];
        r && i !== r && !(I(i) && i.includes(r)) && (t[o] = i ? [].concat(i, r) : r);
      } else
        o !== "" && (t[o] = s[o]);
  }
  return t;
}
function Te(e, t, n, s = null) {
  ae(e, t, 7, [
    n,
    s
  ]);
}
const vr = fo();
let Er = 0;
function Tr(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || vr, i = {
    uid: Er++,
    vnode: e,
    type: s,
    parent: t,
    appContext: o,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new wo(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: lo(s, o),
    emitsOptions: Zs(s, o),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: G,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: G,
    data: G,
    props: G,
    attrs: G,
    slots: G,
    refs: G,
    setupState: G,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = xi.bind(null, i), e.ce && e.ce(i), i;
}
let X = null;
const yr = () => X || de, ot = (e) => {
  X = e, e.scope.on();
}, Xe = () => {
  X && X.scope.off(), X = null;
};
function mo(e) {
  return e.vnode.shapeFlag & 4;
}
let mt = !1;
function xr(e, t = !1) {
  mt = t;
  const { props: n, children: s } = e.vnode, o = mo(e);
  er(e, n, o, t), sr(e, s);
  const i = o ? Ar(e, t) : void 0;
  return mt = !1, i;
}
function Ar(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Gs(new Proxy(e.ctx, Xi));
  const { setup: s } = n;
  if (s) {
    const o = e.setupContext = s.length > 1 ? Nr(e) : null;
    ot(e), it();
    const i = we(s, e, 0, [e.props, o]);
    if (rt(), Xe(), Os(i)) {
      if (i.then(Xe, Xe), t)
        return i.then((r) => {
          fs(e, r, t);
        }).catch((r) => {
          Ut(
            r,
            e,
            0
            /* ErrorCodes.SETUP_FUNCTION */
          );
        });
      e.asyncDep = i;
    } else
      fs(e, i, t);
  } else
    ho(e, t);
}
function fs(e, t, n) {
  R(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : B(t) && (e.setupState = Fs(t)), ho(e, n);
}
let _s;
function ho(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && _s && !s.render) {
      const o = s.template || Ln(e).template;
      if (o) {
        const { isCustomElement: i, compilerOptions: r } = e.appContext.config, { delimiters: c, compilerOptions: u } = s, _ = J(J({
          isCustomElement: i,
          delimiters: c
        }, r), u);
        s.render = _s(o, _);
      }
    }
    e.render = s.render || me;
  }
  ot(e), it(), Zi(e), rt(), Xe();
}
function Or(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return oe(e, "get", "$attrs"), t[n];
    }
  });
}
function Nr(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = Or(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Un(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Fs(Gs(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in ut)
          return ut[n](e);
      },
      has(t, n) {
        return n in t || n in ut;
      }
    }));
}
function Dr(e) {
  return R(e) && "__vccOpts" in e;
}
const Sr = (e, t) => hi(e, t, mt), Ir = Symbol(""), kr = () => Nt(Ir), Rr = "3.2.47", Cr = "http://www.w3.org/2000/svg", Ke = typeof document < "u" ? document : null, ps = Ke && /* @__PURE__ */ Ke.createElement("template"), zr = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t ? Ke.createElementNS(Cr, e) : Ke.createElement(e, n ? { is: n } : void 0);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => Ke.createTextNode(e),
  createComment: (e) => Ke.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ke.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, o, i) {
    const r = n ? n.previousSibling : t.lastChild;
    if (o && (o === i || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === i || !(o = o.nextSibling)); )
        ;
    else {
      ps.innerHTML = s ? `<svg>${e}</svg>` : e;
      const c = ps.content;
      if (s) {
        const u = c.firstChild;
        for (; u.firstChild; )
          c.appendChild(u.firstChild);
        c.removeChild(u);
      }
      t.insertBefore(c, n);
    }
    return [
      // first
      r ? r.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function Lr(e, t, n) {
  const s = e._vtc;
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function Pr(e, t, n) {
  const s = e.style, o = $(n);
  if (n && !o) {
    if (t && !$(t))
      for (const i in t)
        n[i] == null && mn(s, i, "");
    for (const i in n)
      mn(s, i, n[i]);
  } else {
    const i = s.display;
    o ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (s.display = i);
  }
}
const ds = /\s*!important$/;
function mn(e, t, n) {
  if (I(n))
    n.forEach((s) => mn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = wr(e, t);
    ds.test(n) ? e.setProperty(_e(s), n.replace(ds, ""), "important") : e[s] = n;
  }
}
const gs = ["Webkit", "Moz", "ms"], Qt = {};
function wr(e, t) {
  const n = Qt[t];
  if (n)
    return n;
  let s = Ie(t);
  if (s !== "filter" && s in e)
    return Qt[t] = s;
  s = Ss(s);
  for (let o = 0; o < gs.length; o++) {
    const i = gs[o] + s;
    if (i in e)
      return Qt[t] = i;
  }
  return t;
}
const ms = "http://www.w3.org/1999/xlink";
function Mr(e, t, n, s, o) {
  if (s && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(ms, t.slice(6, t.length)) : e.setAttributeNS(ms, t, n);
  else {
    const i = Do(t);
    n == null || i && !Ts(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : n);
  }
}
function Ur(e, t, n, s, o, i, r) {
  if (t === "innerHTML" || t === "textContent") {
    s && r(s, o, i), e[t] = n ?? "";
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && // custom elements may use _value internally
  !e.tagName.includes("-")) {
    e._value = n;
    const u = n ?? "";
    (e.value !== u || // #4956: always set for OPTION elements because its value falls back to
    // textContent if no value attribute is present. And setting .value for
    // OPTION has no side effect
    e.tagName === "OPTION") && (e.value = u), n == null && e.removeAttribute(t);
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const u = typeof e[t];
    u === "boolean" ? n = Ts(n) : n == null && u === "string" ? (n = "", c = !0) : u === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  c && e.removeAttribute(t);
}
function jr(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Hr(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
function Gr(e, t, n, s, o = null) {
  const i = e._vei || (e._vei = {}), r = i[t];
  if (s && r)
    r.value = s;
  else {
    const [c, u] = Fr(t);
    if (s) {
      const _ = i[t] = Br(s, o);
      jr(e, c, _, u);
    } else
      r && (Hr(e, c, r, u), i[t] = void 0);
  }
}
const hs = /(?:Once|Passive|Capture)$/;
function Fr(e) {
  let t;
  if (hs.test(e)) {
    t = {};
    let s;
    for (; s = e.match(hs); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : _e(e.slice(2)), t];
}
let en = 0;
const Wr = /* @__PURE__ */ Promise.resolve(), Vr = () => en || (Wr.then(() => en = 0), en = Date.now());
function Br(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    ae(Kr(s, n.value), t, 5, [s]);
  };
  return n.value = e, n.attached = Vr(), n;
}
function Kr(e, t) {
  if (I(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((s) => (o) => !o._stopped && s && s(o));
  } else
    return t;
}
const bs = /^on[a-z]/, Yr = (e, t, n, s, o = !1, i, r, c, u) => {
  t === "class" ? Lr(e, s, o) : t === "style" ? Pr(e, n, s) : Lt(t) ? vn(t) || Gr(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Xr(e, t, s, o)) ? Ur(e, t, s, i, r, c, u) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Mr(e, t, s, o));
};
function Xr(e, t, n, s) {
  return s ? !!(t === "innerHTML" || t === "textContent" || t in e && bs.test(t) && R(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || bs.test(t) && $(n) ? !1 : t in e;
}
function bo(e, t) {
  const n = wi(e);
  class s extends jn {
    constructor(i) {
      super(n, i, t);
    }
  }
  return s.def = n, s;
}
const Zr = typeof HTMLElement < "u" ? HTMLElement : class {
};
class jn extends Zr {
  constructor(t, n = {}, s) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && s ? s(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, Bs(() => {
      this._connected || (Es(null, this.shadowRoot), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let s = 0; s < this.attributes.length; s++)
      this._setAttr(this.attributes[s].name);
    new MutationObserver((s) => {
      for (const o of s)
        this._setAttr(o.attributeName);
    }).observe(this, { attributes: !0 });
    const t = (s, o = !1) => {
      const { props: i, styles: r } = s;
      let c;
      if (i && !I(i))
        for (const u in i) {
          const _ = i[u];
          (_ === Number || _ && _.type === Number) && (u in this._props && (this._props[u] = Kn(this._props[u])), (c || (c = /* @__PURE__ */ Object.create(null)))[Ie(u)] = !0);
        }
      this._numberProps = c, o && this._resolveProps(s), this._applyStyles(r), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((s) => t(s, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: n } = t, s = I(n) ? n : Object.keys(n || {});
    for (const o of Object.keys(this))
      o[0] !== "_" && s.includes(o) && this._setProp(o, this[o], !0, !1);
    for (const o of s.map(Ie))
      Object.defineProperty(this, o, {
        get() {
          return this._getProp(o);
        },
        set(i) {
          this._setProp(o, i);
        }
      });
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    const s = Ie(t);
    this._numberProps && this._numberProps[s] && (n = Kn(n)), this._setProp(s, n, !1);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, s = !0, o = !0) {
    n !== this._props[t] && (this._props[t] = n, o && this._instance && this._update(), s && (n === !0 ? this.setAttribute(_e(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(_e(t), n + "") : n || this.removeAttribute(_e(t))));
  }
  _update() {
    Es(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = Oe(this._def, J({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0;
      const s = (i, r) => {
        this.dispatchEvent(new CustomEvent(i, {
          detail: r
        }));
      };
      n.emit = (i, ...r) => {
        s(i, r), _e(i) !== i && s(_e(i), r);
      };
      let o = this;
      for (; o = o && (o.parentNode || o.host); )
        if (o instanceof jn) {
          n.parent = o._instance, n.provides = o._instance.provides;
          break;
        }
    }), t;
  }
  _applyStyles(t) {
    t && t.forEach((n) => {
      const s = document.createElement("style");
      s.textContent = n, this.shadowRoot.appendChild(s);
    });
  }
}
const $r = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
Pi.props;
const Jr = /* @__PURE__ */ J({ patchProp: Yr }, zr);
let vs;
function qr() {
  return vs || (vs = lr(Jr));
}
const Es = (...e) => {
  qr().render(...e);
}, Qr = `.button{font-family:var(--zoa-header-font, sans-serif);font-weight:600;border:none;border-radius:var(--zoa-rounding, 10px);padding:var(--zoa-pad-v, 8px) var(--zoa-pad-h, 16px);transition:.2s;cursor:pointer}.button-kind--normal{background-color:var(--zoa-palette-secondary, #f2bab0);color:#000}.button-kind--normal:hover,.button-kind--normal:focus,.button-kind--normal:active{background-color:var(--zoa-palette-secondary-b, #ec9b8c)}.button-kind--primary{background-color:var(--zoa-palette-primary, #c9f708);color:#000}.button-kind--primary:hover,.button-kind--primary:focus,.button-kind--primary:active{background-color:var(--zoa-palette-primary-b, #b5de07);color:#000}
`, vo = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, el = {
  __name: "Button.ce",
  props: {
    kind: {
      type: String,
      default: "normal"
    },
    label: {
      type: String,
      default: "Button"
    }
  },
  setup(e) {
    return (t, n) => (zt(), gn("button", {
      class: st(["button", `button-kind--${e.kind}`])
    }, ys(e.label), 3));
  }
}, tl = /* @__PURE__ */ vo(el, [["styles", [Qr]]]), nl = `input{font-family:var(--zoa-body-font, sans-serif);font-size:1em;border:1px solid var(--zoa-palette-grey, #87999e);border-radius:var(--zoa-rounding, 10px);padding:var(--zoa-pad-v, 8px) var(--zoa-pad-h, 16px)}.textbox-label{font-family:var(--zoa-header-font, sans-serif);font-weight:700;font-size:.9em;padding:var(--zoa-pad-v, 8px) var(--zoa-pad-h, 16px)}.textbox-label.textbox-label-position--right,.textbox-label.textbox-label-position--below{order:2}.textbox-grid{display:grid;align-items:center}.textbox-grid.textbox-grid--above,.textbox-grid.textbox-grid--below{grid-template-rows:auto auto}.textbox-grid.textbox-grid--left{grid-template-columns:auto 1fr}.textbox-grid.textbox-grid--right{grid-template-columns:1fr auto}
`, sl = ["placeholder"], ol = {
  __name: "Textbox.ce",
  props: {
    placeholder: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    labelPosition: {
      type: String,
      default: "above"
    }
  },
  setup(e) {
    return (t, n) => (zt(), gn("div", {
      class: st(["textbox-grid", `textbox-grid--${e.labelPosition}`])
    }, [
      e.label && e.labelPosition !== "none" ? (zt(), gn("label", {
        key: 0,
        for: "textbox",
        class: st(["textbox-label", `textbox-label-position--${e.labelPosition}`])
      }, ys(e.label), 3)) : hr("", !0),
      wn("input", {
        type: "text",
        placeholder: e.placeholder,
        id: "textbox"
      }, null, 8, sl)
    ], 2));
  }
}, il = /* @__PURE__ */ vo(ol, [["styles", [nl]]]), rl = bo(tl), ll = bo(il), cl = [rl, ll];
export {
  rl as ZoaButton,
  ll as ZoaTextbox,
  cl as allElements
};
