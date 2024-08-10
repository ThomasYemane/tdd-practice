const { expect } = require('chai');
const filterWords = require('../src/filterWords');

describe('filterWords Function', () => {
    it('should filter out words ending in "er"', () => {
        const input = ['runner', 'swimmer', 'teacher', 'student', 'player'];
        const expectedOutput = ['student'];
        const result = filterWords(input);
        expect(result).to.deep.equal(expectedOutput);
    });

    it('should return the same array if no words end in "er"', () => {
        const input = ['cat', 'dog', 'fish'];
        const expectedOutput = ['cat', 'dog', 'fish'];
        const result = filterWords(input);
        expect(result).to.deep.equal(expectedOutput);
    });

    it('should return an empty array if all words end in "er"', () => {
        const input = ['runner', 'swimmer', 'teacher'];
        const expectedOutput = [];
        const result = filterWords(input);
        expect(result).to.deep.equal(expectedOutput);
    });
});
