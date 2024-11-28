const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    it('should sum two numbers', () => {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should subtract two numbers', () => {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should divide two numbers', () => {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when dividing by zero', () => {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return "Error" for invalid input', () => {
        expect(calculateNumber(5, 1, 4)).to.equal('Error');
    });

    it('should return "Error" for unsupported operation', () => {
        expect(calculateNumber('plus', 1, 4)).to.equal('Error');
    });
});
