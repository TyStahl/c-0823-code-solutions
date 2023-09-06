/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  string.replace(string[firstIndex], string[secondIndex]);
  string.replace(string[secondIndex], string[firstIndex]);
  return string;
}
console.log('----swapChars-----');
console.log(swapChars('oldash'));
