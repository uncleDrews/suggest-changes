import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import suggestedChangesReducer from "./suggestedChangesReducer";

const rootReducer = combineReducers({
    article: articleReducer,
    suggestedChanges: suggestedChangesReducer
});

export default rootReducer;