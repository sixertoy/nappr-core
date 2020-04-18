const isProduction = () => {
  try {
    const { NODE_ENV } = (process && process.env) || {};
    return NODE_ENV === 'production';
  } catch (err) {
    return true;
  }
};

export default isProduction;
