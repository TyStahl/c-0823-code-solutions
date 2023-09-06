/* exported firstChars */
function firstChars(length, string) {
  let newString = '';
  if (length > string.length) {
    length = string.length;
  }
  if (string !== '') {
    for (let i = 0; i < length; i++) {
      newString += string[i];
    }
  } else {
    newString = '';
  }
  return newString;
}

console.log(firstChars(8, 'All Code All Day'));
console.log(firstChars(15, 'HTML, CSS JavaScript, React'));
console.log(firstChars(1, 'React'));
console.log(firstChars(3, 'Angular'));
console.log(firstChars(5, ''));
console.log(firstChars(20, 'LearningFuze'));
