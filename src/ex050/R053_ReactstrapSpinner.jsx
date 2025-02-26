import React from 'react';
import { Spinner } from 'reactstrap';

const R053_ReactstrapSpinner = () => {
    return (
        <div>
            <Spinner color='secondary'></Spinner>
            <Spinner color='success'></Spinner>
            <Spinner type='grow' color='dark'></Spinner>
            <Spinner type='grow' color='info'></Spinner>
            <Spinner size="sm" color="primary"></Spinner>
            <Spinner style={{width: '10em', height: '0.5em'}} color='dark'></Spinner>
            <Spinner style={{width: '10em', height: '10em'}} color='secondary'></Spinner>
            <Spinner style={{width: '2em', height: '10em'}} type='grow' color='primary'></Spinner>
        </div>
    );
};

export default R053_ReactstrapSpinner;