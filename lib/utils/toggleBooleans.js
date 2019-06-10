const toggleBooleans = (boolVal, shouldToggle = false) => {
  if (!shouldToggle) return boolVal;
  // eslint-disable-next-line no-bitwise
  const result = !!(shouldToggle ^ boolVal);
  return result;
};

export default toggleBooleans;
