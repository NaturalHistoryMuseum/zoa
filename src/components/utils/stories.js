export function renderSetup(args) {
  args['rootClass'] = args.class;
  delete args.class;
  return args;
}

export function htmlArgs(argsObj) {
  // convenience function; just transforms the input args into a string of
  // HTML-like parameters, e.g. {'kind': 'info'} becomes 'kind="info"'
  return Object.entries(argsObj)
    .map((a) => a[0] + '=' + '"' + a[1] + '"')
    .join(' ');
}
