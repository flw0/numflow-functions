import Matrix from "../Matrix";
import transpose from "../transpose";

test("Check if tranposing a matrix works correctly", () => {
  const a = new Matrix(`1 2
                        3 4
                        5 6`);

  const b = transpose(a);

  console.log(b);

  expect(b.width).toBe(3);
  expect(b.height).toBe(2);
  expect(b.getValues()).toEqual([1, 3, 5, 2, 4, 6]);
});
