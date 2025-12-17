import { slugify } from './slugify';

describe('slugify', () => {
  it('should convert text to slug', () => {
    expect(slugify('Hello World')).toBe('hello-world');
  });

  it('should handle empty string', () => {
    expect(slugify('')).toBe('');
  });

  it('should handle special characters', () => {
    expect(slugify('Hello & World')).toBe('hello-and-world');
  });

  it('should handle accented characters', () => {
    expect(slugify('Café')).toBe('cafe');
    expect(slugify('Résumé')).toBe('resume');
  });

  it('should remove multiple spaces', () => {
    expect(slugify('Hello    World')).toBe('hello-world');
  });

  it('should handle prefix', () => {
    expect(slugify('World', 'hello')).toBe('hello-world');
  });

  it('should handle suffix', () => {
    expect(slugify('Hello', '', 'world')).toBe('hello-world');
  });

  it('should handle both prefix and suffix', () => {
    expect(slugify('text', 'prefix', 'suffix')).toBe('prefix-text-suffix');
  });

  it('should remove leading and trailing hyphens', () => {
    expect(slugify('---Hello---')).toBe('hello');
  });

  it('should handle multiple consecutive hyphens', () => {
    expect(slugify('Hello---World')).toBe('hello-world');
  });

  it('should handle non-string input', () => {
    expect(slugify(null)).toBe('');
    expect(slugify(undefined)).toBe('');
  });
});
