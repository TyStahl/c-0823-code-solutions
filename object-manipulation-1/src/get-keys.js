/* exported getKeys */
function getKeys(object) {
  const newArray = [];
  for (const i in object) {
    newArray.push(i);
  }
  return newArray;
}
