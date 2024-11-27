const fileSystem = require('fs'); // Changed 'fs' to 'fileSystem'

function countStudents(fileLocation) {
  try {
    const fileData = fileSystem.readFileSync(fileLocation, 'utf8'); // Updated 'fs' to 'fileSystem'
    const studentRecords = [];
    fileData.split('\n').forEach((line) => {
      studentRecords.push(line.split(','));
    });
    studentRecords.shift(); // Removed header row

    const studentCourses = [];
    studentRecords.forEach((record) => studentCourses.push([record[0], record[3]]));

    const courseSet = new Set();
    studentCourses.forEach((course) => courseSet.add(course[1]));

    const courseCount = {};
    courseSet.forEach((course) => { courseCount[course] = 0; });

    studentCourses.forEach((course) => { courseCount[course[1]] += 1; });

    console.log(`Number of students: ${studentRecords.filter((record) => record.length > 3).length}`);

    Object.keys(courseCount).forEach((course) => {
      console.log(`Number of students in ${course}: ${courseCount[course]}. List: ${studentCourses.filter((student) => student[1] === course).map((student) => student[0]).join(', ')}`);
    });
  } catch (err) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
