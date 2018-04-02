import { Compare, defaultCompare } from '../utils/compare';
import swap from '../utils/swap';

const sort = (arr, compareFn = defaultCompare) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (compareFn(arr[j], arr[j + 1]) === Compare.GT) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};

export default sort;
