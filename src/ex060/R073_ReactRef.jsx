import React, {useState, useEffect, use} from 'react';

const R073_ReactRef = () => {
    const [inputRef, setInputRef] = useState(React.createRef);

    const refFocus = e => { //React: id 상관없이 사용가능
        inputRef.current.focus();
    };

    const javascriptFocus = () => { //Javascript: 태그의 id로 사용
        document.querySelector('#id').focus();
    };


    return (
        <div>
            <input id = 'id' type = 'text' ref={inputRef}></input>      
            <input type = 'button' value = 'Ref Focus' onClick={refFocus}></input>
            <input type = 'button' value = 'Javascript Focus' onClick={javascriptFocus}></input>
        </div>
    );
};

export default R073_ReactRef;