function _n(e, t) {
  const n = /* @__PURE__ */ Object.create(null), s = e.split(",");
  for (let r = 0; r < s.length; r++)
    n[s[r]] = !0;
  return t ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
function gn(e) {
  if (I(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = J(s) ? xr(s) : gn(s);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else {
    if (J(e))
      return e;
    if (z(e))
      return e;
  }
}
const Er = /;(?![^(]*\))/g, Or = /:([^]+)/, Tr = /\/\*.*?\*\//gs;
function xr(e) {
  const t = {};
  return e.replace(Tr, "").split(Er).forEach((n) => {
    if (n) {
      const s = n.split(Or);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function wt(e) {
  let t = "";
  if (J(e))
    t = e;
  else if (I(e))
    for (let n = 0; n < e.length; n++) {
      const s = wt(e[n]);
      s && (t += s + " ");
    }
  else if (z(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const yr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ar = /* @__PURE__ */ _n(yr);
function bs(e) {
  return !!e || e === "";
}
const Sr = (e) => J(e) ? e : e == null ? "" : I(e) || z(e) && (e.toString === xs || !R(e.toString)) ? JSON.stringify(e, Es, 2) : String(e), Es = (e, t) => t && t.__v_isRef ? Es(e, t.value) : et(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, r]) => (n[`${s} =>`] = r, n), {})
} : Os(t) ? {
  [`Set(${t.size})`]: [...t.values()]
} : z(t) && !I(t) && !ys(t) ? String(t) : t, K = {}, Qe = [], ge = () => {
}, Dr = () => !1, Cr = /^on[^a-z]/, vt = (e) => Cr.test(e), mn = (e) => e.startsWith("onUpdate:"), Z = Object.assign, bn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Nr = Object.prototype.hasOwnProperty, L = (e, t) => Nr.call(e, t), I = Array.isArray, et = (e) => Lt(e) === "[object Map]", Os = (e) => Lt(e) === "[object Set]", R = (e) => typeof e == "function", J = (e) => typeof e == "string", En = (e) => typeof e == "symbol", z = (e) => e !== null && typeof e == "object", Ts = (e) => z(e) && R(e.then) && R(e.catch), xs = Object.prototype.toString, Lt = (e) => xs.call(e), Ir = (e) => Lt(e).slice(8, -1), ys = (e) => Lt(e) === "[object Object]", On = (e) => J(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, At = /* @__PURE__ */ _n(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Mt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Pr = /-(\w)/g, Ce = Mt((e) => e.replace(Pr, (t, n) => n ? n.toUpperCase() : "")), Rr = /\B([A-Z])/g, de = Mt((e) => e.replace(Rr, "-$1").toLowerCase()), As = Mt((e) => e.charAt(0).toUpperCase() + e.slice(1)), zt = Mt((e) => e ? `on${As(e)}` : ""), Nt = (e, t) => !Object.is(e, t), Xt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, It = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, wr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, kn = (e) => {
  const t = J(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Wn;
const vr = () => Wn || (Wn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
let ae;
class Lr {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = ae, !t && ae && (this.index = (ae.scopes || (ae.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = ae;
      try {
        return ae = this, t();
      } finally {
        ae = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ae = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    ae = this.parent;
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
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Mr(e, t = ae) {
  t && t.active && t.effects.push(e);
}
function jr() {
  return ae;
}
const Tn = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Ss = (e) => (e.w & Ue) > 0, Ds = (e) => (e.n & Ue) > 0, Ur = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= Ue;
}, Fr = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let s = 0; s < t.length; s++) {
      const r = t[s];
      Ss(r) && !Ds(r) ? r.delete(e) : t[n++] = r, r.w &= ~Ue, r.n &= ~Ue;
    }
    t.length = n;
  }
}, en = /* @__PURE__ */ new WeakMap();
let ct = 0, Ue = 1;
const tn = 30;
let pe;
const $e = Symbol(""), nn = Symbol("");
class xn {
  constructor(t, n = null, s) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Mr(this, s);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = pe, n = Le;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = pe, pe = this, Le = !0, Ue = 1 << ++ct, ct <= tn ? Ur(this) : zn(this), this.fn();
    } finally {
      ct <= tn && Fr(this), Ue = 1 << --ct, pe = this.parent, Le = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    pe === this ? this.deferStop = !0 : this.active && (zn(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function zn(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Le = !0;
const Cs = [];
function rt() {
  Cs.push(Le), Le = !1;
}
function ot() {
  const e = Cs.pop();
  Le = e === void 0 ? !0 : e;
}
function re(e, t, n) {
  if (Le && pe) {
    let s = en.get(e);
    s || en.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || s.set(n, r = Tn()), Ns(r);
  }
}
function Ns(e, t) {
  let n = !1;
  ct <= tn ? Ds(e) || (e.n |= Ue, n = !Ss(e)) : n = !e.has(pe), n && (e.add(pe), pe.deps.push(e));
}
function Ie(e, t, n, s, r, o) {
  const i = en.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && I(e)) {
    const u = Number(s);
    i.forEach((d, _) => {
      (_ === "length" || _ >= u) && c.push(d);
    });
  } else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        I(e) ? On(n) && c.push(i.get("length")) : (c.push(i.get($e)), et(e) && c.push(i.get(nn)));
        break;
      case "delete":
        I(e) || (c.push(i.get($e)), et(e) && c.push(i.get(nn)));
        break;
      case "set":
        et(e) && c.push(i.get($e));
        break;
    }
  if (c.length === 1)
    c[0] && sn(c[0]);
  else {
    const u = [];
    for (const d of c)
      d && u.push(...d);
    sn(Tn(u));
  }
}
function sn(e, t) {
  const n = I(e) ? e : [...e];
  for (const s of n)
    s.computed && Xn(s);
  for (const s of n)
    s.computed || Xn(s);
}
function Xn(e, t) {
  (e !== pe || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const Hr = /* @__PURE__ */ _n("__proto__,__v_isRef,__isVue"), Is = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(En)
), Br = /* @__PURE__ */ yn(), Kr = /* @__PURE__ */ yn(!1, !0), Gr = /* @__PURE__ */ yn(!0), $n = /* @__PURE__ */ kr();
function kr() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = M(this);
      for (let o = 0, i = this.length; o < i; o++)
        re(s, "get", o + "");
      const r = s[t](...n);
      return r === -1 || r === !1 ? s[t](...n.map(M)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      rt();
      const s = M(this)[t].apply(this, n);
      return ot(), s;
    };
  }), e;
}
function Wr(e) {
  const t = M(this);
  return re(t, "has", e), t.hasOwnProperty(e);
}
function yn(e = !1, t = !1) {
  return function(s, r, o) {
    if (r === "__v_isReactive")
      return !e;
    if (r === "__v_isReadonly")
      return e;
    if (r === "__v_isShallow")
      return t;
    if (r === "__v_raw" && o === (e ? t ? io : Ls : t ? vs : ws).get(s))
      return s;
    const i = I(s);
    if (!e) {
      if (i && L($n, r))
        return Reflect.get($n, r, o);
      if (r === "hasOwnProperty")
        return Wr;
    }
    const c = Reflect.get(s, r, o);
    return (En(r) ? Is.has(r) : Hr(r)) || (e || re(s, "get", r), t) ? c : ne(c) ? i && On(r) ? c : c.value : z(c) ? e ? Ms(c) : Dn(c) : c;
  };
}
const zr = /* @__PURE__ */ Ps(), Xr = /* @__PURE__ */ Ps(!0);
function Ps(e = !1) {
  return function(n, s, r, o) {
    let i = n[s];
    if (at(i) && ne(i) && !ne(r))
      return !1;
    if (!e && (!rn(r) && !at(r) && (i = M(i), r = M(r)), !I(n) && ne(i) && !ne(r)))
      return i.value = r, !0;
    const c = I(n) && On(s) ? Number(s) < n.length : L(n, s), u = Reflect.set(n, s, r, o);
    return n === M(o) && (c ? Nt(r, i) && Ie(n, "set", s, r) : Ie(n, "add", s, r)), u;
  };
}
function $r(e, t) {
  const n = L(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && Ie(e, "delete", t, void 0), s;
}
function Vr(e, t) {
  const n = Reflect.has(e, t);
  return (!En(t) || !Is.has(t)) && re(e, "has", t), n;
}
function Yr(e) {
  return re(e, "iterate", I(e) ? "length" : $e), Reflect.ownKeys(e);
}
const Rs = {
  get: Br,
  set: zr,
  deleteProperty: $r,
  has: Vr,
  ownKeys: Yr
}, Jr = {
  get: Gr,
  set(e, t) {
    return !0;
  },
  deleteProperty(e, t) {
    return !0;
  }
}, Zr = /* @__PURE__ */ Z({}, Rs, {
  get: Kr,
  set: Xr
}), An = (e) => e, jt = (e) => Reflect.getPrototypeOf(e);
function bt(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const r = M(e), o = M(t);
  n || (t !== o && re(r, "get", t), re(r, "get", o));
  const { has: i } = jt(r), c = s ? An : n ? In : Nn;
  if (i.call(r, t))
    return c(e.get(t));
  if (i.call(r, o))
    return c(e.get(o));
  e !== r && e.get(t);
}
function Et(e, t = !1) {
  const n = this.__v_raw, s = M(n), r = M(e);
  return t || (e !== r && re(s, "has", e), re(s, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function Ot(e, t = !1) {
  return e = e.__v_raw, !t && re(M(e), "iterate", $e), Reflect.get(e, "size", e);
}
function Vn(e) {
  e = M(e);
  const t = M(this);
  return jt(t).has.call(t, e) || (t.add(e), Ie(t, "add", e, e)), this;
}
function Yn(e, t) {
  t = M(t);
  const n = M(this), { has: s, get: r } = jt(n);
  let o = s.call(n, e);
  o || (e = M(e), o = s.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), o ? Nt(t, i) && Ie(n, "set", e, t) : Ie(n, "add", e, t), this;
}
function Jn(e) {
  const t = M(this), { has: n, get: s } = jt(t);
  let r = n.call(t, e);
  r || (e = M(e), r = n.call(t, e)), s && s.call(t, e);
  const o = t.delete(e);
  return r && Ie(t, "delete", e, void 0), o;
}
function Zn() {
  const e = M(this), t = e.size !== 0, n = e.clear();
  return t && Ie(e, "clear", void 0, void 0), n;
}
function Tt(e, t) {
  return function(s, r) {
    const o = this, i = o.__v_raw, c = M(i), u = t ? An : e ? In : Nn;
    return !e && re(c, "iterate", $e), i.forEach((d, _) => s.call(r, u(d), u(_), o));
  };
}
function xt(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = M(r), i = et(o), c = e === "entries" || e === Symbol.iterator && i, u = e === "keys" && i, d = r[e](...s), _ = n ? An : t ? In : Nn;
    return !t && re(o, "iterate", u ? nn : $e), {
      // iterator protocol
      next() {
        const { value: O, done: x } = d.next();
        return x ? { value: O, done: x } : {
          value: c ? [_(O[0]), _(O[1])] : _(O),
          done: x
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function we(e) {
  return function(...t) {
    return e === "delete" ? !1 : this;
  };
}
function qr() {
  const e = {
    get(o) {
      return bt(this, o);
    },
    get size() {
      return Ot(this);
    },
    has: Et,
    add: Vn,
    set: Yn,
    delete: Jn,
    clear: Zn,
    forEach: Tt(!1, !1)
  }, t = {
    get(o) {
      return bt(this, o, !1, !0);
    },
    get size() {
      return Ot(this);
    },
    has: Et,
    add: Vn,
    set: Yn,
    delete: Jn,
    clear: Zn,
    forEach: Tt(!1, !0)
  }, n = {
    get(o) {
      return bt(this, o, !0);
    },
    get size() {
      return Ot(this, !0);
    },
    has(o) {
      return Et.call(this, o, !0);
    },
    add: we(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: we(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: we(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: we(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: Tt(!0, !1)
  }, s = {
    get(o) {
      return bt(this, o, !0, !0);
    },
    get size() {
      return Ot(this, !0);
    },
    has(o) {
      return Et.call(this, o, !0);
    },
    add: we(
      "add"
      /* TriggerOpTypes.ADD */
    ),
    set: we(
      "set"
      /* TriggerOpTypes.SET */
    ),
    delete: we(
      "delete"
      /* TriggerOpTypes.DELETE */
    ),
    clear: we(
      "clear"
      /* TriggerOpTypes.CLEAR */
    ),
    forEach: Tt(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = xt(o, !1, !1), n[o] = xt(o, !0, !1), t[o] = xt(o, !1, !0), s[o] = xt(o, !0, !0);
  }), [
    e,
    n,
    t,
    s
  ];
}
const [Qr, eo, to, no] = /* @__PURE__ */ qr();
function Sn(e, t) {
  const n = t ? e ? no : to : e ? eo : Qr;
  return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(L(n, r) && r in s ? n : s, r, o);
}
const so = {
  get: /* @__PURE__ */ Sn(!1, !1)
}, ro = {
  get: /* @__PURE__ */ Sn(!1, !0)
}, oo = {
  get: /* @__PURE__ */ Sn(!0, !1)
}, ws = /* @__PURE__ */ new WeakMap(), vs = /* @__PURE__ */ new WeakMap(), Ls = /* @__PURE__ */ new WeakMap(), io = /* @__PURE__ */ new WeakMap();
function lo(e) {
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
function co(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : lo(Ir(e));
}
function Dn(e) {
  return at(e) ? e : Cn(e, !1, Rs, so, ws);
}
function fo(e) {
  return Cn(e, !1, Zr, ro, vs);
}
function Ms(e) {
  return Cn(e, !0, Jr, oo, Ls);
}
function Cn(e, t, n, s, r) {
  if (!z(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const i = co(e);
  if (i === 0)
    return e;
  const c = new Proxy(e, i === 2 ? s : n);
  return r.set(e, c), c;
}
function tt(e) {
  return at(e) ? tt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function at(e) {
  return !!(e && e.__v_isReadonly);
}
function rn(e) {
  return !!(e && e.__v_isShallow);
}
function js(e) {
  return tt(e) || at(e);
}
function M(e) {
  const t = e && e.__v_raw;
  return t ? M(t) : e;
}
function Us(e) {
  return It(e, "__v_skip", !0), e;
}
const Nn = (e) => z(e) ? Dn(e) : e, In = (e) => z(e) ? Ms(e) : e;
function uo(e) {
  Le && pe && (e = M(e), Ns(e.dep || (e.dep = Tn())));
}
function ao(e, t) {
  e = M(e);
  const n = e.dep;
  n && sn(n);
}
function ne(e) {
  return !!(e && e.__v_isRef === !0);
}
function po(e) {
  return ne(e) ? e.value : e;
}
const ho = {
  get: (e, t, n) => po(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return ne(r) && !ne(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Fs(e) {
  return tt(e) ? e : new Proxy(e, ho);
}
var Hs;
class _o {
  constructor(t, n, s, r) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Hs] = !1, this._dirty = !0, this.effect = new xn(t, () => {
      this._dirty || (this._dirty = !0, ao(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = s;
  }
  get value() {
    const t = M(this);
    return uo(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
  }
  set value(t) {
    this._setter(t);
  }
}
Hs = "__v_isReadonly";
function go(e, t, n = !1) {
  let s, r;
  const o = R(e);
  return o ? (s = e, r = ge) : (s = e.get, r = e.set), new _o(s, r, o || !r, n);
}
function Me(e, t, n, s) {
  let r;
  try {
    r = s ? e(...s) : e();
  } catch (o) {
    Ut(o, t, n);
  }
  return r;
}
function fe(e, t, n, s) {
  if (R(e)) {
    const o = Me(e, t, n, s);
    return o && Ts(o) && o.catch((i) => {
      Ut(i, t, n);
    }), o;
  }
  const r = [];
  for (let o = 0; o < e.length; o++)
    r.push(fe(e[o], t, n, s));
  return r;
}
function Ut(e, t, n, s = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy, c = n;
    for (; o; ) {
      const d = o.ec;
      if (d) {
        for (let _ = 0; _ < d.length; _++)
          if (d[_](e, i, c) === !1)
            return;
      }
      o = o.parent;
    }
    const u = t.appContext.config.errorHandler;
    if (u) {
      Me(u, null, 10, [e, i, c]);
      return;
    }
  }
  mo(e, n, r, s);
}
function mo(e, t, n, s = !0) {
  console.error(e);
}
let dt = !1, on = !1;
const Q = [];
let ye = 0;
const nt = [];
let De = null, We = 0;
const Bs = /* @__PURE__ */ Promise.resolve();
let Pn = null;
function Ks(e) {
  const t = Pn || Bs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function bo(e) {
  let t = ye + 1, n = Q.length;
  for (; t < n; ) {
    const s = t + n >>> 1;
    pt(Q[s]) < e ? t = s + 1 : n = s;
  }
  return t;
}
function Rn(e) {
  (!Q.length || !Q.includes(e, dt && e.allowRecurse ? ye + 1 : ye)) && (e.id == null ? Q.push(e) : Q.splice(bo(e.id), 0, e), Gs());
}
function Gs() {
  !dt && !on && (on = !0, Pn = Bs.then(Ws));
}
function Eo(e) {
  const t = Q.indexOf(e);
  t > ye && Q.splice(t, 1);
}
function Oo(e) {
  I(e) ? nt.push(...e) : (!De || !De.includes(e, e.allowRecurse ? We + 1 : We)) && nt.push(e), Gs();
}
function qn(e, t = dt ? ye + 1 : 0) {
  for (; t < Q.length; t++) {
    const n = Q[t];
    n && n.pre && (Q.splice(t, 1), t--, n());
  }
}
function ks(e) {
  if (nt.length) {
    const t = [...new Set(nt)];
    if (nt.length = 0, De) {
      De.push(...t);
      return;
    }
    for (De = t, De.sort((n, s) => pt(n) - pt(s)), We = 0; We < De.length; We++)
      De[We]();
    De = null, We = 0;
  }
}
const pt = (e) => e.id == null ? 1 / 0 : e.id, To = (e, t) => {
  const n = pt(e) - pt(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Ws(e) {
  on = !1, dt = !0, Q.sort(To);
  const t = ge;
  try {
    for (ye = 0; ye < Q.length; ye++) {
      const n = Q[ye];
      n && n.active !== !1 && Me(
        n,
        null,
        14
        /* ErrorCodes.SCHEDULER */
      );
    }
  } finally {
    ye = 0, Q.length = 0, ks(), dt = !1, Pn = null, (Q.length || nt.length) && Ws();
  }
}
function xo(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const s = e.vnode.props || K;
  let r = n;
  const o = t.startsWith("update:"), i = o && t.slice(7);
  if (i && i in s) {
    const _ = `${i === "modelValue" ? "model" : i}Modifiers`, { number: O, trim: x } = s[_] || K;
    x && (r = n.map((N) => J(N) ? N.trim() : N)), O && (r = n.map(wr));
  }
  let c, u = s[c = zt(t)] || // also try camelCase event handler (#2249)
  s[c = zt(Ce(t))];
  !u && o && (u = s[c = zt(de(t))]), u && fe(u, e, 6, r);
  const d = s[c + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, fe(d, e, 6, r);
  }
}
function zs(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const o = e.emits;
  let i = {}, c = !1;
  if (!R(e)) {
    const u = (d) => {
      const _ = zs(d, t, !0);
      _ && (c = !0, Z(i, _));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !o && !c ? (z(e) && s.set(e, null), null) : (I(o) ? o.forEach((u) => i[u] = null) : Z(i, o), z(e) && s.set(e, i), i);
}
function Ft(e, t) {
  return !e || !vt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), L(e, t[0].toLowerCase() + t.slice(1)) || L(e, de(t)) || L(e, t));
}
let he = null, Xs = null;
function Pt(e) {
  const t = he;
  return he = e, Xs = e && e.type.__scopeId || null, t;
}
function yo(e, t = he, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && ls(-1);
    const o = Pt(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Pt(o), s._d && ls(1);
    }
    return i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function $t(e) {
  const { type: t, vnode: n, proxy: s, withProxy: r, props: o, propsOptions: [i], slots: c, attrs: u, emit: d, render: _, renderCache: O, data: x, setupState: N, ctx: j, inheritAttrs: D } = e;
  let X, F;
  const le = Pt(e);
  try {
    if (n.shapeFlag & 4) {
      const G = r || s;
      X = xe(_.call(G, G, O, o, N, x, j)), F = u;
    } else {
      const G = t;
      X = xe(G.length > 1 ? G(o, { attrs: u, slots: c, emit: d }) : G(
        o,
        null
        /* we know it doesn't need it */
      )), F = t.props ? u : Ao(u);
    }
  } catch (G) {
    ut.length = 0, Ut(
      G,
      e,
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ), X = je(Ne);
  }
  let P = X;
  if (F && D !== !1) {
    const G = Object.keys(F), { shapeFlag: q } = P;
    G.length && q & 7 && (i && G.some(mn) && (F = So(F, i)), P = Fe(P, F));
  }
  return n.dirs && (P = Fe(P), P.dirs = P.dirs ? P.dirs.concat(n.dirs) : n.dirs), n.transition && (P.transition = n.transition), X = P, Pt(le), X;
}
const Ao = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || vt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, So = (e, t) => {
  const n = {};
  for (const s in e)
    (!mn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Do(e, t, n) {
  const { props: s, children: r, component: o } = e, { props: i, children: c, patchFlag: u } = t, d = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return s ? Qn(s, i, d) : !!i;
    if (u & 8) {
      const _ = t.dynamicProps;
      for (let O = 0; O < _.length; O++) {
        const x = _[O];
        if (i[x] !== s[x] && !Ft(d, x))
          return !0;
      }
    }
  } else
    return (r || c) && (!c || !c.$stable) ? !0 : s === i ? !1 : s ? i ? Qn(s, i, d) : !0 : !!i;
  return !1;
}
function Qn(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !Ft(n, o))
      return !0;
  }
  return !1;
}
function Co({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; )
    (e = t.vnode).el = n, t = t.parent;
}
const No = (e) => e.__isSuspense;
function Io(e, t) {
  t && t.pendingBranch ? I(e) ? t.effects.push(...e) : t.effects.push(e) : Oo(e);
}
function Po(e, t) {
  if (V) {
    let n = V.provides;
    const s = V.parent && V.parent.provides;
    s === n && (n = V.provides = Object.create(s)), n[e] = t;
  }
}
function St(e, t, n = !1) {
  const s = V || he;
  if (s) {
    const r = s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && R(t) ? t.call(s.proxy) : t;
  }
}
const yt = {};
function Vt(e, t, n) {
  return $s(e, t, n);
}
function $s(e, t, { immediate: n, deep: s, flush: r, onTrack: o, onTrigger: i } = K) {
  const c = jr() === (V == null ? void 0 : V.scope) ? V : null;
  let u, d = !1, _ = !1;
  if (ne(e) ? (u = () => e.value, d = rn(e)) : tt(e) ? (u = () => e, s = !0) : I(e) ? (_ = !0, d = e.some((P) => tt(P) || rn(P)), u = () => e.map((P) => {
    if (ne(P))
      return P.value;
    if (tt(P))
      return qe(P);
    if (R(P))
      return Me(
        P,
        c,
        2
        /* ErrorCodes.WATCH_GETTER */
      );
  })) : R(e) ? t ? u = () => Me(
    e,
    c,
    2
    /* ErrorCodes.WATCH_GETTER */
  ) : u = () => {
    if (!(c && c.isUnmounted))
      return O && O(), fe(e, c, 3, [x]);
  } : u = ge, t && s) {
    const P = u;
    u = () => qe(P());
  }
  let O, x = (P) => {
    O = F.onStop = () => {
      Me(
        P,
        c,
        4
        /* ErrorCodes.WATCH_CLEANUP */
      );
    };
  }, N;
  if (_t)
    if (x = ge, t ? n && fe(t, c, 3, [
      u(),
      _ ? [] : void 0,
      x
    ]) : u(), r === "sync") {
      const P = Ni();
      N = P.__watcherHandles || (P.__watcherHandles = []);
    } else
      return ge;
  let j = _ ? new Array(e.length).fill(yt) : yt;
  const D = () => {
    if (F.active)
      if (t) {
        const P = F.run();
        (s || d || (_ ? P.some((G, q) => Nt(G, j[q])) : Nt(P, j))) && (O && O(), fe(t, c, 3, [
          P,
          // pass undefined as the old value when it's changed for the first time
          j === yt ? void 0 : _ && j[0] === yt ? [] : j,
          x
        ]), j = P);
      } else
        F.run();
  };
  D.allowRecurse = !!t;
  let X;
  r === "sync" ? X = D : r === "post" ? X = () => se(D, c && c.suspense) : (D.pre = !0, c && (D.id = c.uid), X = () => Rn(D));
  const F = new xn(u, X);
  t ? n ? D() : j = F.run() : r === "post" ? se(F.run.bind(F), c && c.suspense) : F.run();
  const le = () => {
    F.stop(), c && c.scope && bn(c.scope.effects, F);
  };
  return N && N.push(le), le;
}
function Ro(e, t, n) {
  const s = this.proxy, r = J(e) ? e.includes(".") ? Vs(s, e) : () => s[e] : e.bind(s, s);
  let o;
  R(t) ? o = t : (o = t.handler, n = t);
  const i = V;
  st(this);
  const c = $s(r, o.bind(s), n);
  return i ? st(i) : Ve(), c;
}
function Vs(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
function qe(e, t) {
  if (!z(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), ne(e))
    qe(e.value, t);
  else if (I(e))
    for (let n = 0; n < e.length; n++)
      qe(e[n], t);
  else if (Os(e) || et(e))
    e.forEach((n) => {
      qe(n, t);
    });
  else if (ys(e))
    for (const n in e)
      qe(e[n], t);
  return e;
}
function wo() {
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
const ce = [Function, Array], vo = {
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
    const n = Oi(), s = wo();
    let r;
    return () => {
      const o = t.default && Js(t.default(), !0);
      if (!o || !o.length)
        return;
      let i = o[0];
      if (o.length > 1) {
        for (const D of o)
          if (D.type !== Ne) {
            i = D;
            break;
          }
      }
      const c = M(e), { mode: u } = c;
      if (s.isLeaving)
        return Yt(i);
      const d = es(i);
      if (!d)
        return Yt(i);
      const _ = ln(d, c, s, n);
      cn(d, _);
      const O = n.subTree, x = O && es(O);
      let N = !1;
      const { getTransitionKey: j } = d.type;
      if (j) {
        const D = j();
        r === void 0 ? r = D : D !== r && (r = D, N = !0);
      }
      if (x && x.type !== Ne && (!ze(d, x) || N)) {
        const D = ln(x, c, s, n);
        if (cn(x, D), u === "out-in")
          return s.isLeaving = !0, D.afterLeave = () => {
            s.isLeaving = !1, n.update.active !== !1 && n.update();
          }, Yt(i);
        u === "in-out" && d.type !== Ne && (D.delayLeave = (X, F, le) => {
          const P = Ys(s, x);
          P[String(x.key)] = x, X._leaveCb = () => {
            F(), X._leaveCb = void 0, delete _.delayedLeave;
          }, _.delayedLeave = le;
        });
      }
      return i;
    };
  }
}, Lo = vo;
function Ys(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function ln(e, t, n, s) {
  const { appear: r, mode: o, persisted: i = !1, onBeforeEnter: c, onEnter: u, onAfterEnter: d, onEnterCancelled: _, onBeforeLeave: O, onLeave: x, onAfterLeave: N, onLeaveCancelled: j, onBeforeAppear: D, onAppear: X, onAfterAppear: F, onAppearCancelled: le } = t, P = String(e.key), G = Ys(n, e), q = (w, Y) => {
    w && fe(w, s, 9, Y);
  }, Ye = (w, Y) => {
    const k = Y[1];
    q(w, Y), I(w) ? w.every((oe) => oe.length <= 1) && k() : w.length <= 1 && k();
  }, Re = {
    mode: o,
    persisted: i,
    beforeEnter(w) {
      let Y = c;
      if (!n.isMounted)
        if (r)
          Y = D || c;
        else
          return;
      w._leaveCb && w._leaveCb(
        !0
        /* cancelled */
      );
      const k = G[P];
      k && ze(e, k) && k.el._leaveCb && k.el._leaveCb(), q(Y, [w]);
    },
    enter(w) {
      let Y = u, k = d, oe = _;
      if (!n.isMounted)
        if (r)
          Y = X || u, k = F || d, oe = le || _;
        else
          return;
      let me = !1;
      const Ae = w._enterCb = (it) => {
        me || (me = !0, it ? q(oe, [w]) : q(k, [w]), Re.delayedLeave && Re.delayedLeave(), w._enterCb = void 0);
      };
      Y ? Ye(Y, [w, Ae]) : Ae();
    },
    leave(w, Y) {
      const k = String(e.key);
      if (w._enterCb && w._enterCb(
        !0
        /* cancelled */
      ), n.isUnmounting)
        return Y();
      q(O, [w]);
      let oe = !1;
      const me = w._leaveCb = (Ae) => {
        oe || (oe = !0, Y(), Ae ? q(j, [w]) : q(N, [w]), w._leaveCb = void 0, G[k] === e && delete G[k]);
      };
      G[k] = e, x ? Ye(x, [w, me]) : me();
    },
    clone(w) {
      return ln(w, t, n, s);
    }
  };
  return Re;
}
function Yt(e) {
  if (Ht(e))
    return e = Fe(e), e.children = null, e;
}
function es(e) {
  return Ht(e) ? e.children ? e.children[0] : void 0 : e;
}
function cn(e, t) {
  e.shapeFlag & 6 && e.component ? cn(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Js(e, t = !1, n) {
  let s = [], r = 0;
  for (let o = 0; o < e.length; o++) {
    let i = e[o];
    const c = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
    i.type === Te ? (i.patchFlag & 128 && r++, s = s.concat(Js(i.children, t, c))) : (t || i.type !== Ne) && s.push(c != null ? Fe(i, { key: c }) : i);
  }
  if (r > 1)
    for (let o = 0; o < s.length; o++)
      s[o].patchFlag = -2;
  return s;
}
function Mo(e) {
  return R(e) ? { setup: e, name: e.name } : e;
}
const Dt = (e) => !!e.type.__asyncLoader, Ht = (e) => e.type.__isKeepAlive;
function jo(e, t) {
  Zs(e, "a", t);
}
function Uo(e, t) {
  Zs(e, "da", t);
}
function Zs(e, t, n = V) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Bt(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Ht(r.parent.vnode) && Fo(s, t, n, r), r = r.parent;
  }
}
function Fo(e, t, n, s) {
  const r = Bt(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  er(() => {
    bn(s[t], r);
  }, n);
}
function Bt(e, t, n = V, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      rt(), st(n);
      const c = fe(t, n, e, i);
      return Ve(), ot(), c;
    });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const Pe = (e) => (t, n = V) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!_t || e === "sp") && Bt(e, (...s) => t(...s), n)
), Ho = Pe(
  "bm"
  /* LifecycleHooks.BEFORE_MOUNT */
), qs = Pe(
  "m"
  /* LifecycleHooks.MOUNTED */
), Bo = Pe(
  "bu"
  /* LifecycleHooks.BEFORE_UPDATE */
), Ko = Pe(
  "u"
  /* LifecycleHooks.UPDATED */
), Qs = Pe(
  "bum"
  /* LifecycleHooks.BEFORE_UNMOUNT */
), er = Pe(
  "um"
  /* LifecycleHooks.UNMOUNTED */
), Go = Pe(
  "sp"
  /* LifecycleHooks.SERVER_PREFETCH */
), ko = Pe(
  "rtg"
  /* LifecycleHooks.RENDER_TRIGGERED */
), Wo = Pe(
  "rtc"
  /* LifecycleHooks.RENDER_TRACKED */
);
function zo(e, t = V) {
  Bt("ec", e, t);
}
function Ke(e, t, n, s) {
  const r = e.dirs, o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const c = r[i];
    o && (c.oldValue = o[i].value);
    let u = c.dir[s];
    u && (rt(), fe(u, n, 8, [
      e.el,
      c,
      e,
      t
    ]), ot());
  }
}
const Xo = Symbol(), fn = (e) => e ? pr(e) ? Mn(e) || e.proxy : fn(e.parent) : null, ft = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Z(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => fn(e.parent),
    $root: (e) => fn(e.root),
    $emit: (e) => e.emit,
    $options: (e) => wn(e),
    $forceUpdate: (e) => e.f || (e.f = () => Rn(e.update)),
    $nextTick: (e) => e.n || (e.n = Ks.bind(e.proxy)),
    $watch: (e) => Ro.bind(e)
  })
), Jt = (e, t) => e !== K && !e.__isScriptSetup && L(e, t), $o = {
  get({ _: e }, t) {
    const { ctx: n, setupState: s, data: r, props: o, accessCache: i, type: c, appContext: u } = e;
    let d;
    if (t[0] !== "$") {
      const N = i[t];
      if (N !== void 0)
        switch (N) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (Jt(s, t))
          return i[t] = 1, s[t];
        if (r !== K && L(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && L(d, t)
        )
          return i[t] = 3, o[t];
        if (n !== K && L(n, t))
          return i[t] = 4, n[t];
        un && (i[t] = 0);
      }
    }
    const _ = ft[t];
    let O, x;
    if (_)
      return t === "$attrs" && re(e, "get", t), _(e);
    if (
      // css module (injected by vue-loader)
      (O = c.__cssModules) && (O = O[t])
    )
      return O;
    if (n !== K && L(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      x = u.config.globalProperties, L(x, t)
    )
      return x[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: o } = e;
    return Jt(r, t) ? (r[t] = n, !0) : s !== K && L(s, t) ? (s[t] = n, !0) : L(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({ _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o } }, i) {
    let c;
    return !!n[i] || e !== K && L(e, i) || Jt(t, i) || (c = o[0]) && L(c, i) || L(s, i) || L(ft, i) || L(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : L(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
let un = !0;
function Vo(e) {
  const t = wn(e), n = e.proxy, s = e.ctx;
  un = !1, t.beforeCreate && ts(
    t.beforeCreate,
    e,
    "bc"
    /* LifecycleHooks.BEFORE_CREATE */
  );
  const {
    // state
    data: r,
    computed: o,
    methods: i,
    watch: c,
    provide: u,
    inject: d,
    // lifecycle
    created: _,
    beforeMount: O,
    mounted: x,
    beforeUpdate: N,
    updated: j,
    activated: D,
    deactivated: X,
    beforeDestroy: F,
    beforeUnmount: le,
    destroyed: P,
    unmounted: G,
    render: q,
    renderTracked: Ye,
    renderTriggered: Re,
    errorCaptured: w,
    serverPrefetch: Y,
    // public API
    expose: k,
    inheritAttrs: oe,
    // assets
    components: me,
    directives: Ae,
    filters: it
  } = t;
  if (d && Yo(d, s, null, e.appContext.config.unwrapInjectedRef), i)
    for (const W in i) {
      const H = i[W];
      R(H) && (s[W] = H.bind(n));
    }
  if (r) {
    const W = r.call(n, n);
    z(W) && (e.data = Dn(W));
  }
  if (un = !0, o)
    for (const W in o) {
      const H = o[W], He = R(H) ? H.bind(n, n) : R(H.get) ? H.get.bind(n, n) : ge, gt = !R(H) && R(H.set) ? H.set.bind(n) : ge, Be = Di({
        get: He,
        set: gt
      });
      Object.defineProperty(s, W, {
        enumerable: !0,
        configurable: !0,
        get: () => Be.value,
        set: (be) => Be.value = be
      });
    }
  if (c)
    for (const W in c)
      tr(c[W], s, n, W);
  if (u) {
    const W = R(u) ? u.call(n) : u;
    Reflect.ownKeys(W).forEach((H) => {
      Po(H, W[H]);
    });
  }
  _ && ts(
    _,
    e,
    "c"
    /* LifecycleHooks.CREATED */
  );
  function ee(W, H) {
    I(H) ? H.forEach((He) => W(He.bind(n))) : H && W(H.bind(n));
  }
  if (ee(Ho, O), ee(qs, x), ee(Bo, N), ee(Ko, j), ee(jo, D), ee(Uo, X), ee(zo, w), ee(Wo, Ye), ee(ko, Re), ee(Qs, le), ee(er, G), ee(Go, Y), I(k))
    if (k.length) {
      const W = e.exposed || (e.exposed = {});
      k.forEach((H) => {
        Object.defineProperty(W, H, {
          get: () => n[H],
          set: (He) => n[H] = He
        });
      });
    } else
      e.exposed || (e.exposed = {});
  q && e.render === ge && (e.render = q), oe != null && (e.inheritAttrs = oe), me && (e.components = me), Ae && (e.directives = Ae);
}
function Yo(e, t, n = ge, s = !1) {
  I(e) && (e = an(e));
  for (const r in e) {
    const o = e[r];
    let i;
    z(o) ? "default" in o ? i = St(
      o.from || r,
      o.default,
      !0
      /* treat default function as factory */
    ) : i = St(o.from || r) : i = St(o), ne(i) && s ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (c) => i.value = c
    }) : t[r] = i;
  }
}
function ts(e, t, n) {
  fe(I(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function tr(e, t, n, s) {
  const r = s.includes(".") ? Vs(n, s) : () => n[s];
  if (J(e)) {
    const o = t[e];
    R(o) && Vt(r, o);
  } else if (R(e))
    Vt(r, e.bind(n));
  else if (z(e))
    if (I(e))
      e.forEach((o) => tr(o, t, n, s));
    else {
      const o = R(e.handler) ? e.handler.bind(n) : t[e.handler];
      R(o) && Vt(r, o, e);
    }
}
function wn(e) {
  const t = e.type, { mixins: n, extends: s } = t, { mixins: r, optionsCache: o, config: { optionMergeStrategies: i } } = e.appContext, c = o.get(t);
  let u;
  return c ? u = c : !r.length && !n && !s ? u = t : (u = {}, r.length && r.forEach((d) => Rt(u, d, i, !0)), Rt(u, t, i)), z(t) && o.set(t, u), u;
}
function Rt(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && Rt(e, o, n, !0), r && r.forEach((i) => Rt(e, i, n, !0));
  for (const i in t)
    if (!(s && i === "expose")) {
      const c = Jo[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const Jo = {
  data: ns,
  props: ke,
  emits: ke,
  // objects
  methods: ke,
  computed: ke,
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
  components: ke,
  directives: ke,
  // watch
  watch: qo,
  // provide / inject
  provide: ns,
  inject: Zo
};
function ns(e, t) {
  return t ? e ? function() {
    return Z(R(e) ? e.call(this, this) : e, R(t) ? t.call(this, this) : t);
  } : t : e;
}
function Zo(e, t) {
  return ke(an(e), an(t));
}
function an(e) {
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
function ke(e, t) {
  return e ? Z(Z(/* @__PURE__ */ Object.create(null), e), t) : t;
}
function qo(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = Z(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = te(e[s], t[s]);
  return n;
}
function Qo(e, t, n, s = !1) {
  const r = {}, o = {};
  It(o, Gt, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), nr(e, t, r, o);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  n ? e.props = s ? r : fo(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function ei(e, t, n, s) {
  const { props: r, attrs: o, vnode: { patchFlag: i } } = e, c = M(r), [u] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const _ = e.vnode.dynamicProps;
      for (let O = 0; O < _.length; O++) {
        let x = _[O];
        if (Ft(e.emitsOptions, x))
          continue;
        const N = t[x];
        if (u)
          if (L(o, x))
            N !== o[x] && (o[x] = N, d = !0);
          else {
            const j = Ce(x);
            r[j] = dn(
              u,
              c,
              j,
              N,
              e,
              !1
              /* isAbsent */
            );
          }
        else
          N !== o[x] && (o[x] = N, d = !0);
      }
    }
  } else {
    nr(e, t, r, o) && (d = !0);
    let _;
    for (const O in c)
      (!t || // for camelCase
      !L(t, O) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((_ = de(O)) === O || !L(t, _))) && (u ? n && // for camelCase
      (n[O] !== void 0 || // for kebab-case
      n[_] !== void 0) && (r[O] = dn(
        u,
        c,
        O,
        void 0,
        e,
        !0
        /* isAbsent */
      )) : delete r[O]);
    if (o !== c)
      for (const O in o)
        (!t || !L(t, O)) && (delete o[O], d = !0);
  }
  d && Ie(e, "set", "$attrs");
}
function nr(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1, c;
  if (t)
    for (let u in t) {
      if (At(u))
        continue;
      const d = t[u];
      let _;
      r && L(r, _ = Ce(u)) ? !o || !o.includes(_) ? n[_] = d : (c || (c = {}))[_] = d : Ft(e.emitsOptions, u) || (!(u in s) || d !== s[u]) && (s[u] = d, i = !0);
    }
  if (o) {
    const u = M(n), d = c || K;
    for (let _ = 0; _ < o.length; _++) {
      const O = o[_];
      n[O] = dn(r, u, O, d[O], e, !L(d, O));
    }
  }
  return i;
}
function dn(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const c = L(i, "default");
    if (c && s === void 0) {
      const u = i.default;
      if (i.type !== Function && R(u)) {
        const { propsDefaults: d } = r;
        n in d ? s = d[n] : (st(r), s = d[n] = u.call(null, t), Ve());
      } else
        s = u;
    }
    i[
      0
      /* BooleanFlags.shouldCast */
    ] && (o && !c ? s = !1 : i[
      1
      /* BooleanFlags.shouldCastTrue */
    ] && (s === "" || s === de(n)) && (s = !0));
  }
  return s;
}
function sr(e, t, n = !1) {
  const s = t.propsCache, r = s.get(e);
  if (r)
    return r;
  const o = e.props, i = {}, c = [];
  let u = !1;
  if (!R(e)) {
    const _ = (O) => {
      u = !0;
      const [x, N] = sr(O, t, !0);
      Z(i, x), N && c.push(...N);
    };
    !n && t.mixins.length && t.mixins.forEach(_), e.extends && _(e.extends), e.mixins && e.mixins.forEach(_);
  }
  if (!o && !u)
    return z(e) && s.set(e, Qe), Qe;
  if (I(o))
    for (let _ = 0; _ < o.length; _++) {
      const O = Ce(o[_]);
      ss(O) && (i[O] = K);
    }
  else if (o)
    for (const _ in o) {
      const O = Ce(_);
      if (ss(O)) {
        const x = o[_], N = i[O] = I(x) || R(x) ? { type: x } : Object.assign({}, x);
        if (N) {
          const j = is(Boolean, N.type), D = is(String, N.type);
          N[
            0
            /* BooleanFlags.shouldCast */
          ] = j > -1, N[
            1
            /* BooleanFlags.shouldCastTrue */
          ] = D < 0 || j < D, (j > -1 || L(N, "default")) && c.push(O);
        }
      }
    }
  const d = [i, c];
  return z(e) && s.set(e, d), d;
}
function ss(e) {
  return e[0] !== "$";
}
function rs(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function os(e, t) {
  return rs(e) === rs(t);
}
function is(e, t) {
  return I(t) ? t.findIndex((n) => os(n, e)) : R(t) && os(t, e) ? 0 : -1;
}
const rr = (e) => e[0] === "_" || e === "$stable", vn = (e) => I(e) ? e.map(xe) : [xe(e)], ti = (e, t, n) => {
  if (t._n)
    return t;
  const s = yo((...r) => vn(t(...r)), n);
  return s._c = !1, s;
}, or = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (rr(r))
      continue;
    const o = e[r];
    if (R(o))
      t[r] = ti(r, o, s);
    else if (o != null) {
      const i = vn(o);
      t[r] = () => i;
    }
  }
}, ir = (e, t) => {
  const n = vn(t);
  e.slots.default = () => n;
}, ni = (e, t) => {
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (e.slots = M(t), It(t, "_", n)) : or(t, e.slots = {});
  } else
    e.slots = {}, t && ir(e, t);
  It(e.slots, Gt, 1);
}, si = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let o = !0, i = K;
  if (s.shapeFlag & 32) {
    const c = t._;
    c ? n && c === 1 ? o = !1 : (Z(r, t), !n && c === 1 && delete r._) : (o = !t.$stable, or(t, r)), i = t;
  } else
    t && (ir(e, t), i = { default: 1 });
  if (o)
    for (const c in r)
      !rr(c) && !(c in i) && delete r[c];
};
function lr() {
  return {
    app: null,
    config: {
      isNativeTag: Dr,
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
let ri = 0;
function oi(e, t) {
  return function(s, r = null) {
    R(s) || (s = Object.assign({}, s)), r != null && !z(r) && (r = null);
    const o = lr(), i = /* @__PURE__ */ new Set();
    let c = !1;
    const u = o.app = {
      _uid: ri++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: Ii,
      get config() {
        return o.config;
      },
      set config(d) {
      },
      use(d, ..._) {
        return i.has(d) || (d && R(d.install) ? (i.add(d), d.install(u, ..._)) : R(d) && (i.add(d), d(u, ..._))), u;
      },
      mixin(d) {
        return o.mixins.includes(d) || o.mixins.push(d), u;
      },
      component(d, _) {
        return _ ? (o.components[d] = _, u) : o.components[d];
      },
      directive(d, _) {
        return _ ? (o.directives[d] = _, u) : o.directives[d];
      },
      mount(d, _, O) {
        if (!c) {
          const x = je(s, r);
          return x.appContext = o, _ && t ? t(x, d) : e(x, d, O), c = !0, u._container = d, d.__vue_app__ = u, Mn(x.component) || x.component.proxy;
        }
      },
      unmount() {
        c && (e(null, u._container), delete u._container.__vue_app__);
      },
      provide(d, _) {
        return o.provides[d] = _, u;
      }
    };
    return u;
  };
}
function pn(e, t, n, s, r = !1) {
  if (I(e)) {
    e.forEach((x, N) => pn(x, t && (I(t) ? t[N] : t), n, s, r));
    return;
  }
  if (Dt(s) && !r)
    return;
  const o = s.shapeFlag & 4 ? Mn(s.component) || s.component.proxy : s.el, i = r ? null : o, { i: c, r: u } = e, d = t && t.r, _ = c.refs === K ? c.refs = {} : c.refs, O = c.setupState;
  if (d != null && d !== u && (J(d) ? (_[d] = null, L(O, d) && (O[d] = null)) : ne(d) && (d.value = null)), R(u))
    Me(u, c, 12, [i, _]);
  else {
    const x = J(u), N = ne(u);
    if (x || N) {
      const j = () => {
        if (e.f) {
          const D = x ? L(O, u) ? O[u] : _[u] : u.value;
          r ? I(D) && bn(D, o) : I(D) ? D.includes(o) || D.push(o) : x ? (_[u] = [o], L(O, u) && (O[u] = _[u])) : (u.value = [o], e.k && (_[e.k] = u.value));
        } else
          x ? (_[u] = i, L(O, u) && (O[u] = i)) : N && (u.value = i, e.k && (_[e.k] = i));
      };
      i ? (j.id = -1, se(j, n)) : j();
    }
  }
}
const se = Io;
function ii(e) {
  return li(e);
}
function li(e, t) {
  const n = vr();
  n.__VUE__ = !0;
  const { insert: s, remove: r, patchProp: o, createElement: i, createText: c, createComment: u, setText: d, setElementText: _, parentNode: O, nextSibling: x, setScopeId: N = ge, insertStaticContent: j } = e, D = (l, f, a, h = null, p = null, b = null, T = !1, m = null, E = !!f.dynamicChildren) => {
    if (l === f)
      return;
    l && !ze(l, f) && (h = mt(l), be(l, p, b, !0), l = null), f.patchFlag === -2 && (E = !1, f.dynamicChildren = null);
    const { type: g, ref: A, shapeFlag: y } = f;
    switch (g) {
      case Kt:
        X(l, f, a, h);
        break;
      case Ne:
        F(l, f, a, h);
        break;
      case Zt:
        l == null && le(f, a, h, T);
        break;
      case Te:
        me(l, f, a, h, p, b, T, m, E);
        break;
      default:
        y & 1 ? q(l, f, a, h, p, b, T, m, E) : y & 6 ? Ae(l, f, a, h, p, b, T, m, E) : (y & 64 || y & 128) && g.process(l, f, a, h, p, b, T, m, E, Je);
    }
    A != null && p && pn(A, l && l.ref, b, f || l, !f);
  }, X = (l, f, a, h) => {
    if (l == null)
      s(f.el = c(f.children), a, h);
    else {
      const p = f.el = l.el;
      f.children !== l.children && d(p, f.children);
    }
  }, F = (l, f, a, h) => {
    l == null ? s(f.el = u(f.children || ""), a, h) : f.el = l.el;
  }, le = (l, f, a, h) => {
    [l.el, l.anchor] = j(l.children, f, a, h, l.el, l.anchor);
  }, P = ({ el: l, anchor: f }, a, h) => {
    let p;
    for (; l && l !== f; )
      p = x(l), s(l, a, h), l = p;
    s(f, a, h);
  }, G = ({ el: l, anchor: f }) => {
    let a;
    for (; l && l !== f; )
      a = x(l), r(l), l = a;
    r(f);
  }, q = (l, f, a, h, p, b, T, m, E) => {
    T = T || f.type === "svg", l == null ? Ye(f, a, h, p, b, T, m, E) : Y(l, f, p, b, T, m, E);
  }, Ye = (l, f, a, h, p, b, T, m) => {
    let E, g;
    const { type: A, props: y, shapeFlag: S, transition: C, dirs: v } = l;
    if (E = l.el = i(l.type, b, y && y.is, y), S & 8 ? _(E, l.children) : S & 16 && w(l.children, E, null, h, p, b && A !== "foreignObject", T, m), v && Ke(l, null, h, "created"), Re(E, l, l.scopeId, T, h), y) {
      for (const U in y)
        U !== "value" && !At(U) && o(E, U, null, y[U], b, l.children, h, p, Se);
      "value" in y && o(E, "value", null, y.value), (g = y.onVnodeBeforeMount) && Oe(g, h, l);
    }
    v && Ke(l, null, h, "beforeMount");
    const B = (!p || p && !p.pendingBranch) && C && !C.persisted;
    B && C.beforeEnter(E), s(E, f, a), ((g = y && y.onVnodeMounted) || B || v) && se(() => {
      g && Oe(g, h, l), B && C.enter(E), v && Ke(l, null, h, "mounted");
    }, p);
  }, Re = (l, f, a, h, p) => {
    if (a && N(l, a), h)
      for (let b = 0; b < h.length; b++)
        N(l, h[b]);
    if (p) {
      let b = p.subTree;
      if (f === b) {
        const T = p.vnode;
        Re(l, T, T.scopeId, T.slotScopeIds, p.parent);
      }
    }
  }, w = (l, f, a, h, p, b, T, m, E = 0) => {
    for (let g = E; g < l.length; g++) {
      const A = l[g] = m ? ve(l[g]) : xe(l[g]);
      D(null, A, f, a, h, p, b, T, m);
    }
  }, Y = (l, f, a, h, p, b, T) => {
    const m = f.el = l.el;
    let { patchFlag: E, dynamicChildren: g, dirs: A } = f;
    E |= l.patchFlag & 16;
    const y = l.props || K, S = f.props || K;
    let C;
    a && Ge(a, !1), (C = S.onVnodeBeforeUpdate) && Oe(C, a, f, l), A && Ke(f, l, a, "beforeUpdate"), a && Ge(a, !0);
    const v = p && f.type !== "foreignObject";
    if (g ? k(l.dynamicChildren, g, m, a, h, v, b) : T || H(l, f, m, null, a, h, v, b, !1), E > 0) {
      if (E & 16)
        oe(m, f, y, S, a, h, p);
      else if (E & 2 && y.class !== S.class && o(m, "class", null, S.class, p), E & 4 && o(m, "style", y.style, S.style, p), E & 8) {
        const B = f.dynamicProps;
        for (let U = 0; U < B.length; U++) {
          const $ = B[U], ue = y[$], Ze = S[$];
          (Ze !== ue || $ === "value") && o(m, $, ue, Ze, p, l.children, a, h, Se);
        }
      }
      E & 1 && l.children !== f.children && _(m, f.children);
    } else
      !T && g == null && oe(m, f, y, S, a, h, p);
    ((C = S.onVnodeUpdated) || A) && se(() => {
      C && Oe(C, a, f, l), A && Ke(f, l, a, "updated");
    }, h);
  }, k = (l, f, a, h, p, b, T) => {
    for (let m = 0; m < f.length; m++) {
      const E = l[m], g = f[m], A = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        E.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (E.type === Te || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ze(E, g) || // - In the case of a component, it could contain anything.
        E.shapeFlag & 70) ? O(E.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          a
        )
      );
      D(E, g, A, null, h, p, b, T, !0);
    }
  }, oe = (l, f, a, h, p, b, T) => {
    if (a !== h) {
      if (a !== K)
        for (const m in a)
          !At(m) && !(m in h) && o(l, m, a[m], null, T, f.children, p, b, Se);
      for (const m in h) {
        if (At(m))
          continue;
        const E = h[m], g = a[m];
        E !== g && m !== "value" && o(l, m, g, E, T, f.children, p, b, Se);
      }
      "value" in h && o(l, "value", a.value, h.value);
    }
  }, me = (l, f, a, h, p, b, T, m, E) => {
    const g = f.el = l ? l.el : c(""), A = f.anchor = l ? l.anchor : c("");
    let { patchFlag: y, dynamicChildren: S, slotScopeIds: C } = f;
    C && (m = m ? m.concat(C) : C), l == null ? (s(g, a, h), s(A, a, h), w(f.children, a, A, p, b, T, m, E)) : y > 0 && y & 64 && S && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (k(l.dynamicChildren, S, a, p, b, T, m), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (f.key != null || p && f === p.subTree) && cr(
      l,
      f,
      !0
      /* shallow */
    )) : H(l, f, a, A, p, b, T, m, E);
  }, Ae = (l, f, a, h, p, b, T, m, E) => {
    f.slotScopeIds = m, l == null ? f.shapeFlag & 512 ? p.ctx.activate(f, a, h, T, E) : it(f, a, h, p, b, T, E) : Un(l, f, E);
  }, it = (l, f, a, h, p, b, T) => {
    const m = l.component = Ei(l, h, p);
    if (Ht(l) && (m.ctx.renderer = Je), Ti(m), m.asyncDep) {
      if (p && p.registerDep(m, ee), !l.el) {
        const E = m.subTree = je(Ne);
        F(null, E, f, a);
      }
      return;
    }
    ee(m, l, f, a, p, b, T);
  }, Un = (l, f, a) => {
    const h = f.component = l.component;
    if (Do(l, f, a))
      if (h.asyncDep && !h.asyncResolved) {
        W(h, f, a);
        return;
      } else
        h.next = f, Eo(h.update), h.update();
    else
      f.el = l.el, h.vnode = f;
  }, ee = (l, f, a, h, p, b, T) => {
    const m = () => {
      if (l.isMounted) {
        let { next: A, bu: y, u: S, parent: C, vnode: v } = l, B = A, U;
        Ge(l, !1), A ? (A.el = v.el, W(l, A, T)) : A = v, y && Xt(y), (U = A.props && A.props.onVnodeBeforeUpdate) && Oe(U, C, A, v), Ge(l, !0);
        const $ = $t(l), ue = l.subTree;
        l.subTree = $, D(
          ue,
          $,
          // parent may have changed if it's in a teleport
          O(ue.el),
          // anchor may have changed if it's in a fragment
          mt(ue),
          l,
          p,
          b
        ), A.el = $.el, B === null && Co(l, $.el), S && se(S, p), (U = A.props && A.props.onVnodeUpdated) && se(() => Oe(U, C, A, v), p);
      } else {
        let A;
        const { el: y, props: S } = f, { bm: C, m: v, parent: B } = l, U = Dt(f);
        if (Ge(l, !1), C && Xt(C), !U && (A = S && S.onVnodeBeforeMount) && Oe(A, B, f), Ge(l, !0), y && Wt) {
          const $ = () => {
            l.subTree = $t(l), Wt(y, l.subTree, l, p, null);
          };
          U ? f.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !l.isUnmounted && $()
          ) : $();
        } else {
          const $ = l.subTree = $t(l);
          D(null, $, a, h, l, p, b), f.el = $.el;
        }
        if (v && se(v, p), !U && (A = S && S.onVnodeMounted)) {
          const $ = f;
          se(() => Oe(A, B, $), p);
        }
        (f.shapeFlag & 256 || B && Dt(B.vnode) && B.vnode.shapeFlag & 256) && l.a && se(l.a, p), l.isMounted = !0, f = a = h = null;
      }
    }, E = l.effect = new xn(
      m,
      () => Rn(g),
      l.scope
      // track it in component's effect scope
    ), g = l.update = () => E.run();
    g.id = l.uid, Ge(l, !0), g();
  }, W = (l, f, a) => {
    f.component = l;
    const h = l.vnode.props;
    l.vnode = f, l.next = null, ei(l, f.props, h, a), si(l, f.children, a), rt(), qn(), ot();
  }, H = (l, f, a, h, p, b, T, m, E = !1) => {
    const g = l && l.children, A = l ? l.shapeFlag : 0, y = f.children, { patchFlag: S, shapeFlag: C } = f;
    if (S > 0) {
      if (S & 128) {
        gt(g, y, a, h, p, b, T, m, E);
        return;
      } else if (S & 256) {
        He(g, y, a, h, p, b, T, m, E);
        return;
      }
    }
    C & 8 ? (A & 16 && Se(g, p, b), y !== g && _(a, y)) : A & 16 ? C & 16 ? gt(g, y, a, h, p, b, T, m, E) : Se(g, p, b, !0) : (A & 8 && _(a, ""), C & 16 && w(y, a, h, p, b, T, m, E));
  }, He = (l, f, a, h, p, b, T, m, E) => {
    l = l || Qe, f = f || Qe;
    const g = l.length, A = f.length, y = Math.min(g, A);
    let S;
    for (S = 0; S < y; S++) {
      const C = f[S] = E ? ve(f[S]) : xe(f[S]);
      D(l[S], C, a, null, p, b, T, m, E);
    }
    g > A ? Se(l, p, b, !0, !1, y) : w(f, a, h, p, b, T, m, E, y);
  }, gt = (l, f, a, h, p, b, T, m, E) => {
    let g = 0;
    const A = f.length;
    let y = l.length - 1, S = A - 1;
    for (; g <= y && g <= S; ) {
      const C = l[g], v = f[g] = E ? ve(f[g]) : xe(f[g]);
      if (ze(C, v))
        D(C, v, a, null, p, b, T, m, E);
      else
        break;
      g++;
    }
    for (; g <= y && g <= S; ) {
      const C = l[y], v = f[S] = E ? ve(f[S]) : xe(f[S]);
      if (ze(C, v))
        D(C, v, a, null, p, b, T, m, E);
      else
        break;
      y--, S--;
    }
    if (g > y) {
      if (g <= S) {
        const C = S + 1, v = C < A ? f[C].el : h;
        for (; g <= S; )
          D(null, f[g] = E ? ve(f[g]) : xe(f[g]), a, v, p, b, T, m, E), g++;
      }
    } else if (g > S)
      for (; g <= y; )
        be(l[g], p, b, !0), g++;
    else {
      const C = g, v = g, B = /* @__PURE__ */ new Map();
      for (g = v; g <= S; g++) {
        const ie = f[g] = E ? ve(f[g]) : xe(f[g]);
        ie.key != null && B.set(ie.key, g);
      }
      let U, $ = 0;
      const ue = S - v + 1;
      let Ze = !1, Bn = 0;
      const lt = new Array(ue);
      for (g = 0; g < ue; g++)
        lt[g] = 0;
      for (g = C; g <= y; g++) {
        const ie = l[g];
        if ($ >= ue) {
          be(ie, p, b, !0);
          continue;
        }
        let Ee;
        if (ie.key != null)
          Ee = B.get(ie.key);
        else
          for (U = v; U <= S; U++)
            if (lt[U - v] === 0 && ze(ie, f[U])) {
              Ee = U;
              break;
            }
        Ee === void 0 ? be(ie, p, b, !0) : (lt[Ee - v] = g + 1, Ee >= Bn ? Bn = Ee : Ze = !0, D(ie, f[Ee], a, null, p, b, T, m, E), $++);
      }
      const Kn = Ze ? ci(lt) : Qe;
      for (U = Kn.length - 1, g = ue - 1; g >= 0; g--) {
        const ie = v + g, Ee = f[ie], Gn = ie + 1 < A ? f[ie + 1].el : h;
        lt[g] === 0 ? D(null, Ee, a, Gn, p, b, T, m, E) : Ze && (U < 0 || g !== Kn[U] ? Be(
          Ee,
          a,
          Gn,
          2
          /* MoveType.REORDER */
        ) : U--);
      }
    }
  }, Be = (l, f, a, h, p = null) => {
    const { el: b, type: T, transition: m, children: E, shapeFlag: g } = l;
    if (g & 6) {
      Be(l.component.subTree, f, a, h);
      return;
    }
    if (g & 128) {
      l.suspense.move(f, a, h);
      return;
    }
    if (g & 64) {
      T.move(l, f, a, Je);
      return;
    }
    if (T === Te) {
      s(b, f, a);
      for (let y = 0; y < E.length; y++)
        Be(E[y], f, a, h);
      s(l.anchor, f, a);
      return;
    }
    if (T === Zt) {
      P(l, f, a);
      return;
    }
    if (h !== 2 && g & 1 && m)
      if (h === 0)
        m.beforeEnter(b), s(b, f, a), se(() => m.enter(b), p);
      else {
        const { leave: y, delayLeave: S, afterLeave: C } = m, v = () => s(b, f, a), B = () => {
          y(b, () => {
            v(), C && C();
          });
        };
        S ? S(b, v, B) : B();
      }
    else
      s(b, f, a);
  }, be = (l, f, a, h = !1, p = !1) => {
    const { type: b, props: T, ref: m, children: E, dynamicChildren: g, shapeFlag: A, patchFlag: y, dirs: S } = l;
    if (m != null && pn(m, null, a, l, !0), A & 256) {
      f.ctx.deactivate(l);
      return;
    }
    const C = A & 1 && S, v = !Dt(l);
    let B;
    if (v && (B = T && T.onVnodeBeforeUnmount) && Oe(B, f, l), A & 6)
      br(l.component, a, h);
    else {
      if (A & 128) {
        l.suspense.unmount(a, h);
        return;
      }
      C && Ke(l, null, f, "beforeUnmount"), A & 64 ? l.type.remove(l, f, a, p, Je, h) : g && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== Te || y > 0 && y & 64) ? Se(g, f, a, !1, !0) : (b === Te && y & 384 || !p && A & 16) && Se(E, f, a), h && Fn(l);
    }
    (v && (B = T && T.onVnodeUnmounted) || C) && se(() => {
      B && Oe(B, f, l), C && Ke(l, null, f, "unmounted");
    }, a);
  }, Fn = (l) => {
    const { type: f, el: a, anchor: h, transition: p } = l;
    if (f === Te) {
      mr(a, h);
      return;
    }
    if (f === Zt) {
      G(l);
      return;
    }
    const b = () => {
      r(a), p && !p.persisted && p.afterLeave && p.afterLeave();
    };
    if (l.shapeFlag & 1 && p && !p.persisted) {
      const { leave: T, delayLeave: m } = p, E = () => T(a, b);
      m ? m(l.el, b, E) : E();
    } else
      b();
  }, mr = (l, f) => {
    let a;
    for (; l !== f; )
      a = x(l), r(l), l = a;
    r(f);
  }, br = (l, f, a) => {
    const { bum: h, scope: p, update: b, subTree: T, um: m } = l;
    h && Xt(h), p.stop(), b && (b.active = !1, be(T, l, f, a)), m && se(m, f), se(() => {
      l.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve());
  }, Se = (l, f, a, h = !1, p = !1, b = 0) => {
    for (let T = b; T < l.length; T++)
      be(l[T], f, a, h, p);
  }, mt = (l) => l.shapeFlag & 6 ? mt(l.component.subTree) : l.shapeFlag & 128 ? l.suspense.next() : x(l.anchor || l.el), Hn = (l, f, a) => {
    l == null ? f._vnode && be(f._vnode, null, null, !0) : D(f._vnode || null, l, f, null, null, null, a), qn(), ks(), f._vnode = l;
  }, Je = {
    p: D,
    um: be,
    m: Be,
    r: Fn,
    mt: it,
    mc: w,
    pc: H,
    pbc: k,
    n: mt,
    o: e
  };
  let kt, Wt;
  return t && ([kt, Wt] = t(Je)), {
    render: Hn,
    hydrate: kt,
    createApp: oi(Hn, kt)
  };
}
function Ge({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function cr(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (I(s) && I(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let c = r[o];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = r[o] = ve(r[o]), c.el = i.el), n || cr(i, c)), c.type === Kt && (c.el = i.el);
    }
}
function ci(e) {
  const t = e.slice(), n = [0];
  let s, r, o, i, c;
  const u = e.length;
  for (s = 0; s < u; s++) {
    const d = e[s];
    if (d !== 0) {
      if (r = n[n.length - 1], e[r] < d) {
        t[s] = r, n.push(s);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        c = o + i >> 1, e[n[c]] < d ? o = c + 1 : i = c;
      d < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; )
    n[o] = i, i = t[i];
  return n;
}
const fi = (e) => e.__isTeleport, Te = Symbol(void 0), Kt = Symbol(void 0), Ne = Symbol(void 0), Zt = Symbol(void 0), ut = [];
let _e = null;
function fr(e = !1) {
  ut.push(_e = e ? null : []);
}
function ui() {
  ut.pop(), _e = ut[ut.length - 1] || null;
}
let ht = 1;
function ls(e) {
  ht += e;
}
function ai(e) {
  return e.dynamicChildren = ht > 0 ? _e || Qe : null, ui(), ht > 0 && _e && _e.push(e), e;
}
function ur(e, t, n, s, r, o) {
  return ai(dr(
    e,
    t,
    n,
    s,
    r,
    o,
    !0
    /* isBlock */
  ));
}
function di(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ze(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Gt = "__vInternal", ar = ({ key: e }) => e ?? null, Ct = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? J(e) || ne(e) || R(e) ? { i: he, r: e, k: t, f: !!n } : e : null;
function dr(e, t = null, n = null, s = 0, r = null, o = e === Te ? 0 : 1, i = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ar(t),
    ref: t && Ct(t),
    scopeId: Xs,
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
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: he
  };
  return c ? (Ln(u, n), o & 128 && e.normalize(u)) : n && (u.shapeFlag |= J(n) ? 8 : 16), ht > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  _e && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && _e.push(u), u;
}
const je = pi;
function pi(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === Xo) && (e = Ne), di(e)) {
    const c = Fe(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ln(c, n), ht > 0 && !o && _e && (c.shapeFlag & 6 ? _e[_e.indexOf(e)] = c : _e.push(c)), c.patchFlag |= -2, c;
  }
  if (Si(e) && (e = e.__vccOpts), t) {
    t = hi(t);
    let { class: c, style: u } = t;
    c && !J(c) && (t.class = wt(c)), z(u) && (js(u) && !I(u) && (u = Z({}, u)), t.style = gn(u));
  }
  const i = J(e) ? 1 : No(e) ? 128 : fi(e) ? 64 : z(e) ? 4 : R(e) ? 2 : 0;
  return dr(e, t, n, s, r, i, o, !0);
}
function hi(e) {
  return e ? js(e) || Gt in e ? Z({}, e) : e : null;
}
function Fe(e, t, n = !1) {
  const { props: s, ref: r, patchFlag: o, children: i } = e, c = t ? gi(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && ar(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? I(r) ? r.concat(Ct(t)) : [r, Ct(t)] : Ct(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
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
    ssContent: e.ssContent && Fe(e.ssContent),
    ssFallback: e.ssFallback && Fe(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function _i(e = " ", t = 0) {
  return je(Kt, null, e, t);
}
function xe(e) {
  return e == null || typeof e == "boolean" ? je(Ne) : I(e) ? je(
    Te,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? ve(e) : je(Kt, null, String(e));
}
function ve(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Fe(e);
}
function Ln(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (I(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ln(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !(Gt in t) ? t._ctx = he : r === 3 && he && (he.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    R(t) ? (t = { default: t, _ctx: he }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [_i(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function gi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = wt([t.class, s.class]));
      else if (r === "style")
        t.style = gn([t.style, s.style]);
      else if (vt(r)) {
        const o = t[r], i = s[r];
        i && o !== i && !(I(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else
        r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Oe(e, t, n, s = null) {
  fe(e, t, 7, [
    n,
    s
  ]);
}
const mi = lr();
let bi = 0;
function Ei(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || mi, o = {
    uid: bi++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new Lr(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: sr(s, r),
    emitsOptions: zs(s, r),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: K,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: K,
    data: K,
    props: K,
    attrs: K,
    slots: K,
    refs: K,
    setupState: K,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = xo.bind(null, o), e.ce && e.ce(o), o;
}
let V = null;
const Oi = () => V || he, st = (e) => {
  V = e, e.scope.on();
}, Ve = () => {
  V && V.scope.off(), V = null;
};
function pr(e) {
  return e.vnode.shapeFlag & 4;
}
let _t = !1;
function Ti(e, t = !1) {
  _t = t;
  const { props: n, children: s } = e.vnode, r = pr(e);
  Qo(e, n, r, t), ni(e, s);
  const o = r ? xi(e, t) : void 0;
  return _t = !1, o;
}
function xi(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Us(new Proxy(e.ctx, $o));
  const { setup: s } = n;
  if (s) {
    const r = e.setupContext = s.length > 1 ? Ai(e) : null;
    st(e), rt();
    const o = Me(s, e, 0, [e.props, r]);
    if (ot(), Ve(), Ts(o)) {
      if (o.then(Ve, Ve), t)
        return o.then((i) => {
          cs(e, i, t);
        }).catch((i) => {
          Ut(
            i,
            e,
            0
            /* ErrorCodes.SETUP_FUNCTION */
          );
        });
      e.asyncDep = o;
    } else
      cs(e, o, t);
  } else
    hr(e, t);
}
function cs(e, t, n) {
  R(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : z(t) && (e.setupState = Fs(t)), hr(e, n);
}
let fs;
function hr(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && fs && !s.render) {
      const r = s.template || wn(e).template;
      if (r) {
        const { isCustomElement: o, compilerOptions: i } = e.appContext.config, { delimiters: c, compilerOptions: u } = s, d = Z(Z({
          isCustomElement: o,
          delimiters: c
        }, i), u);
        s.render = fs(r, d);
      }
    }
    e.render = s.render || ge;
  }
  st(e), rt(), Vo(e), ot(), Ve();
}
function yi(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return re(e, "get", "$attrs"), t[n];
    }
  });
}
function Ai(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = yi(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Mn(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Fs(Us(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in ft)
          return ft[n](e);
      },
      has(t, n) {
        return n in t || n in ft;
      }
    }));
}
function Si(e) {
  return R(e) && "__vccOpts" in e;
}
const Di = (e, t) => go(e, t, _t), Ci = Symbol(""), Ni = () => St(Ci), Ii = "3.2.47", Pi = "http://www.w3.org/2000/svg", Xe = typeof document < "u" ? document : null, us = Xe && /* @__PURE__ */ Xe.createElement("template"), Ri = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t ? Xe.createElementNS(Pi, e) : Xe.createElement(e, n ? { is: n } : void 0);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => Xe.createTextNode(e),
  createComment: (e) => Xe.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Xe.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, r, o) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === o || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling)); )
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
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
};
function wi(e, t, n) {
  const s = e._vtc;
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
function vi(e, t, n) {
  const s = e.style, r = J(n);
  if (n && !r) {
    if (t && !J(t))
      for (const o in t)
        n[o] == null && hn(s, o, "");
    for (const o in n)
      hn(s, o, n[o]);
  } else {
    const o = s.display;
    r ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (s.display = o);
  }
}
const as = /\s*!important$/;
function hn(e, t, n) {
  if (I(n))
    n.forEach((s) => hn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Li(e, t);
    as.test(n) ? e.setProperty(de(s), n.replace(as, ""), "important") : e[s] = n;
  }
}
const ds = ["Webkit", "Moz", "ms"], qt = {};
function Li(e, t) {
  const n = qt[t];
  if (n)
    return n;
  let s = Ce(t);
  if (s !== "filter" && s in e)
    return qt[t] = s;
  s = As(s);
  for (let r = 0; r < ds.length; r++) {
    const o = ds[r] + s;
    if (o in e)
      return qt[t] = o;
  }
  return t;
}
const ps = "http://www.w3.org/1999/xlink";
function Mi(e, t, n, s, r) {
  if (s && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(ps, t.slice(6, t.length)) : e.setAttributeNS(ps, t, n);
  else {
    const o = Ar(t);
    n == null || o && !bs(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : n);
  }
}
function ji(e, t, n, s, r, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    s && i(s, r, o), e[t] = n ?? "";
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
function Ui(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Fi(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
function Hi(e, t, n, s, r = null) {
  const o = e._vei || (e._vei = {}), i = o[t];
  if (s && i)
    i.value = s;
  else {
    const [c, u] = Bi(t);
    if (s) {
      const d = o[t] = ki(s, r);
      Ui(e, c, d, u);
    } else
      i && (Fi(e, c, i, u), o[t] = void 0);
  }
}
const hs = /(?:Once|Passive|Capture)$/;
function Bi(e) {
  let t;
  if (hs.test(e)) {
    t = {};
    let s;
    for (; s = e.match(hs); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : de(e.slice(2)), t];
}
let Qt = 0;
const Ki = /* @__PURE__ */ Promise.resolve(), Gi = () => Qt || (Ki.then(() => Qt = 0), Qt = Date.now());
function ki(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    fe(Wi(s, n.value), t, 5, [s]);
  };
  return n.value = e, n.attached = Gi(), n;
}
function Wi(e, t) {
  if (I(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map((s) => (r) => !r._stopped && s && s(r));
  } else
    return t;
}
const _s = /^on[a-z]/, zi = (e, t, n, s, r = !1, o, i, c, u) => {
  t === "class" ? wi(e, s, r) : t === "style" ? vi(e, n, s) : vt(t) ? mn(t) || Hi(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Xi(e, t, s, r)) ? ji(e, t, s, o, i, c, u) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Mi(e, t, s, r));
};
function Xi(e, t, n, s) {
  return s ? !!(t === "innerHTML" || t === "textContent" || t in e && _s.test(t) && R(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || _s.test(t) && J(n) ? !1 : t in e;
}
function _r(e, t) {
  const n = Mo(e);
  class s extends jn {
    constructor(o) {
      super(n, o, t);
    }
  }
  return s.def = n, s;
}
const $i = typeof HTMLElement < "u" ? HTMLElement : class {
};
class jn extends $i {
  constructor(t, n = {}, s) {
    super(), this._def = t, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && s ? s(this._createVNode(), this.shadowRoot) : (this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, Ks(() => {
      this._connected || (ms(null, this.shadowRoot), this._instance = null);
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
      for (const r of s)
        this._setAttr(r.attributeName);
    }).observe(this, { attributes: !0 });
    const t = (s, r = !1) => {
      const { props: o, styles: i } = s;
      let c;
      if (o && !I(o))
        for (const u in o) {
          const d = o[u];
          (d === Number || d && d.type === Number) && (u in this._props && (this._props[u] = kn(this._props[u])), (c || (c = /* @__PURE__ */ Object.create(null)))[Ce(u)] = !0);
        }
      this._numberProps = c, r && this._resolveProps(s), this._applyStyles(i), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then((s) => t(s, !0)) : t(this._def);
  }
  _resolveProps(t) {
    const { props: n } = t, s = I(n) ? n : Object.keys(n || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && s.includes(r) && this._setProp(r, this[r], !0, !1);
    for (const r of s.map(Ce))
      Object.defineProperty(this, r, {
        get() {
          return this._getProp(r);
        },
        set(o) {
          this._setProp(r, o);
        }
      });
  }
  _setAttr(t) {
    let n = this.getAttribute(t);
    const s = Ce(t);
    this._numberProps && this._numberProps[s] && (n = kn(n)), this._setProp(s, n, !1);
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
  _setProp(t, n, s = !0, r = !0) {
    n !== this._props[t] && (this._props[t] = n, r && this._instance && this._update(), s && (n === !0 ? this.setAttribute(de(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(de(t), n + "") : n || this.removeAttribute(de(t))));
  }
  _update() {
    ms(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const t = je(this._def, Z({}, this._props));
    return this._instance || (t.ce = (n) => {
      this._instance = n, n.isCE = !0;
      const s = (o, i) => {
        this.dispatchEvent(new CustomEvent(o, {
          detail: i
        }));
      };
      n.emit = (o, ...i) => {
        s(o, i), de(o) !== o && s(de(o), i);
      };
      let r = this;
      for (; r = r && (r.parentNode || r.host); )
        if (r instanceof jn) {
          n.parent = r._instance, n.provides = r._instance.provides;
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
const Vi = {
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
Lo.props;
const Yi = /* @__PURE__ */ Z({ patchProp: zi }, Ri);
let gs;
function Ji() {
  return gs || (gs = ii(Yi));
}
const ms = (...e) => {
  Ji().render(...e);
}, Zi = `.button{font-family:var(--zoa-header-font, sans-serif);font-weight:600;border:none;border-radius:10px;padding:8px 16px;transition:.2s;cursor:pointer}.button-kind--normal{background-color:var(--zoa-palette-secondary, #f2bab0);color:#000}.button-kind--normal:hover,.button-kind--normal:focus,.button-kind--normal:active{background-color:var(--zoa-palette-secondary-b, #ec9b8c)}.button-kind--primary{background-color:var(--zoa-palette-primary, #c9f708);color:#000}.button-kind--primary:hover,.button-kind--primary:focus,.button-kind--primary:active{background-color:var(--zoa-palette-primary-b, #b5de07);color:#000}
`, gr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, qi = {
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
    return (t, n) => (fr(), ur("button", {
      class: wt(["button", `button-kind--${e.kind}`])
    }, Sr(e.label), 3));
  }
}, Qi = /* @__PURE__ */ gr(qi, [["styles", [Zi]]]), el = `input{font-family:var(--zoa-body-font, sans-serif);border:1px solid var(--zoa-palette-grey, #87999e);border-radius:10px;padding:8px 16px}
`, tl = ["placeholder"], nl = {
  __name: "Textbox.ce",
  props: {
    placeholder: {
      type: String,
      default: null
    }
  },
  setup(e) {
    return (t, n) => (fr(), ur("input", {
      type: "text",
      placeholder: e.placeholder
    }, null, 8, tl));
  }
}, sl = /* @__PURE__ */ gr(nl, [["styles", [el]]]), rl = _r(Qi), ol = _r(sl), il = [rl, ol];
export {
  rl as ZoaButton,
  ol as ZoaTextbox,
  il as allElements
};
