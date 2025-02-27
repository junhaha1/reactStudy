import React,{useEffect} from 'react';
import axios from 'axios';

const R061_AxiosGet = () => {
    const axiosGet = () => {
        axios.get('https://jsonplaceholder.typicode.com/comments?_page=1&_limit=1')
        .then(response => {
            console.log(response.data[0].name);
        });
    }

    useEffect(() => {
        axiosGet();
    }, []);

    return (
        <div>
            
        </div>
    );
};

export default R061_AxiosGet;