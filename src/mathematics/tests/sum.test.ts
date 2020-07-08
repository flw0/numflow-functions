import sum from '../sum';

import { matrix } from '../../linear-algebra';

test('Check if sum of matrix works correctly', () => {
  expect(sum(matrix(`1 2 ; 3 4`))).toBe(10);
});

test('Check if sum of regular number works correctly', () => {
  expect(sum(1)).toBe(1);
});
