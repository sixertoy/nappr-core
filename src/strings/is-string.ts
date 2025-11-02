const isString = (str: unknown): str is string =>
  Boolean(str && typeof str === 'string');
export default isString;
