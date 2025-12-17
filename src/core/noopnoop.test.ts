import { noopnoop } from './noopnoop';

describe('noopnoop', () => {
  it('should return undefined', () => {
    expect(noopnoop()).toBeUndefined();
  });

  it('should accept any arguments and return undefined', () => {
    expect(noopnoop(1, 2, 3)).toBeUndefined();
    expect(noopnoop('hello')).toBeUndefined();
  });
});
