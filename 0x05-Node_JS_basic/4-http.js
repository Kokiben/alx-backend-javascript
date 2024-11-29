const http = require('http');

const port = 1245;
const host = 'localhost';
const app = http.createServer();

app.on('request', (_, rsp) => {
  const responseText = 'Hello Holberton School!';

  rsp.setHeader('Content-Type', 'text/plain');
  rsp.setHeader('Content-Length', responseText.length);
  rsp.statusCode = 200;
  rsp.write(Buffer.from(responseText));
});

app.listen(port, host, () => {
  process.stdout.write(`Server listening at -> http://${host}:${port}\n`);
});

module.exports = app;
