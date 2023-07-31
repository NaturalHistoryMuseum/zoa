export function getProps(commonProps, options) {
  let props = {};
  options = options || {};
  if (options.include && Array.isArray(options.include)) {
    // only include items from this list
    options.include.forEach((i) => {
      props[i] = commonProps[i];
    });
  } else if (options.exclude && Array.isArray(options.exclude)) {
    // include everything EXCEPT these items
    Object.entries(commonProps).forEach((p) => {
      if (!options.exclude.includes(p[0])) {
        props[p[0]] = p[1];
      }
    });
  } else {
    props = { ...commonProps };
  }

  if (options.defaults && typeof options.defaults === 'object') {
    Object.entries(options.defaults).forEach((d) => {
      props[d[0]]['default'] = d[1];
    });
  }

  if (options.additional && typeof options.additional === 'object') {
    console.log(options.additional);
    props = { ...props, ...options.additional };
  }
  return props;
}
