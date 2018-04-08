import { Compare, defaultCompare } from '../utils/compare';

const sort = (arr, compareFn = defaultCompare) => {
  let len = arr.length;
  let step = Math.floor(len / 2);

  while(step > 0) {
    // 里层循环与插入排序同理
    // NOTE: step=1 时 O(n^2)，但若已排序，只有 O(n)
    for (let i = step; i < len; i++) {
      let el = arr[i];
      let j = i - step;
      for (; j >= 0; j-= step) {
        if (compareFn(arr[j], el) === Compare.GT) {
          arr[j + step] = arr[j];
        } else {
          break;
        }
      }
      arr[j + step] = el;
    }
    step = Math.floor(step / 2);
  }
  return arr;
};

export default sort;
