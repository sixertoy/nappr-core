import mirrorKeys from './mirror-Keys';

describe('mirrorKeys', () => {
  it('should mirror array keys to object', () => {
    expect(mirrorKeys(['a', 'b', 'c'])).toEqual({ a: 'a', b: 'b', c: 'c' });
  });

  it('should mirror object keys to same values', () => {
    expect(mirrorKeys({ a: 1, b: 2 })).toEqual({ a: 'a', b: 'b' });
  });

  it('should return same value for invalid input', () => {
    expect(mirrorKeys(null)).toBe(null);
    expect(mirrorKeys('string')).toBe('string');
    expect(mirrorKeys(123)).toBe(123);
  });

  it('should handle empty array', () => {
    expect(mirrorKeys([])).toEqual({});
  });

  it('should handle empty object', () => {
    expect(mirrorKeys({})).toEqual({});
  });

  it('should apply modifiers when provided', () => {
    const upperCase = (str) => str.toUpperCase();
    expect(mirrorKeys(['a', 'b'], [upperCase])).toEqual({ a: 'A', b: 'B' });
  });

  it('should filter out non-function modifiers', () => {
    const upperCase = (str) => str.toUpperCase();
    expect(mirrorKeys(['a', 'b'], [upperCase, 'not-a-function' as any])).toEqual({
      a: 'A',
      b: 'B',
    });
  });
});
