// 3-get_ids_sum.js
import getListStudents from "./0-get_list_students.js";

export default function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}
