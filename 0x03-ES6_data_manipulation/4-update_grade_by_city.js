// 4-update_grade_by_city.js
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter(student => student.location === city)
    .map(student => {
      const matchedGrades = newGrades.filter(gradeInfo => gradeInfo.studentId === student.id);
      const studentGrade = matchedGrades.length ? matchedGrades[0].grade : 'N/A';
      return {
        ...student,
        grade: studentGrade,
      };
    });
}
