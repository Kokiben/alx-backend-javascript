const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();
const DB = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Counts the students in a CSV data file.
 * @param {String} path The path to the CSV data file.
 */
const countStudents = (path) => new Promise((resolve, reject) => {
  if (!path) {
    reject(new Error('Cannot load the database'));
  }
  if (path) {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const parts = [];
        const lines = data.toString('utf-8').trim().split('\n');
        const groups = {};
        const headers = lines[0].split(',');
        const props = headers.slice(0, headers.length - 1);

        for (const line of lines.slice(1)) {
          const record = line.split(',');
          const values = record.slice(0, record.length - 1);
          const field = record[record.length - 1];
          if (!Object.keys(groups).includes(field)) {
            groups[field] = [];
          }
          const entries = props.map((name, idx) => [name, values[idx]]);
          groups[field].push(Object.fromEntries(entries));
        }

        const total = Object.values(groups).reduce(
          (acc, group) => (acc || []).length + group.length,
        );
        parts.push(`Number of students: ${total}`);
        for (const [field, group] of Object.entries(groups)) {
          parts.push([`Number of students in ${field}: ${group.length}.`, 'List:', group.map((s) => s.firstname).join(', ')].join(' '));
        }
        resolve(parts.join('\n'));
      }
    });
  }
});

const routes = [
  {
    path: '/',
    handler(_, res) {
      const text = 'Hello Holberton School!';
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', text.length);
      res.statusCode = 200;
      res.write(Buffer.from(text));
    },
  },
  {
    path: '/students',
    handler(_, res) {
      const response = ['This is the list of our students'];

      countStudents(DB)
        .then((report) => {
          response.push(report);
          const text = response.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', text.length);
          res.statusCode = 200;
          res.write(Buffer.from(text));
        })
        .catch((err) => {
          response.push(err instanceof Error ? err.message : err.toString());
          const text = response.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', text.length);
          res.statusCode = 200;
          res.write(Buffer.from(text));
        });
    },
  },
];

app.on('request', (req, res) => {
  for (const route of routes) {
    if (route.path === req.url) {
      route.handler(req, res);
      break;
    }
  }
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
