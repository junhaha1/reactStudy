import { Component } from "react";

class R005_LifecycleEx extends Component{

    constructor(props) { //가장 먼저 호출되는 함수
        super(props); //부모 컴포넌트에서 props를 전달 받음.
        this.state = {}; //기본 상태값
        console.log('1. constructor call');
    }

    render(){ 
        console.log('3. render call');
        return (
            <h2>[ CONSTRUCTOR FUNCTION ]</h2>
        )
    }
}

export default R005_LifecycleEx;

//순서
//constructor - render