/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

console.log(
  '10 numbers: ',
  getNumbersToTen(),
  getNumbersToTen(),
  getNumbersToTen()
);

function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log(
  'even numbers: ',
  getEvenNumbersToTwenty(),
  getEvenNumbersToTwenty()
);

function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}

const word = 'cow';
const times = 10;
console.log('word: ', word);
console.log('times: ', times);
console.log('repeated: ', repeatWord('cow', 10), repeatWord('cow', 10));

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

logEachCharacter('cow');
logEachCharacter('');

function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    const doubleNum = numbers[i] * 2;
    doubled.push(doubleNum);
  }
  return doubled;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(
  'numbers: ',
  numbers,
  'numbers doubled: ',
  doubleAll(numbers),
  doubleAll(numbers)
);

const object = {
  name: 'tractor',
  size: 'big',
  weight: 'heavy',
};

function getKeys(object) {
  const keys = [];
  for (const props in object) {
    keys.push(props);
  }
  return keys;
}

function getValues(object) {
  const values = [];
  for (const props in object) {
    values.push(object[props]);
  }
  return values;
}

console.log('keys: ', getKeys(object));
console.log('values: ', getValues(object));
