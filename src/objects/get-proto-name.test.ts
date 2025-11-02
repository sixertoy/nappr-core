import getProtoName from './get-proto-name';

describe('getProtoName', () => {
  it('should return constructor name for class instance', () => {
    class TestClass {}
    const instance = new TestClass();
    expect(getProtoName(instance)).toBe('TestClass');
  });

  it('should return Array for array instance', () => {
    expect(getProtoName([])).toBe('Array');
  });

  it('should return Object for object instance', () => {
    expect(getProtoName({})).toBe('Object');
  });

  it('should return String for string instance', () => {
    expect(getProtoName(new String('test'))).toBe('String');
  });

  it('should return Number for number instance', () => {
    expect(getProtoName(new Number(42))).toBe('Number');
  });
});
