import React from 'react';
import './style.scss';

import Bubble from 'src/algorithms/sorting/bubble';
import Selection from 'src/algorithms/sorting/selection';
import Insertion from 'src/algorithms/sorting/insertion';
import ShellShort from 'src/algorithms/sorting/shell-sort';
import Quick from 'src/algorithms/sorting/quick';
import { randomArray } from 'src/algorithms/utils/random';

export default class Sorting extends React.Component {
  constructor() {
    super();
    this.state = {
      inputLength: 10,
      arrayTest: []
    };
  }

  getInitialState() {
    // todo not effected
    return {
      inputLength: 11,
      arrayTest: []
    };
  }

  genArray () {
    this.setState((prevState) => ({ arrayTest: randomArray(prevState.inputLength) }));
  }

  sortArrayBubble () {
    // 排序后数组的引用地址没有改变，无法响应变化
    this.setState((prevState) => ({ arrayTest: Bubble(prevState.arrayTest) }));
  }
  sortArraySelection () {
    this.setState((prevState) => ({ arrayTest: Selection(prevState.arrayTest) }));
  }
  sortArrayInsertion () {
    this.setState((prevState) => ({ arrayTest: Insertion(prevState.arrayTest) }));
  }
  sortArrayShell () {
    this.setState((prevState) => ({ arrayTest: ShellShort(prevState.arrayTest) }));
  }
  sortArrayQuick () {
    this.setState((prevState) => ({ arrayTest: Quick(prevState.arrayTest) }));
  }

  onchangeInput = (e) => {
    this.setState({ inputLength: e.target.value });
  }

  render() {
    return (
      <div>
        <h3>Sorting</h3>
        <form className="demo-control">
          <span>数组长度</span>
          <input type="text" value={ this.state.inputLength } onChange={ this.onchangeInput } />
          <button type="button" onClick={ this.genArray.bind(this) }>产生随机数组</button>
          <button type="button" onClick={ this.sortArrayBubble.bind(this) }>冒泡排序</button>
          <button type="button" onClick={ this.sortArraySelection.bind(this) }>选择排序</button>
          <button type="button" onClick={ this.sortArrayInsertion.bind(this) }>插入排序</button>
          <button type="button" onClick={ this.sortArrayShell.bind(this) }>希尔排序</button>
          <button type="button" onClick={ this.sortArrayQuick.bind(this) }>快速排序</button>
        </form>
        <p className="demo-result">{ this.state.arrayTest.join() }</p>
      </div>
    );
  }
};
