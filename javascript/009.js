/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

var target = 1000;
var squares = [];
for (let i = 1; i < 2000; i++) {
  squares.push(i ** 2);
}

for (let i = 0; i < squares.length; i++) {
  for (let j = i + 1; j < squares.length; j++) {
    for (let k = j + 1; k < squares.length; k++) {
      if (squares[i] + squares[j] < squares[k]) {
        break;
      }
      if (squares[i] + squares[j] === squares[k] && i + j + k + 3 === 1000) {
        console.log(i+1,j+1,k+1, (i+1)*(j+1)*(k+1));
        return;
      }
    }
  }
}