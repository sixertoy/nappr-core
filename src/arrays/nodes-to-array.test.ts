import nodesToArray from './nodes-to-array';

describe('nodesToArray', () => {
  it('should convert NodeList to array', () => {
    const mockNodeList = {
      0: document.createElement('div'),
      1: document.createElement('span'),
      2: document.createElement('p'),
      length: 3,
    };
    mockNodeList[Symbol.iterator] = function* () {
      for (let i = 0; i < this.length; i++) {
        yield this[i];
      }
    };

    const result = nodesToArray(mockNodeList);
    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(3);
  });

  it('should return array as-is when already an array', () => {
    const arr = [1, 2, 3];
    const result = nodesToArray(arr);
    expect(result).toEqual([1, 2, 3]);
    expect(Array.isArray(result)).toBe(true);
  });

  it('should handle empty NodeList', () => {
    const emptyNodeList = { length: 0 };
    emptyNodeList[Symbol.iterator] = function* () {};
    const result = nodesToArray(emptyNodeList);
    expect(result).toEqual([]);
  });
});
