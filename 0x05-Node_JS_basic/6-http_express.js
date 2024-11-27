const expressApp = require('express');

const app = expressApp();
const listeningPort = 1245;

app.get('/', (_, response) => {
  response.send('Hello Holberton School!');
});

app.listen(listeningPort, () => {
  console.log(`Server listening on PORT ${listeningPort}`);
});

module.exports = app;
