// $(yarn bin)/jest --env=jsdom ./src/components/tests/component.spec.js --watch
import { noop } from '../noop';

describe('src | core | fp', () => {
  describe('noop', () => {
    it('return same value', () => {
      const value = null;
      const expected = value;
      const result = noop(value);
      expect(result).toStrictEqual(expected);
    });
  });
});
