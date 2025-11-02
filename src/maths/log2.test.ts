import log2 from './log2';

describe('log2', () => {
  it('should calculate base 2 logarithm', () => {
    expect(log2(8)).toBeCloseTo(3);
  });

  it('should handle 1', () => {
    expect(log2(1)).toBe(0);
  });

  it('should handle 2', () => {
    expect(log2(2)).toBeCloseTo(1);
  });

  it('should handle 4', () => {
    expect(log2(4)).toBeCloseTo(2);
  });

  it('should handle 16', () => {
    expect(log2(16)).toBeCloseTo(4);
  });
});
