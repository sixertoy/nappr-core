import { hexToRGB } from './hex-to-rgb';

export const rgb = hex => {
  const [r, g, b] = hexToRGB(hex);
  return `rgb(${r}, ${g}, ${b})`;
};

export default rgb;
