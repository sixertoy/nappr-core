export const hexToRGB = (hex: string): [number, number, number] => {
  return [
    parseInt(hex.slice(1, 3), 16), // red
    parseInt(hex.slice(3, 5), 16), // green
    parseInt(hex.slice(5, 7), 16), // blue
  ];
};
export default hexToRGB;
