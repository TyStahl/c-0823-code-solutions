/* exported truncate */

// function truncate(length, string){
//   return string.slice(0, length) + '...';
// }

function truncate(length, string) {
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
  newString += '...';
  return newString;
}

console.log(truncate(8, 'This string is way too long'));
console.log(truncate(5, ''));
console.log(truncate(20, 'LearningFuze'));
