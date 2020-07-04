import Diag from "../Diag";

test("Check if a diagonal matrix is constructed correctly", () => {
  const a = new Diag([1, 2, 3]);

  expect(a.width).toBe(3);
  expect(a.height).toBe(3);
  expect(a.getValues()).toEqual([1, 0, 0, 0, 2, 0, 0, 0, 3]);
});
