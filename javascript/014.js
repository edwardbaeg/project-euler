/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains
10 terms. Although it has not been proved yet (Collatz Problem), it is thought
that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

// Numbers share common collatz sequences.
// For example, the collatz sequence of 20 is just an additional number in front
// of the collatz sequence for 10. Use memoization: save the path lengths for
// each number
// This can be done recursively; the path length for a number is equal to
// 1 + the path length of the last number
var longestCollatzSequence = function() {
  var distances = [0, 1];

  function populateDistances(num) {
    if (distances[num]) {
      return distances[num];
    }
    if (num % 2 === 0) {
      distances[num] = 1 + populateDistances(num / 2);
      return distances[num];
    } else {
      distances[num] = 1 + populateDistances(num * 3 + 1);
      return distances[num];
    }
  }

  var longestDist = 0;
  var longestNum = 0;

  for (let i = 1; i <= 1000000; i++) {
    distance = populateDistances(i);
    if (distance > longestDist) {
      longestDist = distance;
      longestNum = i;
    }
  }

  return longestNum;
};

console.time();
console.log(longestCollatzSequence()); // 837799 in 600ms
console.timeEnd();