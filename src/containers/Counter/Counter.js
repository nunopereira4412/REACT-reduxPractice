import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import {connect}            from 'react-redux';
import * as actionTypes     from '../../store/actions';

class Counter extends Component {

    render () {
        const storedResults = this.props.storedResults.map((res) => (
           <li 
                key={res.id} 
                onClick={() => this.props.delValue(res.id)} 
            >
                {res.value}
            </li> 
        ));

        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.incCounter} />
                <CounterControl label="Decrement" clicked={this.props.decCounter}  />
                <CounterControl label="Add 5" clicked={this.props.addValueToCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.subValueToCounter}  />
                <hr/>
                <button onClick={() => this.props.storeResult(this.props.counter)}>Store Result</button>
                <ul>
                    {storedResults}
                </ul>
            </div>
        );
    }
}

//get the state from the store as props
const mapStateToProps = state => {
    return {
        counter: state.ctr.counter,
        storedResults: state.res.storedResults
    }
};

//dispatch actions
const mapDispatchToProps = dispatch => {
    return {
        incCounter:        () => dispatch({type: actionTypes.INC}),
        decCounter:        () => dispatch({type: actionTypes.DEC}),
        addValueToCounter: () => dispatch({type: actionTypes.ADD, value: 5}),
        subValueToCounter: () => dispatch({type: actionTypes.SUB, value: 5}),
        storeResult:       (counter) => dispatch({type: actionTypes.STORE_RESULT, counter: counter}),
        delValue:          (id) => dispatch({type: actionTypes.DEL, idToDel: id})
    }
};

//if i have a container that only needs to dispatch actions null can be assigned to the 1st argument
export default connect(mapStateToProps, mapDispatchToProps)(Counter);