import React from 'react';
import {Button} from 'reactstrap';

const R066_onClick = () => {
    const buttonClick = param => {
        if(typeof param != 'string'){
            param = 'Click a';
        }
        console.log('param: ' + param);
    };

    return (
        <div>
            <button onClick={e => buttonClick('Click button')}>Click button</button>
            <Button onClick={e => buttonClick('Click button')}>Click button</Button>
            <div onClick={e => buttonClick('Click div')}>Click div</div>
            <a href='#' onClick={buttonClick}>Click a</a>
        </div>
    );
};

export default R066_onClick;