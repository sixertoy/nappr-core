import { isDevelopment } from './is-development';

describe('isDevelopment', () => {
  const originalEnv = process.env.NODE_ENV;

  afterEach(() => {
    process.env.NODE_ENV = originalEnv;
  });

  it('should return true when NODE_ENV is development', () => {
    process.env.NODE_ENV = 'development';
    expect(isDevelopment()).toBe(true);
  });

  it('should return true when NODE_ENV is local', () => {
    process.env.NODE_ENV = 'local';
    expect(isDevelopment()).toBe(true);
  });

  it('should return true when NODE_ENV is empty', () => {
    process.env.NODE_ENV = '';
    expect(isDevelopment()).toBe(true);
  });

  it('should return true when NODE_ENV is undefined', () => {
    delete process.env.NODE_ENV;
    expect(isDevelopment()).toBe(true);
  });

  it('should return false when NODE_ENV is production', () => {
    process.env.NODE_ENV = 'production';
    expect(isDevelopment()).toBe(false);
  });
});
