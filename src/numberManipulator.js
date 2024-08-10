class NumberManipulator {
    constructor(number) {
        this.number = number;
    }

    multiply(factor) {
        this.number *= factor;
        return this.number;
    }

    add(amount) {
        this.number += amount;
        return this.number;
    }

    subtract(amount) {
        this.number -= amount;
        return this.number;
    }

    divide(divisor) {
        if (divisor === 0) {
            throw new Error('Cannot divide by zero');
        }
        this.number /= divisor;
        return this.number;
    }
}

module.exports = NumberManipulator;
