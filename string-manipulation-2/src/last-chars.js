/* exported lastChars */
function lastChars(length, string) {
  let newString = '';
  if (string.length < length) {
    length = string.length;
  }
  newString = string.slice(string.length - length);
  return newString;
}

console.log('----lastChars----');
console.log(lastChars(8, 'All Code All Day'));
console.log(lastChars(15, 'HTML, CSS, JavaScript, React'));
console.log(lastChars(1, 'React'));
console.log(lastChars(3, 'Angular'));
console.log(lastChars(5, ''));
console.log(lastChars(20, 'LearningFuze'));
