const student = {
  firstName: 'Tyler',
  lastName: 'Stahl',
  age: 32,
};

const fullName = student.firstName + ' ' + student.lastName;
console.log('fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Snowboard Instructor';
console.log('student.livesInIrvine: ', student.livesInIrvine);
console.log('student.previousOccupation: ', student.previousOccupation);
console.log('student: ', student);

const vehicle = {
  make: 'Ford',
  model: 'Mustang',
  year: 1965,
};

vehicle['color'] = 'Blue';
vehicle['isConvertible'] = true;
console.log('vehicle.color: ', vehicle['color']);
console.log('vehicle.isConvertible: ', vehicle['isConvertible']);
console.log('vehicle: ', vehicle);

const pet = {
  name: 'Bob',
  type: 'Cat',
};
delete pet.name;
delete pet.type;
console.log('pet: ', pet);
