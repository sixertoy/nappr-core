import { hexToRGB } from './hex-to-rgb';

export const rgba = (hex, alpha) => {
  const [r, g, b] = hexToRGB(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export default rgba;
