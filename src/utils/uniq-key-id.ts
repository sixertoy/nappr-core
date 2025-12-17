const DEFAULT_SPLITTER = '::';

export const uniqKeyId = (
  ...args: (string | string[])[]
): string | undefined => {
  const splitter = DEFAULT_SPLITTER;
  if (!Array.isArray(args) || !args.length) return undefined;
  return args.reduce<string>((acc, val) => {
    const suffix = Array.isArray(val) ? val.join(splitter) : val;
    return `${acc}${splitter}${suffix}`;
  }, '');
};
