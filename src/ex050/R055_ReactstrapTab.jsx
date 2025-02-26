import React, { Component } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

class R055_ReactstrapTab extends Component {
    constructor(props){
        super(props);
        this.state = {tabState: 'React'};
    }

    toggle = tabnum => {
        if(this.state.tabState != tabnum){
            this.setState({tabState: tabnum});
        }
    }
    render() {
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink onClick={()=>{this.toggle('React')}}>First Tab</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={()=>{this.toggle('Java')}}>Second Tab</NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.tabState}>
                    <TabPane tabId = "React"><h3>React</h3></TabPane>
                    <TabPane tabId = "Java"><h3>Java</h3></TabPane>
                </TabContent>
            </div>
        );
    }
}

export default R055_ReactstrapTab;