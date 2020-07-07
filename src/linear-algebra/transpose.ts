import Matrix from './Matrix';

function transpose(a: Matrix): Matrix {
  const values = a.getValues();

  const transposedValues = new Array(a.width * a.height);

  for (let i = 0; i < a.height; i += 1) {
    for (let j = 0; j < a.width; j += 1) {
      transposedValues[j * a.height + i] = values[i * a.width + j];
    }
  }

  return new Matrix(transposedValues, a.height, a.width);
}

export default transpose;
