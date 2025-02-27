import {ACT} from '../actions/';
import { combineReducers } from 'redux';

const initState = {
    strInStore: 'Hello',
}

//reduser함수
const data = (state = initState, action) => {
    switch (action.type){
        case ACT:
            return {strInStore: state.strInStore + ', world'};
        default:
            return state;
    }
};

const Reducer = combineReducers({ //여러개의 reduser 함수들을 하나로 만들어줌
    data
});

export default Reducer;