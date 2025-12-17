export const isDevelopment = (): boolean => {
  try {
    const env = typeof process !== 'undefined' ? process.env : undefined;
    const { NODE_ENV } = env || {};
    return (
      NODE_ENV === 'development' ||
      NODE_ENV === 'local' ||
      NODE_ENV === '' ||
      !NODE_ENV
    );
  } catch {
    return false;
  }
};
