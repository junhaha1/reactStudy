import React, {useState, useEffect, use}from 'react';

const R031_ReactHook = (props) => {
    const [contents, setContents] = useState('[THIS IS REACT]');
    //     상태변수,  상태변수값을 변경하는 함수

    useEffect(() => { //화면 렌더링이 된 후에 콜백함수 호출
        console.log('useEffect');
    });

    return (
        <div>
            <h2>{contents}</h2>
            <button onClick={() => setContents('[THIS IS HOOK]')}>버튼</button>
        </div>
    );
};

export default R031_ReactHook;