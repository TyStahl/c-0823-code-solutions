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
