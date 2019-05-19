const removeWhitespaces = val => {
  if (typeof val !== 'string' || !val.length) return val;
  let value = val.trim();
  value = value.replace(/&nbsp;/g, '\u0020');
  value = value.replace(/\s+/g, '');
  return value;
};

export default removeWhitespaces;
