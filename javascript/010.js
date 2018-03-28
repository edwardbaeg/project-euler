/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

// brute force method
// iterate through every odd number
var sumPrimesBelow = function(target) {
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

  // start sum with 2 so we can start at 3 and only iterate through odd numbers
  var sum = 2;
  var num = 3;
  while (num < target) {
    if (isPrime(num)) {
      sum += num;
    }
    num += 2;
  }
  return sum;
};

console.log(sumPrimesBelow(10));
console.time();
console.log(sumPrimesBelow(2000000)); // 142913828922 in 240ms
console.timeEnd();

// Sieve of Eratosthenes method
// start at first prime number: 2. All multiples of 2 are not prime cross out
// next non crossed out number is prime; 3. Cross out all multiples of 3
// next non crossed out number is 5. repeat
// only prime numbers will be left
var sumPrimesBelow = function(num) {
  var nums = [];
  for (let i = 0; i < num; i++) {
    nums.push(false); // not crossed out
  }

  // cross out even numbers
  for (let i = 4; i <= num; i += 2) {
    nums[i] = true;
  }

  // cross out others
  // only check odd numbers
  // only check up to and including sqrt(num) because
  // all composites > sqrt(num) has a factor < sqrt(num)
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (!nums[i]) {
      sum += i;
      for (let j = 2 * i; j <= num; j += i) {
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

console.log(sumPrimesBelow(10));
console.time();
console.log(sumPrimesBelow(2000000)); // 142913828922 in 90ms
console.timeEnd();