import React, { useState, useEffect } from 'react';
import { Progress } from 'reactstrap';

const R052_FunctionProgress = () => {
    const [progress, setProgress] = useState(0);

    const upprogress = ()=>{
        if(progress !== 100){
            setTimeout(()=>{
                setProgress(progress + 1);
            }, 100)
        }
    }

    useEffect(upprogress);

    return (
        <div>
            <Progress color="info" value={progress}>{progress}%</Progress><br/>
            <Progress multi>
                <Progress bar color="warning" value="25">25%</Progress>
                <Progress bar color="success" value="35">react</Progress>
                <Progress bar value="20">200</Progress>
                <Progress bar color="danger" value="20">20%</Progress>
            </Progress>
        </div>
    );
};

export default R052_FunctionProgress;