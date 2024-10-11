// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles'
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Render a table using Vanilla JavaScript
const table = document.createElement('table');
const headerRow = document.createElement('tr');

const headerFirstName = document.createElement('th');
headerFirstName.textContent = 'First Name';
headerRow.appendChild(headerFirstName);

const headerLocation = document.createElement('th');
headerLocation.textContent = 'Location';
headerRow.appendChild(headerLocation);

table.appendChild(headerRow);

// Iterate over the students and create rows
studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  table.appendChild(row);
});

// Append the table to the document body
document.body.appendChild(table);
