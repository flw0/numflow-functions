import { matrix } from '../Matrix';
import rand from '../rand';

test('Check if Matrix can be constructed from a string with newlines', () => {
  const a = matrix(`1 2
                    3 4`);

  expect(a.width).toBe(2);
  expect(a.height).toBe(2);
  expect(a.getValues()).toEqual([1, 2, 3, 4]);
});

test('Check if Matrix can be constructed from a string with ;', () => {
  const a = matrix(`1 2 ; 3 4 ; 5 6`);

  expect(a.width).toBe(2);
  expect(a.height).toBe(3);
  expect(a.getValues()).toEqual([1, 2, 3, 4, 5, 6]);
});

test('Check if Matrix can be constructed from a string with ; and newlines', () => {
  const a = matrix(`1 2;
                    3 4;
                    5 6`);

  expect(a.width).toBe(2);
  expect(a.height).toBe(3);
  expect(a.getValues()).toEqual([1, 2, 3, 4, 5, 6]);
});

test('Check if Matrix can be constructed from a string with newlines, ; and whitespace', () => {
  const a = matrix(`             1       2                ;                    
                                     3             4            ;                    
                          5                 6                  ;`);

  expect(a.width).toBe(2);
  expect(a.height).toBe(3);
  expect(a.getValues()).toEqual([1, 2, 3, 4, 5, 6]);
});

test('Check if Matrix can be constructed from 1D array', () => {
  const width = 2;
  const height = 2;
  const values = [1, 2, 3, 4];

  const a = matrix(values, width, height);

  expect(a.width).toBe(2);
  expect(a.height).toBe(2);
  expect(a.getValues()).toEqual(values);
});

test('Check matrix addition functionality', () => {
  const a = matrix(`1 2; 3 4`);
  const b = matrix(`1 2; 3 4`);

  const c = a['+'](b);

  expect(c.width).toBe(2);
  expect(c.height).toBe(2);
  expect(c.getValues()).toEqual([2, 4, 6, 8]);
});

test('Check matrix multiplication functionality', () => {
  const a = matrix(`3 4 2`);
  const b = matrix(`13 9 7 15; 8 7 4 6; 6 4 0 3`);

  const c = a['*'](b);

  expect(c.width).toBe(4);
  expect(c.height).toBe(1);
  expect(c.getValues()).toEqual([83, 63, 37, 75]);
});

test('Check if multiplication error is thrown when dimensions do not match', () => {
  const a = matrix(`3 4`);
  const b = matrix(`13 9 7 15; 8 7 4 6; 6 4 0 3`);

  expect(() => {
    a['*'](b);
  }).toThrow();
});

test('Check matrix subtraction functionality', () => {
  const a = matrix(`1 2; 3 4`);
  const b = matrix(`-1 -2; -3 -4`);

  const c = a['-'](b);

  expect(c.width).toBe(2);
  expect(c.height).toBe(2);
  expect(c.getValues()).toEqual([2, 4, 6, 8]);
});

test('Check if Matrix can be constructed from 2D array', () => {
  const values = [
    [1, 2],
    [3, 4]
  ];

  const a = matrix(values);

  expect(a.width).toBe(2);
  expect(a.height).toBe(2);
  expect(a.getValues()).toEqual([1, 2, 3, 4]);
});

test('Check if dot product returns the correct value', () => {
  const a = matrix(`1 2; 3 4`);

  expect(a.dot(a)).toBe(30);
});

test('Check if dot product throws error when matrix dimensions do not match', () => {
  const a = matrix(`1 2; 3 4`);
  const b = matrix(`1 2`);

  expect(() => {
    a.dot(b);
  }).toThrow();
});

test('Test the performance of matrix multiplication', () => {
  const size = 512;

  const a = rand(size, size);
  const b = rand(size, size);

  let totalTime = 0;
  const amountOfRuns = 5;

  for (let i = 0; i < 5; i += 1) {
    const startTime = new Date().getTime();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const c = a['*'](b);

    const endTime = new Date().getTime();

    totalTime += endTime - startTime;
  }

  const averageTime = totalTime / amountOfRuns;

  expect(averageTime).toBeLessThan(750);
});

test('Test the performance of matrix addition', () => {
  const size = 4096;

  const a = rand(size, size);
  const b = rand(size, size);

  let totalTime = 0;
  const amountOfRuns = 5;

  for (let i = 0; i < 5; i += 1) {
    const startTime = new Date().getTime();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const c = a['+'](b);

    const endTime = new Date().getTime();

    totalTime += endTime - startTime;
  }

  const averageTime = totalTime / amountOfRuns;

  expect(averageTime).toBeLessThan(350);
});
