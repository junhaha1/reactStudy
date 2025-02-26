import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const R056_Sweetalert2Basic = () => {
    useEffect(()=>{
        //Swal.fire('1. SweetAlert'); //비동기식 기능이 많은 alert
        //alert('2. alert()'); //순서대로 동기적으로 실행

        Swal.fire('1. SweetAlert')
        .then(result => {
            alert('2 result.value: ' + result.value);
        }) //끌났을 때 수행할 함수(콜백함수)

    }, []);

    return (
        <h1>sweetalert2</h1>
    );
};

export default R056_Sweetalert2Basic;