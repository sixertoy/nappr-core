import isString from './isString';

const toLowerCase = str => {
  if (!isString(str)) return str;
  return str.toUpperCase();
};

export default toLowerCase;
