/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

var nthPrime = function(n) {
  function isPrime(num) {
    if (num % 2 === 0) return false;
    if (num % 3 === 0) return false;
    for (let i = 5; i <= Math.sqrt(num); i += 6) {
      if (num % i === 0 ) return false;
      if (num % (i+2) === 0 ) return false;
    }
    return true;
  }

  var count = 1;
  var prime = 2;

  if (n === 1) return 2;

  var i = 1;
  while(count <= n) {
    if (isPrime(i)) {
      count++;
      prime = i;
    }
    i += 2;
  }
  return prime;
};

console.log(nthPrime(6));
console.log(nthPrime(10001));\