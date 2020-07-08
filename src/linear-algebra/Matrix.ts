type MatrixParams = number[] | number[][] | string;

class Matrix {
  readonly width: number;

  readonly height: number;

  protected values: number[]; // Float64Array

  /**
   * Create a new Matrix to perform calculations with
   * @param values The values from which the matrix should be constructed
   * @param width The width of the matrix to be constructed
   * @param height The height of the matrix to be constructed
   */
  constructor(values: MatrixParams, width?: number, height?: number) {
    // If the values passed is not a 2D array but a string or a 1D array
    if (values[0].constructor !== Array) {
      // If the value passed is a string
      if (typeof values === 'string') {
        const result = Matrix.toMatrixDataFrom2DArray(Matrix.stringTo2DArray(values));

        this.width = result.width;
        this.height = result.height;
        this.values = result.values;
      }

      // If the value passed is 1D array, then check if width and height are specified
      else if (width !== undefined && height !== undefined) {
        // Check if the amount of values in the 1D values array has the same amount of element as
        // the specified height multiplied by the specified width
        if (values.length === width * height) {
          this.width = width;
          this.height = height;
          this.values = values as number[];
        } else {
          throw new TypeError('The specified width and height do not match the passed data!');
        }
      } else {
        throw new TypeError('Width or height is undefined and is needed to construct the matrix!');
      }
    }
    // At this point, only a 2D matrix can be possibly passed, therefore check if there are no
    // and height parameters specified, as they will be obtained from the 2D array itself
    else if (width === undefined && height === undefined) {
      const result = Matrix.toMatrixDataFrom2DArray(values as number[][]);

      this.width = result.width;
      this.height = result.height;
      this.values = result.values;
    } else {
      throw new TypeError(
        'Cannot specify height and width when creating a matrix from a 2D array!'
      );
    }
  }

  private static toMatrixDataFrom2DArray(input: number[][]) {
    const valuesIn1D: number[] = [];

    const width = input[0].length;

    for (let i = 0; i < input.length; i += 1) {
      if (input[i].length === width) {
        for (let j = 0; j < input[i].length; j += 1) valuesIn1D.push(input[i][j]);
      } else throw new TypeError('The width of the specified array is not the same everywhere!');
    }

    return { width: input[0].length, height: input.length, values: valuesIn1D };
  }

  /**
   *
   * @param input
   *
   * @todo Make the from string also work when there are both newlines and ; present
   */
  private static stringTo2DArray(input: string): number[][] {
    const searchRegExp = /;/g;
    const replaceWith = '\n';

    const newLined = input.replace(searchRegExp, replaceWith);

    const rows = newLined.split('\n');

    const numericValues: number[][] = rows.reduce((result: number[][], row) => {
      const cleanedUpRow = row.replace(/\s\s+/g, ' ').trim();

      if (cleanedUpRow !== '') {
        const rowValues = cleanedUpRow.split(' ').map((value) => {
          const number = Number(value);

          if (Number.isNaN(number)) {
            throw new TypeError('One of the values specified to create a matrix is non-numeric!');
          }

          return number;
        });

        result.push(rowValues);
      }
      return result;
    }, []);

    return numericValues;
  }

  public dot(a: Matrix): number {
    let result = 0;

    if (this.width !== a.width || this.height !== a.height)
      throw new TypeError(
        'The dimensions of the matrices to calculate the dot product from do not match'
      );

    const aValues = a.getValues();

    for (let i = 0; i < a.width * a.height; i += 1) {
      result += aValues[i] * this.values[i];
    }

    return result;
  }

  /**
   * Add a number or a matrix to the current matrix
   * @param a The value or the matrix to be added to this matrix
   */
  '+'(a: Matrix | number): Matrix {
    const result = new Array(this.width * this.height);

    if (typeof a === 'number') {
      for (let i = 0; i < this.width * this.height; i += 1) {
        result[i] = this.values[i] - a;
      }
    } else {
      if (this.width !== a.width || this.height !== a.height)
        throw new TypeError('The dimensions of the matrices to be added do not match');

      const aValues = a.getValues();

      for (let i = 0; i < a.width * a.height; i += 1) {
        result[i] = aValues[i] + this.values[i];
      }
    }

    return new Matrix(result, this.width, this.height);
  }

  /**
   * Subtract a number or a matrix from the current matrix
   * @param a The value or the matrix to be subtracted from this matrix
   */
  '-'(a: Matrix | number): Matrix {
    const result = new Array(this.width * this.height);

    if (typeof a === 'number') {
      for (let i = 0; i < this.width * this.height; i += 1) {
        result[i] = this.values[i] - a;
      }
    } else {
      if (this.width !== a.width || this.height !== a.height)
        throw new TypeError('The dimensions of the matrices to be subtracted do not match');

      const aValues = a.getValues();

      for (let i = 0; i < a.width * a.height; i += 1) {
        result[i] = this.values[i] - aValues[i];
      }
    }

    return new Matrix(result, this.width, this.height);
  }

  /**
   * Multiply the matrix by a number or by another matrix
   * @param a The value or the matrix with which the multiplication should take place
   */
  '*'(a: Matrix | number): Matrix {
    const result = new Array(this.width * this.height);

    if (typeof a === 'number') {
      for (let i = 0; i < this.width * this.height; i += 1) {
        result[i] = this.values[i] * a;
      }
    } else {
      if (a.height !== this.width)
        throw new TypeError('The dimensions of the matrices to be multiplied do not match');

      if (a.width * a.height + this.width * this.height < 5000) {
        return Matrix.basicMultiplication(this, a);
      }

      return Matrix.basicMultiplication(this, a);

      // else {
      //   return strassen(a, b, 8)
      // }
    }

    return new Matrix(result, this.width, this.height);
  }

  '/'(a: number): Matrix {
    const result = new Array(this.width * this.height);

    for (let i = 0; i < this.width * this.height; i += 1) {
      result[i] = this.values[i] / a;
    }

    return new Matrix(result, this.width, this.height);
  }

  /**
   * Do the matrix to the power of a number
   * @param a The power which should be applied on the matrix
   */
  '^'(a: number): Matrix {
    const result: number[] | undefined[] = new Array(this.width * this.height);

    for (let i = 0; i < this.width * this.height; i += 1) {
      result[i] = this.values[i] ** a;
    }

    return new Matrix(result as number[], this.width, this.height);
    // Do a matrix to the power
  }

  private static basicMultiplication(a: Matrix, b: Matrix): Matrix {
    const aValues = a.getValues();
    const bValues = b.getValues();

    const bHeight = b.height;
    const bWidth = b.width;
    const aHeight = a.height;
    const aWidth = a.width;

    const result: number[] = new Array(a.height * b.width);

    let counter = 0;

    for (let j = 0; j < aHeight; j += 1) {
      let innerCounter = 0;

      for (let i = 0; i < bWidth; i += 1) {
        let total = 0;

        let kCounter = i;

        const maxForLoop = innerCounter + bHeight;

        for (let k = innerCounter; k < maxForLoop; k += 1) {
          total += aValues[k] * bValues[kCounter];

          kCounter += bWidth;
        }

        result[counter] = total;

        counter += 1;
      }

      innerCounter += aWidth;
    }

    return new Matrix(result, b.width, a.height);
  }

  /**
   * Return the values of this matrix as a 1D array
   */
  public getValues(): number[] {
    return this.values;
  }

  /**
   * Converts matrix to a String. See example below:
   * ```
   * ┌                                ┐
   * │ -1,00 -1,92 -1,80 -0,92  0,25  │
   * │  0,05  0,99  0,25 -0,50 -0,19  │
   * │  0,98 -1,94 -1,35  0,22 -0,88  │
   * │ -0,85 -1,63  0,07 -0,39 -0,24  │
   * │  0,45 -0,33 -1,14  0,07 -0,61  │
   * └                                ┘
   * ```
   */
  public toString(): string {
    const parts: string[] = new Array(this.height + 2);

    for (let i = 0; i < this.width * this.height; i += 1) {
      if (i % this.width === 0) parts.push('│ ');
      else parts.push(' ');

      if (this.values[i] > 0) parts.push(' ');

      parts.push(this.values[i].toString());

      if ((i + 1) % this.width === 0) parts.push('  │\n');
    }

    const lineLength = this.width * 6 + 4;

    const prepend = `┌${' '.repeat(lineLength - 2)}┐\n`;
    const append = `└${' '.repeat(lineLength - 2)}┘\n`;

    return prepend + parts.join('') + append;
  }
}

function matrix(values: number[][]): Matrix;
function matrix(values: number[], width: number, height: number): Matrix;
function matrix(values: string): Matrix;
function matrix(values: MatrixParams, width?: number, height?: number): Matrix {
  return new Matrix(values, width, height);
}

export { matrix };

export default Matrix;
