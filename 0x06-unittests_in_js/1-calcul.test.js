const assert = require('assert');
require('mocha');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
    it('should return 6 when summing 1.4 and 4.5', function () {
        assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should return -4 when subtracting 4.5 from 1.4', function () {
        assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should return 0.2 when dividing 1.4 by 4.5', function () {
        assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when dividing by 0', function () {
        assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return "Error" for invalid operation type', function () {
        assert.equal(calculateNumber(5, 1, 4), 'Error'); // Invalid operation type
    });

    it('should return "Error" for unsupported operation "other"', function () {
        assert.equal(calculateNumber('other', 1, 4), 'Error'); // Invalid operation type
    });
});
