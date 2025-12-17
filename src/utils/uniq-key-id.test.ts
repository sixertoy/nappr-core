import { uniqKeyId } from './uniq-key-id';

describe('uniqKeyId', () => {
  it('should create unique key from string arguments', () => {
    expect(uniqKeyId('a', 'b', 'c')).toBe('::a::b::c');
  });

  it('should handle array arguments', () => {
    expect(uniqKeyId(['a', 'b'], 'c')).toBe('::a::b::c');
  });

  it('should return undefined for empty arguments', () => {
    expect(uniqKeyId()).toBeUndefined();
  });

  it('should return undefined for empty array', () => {
    expect(uniqKeyId([])).toBeUndefined();
  });

  it('should handle mixed string and array arguments', () => {
    expect(uniqKeyId('prefix', ['a', 'b'], 'suffix')).toBe(
      '::prefix::a::b::suffix',
    );
  });

  it('should use default splitter', () => {
    expect(uniqKeyId('a', 'b')).toBe('::a::b');
  });

  it('should handle single argument', () => {
    expect(uniqKeyId('single')).toBe('::single');
  });
});
