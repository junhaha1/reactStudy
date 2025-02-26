import React, {useState, useEffect, use}from 'react';

const R031_ReactHook2 = (props) => {
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(1);

    let buttonClick = () => {
        let temp = count;
        temp++;
        setCount(temp);
    };

    let buttonFlag = () => {
        let temp = flag;
        temp *= -1
        setFlag(temp)
    };


    useEffect(() => { 
        console.log('useEffect');
    }, []); //두번째 파라미터 => dependency : [] 안에 변수의 상태가 변경됐을 때만 출력

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => buttonClick()}>count버튼</button>
            <button onClick={() => buttonFlag()}>flag버튼</button>
        </div>
    );
};

export default R031_ReactHook2;