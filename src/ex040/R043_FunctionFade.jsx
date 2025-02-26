import React, {useState} from 'react';
import {Button, Fade} from 'reactstrap';

const R043_FunctionFade = () => {
    const [fadeInOut, setFadeInOut] = useState(true);

    const toggle = (e) =>{
        setFadeInOut(!fadeInOut);
    };

    return (
        <div>
            <Button color='success' onClick={toggle}>Fade In/Out</Button>
            <Fade in = {fadeInOut} tag="h1">
                Fade In/Out 영역
            </Fade>
        </div>
    );
};

export default R043_FunctionFade;