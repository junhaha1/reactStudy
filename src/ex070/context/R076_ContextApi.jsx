import React from 'react';
import Children from './ContextChildren';

const {Provider, Consumer} = React.createContext();
//데이터 제공하는거, 데이터를 소비하는거
export {Consumer}

const R076_ContextApi = () => {
    return (
        <div>
            <Provider value='React Study'>
                <Children />
            </Provider>
        </div>
    );
};

export default R076_ContextApi;