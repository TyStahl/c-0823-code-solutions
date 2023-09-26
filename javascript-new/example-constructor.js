function ExampleConstructor() {}

console.log(
  'prototype property of ExampleConstructor: ',
  ExampleConstructor.prototype
);
console.log(
  'typeof the prototype property of ExampleConstructor: ',
  typeof ExampleConstructor.property
);

const newExample = new ExampleConstructor();
console.log('value of newExample: ', newExample);

const isInstance = newExample instanceof ExampleConstructor;
console.log('is newExample an instance of ExampleConstructor? ', isInstance);
