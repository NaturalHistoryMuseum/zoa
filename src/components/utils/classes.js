export function usePropClasses(props) {
  function addPropClasses(rootClasses) {
    rootClasses = rootClasses || [];
    if (props.class && Array.isArray(props.class)) {
      rootClasses = rootClasses.concat(props.class);
    } else if (props.class) {
      rootClasses.push(props.class);
    }
    return rootClasses;
  }

  return { addPropClasses };
}
