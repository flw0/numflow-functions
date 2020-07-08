import { complex } from '../Complex';

test('Check if two regular complex numbers are added correctly', () => {
  const a = complex(2, 7);
  const b = complex(3, 8);

  expect(a['+'](b)).toStrictEqual(complex(5, 15));
});

test('Check if two regular complex numbers are subtracted correctly', () => {
  const a = complex(2, 7);
  const b = complex(3, 8);

  expect(a['-'](b)).toStrictEqual(complex(-1, -1));
});

test('Check if a complex number and a regular number are added correctly', () => {
  const a = complex(2, 7);
  const b = 5;

  expect(a['+'](b)).toStrictEqual(complex(7, 7));
});

test('Check if a complex number and a regular number are subtracted correctly', () => {
  const a = complex(2, 7);
  const b = 5;

  expect(a['-'](b)).toStrictEqual(complex(-3, 7));
});

test('Check if two regular complex numbers are multiplied correctly', () => {
  const a = complex(2, 7);
  const b = complex(3, 8);

  expect(a['*'](b)).toStrictEqual(complex(-50, 37));
});

test('Check if two regular complex numbers are divided correctly', () => {
  const a = complex(2, 7);
  const b = complex(3, 8);

  expect(a['/'](b)).toStrictEqual(complex(62 / 73, 5 / 73));
});

test('Check if a complex number and a regular number are multiplied correctly', () => {
  const a = complex(2, 7);
  const b = 5;

  expect(a['*'](b)).toStrictEqual(complex(10, 35));
});

test('Check if a complex number and a regular number are divided correctly', () => {
  const a = complex(2, 7);
  const b = 5;

  expect(a['/'](b)).toStrictEqual(complex(2 / 5, 7 / 5));
});

test('Calculate the power of a complex number', () => {
  const a = complex(0, 1);

  const b = a['^'](2);

  expect(b.re).toBeCloseTo(-1);
  expect(b.im).toBeCloseTo(0);

  const c = a['^'](3);

  expect(c.re).toBeCloseTo(0);
  expect(c.im).toBeCloseTo(-1);
});
