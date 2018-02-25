/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

var smallestMultiple = function() {
  var range = [];
  for (let i = 1; i <= 20; range.push(i), i++);
  var increment = [2,3,5,7,11,13,17,19]
    .reduce((sum,acc) => sum + acc);

  var isFound = false;
  var num = 0;
  while (!isFound) {
    num += increment;
    isFound = range.every(val => num % val === 0);
  }
  return num;
};

console.log(smallestMultiple());
