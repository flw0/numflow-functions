/**
 * Source: https://stackoverflow.com/questions/45309447/calculating-median-javascript
 * @param values
 */
function median(values: number[]) {
  values.sort(function (a, b) {
    return a - b;
  });

  var half = Math.floor(values.length / 2);

  if (values.length % 2) return values[half];

  return (values[half - 1] + values[half]) / 2.0;
}

export default median;
