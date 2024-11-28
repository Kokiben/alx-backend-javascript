const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when inputs are 1 and 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round and return 5 when inputs are 1.4 and 3.6', () => {
    assert.strictEqual(calculateNumber(1.4, 3.6), 5);
  });

  it('should round and return 6 when inputs are 2.5 and 3.5', () => {
    assert.strictEqual(calculateNumber(2.5, 3.5), 6);
  });

  it('should handle negative numbers correctly', () => {
    assert.strictEqual(calculateNumber(-1.4, -3.6), -5);
  });

  it('should handle a mix of positive and negative numbers', () => {
    assert.strictEqual(calculateNumber(-1.4, 3.6), 3);
  });

  it('should handle inputs where rounding does not change values', () => {
    assert.strictEqual(calculateNumber(2, 2), 4);
  });

  it('should handle inputs where one value is 0', () => {
    assert.strictEqual(calculateNumber(0, 3.6), 4);
  });
});
