const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('calls console.log with the correct arguments', () => {
    // Spy on console.log
    const consoleSpy = sinon.spy(console, 'log');
    // Stub Utils.calculateNumber to control its output
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Call the function being tested
    sendPaymentRequestToApi(100, 20);

    // Assertions
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true; // Stub called with correct arguments
    expect(calculateNumberStub.calledOnce).to.be.true; // Stub called exactly once
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true; // Spy captured correct log message
    expect(consoleSpy.calledOnce).to.be.true; // Spy called exactly once

    // Restore the stub and spy to their original states
    calculateNumberStub.restore();
    consoleSpy.restore();
  });
});
