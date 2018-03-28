/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

// create a list of squares
// iterate through combinations of a and b
function pythagoreanTrips(target) {
  var squares = [0];
  for (let i = 1; i < 500; i++) {
    squares.push(i ** 2);
  }

  for (let a = 1; a < squares.length; a++) {
    for (let b = a + 1; b < squares.length; b++) {
      c = target - a - b;
      if (squares[a] + squares[b] === squares[c] && a + b + c === target) {
        console.log(a, b, c);
        return a * b * c;
      }
    }
  }
}

console.time();
// console.log(pythagoreanTrips(12));
console.log(pythagoreanTrips(1000)); //31875000 in 5ms
console.timeEnd();