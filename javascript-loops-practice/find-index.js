/* exported findIndex */

function findIndex(array, value) {
  let indexOfValue = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== value) {
      indexOfValue = i;
    } else {
      if (array[i] === value) {
        indexOfValue = i;
        return indexOfValue;
      }
    }
  }
  indexOfValue = -1;
  return indexOfValue;
}
