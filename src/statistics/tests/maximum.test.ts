import maximum from "../maximum";

test("Check maximum of single value", () => {
  expect(maximum([1])).toBe(1);
});

test("Check maximum of single zero entry", () => {
  expect(maximum([0])).toBe(0);
});

test("Check maximum of list of entries", () => {
  expect(maximum([1, 2, 3, 4, 5])).toBe(5);
});

test("Check maximum of list with negative entries", () => {
  expect(maximum([-1, -2, -3, -4, -5])).toBe(-1);
});
