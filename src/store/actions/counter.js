import * as actionTypes     from './actionTypes';

export const inc = () => {
    return {type: actionTypes.INC};
};

export const dec = () => {
    return {type: actionTypes.DEC};
};

export const add = (valueToAdd) => {
    return {type: actionTypes.ADD, value: valueToAdd};
};

export const sub = (valueToSub) => {
    return {type: actionTypes.SUB, value: valueToSub};
};