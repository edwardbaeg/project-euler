/*
Each new term in the Fibonacci sequence is generated by adding the previous two
terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed
four million, find the sum of the even-valued terms.
*/

// keep track of two fibonacci numbers
// iterate by storing the largest number and calculating the next one
var evenFibonacci = function(num) {
  var a = 1;
  var b = 1;

  var next = 2;
  var sum = 0;

  while(a + b < num) {
    next = a + b;
    if (next % 2 === 0) {
      sum += next;
    }
    a = b;
    b = next;
  }
  return sum;
};

console.time();
console.log(evenFibonacci(4000000)); // 4613732 in 1.6ms
console.timeEnd();
