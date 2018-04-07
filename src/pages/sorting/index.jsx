import React from 'react';
import './style.scss';

import Sorting from 'src/algorithms/sorting';
import { randomArray, shuffle } from 'src/algorithms/utils/random';

export default class SortingPage extends React.Component {
  constructor() {
    super();
    let len = 20000;
    let arr = Array.from({ length: len }).map((i, v) => v + 1);

    this.state = {
      inputLength: len,
      arrayTest: shuffle(arr),
      timeCost: 0
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
    this.setState((prevState) => ({
      arrayTest: randomArray(prevState.inputLength),
      timeCost: 0
    }));
  }

  sortArray(method) {
    const start = window.performance.now();
    const array = Sorting[method](this.state.arrayTest);
    this.setState({
      arrayTest: array,
      timeCost: (window.performance.now() - start).toFixed(3)
    });
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
          <button onClick={ this.sortArray.bind(this, 'BubbleSort') }>冒泡排序</button>
          <button onClick={ this.sortArray.bind(this, 'SelectionSort') }>选择排序</button>
          <button onClick={ this.sortArray.bind(this, 'InsertionSort') }>插入排序</button>
          <button onClick={ this.sortArray.bind(this, 'ShellShort') }>希尔排序</button>
          <button onClick={ this.sortArray.bind(this, 'MergeShort') }>归并排序</button>
          <button onClick={ this.sortArray.bind(this, 'QuickSort') }>快速排序</button>
          <button onClick={ this.sortArray.bind(this, 'HeapShort') }>堆排序</button>
        </div>
        <p className="demo-result">time cost = { this.state.timeCost }</p>
        <p className="demo-result">{ this.state.arrayTest.join() }</p>
      </div>
    );
  }
};
