const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
console.log('order');
values.forEach((currentValue, index, array) => {
  console.log(currentValue);
});

console.log('reverse order');
values.forEach((currentValue, index, array) => {
  // console.log('element', currentValue, 'index', index, 'array', array);
  currentValue = array[array.length - 1 - index];
  console.log(currentValue);
});
