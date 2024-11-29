const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const DB = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Counts the students in a CSV data file.
 * @param {String} p The path to the CSV data file.
 */
const countStudents = (p) => new Promise((resolve, reject) => {
  if (!p) {
    reject(new Error('Cannot load the database'));
  }
  fs.readFile(p, (err, data) => {
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
        if (!groups[field]) {
          groups[field] = [];
        }
        const entries = props.map((name, idx) => [name, values[idx]]);
        groups[field].push(Object.fromEntries(entries));
      }

      const total = Object.values(groups).reduce(
        (acc, group) => acc + group.length, 0
      );
      parts.push(`Number of students: ${total}`);
      for (const [field, group] of Object.entries(groups)) {
        parts.push([`Number of students in ${field}: ${group.length}.`, 'List:', group.map((s) => s.firstname).join(', ')].join(' '));
      }
      resolve(parts.join('\n'));
    }
  });
});

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  const resp = ['This is the list of our students'];

  countStudents(DB)
    .then((report) => {
      resp.push(report);
      const txt = resp.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', txt.length);
      res.statusCode = 200;
      res.write(Buffer.from(txt));
    })
    .catch((err) => {
      resp.push(err instanceof Error ? err.message : err.toString());
      const txt = resp.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', txt.length);
      res.statusCode = 200;
      res.write(Buffer.from(txt));
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
