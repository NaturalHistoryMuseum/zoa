const kebabCaseRgx = new RegExp('[A-Z]+(?![a-z])|[A-Z]', 'g');

export function kebabify(str) {
  return str.replace(kebabCaseRgx, (s, o) => (o ? '-' : '') + s.toLowerCase());
}
