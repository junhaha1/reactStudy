import { Component } from "react";
import datatype from 'porp-types';

class R012_PropsRequired extends Component{
    render(){
        let {ReactString, ReactNumber} = this.props;
        return (
            <div style={{padding: "0px"}}>
                {ReactString}{ReactNumber}
            </div>
        )
    }
}

export default R012_PropsRequired;