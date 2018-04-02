import { Compare, defaultCompare } from '../utils/compare';

const sort = (arr, compareFn = defaultCompare) => {
  for (let i = 1; i < arr.length; i++) {
    let el = arr[i];
    let j = i - 1;
    for (; j >= 0; j--) {
      if (compareFn(arr[j], el) === Compare.GT) {
        // 其实和 sawp 同理
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    // be careful
    arr[j + 1] = el;
  }
  return arr;
};

export default sort;
