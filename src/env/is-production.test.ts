import isProduction from './is-production';

describe('isProduction', () => {
  const originalEnv = process.env.NODE_ENV;

  afterEach(() => {
    process.env.NODE_ENV = originalEnv;
  });

  it('should return true when NODE_ENV is production', () => {
    process.env.NODE_ENV = 'production';
    expect(isProduction()).toBe(true);
  });

  it('should return false when NODE_ENV is development', () => {
    process.env.NODE_ENV = 'development';
    expect(isProduction()).toBe(false);
  });

  it('should return true when NODE_ENV is undefined (default)', () => {
    delete process.env.NODE_ENV;
    expect(isProduction()).toBe(true);
  });
});
