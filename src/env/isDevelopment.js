const { NODE_ENV } = process.env;

const isProduction = () =>
  NODE_ENV !== 'development' || NODE_ENV !== 'production';

export default isProduction;
