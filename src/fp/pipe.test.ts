
import pipe from './pipe';

describe('pipe', () => {
  it('should pipe functions from left to right', () => {
    const add1 = (x) => x + 1;
    const multiply2 = (x) => x * 2;
    const piped = pipe(add1, multiply2);

    expect(piped(3)).toBe(8); // (3 + 1) * 2 = 8
  });

  it('should handle multiple functions', () => {
    const add1 = (x) => x + 1;
    const multiply2 = (x) => x * 2;
    const subtract3 = (x) => x - 3;
    const piped = pipe(add1, multiply2, subtract3);

    expect(piped(3)).toBe(5); // ((3 + 1) * 2) - 3 = 5
  });

  it('should be opposite of compose', () => {
    const add1 = (x) => x + 1;
    const multiply2 = (x) => x * 2;
    const piped = pipe(add1, multiply2);
    const composed = pipe(multiply2, add1);

    expect(piped(3)).not.toBe(composed(3));
  });
});
