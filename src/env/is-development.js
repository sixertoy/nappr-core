const isDevelopment = () => {
  try {
    const { NODE_ENV } = (process && process.env) || {};
    return (
      NODE_ENV === 'development' ||
      NODE_ENV === 'local' ||
      NODE_ENV === '' ||
      !NODE_ENV
    );
  } catch (err) {
    return false;
  }
};

export default isDevelopment;
