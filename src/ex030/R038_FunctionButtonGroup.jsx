import React, { useState } from 'react';
import {Button, ButtonGroup} from 'reactstrap';

function R038_FunctionButtonGroup(props) {
    const [number, setNumber] = useState(10);

    let move = (type, e) => {
        if(type === 'Left'){
            setNumber(number + 1);
        }else if(type=== 'Right'){
            setNumber(number - 1);
        }else{
            setNumber(0);
        }
    };

    return (
        <div>
            <ButtonGroup style={{padding: "0px"}}>
                <Button onClick={e => move('Left')}>Left</Button>
                <Button onClick={e => move('Middle')}>Middle</Button>
                <Button onClick={e => move('Right')}>Right</Button>
            </ButtonGroup>
            <br/>{number}
        </div>
    );
}

export default R038_FunctionButtonGroup;