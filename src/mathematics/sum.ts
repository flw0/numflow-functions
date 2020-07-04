import { Matrix } from "../linear-algebra/";

function sum(a: number[] | Matrix): number {
  if (Array.isArray(a) === true)
    return (a as number[]).reduce((a, b) => a + b, 0);
  else {
    const matrixValues = (a as Matrix).getValues();

    return sum(matrixValues);
  }
}

export default sum;
