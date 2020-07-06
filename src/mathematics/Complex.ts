/**
 * Main logic taken from: https://introcs.cs.princeton.edu/java/97data/Complex.java.html
 */
class Complex {
  readonly re: number;

  readonly im: number;

  readonly phase: number;

  constructor(real: number, imaginary: number) {
    this.re = real;
    this.im = imaginary;

    this.phase = Math.atan2(this.im, this.re);
  }

  /**
   * Return a new Complex object whose value is (this + a)
   * @param a
   */
  '+'(a: Complex | number): Complex {
    if (typeof a === 'number') {
      const newRe = this.re + a;
      const newIm = this.im;

      return new Complex(newRe, newIm);
    }

    const newRe = this.re + a.re;
    const newIm = this.im + a.im;

    return new Complex(newRe, newIm);
  }

  /**
   * Return a new Complex object whose value is (this - b)
   * @param a
   */
  '-'(a: Complex | number): Complex {
    if (typeof a === 'number') {
      const newRe = this.re - a;
      const newIm = this.im;

      return new Complex(newRe, newIm);
    }

    const newRe = this.re - a.re;
    const newIm = this.im - a.im;

    return new Complex(newRe, newIm);
  }

  /**
   * Return a new Complex object whose value is (this * a)
   * @param a
   */
  '*'(a: Complex | number): Complex {
    if (typeof a === 'number') {
      const newRe = a * this.re;
      const newIm = a * this.im;

      return new Complex(newRe, newIm);
    }

    const newRe = this.re * a.re - a.im * a.im;
    const newIm = this.re * a.im + a.im * a.re;

    return new Complex(newRe, newIm);
  }

  /**
   * Return a new Complex object whose value is (this * a)
   * @param a
   */
  '/'(a: Complex | number): Complex {
    if (typeof a === 'number') {
      const newRe = this.re / a;
      const newIm = this.im / a;

      return new Complex(newRe, newIm);
    }

    const scale = this.re * this.re + this.im * this.im;

    const reciprocal = new Complex(this.re / scale, -this.im / scale);

    return this['*'](reciprocal);
  }

  public toString(): string {
    if (this.im === 0) return this.re.toString();
    if (this.re === 0) return this.im.toString();
    if (this.im < 0) return `${this.re} - ${-this.im}i`;
    return `${this.re} + ${this.im}i`;
  }
}

function complex(real: number, imaginary: number): Complex {
  return new Complex(real, imaginary);
}

export { complex };

export default Complex;
