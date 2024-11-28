const mocha = require('mocha');  // Explicitly importing Mocha
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

mocha.describe('calculateNumber', () => {
    mocha.describe('SUM', () => {
      mocha.it('rounding 1 and 3', () => {
        expect(calculateNumber('SUM', 1, 3)).to.equal(4);
      });
      mocha.it('rounding 1 and 3.7', () => {
        expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
      });
      mocha.it('rounding 1.2 and 3.7', () => {
        expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
      });
      mocha.it('rounding 1.5 and 3.7', () => {
        expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
      });
      mocha.it('rounding 1.4 and 4.5', () => {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      });
      mocha.it('negative sum', () => {
        expect(calculateNumber('SUM', -1.3, -3.7)).to.equal(-5);
      });
    });
    mocha.describe('SUBTRACT', () => {
      mocha.it('rounding 1 and 3', () => {
        expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
      });
      mocha.it('rounding 1 and 3.7', () => {
        expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
      });
      mocha.it('rounding 6.2 and 3.7', () => {
        expect(calculateNumber('SUBTRACT', 6.2, 3.7)).to.equal(2);
      });
      mocha.it('rounding 5.5 and 3.7', () => {
        expect(calculateNumber('SUBTRACT', 5.5, 3.7)).to.equal(2);
      });
      mocha.it('rounding 1.4 and 4.5', () => {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      });
      mocha.it('negative subtract', () => {
        expect(calculateNumber('SUBTRACT', -1.3, -3.7)).to.equal(3);
      });
    });
    mocha.describe('DIVIDE', () => {
      mocha.it('rounding 3 and 1', () => {
        expect(calculateNumber('DIVIDE', 3, 1)).to.equal(3);
      });
      mocha.it('rounding 4 and 3.7', () => {
        expect(calculateNumber('DIVIDE', 4, 3.7)).to.equal(1);
      });
      mocha.it('rounding 2.2 and 0.7', () => {
        expect(calculateNumber('DIVIDE', 2.2, 0.7)).to.equal(2);
      });
      mocha.it('rounding 15 and 2.7', () => {
        expect(calculateNumber('DIVIDE', 15, 2.7)).to.equal(5);
      });
      mocha.it('rounding 1.4 and 4.5', () => {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
      });
      mocha.it('division by zero', () => {
        expect(calculateNumber('DIVIDE', -1.3, 0)).to.equal('Error');
      });
    });
});
