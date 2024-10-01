export default function createIteratorObject(report) {
  const employees = [];

  // Collect all employees from each department
  for (const department in report.allEmployees) {
    employees.push(...report.allEmployees[department]);
  }

  // Create an iterator for the collected employees
  return employees[Symbol.iterator]();
}
