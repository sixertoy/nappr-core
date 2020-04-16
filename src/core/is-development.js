const { NODE_ENV } = process.env;

const isDevelopment = () => NODE_ENV === 'development' || NODE_ENV === 'local';

export default isDevelopment;
