export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];
  
  // Iterate through the iterator and collect employee names
  for (const name of reportWithIterator) {
    employeeNames.push(name);
  }

  // Join the names with a separator
  return employeeNames.join(' | ');
}
