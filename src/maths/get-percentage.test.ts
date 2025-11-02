import getPercentage from './get-percentage';

describe('getPercentage', () => {
  it('should calculate percentage correctly', () => {
    expect(getPercentage(50, 200)).toBe(100);
  });

  it('should handle 100 percent', () => {
    expect(getPercentage(100, 100)).toBe(100);
  });

  it('should handle 0 percent', () => {
    expect(getPercentage(0, 100)).toBe(0);
  });

  it('should handle decimal percentages', () => {
    expect(getPercentage(25.5, 100)).toBe(25.5);
  });

  it('should handle zero value', () => {
    expect(getPercentage(50, 0)).toBe(0);
  });

  it('should handle string numbers', () => {
    expect(getPercentage('50', '200')).toBe(100);
  });
});
