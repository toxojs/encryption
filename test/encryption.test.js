const { encrypt, decrypt } = require('../src');

describe('Encryption', () => {
  describe('encrypt', () => {
    it('Should generate an string, length 65, with : in position 32', () => {
      const actual = encrypt('secret', 'this is a text');
      expect(typeof actual).toBe('string');
      expect(actual).toHaveLength(65);
      expect(actual[32]).toBe(':');
    });
  });

  describe('decrypt', () => {
    it('Should decrypt an string', () => {
      const actual = decrypt(
        'secret',
        '5c17d2f2d37e23debf43fa26743b2b01:1c4caff50f51d1346e1447f932bf9c5b'
      );
      expect(actual).toBe('this is a test');
    });
  });
});
