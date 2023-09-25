// Problem Statement
// Define a function named getRangeReport with two parameters, start and end. The function should return an object containing several properties holding information about the numbers between start and end. Both start and end should be included in the range of numbers used for all steps.

// You can assume the following things about your parameters:
// start and end are guaranteed to be integers
// start is guaranteed to be less than or equal to end

// The returned object should have the following properties:
// total - the sum of all integers from start to end.
// odds - an array containing all of the odd integers from start to end.
// evens - an array containing all of the even integers from start to end.
// range - an array containing all integers from start to end.
// average - the average of all integers from start to end.

// 60 minutes alloted: 50 minutes actual time;

function getRangeReport(start, end) {
  const rangeReport = {
    total: 0,
    average: 0,
    odds: [],
    evens: [],
    range: [],
  };

  let sum = 0;
  let average = 0;

  for (let i = start; i < end + 1; i++) {
    rangeReport.range.push(i);
  }

  for (let i = start; i < end + 1; i++) {
    sum = i + sum;
  }
  rangeReport.total = sum;

  average = rangeReport.total / rangeReport.range.length;
  rangeReport.average = average;

  for (let i = start; i < end + 1; i++) {
    if (i % 2 === 0) {
      rangeReport.evens.push(i);
    } else {
      rangeReport.odds.push(i);
    }
  }

  return rangeReport;
}

console.log(getRangeReport(1, 2));
console.log(getRangeReport(1, 5));
console.log(getRangeReport(2, 8));
console.log(getRangeReport(1, 20));
