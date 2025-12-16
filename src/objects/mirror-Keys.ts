type Parser = (value: string) => string;

const parseArray = (vals: string[]): Record<string, string> =>
  vals.reduce((acc, val) => ({ ...acc, [val]: val }), {});

const parseObject = (vals: Record<string, unknown>): Record<string, string> =>
  Object.keys(vals).reduce((acc, val) => ({ ...acc, [val]: val }), {});

const mirrorKeys = (
  keys: unknown,
  parsers: Parser[] = []
): unknown => {
  const isarray = Array.isArray(keys);

  const isobject =
    keys !== null && typeof keys === 'object' && !Array.isArray(keys);
  const isvalid = isarray || isobject;

  if (!isvalid) {
    return keys;
  }

  const modifiers = parsers.filter(
    (fn): fn is Parser => typeof fn === 'function'
  );

  let result: Record<string, string | undefined> = isarray
    ? parseArray(keys as string[])
    : parseObject(keys as Record<string, unknown>);

  if (!modifiers || !modifiers.length) return result;
  result = Object.keys(result).reduce((acc, key) => {
    const modifiedValue = modifiers.reduce(
      (prevacc: string | undefined, fn) =>
        (prevacc && fn(prevacc)) || fn(key),
      undefined
    );

    return { ...acc, [key]: modifiedValue };
  }, {} as Record<string, string | undefined>);
  return result;
};
export default mirrorKeys;
