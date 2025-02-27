import React from 'react';

const R070_onMouseOut = () => {

    const mouseOut = tag => {
        console.log('TAG: ' + tag);
    };
    return (
        <div>
            <div onMouseOut={e => mouseOut('div')}>
                <h3>DIV onMouseMove</h3>
            </div>
            <input type='text' onMouseOut={e => mouseOut('input')}></input>
            <select onMouseOut={e => mouseOut('select')}>
            <option value='react'>react</option>
            <option value={'study'}>study</option>
            </select>
        </div>
    );
};

export default R070_onMouseOut;