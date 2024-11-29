const http = require('http');

const port = 1245;
const HOST = 'localhost';
const app = http.createServer();

app.on('request', (_, res) => {
  const responseText = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.statusCode = 200;
  res.write(Buffer.from(responseText));
});

app.listen(port, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${port}\n`);
});

module.exports = app;
