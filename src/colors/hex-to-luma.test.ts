import hexToLuma from './hex-to-luma';
describe('hexToLuma', () => {
  it('should calculate luma for white', () => {
    expect(hexToLuma('#FFFFFF')).toBeCloseTo(1, 2);
  });
  it('should calculate luma for black', () => {
    expect(hexToLuma('#000000')).toBeCloseTo(0, 2);
  });
  it('should handle hex without hash', () => {
    const withHash = hexToLuma('#FFFFFF');
    const withoutHash = hexToLuma('FFFFFF');
    expect(withHash).toBeCloseTo(withoutHash, 2);
  });
  it('should return value between 0 and 1', () => {
    const luma = hexToLuma('#FF0000');
    expect(luma).toBeGreaterThanOrEqual(0);
    expect(luma).toBeLessThanOrEqual(1);
  });
});
