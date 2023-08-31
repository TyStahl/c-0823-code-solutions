/* exported initial */
function initial(array) {
  const last = array.length - 1;
  const newArray = [];
  for (let i = 0; i < last; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
