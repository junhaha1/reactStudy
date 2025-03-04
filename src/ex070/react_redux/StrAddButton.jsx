import React from 'react';
import {connect} from 'react-redux';
import {add} from './actions';

let StrAddButton = (props) => {

  // const addString = () => {
  //   props.store.dispatch(add());
  // };

  return (
    <input value='Hello!' type='button' onClick={props.addString}></input>
  );
};

const mapDispatchToProps = (dispatch, props) => {
  console.log('Props from App in mapDispatchToProps: ' + props.appProp);
  return {
    addString: () => dispatch(add()),
  };
};

StrAddButton = connect(null, mapDispatchToProps)(StrAddButton);

export default StrAddButton;