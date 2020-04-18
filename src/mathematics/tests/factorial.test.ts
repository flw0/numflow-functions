import factorial from "../factorial";

test("Calculate factorial of 1", () => {
  expect(factorial(1)).toBe(1);
});

test("Calculate factorial of 0", () => {
  expect(factorial(0)).toThrow(new RangeError);
});

test("Calculate various other factorials", () => {
  expect(factorial(3)).toBe(6);

  expect(factorial(4)).toBe(24);
});
