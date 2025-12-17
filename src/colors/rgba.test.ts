import { rgba } from './rgba';

describe('rgba', () => {
  it('should convert hex to rgba string', () => {
    expect(rgba('#FF0000', 0.5)).toBe('rgba(255, 0, 0, 0.5)');
  });
  it('should convert white to rgba', () => {
    expect(rgba('#FFFFFF', 1)).toBe('rgba(255, 255, 255, 1)');
  });
  it('should convert black to rgba', () => {
    expect(rgba('#000000', 0)).toBe('rgba(0, 0, 0, 0)');
  });
  it('should handle different alpha values', () => {
    expect(rgba('#FF0000', 0.25)).toBe('rgba(255, 0, 0, 0.25)');
    expect(rgba('#00FF00', 0.75)).toBe('rgba(0, 255, 0, 0.75)');
  });
});
