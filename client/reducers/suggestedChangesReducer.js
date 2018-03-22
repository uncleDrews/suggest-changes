import {
    SUGGEST_CHANGE, APPROVE_CHANGE_FAILED, APPROVE_CHANGE, SUGGESTED_CHANGES_FETCHED,
    DELETE_SUGGESTIONS
} from '../actions';
const initialState = [];

export default function (state = initialState, action) {
    switch (action.type) {
        case SUGGESTED_CHANGES_FETCHED:
           return action.payload;
        case SUGGEST_CHANGE:
            alert('Suggestion Saved!');
            return [...state,action.payload];
        case APPROVE_CHANGE:
            if(action.error) {
                alert('Something wrong just happend!');
                return state;
            } else {
                alert('Officially approved by mighty reducer!');
                return state.filter((suggestion) => suggestion._id !== action.payload._id);
            }
        case DELETE_SUGGESTIONS:
            if(action.error){
                alert('Something wrong just happend!');
                return state;
            } else return state.filter(
                suggestion => !Boolean(action.payload.removed.find(
                    removedId=> removedId === suggestion._id)));
        default:
            return state;
    }
};