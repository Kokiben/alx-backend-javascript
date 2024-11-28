const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('uses the calculateNumber method of Utils', () => {
    // Spy on the calculateNumber method of Utils
    const utilsSpy = sinon.spy(Utils, 'calculateNumber');

    // Call the function being tested
    sendPaymentRequestToApi(100, 20);

    // Assertions
    expect(utilsSpy.calledWith('SUM', 100, 20)).to.be.true; // Ensure calculateNumber is called with correct arguments
    expect(utilsSpy.callCount).to.equal(1); // Ensure calculateNumber is called exactly once

    // Restore the spy after the test
    utilsSpy.restore();
  });
});
