import React, { Component } from 'react';
import {Alert, UncontrolledAlert} from 'reactstrap'

class R034_ReactstrapAlert extends Component {
    render() {
        return (
            <div>
                <Alert color='success'>
                    Simple Alert [color: success]
                </Alert>
                <UncontrolledAlert color='info'>
                    Uncontrolled Alert [color: warning]
                </UncontrolledAlert>
            </div>
        );
    }
}

//primary, secondary, success, danger, warning, info, light, dark
export default R034_ReactstrapAlert;