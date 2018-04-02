import { Compare, defaultCompare } from '../utils/compare';
import swap from '../utils/swap';

// 写法简单，但反复创建数组开销大
export const sortRecursive = (arr, compareFn = defaultCompare) => {
  if (arr.length <= 1) {
    return arr;
  }
  // 取中间元素作为哨兵，并且从原数组拎出
  const pivot = arr.splice(Math.floor(arr.length / 2), 1)[0];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (compareFn(arr[i], pivot) === Compare.LT) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...sortRecursive(left), pivot, ...sortRecursive(right)];
};

// 使用遍历数组并交换，效率更高些
const sortWithIndex = (arr, compareFn, left, right) => {
  if (left < right) {
    // 以最左为主元
    const pivot = arr[left];
    let low = left;
    let high = right;

    while (low < high) {
      while (compareFn(arr[high], pivot) === Compare.GT && low < high) {
        high--;
      }
      if (low < high) {
        arr[low] = arr[high];
        low++;
      }

      while (compareFn(arr[low], pivot) === Compare.LT && low < high) {
        low++;
      }
      if (low < high) {
        arr[high] = arr[low];
        high--;
      }
    }

    arr[low] = pivot;
    sortWithIndex(arr, compareFn, left, low - 1);
    sortWithIndex(arr, compareFn, low + 1, right);
  }
};

const sort = (arr, compareFn = defaultCompare) => {
  sortWithIndex(arr, compareFn, 0, arr.length - 1);
  return arr;
};

export default sort;
