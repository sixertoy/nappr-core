import hexToRGB from './hex-to-rgb';
describe('hexToRGB', () => {
  it('should convert hex color to RGB array', () => {
    expect(hexToRGB('#FF0000')).toEqual([255, 0, 0]);
  });
  it('should convert white to RGB', () => {
    expect(hexToRGB('#FFFFFF')).toEqual([255, 255, 255]);
  });
  it('should convert black to RGB', () => {
    expect(hexToRGB('#000000')).toEqual([0, 0, 0]);
  });
  it('should convert lowercase hex', () => {
    expect(hexToRGB('#ff00ff')).toEqual([255, 0, 255]);
  });
  it('should handle mixed case hex', () => {
    expect(hexToRGB('#aAbBcC')).toEqual([170, 187, 204]);
  });
});
