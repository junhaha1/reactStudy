import React from 'react'
import Children  from "./ContextChildren";

const {Provider, Consumer} = React.createContext()
export {Consumer}

class R077_ContextApi extends React.Component {
  constructor (props) {
    super(props);
    this.setStateFunc = this.setStateFunc.bind(this)
    }
    setStateFunc(value) {
        this.setState({name : value});
    }

    render () {
        const content = {
            ...this.state, //현재 state에 들어있는 모든 것
            setStateFunc: this.setStateFunc
        }
    return (
            <Provider value={content}>
            <Children />
            </Provider>
        )
    }
}
export default R077_ContextApi