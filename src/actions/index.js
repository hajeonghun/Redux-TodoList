import * as types from './ActionTypes';

export function todoAdd(text) {
    return {
        type: types.TODOADD,
        text,
        check: false,
    };
}

export function todoChk(id) {
    return {
        type: types.TODOCHK,
        id        
    };
}

export function todoDel(id) {
    return {
        type: types.TODODEL,
        id
    };
}