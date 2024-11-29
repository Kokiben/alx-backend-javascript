const request = require('request');
const { expect } = require('chai');

describe('Payment System API Integration', () => {
  const BASE_URL = 'http://localhost:7865';

  it('GET / should return the welcome message', (done) => {
    request.get(`${BASE_URL}/`, (error, response, responseBody) => {
      expect(response.statusCode).to.be.equal(200);
      expect(responseBody).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id should return correct response when given a valid :id', (done) => {
    request.get(`${BASE_URL}/cart/47`, (error, response, responseBody) => {
      expect(response.statusCode).to.be.equal(200);
      expect(responseBody).to.be.equal('Payment methods for cart 47');
      done();
    });
  });

  it('GET /cart/:id should return 404 when :id is a negative number', (done) => {
    request.get(`${BASE_URL}/cart/-47`, (error, response, responseBody) => {
      expect(response.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id should return 404 when :id contains non-numeric values', (done) => {
    request.get(`${BASE_URL}/cart/d200-44a5-9de6`, (error, response, responseBody) => {
      expect(response.statusCode).to.be.equal(404);
      done();
    });
  });
});
