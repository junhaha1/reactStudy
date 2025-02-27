import React from 'react';
import {add} from './actions';

const StrAddButton = (props) => {

    const addString = () => {
        props.store.dispatch(add());
        //add 결과값을 store로 저장(dispatch)
    };

    return (
        <input value='Hello!' type='button' onClick={addString}></input>    
    );
};

export default StrAddButton;