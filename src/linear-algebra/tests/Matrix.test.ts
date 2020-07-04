import Matrix from "../Matrix";

test("Check if Matrix can be constructed from a string with newlines", () => {
  const a = new Matrix(`1 2
                        3 4`);

  expect(a.width).toBe(2);
  expect(a.height).toBe(2);
  expect(a.getValues()).toEqual([1, 2, 3, 4]);
});

test("Check if Matrix can be constructed from a string with ;", () => {
  const a = new Matrix(`1 2 ; 3 4 ; 5 6`);

  expect(a.width).toBe(2);
  expect(a.height).toBe(3);
  expect(a.getValues()).toEqual([1, 2, 3, 4, 5, 6]);
});

test("Check if Matrix can be constructed from a string with ; and newlines", () => {
  const a = new Matrix(`1 2;
                        3 4;
                        5 6`);

  expect(a.width).toBe(2);
  expect(a.height).toBe(3);
  expect(a.getValues()).toEqual([1, 2, 3, 4, 5, 6]);
});

test("Check if Matrix can be constructed from 1D array", () => {
  const width = 2;
  const height = 2;
  const values = [1, 2, 3, 4];

  const a = new Matrix(values, width, height);

  expect(a.width).toBe(2);
  expect(a.height).toBe(2);
  expect(a.getValues()).toEqual(values);
});

test("Check matrix addition functionality", () => {
  const a = new Matrix(`1 2; 3 4`);
  const b = new Matrix(`1 2; 3 4`);

  const c = a["+"](b);

  expect(c.width).toBe(2);
  expect(c.height).toBe(2);
  expect(c.getValues()).toEqual([2, 4, 6, 8]);
});

test("Check matrix multiplication functionality", () => {
  const a = new Matrix(`3 4 2`);
  const b = new Matrix(`13 9 7 15; 8 7 4 6; 6 4 0 3`);

  const c = a["*"](b);

  expect(c.width).toBe(4);
  expect(c.height).toBe(1);
  expect(c.getValues()).toEqual([83, 63, 37, 75]);
});

test("Check if multiplication error is thrown when dimensions do not match", () => {
  const a = new Matrix(`3 4`);
  const b = new Matrix(`13 9 7 15; 8 7 4 6; 6 4 0 3`);

  expect(() => {
    a["*"](b);
  }).toThrow();
});

test("Check matrix subtraction functionality", () => {
  const a = new Matrix(`1 2; 3 4`);
  const b = new Matrix(`-1 -2; -3 -4`);

  const c = a["-"](b);

  expect(c.width).toBe(2);
  expect(c.height).toBe(2);
  expect(c.getValues()).toEqual([2, 4, 6, 8]);
});

test("Check if Matrix can be constructed from 2D array", () => {
  const values = [
    [1, 2],
    [3, 4],
  ];

  const a = new Matrix(values);

  expect(a.width).toBe(2);
  expect(a.height).toBe(2);
  expect(a.getValues()).toEqual([1, 2, 3, 4]);
});

test("Check if dot product returns the correct value", () => {
  const matrix = new Matrix(`1 2; 3 4`);

  expect(matrix.dot(matrix)).toBe(30);
});

test("Check if dot product throws error when matrix dimensions do not match", () => {
  const a = new Matrix(`1 2; 3 4`);
  const b = new Matrix(`1 2`);

  expect(() => {
    a.dot(b);
  }).toThrow();
});
