/*
If the numbers 1 to 5 are written out in words: one, two, three, four, five,
then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out
in words, how many letters would be used?
 */

console.time();
// For 1 through 99:
// 1-9 is:
var first9 = 'onetwothreefourfivesixseveneightnine'.length;
// 10-19 is:
var teens = 'teneleventwelvethirteenfourteenfifteensixteenseventeeneighteennineteen'.length;
// 20-99 is in the form of (tens_prefix)(1-9):
var to99 = "twentythirtyfortyfiftysixtyseventyeightyninety".length * 10 + first9 * 8;
// the total sum of 1-99 is:
var from1to99 = first9 + teens + to99;

// For 100 through 999, there are two forms:
// (1-9)hundred
// (1-9)hundred and(1-99)
var from100to999 = (first9 * 100 // each number appears 100 times
  + 'hundred'.length * 9 // for 100, 200, 300..900
  + 'hundredand'.length * 99 * 9 // for every 101..199, 201..299, ..999
  + from1to99 * 9); // for every x01..x99

// Don't forget "onethousand"
var total = from1to99 + from100to999 + "onethousand".length;
console.log(total); //21124 in 1.5ms
console.timeEnd();
