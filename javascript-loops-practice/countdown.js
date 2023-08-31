/* exported countdown */
function countdown(number) {
  const numArray = [];
  for (let i = number; i >= 0; i--) {
    numArray.push(i);
  }
  return numArray;
}
