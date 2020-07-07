import Matrix from './Matrix';

class Eye extends Matrix {
  /**
   * Create a new identity matrix of a given size
   *
   * When running `new Eye(3)`, the result looks like this:
   * ```
   * ┌           ┐
   * │  1  0  0  │
   * │  0  1  0  │
   * │  0  0  1  │
   * └           ┘
   * ```
   * @param size The size of the identity matrix to be created
   */
  constructor(size: number) {
    const result = new Array(size * size);

    for (let i = 0; i < size; i += 1) {
      for (let j = 0; j < size; j += 1) {
        const currentIndex = i * size + j;
        if (j === i) {
          result[currentIndex] = 1;
        } else result[currentIndex] = 0;
      }
    }

    super(result as number[], size, size);
  }
}

function eye(size: number): Eye {
  return new Eye(size);
}

export default eye;
