import { createStore } from 'redux';
import { defaultSate } from '../../server/defaultState';


export const store = createStore(
    function reducer(state = defaultSate,action){
        return state;
    }
)