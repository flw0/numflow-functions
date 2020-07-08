/**
 * Main logic taken from: https://introcs.cs.princeton.edu/java/97data/Complex.java.html
 */
class Complex {
  readonly re: number;

  readonly im: number;

  // @todo: maybe remove this property?
  readonly phase: number;

  /**
   * Create a new imaginary number
   * @param real The real part of the complex number to be created
   * @param imaginary The imaginary part of the complex number to be created
   */
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

    const newRe = this.re * a.re - this.im * a.im;
    const newIm = this.re * a.im + this.im * a.re;

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

    // @todo use hypot
    const scale = a.re ** 2 + a.im ** 2;

    const reciprocal = new Complex(a.re / scale, -a.im / scale);

    return this['*'](reciprocal);
  }

  /**
   *
   * @param a
   *
   * @todo use abs() function for complex magnitude calculation
   */
  '^'(a: number): Complex {
    const magnitude = this.re ** 2 + this.im ** 2;

    const powerMagnitude = magnitude ** a;

    const powerPhase = this.phase * a;

    return new Complex(
      powerMagnitude * Math.cos(powerPhase),
      powerMagnitude * Math.sin(powerPhase)
    );
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
