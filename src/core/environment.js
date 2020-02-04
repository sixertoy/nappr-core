const { NODE_ENV } = process.env;

export const isLocal = () => NODE_ENV === 'local';

export const isDevelopment = () => NODE_ENV === 'local';

export const isProduction = () => NODE_ENV === 'production';
