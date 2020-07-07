import eye from '../eye';

test('Check if Identity matrix is constructed correctly', () => {
  const a = eye(3);

  expect(a.width).toBe(3);
  expect(a.height).toBe(3);
  expect(a.getValues()).toEqual([1, 0, 0, 0, 1, 0, 0, 0, 1]);

  expect(a['*'](3).getValues()).toEqual([3, 0, 0, 0, 3, 0, 0, 0, 3]);
});
