const request = require('request');
const { expect } = require('chai');

describe('Payment System API Integration', () => {
  const BASE_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${BASE_URL}/`, (error, response, responseBody) => {
      expect(response.statusCode).to.be.equal(200);
      expect(responseBody).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
