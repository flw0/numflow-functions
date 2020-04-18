/**
 * Calculate the value of nu based on a given Mach number
 * @param mach Mach number for which you want to obtain the value of nu
 * @param y Ratio of specific heats of the gas used
 */
function nuFromMach(mach: number, y = 1.4) {
  const nu =
    Math.sqrt((y + 1) / (y - 1)) *
      Math.atan(Math.sqrt(((y - 1) / (y + 1)) * (mach ** 2 - 1))) -
    Math.atan(Math.sqrt(mach ** 2 - 1));

  return nu;
}

export default nuFromMach;
