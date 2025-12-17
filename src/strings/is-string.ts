export const isString = (str: unknown): str is string => Boolean(str && typeof str === 'string');
