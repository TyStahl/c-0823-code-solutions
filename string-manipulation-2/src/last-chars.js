/* exported lastChars */
function lastChars(length, string) {
  let newString = '';
  const lastOf = string.length - length;
  for (let i = string.length; i > lastOf; i--) {
    newString += string[i];
  }

  return newString;
}

console.log('----lastChars----');
console.log(lastChars(8, 'All Code All Day'));
