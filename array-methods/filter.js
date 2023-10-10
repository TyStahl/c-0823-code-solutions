const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const even = numbers.filter((currentValue) => currentValue % 2 === 0);
console.log('Even Numbers', even);

const noD = names.filter(
  (currentValue) =>
    currentValue.includes('d') !== true && currentValue.includes('D') !== true
);
console.log("No D's", noD);
