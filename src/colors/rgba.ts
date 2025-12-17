import { hexToRGB } from './hex-to-rgb';

export const rgba = (hex: string, alpha: number): string => {
  const [r, g, b] = hexToRGB(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
