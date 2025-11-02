const isLocal = (): boolean => {
  try {
    const env = typeof process !== 'undefined' ? process.env : undefined;
    const { NODE_ENV } = env || {};
    return NODE_ENV === 'local';
  } catch {
    return false;
  }
};
export default isLocal;
