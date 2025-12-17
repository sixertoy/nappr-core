import { isEmptyString } from './is-empty-string';

describe('isEmptyString', () => {
  it('should return false for non-empty string', () => {
    expect(isEmptyString('hello')).toBe(false);
  });

  it('should return true for empty string', () => {
    expect(isEmptyString('')).toBe(true);
  });

  it('should return true for whitespace-only string', () => {
    expect(isEmptyString('   ')).toBe(true);
  });

  it('should return false for boolean values', () => {
    expect(isEmptyString(true)).toBe(false);
    expect(isEmptyString(false)).toBe(false);
  });

  it('should return false for function values', () => {
    expect(isEmptyString(() => {})).toBe(false);
    expect(isEmptyString(function () {})).toBe(false);
  });

  it('should return true for empty array', () => {
    expect(isEmptyString([])).toBe(true);
  });

  it('should return false for non-empty array', () => {
    expect(isEmptyString([1, 2])).toBe(false);
  });

  it('should return true for falsy non-boolean, non-function values', () => {
    expect(isEmptyString(null)).toBe(true);
    expect(isEmptyString(undefined)).toBe(true);
    expect(isEmptyString(0)).toBe(true);
  });
});
