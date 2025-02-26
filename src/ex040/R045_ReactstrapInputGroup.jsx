import React, { Component } from 'react';
import { Input, InputGroup, InputGroupText, Button } from 'reactstrap';

class R045_ReactstrapInputGroup extends Component {
    render() {
        return (
            <div>
                <InputGroup>
                    <Input placeholder='userid'></Input>
                    <InputGroupText>@mail.com</InputGroupText>
                </InputGroup>
                <InputGroup>
                    <Button>버튼</Button>
                    <Input></Input>
                </InputGroup>
            </div>
        );
    }
}

export default R045_ReactstrapInputGroup;