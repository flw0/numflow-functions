import Matrix from "./Matrix";

function diag(values: number[]) {
  return new Diag(values);
}

class Diag extends Matrix {
  /**
   * Create a diagonal matrix from an array of values
   * @param values The values which should be put on the diagonal
   */
  constructor(values: number[]) {
    const result = new Array(values.length ** 2);

    for (let i = 0; i < values.length; i++) {
      for (let j = 0; j < values.length; j++) {
        const currentIndex = i * values.length + j;
        if (j == i) {
          result[currentIndex] = values[i];
        } else result[currentIndex] = 0;
      }
    }

    super(result as number[], values.length, values.length);
  }
}

export { diag };

export default Diag;
