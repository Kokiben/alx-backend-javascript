// 3-get_ids_sum.js
import getListStudents from './0-get_list_students';

export default function getStudentIdsSum(student = getListStudents()) {
  return student.reduce((sum, student) => sum + student.id, 0);
}
