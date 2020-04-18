/**
 * From: https://link.springer.com/chapter/10.1007/978-3-319-74373-8_4
 * @param y 
 */
function vandenkerckhove(y: number = 1.4) {
  return Math.sqrt(y * ((1 + y) / 2) ** ((1 + y) / (1 - y)));
}

export default vandenkerckhove;
