import Matrix from '../linear-algebra/Matrix';

/**
 * Source: https://stackoverflow.com/questions/45309447/calculating-median-javascript
 * @param values
 */
function median(a: Matrix): number {
  const values = a.getValues();

  values.sort((b, c) => {
    return b - c;
  });

  const half = Math.floor(values.length / 2);

  if (values.length % 2) return values[half];

  return (values[half - 1] + values[half]) / 2.0;
}

export default median;
