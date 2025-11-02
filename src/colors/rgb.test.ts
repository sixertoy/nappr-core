import rgb from './rgb';
describe('rgb', () => {
  it('should convert hex to rgb string', () => {
    expect(rgb('#FF0000')).toBe('rgb(255, 0, 0)');
  });
  it('should convert white to rgb', () => {
    expect(rgb('#FFFFFF')).toBe('rgb(255, 255, 255)');
  });
  it('should convert black to rgb', () => {
    expect(rgb('#000000')).toBe('rgb(0, 0, 0)');
  });
  it('should handle lowercase hex', () => {
    expect(rgb('#ff00ff')).toBe('rgb(255, 0, 255)');
  });
});
