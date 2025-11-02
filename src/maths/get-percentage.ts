const getPercentage = (percent: number | string, value: number): number =>
  (value * Number(percent)) / 100;

export default getPercentage;
