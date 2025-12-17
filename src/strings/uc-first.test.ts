import { ucfirst } from './uc-first';

describe('ucfirst', () => {
  it('should uppercase first letter', () => {
    expect(ucfirst('hello')).toBe('Hello');
  });

  it('should handle empty string', () => {
    expect(ucfirst('')).toBe('');
  });

  it('should handle single character', () => {
    expect(ucfirst('a')).toBe('A');
  });

  it('should handle already uppercase first letter', () => {
    expect(ucfirst('Hello')).toBe('Hello');
  });
});
