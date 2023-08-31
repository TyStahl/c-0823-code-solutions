/* exported getValues */
function getValues(object) {
  const newArray = [];
  for (const i in object) {
    newArray.push(object[i]);
  }
  return newArray;
}
