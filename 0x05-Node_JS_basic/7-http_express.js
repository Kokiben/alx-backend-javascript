const express = require('express');
const { argv: arguments } = require('process');
const fs = require('fs');

const app = express();

app.get('/', (req, response) => {
  response.set('Content-Type', 'text/plain');
  response.send('Hello Holberton School!');
});

app.get('/students', (req, response) => {
  response.set('Content-Type', 'text/plain');
  response.write('This is the list of our students\n');
  fs.readFile(arguments[2], 'utf8', (err, line) => {
    if (err) {
      throw Error('Cannot load the database');
    }
    const result = [];
    line.split('\n').forEach((line) => {
      result.push(line.split(','));
    });
    result.shift();
    const studentFieldInfo = [];
    result.forEach((line) => studentFieldInfo.push([line[0], line[3]]));
    const uniqueFields = new Set();
    studentFieldInfo.forEach((item) => uniqueFields.add(item[1]));
    const fieldStudentCount = {};
    uniqueFields.forEach((field) => { (fieldStudentCount[field] = 0); });
    studentFieldInfo.forEach((student) => { (fieldStudentCount[student[1]] += 1); });
    response.write(`Number of students: ${result.filter((check) => check.length > 3).length}\n`);
    Object.keys(fieldStudentCount).forEach((field) => 
      response.write(`Number of students in ${field}: ${fieldStudentCount[field]}. List: ${studentFieldInfo.filter((student) => student[1] === field).map((student) => student[0]).join(', ')}\n`)
    );
    response.end();
  });
});

app.listen(1245);

module.exports = app;
