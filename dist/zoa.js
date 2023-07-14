import { resolveComponent as H, openBlock as O, createElementBlock as S, normalizeClass as v, createTextVNode as X, toDisplayString as N, createVNode as Z, createCommentVNode as V, createElementVNode as P, defineComponent as k, computed as p, watch as Y, h as L } from "vue";
import { parse as x, icon as J, config as $, text as Q, library as q } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret as ee } from "@fortawesome/free-solid-svg-icons";
const te = "_main_guuuc_1", ne = {
  main: te,
  "kind--normal": "_kind--normal_guuuc_11",
  "kind--primary": "_kind--primary_guuuc_19"
}, I = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, l] of t)
    n[r] = l;
  return n;
}, re = {
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
    return (t, n) => {
      const r = H("font-awesome-icon");
      return O(), S("button", {
        class: v([t.$style.main, t.$style[`kind--${e.kind}`]])
      }, [
        X(N(e.label) + " ", 1),
        Z(r, { icon: "fa-solid fa-user-secret" })
      ], 2);
    };
  }
}, ae = {
  $style: ne
}, oe = /* @__PURE__ */ I(re, [["__cssModules", ae]]), le = "_input_172pg_1", ie = "_label_172pg_9", se = "_grid_172pg_19", ue = {
  input: le,
  label: ie,
  "label--right": "_label--right_172pg_15",
  "label--below": "_label--below_172pg_15",
  grid: se,
  "grid--above": "_grid--above_172pg_23",
  "grid--below": "_grid--below_172pg_23",
  "grid--left": "_grid--left_172pg_26",
  "grid--right": "_grid--right_172pg_29"
}, ce = ["placeholder"], fe = {
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
      class: v([t.$style.grid, t.$style[`grid--${e.labelPosition}`]])
    }, [
      e.label && e.labelPosition !== "none" ? (O(), S("label", {
        key: 0,
        for: "textbox",
        class: v([t.$style.label, t.$style[`label--${e.labelPosition}`]])
      }, N(e.label), 3)) : V("", !0),
      P("input", {
        type: "text",
        placeholder: e.placeholder,
        id: "textbox",
        class: v(t.$style.input)
      }, null, 10, ce)
    ], 2));
  }
}, de = {
  $style: ue
}, pe = /* @__PURE__ */ I(fe, [["__cssModules", de]]), me = "_main_1cvuz_1", _e = {
  main: me,
  "kind--info": "_kind--info_1cvuz_12",
  "kind--warning": "_kind--warning_1cvuz_17",
  "kind--error": "_kind--error_1cvuz_22",
  "kind--success": "_kind--success_1cvuz_27"
}, ge = /* @__PURE__ */ P("span", null, "!", -1), ye = {
  __name: "Flash",
  props: {
    kind: {
      type: String,
      default: "info"
    },
    message: {
      type: String,
      default: "Button"
    }
  },
  setup(e) {
    return (t, n) => (O(), S("div", {
      class: v([t.$style.main, t.$style[`kind--${e.kind}`]])
    }, [
      ge,
      P("span", null, N(e.message), 1)
    ], 2));
  }
}, be = {
  $style: _e
}, ve = /* @__PURE__ */ I(ye, [["__cssModules", be]]), he = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ZoaButton: oe,
  ZoaFlash: ve,
  ZoaTextbox: pe
}, Symbol.toStringTag, { value: "Module" })), Oe = new RegExp("[A-Z]+(?![a-z])|[A-Z]", "g");
function Se(e) {
  return e.replace(Oe, (t, n) => (n ? "-" : "") + t.toLowerCase());
}
function R(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(l) {
      return Object.getOwnPropertyDescriptor(e, l).enumerable;
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
function xe(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), l, i;
  for (i = 0; i < r.length; i++)
    l = r[i], !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Ae(e, t) {
  if (e == null)
    return {};
  var n = xe(e, t), r, l;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (l = 0; l < i.length; l++)
      r = i[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function T(e) {
  return De(e) || Ee(e) || Te(e) || we();
}
function De(e) {
  if (Array.isArray(e))
    return w(e);
}
function Ee(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Te(e, t) {
  if (e) {
    if (typeof e == "string")
      return w(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return w(e, t);
  }
}
function w(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function we() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ne = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, U = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(a, o, d) {
      if (!g(o) || M(o) || F(o) || W(o) || s(o))
        return o;
      var y, b = 0, B = 0;
      if (f(o))
        for (y = [], B = o.length; b < B; b++)
          y.push(n(a, o[b], d));
      else {
        y = {};
        for (var E in o)
          Object.prototype.hasOwnProperty.call(o, E) && (y[a(E, d)] = n(a, o[E], d));
      }
      return y;
    }, r = function(a, o) {
      o = o || {};
      var d = o.separator || "_", y = o.split || /(?=[A-Z])/;
      return a.split(y).join(d);
    }, l = function(a) {
      return K(a) ? a : (a = a.replace(/[\-_\s]+(.)?/g, function(o, d) {
        return d ? d.toUpperCase() : "";
      }), a.substr(0, 1).toLowerCase() + a.substr(1));
    }, i = function(a) {
      var o = l(a);
      return o.substr(0, 1).toUpperCase() + o.substr(1);
    }, _ = function(a, o) {
      return r(a, o).toLowerCase();
    }, c = Object.prototype.toString, s = function(a) {
      return typeof a == "function";
    }, g = function(a) {
      return a === Object(a);
    }, f = function(a) {
      return c.call(a) == "[object Array]";
    }, M = function(a) {
      return c.call(a) == "[object Date]";
    }, F = function(a) {
      return c.call(a) == "[object RegExp]";
    }, W = function(a) {
      return c.call(a) == "[object Boolean]";
    }, K = function(a) {
      return a = a - 0, a === a;
    }, D = function(a, o) {
      var d = o && "process" in o ? o.process : o;
      return typeof d != "function" ? a : function(y, b) {
        return d(y, a, b);
      };
    }, z = {
      camelize: l,
      decamelize: _,
      pascalize: i,
      depascalize: _,
      camelizeKeys: function(a, o) {
        return n(D(l, o), a);
      },
      decamelizeKeys: function(a, o) {
        return n(D(_, o), a, o);
      },
      pascalizeKeys: function(a, o) {
        return n(D(i, o), a);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = z : t.humps = z;
  })(Ne);
})(U);
var Pe = U.exports, ke = ["class", "style"];
function Ie(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), l = Pe.camelize(n.slice(0, r)), i = n.slice(r + 1).trim();
    return t[l] = i, t;
  }, {});
}
function je(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function j(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var r = (e.children || []).map(function(s) {
    return j(s);
  }), l = Object.keys(e.attributes || {}).reduce(function(s, g) {
    var f = e.attributes[g];
    switch (g) {
      case "class":
        s.class = je(f);
        break;
      case "style":
        s.style = Ie(f);
        break;
      default:
        s.attrs[g] = f;
    }
    return s;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var i = n.style, _ = i === void 0 ? {} : i, c = Ae(n, ke);
  return L(e.tag, m(m(m({}, t), {}, {
    class: l.class,
    style: m(m({}, l.style), _)
  }, l.attrs), c), r);
}
var G = !1;
try {
  G = !0;
} catch {
}
function ze() {
  if (!G && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function h(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? u({}, e, t) : {};
}
function Be(e) {
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
function C(e) {
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
var Re = k({
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
    var r = n.attrs, l = p(function() {
      return C(t.icon);
    }), i = p(function() {
      return h("classes", Be(t));
    }), _ = p(function() {
      return h("transform", typeof t.transform == "string" ? x.transform(t.transform) : t.transform);
    }), c = p(function() {
      return h("mask", C(t.mask));
    }), s = p(function() {
      return J(l.value, m(m(m(m({}, i.value), _.value), c.value), {}, {
        symbol: t.symbol,
        title: t.title
      }));
    });
    Y(s, function(f) {
      if (!f)
        return ze("Could not find one or more icon(s)", l.value, c.value);
    }, {
      immediate: !0
    });
    var g = p(function() {
      return s.value ? j(s.value.abstract[0], {}, r) : null;
    });
    return function() {
      return g.value;
    };
  }
});
k({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var r = n.slots, l = $.familyPrefix, i = p(function() {
      return ["".concat(l, "-layers")].concat(T(t.fixedWidth ? ["".concat(l, "-fw")] : []));
    });
    return function() {
      return L("div", {
        class: i.value
      }, r.default ? r.default() : []);
    };
  }
});
k({
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
    var r = n.attrs, l = $.familyPrefix, i = p(function() {
      return h("classes", [].concat(T(t.counter ? ["".concat(l, "-layers-counter")] : []), T(t.position ? ["".concat(l, "-layers-").concat(t.position)] : [])));
    }), _ = p(function() {
      return h("transform", typeof t.transform == "string" ? x.transform(t.transform) : t.transform);
    }), c = p(function() {
      var g = Q(t.value.toString(), m(m({}, _.value), i.value)), f = g.abstract;
      return t.counter && (f[0].attributes.class = f[0].attributes.class.replace("fa-layers-text", "")), f[0];
    }), s = p(function() {
      return j(c.value, {}, r);
    });
    return function() {
      return s.value;
    };
  }
});
q.add(ee);
const Ue = {
  install(e, t) {
    t || (t = {}), t.fontAwesome !== !1 && e.component("font-awesome-icon", Re), Object.entries(he).forEach((n) => {
      const r = Se(n[0]);
      e.component(r, n[1]);
    });
  }
};
export {
  Ue as Zoa,
  oe as ZoaButton,
  ve as ZoaFlash,
  pe as ZoaTextbox
};
