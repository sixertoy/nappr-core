const uniqKeyId = (...args) => {
  if (!Array.isArray(args) || !args.length) return undefined;
  return args.reduce((acc, val) => {
    const suffix = Array.isArray(val) ? val.join('::') : val;
    return `${acc}::${suffix}`;
  }, '');
};

export default uniqKeyId;
