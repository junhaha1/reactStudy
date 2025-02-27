import React from 'react';
import { Consumer } from './R077_FunctionContextApi';

const ContextChildren = () => {
    return (
        <Consumer>
            {contextValue => 
                <button onClick={e=>contextValue.setStateFunc('ReactClass')}>
                    {contextValue.name}_button
                </button>
            }
        </Consumer>
    );
};

export default ContextChildren;
