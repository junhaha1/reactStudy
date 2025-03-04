import React from 'react';
import {observer} from 'mobx-react';

const Counter = observer((props) => {
  return (
    <div>
      <h1>{props.counter.number}</h1>
      <button onClick={props.counter.increase}>+1</button>
      <button onClick={props.counter.decrease}>-1</button>
    </div>
  );
});

export default Counter;