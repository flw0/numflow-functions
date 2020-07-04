import Matrix from "../linear-algebra/Matrix";

function operation(
  a: Matrix | number,
  operation: "sqrt" | "abs" | "exp" | "sin" | "cos" | "tan"
) {
  if (typeof a === "number") {
    return Math[operation](a);
  } else {
    const matrixValues = a.getValues();

    const newMatrixValues = matrixValues.map((value) => Math[operation](value));

    return new Matrix(newMatrixValues, a.width, a.height);
  }
}

export default operation;
