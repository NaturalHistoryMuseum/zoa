const componentNameRgx = new RegExp('([^/.]+)(?=.ce)');
const kebabCaseRgx = new RegExp('[A-Z]+(?![a-z])|[A-Z]', 'g');

/* CONSTANTS */
const HTML_PREFIX = 'zoa';

export function getElementName(fileName) {
  let componentName;
  try {
    componentName = componentNameRgx.exec(fileName)[0];
  } catch {
    return;
  }

  let kebabName = componentName.replace(
    kebabCaseRgx,
    (s, o) => (o ? '-' : '') + s.toLowerCase(),
  );
  return [HTML_PREFIX, kebabName].join('-');
}
