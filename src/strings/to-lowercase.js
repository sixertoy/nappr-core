import isString from './is-string';

const toLowerCase = str => {
  if (!isString(str)) return str;
  return str.toLowerCase();
};

export default toLowerCase;
