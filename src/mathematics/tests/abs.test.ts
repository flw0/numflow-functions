import abs from '../abs';

import { complex } from '../Complex';
import { matrix } from '../../linear-algebra';

test('Check absolute value of 0', () => {
  expect(abs(0)).toBe(0);
});

test('Check absolute value of a negative number', () => {
  expect(abs(-1)).toBe(1);
});

test('Check absolute value of a positive number', () => {
  expect(abs(1)).toBe(1);
});

test('Check absolute value of a complex number', () => {
  const c = complex(3, 4);

  expect(abs(c)).toBeCloseTo(5);
});

test('Check absolute value of a matrix', () => {
  const a = matrix(`-1 -2 3 4`);

  expect(abs(a).getValues()).toEqual([1, 2, 3, 4]);
});
