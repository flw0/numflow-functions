import vandenkerckhove from "./vandenkerckhove";

/**
 * From: https://link.springer.com/chapter/10.1007/978-3-319-74373-8_4
 * @param p Pressure [Pa]
 * @param p_c Pressure in the combustion chamber [Pa]
 * @param y Ratio of specific heats [-]
 */
function expansionRatio(p: number, p_c: number, y: number = 1.4) {
  const ratio = p / p_c;

  return (
    vandenkerckhove(y) /
    Math.sqrt(
      ((2 * y) / (y - 1)) *
        ratio ** (2 / y) *
        (1 - ratio) ** ((y - 1) / y)
    )
  );
}

export default expansionRatio;
