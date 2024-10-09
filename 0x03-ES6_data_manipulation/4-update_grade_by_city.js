// 4-update_grade_by_city.js
import getListStudents from './0-get_list_students';

export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter(student => student.location === city)
    .map(student => {
      const gradeInfo = newGrades.find(grade => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeInfo ? gradeInfo.grade : 'N/A',
      };
    });
}
