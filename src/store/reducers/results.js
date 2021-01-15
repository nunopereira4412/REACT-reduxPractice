import * as actionTypes     from '../actions';

const initialState = {
    storedResults: []
}

const resultsReducer = (state = initialState, action) => {
    switch(action.type) {
        case(actionTypes.STORE_RESULT): 
            return {
                ...state,
                storedResults: state.storedResults.concat({id: new Date() + (Math.random()*10), value: action.counter})
            }
        case(actionTypes.DEL): 
            return {
                ...state,
                //filter returns a new array
                storedResults: state.storedResults.filter(res => res.id !== action.idToDel)
            }
        default: 
            return state
    }
};

export default resultsReducer; 