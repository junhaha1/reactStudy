import React, { Component } from 'react';
import {makeObservable, observable, action} from 'mobx';
import { observer } from 'mobx-react';


//store를 분리 안 하고 하나로 만든 코드
class Counter extends Component {
  number = 0;

  constructor() {
    super();
    makeObservable(this, {
      number: observable,
      increase: action,
      decrease: action,
    });
  }

  //action이 실행되어 observable으로 감시하는 값이 변경되면 자동으로 render
  increase = () => {
    this.number++;
  };

  decrease = () => {
    this.number--;
  };

  render() {
    return (
      <div>
        <h1>{this.number}</h1>
        <button onClick={this.increase}>+1</button>
        <button onClick={this.decrease}>-1</button>
      </div>
    );
  }
}

export default observer(Counter);