import React, { useState} from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

const R055_FunctionTab = () => {
    const [tabState, setTebState] = useState('React');

    const toggle = tabnum => {
        if (tabState != tabnum){
            setTebState(tabnum);
        }
    }; 

    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink onClick={()=>{toggle('React')}}>First Tab</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={()=>{toggle('Java')}}>Second Tab</NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={tabState}>
                <TabPane tabId = "React"><h3>React</h3></TabPane>
                <TabPane tabId = "Java"><h3>Java</h3></TabPane>
            </TabContent>
        </div>
    );
};

export default R055_FunctionTab;