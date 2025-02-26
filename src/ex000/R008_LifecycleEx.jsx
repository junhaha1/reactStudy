import { Component } from "react";

class R008_LifecycleEx extends Component{

    static getDerivedStateFromProps(props, state){
        console.log(`2. getDerivedStateFromProps call: ${props.prop_value}`);
        return {tmp_state: props.prop_value};
    }

    constructor(props) { 
        super(props); 
        this.state = {}; 
        console.log('1. constructor call');
    }

    componentDidMount(){ //화면 렌더링(render() 호출) 이후에 호출되어 사용되는 함수
        console.log('4. componentDidMount call');
        console.log('5. tmp_state: ' + this.state.tmp_state);
        this.setState({tmp_state2: true});
    }

    shouldComponentUpdate(props, state) {
        console.log('6. shouldComponentUpdate call, tmp_state2: ' + state.tmp_state2);
        return state.tmp_state2
    }

    render(){ 
        console.log('3. render call');
        return (
            <h2>[ shouldComponentUpdate FUNCTION ]</h2>
        )
    }
}

export default R008_LifecycleEx;

//순서
//컴포넌트의 상태값이 변경되면 getDerivedStateFromProps가 다시 실행 후에
//shouldComponentUpdate가 실행(boolean타입 리턴)
// true를 리턴할 시에 render() 함수를 다시 호출, false일 경우 render() 호출하지 않음.
//따라서 상태값 변경에 따라 화면을 다시 그려주는 등등의 역할을 할 수 있음. 
