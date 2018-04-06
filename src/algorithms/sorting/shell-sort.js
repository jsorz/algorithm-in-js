import { Compare, defaultCompare } from '../utils/compare';

const sort2 = (arr, compareFn = defaultCompare) => {
  let len = arr.length;
  for (let step = Math.floor(len / 2); step > 0; step = Math.floor(step / 2)) {
    for (let i = step; i < len; i++) {
      for (let j = i - step; j >= 0 && arr[j] > arr[step + j]; j -= step) {
        let temp = arr[j];
        arr[j] = arr[step + j];
        arr[step + j] = temp;
      }
    }
  }
  return arr;
};

const sort = (arr, compareFn = defaultCompare) => {
  let len = arr.length;
  let step = Math.floor(len / 2);

  while(step > 0) {
    // 里层循环与插入排序同理
    // todo step=1 时 n^2
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
