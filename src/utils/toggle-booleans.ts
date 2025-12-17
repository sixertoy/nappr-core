export const toggleBooleans = (
  boolVal: boolean,
  shouldToggle = false,
): boolean => {
  if (!shouldToggle) {
    return boolVal;
  }
  // eslint-disable-next-line no-bitwise
  const result = !!(Number(shouldToggle) ^ Number(boolVal));
  return result;
};
