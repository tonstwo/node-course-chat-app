const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var isString = isRealString(2);
        expect(isString).toBe(false);
    });

    it('should reject string of just spaces', () => {
        var validString = isRealString('    ');
        expect(validString).toBe(false);
    });

    it('should allow strings with non-space characters', () => {
        var validString = isRealString('  L O T R  ');
        expect(validString).toBe(true);
    });
});