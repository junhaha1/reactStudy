import React from 'react';
import {connect} from 'react-redux';
import {increase, decrease} from './actions';

let MyCounter = (props) => {
  let count = props.count;
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={props.addNumber}>+1</button>
        <button onClick={props.subNumber}>-1</button>
    </div>
  );
};

const mapStateToProps = (state,  props) => {
  return {
    count: state.data.count,
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    addNumber: () => dispatch(increase()),
    subNumber: () => dispatch(decrease()),
  };
};

MyCounter = connect(mapStateToProps, mapDispatchToProps)(MyCounter);

export default MyCounter;