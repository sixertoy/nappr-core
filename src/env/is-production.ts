export const isProduction = (): boolean => {
  try {
    const env = typeof process !== 'undefined' ? process.env : undefined;
    const { NODE_ENV } = env || {};
    return NODE_ENV === 'production';
  } catch {
    return true;
  }
};
