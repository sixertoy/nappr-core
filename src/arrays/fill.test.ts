import { fill } from './fill';

describe('fill', () => {
  it('should create an array with n values starting from 0', () => {
    expect(fill(5)).toEqual([0, 1, 2, 3, 4]);
  });

  it('should return an empty array when n is 0', () => {
    expect(fill(0)).toEqual([]);
  });

  it('should handle single element', () => {
    expect(fill(1)).toEqual([0]);
  });

  it('should handle large numbers', () => {
    const result = fill(10);
    expect(result).toHaveLength(10);
    expect(result[0]).toBe(0);
    expect(result[9]).toBe(9);
  });
});
