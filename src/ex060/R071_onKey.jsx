import React from 'react';

const R071_onKey = () => {
    const onKey = (target, e) => {
        let val = e.target.value;
        console.log('target: ' + target + ', value: ' + val);
    }; 

    return (
        <div>
            onkeyDown: <input type='text' onKeyDown={e => onKey('onKeyDown', e)}></input>
            onkeyUp: <input type='text' onKeyUp={e => onKey('onKeyUp', e)}></input>
        </div>
    );
};

export default R071_onKey;