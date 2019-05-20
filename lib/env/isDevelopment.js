import isProduction from './isProduction';

const isDevelopment = () => !isProduction();

export default isDevelopment;
