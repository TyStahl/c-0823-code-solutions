/* exported lastChars */
function lastChars(length, string) {
  let newString = '';
  if (string.length < length) {
    length = string.length;
  }
  newString = string.slice(string.length - length);
  return newString;
}
