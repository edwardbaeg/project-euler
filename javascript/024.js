/*
A permutation is an ordered arrangement of objects. For example, 3124 is one
possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are
listed numerically or alphabetically, we call it lexicographic order. The
lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5,
6, 7, 8 and 9?

*/

// consider the sequence 1 2 3 4 5
// the next number is 1 2 3 5 4
// note: there is a "prefix" that is unchanged: 1 2 3
// the next number is 1 2 4 3 5
// note: the prefix must change because the last two, "5 4" is in descending
//   order. The "3" is replaced with the smallest number greater than it in the
//   tail, creating the prefix "1 2 4". Then the rest of the numbers are written
//   in order: "3 5".
// 1. find longest descending tail; rest is prefix
// 2. change last number in prefix
// 3. add numbers in increasing order

function lexicographicPermutation(n) {
  const START = 123456789;

  //find longest descending tail; rest is prefix
  function getPrefixAndTail(num) {
    tail = "" + num % 10; // start with last digit
    var prefix = Math.floor(num / 10);
    while (prefix % 10 > +tail[0]) {
      tail = "" + prefix % 10 + tail;
      prefix = Math.floor(prefix / 10);
    }

    return [prefix, tail];
  }

  // find the next prefix
  function getNextPrefix(prefix, tail) {
    var next = 9;

    while (tail > 0) { // traverse through all digits in tail
      if (tail % 10 < next && tail % 10 > prefix % 10) {
        next = tail % 10;
      }
      tail = Math.floor(tail / 10);
    }
    return prefix - prefix % 10 + next;
  }

  function removeInt(array, int) {
    return array.filter((num) => num !== int);
  }

  function addDigits(array, num) {
    array.push(...num.toString().split("").map((str) => +str));
    return array;
  }

  function getNextPermutation(num) {
    var prefix, tail;
    [prefix, tail] = getPrefixAndTail(num);
    var remaining = [];

    remaining.push(prefix % 10);
    prefix = getNextPrefix(prefix, tail);

    remaining = addDigits(remaining, tail);
    remaining = removeInt(remaining, prefix % 10);
    remaining.sort();

    while (remaining.length > 0) {
      prefix = prefix * 10 + remaining.shift();
    }
    return prefix;
  }

  var num = START;
  var count = 1;
  while (count < n) {
    num = getNextPermutation(num);
    count++;
  }
  return num;
}

console.time();
console.log(lexicographicPermutation(1000000)); // 2783915460 in 650ms
console.timeEnd();