import { compose } from './compose';

describe('compose', () => {
  it('should compose functions from right to left', () => {
    const add1 = (x) => x + 1;
    const multiply2 = (x) => x * 2;
    const composed = compose(multiply2, add1);

    expect(composed(3)).toBe(8); // (3 + 1) * 2 = 8
  });

  it('should handle multiple functions', () => {
    const add1 = (x) => x + 1;
    const multiply2 = (x) => x * 2;
    const subtract3 = (x) => x - 3;
    const composed = compose(subtract3, multiply2, add1);

    expect(composed(3)).toBe(5); // ((3 + 1) * 2) - 3 = 5
  });

  it('should return identity function when no functions provided', () => {
    const composed = compose();
    expect(composed(42)).toBe(42);
  });

  it('should handle single function', () => {
    const double = (x) => x * 2;
    const composed = compose(double);
    expect(composed(5)).toBe(10);
  });
});
