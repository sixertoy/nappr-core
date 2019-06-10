const defaultSplitter = '::';

const uniqKeyId = (...args) => {
  const splitter = defaultSplitter;
  if (!Array.isArray(args) || !args.length) return undefined;
  return args.reduce((acc, val) => {
    const suffix = Array.isArray(val) ? val.join(splitter) : val;
    return `${acc}${splitter}${suffix}`;
  }, '');
};

export default uniqKeyId;
