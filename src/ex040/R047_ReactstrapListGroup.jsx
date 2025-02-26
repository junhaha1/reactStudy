import React from 'react';
import { Badge, ListGroup, ListGroupItem } from 'reactstrap';

const R047_ReactstrapListGroup = () => {
    return (
        <div>
            <ListGroup>
                <ListGroupItem color='danger'>Badge
                    <Badge pill>200</Badge>
                </ListGroupItem>
                <ListGroupItem disabled tag = "a" herf='#'>Disable</ListGroupItem>
                <ListGroupItem tag = "a" href='http://example.com'>Link</ListGroupItem>
                <ListGroupItem tag = "button" action onClick = {e => alert("button")}>
                    Button
                </ListGroupItem>
            </ListGroup>
        </div>
    );
};

export default R047_ReactstrapListGroup;