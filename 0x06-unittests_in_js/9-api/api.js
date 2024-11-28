const express = require('express');

const app = express();
const port = 7865;

app.get('/', (_, rsp) => {
  rsp.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (rqt, rsp) => {
  const id = rqt.params.id;

  rsp.send(`Payment methods for cart ${id}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port 7865`);
});

module.exports = app;
