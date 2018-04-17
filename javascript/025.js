/*
The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain 1000
digits?
 */

// Once again, we need to create a data structure that can handle large numbers
// This time, let's create a class for it
function nDigitFibb(n) {

  class bigNum {
    constructor(value = 0) {
      this.num = value.toString().split("").map((digit) => +digit);
    }
    getLength() {
      return this.num.length;
    }
    add(num2) {
      // pad the smaller number with 0's so the digits line up
      if (this.getLength() < num2.getLength()) {
        this.num = Array(num2.getLength() - this.getLength()).fill(0).concat(this.num);
      } else if (this.getLength() > num2.getLength()) {
        num2.num = Array(this.getLength() - num2.getLength()).fill(0).concat(num2.num);
      }

      var carry = 0;
      var newNum = [];
      for (let i = this.num.length - 1; i >= 0; i--) {
        var newDigit = this.num[i] + num2.num[i] + carry;
        newNum.unshift(newDigit % 10);
        carry = Math.floor(newDigit / 10);
      }
      while (carry > 0) {
        newNum.unshift(carry % 10);
        carry = Math.floor(carry / 10);
      }
      var sum = new bigNum();
      sum.num = newNum;
      return sum;
    }
  }

  var a = new bigNum(1);
  var b = new bigNum(1);
  var c = a.add(b);
  var count = 3;

  // var test1 = new bigNum(8);
  // var test2 = new bigNum(13);
  // var test3 = test1.add(test2);
  // console.log(test3);

  while (c.getLength() < n) {
    a = b;
    b = c;
    c = a.add(b);
    count++;
  }

  return count;
}

console.log(nDigitFibb(3));
console.time();
console.log(nDigitFibb(1000)); // 4782 in 250ms
console.timeEnd();