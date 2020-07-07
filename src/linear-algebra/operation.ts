import Matrix, { matrix } from './Matrix';

type AllowedOperations = 'sqrt' | 'abs' | 'exp' | 'sin' | 'cos' | 'tan';

function operation(a: number | Matrix, op: AllowedOperations): Matrix | number {
  if (typeof a === 'number') {
    return Math[op](a);
  }

  const matrixValues = a.getValues();

  const newMatrixValues = matrixValues.map((value) => Math[op](value));

  return matrix(newMatrixValues, a.width, a.height);
}

export default operation;
