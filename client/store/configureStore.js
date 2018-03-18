import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import rootReducer from '../reducers';

// Note: this API requires redux@>=3.1.0
const store = createStore(
    rootReducer,
    applyMiddleware(reduxPromise)
);

export default store;