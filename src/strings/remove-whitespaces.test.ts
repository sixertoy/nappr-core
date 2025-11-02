import removeWhitespaces from './remove-whitespaces';

describe('removeWhitespaces', () => {
  it('should remove all whitespaces from string', () => {
    expect(removeWhitespaces('hello world')).toBe('helloworld');
  });

  it('should remove multiple spaces', () => {
    expect(removeWhitespaces('hello    world')).toBe('helloworld');
  });

  it('should trim and remove whitespaces', () => {
    expect(removeWhitespaces('  hello world  ')).toBe('helloworld');
  });

  it('should replace &nbsp; with space then remove', () => {
    expect(removeWhitespaces('hello&nbsp;world')).toBe('helloworld');
  });

  it('should handle empty string', () => {
    expect(removeWhitespaces('')).toBe('');
  });

  it('should return non-string values as-is', () => {
    expect(removeWhitespaces(null)).toBe(null);
    expect(removeWhitespaces(123)).toBe(123);
    expect(removeWhitespaces(undefined)).toBe(undefined);
  });

  it('should handle string with only whitespaces', () => {
    expect(removeWhitespaces('   ')).toBe('');
  });
});
