const isEmptyString = val => {
  const isBoolean = typeof val === 'boolean';
  const isFunction = typeof val === 'function';
  if (isFunction || isBoolean) return false;
  if (!val) return true;
  if (typeof val === 'string' && val.trim() === '') return true;
  if (Array.isArray(val) && val.length <= 0) return true;
  return false;
};

export default isEmptyString;
