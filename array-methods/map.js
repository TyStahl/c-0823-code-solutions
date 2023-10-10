const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

console.log('price objects');

console.log(
  prices.map((currentValue, array) => {
    return {
      price: currentValue.toFixed(2),
      salePrice: (currentValue / 2).toFixed(2),
    };
  })
);

console.log('formatted prices');

console.log(
  prices.map((currentValue, index, array) => {
    array[index] = `$${currentValue.toFixed(2)}`;
    return array;
  })
);
