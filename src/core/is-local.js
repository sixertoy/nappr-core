const { NODE_ENV } = process.env;

const isLocal = () => NODE_ENV === 'local';

export default isLocal;
