const httpServer = require('http');
const fileSystem = require('fs');
const { args } = require('process');

function countStudents(fileLocation, outputStream) {
  if (fileSystem.existsSync(fileLocation)) {
    const fileData = fileSystem.readFileSync(fileLocation, 'utf8');
    const studentData = [];
    fileData.split('\n').forEach((line) => {
      studentData.push(line.split(','));
    });
    studentData.shift(); // Remove header
    const studentsInfo = [];
    studentData.forEach((student) => studentsInfo.push([student[0], student[3]]));
    
    const departments = new Set();
    studentsInfo.forEach((info) => departments.add(info[1]));
    
    const departmentCount = {};
    departments.forEach((department) => { 
      departmentCount[department] = 0;
    });

    studentsInfo.forEach((info) => { 
      departmentCount[info[1]] += 1;
    });

    outputStream.write(`Number of students: ${studentData.length}\n`);
    
    const departmentList = [];
    Object.keys(departmentCount).forEach((department) => {
      departmentList.push(`Number of students in ${department}: ${departmentCount[department]}. List: ${studentsInfo.filter((student) => student[1] === department).map((student) => student[0]).join(', ')}\n`);
    });

    for (let i = 0; i < departmentList.length; i++) {
      if (i === departmentList.length - 1) {
        departmentList[i] = departmentList[i].replace(/(\r\n|\n|\r)/gm, '');
      }
      outputStream.write(departmentList[i]);
    }
  } else {
    throw new Error('Cannot load the database');
  }
}

const hostname = 'localhost';
const port = 1245;

const app = httpServer.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const { url } = req;

  if (url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }

  if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      countStudents(args[2], res); // args[2] should be the file location passed in the command line
      res.end();
    } catch (err) {
      res.end(err.message);
    }
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
