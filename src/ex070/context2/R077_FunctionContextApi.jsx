import React, {useState} from 'react';
import Children  from "./ContextChildren";

const {Provider, Consumer} = React.createContext()
export {Consumer}

const R077_FunctionContextApi = () => {
    const [name, setName] = useState('');
    const setStateFunc = (value) =>{
        setName(value);
    }

    const content = {
        name: name,
        setStateFunc: setStateFunc,
    }

    return (
        <Provider value={content}>
            <Children />
        </Provider>
    );
};

export default R077_FunctionContextApi;