import { Component } from "react";

class R017_Props extends Component{
    render(){
        let props_value = this.props.props_val;
        props_value += ' from App.jsx';

        //직접 수정할 수 없다.
        //this.props.props_val += ' from App.jsx';
        return (
            <div>{props_value}</div>
        )
    }
}

export default R017_Props;