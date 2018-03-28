/*
A palindromic number reads the same both ways. The largest palindrome made from
the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

// calculate largest products first, checking if palindrome
// exit inner or outer loop if subsequent products are < current max
var largestPalindromeProduct = function() {

  function isPalindrome(num) {
    return ("" + num).split("").reverse().join("") == num;
  }

  var largest = 0;
  for (let i = 999; i > 0; i--) {
    if (i * 999 < largest) break;
    for (let j = 999; j > 0; j--) {
      var product = i * j;
      if (product < largest) break;
      if (isPalindrome(product)) {
        largest = product;
      }
    }
  }
  return largest;
};

console.time();
console.log(largestPalindromeProduct()); //906609 in 11ms
console.timeEnd();
