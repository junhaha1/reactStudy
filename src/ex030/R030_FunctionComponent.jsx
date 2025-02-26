import React from 'react';

const R030_FunctionComponent = (props) => {
    //props로 받아온 contents라는 변수의 값을 뽑아서 같은 변수명인 {contents}에다가 넣으라는 뜻
    let {contents} = props; 
    //let contents = props.contents //위와 같은 코드
    return (
        <h2>{contents}</h2>
    );
};

export default R030_FunctionComponent;