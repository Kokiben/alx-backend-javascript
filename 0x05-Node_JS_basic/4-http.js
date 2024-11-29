const http = require('http');

const port = 1245;
const HOST = 'localhost';
const app = http.createServer();

app.on('request', (_, rsp) => {
  const message = 'Hello Holberton School!';

  rsp.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': Buffer.byteLength(message, 'utf-8'),
  });
  rsp.end(message);
});

app.listen(port, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${port}\n`);
});

module.exports = app;
