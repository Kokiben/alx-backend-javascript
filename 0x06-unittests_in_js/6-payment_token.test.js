const { expect } = require('chai'); // Chai assertion library for testing
const getPaymentTokenFromAPI = require('./6-payment_token'); // Function to retrieve payment token from API

describe('getPaymentTokenFromAPI', () => {
  it('should return a successful response when success is true', (done) => {
    getPaymentTokenFromAPI(true) // Call the function with `true` to simulate success
      .then((res) => {
        expect(res).to.deep.equal({ data: 'Successful response from the API' }); // Check that the response matches the expected result
        done(); // Signal that the test is complete
      });
  });
});
