import React from 'react';

const R069_onMouseOver = () => {
    const mouseOver = tag => {
        console.log('TAG: ' + tag);
    }
    return (
        <div>
            <div onMouseOver={e => mouseOver('div')}>
                <h3>DIV onMouseMove</h3>
            </div>
            <input type='text' onMouseOver={e => mouseOver('input')}></input>
            <select onMouseOver={e => mouseOver('select')}>
            <option value='react'>react</option>
            <option value={'study'}>study</option>
            </select>
        </div>
    );
};

export default R069_onMouseOver;