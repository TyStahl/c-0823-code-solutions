/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const arr = string.split('', string.length);
  const char1 = arr[firstIndex];
  const char2 = arr[secondIndex];

  arr.splice(firstIndex, 1, char2);
  arr.splice(secondIndex, 1, char1);

  const finalString = arr.join('');

  return finalString;
}
