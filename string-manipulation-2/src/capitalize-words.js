/* exported capitalizeWords */
function capitalizeWords(string) {
  const lowerCasedString = string.toLowerCase();
  const splitStringArray = lowerCasedString.split(' ');
  const newArray = [];
  let tempString = '';
  let upperTempString = '';
  let finalString = '';

  for (let a = 0; a < splitStringArray.length; a++) {
    tempString = splitStringArray.pop([a]);
    for (let s = 0; s < tempString.length; s++) {
      if (s === 0) {
        upperTempString += tempString[s].toUpperCase();
      } else {
        upperTempString += tempString[s];
      }
    }
    finalString += upperTempString;
    newArray.push(finalString);
  }
  return newArray;
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
