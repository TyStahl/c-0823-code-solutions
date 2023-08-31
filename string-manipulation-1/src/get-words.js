/* exported getWords */

function getWords(string) {
  let newArray = [];
  if (string === '') {
    newArray = string.split('');
  } else {
    newArray = string.split(' ');
  }
  return newArray;
}
