const http = require('http');
const fileSystem = require('fs');
const { argv } = require('process');

function countStudents(filePath, responseStream) {
  if (fileSystem.existsSync(filePath)) {
    const fileContent = fileSystem.readFileSync(filePath, 'utf8');
    const parsedData = [];
    fileContent.split('\n').forEach((line) => {
      parsedData.push(line.split(','));
    });
    parsedData.shift();
    const studentFieldInfo = [];
    parsedData.forEach((line) => studentFieldInfo.push([line[0], line[3]]));
    const uniqueFields = new Set();
    studentFieldInfo.forEach((item) => uniqueFields.add(item[1]));
    const fieldStudentCount = {};
    uniqueFields.forEach((field) => { (fieldStudentCount[field] = 0); });
    studentFieldInfo.forEach((student) => { (fieldStudentCount[student[1]] += 1); });
    responseStream.write(`Number of students: ${parsedData.length}\n`);
    const formattedMessages = [];
    Object.keys(fieldStudentCount).forEach((field) => formattedMessages.push(`Number of students in ${field}: ${fieldStudentCount[field]}. List: ${studentFieldInfo.filter((student) => student[1] === field).map((student) => student[0]).join(', ')}\n`));
   // Replacing for loop with a more explicit increment
    for (let k = 0; k < formattedMessages.length; k++) {
      if (k === formattedMessages.length - 1) {
        formattedMessages[k] = formattedMessages[k].replace(/(\r\n|\n|\r)/gm, '');
      }
      responseStream.write(formattedMessages[k]);
    }
  } else { throw new Error('Cannot load the database'); }
}

const hostname = 'localhost';
const port = 1245;

const app = http.createServer((req, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  const { url } = req;
  if (url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  }
  if (url === '/students') {
    response.write('This is the list of our students\n');
    try {
      countStudents(argv[2], response);
      response.end();
    } catch (err) {
      response.end(err.message);
    }
  }
});

app.listen(port, hostname);

module.exports = app;
