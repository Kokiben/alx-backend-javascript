// task_4/js/subjects/Subject.ts

namespace Subjects {
  export class Subject {
    teacher!: Teacher;

    setTeacher(teacher: Teacher): void {
      this.teacher = teacher;
    }
  }
}
