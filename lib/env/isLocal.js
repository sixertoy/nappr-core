const { NODE_ENV } = process.env;

const isProduction = () => NODE_ENV === 'local';

export default isProduction;
