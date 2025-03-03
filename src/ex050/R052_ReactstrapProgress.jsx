import React, { Component } from 'react';
import { Progress } from 'reactstrap';

class R052_ReactstrapProgress extends Component {
    constructor(props){
        super(props);
        this.state = {
            progress: 0
        }
    }

    componentDidMount(){
        this.progress()
    }

    progress = () =>{
        if(this.state.progress !== 99){
            setTimeout(()=>{
                this.setState({progress: this.state.progress + 1});
                this.progress();
            }, 100)
        }
    }

    render() {
        return (
            <div>
                <Progress color="info" value={this.state.progress}>{this.state.progress}%</Progress><br/>
                <Progress multi>
                    <Progress bar color="warning" value="25">25%</Progress>
                    <Progress bar color="success" value="35">react</Progress>
                    <Progress bar value="20">200</Progress>
                    <Progress bar color="danger" value="20">20%</Progress>
                </Progress>
            </div>
        );
    }
}

export default R052_ReactstrapProgress;