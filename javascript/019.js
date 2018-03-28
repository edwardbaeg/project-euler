/*
You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.

A leap year occurs on any year evenly divisible by 4, but not on a century
unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century
(1 Jan 1901 to 31 Dec 2000)?
*/

console.time();
// create an array-based data structure for keeping track of the date
// month, day, year, day # (mon = 1, tues = 2... sunday is divisible by 7)
var date = [1, 1, 1900, 1];

var months31 = [1, 3, 5, 7, 8, 10, 12];
var months30 = [4, 6, 9, 11];

var firstSun = 0;

while (date[2] !== 2001) {
  date[1]++;
  date[3]++;
  // reset day at end of month
  if (date[1] > 31 && months31.includes(date[0]) || date[1] > 30 && months30.includes(date[0])) {
    date[0]++;
    date[1] = 1;
  }
  // ...for feb
  if (date[1] > 28 && date[0] === 2 && (date[2] % 4 !== 0 || date[2] % 100 === 0 && date[2] % 400 !== 0) || date[1] > 29 && date[0] == 2) {
    date[0]++;
    date[1] = 1;
  }
  // reset day and month at the end of the year
  if (date[0] === 13) {
    date[0] = 1;
    date[2]++;
  }
  // count number of Sundays on the first of the month
  if (date[3] % 7 === 0 && date[1] == 1 && date[2] >= 1901 && date[2] <= 2000) {
    firstSun++;
  }
}
console.log(firstSun); // 171 in 6.6ms
console.timeEnd();