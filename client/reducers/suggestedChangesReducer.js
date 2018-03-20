import {SUGGEST_CHANGE, APPROVE_CHANGE_FAILED, APPROVE_CHANGE} from '../actions';

const initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
        case SUGGEST_CHANGE:
            return state;
            break;
        case APPROVE_CHANGE:
            return state;
            break;
        case APPROVE_CHANGE_FAILED:
            return state;
            break;
    }
};