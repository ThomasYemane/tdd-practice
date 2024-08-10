const { expect } = require('chai');
const reverseWords = require('../src/reverseWords');

describe('reverseWords Function', () => {
    it('should return an array with each word reversed', () => {
        const input = ['hello', 'world'];
        const expectedOutput = ['olleh', 'dlrow'];
        const result = reverseWords(input);
        expect(result).to.deep.equal(expectedOutput);
    });

    it('should handle an empty array', () => {
        const input = [];
        const expectedOutput = [];
        const result = reverseWords(input);
        expect(result).to.deep.equal(expectedOutput);
    });
});
