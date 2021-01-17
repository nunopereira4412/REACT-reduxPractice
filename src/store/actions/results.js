import * as actionTypes from './actionTypes';

export const saveResult = (res) => {
    return {type: actionTypes.STORE_RESULT, result: res};
} 

export const storeResult = (resToStore) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(resToStore));
        }, 2000);
    };
};

export const del = (idToDel) => {
    return {type: actionTypes.DEL, id: idToDel};
};