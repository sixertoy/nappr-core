const isLocal = () => {
  try {
    const { NODE_ENV } = (process && process.env) || {};
    return NODE_ENV === 'local';
  } catch (err) {
    return false;
  }
};

export default isLocal;
