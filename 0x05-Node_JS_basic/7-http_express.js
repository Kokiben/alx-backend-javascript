const http = require('http');
const fs = require('fs');

const port = 1245;
const HOST = 'localhost';
const app = http.createServer();
const DB = process.argv.length > 2 ? process.argv[2] : '';

/**
 * count std in d.
 * @param {String} dPath path CSV df.
 * 
 */
const countStudents = (dPath) => new Promise((resolve, reject) => {
  if (!dPath) {
    reject(new Error('Cannot load the database'));
  }
  if (dPath) {
    fs.readFile(dPath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const reportParts = [];
        const lines = data.toString('utf-8').trim().split('\n');
        const sGroups = {};
        const fNames = lines[0].split(',');
        const propNames = fNames.slice(0, fNames.length - 1);

        for (const line of lines.slice(1)) {
          const sRecord = line.split(',');
          const propValues = sRecord.slice(0, sRecord.length - 1);
          const f = sRecord[sRecord.length - 1];
          if (!Object.keys(sGroups).includes(f)) {
            sGroups[f] = [];
          }
          const sEntries = propNames.map((pName, idx) => [pName, propValues[idx]]);
          sGroups[f].push(Object.fromEntries(sEntries));
        }

        const total = Object.values(sGroups).reduce(
          (pre, cur) => (pre || []).length + cur.length,
        );
        reportParts.push(`Number of students: ${total}`);
        for (const [f, group] of Object.entries(sGroups)) {
          reportParts.push([`Number of students in ${f}: ${group.length}.`, 'List:', group.map((student) => student.firstname).join(', ')].join(' '));
        }
        resolve(reportParts.join('\n'));
      }
    });
  }
});

const SERVER_ROUTE_HANDLERS = [
  {
    route: '/',
    handler(_, res) {
      const responseText = 'Hello Holberton School!';

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    },
  },
  {
    route: '/students',
    handler(_, res) {
      const responseParts = ['This is the list of our students'];

      countStudents(DB)
        .then((report) => {
          responseParts.push(report);
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        })
        .catch((err) => {
          responseParts.push(err instanceof Error ? err.message : err.toString());
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        });
    },
  },
];

app.on('request', (req, res) => {
  for (const routeHandler of SERVER_ROUTE_HANDLERS) {
    if (routeHandler.route === req.url) {
      routeHandler.handler(req, res);
      break;
    }
  }
});

app.listen(port, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${port}\n`);
});

module.exports = app;
