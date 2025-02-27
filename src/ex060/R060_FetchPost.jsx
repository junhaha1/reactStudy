import React, {useEffect} from 'react';

const R060_FetchPost = () => {
    // useEffect(() => {
    //     async function postFetch() {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    //             method: 'POST',
    //             body: JSON.stringify({ //보내는 데이터 내용
    //                 title: 'foo',
    //                 body: 'bar',
    //                 userId: 1,
    //             }),
    //             headers: {
    //                 'Content-type': 'application/json; charset=UTF-8', //내 바디에 데이터는 json, UTF-8 형식으로 감. 
    //             }
    //         });
    //         const body = await response.json();
    //         console.log(JSON.stringify(body));
    //     };
    //     postFetch();
    // }, []);

    const postFetch = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({ //보내는 데이터 내용
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8', //내 바디에 데이터는 json, UTF-8 형식으로 감. 
            }
        })
        .then(response => {
            return response.json();
        })
        .then(body => {
            console.log(JSON.stringify(body));
        });
    };

    useEffect(() => {
        postFetch();
    }, []);
    
    return (
        <h1>fetch post</h1>
    );
};

export default R060_FetchPost;