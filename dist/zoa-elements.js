function gn(e, t) {
  const n = /* @__PURE__ */ Object.create(null), s = e.split(",");
  for (let i = 0; i < s.length; i++)
    n[s[i]] = !0;
  return t ? (i) => !!n[i.toLowerCase()] : (i) => !!n[i];
}
function mn(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = $(s) ? bi(s) : mn(s);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else {
    if ($(e))
      return e;
    if (B(e))
      return e;
  }
}
const gi = /;(?![^(]*\))/g, mi = /:([^]+)/, hi = /\/\*.*?\*\//gs;
function bi(e) {
  const t = {};
  return e.replace(hi, "").split(gi).forEach((n) => {
    if (n) {
      const s = n.split(mi);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function kt(e) {
  let t = "";
  if ($(e))
    t = e;
  else if (I(e))
    for (let n = 0; n < e.length; n++) {
      const s = kt(e[n]);
      s && (t += s + " ");
    }
  else if (B(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const vi = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ei = /* @__PURE__ */ gn(vi);
function bs(e) {
  return !!e || e === "";
}
const Ti = (e) => $(e) ? e : e == null ? "" : I(e) || B(e) && (e.toString === ys || !C(e.toString)) ? JSON.stringify(e, vs, 2) : String(e), vs = (e, t) => t && t.__v_isRef ? vs(e, t.value) : et(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, i]) => (n[`${s} =>`] = i, n), {})
} : Es(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : B(t) && !I(t) && !As(t) ? String(t) : t, H = {}, Qe = [], me = () => {
}, yi = () => !1, Ai = /^on[^a-z]/, Lt = (e) => Ai.test(e), hn = (e) => e.startsWith("onUpdate:"), J = Object.assign, bn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Oi = Object.prototype.hasOwnProperty, w = (e, t) => Oi.call(e, t), I = Array.isArray, et = (e) => wt(e) === "[object Map]", Es = (e) => wt(e) === "[object Set]", C = (e) => typeof e == "function", $ = (e) => typeof e == "string", vn = (e) => typeof e == "symbol", B = (e) => e !== null && typeof e == "object", Ts = (e) => B(e) && C(e.then) && C(e.catch), ys = Object.prototype.toString, wt = (e) => ys.call(e), Di = (e) => wt(e).slice(8, -1), As = (e) => wt(e) === "[object Object]", En = (e) => $(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ot = /* @__PURE__ */ gn(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Pt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ni = /-(\w)/g, Se = Pt((e) => e.replace(Ni, (t, n) => n ? n.toUpperCase() : "")), Si = /\B([A-Z])/g, _e = Pt((e) => e.replace(Si, "-$1").toLowerCase()), Os = Pt((e) => e.charAt(0).toUpperCase() + e.slice(1)), Bt = Pt((e) => e ? `on${Os(e)}` : ""), xt = (e, t) => !Object.is(e, t), Kt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, It = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, xi = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Wn = (e) => {
  const t = $(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Vn;
const Ii = () => Vn || (Vn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let fe;
class Ri {
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
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Ci(e, t = fe) {
  t && t.active && t.effects.push(e);
}
function ki() {
  return fe;
}
const Tn = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Ds = (e) => (e.w & ze) > 0, Ns = (e) => (e.n & ze) > 0, Li = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= ze;
}, wi = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let s = 0; s < t.length; s++) {
      const i = t[s];
      Ds(i) && !Ns(i) ? i.delete(e) : t[n++] = i, i.w &= ~ze, i.n &= ~ze;
    }
    t.length = n;
  }
}, en = /* @__PURE__ */ new WeakMap();
let ct = 0, ze = 1;
const tn = 30;
let de;
const Ye = Symbol(""), nn = Symbol("");
class yn {
  constructor(t, n = null, s) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Ci(this, s);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = de, n = we;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = de, de = this, we = !0, ze = 1 << ++ct, ct <= tn ? Li(this) : Bn(this), this.fn();
    } finally {
      ct <= tn && wi(this), ze = 1 << --ct, de = this.parent, we = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    de === this ? this.deferStop = !0 : this.active && (Bn(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Bn(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let we = !0;
const Ss = [];
function it() {
  Ss.push(we), we = !1;
}
function ot() {
  const e = Ss.pop();
  we = e === void 0 ? !0 : e;
}
function ie(e, t, n) {
  if (we && de) {
    let s = en.get(e);
    s || en.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || s.set(n, i = Tn()), xs(i);
  }
}
function xs(e, t) {
  let n = !1;
  ct <= tn ? Ns(e) || (e.n |= ze, n = !Ds(e)) : n = !e.has(de), n && (e.add(de), de.deps.push(e));
}
function Ie(e, t, n, s, i, o) {
  const r = en.get(e);
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
        I(e) ? En(n) && c.push(r.get("length")) : (c.push(r.get(Ye)), et(e) && c.push(r.get(nn)));
        break;
      case "delete":
        I(e) || (c.push(r.get(Ye)), et(e) && c.push(r.get(nn)));
        break;
      case "set":
        et(e) && c.push(r.get(Ye));
        break;
    }
  if (c.length === 1)
    c[0] && sn(c[0]);
  else {
    const u = [];
    for (const _ of c)
      _ && u.push(..._);
    sn(Tn(u));
  }
}
function sn(e, t) {
  const n = I(e) ? e : [...e];
  for (const s of n)
    s.computed && Kn(s);
  for (const s of n)
    s.computed || Kn(s);
}
function Kn(e, t) {
  (e !== de || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const Pi = /* @__PURE__ */ gn("__proto__,__v_isRef,__isVue"), Is = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(vn)
), Mi = /* @__PURE__ */ An(), zi = /* @__PURE__ */ An(!1, !0), Ui = /* @__PURE__ */ An(!0), Yn = /* @__PURE__ */ ji();
function ji() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = P(this);
      for (let o = 0, r = this.length; o < r; o++)
        ie(s, "get", o + "");
      const i = s[t](...n);
      return i === -1 || i === !1 ? s[t](...n.map(P)) : i;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      it();
      const s = P(this)[t].apply(this, n);
      return ot(), s;
    };
  }), e;
}
function Fi(e) {
  const t = P(this);
  return ie(t, "has", e), t.hasOwnProperty(e);
}
function An(e = !1, t = !1) {
  return function(s, i, o) {
    if (i === "__v_isReactive")
      return !e;
    if (i === "__v_isReadonly")
      return e;
    if (i === "__v_isShallow")
      return t;
    if (i === "__v_raw" && o === (e ? t ? no : ws : t ? Ls : ks).get(s))
      return s;
    const r = I(s);
    if (!e) {
      if (r && w(Yn, i))
        return Reflect.get(Yn, i, o);
      if (i === "hasOwnProperty")
        return Fi;
    }
    const c = Reflect.get(s, i, o);
    return (vn(i) ? Is.has(i) : Pi(i)) || (e || ie(s, "get", i), t) ? c : ne(c) ? r && En(i) ? c : c.value : B(c) ? e ? Ps(c) : Nn(c) : c;
  };
}
const Hi = /* @__PURE__ */ Rs(), Gi = /* @__PURE__ */ Rs(!0);
function Rs(e = !1) {
  return function(n, s, i, o) {
    let r = n[s];
    if (ft(r) && ne(r) && !ne(i))
      return !1;
    if (!e && (!on(i) && !ft(i) && (r = P(r), i = P(i)), !I(n) && ne(r) && !ne(i)))
      return r.value = i, !0;
    const c = I(n) && En(s) ? Number(s) < n.length : w(n, s), u = Reflect.set(n, s, i, o);
    return n === P(o) && (c ? xt(i, r) && Ie(n, "set", s, i) : Ie(n, "add", s, i)), u;
  };
}
function Wi(e, t) {
  const n = w(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && Ie(e, "delete", t, void 0), s;
}
function Vi(e, t) {
  const n = Reflect.has(e, t);
  return (!vn(t) || !Is.has(t)) && ie(e, "has", t), n;
}
function Bi(e) {
  return ie(e, "iterate", I(e) ? "length" : Ye), Reflect.ownKeys(e);
}
const Cs = {
  get: Mi,
  set: Hi,
  deleteProperty: Wi,
  has: Vi,
  ownKeys: Bi
}, Ki = {
  get: Ui,
  set(e, t) {
    return !0;
  },
  deleteProperty(e, t) {
    return !0;
  }
}, Yi = /* @__PURE__ */ J({}, Cs, {
  get: zi,
  set: Gi
}), On = (e) => e, Mt = (e) => Reflect.getPrototypeOf(e);
function bt(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const i = P(e), o = P(t);
  n || (t !== o && ie(i, "get", t), ie(i, "get", o));
  const { has: r } = Mt(i), c = s ? On : n ? In : xn;
  if (r.call(i, t))
    return c(e.get(t));
  if (r.call(i, o))
    return c(e.get(o));
  e !== i && e.get(t);
}
function vt(e, t = !1) {
  const n = this.__v_raw, s = P(n), i = P(e);
  return t || (e !== i && ie(s, "has", e), ie(s, "has", i)), e === i ? n.has(e) : n.has(e) || n.has(i);
}
function Et(e, t = !1) {
  return e = e.__v_raw, !t && ie(P(e), "iterate", Ye), Reflect.get(e, "size", e);
}
function Xn(e) {
  e = P(e);
  const t = P(this);
  return Mt(t).has.call(t, e) || (t.add(e), Ie(t, "add", e, e)), this;
}
function Zn(e, t) {
  t = P(t);
  const n = P(this), { has: s, get: i } = Mt(n);
  let o = s.call(n, e);
  o || (e = P(e), o = s.call(n, e));
  const r = i.call(n, e);
  return n.set(e, t), o ? xt(t, r) && Ie(n, "set", e, t) : Ie(n, "add", e, t), this;
}
function $n(e) {
  const t = P(this), { has: n, get: s } = Mt(t);
  let i = n.call(t, e);
  i || (e = P(e), i = n.call(t, e)), s && s.call(t, e);
  const o = t.delete(e);
  return i && Ie(t, "delete", e, void 0), o;
}
function Jn() {
  const e = P(this), t = e.size !== 0, n = e.clear();
  return t && Ie(e, "clear", void 0, void 0), n;
}
function Tt(e, t) {
  return function(s, i) {
    const o = this, r = o.__v_raw, c = P(r), u = t ? On : e ? In : xn;
    return !e && ie(c, "iterate", Ye), r.forEach((_, g) => s.call(i, u(_), u(g), o));
  };
}
function yt(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, o = P(i), r = et(o), c = e === "entries" || e === Symbol.iterator && r, u = e === "keys" && r, _ = i[e](...s), g = n ? On : t ? In : xn;
    return !t && ie(o, "iterate", u ? nn : Ye), {
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
function ke(e) {
  return function(...t) {
    return e === "delete" ? !1 : this;
  };
}
function Xi() {
  const e = {
    get(o) {
      return bt(this, o);
    },
    get size() {
      return Et(this);
    },
    has: vt,
    add: Xn,
    set: Zn,
    delete: $n,
    clear: Jn,
    forEach: Tt(!1, !1)
  }, t = {
    get(o) {
      return bt(this, o, !1, !0);
    },
    get size() {
      return Et(this);
    },
    has: vt,
    add: Xn,
    set: Zn,
    delete: $n,
    clear: Jn,
    forEach: Tt(!1, !0)
  }, n = {
    get(o) {
      return bt(this, o, !0);
    },
    get size() {
      return Et(this, !0);
    },
    has(o) {
      return vt.call(this, o, !0);
    },
    add: ke(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: ke(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: ke(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: ke(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: Tt(!0, !1)
  }, s = {
    get(o) {
      return bt(this, o, !0, !0);
    },
    get size() {
      return Et(this, !0);
    },
    has(o) {
      return vt.call(this, o, !0);
    },
    add: ke(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: ke(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: ke(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: ke(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: Tt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = yt(o, !1, !1), n[o] = yt(o, !0, !1), t[o] = yt(o, !1, !0), s[o] = yt(o, !0, !0);
  }), [
    e,
    n,
    t,
    s
  ];
}
const [Zi, $i, Ji, qi] = /* @__PURE__ */ Xi();
function Dn(e, t) {
  const n = t ? e ? qi : Ji : e ? $i : Zi;
  return (s, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(w(n, i) && i in s ? n : s, i, o);
}
const Qi = {
  get: /* @__PURE__ */ Dn(!1, !1)
}, eo = {
  get: /* @__PURE__ */ Dn(!1, !0)
}, to = {
  get: /* @__PURE__ */ Dn(!0, !1)
}, ks = /* @__PURE__ */ new WeakMap(), Ls = /* @__PURE__ */ new WeakMap(), ws = /* @__PURE__ */ new WeakMap(), no = /* @__PURE__ */ new WeakMap();
function so(e) {
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
function io(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : so(Di(e));
}
function Nn(e) {
  return ft(e) ? e : Sn(e, !1, Cs, Qi, ks);
}
function oo(e) {
  return Sn(e, !1, Yi, eo, Ls);
}
function Ps(e) {
  return Sn(e, !0, Ki, to, ws);
}
function Sn(e, t, n, s, i) {
  if (!B(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const r = io(e);
  if (r === 0)
    return e;
  const c = new Proxy(e, r === 2 ? s : n);
  return i.set(e, c), c;
}
function tt(e) {
  return ft(e) ? tt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ft(e) {
  return !!(e && e.__v_isReadonly);
}
function on(e) {
  return !!(e && e.__v_isShallow);
}
function Ms(e) {
  return tt(e) || ft(e);
}
function P(e) {
  const t = e && e.__v_raw;
  return t ? P(t) : e;
}
function zs(e) {
  return It(e, "__v_skip", !0), e;
}
const xn = (e) => B(e) ? Nn(e) : e, In = (e) => B(e) ? Ps(e) : e;
function ro(e) {
  we && de && (e = P(e), xs(e.dep || (e.dep = Tn())));
}
function lo(e, t) {
  e = P(e);
  const n = e.dep;
  n && sn(n);
}
function ne(e) {
  return !!(e && e.__v_isRef === !0);
}
function co(e) {
  return ne(e) ? e.value : e;
}
const ao = {
  get: (e, t, n) => co(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return ne(i) && !ne(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Us(e) {
  return tt(e) ? e : new Proxy(e, ao);
}
var js;
class uo {
  constructor(t, n, s, i) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[js] = !1, this._dirty = !0, this.effect = new yn(t, () => {
      this._dirty || (this._dirty = !0, lo(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !i, this.__v_isReadonly = s;
  }
  get value() {
    const t = P(this);
    return ro(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
js = "__v_isReadonly";
function fo(e, t, n = !1) {
  let s, i;
  const o = C(e);
  return o ? (s = e, i = me) : (s = e.get, i = e.set), new uo(s, i, o || !i, n);
}
function Pe(e, t, n, s) {
  let i;
  try {
    i = s ? e(...s) : e();
  } catch (o) {
    zt(o, t, n);
  }
  return i;
}
function ae(e, t, n, s) {
  if (C(e)) {
    const o = Pe(e, t, n, s);
    return o && Ts(o) && o.catch((r) => {
      zt(r, t, n);
    }), o;
  }
  const i = [];
  for (let o = 0; o < e.length; o++)
    i.push(ae(e[o], t, n, s));
  return i;
}
function zt(e, t, n, s = !0) {
  const i = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const r = t.proxy, c = n;
    for (; o; ) {
      const _ = o.ec;
      if (_) {
        for (let g = 0; g < _.length; g++)
          if (_[g](e, r, c) === !1)
            return;
      }
      o = o.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Pe(u, null, 10, [e, r, c]);
      return;
    }
  }
  _o(e, n, i, s);
}
function _o(e, t, n, s = !0) {
  console.error(e);
}
let _t = !1, rn = !1;
const Q = [];
let Ae = 0;
const nt = [];
let Ne = null, Ve = 0;
const Fs = /* @__PURE__ */ Promise.resolve();
let Rn = null;
function Hs(e) {
  const t = Rn || Fs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function po(e) {
  let t = Ae + 1, n = Q.length;
  for (; t < n; ) {
    const s = t + n >>> 1;
    dt(Q[s]) < e ? t = s + 1 : n = s;
  }
  return t;
}
function Cn(e) {
  (!Q.length || !Q.includes(e, _t && e.allowRecurse ? Ae + 1 : Ae)) && (e.id == null ? Q.push(e) : Q.splice(po(e.id), 0, e), Gs());
}
function Gs() {
  !_t && !rn && (rn = !0, Rn = Fs.then(Vs));
}
function go(e) {
  const t = Q.indexOf(e);
  t > Ae && Q.splice(t, 1);
}
function mo(e) {
  I(e) ? nt.push(...e) : (!Ne || !Ne.includes(e, e.allowRecurse ? Ve + 1 : Ve)) && nt.push(e), Gs();
}
function qn(e, t = _t ? Ae + 1 : 0) {
  for (; t < Q.length; t++) {
    const n = Q[t];
    n && n.pre && (Q.splice(t, 1), t--, n());
  }
}
function Ws(e) {
  if (nt.length) {
    const t = [...new Set(nt)];
    if (nt.length = 0, Ne) {
      Ne.push(...t);
      return;
    }
    for (Ne = t, Ne.sort((n, s) => dt(n) - dt(s)), Ve = 0; Ve < Ne.length; Ve++)
      Ne[Ve]();
    Ne = null, Ve = 0;
  }
}
const dt = (e) => e.id == null ? 1 / 0 : e.id, ho = (e, t) => {
  const n = dt(e) - dt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Vs(e) {
  rn = !1, _t = !0, Q.sort(ho);
  const t = me;
  try {
    for (Ae = 0; Ae < Q.length; Ae++) {
      const n = Q[Ae];
      n && n.active !== !1 && Pe(
        n,
        null,
        14
        /* ErrorCodes.SCHEDULER */
      );
    }
  } finally {
    Ae = 0, Q.length = 0, Ws(), _t = !1, Rn = null, (Q.length || nt.length) && Vs();
  }
}
function bo(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || H;
  let i = n;
  const o = t.startsWith("update:"), r = o && t.slice(7);
  if (r && r in s) {
    const g = `${r === "modelValue" ? "model" : r}Modifiers`, { number: E, trim: y } = s[g] || H;
    y && (i = n.map((x) => $(x) ? x.trim() : x)), E && (i = n.map(xi));
  }
  let c, u = s[c = Bt(t)] || // also try camelCase event handler (#2249)
  s[c = Bt(Se(t))];
  !u && o && (u = s[c = Bt(_e(t))]), u && ae(u, e, 6, i);
  const _ = s[c + "Once"];
  if (_) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, ae(_, e, 6, i);
  }
}
function Bs(e, t, n = !1) {
  const s = t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let r = {}, c = !1;
  if (!C(e)) {
    const u = (_) => {
      const g = Bs(_, t, !0);
      g && (c = !0, J(r, g));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !o && !c ? (B(e) && s.set(e, null), null) : (I(o) ? o.forEach((u) => r[u] = null) : J(r, o), B(e) && s.set(e, r), r);
}
function Ut(e, t) {
  return !e || !Lt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), w(e, t[0].toLowerCase() + t.slice(1)) || w(e, _e(t)) || w(e, t));
}
let pe = null, Ks = null;
function Rt(e) {
  const t = pe;
  return pe = e, Ks = e && e.type.__scopeId || null, t;
}
function vo(e, t = pe, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && ls(-1);
    const o = Rt(t);
    let r;
    try {
      r = e(...i);
    } finally {
      Rt(o), s._d && ls(1);
    }
    return r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Yt(e) {
  const { type: t, vnode: n, proxy: s, withProxy: i, props: o, propsOptions: [r], slots: c, attrs: u, emit: _, render: g, renderCache: E, data: y, setupState: x, ctx: M, inheritAttrs: N } = e;
  let K, U;
  const le = Rt(e);
  try {
    if (n.shapeFlag & 4) {
      const G = i || s;
      K = ye(g.call(G, G, E, o, x, y, M)), U = u;
    } else {
      const G = t;
      K = ye(G.length > 1 ? G(o, { attrs: u, slots: c, emit: _ }) : G(
        o,
        null
        /* we know it doesn't need it */
      )), U = t.props ? u : Eo(u);
    }
  } catch (G) {
    ut.length = 0, zt(
      G,
      e,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ), K = Me(xe);
  }
  let R = K;
  if (U && N !== !1) {
    const G = Object.keys(U), { shapeFlag: q } = R;
    G.length && q & 7 && (r && G.some(hn) && (U = To(U, r)), R = Ue(R, U));
  }
  return n.dirs && (R = Ue(R), R.dirs = R.dirs ? R.dirs.concat(n.dirs) : n.dirs), n.transition && (R.transition = n.transition), K = R, Rt(le), K;
}
const Eo = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Lt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, To = (e, t) => {
  const n = {};
  for (const s in e)
    (!hn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function yo(e, t, n) {
  const { props: s, children: i, component: o } = e, { props: r, children: c, patchFlag: u } = t, _ = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return s ? Qn(s, r, _) : !!r;
    if (u & 8) {
      const g = t.dynamicProps;
      for (let E = 0; E < g.length; E++) {
        const y = g[E];
        if (r[y] !== s[y] && !Ut(_, y))
          return !0;
      }
    }
  } else
    return (i || c) && (!c || !c.$stable) ? !0 : s === r ? !1 : s ? r ? Qn(s, r, _) : !0 : !!r;
  return !1;
}
function Qn(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const o = s[i];
    if (t[o] !== e[o] && !Ut(n, o))
      return !0;
  }
  return !1;
}
function Ao({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const Oo = (e) => e.__isSuspense;
function Do(e, t) {
  t && t.pendingBranch ? I(e) ? t.effects.push(...e) : t.effects.push(e) : mo(e);
}
function No(e, t) {
  if (X) {
    let n = X.provides;
    const s = X.parent && X.parent.provides;
    s === n && (n = X.provides = Object.create(s)), n[e] = t;
  }
}
function Dt(e, t, n = !1) {
  const s = X || pe;
  if (s) {
    const i = s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && C(t) ? t.call(s.proxy) : t;
  }
}
const At = {};
function Xt(e, t, n) {
  return Ys(e, t, n);
}
function Ys(e, t, { immediate: n, deep: s, flush: i, onTrack: o, onTrigger: r } = H) {
  const c = ki() === (X == null ? void 0 : X.scope) ? X : null;
  let u, _ = !1, g = !1;
  if (ne(e) ? (u = () => e.value, _ = on(e)) : tt(e) ? (u = () => e, s = !0) : I(e) ? (g = !0, _ = e.some((R) => tt(R) || on(R)), u = () => e.map((R) => {
    if (ne(R))
      return R.value;
    if (tt(R))
      return qe(R);
    if (C(R))
      return Pe(
        R,
        c,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
  })) : C(e) ? t ? u = () => Pe(
    e,
    c,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : u = () => {
    if (!(c && c.isUnmounted))
      return E && E(), ae(e, c, 3, [y]);
  } : u = me, t && s) {
    const R = u;
    u = () => qe(R());
  }
  let E, y = (R) => {
    E = U.onStop = () => {
      Pe(
        R,
        c,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, x;
  if (gt)
    if (y = me, t ? n && ae(t, c, 3, [
      u(),
      g ? [] : void 0,
      y
    ]) : u(), i === "sync") {
      const R = Nr();
      x = R.__watcherHandles || (R.__watcherHandles = []);
    } else
      return me;
  let M = g ? new Array(e.length).fill(At) : At;
  const N = () => {
    if (U.active)
      if (t) {
        const R = U.run();
        (s || _ || (g ? R.some((G, q) => xt(G, M[q])) : xt(R, M))) && (E && E(), ae(t, c, 3, [
          R,
          // pass undefined as the old value when it's changed for the first time
          M === At ? void 0 : g && M[0] === At ? [] : M,
          y
        ]), M = R);
      } else
        U.run();
  };
  N.allowRecurse = !!t;
  let K;
  i === "sync" ? K = N : i === "post" ? K = () => se(N, c && c.suspense) : (N.pre = !0, c && (N.id = c.uid), K = () => Cn(N));
  const U = new yn(u, K);
  t ? n ? N() : M = U.run() : i === "post" ? se(U.run.bind(U), c && c.suspense) : U.run();
  const le = () => {
    U.stop(), c && c.scope && bn(c.scope.effects, U);
  };
  return x && x.push(le), le;
}
function So(e, t, n) {
  const s = this.proxy, i = $(e) ? e.includes(".") ? Xs(s, e) : () => s[e] : e.bind(s, s);
  let o;
  C(t) ? o = t : (o = t.handler, n = t);
  const r = X;
  st(this);
  const c = Ys(i, o.bind(s), n);
  return r ? st(r) : Xe(), c;
}
function Xs(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let i = 0; i < n.length && s; i++)
      s = s[n[i]];
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
  else if (Es(e) || et(e))
    e.forEach((n) => {
      qe(n, t);
    });
  else if (As(e))
    for (const n in e)
      qe(e[n], t);
  return e;
}
function xo() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return qs(() => {
    e.isMounted = !0;
  }), Qs(() => {
    e.isUnmounting = !0;
  }), e;
}
const ce = [Function, Array], Io = {
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
    const n = br(), s = xo();
    let i;
    return () => {
      const o = t.default && $s(t.default(), !0);
      if (!o || !o.length)
        return;
      let r = o[0];
      if (o.length > 1) {
        for (const N of o)
          if (N.type !== xe) {
            r = N;
            break;
          }
      }
      const c = P(e), { mode: u } = c;
      if (s.isLeaving)
        return Zt(r);
      const _ = es(r);
      if (!_)
        return Zt(r);
      const g = ln(_, c, s, n);
      cn(_, g);
      const E = n.subTree, y = E && es(E);
      let x = !1;
      const { getTransitionKey: M } = _.type;
      if (M) {
        const N = M();
        i === void 0 ? i = N : N !== i && (i = N, x = !0);
      }
      if (y && y.type !== xe && (!Be(_, y) || x)) {
        const N = ln(y, c, s, n);
        if (cn(y, N), u === "out-in")
          return s.isLeaving = !0, N.afterLeave = () => {
            s.isLeaving = !1, n.update.active !== !1 && n.update();
          }, Zt(r);
        u === "in-out" && _.type !== xe && (N.delayLeave = (K, U, le) => {
          const R = Zs(s, y);
          R[String(y.key)] = y, K._leaveCb = () => {
            U(), K._leaveCb = void 0, delete g.delayedLeave;
          }, g.delayedLeave = le;
        });
      }
      return r;
    };
  }
}, Ro = Io;
function Zs(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function ln(e, t, n, s) {
  const { appear: i, mode: o, persisted: r = !1, onBeforeEnter: c, onEnter: u, onAfterEnter: _, onEnterCancelled: g, onBeforeLeave: E, onLeave: y, onAfterLeave: x, onLeaveCancelled: M, onBeforeAppear: N, onAppear: K, onAfterAppear: U, onAppearCancelled: le } = t, R = String(e.key), G = Zs(n, e), q = (k, Z) => {
    k && ae(k, s, 9, Z);
  }, Ze = (k, Z) => {
    const W = Z[1];
    q(k, Z), I(k) ? k.every((oe) => oe.length <= 1) && W() : k.length <= 1 && W();
  }, Ce = {
    mode: o,
    persisted: r,
    beforeEnter(k) {
      let Z = c;
      if (!n.isMounted)
        if (i)
          Z = N || c;
        else
          return;
      k._leaveCb && k._leaveCb(
        !0
        /* cancelled */
      );
      const W = G[R];
      W && Be(e, W) && W.el._leaveCb && W.el._leaveCb(), q(Z, [k]);
    },
    enter(k) {
      let Z = u, W = _, oe = g;
      if (!n.isMounted)
        if (i)
          Z = K || u, W = U || _, oe = le || g;
        else
          return;
      let he = !1;
      const Oe = k._enterCb = (rt) => {
        he || (he = !0, rt ? q(oe, [k]) : q(W, [k]), Ce.delayedLeave && Ce.delayedLeave(), k._enterCb = void 0);
      };
      Z ? Ze(Z, [k, Oe]) : Oe();
    },
    leave(k, Z) {
      const W = String(e.key);
      if (k._enterCb && k._enterCb(
        !0
        /* cancelled */
      ), n.isUnmounting)
        return Z();
      q(E, [k]);
      let oe = !1;
      const he = k._leaveCb = (Oe) => {
        oe || (oe = !0, Z(), Oe ? q(M, [k]) : q(x, [k]), k._leaveCb = void 0, G[W] === e && delete G[W]);
      };
      G[W] = e, y ? Ze(y, [k, he]) : he();
    },
    clone(k) {
      return ln(k, t, n, s);
    }
  };
  return Ce;
}
function Zt(e) {
  if (jt(e))
    return e = Ue(e), e.children = null, e;
}
function es(e) {
  return jt(e) ? e.children ? e.children[0] : void 0 : e;
}
function cn(e, t) {
  e.shapeFlag & 6 && e.component ? cn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function $s(e, t = !1, n) {
  let s = [], i = 0;
  for (let o = 0; o < e.length; o++) {
    let r = e[o];
    const c = n == null ? r.key : String(n) + String(r.key != null ? r.key : o);
    r.type === Te ? (r.patchFlag & 128 && i++, s = s.concat($s(r.children, t, c))) : (t || r.type !== xe) && s.push(c != null ? Ue(r, { key: c }) : r);
  }
  if (i > 1)
    for (let o = 0; o < s.length; o++)
      s[o].patchFlag = -2;
  return s;
}
function Co(e) {
  return C(e) ? { setup: e, name: e.name } : e;
}
const Nt = (e) => !!e.type.__asyncLoader, jt = (e) => e.type.__isKeepAlive;
function ko(e, t) {
  Js(e, "a", t);
}
function Lo(e, t) {
  Js(e, "da", t);
}
function Js(e, t, n = X) {
  const s = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Ft(t, s, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      jt(i.parent.vnode) && wo(s, t, n, i), i = i.parent;
  }
}
function wo(e, t, n, s) {
  const i = Ft(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  ei(() => {
    bn(s[t], i);
  }, n);
}
function Ft(e, t, n = X, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...r) => {
      if (n.isUnmounted)
        return;
      it(), st(n);
      const c = ae(t, n, e, r);
      return Xe(), ot(), c;
    });
    return s ? i.unshift(o) : i.push(o), o;
  }
}
const Re = (e) => (t, n = X) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!gt || e === "sp") && Ft(e, (...s) => t(...s), n)
), Po = Re(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
), qs = Re(
  "m"
  /* LifecycleHooks.MOUNTED */
), Mo = Re(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
), zo = Re(
  "u"
  /* LifecycleHooks.UPDATED */
), Qs = Re(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
), ei = Re(
  "um"
  /* LifecycleHooks.UNMOUNTED */
), Uo = Re(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
), jo = Re(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
), Fo = Re(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function Ho(e, t = X) {
  Ft("ec", e, t);
}
function He(e, t, n, s) {
  const i = e.dirs, o = t && t.dirs;
  for (let r = 0; r < i.length; r++) {
    const c = i[r];
    o && (c.oldValue = o[r].value);
    let u = c.dir[s];
    u && (it(), ae(u, n, 8, [
      e.el,
      c,
      e,
      t
    ]), ot());
  }
}
const Go = Symbol(), an = (e) => e ? fi(e) ? Pn(e) || e.proxy : an(e.parent) : null, at = (
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
    $parent: (e) => an(e.parent),
    $root: (e) => an(e.root),
    $emit: (e) => e.emit,
    $options: (e) => kn(e),
    $forceUpdate: (e) => e.f || (e.f = () => Cn(e.update)),
    $nextTick: (e) => e.n || (e.n = Hs.bind(e.proxy)),
    $watch: (e) => So.bind(e)
  })
), $t = (e, t) => e !== H && !e.__isScriptSetup && w(e, t), Wo = {
  get({ _: e }, t) {
    const { ctx: n, setupState: s, data: i, props: o, accessCache: r, type: c, appContext: u } = e;
    let _;
    if (t[0] !== "$") {
      const x = r[t];
      if (x !== void 0)
        switch (x) {
          case 1:
            return s[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if ($t(s, t))
          return r[t] = 1, s[t];
        if (i !== H && w(i, t))
          return r[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (_ = e.propsOptions[0]) && w(_, t)
        )
          return r[t] = 3, o[t];
        if (n !== H && w(n, t))
          return r[t] = 4, n[t];
        un && (r[t] = 0);
      }
    }
    const g = at[t];
    let E, y;
    if (g)
      return t === "$attrs" && ie(e, "get", t), g(e);
    if (
      // css module (injected by vue-loader)
      (E = c.__cssModules) && (E = E[t])
    )
      return E;
    if (n !== H && w(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      y = u.config.globalProperties, w(y, t)
    )
      return y[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: o } = e;
    return $t(i, t) ? (i[t] = n, !0) : s !== H && w(s, t) ? (s[t] = n, !0) : w(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, propsOptions: o } }, r) {
    let c;
    return !!n[r] || e !== H && w(e, r) || $t(t, r) || (c = o[0]) && w(c, r) || w(s, r) || w(at, r) || w(i.config.globalProperties, r);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : w(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
let un = !0;
function Vo(e) {
  const t = kn(e), n = e.proxy, s = e.ctx;
  un = !1, t.beforeCreate && ts(
    t.beforeCreate,
    e,
    "bc"
    /* LifecycleHooks.BEFORE_CREATE */
  );
  const {
    // state
    data: i,
    computed: o,
    methods: r,
    watch: c,
    provide: u,
    inject: _,
    // lifecycle
    created: g,
    beforeMount: E,
    mounted: y,
    beforeUpdate: x,
    updated: M,
    activated: N,
    deactivated: K,
    beforeDestroy: U,
    beforeUnmount: le,
    destroyed: R,
    unmounted: G,
    render: q,
    renderTracked: Ze,
    renderTriggered: Ce,
    errorCaptured: k,
    serverPrefetch: Z,
    // public API
    expose: W,
    inheritAttrs: oe,
    // assets
    components: he,
    directives: Oe,
    filters: rt
  } = t;
  if (_ && Bo(_, s, null, e.appContext.config.unwrapInjectedRef), r)
    for (const V in r) {
      const j = r[V];
      C(j) && (s[V] = j.bind(n));
    }
  if (i) {
    const V = i.call(n, n);
    B(V) && (e.data = Nn(V));
  }
  if (un = !0, o)
    for (const V in o) {
      const j = o[V], je = C(j) ? j.bind(n, n) : C(j.get) ? j.get.bind(n, n) : me, mt = !C(j) && C(j.set) ? j.set.bind(n) : me, Fe = Or({
        get: je,
        set: mt
      });
      Object.defineProperty(s, V, {
        enumerable: !0,
        configurable: !0,
        get: () => Fe.value,
        set: (be) => Fe.value = be
      });
    }
  if (c)
    for (const V in c)
      ti(c[V], s, n, V);
  if (u) {
    const V = C(u) ? u.call(n) : u;
    Reflect.ownKeys(V).forEach((j) => {
      No(j, V[j]);
    });
  }
  g && ts(
    g,
    e,
    "c"
    /* LifecycleHooks.CREATED */
  );
  function ee(V, j) {
    I(j) ? j.forEach((je) => V(je.bind(n))) : j && V(j.bind(n));
  }
  if (ee(Po, E), ee(qs, y), ee(Mo, x), ee(zo, M), ee(ko, N), ee(Lo, K), ee(Ho, k), ee(Fo, Ze), ee(jo, Ce), ee(Qs, le), ee(ei, G), ee(Uo, Z), I(W))
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
  q && e.render === me && (e.render = q), oe != null && (e.inheritAttrs = oe), he && (e.components = he), Oe && (e.directives = Oe);
}
function Bo(e, t, n = me, s = !1) {
  I(e) && (e = fn(e));
  for (const i in e) {
    const o = e[i];
    let r;
    B(o) ? "default" in o ? r = Dt(
      o.from || i,
      o.default,
      !0
      /* treat default function as factory */
    ) : r = Dt(o.from || i) : r = Dt(o), ne(r) && s ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (c) => r.value = c
    }) : t[i] = r;
  }
}
function ts(e, t, n) {
  ae(I(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function ti(e, t, n, s) {
  const i = s.includes(".") ? Xs(n, s) : () => n[s];
  if ($(e)) {
    const o = t[e];
    C(o) && Xt(i, o);
  } else if (C(e))
    Xt(i, e.bind(n));
  else if (B(e))
    if (I(e))
      e.forEach((o) => ti(o, t, n, s));
    else {
      const o = C(e.handler) ? e.handler.bind(n) : t[e.handler];
      C(o) && Xt(i, o, e);
    }
}
function kn(e) {
  const t = e.type, { mixins: n, extends: s } = t, { mixins: i, optionsCache: o, config: { optionMergeStrategies: r } } = e.appContext, c = o.get(t);
  let u;
  return c ? u = c : !i.length && !n && !s ? u = t : (u = {}, i.length && i.forEach((_) => Ct(u, _, r, !0)), Ct(u, t, r)), B(t) && o.set(t, u), u;
}
function Ct(e, t, n, s = !1) {
  const { mixins: i, extends: o } = t;
  o && Ct(e, o, n, !0), i && i.forEach((r) => Ct(e, r, n, !0));
  for (const r in t)
    if (!(s && r === "expose")) {
      const c = Ko[r] || n && n[r];
      e[r] = c ? c(e[r], t[r]) : t[r];
    }
  return e;
}
const Ko = {
  data: ns,
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
  watch: Xo,
  // provide / inject
  provide: ns,
  inject: Yo
};
function ns(e, t) {
  return t ? e ? function() {
    return J(C(e) ? e.call(this, this) : e, C(t) ? t.call(this, this) : t);
  } : t : e;
}
function Yo(e, t) {
  return We(fn(e), fn(t));
}
function fn(e) {
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
function Xo(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = J(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = te(e[s], t[s]);
  return n;
}
function Zo(e, t, n, s = !1) {
  const i = {}, o = {};
  It(o, Gt, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), ni(e, t, i, o);
  for (const r in e.propsOptions[0])
    r in i || (i[r] = void 0);
  n ? e.props = s ? i : oo(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function $o(e, t, n, s) {
  const { props: i, attrs: o, vnode: { patchFlag: r } } = e, c = P(i), [u] = e.propsOptions;
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
        if (Ut(e.emitsOptions, y))
          continue;
        const x = t[y];
        if (u)
          if (w(o, y))
            x !== o[y] && (o[y] = x, _ = !0);
          else {
            const M = Se(y);
            i[M] = _n(
              u,
              c,
              M,
              x,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          x !== o[y] && (o[y] = x, _ = !0);
      }
    }
  } else {
    ni(e, t, i, o) && (_ = !0);
    let g;
    for (const E in c)
      (!t || // for camelCase
      !w(t, E) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((g = _e(E)) === E || !w(t, g))) && (u ? n && // for camelCase
      (n[E] !== void 0 || // for kebab-case
      n[g] !== void 0) && (i[E] = _n(
        u,
        c,
        E,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete i[E]);
    if (o !== c)
      for (const E in o)
        (!t || !w(t, E)) && (delete o[E], _ = !0);
  }
  _ && Ie(e, "set", "$attrs");
}
function ni(e, t, n, s) {
  const [i, o] = e.propsOptions;
  let r = !1, c;
  if (t)
    for (let u in t) {
      if (Ot(u))
        continue;
      const _ = t[u];
      let g;
      i && w(i, g = Se(u)) ? !o || !o.includes(g) ? n[g] = _ : (c || (c = {}))[g] = _ : Ut(e.emitsOptions, u) || (!(u in s) || _ !== s[u]) && (s[u] = _, r = !0);
    }
  if (o) {
    const u = P(n), _ = c || H;
    for (let g = 0; g < o.length; g++) {
      const E = o[g];
      n[E] = _n(i, u, E, _[E], e, !w(_, E));
    }
  }
  return r;
}
function _n(e, t, n, s, i, o) {
  const r = e[n];
  if (r != null) {
    const c = w(r, "default");
    if (c && s === void 0) {
      const u = r.default;
      if (r.type !== Function && C(u)) {
        const { propsDefaults: _ } = i;
        n in _ ? s = _[n] : (st(i), s = _[n] = u.call(null, t), Xe());
      } else
        s = u;
    }
    r[
      0
      /* BooleanFlags.shouldCast */
    ] && (o && !c ? s = !1 : r[
      1
      /* BooleanFlags.shouldCastTrue */
    ] && (s === "" || s === _e(n)) && (s = !0));
  }
  return s;
}
function si(e, t, n = !1) {
  const s = t.propsCache, i = s.get(e);
  if (i)
    return i;
  const o = e.props, r = {}, c = [];
  let u = !1;
  if (!C(e)) {
    const g = (E) => {
      u = !0;
      const [y, x] = si(E, t, !0);
      J(r, y), x && c.push(...x);
    };
    !n && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g);
  }
  if (!o && !u)
    return B(e) && s.set(e, Qe), Qe;
  if (I(o))
    for (let g = 0; g < o.length; g++) {
      const E = Se(o[g]);
      ss(E) && (r[E] = H);
    }
  else if (o)
    for (const g in o) {
      const E = Se(g);
      if (ss(E)) {
        const y = o[g], x = r[E] = I(y) || C(y) ? { type: y } : Object.assign({}, y);
        if (x) {
          const M = rs(Boolean, x.type), N = rs(String, x.type);
          x[
            0
            /* BooleanFlags.shouldCast */
          ] = M > -1, x[
            1
            /* BooleanFlags.shouldCastTrue */
          ] = N < 0 || M < N, (M > -1 || w(x, "default")) && c.push(E);
        }
      }
    }
  const _ = [r, c];
  return B(e) && s.set(e, _), _;
}
function ss(e) {
  return e[0] !== "$";
}
function is(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function os(e, t) {
  return is(e) === is(t);
}
function rs(e, t) {
  return I(t) ? t.findIndex((n) => os(n, e)) : C(t) && os(t, e) ? 0 : -1;
}
const ii = (e) => e[0] === "_" || e === "$stable", Ln = (e) => I(e) ? e.map(ye) : [ye(e)], Jo = (e, t, n) => {
  if (t._n)
    return t;
  const s = vo((...i) => Ln(t(...i)), n);
  return s._c = !1, s;
}, oi = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (ii(i))
      continue;
    const o = e[i];
    if (C(o))
      t[i] = Jo(i, o, s);
    else if (o != null) {
      const r = Ln(o);
      t[i] = () => r;
    }
  }
}, ri = (e, t) => {
  const n = Ln(t);
  e.slots.default = () => n;
}, qo = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = P(t), It(t, "_", n)) : oi(t, e.slots = {});
  } else
    e.slots = {}, t && ri(e, t);
  It(e.slots, Gt, 1);
}, Qo = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let o = !0, r = H;
  if (s.shapeFlag & 32) {
    const c = t._;
    c ? n && c === 1 ? o = !1 : (J(i, t), !n && c === 1 && delete i._) : (o = !t.$stable, oi(t, i)), r = t;
  } else
    t && (ri(e, t), r = { default: 1 });
  if (o)
    for (const c in i)
      !ii(c) && !(c in r) && delete i[c];
};
function li() {
  return {
    app: null,
    config: {
      isNativeTag: yi,
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
let er = 0;
function tr(e, t) {
  return function(s, i = null) {
    C(s) || (s = Object.assign({}, s)), i != null && !B(i) && (i = null);
    const o = li(), r = /* @__PURE__ */ new Set();
    let c = !1;
    const u = o.app = {
      _uid: er++,
      _component: s,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Sr,
      get config() {
        return o.config;
      },
      set config(_) {
      },
      use(_, ...g) {
        return r.has(_) || (_ && C(_.install) ? (r.add(_), _.install(u, ...g)) : C(_) && (r.add(_), _(u, ...g))), u;
      },
      mixin(_) {
        return o.mixins.includes(_) || o.mixins.push(_), u;
      },
      component(_, g) {
        return g ? (o.components[_] = g, u) : o.components[_];
      },
      directive(_, g) {
        return g ? (o.directives[_] = g, u) : o.directives[_];
      },
      mount(_, g, E) {
        if (!c) {
          const y = Me(s, i);
          return y.appContext = o, g && t ? t(y, _) : e(y, _, E), c = !0, u._container = _, _.__vue_app__ = u, Pn(y.component) || y.component.proxy;
        }
      },
      unmount() {
        c && (e(null, u._container), delete u._container.__vue_app__);
      },
      provide(_, g) {
        return o.provides[_] = g, u;
      }
    };
    return u;
  };
}
function dn(e, t, n, s, i = !1) {
  if (I(e)) {
    e.forEach((y, x) => dn(y, t && (I(t) ? t[x] : t), n, s, i));
    return;
  }
  if (Nt(s) && !i)
    return;
  const o = s.shapeFlag & 4 ? Pn(s.component) || s.component.proxy : s.el, r = i ? null : o, { i: c, r: u } = e, _ = t && t.r, g = c.refs === H ? c.refs = {} : c.refs, E = c.setupState;
  if (_ != null && _ !== u && ($(_) ? (g[_] = null, w(E, _) && (E[_] = null)) : ne(_) && (_.value = null)), C(u))
    Pe(u, c, 12, [r, g]);
  else {
    const y = $(u), x = ne(u);
    if (y || x) {
      const M = () => {
        if (e.f) {
          const N = y ? w(E, u) ? E[u] : g[u] : u.value;
          i ? I(N) && bn(N, o) : I(N) ? N.includes(o) || N.push(o) : y ? (g[u] = [o], w(E, u) && (E[u] = g[u])) : (u.value = [o], e.k && (g[e.k] = u.value));
        } else
          y ? (g[u] = r, w(E, u) && (E[u] = r)) : x && (u.value = r, e.k && (g[e.k] = r));
      };
      r ? (M.id = -1, se(M, n)) : M();
    }
  }
}
const se = Do;
function nr(e) {
  return sr(e);
}
function sr(e, t) {
  const n = Ii();
  n.__VUE__ = !0;
  const { insert: s, remove: i, patchProp: o, createElement: r, createText: c, createComment: u, setText: _, setElementText: g, parentNode: E, nextSibling: y, setScopeId: x = me, insertStaticContent: M } = e, N = (l, a, f, p = null, d = null, b = null, T = !1, h = null, v = !!a.dynamicChildren) => {
    if (l === a)
      return;
    l && !Be(l, a) && (p = ht(l), be(l, d, b, !0), l = null), a.patchFlag === -2 && (v = !1, a.dynamicChildren = null);
    const { type: m, ref: O, shapeFlag: A } = a;
    switch (m) {
      case Ht:
        K(l, a, f, p);
        break;
      case xe:
        U(l, a, f, p);
        break;
      case Jt:
        l == null && le(a, f, p, T);
        break;
      case Te:
        he(l, a, f, p, d, b, T, h, v);
        break;
      default:
        A & 1 ? q(l, a, f, p, d, b, T, h, v) : A & 6 ? Oe(l, a, f, p, d, b, T, h, v) : (A & 64 || A & 128) && m.process(l, a, f, p, d, b, T, h, v, $e);
    }
    O != null && d && dn(O, l && l.ref, b, a || l, !a);
  }, K = (l, a, f, p) => {
    if (l == null)
      s(a.el = c(a.children), f, p);
    else {
      const d = a.el = l.el;
      a.children !== l.children && _(d, a.children);
    }
  }, U = (l, a, f, p) => {
    l == null ? s(a.el = u(a.children || ""), f, p) : a.el = l.el;
  }, le = (l, a, f, p) => {
    [l.el, l.anchor] = M(l.children, a, f, p, l.el, l.anchor);
  }, R = ({ el: l, anchor: a }, f, p) => {
    let d;
    for (; l && l !== a; )
      d = y(l), s(l, f, p), l = d;
    s(a, f, p);
  }, G = ({ el: l, anchor: a }) => {
    let f;
    for (; l && l !== a; )
      f = y(l), i(l), l = f;
    i(a);
  }, q = (l, a, f, p, d, b, T, h, v) => {
    T = T || a.type === "svg", l == null ? Ze(a, f, p, d, b, T, h, v) : Z(l, a, d, b, T, h, v);
  }, Ze = (l, a, f, p, d, b, T, h) => {
    let v, m;
    const { type: O, props: A, shapeFlag: D, transition: S, dirs: L } = l;
    if (v = l.el = r(l.type, b, A && A.is, A), D & 8 ? g(v, l.children) : D & 16 && k(l.children, v, null, p, d, b && O !== "foreignObject", T, h), L && He(l, null, p, "created"), Ce(v, l, l.scopeId, T, p), A) {
      for (const z in A)
        z !== "value" && !Ot(z) && o(v, z, null, A[z], b, l.children, p, d, De);
      "value" in A && o(v, "value", null, A.value), (m = A.onVnodeBeforeMount) && Ee(m, p, l);
    }
    L && He(l, null, p, "beforeMount");
    const F = (!d || d && !d.pendingBranch) && S && !S.persisted;
    F && S.beforeEnter(v), s(v, a, f), ((m = A && A.onVnodeMounted) || F || L) && se(() => {
      m && Ee(m, p, l), F && S.enter(v), L && He(l, null, p, "mounted");
    }, d);
  }, Ce = (l, a, f, p, d) => {
    if (f && x(l, f), p)
      for (let b = 0; b < p.length; b++)
        x(l, p[b]);
    if (d) {
      let b = d.subTree;
      if (a === b) {
        const T = d.vnode;
        Ce(l, T, T.scopeId, T.slotScopeIds, d.parent);
      }
    }
  }, k = (l, a, f, p, d, b, T, h, v = 0) => {
    for (let m = v; m < l.length; m++) {
      const O = l[m] = h ? Le(l[m]) : ye(l[m]);
      N(null, O, a, f, p, d, b, T, h);
    }
  }, Z = (l, a, f, p, d, b, T) => {
    const h = a.el = l.el;
    let { patchFlag: v, dynamicChildren: m, dirs: O } = a;
    v |= l.patchFlag & 16;
    const A = l.props || H, D = a.props || H;
    let S;
    f && Ge(f, !1), (S = D.onVnodeBeforeUpdate) && Ee(S, f, a, l), O && He(a, l, f, "beforeUpdate"), f && Ge(f, !0);
    const L = d && a.type !== "foreignObject";
    if (m ? W(l.dynamicChildren, m, h, f, p, L, b) : T || j(l, a, h, null, f, p, L, b, !1), v > 0) {
      if (v & 16)
        oe(h, a, A, D, f, p, d);
      else if (v & 2 && A.class !== D.class && o(h, "class", null, D.class, d), v & 4 && o(h, "style", A.style, D.style, d), v & 8) {
        const F = a.dynamicProps;
        for (let z = 0; z < F.length; z++) {
          const Y = F[z], ue = A[Y], Je = D[Y];
          (Je !== ue || Y === "value") && o(h, Y, ue, Je, d, l.children, f, p, De);
        }
      }
      v & 1 && l.children !== a.children && g(h, a.children);
    } else
      !T && m == null && oe(h, a, A, D, f, p, d);
    ((S = D.onVnodeUpdated) || O) && se(() => {
      S && Ee(S, f, a, l), O && He(a, l, f, "updated");
    }, p);
  }, W = (l, a, f, p, d, b, T) => {
    for (let h = 0; h < a.length; h++) {
      const v = l[h], m = a[h], O = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        v.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (v.type === Te || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Be(v, m) || // - In the case of a component, it could contain anything.
        v.shapeFlag & 70) ? E(v.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          f
        )
      );
      N(v, m, O, null, p, d, b, T, !0);
    }
  }, oe = (l, a, f, p, d, b, T) => {
    if (f !== p) {
      if (f !== H)
        for (const h in f)
          !Ot(h) && !(h in p) && o(l, h, f[h], null, T, a.children, d, b, De);
      for (const h in p) {
        if (Ot(h))
          continue;
        const v = p[h], m = f[h];
        v !== m && h !== "value" && o(l, h, m, v, T, a.children, d, b, De);
      }
      "value" in p && o(l, "value", f.value, p.value);
    }
  }, he = (l, a, f, p, d, b, T, h, v) => {
    const m = a.el = l ? l.el : c(""), O = a.anchor = l ? l.anchor : c("");
    let { patchFlag: A, dynamicChildren: D, slotScopeIds: S } = a;
    S && (h = h ? h.concat(S) : S), l == null ? (s(m, f, p), s(O, f, p), k(a.children, f, O, d, b, T, h, v)) : A > 0 && A & 64 && D && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (W(l.dynamicChildren, D, f, d, b, T, h), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (a.key != null || d && a === d.subTree) && ci(
      l,
      a,
      !0
      /* shallow */
    )) : j(l, a, f, O, d, b, T, h, v);
  }, Oe = (l, a, f, p, d, b, T, h, v) => {
    a.slotScopeIds = h, l == null ? a.shapeFlag & 512 ? d.ctx.activate(a, f, p, T, v) : rt(a, f, p, d, b, T, v) : zn(l, a, v);
  }, rt = (l, a, f, p, d, b, T) => {
    const h = l.component = hr(l, p, d);
    if (jt(l) && (h.ctx.renderer = $e), vr(h), h.asyncDep) {
      if (d && d.registerDep(h, ee), !l.el) {
        const v = h.subTree = Me(xe);
        U(null, v, a, f);
      }
      return;
    }
    ee(h, l, a, f, d, b, T);
  }, zn = (l, a, f) => {
    const p = a.component = l.component;
    if (yo(l, a, f))
      if (p.asyncDep && !p.asyncResolved) {
        V(p, a, f);
        return;
      } else
        p.next = a, go(p.update), p.update();
    else
      a.el = l.el, p.vnode = a;
  }, ee = (l, a, f, p, d, b, T) => {
    const h = () => {
      if (l.isMounted) {
        let { next: O, bu: A, u: D, parent: S, vnode: L } = l, F = O, z;
        Ge(l, !1), O ? (O.el = L.el, V(l, O, T)) : O = L, A && Kt(A), (z = O.props && O.props.onVnodeBeforeUpdate) && Ee(z, S, O, L), Ge(l, !0);
        const Y = Yt(l), ue = l.subTree;
        l.subTree = Y, N(
          ue,
          Y,
          // parent may have changed if it's in a teleport
          E(ue.el),
          // anchor may have changed if it's in a fragment
          ht(ue),
          l,
          d,
          b
        ), O.el = Y.el, F === null && Ao(l, Y.el), D && se(D, d), (z = O.props && O.props.onVnodeUpdated) && se(() => Ee(z, S, O, L), d);
      } else {
        let O;
        const { el: A, props: D } = a, { bm: S, m: L, parent: F } = l, z = Nt(a);
        if (Ge(l, !1), S && Kt(S), !z && (O = D && D.onVnodeBeforeMount) && Ee(O, F, a), Ge(l, !0), A && Vt) {
          const Y = () => {
            l.subTree = Yt(l), Vt(A, l.subTree, l, d, null);
          };
          z ? a.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !l.isUnmounted && Y()
          ) : Y();
        } else {
          const Y = l.subTree = Yt(l);
          N(null, Y, f, p, l, d, b), a.el = Y.el;
        }
        if (L && se(L, d), !z && (O = D && D.onVnodeMounted)) {
          const Y = a;
          se(() => Ee(O, F, Y), d);
        }
        (a.shapeFlag & 256 || F && Nt(F.vnode) && F.vnode.shapeFlag & 256) && l.a && se(l.a, d), l.isMounted = !0, a = f = p = null;
      }
    }, v = l.effect = new yn(
      h,
      () => Cn(m),
      l.scope
      // track it in component's effect scope
    ), m = l.update = () => v.run();
    m.id = l.uid, Ge(l, !0), m();
  }, V = (l, a, f) => {
    a.component = l;
    const p = l.vnode.props;
    l.vnode = a, l.next = null, $o(l, a.props, p, f), Qo(l, a.children, f), it(), qn(), ot();
  }, j = (l, a, f, p, d, b, T, h, v = !1) => {
    const m = l && l.children, O = l ? l.shapeFlag : 0, A = a.children, { patchFlag: D, shapeFlag: S } = a;
    if (D > 0) {
      if (D & 128) {
        mt(m, A, f, p, d, b, T, h, v);
        return;
      } else if (D & 256) {
        je(m, A, f, p, d, b, T, h, v);
        return;
      }
    }
    S & 8 ? (O & 16 && De(m, d, b), A !== m && g(f, A)) : O & 16 ? S & 16 ? mt(m, A, f, p, d, b, T, h, v) : De(m, d, b, !0) : (O & 8 && g(f, ""), S & 16 && k(A, f, p, d, b, T, h, v));
  }, je = (l, a, f, p, d, b, T, h, v) => {
    l = l || Qe, a = a || Qe;
    const m = l.length, O = a.length, A = Math.min(m, O);
    let D;
    for (D = 0; D < A; D++) {
      const S = a[D] = v ? Le(a[D]) : ye(a[D]);
      N(l[D], S, f, null, d, b, T, h, v);
    }
    m > O ? De(l, d, b, !0, !1, A) : k(a, f, p, d, b, T, h, v, A);
  }, mt = (l, a, f, p, d, b, T, h, v) => {
    let m = 0;
    const O = a.length;
    let A = l.length - 1, D = O - 1;
    for (; m <= A && m <= D; ) {
      const S = l[m], L = a[m] = v ? Le(a[m]) : ye(a[m]);
      if (Be(S, L))
        N(S, L, f, null, d, b, T, h, v);
      else
        break;
      m++;
    }
    for (; m <= A && m <= D; ) {
      const S = l[A], L = a[D] = v ? Le(a[D]) : ye(a[D]);
      if (Be(S, L))
        N(S, L, f, null, d, b, T, h, v);
      else
        break;
      A--, D--;
    }
    if (m > A) {
      if (m <= D) {
        const S = D + 1, L = S < O ? a[S].el : p;
        for (; m <= D; )
          N(null, a[m] = v ? Le(a[m]) : ye(a[m]), f, L, d, b, T, h, v), m++;
      }
    } else if (m > D)
      for (; m <= A; )
        be(l[m], d, b, !0), m++;
    else {
      const S = m, L = m, F = /* @__PURE__ */ new Map();
      for (m = L; m <= D; m++) {
        const re = a[m] = v ? Le(a[m]) : ye(a[m]);
        re.key != null && F.set(re.key, m);
      }
      let z, Y = 0;
      const ue = D - L + 1;
      let Je = !1, Fn = 0;
      const lt = new Array(ue);
      for (m = 0; m < ue; m++)
        lt[m] = 0;
      for (m = S; m <= A; m++) {
        const re = l[m];
        if (Y >= ue) {
          be(re, d, b, !0);
          continue;
        }
        let ve;
        if (re.key != null)
          ve = F.get(re.key);
        else
          for (z = L; z <= D; z++)
            if (lt[z - L] === 0 && Be(re, a[z])) {
              ve = z;
              break;
            }
        ve === void 0 ? be(re, d, b, !0) : (lt[ve - L] = m + 1, ve >= Fn ? Fn = ve : Je = !0, N(re, a[ve], f, null, d, b, T, h, v), Y++);
      }
      const Hn = Je ? ir(lt) : Qe;
      for (z = Hn.length - 1, m = ue - 1; m >= 0; m--) {
        const re = L + m, ve = a[re], Gn = re + 1 < O ? a[re + 1].el : p;
        lt[m] === 0 ? N(null, ve, f, Gn, d, b, T, h, v) : Je && (z < 0 || m !== Hn[z] ? Fe(
          ve,
          f,
          Gn,
          2
          /* MoveType.REORDER */
        ) : z--);
      }
    }
  }, Fe = (l, a, f, p, d = null) => {
    const { el: b, type: T, transition: h, children: v, shapeFlag: m } = l;
    if (m & 6) {
      Fe(l.component.subTree, a, f, p);
      return;
    }
    if (m & 128) {
      l.suspense.move(a, f, p);
      return;
    }
    if (m & 64) {
      T.move(l, a, f, $e);
      return;
    }
    if (T === Te) {
      s(b, a, f);
      for (let A = 0; A < v.length; A++)
        Fe(v[A], a, f, p);
      s(l.anchor, a, f);
      return;
    }
    if (T === Jt) {
      R(l, a, f);
      return;
    }
    if (p !== 2 && m & 1 && h)
      if (p === 0)
        h.beforeEnter(b), s(b, a, f), se(() => h.enter(b), d);
      else {
        const { leave: A, delayLeave: D, afterLeave: S } = h, L = () => s(b, a, f), F = () => {
          A(b, () => {
            L(), S && S();
          });
        };
        D ? D(b, L, F) : F();
      }
    else
      s(b, a, f);
  }, be = (l, a, f, p = !1, d = !1) => {
    const { type: b, props: T, ref: h, children: v, dynamicChildren: m, shapeFlag: O, patchFlag: A, dirs: D } = l;
    if (h != null && dn(h, null, f, l, !0), O & 256) {
      a.ctx.deactivate(l);
      return;
    }
    const S = O & 1 && D, L = !Nt(l);
    let F;
    if (L && (F = T && T.onVnodeBeforeUnmount) && Ee(F, a, l), O & 6)
      pi(l.component, f, p);
    else {
      if (O & 128) {
        l.suspense.unmount(f, p);
        return;
      }
      S && He(l, null, a, "beforeUnmount"), O & 64 ? l.type.remove(l, a, f, d, $e, p) : m && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== Te || A > 0 && A & 64) ? De(m, a, f, !1, !0) : (b === Te && A & 384 || !d && O & 16) && De(v, a, f), p && Un(l);
    }
    (L && (F = T && T.onVnodeUnmounted) || S) && se(() => {
      F && Ee(F, a, l), S && He(l, null, a, "unmounted");
    }, f);
  }, Un = (l) => {
    const { type: a, el: f, anchor: p, transition: d } = l;
    if (a === Te) {
      di(f, p);
      return;
    }
    if (a === Jt) {
      G(l);
      return;
    }
    const b = () => {
      i(f), d && !d.persisted && d.afterLeave && d.afterLeave();
    };
    if (l.shapeFlag & 1 && d && !d.persisted) {
      const { leave: T, delayLeave: h } = d, v = () => T(f, b);
      h ? h(l.el, b, v) : v();
    } else
      b();
  }, di = (l, a) => {
    let f;
    for (; l !== a; )
      f = y(l), i(l), l = f;
    i(a);
  }, pi = (l, a, f) => {
    const { bum: p, scope: d, update: b, subTree: T, um: h } = l;
    p && Kt(p), d.stop(), b && (b.active = !1, be(T, l, a, f)), h && se(h, a), se(() => {
      l.isUnmounted = !0;
    }, a), a && a.pendingBranch && !a.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === a.pendingId && (a.deps--, a.deps === 0 && a.resolve());
  }, De = (l, a, f, p = !1, d = !1, b = 0) => {
    for (let T = b; T < l.length; T++)
      be(l[T], a, f, p, d);
  }, ht = (l) => l.shapeFlag & 6 ? ht(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : y(l.anchor || l.el), jn = (l, a, f) => {
    l == null ? a._vnode && be(a._vnode, null, null, !0) : N(a._vnode || null, l, a, null, null, null, f), qn(), Ws(), a._vnode = l;
  }, $e = {
    p: N,
    um: be,
    m: Fe,
    r: Un,
    mt: rt,
    mc: k,
    pc: j,
    pbc: W,
    n: ht,
    o: e
  };
  let Wt, Vt;
  return t && ([Wt, Vt] = t($e)), {
    render: jn,
    hydrate: Wt,
    createApp: tr(jn, Wt)
  };
}
function Ge({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function ci(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (I(s) && I(i))
    for (let o = 0; o < s.length; o++) {
      const r = s[o];
      let c = i[o];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = i[o] = Le(i[o]), c.el = r.el), n || ci(r, c)), c.type === Ht && (c.el = r.el);
    }
}
function ir(e) {
  const t = e.slice(), n = [0];
  let s, i, o, r, c;
  const u = e.length;
  for (s = 0; s < u; s++) {
    const _ = e[s];
    if (_ !== 0) {
      if (i = n[n.length - 1], e[i] < _) {
        t[s] = i, n.push(s);
        continue;
      }
      for (o = 0, r = n.length - 1; o < r; )
        c = o + r >> 1, e[n[c]] < _ ? o = c + 1 : r = c;
      _ < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s);
    }
  }
  for (o = n.length, r = n[o - 1]; o-- > 0; )
    n[o] = r, r = t[r];
  return n;
}
const or = (e) => e.__isTeleport, Te = Symbol(void 0), Ht = Symbol(void 0), xe = Symbol(void 0), Jt = Symbol(void 0), ut = [];
let ge = null;
function rr(e = !1) {
  ut.push(ge = e ? null : []);
}
function lr() {
  ut.pop(), ge = ut[ut.length - 1] || null;
}
let pt = 1;
function ls(e) {
  pt += e;
}
function cr(e) {
  return e.dynamicChildren = pt > 0 ? ge || Qe : null, lr(), pt > 0 && ge && ge.push(e), e;
}
function ar(e, t, n, s, i, o) {
  return cr(ui(
    e,
    t,
    n,
    s,
    i,
    o,
    !0
    /* isBlock */
  ));
}
function ur(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Be(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Gt = "__vInternal", ai = ({ key: e }) => e ?? null, St = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? $(e) || ne(e) || C(e) ? { i: pe, r: e, k: t, f: !!n } : e : null;
function ui(e, t = null, n = null, s = 0, i = null, o = e === Te ? 0 : 1, r = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ai(t),
    ref: t && St(t),
    scopeId: Ks,
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
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: pe
  };
  return c ? (wn(u, n), o & 128 && e.normalize(u)) : n && (u.shapeFlag |= $(n) ? 8 : 16), pt > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  ge && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && ge.push(u), u;
}
const Me = fr;
function fr(e, t = null, n = null, s = 0, i = null, o = !1) {
  if ((!e || e === Go) && (e = xe), ur(e)) {
    const c = Ue(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && wn(c, n), pt > 0 && !o && ge && (c.shapeFlag & 6 ? ge[ge.indexOf(e)] = c : ge.push(c)), c.patchFlag |= -2, c;
  }
  if (Ar(e) && (e = e.__vccOpts), t) {
    t = _r(t);
    let { class: c, style: u } = t;
    c && !$(c) && (t.class = kt(c)), B(u) && (Ms(u) && !I(u) && (u = J({}, u)), t.style = mn(u));
  }
  const r = $(e) ? 1 : Oo(e) ? 128 : or(e) ? 64 : B(e) ? 4 : C(e) ? 2 : 0;
  return ui(e, t, n, s, i, r, o, !0);
}
function _r(e) {
  return e ? Ms(e) || Gt in e ? J({}, e) : e : null;
}
function Ue(e, t, n = !1) {
  const { props: s, ref: i, patchFlag: o, children: r } = e, c = t ? pr(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && ai(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? I(i) ? i.concat(St(t)) : [i, St(t)] : St(t)
    ) : i,
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
    patchFlag: t && e.type !== Te ? o === -1 ? 16 : o | 16 : o,
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
function dr(e = " ", t = 0) {
  return Me(Ht, null, e, t);
}
function ye(e) {
  return e == null || typeof e == "boolean" ? Me(xe) : I(e) ? Me(
    Te,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? Le(e) : Me(Ht, null, String(e));
}
function Le(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ue(e);
}
function wn(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (I(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), wn(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !(Gt in t) ? t._ctx = pe : i === 3 && pe && (pe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    C(t) ? (t = { default: t, _ctx: pe }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [dr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function pr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = kt([t.class, s.class]));
      else if (i === "style")
        t.style = mn([t.style, s.style]);
      else if (Lt(i)) {
        const o = t[i], r = s[i];
        r && o !== r && !(I(o) && o.includes(r)) && (t[i] = o ? [].concat(o, r) : r);
      } else
        i !== "" && (t[i] = s[i]);
  }
  return t;
}
function Ee(e, t, n, s = null) {
  ae(e, t, 7, [
    n,
    s
  ]);
}
const gr = li();
let mr = 0;
function hr(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || gr, o = {
    uid: mr++,
    vnode: e,
    type: s,
    parent: t,
    appContext: i,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Ri(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: si(s, i),
    emitsOptions: Bs(s, i),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: H,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: H,
    data: H,
    props: H,
    attrs: H,
    slots: H,
    refs: H,
    setupState: H,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = bo.bind(null, o), e.ce && e.ce(o), o;
}
let X = null;
const br = () => X || pe, st = (e) => {
  X = e, e.scope.on();
}, Xe = () => {
  X && X.scope.off(), X = null;
};
function fi(e) {
  return e.vnode.shapeFlag & 4;
}
let gt = !1;
function vr(e, t = !1) {
  gt = t;
  const { props: n, children: s } = e.vnode, i = fi(e);
  Zo(e, n, i, t), qo(e, s);
  const o = i ? Er(e, t) : void 0;
  return gt = !1, o;
}
function Er(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = zs(new Proxy(e.ctx, Wo));
  const { setup: s } = n;
  if (s) {
    const i = e.setupContext = s.length > 1 ? yr(e) : null;
    st(e), it();
    const o = Pe(s, e, 0, [e.props, i]);
    if (ot(), Xe(), Ts(o)) {
      if (o.then(Xe, Xe), t)
        return o.then((r) => {
          cs(e, r, t);
        }).catch((r) => {
          zt(
            r,
            e,
            0
            /* ErrorCodes.SETUP_FUNCTION */
          );
        });
      e.asyncDep = o;
    } else
      cs(e, o, t);
  } else
    _i(e, t);
}
function cs(e, t, n) {
  C(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : B(t) && (e.setupState = Us(t)), _i(e, n);
}
let as;
function _i(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && as && !s.render) {
      const i = s.template || kn(e).template;
      if (i) {
        const { isCustomElement: o, compilerOptions: r } = e.appContext.config, { delimiters: c, compilerOptions: u } = s, _ = J(J({
          isCustomElement: o,
          delimiters: c
        }, r), u);
        s.render = as(i, _);
      }
    }
    e.render = s.render || me;
  }
  st(e), it(), Vo(e), ot(), Xe();
}
function Tr(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return ie(e, "get", "$attrs"), t[n];
    }
  });
}
function yr(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = Tr(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Pn(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Us(zs(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in at)
          return at[n](e);
      },
      has(t, n) {
        return n in t || n in at;
      }
    }));
}
function Ar(e) {
  return C(e) && "__vccOpts" in e;
}
const Or = (e, t) => fo(e, t, gt), Dr = Symbol(""), Nr = () => Dt(Dr), Sr = "3.2.47", xr = "http://www.w3.org/2000/svg", Ke = typeof document < "u" ? document : null, us = Ke && /* @__PURE__ */ Ke.createElement("template"), Ir = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t ? Ke.createElementNS(xr, e) : Ke.createElement(e, n ? { is: n } : void 0);
    return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
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
  insertStaticContent(e, t, n, s, i, o) {
    const r = n ? n.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      us.innerHTML = s ? `<svg>${e}</svg>` : e;
      const c = us.content;
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
function Rr(e, t, n) {
  const s = e._vtc;
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function Cr(e, t, n) {
  const s = e.style, i = $(n);
  if (n && !i) {
    if (t && !$(t))
      for (const o in t)
        n[o] == null && pn(s, o, "");
    for (const o in n)
      pn(s, o, n[o]);
  } else {
    const o = s.display;
    i ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (s.display = o);
  }
}
const fs = /\s*!important$/;
function pn(e, t, n) {
  if (I(n))
    n.forEach((s) => pn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = kr(e, t);
    fs.test(n) ? e.setProperty(_e(s), n.replace(fs, ""), "important") : e[s] = n;
  }
}
const _s = ["Webkit", "Moz", "ms"], qt = {};
function kr(e, t) {
  const n = qt[t];
  if (n)
    return n;
  let s = Se(t);
  if (s !== "filter" && s in e)
    return qt[t] = s;
  s = Os(s);
  for (let i = 0; i < _s.length; i++) {
    const o = _s[i] + s;
    if (o in e)
      return qt[t] = o;
  }
  return t;
}
const ds = "http://www.w3.org/1999/xlink";
function Lr(e, t, n, s, i) {
  if (s && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(ds, t.slice(6, t.length)) : e.setAttributeNS(ds, t, n);
  else {
    const o = Ei(t);
    n == null || o && !bs(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
  }
}
function wr(e, t, n, s, i, o, r) {
  if (t === "innerHTML" || t === "textContent") {
    s && r(s, i, o), e[t] = n ?? "";
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
    u === "boolean" ? n = bs(n) : n == null && u === "string" ? (n = "", c = !0) : u === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  c && e.removeAttribute(t);
}
function Pr(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Mr(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
function zr(e, t, n, s, i = null) {
  const o = e._vei || (e._vei = {}), r = o[t];
  if (s && r)
    r.value = s;
  else {
    const [c, u] = Ur(t);
    if (s) {
      const _ = o[t] = Hr(s, i);
      Pr(e, c, _, u);
    } else
      r && (Mr(e, c, r, u), o[t] = void 0);
  }
}
const ps = /(?:Once|Passive|Capture)$/;
function Ur(e) {
  let t;
  if (ps.test(e)) {
    t = {};
    let s;
    for (; s = e.match(ps); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : _e(e.slice(2)), t];
}
let Qt = 0;
const jr = /* @__PURE__ */ Promise.resolve(), Fr = () => Qt || (jr.then(() => Qt = 0), Qt = Date.now());
function Hr(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    ae(Gr(s, n.value), t, 5, [s]);
  };
  return n.value = e, n.attached = Fr(), n;
}
function Gr(e, t) {
  if (I(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((s) => (i) => !i._stopped && s && s(i));
  } else
    return t;
}
const gs = /^on[a-z]/, Wr = (e, t, n, s, i = !1, o, r, c, u) => {
  t === "class" ? Rr(e, s, i) : t === "style" ? Cr(e, n, s) : Lt(t) ? hn(t) || zr(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Vr(e, t, s, i)) ? wr(e, t, s, o, r, c, u) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Lr(e, t, s, i));
};
function Vr(e, t, n, s) {
  return s ? !!(t === "innerHTML" || t === "textContent" || t in e && gs.test(t) && C(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || gs.test(t) && $(n) ? !1 : t in e;
}
function Br(e, t) {
  const n = Co(e);
  class s extends Mn {
    constructor(o) {
      super(n, o, t);
    }
  }
  return s.def = n, s;
}
const Kr = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Mn extends Kr {
  constructor(t, n = {}, s) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && s ? s(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, Hs(() => {
      this._connected || (hs(null, this.shadowRoot), this._instance = null);
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
      for (const i of s)
        this._setAttr(i.attributeName);
    }).observe(this, { attributes: !0 });
    const t = (s, i = !1) => {
      const { props: o, styles: r } = s;
      let c;
      if (o && !I(o))
        for (const u in o) {
          const _ = o[u];
          (_ === Number || _ && _.type === Number) && (u in this._props && (this._props[u] = Wn(this._props[u])), (c || (c = /* @__PURE__ */ Object.create(null)))[Se(u)] = !0);
        }
      this._numberProps = c, i && this._resolveProps(s), this._applyStyles(r), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((s) => t(s, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: n } = t, s = I(n) ? n : Object.keys(n || {});
    for (const i of Object.keys(this))
      i[0] !== "_" && s.includes(i) && this._setProp(i, this[i], !0, !1);
    for (const i of s.map(Se))
      Object.defineProperty(this, i, {
        get() {
          return this._getProp(i);
        },
        set(o) {
          this._setProp(i, o);
        }
      });
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    const s = Se(t);
    this._numberProps && this._numberProps[s] && (n = Wn(n)), this._setProp(s, n, !1);
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
  _setProp(t, n, s = !0, i = !0) {
    n !== this._props[t] && (this._props[t] = n, i && this._instance && this._update(), s && (n === !0 ? this.setAttribute(_e(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(_e(t), n + "") : n || this.removeAttribute(_e(t))));
  }
  _update() {
    hs(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = Me(this._def, J({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0;
      const s = (o, r) => {
        this.dispatchEvent(new CustomEvent(o, {
          detail: r
        }));
      };
      n.emit = (o, ...r) => {
        s(o, r), _e(o) !== o && s(_e(o), r);
      };
      let i = this;
      for (; i = i && (i.parentNode || i.host); )
        if (i instanceof Mn) {
          n.parent = i._instance, n.provides = i._instance.provides;
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
const Yr = {
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
Ro.props;
const Xr = /* @__PURE__ */ J({ patchProp: Wr }, Ir);
let ms;
function Zr() {
  return ms || (ms = nr(Xr));
}
const hs = (...e) => {
  Zr().render(...e);
}, $r = `.button{font-family:sans-serif;border:none;border-radius:5px;padding:.5em 1em .6em}.button-kind--normal{background-color:#dfe0df;color:#000}.button-kind--normal:hover,.button-kind--normal:focus,.button-kind--normal:active{background-color:#abaeab}.button-kind--primary{background-color:#00755f;color:#fff}.button-kind--primary:hover,.button-kind--primary:focus,.button-kind--primary:active{background-color:#000f0c}
`, Jr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, i] of t)
    n[s] = i;
  return n;
}, qr = {
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
    return (t, n) => (rr(), ar("button", {
      class: kt(["button", `button-kind--${e.kind}`])
    }, Ti(e.label), 3));
  }
}, Qr = /* @__PURE__ */ Jr(qr, [["styles", [$r]]]), el = Br(Qr), tl = [el];
export {
  el as ZoaButton,
  tl as allElements
};
