/**
 *
 * @param mach Mach number for which you want to obtain the normal shock properties
 * @param y Ratio of specific heats of the gas used
 */
function normalShockProperties(mach: number, y = 1.4) {
  const p2OverP1 = 1 + ((2 * y) / (y + 1)) * (mach ** 2 - 1);

  const rho2OverRho1 =
    ((y + 1) * mach ** 2) / (2 + (y - 1) * mach ** 2);

  const T2overT1 = (p2OverP1 * 1) / rho2OverRho1;

  const M2 = Math.sqrt(
    (2 + (y - 1) * mach ** 2) / (2 * y * mach ** 2 - (y - 1))
  );

  return [p2OverP1, rho2OverRho1, T2overT1, M2];
}

export default normalShockProperties;
