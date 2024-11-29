const express = require('express');

const app = express();
const port = 7865;

app.use(express.json());

app.get('/', (_rqt, rsp) => {
  rsp.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (rqt, rsp) => {
  const id = rqt.params.id;

  rsp.send(`Payment methods for cart ${id}`);
});

app.get('/available_payments', (_rqt, rsp) => {
  rsp.json({ payment_methods: { credit_cards: true, paypal: false } });
});

app.post('/login', (rqt, rsp) => {
  let username = '';

  if (rqt.body) {
    username = rqt.body.userName;
  }

  rsp.send(`Welcome ${username}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port 7865`);
});

module.exports = app;
