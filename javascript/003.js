/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

var largestPrimeFactor = function(num) {
  while (num % 2 === 0) {
    num = num/2;
  }
  for (let i = 3; i < Math.sqrt(num); i += 2) {
    while (num % i === 0) {
      num = num/i;
    }
  }
  return num;
};

console.log(largestPrimeFactor(600851475143));