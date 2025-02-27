import React from 'react';
import { Consumer } from './R076_ContextApi';

const ContextChildren2 = () => {
    return (
        <Consumer>
            {contextValue => <h2>{`contextValue: ${contextValue}`}</h2>}
        </Consumer>
    );
};

export default ContextChildren2;