const parseArray = vals =>
  vals.reduce((acc, val) => ({ ...acc, [val]: val }), {});

const parseObject = vals =>
  Object.keys(vals).reduce((acc, val) => ({ ...acc, [val]: val }), {});

const mirrorKeys = (keys, parsers = []) => {
  const isarray = Array.isArray(keys);
  const isobject = keys && typeof keys === 'object';
  const isvalid = isarray || isobject;
  if (!isvalid) return keys;

  const modifiers = parsers.filter(fn => typeof fn === 'function');
  const parser = isarray ? parseArray : parseObject;
  let result = parser(keys);
  if (!modifiers || !modifiers.length) return result;
  result = Object.keys(result).reduce((acc, key) => {
    const modifiedValue = modifiers.reduce(
      (prevacc, fn) => (prevacc && fn(prevacc)) || fn(key),
      undefined
    );
    return { ...acc, [key]: modifiedValue };
  }, {});
  return result;
};

export default mirrorKeys;
