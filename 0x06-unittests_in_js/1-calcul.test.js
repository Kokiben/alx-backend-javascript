const assert = require('assert');
const mocha = require('mocha');
const calculateNumber = require('./1-calcul');

mocha.describe('calculateNumber', () => {
    mocha.it('should sum two numbers', () => {
        assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    mocha.it('should subtract two numbers', () => {
        assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    mocha.it('should divide two numbers', () => {
        assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    mocha.it('should return "Error" when dividing by zero', () => {
        assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    mocha.it('should return "Error" for invalid input', () => {
        assert.equal(calculateNumber(5, 1, 4), 'Error');
    });

    mocha.it('should return "Error" for unsupported operation', () => {
        assert.equal(calculateNumber('plus', 1, 4), 'Error');
    });
});
