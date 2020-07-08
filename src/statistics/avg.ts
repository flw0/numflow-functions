import Matrix from '../linear-algebra/Matrix';

import sum from '../mathematics/sum';

function avg(a: Matrix): number {
  return sum(a) / a.width / a.height;
}

export default avg;
