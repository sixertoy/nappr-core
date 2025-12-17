export const getPercentage = (
  percent: number | string,
  value: number,
): number => (value * Number(percent)) / 100;
