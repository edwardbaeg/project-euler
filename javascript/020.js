/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
 */

// Again, we need to create a data structure for very large numbers.
// Let's use an array based data structure:
function factorialDigitSum(n) {
  var num = ("" + n).split("").map((numStr) => +numStr);

  function multiply(x) {
    var carry = 0;
    for (let i = num.length - 1; i >= 0; i--) {
      var newDigit = num[i] * x + carry;
      num[i] = newDigit % 10;
      carry = Math.floor(newDigit / 10);
    }
    while (carry > 0) {
      num.unshift(carry % 10);
      carry = Math.floor(carry/10);
    }
  }

  for (let i = n - 1; i > 0; i--) {
    multiply(i);
  }
  return num.reduce((sum, digit) => sum + digit);
}

console.log(factorialDigitSum(10));
console.time();
console.log(factorialDigitSum(100)); // 648 in 2.6ms
console.timeEnd();