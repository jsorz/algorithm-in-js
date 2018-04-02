import { Compare, defaultCompare } from '../utils/compare';
import swap from '../utils/swap';

const sort = (arr, compareFn = defaultCompare) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let maxI = 0;
    for (let j = 0; j < arr.length - i; j++) {
      if (compareFn(arr[j], arr[maxI]) === Compare.GT) {
        maxI = j;
      }
    }
    swap(arr, arr.length - 1 - i, maxI);
  }
  return arr;
};

export default sort;
