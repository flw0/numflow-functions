import median from '../median';

import { matrix } from '../../linear-algebra';

test('Check median of single value', () => {
  expect(median(matrix(`1`))).toBe(1);
});

test('Check median of single zero entry', () => {
  expect(median(matrix(`0`))).toBe(0);
});

test('Check median of even amount of entries', () => {
  expect(median(matrix(`1 2 3 4`))).toBe(2.5);
});

test('Check median of uneven amount of entries', () => {
  expect(median(matrix(`-1 -2 -3 -4 -5`))).toBe(-3);
});
