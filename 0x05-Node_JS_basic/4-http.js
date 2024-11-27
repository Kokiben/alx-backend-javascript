const http = require('http');

const serverAddress = 'localhost';
const serverListeningPort = 1245;

const app = http.createServer((request, serverResponse) => {
  serverResponse.statusCode = 200;
  serverResponse.setHeader('Content-Type', 'text/plain');
  serverResponse.end('Hello Holberton School!');
});

app.listen(serverListeningPort, serverAddress, () => {
  console.log(`Server running at http://${serverAddress}:${serverListeningPort}/`);
});

module.exports = app;  // Export 'app'
