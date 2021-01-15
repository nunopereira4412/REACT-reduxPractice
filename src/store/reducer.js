import * as actionTypes     from '../store/actions';

const initialState = {
    counter: 0, 
    storedResults: []
}

const reducer = (state = initialState, action) => {
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
        case(actionTypes.STORE_RESULT): 
            return {
                ...state,
                storedResults: state.storedResults.concat({id: new Date() + (Math.random()*10), value: state.counter})
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

export default reducer; 