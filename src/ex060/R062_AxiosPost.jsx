import React, {useEffect} from 'react';
import axios from 'axios';

const R062_AxiosPost = () => {
    const axiosPost = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', 
            { 
                title: 'foo',
                body: 'bar',
                userId: 1,
            })
            .then(response => {
                console.log(JSON.stringify(response.data));
            })
    };

    useEffect(() => {
        axiosPost();
    }, []);

    return (
        <div>
            
        </div>
    );
};

export default R062_AxiosPost;