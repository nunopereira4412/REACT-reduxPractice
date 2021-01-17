import './index.css';
import React                 from 'react';
import ReactDOM              from 'react-dom';
import App                   from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider}            from 'react-redux';
import counterReducer        from './store/reducers/counter';
import resultsReducer        from './store/reducers/results';
import thunk                 from 'redux-thunk';
import {
        createStore, 
        combineReducers, 
        applyMiddleware, 
        compose}             from 'redux';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultsReducer
})

const logger = store => {
    return next => {
        return action => {
            console.log(["Middleware] Dispatching", action]);
            const result = next(action);
            console.log("[Middleware] Next state", store.getState());
            return result;
        }
    }
}

//if the 1st part cant be found it will pick the 2nd
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
