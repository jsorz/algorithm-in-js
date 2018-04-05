import MinHeap from './index';
import { defaultCompare, reverseCompare } from '../../utils/compare';

export class MaxHeap extends MinHeap {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.compareFn = reverseCompare(compareFn);
  }
};
