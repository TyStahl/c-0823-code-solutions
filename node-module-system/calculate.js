import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

// function calculate(num1, string, num2) {
let result = '';
const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[4]);
const string = process.argv[3];

switch (string) {
  case 'plus':
    result = add(num1, num2);
    break;
  case 'minus':
    result = subtract(num1, num2);
    break;
  case 'times':
    result = multiply(num1, num2);
    break;
  case 'over':
    result = divide(num1, num2);
    break;
}

result = result.toString();
console.log('result', result);
