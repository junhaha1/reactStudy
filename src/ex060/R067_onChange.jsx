import React from 'react';

const R067_onChange = () => {

    const change = e => {
        let val = e.target.value;
        console.log('param: ' + val);
    };

    return (
        <div>
            <input type='text' onChange={change}></input>
            <select onChange={change}>
                <option value={'react'}>react</option>
                <option value={'study'}>study</option>
            </select>
        </div>
    );
};

export default R067_onChange;