// 1-get_list_student_ids.js
// This function is taking one argument which is an arr
export default function getListStudentIds(arg) {
  if (!Array.isArray(arg)) return [];
  return arg.map((student) => student.id);
}
