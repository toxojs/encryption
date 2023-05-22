const { hashPassword, checkPassword, isHash } = require('../src');

describe('Hash', () => {
  describe('hashPassword', () => {
    it('Should generate a hash', async () => {
      const actual = await hashPassword('secret');
      expect(typeof actual).toBe('string');
      expect(actual).not.toEqual('secret');
    });
  });

  describe('checkPassword', () => {
    it('should return true if password matches hash', async () => {
      const input = 'secret';
      const hash = await hashPassword('secret');
      const actual = await checkPassword(input, hash);
      expect(actual).toBe(true);
    });
    it('should return false if password does not matches hash', async () => {
      const input = 'secret';
      const hash = await hashPassword('secreto');
      const actual = await checkPassword(input, hash);
      expect(actual).toBe(false);
    });
  });

  describe('isHash', () => {
    it('should return true if string is a hash', async () => {
      const actual = await hashPassword('secret');
      expect(isHash(actual)).toBe(true);
    });
    it('should return true if string is not a hash', () => {
      expect(isHash('secret')).toBe(false);
    });
  });
});
