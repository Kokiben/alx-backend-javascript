const { expect } = require('chai');

describe('Number equality checks', () => {
  it('Checking if 1 equals 1', () => {
    expect(1 === 1).to.be.true;
  });

  it('Checking if 2 equals 2', () => {
    expect(2 === 2).to.be.true;
  });

  it.skip('Checking if 1 equals 3', () => {
    expect(1 === 3).to.be.true;
  });

  it('Checking if 3 equals 3', () => {
    expect(3 === 3).to.be.true;
  });

  it('Checking if 4 equals 4', () => {
    expect(4 === 4).to.be.true;
  });

  it('Checking if 5 equals 5', () => {
    expect(5 === 5).to.be.true;
  });

  it('Checking if 6 equals 6', () => {
    expect(6 === 6).to.be.true;
  });

  it('Checking if 7 equals 7', () => {
    expect(7 === 7).to.be.true;
  });
});
