import factorial from '../factorial';

test('Calculate factorial of 1', () => {
  expect(factorial(1)).toBe(1);
});

test('Calculate factorial of 0', () => {
  expect(factorial(0)).toBe(1);
});

test('Check if error is thrown when factorial of negative number is calculated', () => {
  expect(() => {
    factorial(-1);
  }).toThrow();
});

test('Calculate various other factorials', () => {
  expect(factorial(3)).toBe(6);

  expect(factorial(4)).toBe(24);
});
