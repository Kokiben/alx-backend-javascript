const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    // Set up a spy on console.log before each test
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the original console.log after each test
    consoleSpy.restore();
  });

  it('Logs correct total for inputs 100 and 20 to the console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true; // Check if the correct message was logged
    expect(consoleSpy.calledOnce).to.be.true; // Ensure console.log was called exactly once
  });

  it('Logs correct total for inputs 10 and 10 to the console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true; // Check if the correct message was logged
    expect(consoleSpy.calledOnce).to.be.true; // Ensure console.log was called exactly once
  });
});
