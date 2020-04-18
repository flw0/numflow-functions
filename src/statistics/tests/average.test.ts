import average from "../average";

test("Check average of single value", () => {
  expect(average([1])).toBe(1);
});

test("Check average equal to 0", () => {
  expect(average([-1, 1])).toBe(0);
});

test("Check average of single zero entry", () => {
  expect(average([0])).toBe(0);
});

test("Check average of list of entries", () => {
  expect(average([1, 2, 3, 4, 5])).toBe(3);
});
