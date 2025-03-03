import { Component } from "react";
import datatype from 'prop-types';

class R018_PropsDataType extends Component{
    render() {
        let { String, Number, Boolean, Array, ObjectJson, Function } = this.props;
        return (
          <div style={{ padding: "0px" }}>
            <p>StringProps: {String}</p>
            <p>NumberProps: {Number}</p>
            <span>BooleanProps: {Boolean.toString()}</span>
            <p>ArrayProps: {Array.toString()}</p>
            <p>ObjectJsonProps: {JSON.stringify(ObjectJson)}</p>
            <p>FunctionProps: {Function}</p>
          </div>
        );
    }
}

// props 값들 각각에 대한 자료형을 선언하는 부분
R018_PropsDataType.propTypes = {
    String: datatype.number,
    Number: datatype.number,
    Boolean: datatype.bool,
    Array: datatype.array,
    ObjectJson: datatype.object,
    Function: datatype.func,
}

export default R018_PropsDataType;