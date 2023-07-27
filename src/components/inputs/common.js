export function inputProps(defaults) {
  let props = {
    label: {
      type: String,
      default: 'Label',
    },
    placeholder: {
      type: String,
      default: null,
    },
    kind: {
      type: String,
      default: 'normal',
    },
  };
  Object.entries(defaults).forEach((d) => {
    props[d[0]].default = d[1];
  });
  return props;
}
