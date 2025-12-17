import { isLocal } from './is-local';

describe('isLocal', () => {
  const originalEnv = process.env.NODE_ENV;

  afterEach(() => {
    process.env.NODE_ENV = originalEnv;
  });

  it('should return true when NODE_ENV is local', () => {
    process.env.NODE_ENV = 'local';
    expect(isLocal()).toBe(true);
  });

  it('should return false when NODE_ENV is development', () => {
    process.env.NODE_ENV = 'development';
    expect(isLocal()).toBe(false);
  });

  it('should return false when NODE_ENV is production', () => {
    process.env.NODE_ENV = 'production';
    expect(isLocal()).toBe(false);
  });

  it('should return false when NODE_ENV is undefined', () => {
    delete process.env.NODE_ENV;
    expect(isLocal()).toBe(false);
  });
});
