import { Component } from "react";

class R025_SetState extends Component{
    constructor(props){
        super(props);
        this.state = {
            StateString: 'react',
        }
    }

    StateChange = (flag) =>{
        if (flag == 'direct'){
            this.state.StateString = '리액트';
            //this.setState({StateString: 'react'});
        }
        if(flag == 'setState'){
            this.setState({StateString: '리액트'});
        }
    }

    render(){
        return(
            <div style={{padding: "0px"}}>
                <button onClick={(e)=> this.StateChange('direct', e)}>state 직접변경</button>
                <button onClick={(e)=> this.StateChange('setState', e)}>setState로 변경</button>
                [state 변경하기] StateString : {this.state.StateString}
            </div>
        );
    }
}

export default R025_SetState;