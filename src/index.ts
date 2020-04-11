/**
 *
 * @param mach Mach number for which you want to obtain the isentropic flow properties
 * @param gamma
 */
export function isentropicProperties(mach: number, gamma = 1.4) {
  const p0OverP = (1 + ((gamma - 1) / 2) * mach ** 2) ** (gamma / (gamma - 1));

  const rho0OverRho = (1 + ((gamma - 1) / 2) * mach ** 2) ** (1 / (gamma - 1));

  const T0overT = 1 + ((gamma - 1) / 2) * mach ** 2;

  const A0OverA = Math.sqrt(
    (1 / mach ** 2) *
      ((2 / (gamma + 1)) * (1 + ((gamma - 1) / 2) * mach ** 2)) **
        ((gamma + 1) / (gamma - 1))
  );

  return [p0OverP, rho0OverRho, T0overT, A0OverA];
}

/**
 *
 * @param mach Mach number for which you want to obtain the value of nu
 * @param gamma Ratio of specific heats of the gas used
 */
export function nuFromMach(mach: number, gamma = 1.4) {
  const nu =
    Math.sqrt((gamma + 1) / (gamma - 1)) *
      Math.atan(Math.sqrt(((gamma - 1) / (gamma + 1)) * (mach ** 2 - 1))) -
    Math.atan(Math.sqrt(mach ** 2 - 1));

  return nu;
}

/**
 * Source: http://www.pdas.com/pm.pdf
 * @param nu Value of nu for which you would like to calculate the Mach number
 */
export function machFromNu(nu: number) {
  const nu_inf = Math.PI * (Math.sqrt(6) - 1);

  const z = (nu / nu_inf) ** (2 / 3);

  // All of the constants shown here are for γ=7/5
  const a = 1.3604;
  const b = 0.0962;
  const c = -0.5127;
  const d = -0.6722;
  const e = -0.3278;

  const mach = (1 + a * z + b * z ** 2 + c * z ** 3) / (1 + d * z + e * z ** 2);

  return mach;
}

/**
 * Source: https://nl.mathworks.com/matlabcentral/fileexchange/32777-theta-beta-mach-analytic-relation
 * @param mach Mach number for which you want to obtain the value of beta
 * @param theta
 * @param n
 * @param gamma Ratio of specific heats of the gas used
 */
export function betaFromTheta(mach: number, theta: number, n = 0, gamma = 1.4) {
  const mu = Math.asin(1 / mach); // Mach wave angle

  const c = Math.tan(mu) ** 2;

  const a = ((gamma - 1) / 2 + ((gamma + 1) * c) / 2) * Math.tan(theta);
  const b = ((gamma + 1) / 2 + ((gamma + 3) * c) / 2) * Math.tan(theta);
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

/**
 *
 * @param mach Mach number for which you want to obtain the normal shock properties
 * @param gamma Ratio of specific heats of the gas used
 */
export function normalShockProperties(mach: number, gamma = 1.4) {
  const p2OverP1 = 1 + ((2 * gamma) / (gamma + 1)) * (mach ** 2 - 1);

  const rho2OverRho1 =
    ((gamma + 1) * mach ** 2) / (2 + (gamma - 1) * mach ** 2);

  const T2overT1 = (p2OverP1 * 1) / rho2OverRho1;

  const M2 = Math.sqrt(
    (2 + (gamma - 1) * mach ** 2) / (2 * gamma * mach ** 2 - (gamma - 1))
  );

  return [p2OverP1, rho2OverRho1, T2overT1, M2];
}

export function sqrt(input: number) {
  return Math.sqrt(input);
}
