type WeakOrStrongShock = 0 | 1;

/**
 * Calculate the oblique shock wave angle (β) for a given deflectoin angle (θ) and Mach number.
 * The source for this analytic solution can be found here: https://nl.mathworks.com/matlabcentral/fileexchange/32777-theta-beta-mach-analytic-relation
 * @param mach Mach number for which you want to obtain the value of beta
 * @param theta Deflection angle
 * @param n Return weak (0) or strong (1) shock data
 * @param y Ratio of specific heats of the gas used
 */
function betaFromTheta(
  mach: number,
  theta: number,
  n: WeakOrStrongShock = 0,
  y = 1.4
) {
  const mu = Math.asin(1 / mach); // Mach wave angle

  const c = Math.tan(mu) ** 2;

  const a = ((y - 1) / 2 + ((y + 1) * c) / 2) * Math.tan(theta);
  const b = ((y + 1) / 2 + ((y + 3) * c) / 2) * Math.tan(theta);
  const d = Math.sqrt(
    (4 * (1 - 3 * a * b)) ^ (3 / ((27 * a) ^ (2 * c + 9 * a * b - 2) ^ 2) - 1)
  );

  const beta = Math.atan(
    (b + 9 * a * c) / (2 * (1 - 3 * a * b)) -
      ((d * ((27 * a) ^ (2 * c + 9 * a * b - 2))) / (6 * a * (1 - 3 * a * b))) *
        Math.tan((n * Math.PI) / 3 + (1 / 3) * Math.atan(1 / d))
  );

  return beta;
}

export default betaFromTheta;
