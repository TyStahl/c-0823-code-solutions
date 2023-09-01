/* exported truncate */
function truncate(length, string) {
  let newString = '';
  for (let i = 0; i < length; i++) {
    newString += i;
  }
  newString += '...';
  return newString;
}
