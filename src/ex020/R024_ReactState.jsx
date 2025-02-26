import {Component} from "react";

class R024_ReactState extends Component{
    constructor(props){
        super(props);
        this.state = { //글로벌하게 접근할 수 있게 => 전역변수처럼 사용됨.  
            StateString: this.props.R024_reactString,
            Statenumber: 200,
        }
    }
    render(){
        return(
            <div style={{padding: "0px"}}>
                {this.state.StateString}{this.state.Statenumber}
            </div>
        );
    }
}

export default R024_ReactState;