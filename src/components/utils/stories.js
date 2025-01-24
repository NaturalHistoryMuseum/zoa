export function renderSetup(args) {
  args['rootClass'] = args.class;
  delete args.class;
  return args;
}
