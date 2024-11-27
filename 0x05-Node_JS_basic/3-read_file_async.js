const fileSystem = require('fs');

async function countStudents(fileLocation) {
  if (fileSystem.existsSync(fileLocation)) {
    return new Promise((resolve, reject) => {
      fileSystem.readFile(fileLocation, 'utf8', (error, data) => {
        if (error) {
          reject(Error('Cannot load the database'));
        }
        const parsedData = [];
        data.split('\n').forEach((line) => {
          parsedData.push(line.split(','));
        });
        parsedData.shift();

        const studentCourses = [];
        parsedData.forEach((record) => studentCourses.push([record[0], record[3]]));

        const uniqueCourses = new Set();
        studentCourses.forEach((course) => uniqueCourses.add(course[1]));

        const courseCount = {}; // Renamed 'final' to 'courseCount'
        uniqueCourses.forEach((course) => { courseCount[course] = 0; });

        studentCourses.forEach((course) => { courseCount[course[1]] += 1; });

        console.log(`Number of students: ${parsedData.filter((record) => record.length > 3).length}`);

        Object.keys(courseCount).forEach((course) => {
          console.log(`Number of students in ${course}: ${courseCount[course]}. List: ${studentCourses.filter((student) => student[1] === course).map((student) => student[0]).join(', ')}`);
        });

        resolve({ parsedData, courseCount, studentCourses });
      });
    });
  }
  throw Error('Cannot load the database'); // If file doesn't exist, throw error
}

module.exports = countStudents;
