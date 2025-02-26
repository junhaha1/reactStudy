import React, { Component } from 'react';
import {Button, UncontrolledCollapse, Card, CardBody} from 'reactstrap';

class R042_reactstrapCollapse extends Component {
    render() {
        return (
            <div>
                <Button color='warning' id='toggle'>
                    펼치기/접기
                </Button>
                <UncontrolledCollapse toggler='#toggle'> 
                    <Card>
                        <CardBody>
                            REACT TEST
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </div>
        );
    }
}

export default R042_reactstrapCollapse;