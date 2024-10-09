// 2-get_students_by_loc.js
import getListStudents from './0-get_list_students';

export default function getStudentsByLocation(student = getListStudents(), city) {
  return student.filter((student) => student.location === city);
}
