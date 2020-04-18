import minimum from "../minimum";

test("Check minimum of single value", () => {
  expect(minimum([1])).toBe(1);
});

test("Check minimum of single zero entry", () => {
  expect(minimum([0])).toBe(0);
});

test("Check minimum of list of entries", () => {
  expect(minimum([1, 2, 3, 4, 5])).toBe(1);
});

test("Check minimum of list with negative entries", () => {
  expect(minimum([-1, -2, -3, -4, -5])).toBe(-5);
});
