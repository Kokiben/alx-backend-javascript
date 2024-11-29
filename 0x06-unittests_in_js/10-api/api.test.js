const request = require('request');
const { expect } = require('chai');

describe('Payment System API Integration', () => {
  const API_ENDPOINT = 'http://localhost:7865';

  it('GET / should return the correct welcome message', (done) => {
    request.get(`${API_ENDPOINT}/`, (error, response, responseBody) => {
      expect(response.statusCode).to.be.equal(200);
      expect(responseBody).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id should return correct response for a valid cart ID', (done) => {
    request.get(`${API_ENDPOINT}/cart/47`, (error, response, responseBody) => {
      expect(response.statusCode).to.be.equal(200);
      expect(responseBody).to.be.equal('Payment methods for cart 47');
      done();
    });
  });

  it('GET /cart/:id should return 404 for negative cart ID values', (done) => {
    request.get(`${API_ENDPOINT}/cart/-47`, (error, response, responseBody) => {
      expect(response.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id should return 404 for non-numeric cart ID values', (done) => {
    request.get(`${API_ENDPOINT}/cart/d200-44a5-9de6`, (error, response, responseBody) => {
      expect(response.statusCode).to.be.equal(404);
      done();
    });
  });

  it('POST /login should return the correct welcome message for a valid username', (done) => {
    request.post(`${API_ENDPOINT}/login`, {json: {userName: 'Pinkbrook'}}, (error, response, responseBody) => {
      expect(response.statusCode).to.be.equal(200);
      expect(responseBody).to.be.equal('Welcome Pinkbrook');
      done();
    });
  });

  it('GET /available_payments should return the correct available payment methods', (done) => {
    request.get(`${API_ENDPOINT}/available_payments`, (error, response, responseBody) => {
      expect(response.statusCode).to.be.equal(200);
      expect(JSON.parse(responseBody))
        .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    });
  });
});
