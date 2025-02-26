import React from 'react';
import {Badge, Button} from 'reactstrap';

function R035_Badge(props) {
    return (
        <div className="d-flex justify-content-around">
            <Button color="primary" outline>
                Notifications <Badge color="secondary">7</Badge>
            </Button>
            <Button color="secondary" outline>
                Notifications <Badge color="secondary">11</Badge>
            </Button>
            <Button color="success" outline>
                Notifications <Badge color="secondary">2</Badge>
            </Button>
            <Button color="danger" outline>
                Notifications <Badge color="secondary">4</Badge>
            </Button>
            <Button color="warning" outline>
                Notifications <Badge color="secondary">3</Badge>
            </Button>
            <Button color="info" outline>
                Notifications <Badge color="secondary">7</Badge>
            </Button>
            <Button color="light" outline>
                Notifications <Badge color="secondary">0</Badge>
            </Button>
        </div>
    );
}

export default R035_Badge;