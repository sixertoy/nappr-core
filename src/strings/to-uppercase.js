import isString from './is-string';

const toLowerCase = str => {
  if (!isString(str)) return str;
  return str.toUpperCase();
};

export default toLowerCase;
