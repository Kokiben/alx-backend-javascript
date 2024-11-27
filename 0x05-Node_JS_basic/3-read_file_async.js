const fileSystem = require('fs'); // Renamed 'fs' to 'fileSystem'

async function countStudents(fileLocation) { // Changed 'filePath' to 'fileLocation'
  if (fileSystem.existsSync(fileLocation)) { // Using 'fileLocation' instead of 'filePath'
    return new Promise((resolve, reject) => { // Added reject handler
      fileSystem.readFile(fileLocation, 'utf8', (error, data) => { // Using 'fileLocation' instead of 'filePath'
        if (error) {
          reject(Error('Cannot load the database')); // Used reject instead of throw
        }
        const parsedData = []; // Renamed 'result' to 'parsedData'
        data.split('\n').forEach((line) => {
          parsedData.push(line.split(',')); // Renamed 'result' to 'parsedData'
        });
        parsedData.shift(); // Remove header row

        const studentCourses = []; // Renamed 'newis' to 'studentCourses'
        parsedData.forEach((record) => studentCourses.push([record[0], record[3]]));

        const uniqueCourses = new Set(); // Renamed 'fields' to 'uniqueCourses'
        studentCourses.forEach((course) => uniqueCourses.add(course[1]));

        const courseCount = {}; // Renamed 'final' to 'courseCount'
        uniqueCourses.forEach((course) => { courseCount[course] = 0; });

        studentCourses.forEach((course) => { courseCount[course[1]] += 1; });

        console.log(`Number of students: ${parsedData.filter((record) => record.length > 3).length}`);

        Object.keys(courseCount).forEach((course) => {
          console.log(`Number of students in ${course}: ${courseCount[course]}. List: ${studentCourses.filter((student) => student[1] === course).map((student) => student[0]).join(', ')}`);
        });

        resolve({ parsedData, courseCount, studentCourses }); // Resolving with renamed variables
      });
    });
  }
  throw Error('Cannot load the database'); // If file doesn't exist, throw error
}

module.exports = countStudents;
