const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
    it('should return 4 when adding 1 and 3', function() {
        assert.equal(calculateNumber('SUM', 1, 3), 4);
    });

    it('should return 5 when adding 1.2 and 3.7', function() {
        assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    });

    it('should return -1 when subtracting 3 from 2', function() {
        assert.equal(calculateNumber('SUBTRACT', 3, 2), 1);
    });

    it('should return -1 when subtracting 3.5 from 2.5', function() {
        assert.equal(calculateNumber('SUBTRACT', 3.5, 2.5), 1);
    });

    it('should return 2 when dividing 5 by 2', function() {
        assert.equal(calculateNumber('DIVIDE', 5, 2), 2);
    });

    it('should return "Error" when dividing by 0', function() {
        assert.equal(calculateNumber('DIVIDE', 5, 0), 'Error');
    });

    it('should return 2 when dividing 5.6 by 2.4', function() {
        assert.equal(calculateNumber('DIVIDE', 5.6, 2.4), 2);
    });

    it('should return "Error" when dividing by 0 after rounding', function() {
        assert.equal(calculateNumber('DIVIDE', 5.1, 0.4), 'Error');
    });
});
