import Matrix from "./Matrix";

function eye(size: number) {
  return new Eye(size);
}

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

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const currentIndex = i * size + j;
        if (j == i) {
          result[currentIndex] = 1;
        } else result[currentIndex] = 0;
      }
    }

    super(result as number[], size, size);
  }
}

export { eye };

export default Eye;
