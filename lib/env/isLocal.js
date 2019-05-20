const isProduction = () => {
  return process.env.NODE_ENV === 'local';
};

export default isProduction;
