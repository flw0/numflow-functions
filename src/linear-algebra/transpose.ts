import Matrix from "./Matrix";

function transpose(a: Matrix) {
  const values = a.getValues();

  const transposedValues = new Array(a.width * a.height);

  for (let i = 0; i < a.height; i++) {
    for (let j = 0; j < a.width; j++) {
      transposedValues[j * a.height + i] = values[i * a.width + j];
    }
  }

  return new Matrix(transposedValues, a.height, a.width);
}

export default transpose;
