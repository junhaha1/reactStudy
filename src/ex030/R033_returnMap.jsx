import React, { Component } from 'react';

class R033_returnMap extends Component {
    render() {
        const element_array = ["apple", "banana", "orange"];
        return (
            <ul>
                {element_array.map((val) => <li key={val}>{val}</li>)}
            </ul>
        );
    }
}

export default R033_returnMap;