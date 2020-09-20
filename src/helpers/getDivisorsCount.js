export default function getDivisorsCount(n) {
  // 1 is a special case where "1 and itself" are only one divisor rather than 2
  if (n === 1) {
    return 1;
  }

  var divisors = 2; // acounts for "1 and itself"

  var mod = 2;
  while (mod * mod <= n) {
    if (n % mod === 0) {
      if (mod * mod < n) {
        // mod and number/mod are (different) divisors
        divisors += 2;
      } else {
        // mod == number/mod is a divisor
        divisors += 1;
      }
    }
    mod++;
  }

  return divisors;
}
