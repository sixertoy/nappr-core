import { move } from './move';

describe('move', () => {
  it('should move element from higher index to lower index (left)', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(move(arr, 3, 1)).toEqual([1, 4, 2, 3, 5]);
  });

  it('should move element from lower index to higher index (right)', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(move(arr, 1, 3)).toEqual([1, 3, 4, 2, 5]);
  });

  it('should return the same array when from and to are the same', () => {
    const arr = [1, 2, 3];
    expect(move(arr, 1, 1)).toEqual([1, 2, 3]);
  });

  it('should move element to the beginning', () => {
    const arr = [1, 2, 3, 4];
    expect(move(arr, 2, 0)).toEqual([3, 1, 2, 4]);
  });

  it('should move element to the end', () => {
    const arr = [1, 2, 3, 4];
    expect(move(arr, 0, 3)).toEqual([2, 3, 4, 1]);
  });

  it('should handle single element array', () => {
    const arr = [1];
    expect(move(arr, 0, 0)).toEqual([1]);
  });

  it('should handle arrays with different types', () => {
    const arr = ['a', 'b', 1, 2, null];
    expect(move(arr, 4, 0)).toEqual([null, 'a', 'b', 1, 2]);
  });
});
