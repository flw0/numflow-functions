/**
 * Source: https://codereview.stackexchange.com/questions/212591/find-the-greatest-common-divisor-of-n-numbers
 * @param a 
 * @param b 
 */
function gcdTwoNumbers(a: number, b: number): number {
  if (b === 0) {
    return a;
  }

  return gcdTwoNumbers(b, a % b);
}

function gcd(values: number[]) {
  let factors = values[0];

  for (let i = 1; i < values.length; i++) {
    factors = gcdTwoNumbers(factors, values[i]);
  }

  return factors;
}

export default gcd;
