import Matrix from './Matrix';

class Vector extends Matrix {
  constructor(values: number[]) {
    super(values, 1, values.length);
  }

  /**
   * Converts a Vector to a string. See example below:
   * ```
   * ╭     ╮
   * │  1  │
   * │  2  │
   * │  3  │
   * │  7  │
   * │  8  │
   * │  9  │
   * ╰     ╯
   * ```
   */
  public toString() {
    const parts: string[] = new Array(this.height + 2);

    parts[0] = '╭     ╮';

    for (let i = 0; i < this.height; i += 1) {
      parts[i + 1] = `│  ${this.values[i]}  │`;
    }

    parts[parts.length - 1] = '╰     ╯';

    return parts.join('\n');
  }
}

function vector(values: number[]): Vector {
  return new Vector(values);
}

export default vector;
