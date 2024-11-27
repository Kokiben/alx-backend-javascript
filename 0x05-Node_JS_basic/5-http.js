const httpServer = require('http');
const fileSystem = require('fs');
const { args } = require('process');

function app(fileLocation, outputStream) {
  if (fileSystem.existsSync(fileLocation)) {
    const fileData = fileSystem.readFileSync(fileLocation, 'utf8');
    const studentsList = [];
    fileData.split('\n').forEach((line) => {
      studentsList.push(line.split(','));
    });
    studentsList.shift();
    const studentsInfo = [];
    studentsList.forEach((student) => studentsInfo.push([student[0], student[3]]));
    
    const departments = new Set();
    studentsInfo.forEach((info) => departments.add(info[1]));
    
    const departmentCount = {};
    departments.forEach((department) => { 
      departmentCount[department] = 0;
    });

    studentsInfo.forEach((info) => { 
      departmentCount[info[1]] += 1;
    });

    outputStream.write(`Number of students: ${studentsList.length}\n`);
    
    const departmentList = [];
    Object.keys(departmentCount).forEach((department) => {
      departmentList.push(`Number of students in ${department}: ${departmentCount[department]}. List: ${studentsInfo.filter((student) => student[1] === department).map((student) => student[0]).join(', ')}\n`);
    });

    for (let k = 0; k < departmentList.length; k++) {
      if (k === departmentList.length - 1) {
        departmentList[k] = departmentList[k].replace(/(\r\n|\n|\r)/gm, '');
      }
      outputStream.write(departmentList[k]);
    }
  } else {
    throw new Error('Cannot load the database');
  }
}

module.exports = app;
