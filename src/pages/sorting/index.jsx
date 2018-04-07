import React from 'react';
import './style.scss';

import BubbleSort from 'src/algorithms/sorting/bubble';
import SelectionSort from 'src/algorithms/sorting/selection';
import InsertionSort from 'src/algorithms/sorting/insertion';
import ShellShort from 'src/algorithms/sorting/shell-sort';
import MergeShort from 'src/algorithms/sorting/merge-sort';
import QuickSort from 'src/algorithms/sorting/quick';
import HeapShort from 'src/algorithms/sorting/heap-sort';
import { randomArray, shuffle } from 'src/algorithms/utils/random';

export default class Sorting extends React.Component {
  constructor() {
    super();
    let len = 20;
    let arr = Array.from({ length: len }).map((i, v) => v + 1);

    this.state = {
      inputLength: len,
      arrayTest: shuffle(arr)
    };
  }

  getInitialState() {
    // todo not effected
    return {
      inputLength: 10,
      arrayTest: []
    };
  }

  shuffleArray() {
    this.setState((prevState) => ({ arrayTest: randomArray(prevState.inputLength) }));
  }

  arrayBubbleSort() {
    // 排序后数组的引用地址没有改变，无法响应变化
    this.setState((prevState) => ({ arrayTest: BubbleSort(prevState.arrayTest) }));
  }
  arraySelectionSort() {
    this.setState((prevState) => ({ arrayTest: SelectionSort(prevState.arrayTest) }));
  }
  arrayInsertionSort() {
    this.setState((prevState) => ({ arrayTest: InsertionSort(prevState.arrayTest) }));
  }
  arrayShellSort() {
    this.setState((prevState) => ({ arrayTest: ShellShort(prevState.arrayTest) }));
  }
  arrayMergeSort() {
    this.setState((prevState) => ({ arrayTest: MergeShort(prevState.arrayTest) }));
  }
  arrayQuickSort() {
    this.setState((prevState) => ({ arrayTest: QuickSort(prevState.arrayTest) }));
  }
  arrayHeapSort() {
    this.setState((prevState) => ({ arrayTest: HeapShort(prevState.arrayTest) }));
  }

  onchangeInput = (e) => {
    this.setState({ inputLength: e.target.value });
  }

  render() {
    return (
      <div>
        <h3>Sorting</h3>
        <div className="demo-control">
          <div>
            <span>数组长度</span>
            <input type="text" value={ this.state.inputLength } onChange={ this.onchangeInput } />
            <button onClick={ this.shuffleArray.bind(this) }>产生随机数组</button>
          </div>
          <button onClick={ this.arrayBubbleSort.bind(this) }>冒泡排序</button>
          <button onClick={ this.arraySelectionSort.bind(this) }>选择排序</button>
          <button onClick={ this.arrayInsertionSort.bind(this) }>插入排序</button>
          <button onClick={ this.arrayShellSort.bind(this) }>希尔排序</button>
          <button onClick={ this.arrayMergeSort.bind(this) }>归并排序</button>
          <button onClick={ this.arrayQuickSort.bind(this) }>快速排序</button>
          <button onClick={ this.arrayHeapSort.bind(this) }>堆排序</button>
        </div>
        <p className="demo-result">{ this.state.arrayTest.join() }</p>
      </div>
    );
  }
};
