import absolute from "../absolute";

test("Check absolute value of 0", () => {
  expect(absolute(0)).toBe(0);
});

test("Check absolute value of a negative number", () => {
  expect(absolute(-1)).toBe(1);
});

test("Check absolute value of a positive number", () => {
  expect(absolute(1)).toBe(1);
});
