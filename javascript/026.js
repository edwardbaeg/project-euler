/*
A unit fraction contains 1 in the numerator. The decimal representation of the
unit fractions with denominators 2 to 10 are given:

1/2 =   0.5
1/3 =   0.(3)
1/4 =   0.25
1/5 =   0.2
1/6 =   0.1(6)
1/7 =   0.(142857)
1/8 =   0.125
1/9 =   0.(1)
1/10  =   0.1
Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be
seen that 1/7 has a 6-digit recurring cycle.

Find the value of d < 1000 for which 1/d contains the longest recurring cycle in
its decimal fraction part.
 */

// There is a repeating cycle if the division remainders repeat
// No repeating cycle if there is a remainder of 0
// For each division, multiply the previous remainder by 10.
// Let's consider the fraction 1/2
// 10 % 2 = 0
// Let's consider the fraction 1/3
// 10 % 3 = 1... 10 % 3 = 1... 10 % 3 = 1...
// Let's consider the fraction 1/11
// 10 % 11 = 10... 100 % 11 = 1... 10 % 11 = 0... 100 % 11 = 1
//
// We will also need to determine the length of the repeat (if there is one)
// Consider 1/36 = 0.0277777777
// and 1/37 = 0.027027027027
// 

function reciprocalCycles(d) {

  // returns the number of digits in recurring cycle
  // 0 if not repeating
  function repeatingDigits(denom) {
    var digits = [];
    digits.push(Math.floor(10 / denom));
    var remainder = 10 % denom;
    while (remainder !== 0 && digits.length < 10) {
      digits.push(Math.floor(remainder * 10 / denom));
      remainder = remainder * 10 % denom;
    }
    console.log(digits);
  }
  repeatingDigits(d);
}

reciprocalCycles(37);