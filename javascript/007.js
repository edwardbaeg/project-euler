/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that
the 6th prime is 13.

What is the 10 001st prime number?
*/

var nthPrime = function(n) {
  // a relatively efficient prime number check
  function isPrime(num) {
    if (num < 2) return false;
    if (num < 4) return true;
    if (num % 2 === 0) return false;
    if (num % 3 === 0) return false;
    // all prime numbers > 3 are in the form of 6k +/- 1
    for (let i = 5; i <= Math.sqrt(num); i += 6) {
      if (num % (i) === 0 ) return false;
      if (num % (i + 2) === 0 ) return false;
    }
    return true;
  }

  // only check odd numbers
  var num = 3;
  var prime = 2;
  var count = 1;

  while(count < n) {
    if (isPrime(num)) {
      count++;
      prime = num;
    }
    num += 2;
  }
  return prime;
};

console.log(nthPrime(6));
console.time();
console.log(nthPrime(10001)); // 104743 in 9ms
console.timeEnd();

