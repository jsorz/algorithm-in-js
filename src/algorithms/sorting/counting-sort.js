import { findMaxValue, findMinValue } from '../utils/search';

const sort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  const maxValue = findMaxValue(array);
  let sortedIndex = 0;

  // NOTE: 空间开销大，不推荐 counting sort
  const counts = new Array(maxValue + 1);
  array.forEach(element => {
    if (!counts[element]) {
      counts[element] = 0;
    }
    counts[element]++;
  });

  // console.log('Frequencies: ' + counts.join());
  counts.forEach((freq, element) => {
    while (freq > 0) {
      array[sortedIndex++] = element;
      freq--;
    }
  });
  return array;
};

export default sort;
