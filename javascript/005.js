/*
2520 is the smallest number that can be divided by each of the numbers from 1
to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the
numbers from 1 to 20?
*/

// The significant factor for this number is that it must be divisible by all
// the primes from 1 - 20. Use this as the increment.
var smallestMultiple = function() {
  var range = [];
  for (let i = 1; i <= 20; i++) {
    range.push(i);
  }
  var increment = 2 * 3 * 5 * 7 * 11 * 13 * 17 * 19;

  var isFound = false;
  var num = 0;
  while (!isFound) {
    num += increment;
    isFound = range.every(val => num % val === 0);
  }
  return num;
};

console.time();
console.log(smallestMultiple()); // 232792560 in 1.6 ms
console.timeEnd();
