/*
If we list all the natural numbers below 10 that are multiples of 3 or 5,
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

// brute force (iterative) approach
var sumMultiplesOf3Or5 = function(num) {
  var sum = 0;
  for (let i = 0; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};

console.log(sumMultiplesOf3Or5(10));
console.time();
console.log(sumMultiplesOf3Or5(1000)); // 233168 in 0.2ms
console.timeEnd();

// mathematical approach
// consider the sequence 3 + 6 + 9 + 12 + 15 + 18
// this can be reduced to 3 * (1 + 2 + 3 + 4 + 5 + 6)
// and the sum of an increasing series (1 + 2 + ... n) is n * (n + 1)/2
sumMultiplesOf3Or5 = function(num) {
  function sumBy(fac) {
    var n = Math.floor((num - 1)/fac);
    return fac * (n * (n + 1) / 2);
  }
  return sumBy(3) + sumBy(5) - sumBy(15);
};

console.log(sumMultiplesOf3Or5(10));
console.time();
console.log(sumMultiplesOf3Or5(1000)); // 233168 in <0.1ms
console.timeEnd();
