/* exported sumAll */
function sumAll(number) {
  let sumNum = 0;
  for (let i = 0; i < number.length; i++) {
    sumNum += number[i];
  }
  return sumNum;
}
