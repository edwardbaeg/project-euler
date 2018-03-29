/*
A perfect number is a number for which the sum of its proper divisors is exactly
equal to the number. For example, the sum of the proper divisors of 28 would be
1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n
and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest
number that can be written as the sum of two abundant numbers is 24. By
mathematical analysis, it can be shown that all integers greater than 28123 can
be written as the sum of two abundant numbers. However, this upper limit cannot
be reduced any further by analysis even though it is known that the greatest
number that cannot be expressed as the sum of two abundant numbers is less than
this limit.

Find the sum of all the positive integers which cannot be written as the sum of
two abundant numbers.
 */

function NonAbundantSums(target) {

  function d(n) {
    var sum = 1;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        sum += i;
        if (n / i !== i) {
          sum += n / i;
        }
      }
    }
    return sum;
  }

  function isAbundant(num) {
    return d(num) > num;
  }

  function getAbundantSums(abundants) {
    var sums = new Array(28123 + 1);
    for (let i = 0; i < abundants.length; i++) {
      for (let j = i; j < abundants.length; j++) {
        var sum = abundants[i] + abundants[j];
        if (sum < target) {
          sums[sum] = true;
        } else {
          break;
        }
      }
    }
    return sums;
  }

  var abundants = [];
  for (let i = 1; i < target; i++) {
    if (isAbundant(i)) {
      abundants.push(i);
    }
  }

  var abundantSums = getAbundantSums(abundants);
  var sum = 0;
  for (let i = 1; i < target; i++) {
    if (!abundantSums[i]) {
      sum += i;
    }
  }

  return sum;
}

console.time();
console.log(NonAbundantSums(28123)); // 4179871 in 45ms
console.timeEnd();