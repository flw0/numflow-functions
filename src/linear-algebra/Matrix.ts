type MatrixParams = number[] | number[][] | string;

function matrix(values: MatrixParams, width?: number, height?: number) {
  return new Matrix(values, width, height);
}

class Matrix {
  protected values: number[]; // Float64Array

  public width: number;
  public height: number;

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
      if (typeof values === "string") {
        const result = this.toMatrixDataFrom2DArray(
          this.stringTo2DArray(values)
        );

        this.width = result.width;
        this.height = result.height;
        this.values = result.values;
      }
      // If the value passed is 1D array
      else {
        // Check if width and height are specified
        if (width !== undefined && height !== undefined) {
          // Check if the amount of values in the 1D values array has the same amount of element as
          // the specified height multiplied by the specified width
          if ((values.length = width * height)) {
            this.width = width;
            this.height = height;
            this.values = values as number[];
          } else {
            throw new TypeError(
              "The specified width and height do not match the passed data!"
            );
          }
        } else {
          throw new TypeError(
            "Width or height is undefined and is needed to construct the matrix!"
          );
        }
      }
    }
    // At this point, only a 2D matrix can be possibly passed, therefore check if there are no
    // and height parameters specified, as they will be obtained from the 2D array itself
    else if (width === undefined && height === undefined) {
      const result = this.toMatrixDataFrom2DArray(values as number[][]);

      this.width = result.width;
      this.height = result.height;
      this.values = result.values;
    } else {
      throw new TypeError(
        "Cannot specify height and width when creating a matrix from a 2D array!"
      );
    }
  }

  private toMatrixDataFrom2DArray(input: number[][]) {
    const valuesIn1D: number[] = [];

    const width = input[0].length;

    for (const row of input) {
      if (row.length === width) {
        for (const value of row) valuesIn1D.push(value);
      } else
        throw new TypeError(
          "The width of the specified array is not the same everywhere!"
        );
    }

    return { width: input[0].length, height: input.length, values: valuesIn1D };
  }

  /**
   *
   * @param input
   *
   * @todo Make the from string also work when there are both newlines and ; present
   */
  private stringTo2DArray(input: string) {
    const searchRegExp = /;/g;
    const replaceWith = "\n";

    const newLined = input.replace(searchRegExp, replaceWith);

    const rows = newLined.split("\n");

    const numericValues = rows.map((row) => {
      const cleanedUpRow = row.replace(/\s\s+/g, " ").trim();

      const rowValues = cleanedUpRow.split(" ").map((value) => {
        const number = Number(value);

        if (isNaN(number)) {
          throw new TypeError(
            "One of the values specified to create a matrix is non-numeric!"
          );
        }

        return number;
      });

      return rowValues;
    });

    return numericValues;
  }

  public dot(a: Matrix) {
    let result: number = 0;

    if (this.width != a.width || this.height != a.height)
      throw new TypeError(
        "The dimensions of the matrices to calculate the dot product from do not match"
      );

    const aValues = a.getValues();

    for (let i = 0; i < a.width * a.height; i++) {
      result += aValues[i] * this.values[i];
    }

    return result;
  }

  /**
   * Add a number or a matrix to the current matrix
   * @param a The value or the matrix to be added to this matrix
   */
  "+"(a: Matrix | number) {
    const result = new Array(this.width * this.height);

    if (typeof a === "number") {
      for (let i = 0; i < this.width * this.height; i++) {
        result[i] = this.values[i] - a;
      }
    } else {
      if (this.width != a.width || this.height != a.height)
        throw new TypeError(
          "The dimensions of the matrices to be added do not match"
        );

      const aValues = a.getValues();

      for (let i = 0; i < a.width * a.height; i++) {
        result[i] = aValues[i] + this.values[i];
      }
    }

    return new Matrix(result, this.width, this.height);
  }

  /**
   * Subtract a number or a matrix from the current matrix
   * @param a The value or the matrix to be subtracted from this matrix
   */
  "-"(a: Matrix | number) {
    const result = new Array(this.width * this.height);

    if (typeof a === "number") {
      for (let i = 0; i < this.width * this.height; i++) {
        result[i] = this.values[i] - a;
      }
    } else {
      if (this.width != a.width || this.height != a.height)
        throw new TypeError(
          "The dimensions of the matrices to be subtracted do not match"
        );

      const aValues = a.getValues();

      for (let i = 0; i < a.width * a.height; i++) {
        result[i] = this.values[i] - aValues[i];
      }
    }

    return new Matrix(result, this.width, this.height);
  }

  /**
   * Multiply the matrix by a number or by another matrix
   * @param a The value or the matrix with which the multiplication should take place
   */
  "*"(a: Matrix | number) {
    const result = new Array(this.width * this.height);

    if (typeof a === "number") {
      for (let i = 0; i < this.width * this.height; i++) {
        result[i] = this.values[i] * a;
      }
    } else {
      if (a.height != this.width)
        throw new TypeError(
          "The dimensions of the matrices to be multiplied do not match"
        );

      if (a.width * a.height + this.width * this.height < 5000) {
        return this.basicMultiplication(this, a);
      }

      return this.basicMultiplication(this, a);

      // else {
      //   return strassen(a, b, 8)
      // }
    }

    return new Matrix(result, this.width, this.height);
  }

  "/"(a: number) {
    const result = new Array(this.width * this.height);

    for (let i = 0; i < this.width * this.height; i++) {
      result[i] = this.values[i] / a;
    }

    return new Matrix(result, this.width, this.height);
  }

  /**
   * Solve a matrix equation in the form y = Ax in terms of x
   * @param a The y matrix in y = Ax
   */
  "\\"(y: Matrix) {
    console.log(y);
    // Solve a matrix equation
  }

  /**
   * Do the matrix to the power of a number
   * @param a The power which should be applied on the matrix
   */
  "^"(a: number) {
    const result: number[] | undefined[] = new Array(this.width * this.height);

    for (let i = 0; i < this.width * this.height; i++) {
      result[i] = this.values[i] ** a;
    }

    return new Matrix(result as number[], this.width, this.height);
    // Do a matrix to the power
  }

  private basicMultiplication(a: Matrix, b: Matrix) {
    const kTimesBWidth = new Array(b.height);

    for (let k = 0; k < b.height; k++) {
      kTimesBWidth[k] = k * b.width;
    }

    const jTimesAWidth = new Array(b.height);

    for (let j = 0; j < a.width; j++) {
      jTimesAWidth[j] = j * a.width;
    }

    const aValues = a.getValues();
    const bValues = b.getValues();

    const bHeight = b.height;
    const bWidth = b.width;
    const aHeight = a.height;

    const result: number[] = new Array(a.height * b.width);

    for (let i = 0; i < b.width; i++) {
      for (let j = 0; j < aHeight; j++) {
        let total = 0;

        const locationInA = jTimesAWidth[j];

        for (let k = 0; k < bHeight; k++) {
          total += aValues[locationInA + k] * bValues[kTimesBWidth[k] + i];
        }

        result[j * bWidth + i] = total;
      }
    }

    return new Matrix(result, b.width, a.height);
  }

  /**
   * Return the values of this matrix as a 1D array
   */
  public getValues() {
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
  public toString() {
    const parts: string[] = new Array(this.height + 2);

    for (let i = 0; i < this.width * this.height; i++) {
      if (i % this.width == 0) parts.push("│ ");
      else parts.push(" ");

      if (this.values[i] > 0) parts.push(" ");

      parts.push(this.values[i].toString());

      if ((i + 1) % this.width == 0) parts.push("  │\n");
    }

    const lineLength = this.width * 6 + 4;

    const prepend = "┌" + " ".repeat(lineLength - 2) + "┐\n";
    const append = "└" + " ".repeat(lineLength - 2) + "┘\n";

    return prepend + parts.join("") + append;
  }
}

export { matrix };

export default Matrix;
