const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

//Reducer
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case("INC"): 
            return {
                ...state,
                counter: state.counter + 1
            };
        case("DEC"): 
            return {
                ...state,
                counter: state.counter - 1
            };
        case("ADD"):
            return {
                ...state,
                counter: state.counter + 10
            };
        default: return state;
    }
};

//Store
const store = createStore(rootReducer);
console.log(store.getState());

//Subscription
store.subscribe(() => {
    console.log("[Subscription]", store.getState());
});

//Dispaching action
store.dispatch({type: "INC"});
store.dispatch({type: "ADD", value: 10});

console.log(store.getState());

