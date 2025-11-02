import isString from './is-string';

const isEmpty = (str: unknown): boolean => {
  if (!str || !isString(str)) return false;
  if (typeof str === 'string' && str.trim() === '') return true;
  if (Array.isArray(str) && str.length <= 0) return true;
  return false;
};
export default isEmpty;
