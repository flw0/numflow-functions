import gcd from '../gcd';

import { matrix } from '../../linear-algebra/Matrix';

test("Calculate GCD with only 1's", () => {
  expect(gcd(matrix(`1 1`))).toBe(1);
});

test('Calculate GCD with list of %2 numbers', () => {
  expect(gcd(matrix(`10 2 4 8 16`))).toBe(2);
});

test('Calculate GCD with list containing 0', () => {
  expect(gcd(matrix(`0 2 4 8 16`))).toBe(2);
});
