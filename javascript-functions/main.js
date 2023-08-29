function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}
console.log(
  'convertMinutesToSeconds result (one minute): ',
  convertMinutesToSeconds(1)
);
console.log(
  'convertMinutesToSeconds result (five minutes): ',
  convertMinutesToSeconds(5)
);

function greet(name) {
  const greeting = 'Hey, ' + name;
  return greeting;
}
console.log('greet function result: ', greet('Tyler'));

function getArea(width, height) {
  const area = width * height;
  return area;
}

console.log('getArea result: (width: 5 height: 5)', getArea(5, 5));
console.log('getArea result: (width 17, height: 42)', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}

console.log(
  'getFirstName function result: ',
  getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' })
);

function getLastElement(array) {
  const lastElement = array[array.length - 1];
  return lastElement;
}

console.log(
  'getLastElement function result: ',
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);
