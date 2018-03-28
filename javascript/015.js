/*
Starting in the top left corner of a 2×2 grid, and only being able to move to
the right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?
 */

// The number of possible paths at a given location is equal to the sum of
// the possible paths to its left and above. Note the symmetry; the paths
// along the diagonal is equal to the paths above (or to the left) * 2
//
// 0  1  1  1  1  1
//    2  3  4  5  6
//       6 10 15 21
//         20 35 56
//            70 126
//               252

function latticePaths(n) {
  var paths = [[0], [1,2]];
  for (let i = 2; i <= n; i++) {
    var arr = [1];
    for (let j = 1; j <= i; j++) {
      if (j === i) {
        arr.push(arr[arr.length - 1] * 2);
      } else {
        arr.push(paths[i - 1][j] + arr[j - 1]);
      }
    }
    paths.push(arr);
  }
  return paths[n][n];
}
console.log(latticePaths(2));
console.time();
console.log(latticePaths(20)); // 137846528820 0.2ms
console.timeEnd();

// works but too slow
// function latticePaths(n) {
//   var routes = 0;
//   function recursiveWalk(x, y) {
//     if (x === n && y === n) {
//       routes++;
//       return;
//     }
//     if (x < n) {
//       recursiveWalk(x + 1, y);
//     }
//     if (y < n) {
//       recursiveWalk(x, y + 1);
//     }
//   }

//   recursiveWalk(0,0);
//   return routes;
// }
//