import sum from "../sum";

import { Matrix } from "../../linear-algebra/";

test("Check sum of single value", () => {
  expect(sum([1])).toBe(1);
});

test("Check sum of single zero entry", () => {
  expect(sum([0])).toBe(0);
});

test("Check sum of list of entries", () => {
  expect(sum([1, 2, 3, 4, 5])).toBe(15);
});

test("Check sum of list with negative entries", () => {
  expect(sum([-1, -2, -3, -4, -5])).toBe(-15);
});

test("Check sum of list which should result in 0", () => {
  expect(sum([-1, -2, -3, -4, -5, 1, 2, 3, 4, 5])).toBe(0);
});

test("Check if sum of matrix works correctly", () => {
  expect(sum(new Matrix(`1 2 ; 3 4`))).toBe(10);
});
