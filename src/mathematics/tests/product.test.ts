import product from "../product";

test("Calculate products of 1's", () => {
  expect(product([1, 1])).toBe(1);
});

test("Calculate products containing 0", () => {
  expect(product([1, 1, 4, 5, 0])).toBe(0);
});

test("Calculate products with one negative entry", () => {
  expect(product([1, -1])).toBe(-1);
});
