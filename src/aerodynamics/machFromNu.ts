/**
 * Compute the value of the Mach number based on a given Prandtl-Meyer angle. The accurarcy of this
 * Hall approximation is quite good with the maximum error being much less than one-tenth of one percent.
 * The source for this approximation can be found here: http://www.pdas.com/pm.pdf
 * @param nu Value of nu for which you would like to calculate the Mach number
 */
function machFromNu(nu: number) {
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

export default machFromNu;
