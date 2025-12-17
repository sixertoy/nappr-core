import { toggleBooleans } from './toggle-booleans';

describe('toggleBooleans', () => {
  it('should return the same value when shouldToggle is false', () => {
    expect(toggleBooleans(true, false)).toBe(true);
    expect(toggleBooleans(false, false)).toBe(false);
  });

  it('should toggle when shouldToggle is true and value is true', () => {
    expect(toggleBooleans(true, true)).toBe(false);
  });

  it('should toggle when shouldToggle is true and value is false', () => {
    expect(toggleBooleans(false, true)).toBe(true);
  });

  it('should use false as default for shouldToggle', () => {
    expect(toggleBooleans(true)).toBe(true);
    expect(toggleBooleans(false)).toBe(false);
  });
});
