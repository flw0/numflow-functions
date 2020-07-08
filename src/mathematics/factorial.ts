/**
 * Calculates the factorial for a given number
 * @param value Input value for the function
 */
function factorial(value: number): number {
  if (value < 0) {
    throw new RangeError();
  }

  let fac = 1;

  for (let i = 1; i <= value; i += 1) {
    fac *= i;
  }

  return fac;
}

export default factorial;
