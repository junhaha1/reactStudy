import React from 'react';

const R068_onMouseMove = () => {
    const mouseMove = tag => {
        console.log('TAG: ' + tag);
    }
    return (
        <div>
            <div onMouseMove={e => mouseMove('div')}>
                <h3>DIV onMouseMove</h3>
            </div>
            <input type='text' onMouseMove={e => mouseMove('input')}></input>
            <select onMouseMove={e => mouseMove('select')}>
            <option value='react'>react</option>
            <option value={'study'}>study</option>
            </select>
        </div>
    );
};

export default R068_onMouseMove;