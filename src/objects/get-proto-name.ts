const FUNC_NAME_REGEX = /function (.{1,})\(/;

export const getProtoName = (instance: unknown): string => {
  if (
    typeof instance !== 'object' ||
    instance === null ||
    !('constructor' in instance)
  ) {
    return '';
  }
  const constructor = instance.constructor as { name?: string };
  let { name } = constructor;
  if (name) return name;
  const results = FUNC_NAME_REGEX.exec(constructor.toString());
  name = results && results.length > 1 ? results[1] : '';
  return name;
};
