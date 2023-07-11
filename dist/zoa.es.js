import { openBlock as n, createElementBlock as l, normalizeClass as a, toDisplayString as s, createCommentVNode as c, createElementVNode as i } from "vue";
const b = {
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
    return (o, t) => (n(), l("button", {
      class: a(["zoa-button", `zoa-button-kind--${e.kind}`])
    }, s(e.label), 3));
  }
};
const u = ["placeholder"], x = {
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
    return (o, t) => (n(), l("div", {
      class: a(["zoa-textbox-grid", `zoa-textbox-grid--${e.labelPosition}`])
    }, [
      e.label && e.labelPosition !== "none" ? (n(), l("label", {
        key: 0,
        for: "textbox",
        class: a(["zoa-textbox-label", `zoa-textbox-label-position--${e.labelPosition}`])
      }, s(e.label), 3)) : c("", !0),
      i("input", {
        type: "text",
        placeholder: e.placeholder,
        id: "textbox"
      }, null, 8, u)
    ], 2));
  }
}, _ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ZoaButton: b,
  ZoaTextbox: x
}, Symbol.toStringTag, { value: "Module" })), d = new RegExp("[A-Z]+(?![a-z])|[A-Z]", "g");
function p(e) {
  return e.replace(
    d,
    (o, t) => (t ? "-" : "") + o.toLowerCase()
  );
}
const g = {
  install(e, o) {
    Object.entries(_).forEach((t) => {
      const r = p(t[0]);
      e.component(r, t[1]);
    });
  }
};
export {
  g as Zoa,
  b as ZoaButton,
  x as ZoaTextbox
};
