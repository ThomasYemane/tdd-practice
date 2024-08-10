const { expect } = require('chai');
const NumberManipulator = require('../src/numberManipulator');

describe('NumberManipulator Class', () => {
    let numManipulator;

    beforeEach(() => {
        numManipulator = new NumberManipulator(10);
    });

    it('should multiply the number correctly', () => {
        const result = numManipulator.multiply(2);
        expect(result).to.equal(20);
    });

    it('should add to the number correctly', () => {
        const result = numManipulator.add(5);
        expect(result).to.equal(15);
    });

    it('should subtract from the number correctly', () => {
        const result = numManipulator.subtract(3);
        expect(result).to.equal(7);
    });

    it('should divide the number correctly', () => {
        const result = numManipulator.divide(2);
        expect(result).to.equal(5);
    });

    it('should throw an error when dividing by zero', () => {
        expect(() => numManipulator.divide(0)).to.throw('Cannot divide by zero');
    });
});
