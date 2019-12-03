import isString from './is-string';

const toUpperCase = str => {
  if (!isString(str)) return str;
  return str.toUpperCase();
};

export default toUpperCase;
