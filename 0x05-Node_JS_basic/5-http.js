const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 * @returns {Promise<String>} The report of students, grouped by field.
 */
const countStudents = (dataPath) => {
  return new Promise((resolve, reject) => {
    // Check if the dataPath is provided
    if (!dataPath) {
      return reject(new Error('Cannot load the database'));
    }

    // Try to read the file asynchronously
    fs.readFile(dataPath, 'utf-8', (err, data) => {
      if (err) {
        // If there was an error reading the file
        return reject(new Error('Cannot load the database'));
      }

      // Process the data into a report
      const lines = data.trim().split('\n');
      const headers = lines[0].split(',');
      const students = lines.slice(1);

      const studentGroups = {};

      // Process each student record
      students.forEach((line) => {
        const studentDetails = line.split(',');
        const field = studentDetails[studentDetails.length - 1];
        const student = {};

        // Map student properties from headers and their corresponding values
        headers.slice(0, -1).forEach((header, index) => {
          student[header] = studentDetails[index];
        });

        // Group students by the last field (e.g., cohort)
        if (!studentGroups[field]) {
          studentGroups[field] = [];
        }
        studentGroups[field].push(student);
      });

      // Generate the report
      const totalStudents = students.length;
      const reportParts = [
        `Number of students: ${totalStudents}`,
      ];

      Object.entries(studentGroups).forEach(([field, group]) => {
        reportParts.push(`Number of students in ${field}: ${group.length}.`);
        reportParts.push(`List: ${group.map(student => student.firstname).join(', ')}`);
      });

      resolve(reportParts.join('\n'));
    });
  });
};

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

      countStudents(DB_FILE)
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

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
