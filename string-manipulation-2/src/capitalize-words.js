/* exported capitalizeWords */
function capitalizeWords(string) {
  const lowerCasedString = string.toLowerCase();
  const splitStringArray = lowerCasedString.split(' ');
  let tempString = '';
  let upperTempString = '';
  let newString = '';

  for (let a = 0; a < splitStringArray.length; a++) {
    tempString = splitStringArray[a];
    for (let s = 0; s < tempString.length; s++) {
      if (s === 0) {
        upperTempString += tempString[s].toUpperCase();
      } else {
        upperTempString += tempString[s];
      }
    }
    if (a !== splitStringArray.length - 1) {
      upperTempString += ' ';
    }
    newString = upperTempString;
  }
  return newString;
}

console.log('---capitalizeWords---');
console.log('needs solution.-->', capitalizeWords('needs solution'));
console.log(
  'Add string manipulation practice.-->',
  capitalizeWords('Add string manipulation practice.')
);
console.log('all code all day-->', capitalizeWords('aLl CoDe aLl DaY'));
console.log(
  'html, css, javascript, php, sql-->',
  capitalizeWords('HTML, CSS, JavaScript, PHP, SQL')
);
