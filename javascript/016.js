/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?
 */

// Because JS loses precision with very large numbers,
// we'll use an array-based data structures to calculate the large product
function sumExponents(n) {
  var num = [2];

  // multiply number in array by two
  function double() {
    var carry = 0;
    for (let i = num.length - 1; i >= 0; i--) {
      var newDigit = num[i] * 2 + carry;
      num[i] = newDigit % 10;
      carry = Math.floor(newDigit / 10);
    }
    if (carry > 0) {
      num.unshift(carry);
      carry = 0;
    }
  }

  for (let i = 2; i <= n; i++) {
    double();
  }
  return num.reduce((sum, digit) => sum + digit);
}

console.log(sumExponents(15));
console.time();
console.log(sumExponents(1000)); // 1366 in 4.5ms
console.timeEnd();