import Matrix from './Matrix';

class Diag extends Matrix {
  /**
   * Create a diagonal matrix from an array of values
   * @param values The values which should be put on the diagonal
   */
  constructor(values: number[]) {
    const result = new Array(values.length ** 2);

    for (let i = 0; i < values.length; i += 1) {
      for (let j = 0; j < values.length; j += 1) {
        const currentIndex = i * values.length + j;
        if (j === i) {
          result[currentIndex] = values[i];
        } else result[currentIndex] = 0;
      }
    }

    super(result as number[], values.length, values.length);
  }
}

function diag(values: number[]): Diag {
  return new Diag(values);
}

export default diag;
