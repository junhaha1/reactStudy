import React from 'react';
import {increase, decrease} from './actions';

let gProps;

const addNumber = () => {
    gProps.store.dispatch(increase());
}

const subNumber = () => {
    gProps.store.dispatch(decrease());
}

const MyCounter = (props) => {
    gProps = props;
    let count = gProps.store.getState().data.count;
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={addNumber}>+1</button>
            <button onClick={subNumber}>-1</button>
        </div>
    );
};

export default MyCounter;