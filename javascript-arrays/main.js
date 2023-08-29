const colors = ['red', 'white', 'blue'];
console.log('value of colors[0]: ', colors[0]);
console.log('value of colors[1]: ', colors[1]);
console.log('value of colors[2]: ', colors[2]);

const americanColors =
  'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2];
console.log(americanColors);

colors[2] = 'green';
const mexicanColors =
  'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2];
console.log(mexicanColors);
console.log('colors array: ', colors);

const students = ['Andy', 'Boby', 'Charly', 'Davy'];
const numberOfStudents = students.length;
console.log('There are ' + numberOfStudents + ' students in the class.');
const lastIndex = students.length - 1;
const lastStudent = students[lastIndex];
console.log('The last student in the array is ' + lastStudent + '.');
console.log('students: ', students);
