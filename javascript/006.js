/*
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

var sumSquareDifference = function(num) {
  var range = [];
  for (let i = 1; i <= num; i++) {
    range.push(i);
  }
  var sumSquares = range.reduce((acc, val) => acc + val ** 2);
  var squareSum = range.reduce((acc, val) => acc + val) ** 2;
  return squareSum - sumSquares;
}

console.log(sumSquareDifference(10));
console.log(sumSquareDifference(100));