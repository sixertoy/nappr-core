const defaultSplitter = '::';

const uniqKeyId = (...args: (string | string[])[]): string | undefined => {
  const splitter = defaultSplitter;
  if (!Array.isArray(args) || !args.length) return undefined;
  return args.reduce<string>((acc, val) => {
    const suffix = Array.isArray(val) ? val.join(splitter) : String(val);
    return `${acc}${splitter}${suffix}`;
  }, '');
};
export default uniqKeyId;
