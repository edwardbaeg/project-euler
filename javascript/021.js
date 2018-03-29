/*
Let d(n) be defined as the sum of proper divisors of n (numbers less than n
which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and
each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55
and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and
142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
 */

function amicableNumbers(target) {

  // returns sum of all factors
  function d(n) {
    var sum = 1;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        sum += (i + n / i);
      }
    }
    return sum;
  }

  // returns n + d(n) if amicable; 0 otherwise
  function AmicablePair(n) {
    var sum = 0;
    var d1 = d(n);
    if (d1 < n) { // skip larger number in pair
      return sum;
    }
    var d2 = d(d1);
    if (n === d2 && n !== d1) {
      sum += n;
      if (d1 < target) {
        sum += d1;
      }
    }
    return sum;
  }

  var sum = 0;
  for (let i = 1; i < target; i++) {
    sum += AmicablePair(i);
  }

  return sum;
}

console.time();
console.log(amicableNumbers(10000)); // 31626 in 11ms
console.timeEnd();