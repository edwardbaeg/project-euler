/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

var sumPrimesBelow = function(num) {
  var isPrime = function(num) {
    if (num === 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0) return false;
    if (num % 3 === 0) return false;
    for (let i = 5; i <= Math.sqrt(num); i += 6) {
      if (num % i === 0) return false;
      if (num % (i + 2) === 0) return false;
    }
    return true;
  };
  var primes = [];
  var counter = 3;
  while (counter < num) {
    if (isPrime(counter)) primes.push(counter);
    counter+=2;
  }
  return primes.reduce((sum, val) => sum + val,2);
};

console.log(sumPrimesBelow(10));
console.log(sumPrimesBelow(2000000)); //0.4s
// console.log(sumPrimesBelow(7000000)); //1.6s

//sieve of Eratosthenes method
sumPrimesBelow = function(num) {
  var nums = [];
  for (let i = 0; i < num; i++) {
    nums.push(false); //not crossed out
  }

  //cross out even numbers
  for (let i = 4; i <= num; i+=2) {
    nums[i] = true;
  }

  //cross out others
  for (let i = 3; i <= Math.sqrt(num); i+=2) {
    if (!nums[i]) {
      for (let j = 2*i; j <= num; j += i) {
        nums[j] = true;
      }
    }
  }

  var sum = 2;
  for (let i = 3; i <= num; i+=2) {
    if (!nums[i]) {
      sum += i;
    }
  }
  return sum;
};

console.log(sumPrimesBelow(2000000));
// console.log(sumPrimesBelow(10000000));