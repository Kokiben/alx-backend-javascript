const http = require('http');
const fs = require('fs');

const port = 1245;
const HOST = 'localhost';
const app = http.createServer();
const dbFilePath = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Parses a CSV file to count students and group them by a specified field.
 * @param {string} csvFilePath - path to CSV file containing stdt data.
 * @returns {Promise<string>} A promise resolves report of student counts.
 */
const countStudentsInFile = (csvFilePath) => new Promise((resolve, reject) => {
  if (!csvFilePath) {
    return reject(new Error('Cannot load the database'));
  }
  fs.readFile(csvFilePath, (err, data) => {
    if (err) {
      return reject(new Error('Cannot load the database'));
    }
    const reportParts = [];
    const lines = data.toString('utf-8').trim().split('\n');
    const groupsByField = {};
    const fieldNames = lines[0].split(',');
    const propertyNames = fieldNames.slice(0, fieldNames.length - 1);

    for (const line of lines.slice(1)) {
      const record = line.split(',');
      const propertyValues = record.slice(0, record.length - 1);
      const field = record[record.length - 1];
      if (!groupsByField[field]) {
        groupsByField[field] = [];
      }
      const entries = propertyNames.map((propName, idx) => [
        propName,
        propertyValues[idx],
      ]);
      groupsByField[field].push(Object.fromEntries(entries));
    }

    const totalStudents = Object.values(groupsByField).reduce(
      (pre, cur) => pre + cur.length, 0
    );
    reportParts.push(`Number of students: ${totalStudents}`);
    for (const [field, group] of Object.entries(groupsByField)) {
      reportParts.push(
        `Number of students in ${field}: ${group.length}. List: ${group.map((student) => student.firstname).join(', ')}`
      );
    }
    resolve(reportParts.join('\n'));
  });
});

/**
 * headers and content.
 * rsp The response object.
 * The HTTP status code.
 * message The message to send.
 */
const sendResponse = (rsp, statusCode, message) => {
  rsp.statusCode = statusCode;
  rsp.setHeader('Content-Type', 'text/plain');
  rsp.setHeader('Content-Length', Buffer.byteLength(message, 'utf-8'));
  rsp.end(message);
};

const SERVER_ROUTE_HANDLERS = [
  {
    route: '/',
    handler(_, rsp) {
      sendResponse(rsp, 200, 'Hello Holberton School!');
    },
  },
  {
    route: '/students',
    handler(_, rsp) {
      const responseContent = ['This is the list of our students'];

      countStudentsInFile(dbFilePath)
        .then((report) => {
          responseContent.push(report);
          sendResponse(rsp, 200, responseContent.join('\n'));
        })
        .catch((err) => {
          responseContent.push(err instanceof Error ? err.message : err.toString());
          sendResponse(rsp, 500, responseContent.join('\n'));
        });
    },
  },
];

app.on('request', (req, rsp) => {
  for (const routeHandler of SERVER_ROUTE_HANDLERS) {
    if (routeHandler.route === req.url) {
      routeHandler.handler(req, rsp);
      break;
    }
  }
});

app.listen(port, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${port}\n`);
});

module.exports = app;
