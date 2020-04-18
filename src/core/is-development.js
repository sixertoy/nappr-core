const { NODE_ENV } = (process && process.env) || {};

const isDevelopment = () =>
  NODE_ENV === 'development' ||
  NODE_ENV === 'local' ||
  NODE_ENV === '' ||
  !NODE_ENV;

export default isDevelopment;
