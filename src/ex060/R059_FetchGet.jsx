import React, {useEffect} from 'react';

const R059_FetchGet = () => {
    // useEffect(() => {
    //     async function getFetch(){ //async 키워드 => 비동기적으로 호출
    //         const response = await fetch('https://jsonplaceholder.typicode.com/comments?_page=1&_limit=1');
    //         //fetch => 비동기적으로 작동
    //         //await 키워드 => 해당 함수가 끝날 때까지 기다리게 함.
    //         const body = await response.json(); //결과를 json으로 풀어내줌. 
    //         console.log(body[0].name);
    //     }   
    //     getFetch();
    // }, []);
    useEffect(() => {
        function getFetch(){ //async 키워드 => 비동기적으로 호출
            fetch('https://jsonplaceholder.typicode.com/comments?_page=1&_limit=2')
            .then(function(response){ //fetch가 끝나면 콜백함수 호출
                return response.json();
            })
            .then(function(json){
                console.log(json[0].name);
            });
        }   
        getFetch();
    }, []);
    return (
        <h1>getch get</h1>
    );
};

export default R059_FetchGet;