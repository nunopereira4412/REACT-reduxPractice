import * as actionTypes     from '../actions';

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case(actionTypes.INC): 
            return {
                ...state,
                counter: state.counter + 1    
            }
        case(actionTypes.DEC): 
            return {
                ...state,
                counter: state.counter - 1
            }
        case(actionTypes.ADD): 
            return {
                ...state,
                counter: state.counter + action.value
            }
        case(actionTypes.SUB): 
            return {
                ...state,
                counter: state.counter - action.value
            }
        default: 
            return state
    }
};

export default counterReducer; 