const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const finalAmount = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${finalAmount}`);
};

module.exports = sendPaymentRequestToApi;
