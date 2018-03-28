/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

// prime factorization
// consider the number 180
// its prime factorization is 2 * 2 * 3 * 3 * 5
// 5 is obtained by dividing 180 by 2, 2, 3, and 3
// reduce number
var largestPrimeFactor = function(num) {
  while (num % 2 === 0) {
    num = num / 2;
  }
  // as factors come in pairs, no need to check past its sqrt
  // and no need to check even numbers
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    while (num % i === 0) {
      num = num / i;
    }
  }
  return num;
};

console.log(largestPrimeFactor(13195));
console.time();
console.log(largestPrimeFactor(600851475143)); // 6857 in 0.2ms
console.timeEnd();
