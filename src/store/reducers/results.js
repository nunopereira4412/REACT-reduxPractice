import * as actionTypes from '../actions/actionTypes';
import {updateObject}   from '../utility';

const initialState = {
    storedResults: []
}

const deleteResult = (state, action) => {
    const updatedStoredResults = state.storedResults.filter(res => res.id !== action.id);
    return updateObject(state, {storedResults: updatedStoredResults});
}

const resultsReducer = (state = initialState, action) => {
    switch(action.type) {
        case(actionTypes.STORE_RESULT): return updateObject(state, {storedResults: state.storedResults.concat({id: new Date() + (Math.random()*10), value: action.result})});
        case(actionTypes.DEL)         : return deleteResult(state, action);
        default                       : return state;
    }
};

export default resultsReducer; 