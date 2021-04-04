export const hexToLuma = hexstr => {
  const hex = hexstr.replace(/#/, '');
  const red = parseInt(hex.substr(0, 2), 16);
  const green = parseInt(hex.substr(2, 2), 16);
  const blue = parseInt(hex.substr(4, 2), 16);
  const colors = [0.299 * red, 0.587 * green, 0.114 * blue];
  return colors.reduce((a, b) => a + b) / 255;
};

export default hexToLuma;
