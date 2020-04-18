/**
 * Compute the isentropic flow properties for a given Mach number and ratio of specific heats.
 * @param mach Mach number for which you want to obtain the isentropic flow properties
 * @param y Ratio of specific heats of the gas used
 */
function isentropicFlowProperties(mach: number, y = 1.4) {
  const p0OverP = (1 + ((y - 1) / 2) * mach ** 2) ** (y / (y - 1));

  const rho0OverRho = (1 + ((y - 1) / 2) * mach ** 2) ** (1 / (y - 1));

  const T0overT = 1 + ((y - 1) / 2) * mach ** 2;

  const A0OverA = Math.sqrt(
    (1 / mach ** 2) *
      ((2 / (y + 1)) * (1 + ((y - 1) / 2) * mach ** 2)) **
        ((y + 1) / (y - 1))
  );

  return [p0OverP, rho0OverRho, T0overT, A0OverA];
}

export default isentropicFlowProperties;
