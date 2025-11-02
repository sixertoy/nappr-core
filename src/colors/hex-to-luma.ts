export const hexToLuma = (hexstr: string): number => {
  const hex = hexstr.replace(/#/, '');
  const red = parseInt(hex.substring(0, 2), 16);
  const green = parseInt(hex.substring(2, 4), 16);
  const blue = parseInt(hex.substring(4, 6), 16);
  const colors = [0.299 * red, 0.587 * green, 0.114 * blue];
  return colors.reduce((a, b) => a + b, 0) / 255;
};
export default hexToLuma;
