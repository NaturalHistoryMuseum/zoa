import { openBlock as O, createElementBlock as S, normalizeClass as b, toDisplayString as w, createCommentVNode as X, createElementVNode as C, computed as c, defineComponent as N, watch as Z, h as L, createVNode as V, unref as B } from "vue";
import { parse as x, icon as Y, config as G, text as J, library as q } from "@fortawesome/fontawesome-svg-core";
import { fas as Q } from "@fortawesome/free-solid-svg-icons";
const ee = "_main_guuuc_1", te = {
  main: ee,
  "kind--normal": "_kind--normal_guuuc_11",
  "kind--primary": "_kind--primary_guuuc_19"
}, j = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, i] of t)
    n[r] = i;
  return n;
}, ne = {
  __name: "Button",
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
    return (t, n) => (O(), S("button", {
      class: b([t.$style.main, t.$style[`kind--${e.kind}`]])
    }, w(e.label), 3));
  }
}, re = {
  $style: te
}, ae = /* @__PURE__ */ j(ne, [["__cssModules", re]]), oe = "_input_172pg_1", ie = "_label_172pg_9", le = "_grid_172pg_19", se = {
  input: oe,
  label: ie,
  "label--right": "_label--right_172pg_15",
  "label--below": "_label--below_172pg_15",
  grid: le,
  "grid--above": "_grid--above_172pg_23",
  "grid--below": "_grid--below_172pg_23",
  "grid--left": "_grid--left_172pg_26",
  "grid--right": "_grid--right_172pg_29"
}, ue = ["placeholder"], ce = {
  __name: "Textbox",
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
    return (t, n) => (O(), S("div", {
      class: b([t.$style.grid, t.$style[`grid--${e.labelPosition}`]])
    }, [
      e.label && e.labelPosition !== "none" ? (O(), S("label", {
        key: 0,
        for: "textbox",
        class: b([t.$style.label, t.$style[`label--${e.labelPosition}`]])
      }, w(e.label), 3)) : X("", !0),
      C("input", {
        type: "text",
        placeholder: e.placeholder,
        id: "textbox",
        class: b(t.$style.input)
      }, null, 10, ue)
    ], 2));
  }
}, fe = {
  $style: se
}, de = /* @__PURE__ */ j(ce, [["__cssModules", fe]]), pe = {
  kind: {
    type: String,
    default: "info"
  },
  message: {
    type: String,
    default: "Button"
  }
};
function me(e) {
  return { icon: c(() => {
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
function R(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? R(Object(n), !0).forEach(function(r) {
      u(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : R(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function A(e) {
  "@babel/helpers - typeof";
  return A = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, A(e);
}
function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function _e(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), i, l;
  for (l = 0; l < r.length; l++)
    i = r[l], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function ge(e, t) {
  if (e == null)
    return {};
  var n = _e(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (i = 0; i < l.length; i++)
      r = l[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function E(e) {
  return ye(e) || be(e) || ve(e) || he();
}
function ye(e) {
  if (Array.isArray(e))
    return T(e);
}
function be(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function ve(e, t) {
  if (e) {
    if (typeof e == "string")
      return T(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return T(e, t);
  }
}
function T(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function he() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Oe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, M = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(a, o, p) {
      if (!g(o) || F(o) || W(o) || K(o) || s(o))
        return o;
      var y, v = 0, z = 0;
      if (d(o))
        for (y = [], z = o.length; v < z; v++)
          y.push(n(a, o[v], p));
      else {
        y = {};
        for (var D in o)
          Object.prototype.hasOwnProperty.call(o, D) && (y[a(D, p)] = n(a, o[D], p));
      }
      return y;
    }, r = function(a, o) {
      o = o || {};
      var p = o.separator || "_", y = o.split || /(?=[A-Z])/;
      return a.split(y).join(p);
    }, i = function(a) {
      return H(a) ? a : (a = a.replace(/[\-_\s]+(.)?/g, function(o, p) {
        return p ? p.toUpperCase() : "";
      }), a.substr(0, 1).toLowerCase() + a.substr(1));
    }, l = function(a) {
      var o = i(a);
      return o.substr(0, 1).toUpperCase() + o.substr(1);
    }, _ = function(a, o) {
      return r(a, o).toLowerCase();
    }, f = Object.prototype.toString, s = function(a) {
      return typeof a == "function";
    }, g = function(a) {
      return a === Object(a);
    }, d = function(a) {
      return f.call(a) == "[object Array]";
    }, F = function(a) {
      return f.call(a) == "[object Date]";
    }, W = function(a) {
      return f.call(a) == "[object RegExp]";
    }, K = function(a) {
      return f.call(a) == "[object Boolean]";
    }, H = function(a) {
      return a = a - 0, a === a;
    }, k = function(a, o) {
      var p = o && "process" in o ? o.process : o;
      return typeof p != "function" ? a : function(y, v) {
        return p(y, a, v);
      };
    }, I = {
      camelize: i,
      decamelize: _,
      pascalize: l,
      depascalize: _,
      camelizeKeys: function(a, o) {
        return n(k(i, o), a);
      },
      decamelizeKeys: function(a, o) {
        return n(k(_, o), a, o);
      },
      pascalizeKeys: function(a, o) {
        return n(k(l, o), a);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = I : t.humps = I;
  })(Oe);
})(M);
var Se = M.exports, xe = ["class", "style"];
function Ae(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), i = Se.camelize(n.slice(0, r)), l = n.slice(r + 1).trim();
    return t[i] = l, t;
  }, {});
}
function ke(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function P(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var r = (e.children || []).map(function(s) {
    return P(s);
  }), i = Object.keys(e.attributes || {}).reduce(function(s, g) {
    var d = e.attributes[g];
    switch (g) {
      case "class":
        s.class = ke(d);
        break;
      case "style":
        s.style = Ae(d);
        break;
      default:
        s.attrs[g] = d;
    }
    return s;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var l = n.style, _ = l === void 0 ? {} : l, f = ge(n, xe);
  return L(e.tag, m(m(m({}, t), {}, {
    class: i.class,
    style: m(m({}, i.style), _)
  }, i.attrs), f), r);
}
var U = !1;
try {
  U = !0;
} catch {
}
function De() {
  if (!U && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function h(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? u({}, e, t) : {};
}
function Ee(e) {
  var t, n = (t = {
    "fa-spin": e.spin,
    "fa-pulse": e.pulse,
    "fa-fw": e.fixedWidth,
    "fa-border": e.border,
    "fa-li": e.listItem,
    "fa-inverse": e.inverse,
    "fa-flip": e.flip === !0,
    "fa-flip-horizontal": e.flip === "horizontal" || e.flip === "both",
    "fa-flip-vertical": e.flip === "vertical" || e.flip === "both"
  }, u(t, "fa-".concat(e.size), e.size !== null), u(t, "fa-rotate-".concat(e.rotation), e.rotation !== null), u(t, "fa-pull-".concat(e.pull), e.pull !== null), u(t, "fa-swap-opacity", e.swapOpacity), u(t, "fa-bounce", e.bounce), u(t, "fa-shake", e.shake), u(t, "fa-beat", e.beat), u(t, "fa-fade", e.fade), u(t, "fa-beat-fade", e.beatFade), u(t, "fa-flash", e.flash), u(t, "fa-spin-pulse", e.spinPulse), u(t, "fa-spin-reverse", e.spinReverse), t);
  return Object.keys(n).map(function(r) {
    return n[r] ? r : null;
  }).filter(function(r) {
    return r;
  });
}
function $(e) {
  if (e && A(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (x.icon)
    return x.icon(e);
  if (e === null)
    return null;
  if (A(e) === "object" && e.prefix && e.iconName)
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
var Te = N({
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
      validator: function(t) {
        return [!0, !1, "horizontal", "vertical", "both"].indexOf(t) > -1;
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
      validator: function(t) {
        return ["right", "left"].indexOf(t) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: !1
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function(t) {
        return [90, 180, 270].indexOf(Number.parseInt(t, 10)) > -1;
      }
    },
    swapOpacity: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null,
      validator: function(t) {
        return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(t) > -1;
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
  setup: function(t, n) {
    var r = n.attrs, i = c(function() {
      return $(t.icon);
    }), l = c(function() {
      return h("classes", Ee(t));
    }), _ = c(function() {
      return h("transform", typeof t.transform == "string" ? x.transform(t.transform) : t.transform);
    }), f = c(function() {
      return h("mask", $(t.mask));
    }), s = c(function() {
      return Y(i.value, m(m(m(m({}, l.value), _.value), f.value), {}, {
        symbol: t.symbol,
        title: t.title
      }));
    });
    Z(s, function(d) {
      if (!d)
        return De("Could not find one or more icon(s)", i.value, f.value);
    }, {
      immediate: !0
    });
    var g = c(function() {
      return s.value ? P(s.value.abstract[0], {}, r) : null;
    });
    return function() {
      return g.value;
    };
  }
});
N({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var r = n.slots, i = G.familyPrefix, l = c(function() {
      return ["".concat(i, "-layers")].concat(E(t.fixedWidth ? ["".concat(i, "-fw")] : []));
    });
    return function() {
      return L("div", {
        class: l.value
      }, r.default ? r.default() : []);
    };
  }
});
N({
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
      validator: function(t) {
        return ["bottom-left", "bottom-right", "top-left", "top-right"].indexOf(t) > -1;
      }
    }
  },
  setup: function(t, n) {
    var r = n.attrs, i = G.familyPrefix, l = c(function() {
      return h("classes", [].concat(E(t.counter ? ["".concat(i, "-layers-counter")] : []), E(t.position ? ["".concat(i, "-layers-").concat(t.position)] : [])));
    }), _ = c(function() {
      return h("transform", typeof t.transform == "string" ? x.transform(t.transform) : t.transform);
    }), f = c(function() {
      var g = J(t.value.toString(), m(m({}, _.value), l.value)), d = g.abstract;
      return t.counter && (d[0].attributes.class = d[0].attributes.class.replace("fa-layers-text", "")), d[0];
    }), s = c(function() {
      return P(f.value, {}, r);
    });
    return function() {
      return s.value;
    };
  }
});
q.add(Q);
const we = "_main_jkzk0_1", Ne = "_icon_jkzk0_17", je = {
  main: we,
  "kind--info": "_kind--info_jkzk0_13",
  icon: Ne,
  "kind--warning": "_kind--warning_jkzk0_21",
  "kind--error": "_kind--error_jkzk0_29",
  "kind--success": "_kind--success_jkzk0_37"
}, Pe = {
  __name: "Flash",
  props: { ...pe },
  setup(e) {
    const t = e, { icon: n } = me(t);
    return (r, i) => (O(), S("div", {
      class: b([r.$style.main, r.$style[`kind--${r.kind}`]])
    }, [
      V(B(Te), {
        icon: ["fa-solid", B(n)],
        class: b(r.$style.icon)
      }, null, 8, ["icon", "class"]),
      C("span", null, w(r.message), 1)
    ], 2));
  }
}, Ie = {
  $style: je
}, ze = /* @__PURE__ */ j(Pe, [["__cssModules", Ie]]), Be = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ZoaButton: ae,
  ZoaFlash: ze,
  ZoaTextbox: de
}, Symbol.toStringTag, { value: "Module" })), Re = new RegExp("[A-Z]+(?![a-z])|[A-Z]", "g");
function $e(e) {
  return e.replace(Re, (t, n) => (n ? "-" : "") + t.toLowerCase());
}
const Me = {
  install(e, t) {
    Object.entries(Be).forEach((n) => {
      const r = $e(n[0]);
      e.component(r, n[1]);
    });
  }
};
export {
  Me as Zoa,
  ae as ZoaButton,
  ze as ZoaFlash,
  de as ZoaTextbox
};
