import Fill from "../Fill";

test("Check if Fill matrix is constructed correctly", () => {
  const a = new Fill(3, 2);

  expect(a.width).toBe(3);
  expect(a.height).toBe(3);
  expect(a.getValues()).toEqual([2, 2, 2, 2, 2, 2, 2, 2, 2]);
});
