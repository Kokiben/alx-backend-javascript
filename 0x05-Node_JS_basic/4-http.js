const httpServer = require('http');  // Renamed 'http' to 'httpServer'

const serverAddress = 'localhost';  // Renamed 'serverHost' to 'serverAddress'
const serverListeningPort = 1245;  // Renamed 'serverPort' to 'serverListeningPort'

const app = httpServer.createServer((request, serverResponse) => {  // Renamed 'server' to 'app' and 'response' to 'serverResponse'
  serverResponse.statusCode = 200;
  serverResponse.setHeader('Content-Type', 'text/plain');
  serverResponse.end('Hello Holberton School!');
});

app.listen(serverListeningPort, serverAddress, () => {  // Used 'app' instead of 'server'
  console.log(`Server running at http://${serverAddress}:${serverListeningPort}/`);  // Used 'serverAddress' and 'serverListeningPort'
});

module.exports = app;  // Export 'app'
